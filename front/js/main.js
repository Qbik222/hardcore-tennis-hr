(function () {

    const apiURL = 'https://fav-prom.com/api_hardcore_tennis'

    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.play-btn'),
        loader = document.querySelector(".spinner-overlay")

    const hrLeng = document.querySelector('#hrLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let locale = "en"

    let loaderBtn = false

    if (hrLeng) locale = 'hr';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = false;
    let userId = 100300268;

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
                console.error('API request failed:', err);
                //
                // reportError(err);
                //
                // document.querySelector('.fav-page').style.display = 'none';
                // if (window.location.href.startsWith("https://www.favbet.hr/")) {
                //     window.location.href = '/promocije/promocija/stub/';
                // } else {
                //     window.location.href = '/promos/promo/stub/';
                // }

                return Promise.reject(err);
            });

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 50;
        const attemptInterval = 200;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            // сюди всі функції які відповідають за рендер ui промки
            checkUserAuth();
            participateBtns.forEach(btn => btn.addEventListener('click', participate));
        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return fetch(`${apiURL}/new-translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();

                var mutationObserver = new MutationObserver(function (mutations) {
                    const shouldSkip = mutations.every(mutation => {
                        return mutation.target.closest('.game-container');
                    });

                    if (shouldSkip) return;

                    translate();
                });
                mutationObserver.observe(document.getElementById("hardcoreTennis"), {
                    childList: true,
                    subtree: true
                });

            });
    }

    // loadTranslations().then(init)

    function checkUserAuth() {
        let loadTime = 200;
        setTimeout(() =>{
            if (userId) {
                for (const unauthMes of unauthMsgs) {
                    unauthMes.classList.add('hide');
                }
                return request(`/favuser/${userId}?nocache=1`)
                    .then(res => {
                        if (res.userid) {
                            participateBtns.forEach(item => item.classList.add('hide'));
                            redirectBtns.forEach(item => item.classList.remove('hide'));
                        } else {
                            participateBtns.forEach(item => item.classList.remove('hide'));
                            redirectBtns.forEach(item => item.classList.add('hide'));
                        }
                        hideLoader()
                    })
            } else {
                for (let redirectBtn of redirectBtns) {
                    redirectBtn.classList.add('hide');
                }
                for (let participateBtn of participateBtns) {
                    participateBtn.classList.add('hide');
                }
                for (const unauthMes of unauthMsgs) {
                    unauthMes.classList.remove('hide');
                }
                hideLoader()
                return Promise.resolve(false);
            }
        }, loadTime)
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                loaderBtn = true
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                }, 1000)

            });
    }

    function reportError(err) {
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass();
    }

    function refreshLocalizedClass(element, baseCssClass) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    function translateKey(key, defaultVal) {
        if (!key) {
            return;
        }
        return i18nData[key] || defaultVal || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
    }

    document.querySelectorAll('.confetti').forEach(el => {
        const delay = (Math.random() * 2.5).toFixed(2);
        el.style.setProperty('--delay', delay);
    });


    // game animation

    const ship = document.querySelector('.ship');
    const rows = [...document.querySelectorAll('.targetRow')];
    let gameOver = false;
    let movingInterval = null;

    function getShipX() {
        return ship.getBoundingClientRect().left + ship.offsetWidth / 2;
    }

    function getClosestTargetColIndex() {
        const row = rows[0];
        const targets = [...row.querySelectorAll('.target')];
        const shipX = getShipX();

        let closestIndex = 0;
        let closestDist = Infinity;
        targets.forEach((target, i) => {
            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const dist = Math.abs(centerX - shipX);
            if (dist < closestDist) {
                closestDist = dist;
                closestIndex = i;
            }
        });
        return closestIndex;
    }

    function findFirstVisibleTargetInColumn(colIndex) {
        for (let i = rows.length - 1; i >= 0; i--) {
            const target = rows[i].querySelectorAll('.target')[colIndex];
            if (!target.classList.contains('hideTarget')) {
                return target;
            }
        }
        return null;
    }

    function shoot() {
        stopShip();

        const colIndex = getClosestTargetColIndex();
        const target = findFirstVisibleTargetInColumn(colIndex);
        if (!target) return resumeShip();

        const bullet = document.createElement('div');
        bullet.className = 'bullet';
        const shipRect = ship.getBoundingClientRect();
        const containerRect = document.querySelector('.game-container').getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        bullet.style.left = `${shipRect.left + ship.offsetWidth / 2 - containerRect.left - 1}px`;
        bullet.style.bottom = `${containerRect.bottom - shipRect.top}px`;
        bullet.style.height = `${(10 + Math.random() * 20)}px`;

        document.querySelector('.game-container').appendChild(bullet);

        const distance = shipRect.top - targetRect.top;
        const duration = 500;

        bullet.animate(
            [{ transform: 'translateY(0)' }, { transform: `translateY(-${distance}px)` }],
            { duration, easing: 'linear' }
        );

        setTimeout(() => {
            bullet.remove();
            target.classList.add('hideTarget');
            checkGameOver();
            resumeShip();
        }, duration);
    }

    function checkGameOver() {
        const firstRow = rows[0];
        const anyHit = [...firstRow.querySelectorAll('.target')].some(t =>
            t.classList.contains('hideTarget')
        );

        if (anyHit) {
            gameOver = true;
            document.querySelector(".game-container").insertAdjacentHTML('beforeend', '<div class="game-over">YOU WON</div>');
            setTimeout(restartGame, 5000);
        }
    }

    function restartGame() {
        document.querySelectorAll('.target.hideTarget').forEach(t => t.classList.remove('hideTarget'));
        document.querySelector('.game-over')?.remove();
        gameOver = false;
        moveShip();
    }

    function moveShip() {
        if (gameOver) return;
        const container = document.querySelector('.game-container');
        const maxX = container.offsetWidth - ship.offsetWidth;
        let direction = Math.random() > 0.5 ? 1 : -1;
        let x = ship.offsetLeft;

        movingInterval = setInterval(() => {
            if (gameOver) return clearInterval(movingInterval);

            x += direction * 3;
            if (x <= 0 || x >= maxX) {
                direction *= -1;
                x = Math.max(0, Math.min(x, maxX));
            }
            ship.style.left = `${x}px`;

            if (Math.random() < 0.01) shoot();
        }, 20);
    }

    function stopShip() {
        clearInterval(movingInterval);
    }

    function resumeShip() {
        setTimeout(moveShip, 200);
    }

    moveShip();


    loadTranslations().then(init)

})();
