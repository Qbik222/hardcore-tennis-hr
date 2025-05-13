(function () {

    const apiURL = 'https://fav-prom.com/api_hardcore_tennis'

    const getActiveWeek = (promoStartDate, weekDuration) => {
        const currentDate = new Date();
        let weekDates = [];

        const Day = 24 * 60 * 60 * 1000;
        const Week = weekDuration * Day;

        const formatDate = (date) =>
            `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`;

        const calculateWeekPeriod = (weekIndex) => {
            const baseStart = promoStartDate.getTime();
            const start = new Date(baseStart + weekIndex * Week);
            let end = new Date(start.getTime() + (weekDuration * Day - 1));
            return { start, end };
        };

        let activeWeekIndex = null;

        // Перевірка поточного тижня
        for (let i = 0; i < 10; i++) { // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
            const { start, end } = calculateWeekPeriod(i);
            if (currentDate >= start && currentDate <= end) {
                activeWeekIndex = i + 1;
                break;
            }
        }

        return activeWeekIndex;
    };

    const promoStartDate = new Date("2025-05-05T00:00:00");
    const weekDuration = 10;

    const activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;


    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.play-btn'),
        loader = document.querySelector(".spinner-overlay"),
        resultsTable = document.querySelector('#table'),
        resultsTableOther = document.querySelector('#tableOther'),
        tableTabs = document.querySelectorAll('.table__tabs-item')

    const hrLeng = document.querySelector('#hrLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let locale = sessionStorage.getItem("locale") || "en"

    let loaderBtn = false

    if (hrLeng) locale = 'hr';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;
    let userId = Number(sessionStorage.getItem("userId")) ?? null
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

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

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
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth();
            moveShip();
            animateMarquee(document.querySelector(".marquee"))
            renderUsers(activeWeek)
            participateBtns.forEach(btn => btn.addEventListener('click', participate));

            document.addEventListener("click", e =>{
               if(e.target.closest(".table__tabs-item")){
                   tableTabs.forEach(tab =>{
                       tab.classList.remove("active");
                   })
                   let tabWeek = e.target.closest(".table__tabs-item").getAttribute("data-week");
                   e.target.closest(".table__tabs-item").classList.add("active");
                   renderUsers(tabWeek)
               }
            })

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
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
                var mutationObserver = new MutationObserver(function (mutations) {
                    const shouldSkip = mutations.every(mutation => {
                        return mutation.target.closest('.game-container') || mutation.target.closest('.table');
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
                    toggleClasses(participateBtns, "loader")
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
                    console.log("key")
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

    function renderUsers(week) {
        request(`/users/${week}`)
            .then(data => {
                const users = data;
                populateUsersTable(users, userId, week);
            });
    }

    function populateUsersTable(users, currentUserId, week) {
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;
        const currentUser = users.find(user => user.userid === currentUserId);
        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);

        const topUsersLength = !userId || isTopCurrentUser  ? 13 : 10;

        const topUsers = users.slice(0, topUsersLength);

        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${userData.points}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 5) return `prize_${place}`;
        if (place <= 10 && place >= 6) return `prize_6-10`;
        if (place <= 20 && place >= 11) return `prize_11-20`;
        if (place <= 30 && place >= 21) return `prize_21-30`;
    }

    function animateMarquee(element) {
        let start = null;
        const duration = 30000;
        const distancePx = -element.offsetWidth * 0.3; // 30% від ширини елемента

        function step(timestamp) {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            const progress = Math.min(elapsed / duration, 1);
            const translateX = progress * distancePx;

            element.style.transform = `translateX(${translateX}px)`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                start = null;
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    loadTranslations().then(init)


    // TEST
    document.querySelector('.dark-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "hr");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "11111222")
        }
        window.location.reload()
    });

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });

})();
