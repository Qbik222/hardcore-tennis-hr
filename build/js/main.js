"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (_Number) {
  var apiURL = 'https://fav-prom.com/api_hardcore_tennis';
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-05-05T00:00:00");
  var weekDuration = 10;
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther'),
    tableTabs = document.querySelectorAll('.table__tabs-item');
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var locale = sessionStorage.getItem("locale") || "en";
  var loaderBtn = false;
  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
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
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth();
              moveShip();
              animateMarquee(document.querySelector(".marquee"));
              renderUsers(activeWeek);
              participateBtns.forEach(function (btn) {
                return btn.addEventListener('click', participate);
              });
              document.addEventListener("click", function (e) {
                if (e.target.closest(".table__tabs-item")) {
                  tableTabs.forEach(function (tab) {
                    tab.classList.remove("active");
                  });
                  var tabWeek = e.target.closest(".table__tabs-item").getAttribute("data-week");
                  e.target.closest(".table__tabs-item").classList.add("active");
                  renderUsers(tabWeek);
                }
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        var shouldSkip = mutations.every(function (mutation) {
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
    var loadTime = 200;
    setTimeout(function () {
      if (userId) {
        var _iterator = _createForOfIteratorHelper(unauthMsgs),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var unauthMes = _step.value;
            unauthMes.classList.add('hide');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
          if (res.userid) {
            participateBtns.forEach(function (item) {
              return item.classList.add('hide');
            });
            redirectBtns.forEach(function (item) {
              return item.classList.remove('hide');
            });
          } else {
            participateBtns.forEach(function (item) {
              return item.classList.remove('hide');
            });
            redirectBtns.forEach(function (item) {
              return item.classList.add('hide');
            });
          }
          hideLoader();
        });
      } else {
        var _iterator2 = _createForOfIteratorHelper(redirectBtns),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var redirectBtn = _step2.value;
            redirectBtn.classList.add('hide');
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(participateBtns),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var participateBtn = _step3.value;
            participateBtn.classList.add('hide');
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _unauthMes = _step4.value;
            _unauthMes.classList.remove('hide');
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        hideLoader();
        return Promise.resolve(false);
      }
    }, loadTime);
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
      }, 1000);
    });
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          console.log("key");
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
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
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  document.querySelectorAll('.confetti').forEach(function (el) {
    var delay = (Math.random() * 2.5).toFixed(2);
    el.style.setProperty('--delay', delay);
  });

  // game animation

  var ship = document.querySelector('.ship');
  var rows = _toConsumableArray(document.querySelectorAll('.targetRow'));
  var gameOver = false;
  var movingInterval = null;
  function getShipX() {
    return ship.getBoundingClientRect().left + ship.offsetWidth / 2;
  }
  function getClosestTargetColIndex() {
    var row = rows[0];
    var targets = _toConsumableArray(row.querySelectorAll('.target'));
    var shipX = getShipX();
    var closestIndex = 0;
    var closestDist = Infinity;
    targets.forEach(function (target, i) {
      var rect = target.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var dist = Math.abs(centerX - shipX);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });
    return closestIndex;
  }
  function findFirstVisibleTargetInColumn(colIndex) {
    for (var i = rows.length - 1; i >= 0; i--) {
      var target = rows[i].querySelectorAll('.target')[colIndex];
      if (!target.classList.contains('hideTarget')) {
        return target;
      }
    }
    return null;
  }
  function shoot() {
    stopShip();
    var colIndex = getClosestTargetColIndex();
    var target = findFirstVisibleTargetInColumn(colIndex);
    if (!target) return resumeShip();
    var bullet = document.createElement('div');
    bullet.className = 'bullet';
    var shipRect = ship.getBoundingClientRect();
    var containerRect = document.querySelector('.game-container').getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    bullet.style.left = "".concat(shipRect.left + ship.offsetWidth / 2 - containerRect.left - 1, "px");
    bullet.style.bottom = "".concat(containerRect.bottom - shipRect.top, "px");
    bullet.style.height = "".concat(10 + Math.random() * 20, "px");
    document.querySelector('.game-container').appendChild(bullet);
    var distance = shipRect.top - targetRect.top;
    var duration = 500;
    bullet.animate([{
      transform: 'translateY(0)'
    }, {
      transform: "translateY(-".concat(distance, "px)")
    }], {
      duration: duration,
      easing: 'linear'
    });
    setTimeout(function () {
      bullet.remove();
      target.classList.add('hideTarget');
      checkGameOver();
      resumeShip();
    }, duration);
  }
  function checkGameOver() {
    var firstRow = rows[0];
    var anyHit = _toConsumableArray(firstRow.querySelectorAll('.target')).some(function (t) {
      return t.classList.contains('hideTarget');
    });
    if (anyHit) {
      gameOver = true;
      document.querySelector(".game-container").insertAdjacentHTML('beforeend', '<div class="game-over">YOU WON</div>');
      setTimeout(restartGame, 5000);
    }
  }
  function restartGame() {
    var _document$querySelect;
    document.querySelectorAll('.target.hideTarget').forEach(function (t) {
      return t.classList.remove('hideTarget');
    });
    (_document$querySelect = document.querySelector('.game-over')) === null || _document$querySelect === void 0 || _document$querySelect.remove();
    gameOver = false;
    moveShip();
  }
  function moveShip() {
    if (gameOver) return;
    var container = document.querySelector('.game-container');
    var maxX = container.offsetWidth - ship.offsetWidth;
    var direction = Math.random() > 0.5 ? 1 : -1;
    var x = ship.offsetLeft;
    movingInterval = setInterval(function () {
      if (gameOver) return clearInterval(movingInterval);
      x += direction * 3;
      if (x <= 0 || x >= maxX) {
        direction *= -1;
        x = Math.max(0, Math.min(x, maxX));
      }
      ship.style.left = "".concat(x, "px");
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
    request("/users/".concat(week)).then(function (data) {
      var users = data;
      populateUsersTable(users, userId, week);
    });
  }
  function populateUsersTable(users, currentUserId, week) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var currentUser = users.find(function (user) {
      return user.userid === currentUserId;
    });
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 5) return "prize_".concat(place);
    if (place <= 10 && place >= 6) return "prize_6-10";
    if (place <= 20 && place >= 11) return "prize_11-20";
    if (place <= 30 && place >= 21) return "prize_21-30";
  }
  function animateMarquee(element) {
    var distancePx = -element.offsetWidth * 0.3;
    element.animate([{
      transform: 'translateX(0)'
    }, {
      transform: "translateX(".concat(distancePx, "px)")
    }], {
      duration: 100000,
      easing: 'linear',
      iterations: Infinity
    });
  }

  // function animateMarquee(element) {
  //     let start = null;
  //     const duration = 30000;
  //     const distancePx = -element.offsetWidth * 0.3; // 30% від ширини елемента
  //
  //     function step(timestamp) {
  //         if (!start) start = timestamp;
  //         const elapsed = timestamp - start;
  //
  //         const progress = Math.min(elapsed / duration, 1);
  //         const translateX = progress * distancePx;
  //
  //         element.style.transform = `translateX(${translateX}px)`;
  //
  //         if (progress < 1) {
  //             requestAnimationFrame(step);
  //         } else {
  //             start = null;
  //             requestAnimationFrame(step);
  //         }
  //     }
  //
  //     requestAnimationFrame(step);
  // }

  loadTranslations().then(init);

  // TEST
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "hr");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "11111222");
    }
    window.location.reload();
  });
  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect2;
    (_document$querySelect2 = document.querySelector(".menu-btn")) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener("click", function () {
      var _document$querySelect3;
      (_document$querySelect3 = document.querySelector(".menu-test")) === null || _document$querySelect3 === void 0 || _document$querySelect3.classList.toggle("hide");
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsInRvU3RyaW5nIiwidGVzdCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX051bWJlciIsImFwaVVSTCIsImdldEFjdGl2ZVdlZWsiLCJwcm9tb1N0YXJ0RGF0ZSIsIndlZWtEdXJhdGlvbiIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIndlZWtEYXRlcyIsIkRheSIsIldlZWsiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImNvbmNhdCIsImdldERhdGUiLCJwYWRTdGFydCIsImdldE1vbnRoIiwiY2FsY3VsYXRlV2Vla1BlcmlvZCIsIndlZWtJbmRleCIsImJhc2VTdGFydCIsImdldFRpbWUiLCJzdGFydCIsImVuZCIsImFjdGl2ZVdlZWtJbmRleCIsIl9jYWxjdWxhdGVXZWVrUGVyaW9kIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkZXJCdG4iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsIl9pbml0IiwiX2NhbGxlZSIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwid2FpdEZvclVzZXJJZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfcXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJtb3ZlU2hpcCIsImFuaW1hdGVNYXJxdWVlIiwicmVuZGVyVXNlcnMiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGFiIiwidGFiV2VlayIsImdldEF0dHJpYnV0ZSIsIl90cnlEZXRlY3RVc2VySWQiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsInNob3VsZFNraXAiLCJldmVyeSIsIm11dGF0aW9uIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsIl9pdGVyYXRvciIsIl9zdGVwIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyZWRpcmVjdEJ0biIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJwYXJ0aWNpcGF0ZUJ0biIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwic3RhY2siLCJ3YXJuIiwiZWxlbXMiLCJlbGVtIiwibG9nIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsIl9pIiwiX2FyciIsImxhbmciLCJkZWxheSIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwic2V0UHJvcGVydHkiLCJzaGlwIiwicm93cyIsImdhbWVPdmVyIiwibW92aW5nSW50ZXJ2YWwiLCJnZXRTaGlwWCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsImdldENsb3Nlc3RUYXJnZXRDb2xJbmRleCIsInJvdyIsInRhcmdldHMiLCJzaGlwWCIsImNsb3Nlc3RJbmRleCIsImNsb3Nlc3REaXN0IiwiSW5maW5pdHkiLCJyZWN0IiwiY2VudGVyWCIsIndpZHRoIiwiZGlzdCIsImFicyIsImZpbmRGaXJzdFZpc2libGVUYXJnZXRJbkNvbHVtbiIsImNvbEluZGV4IiwiY29udGFpbnMiLCJzaG9vdCIsInN0b3BTaGlwIiwicmVzdW1lU2hpcCIsImJ1bGxldCIsImNyZWF0ZUVsZW1lbnQiLCJzaGlwUmVjdCIsImNvbnRhaW5lclJlY3QiLCJ0YXJnZXRSZWN0IiwiYm90dG9tIiwidG9wIiwiaGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsImVhc2luZyIsImNoZWNrR2FtZU92ZXIiLCJmaXJzdFJvdyIsImFueUhpdCIsInNvbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJyZXN0YXJ0R2FtZSIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsImNvbnRhaW5lciIsIm1heFgiLCJkaXJlY3Rpb24iLCJ4Iiwib2Zmc2V0TGVmdCIsIm1heCIsIm1pbiIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJfb3B0aW9ucyRoaWdobGlnaHQiLCJoaWdobGlnaHQiLCJfb3B0aW9ucyRuZWlnaGJvciIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJkaXN0YW5jZVB4IiwiaXRlcmF0aW9ucyIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJ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QUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLE1BQUk7TUFDRGpOLGNBQWMsQ0FBQ2tOLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ2hEO0lBQ0E3TCxNQUFNLENBQUNDLFFBQVEsQ0FBQzZMLE1BQU0sQ0FBQyxDQUFDO0VBQzVCLENBQUMsQ0FBQztFQUVGNU8sUUFBUSxDQUFDd0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtJQUFBLElBQUFzSyxzQkFBQTtJQUNoRCxDQUFBQSxzQkFBQSxHQUFBOU8sUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLGNBQUE2TyxzQkFBQSxlQUFuQ0Esc0JBQUEsQ0FBcUN0SyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUFBLElBQUF1SyxzQkFBQTtNQUNqRSxDQUFBQSxzQkFBQSxHQUFBL08sUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLGNBQUE4TyxzQkFBQSxlQUFwQ0Esc0JBQUEsQ0FBc0MvTixTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEUsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBRU4sQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2hhcmRjb3JlX3Rlbm5pcydcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbiAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZVdlZWtQZXJpb2QgPSAod2Vla0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlU3RhcnQgPSBwcm9tb1N0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGJhc2VTdGFydCArIHdlZWtJbmRleCAqIFdlZWspO1xuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICh3ZWVrRHVyYXRpb24gKiBEYXkgLSAxKSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbW9TdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDUtMDVUMDA6MDA6MDBcIik7XG4gICAgY29uc3Qgd2Vla0R1cmF0aW9uID0gMTA7XG5cbiAgICBjb25zdCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpLFxuICAgICAgICB0YWJsZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtaXRlbScpXG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiZW5cIlxuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgbW92ZVNoaXAoKTtcbiAgICAgICAgICAgIGFuaW1hdGVNYXJxdWVlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFycXVlZVwiKSlcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWspXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcCA9IG11dGF0aW9ucy5ldmVyeShtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXV0YXRpb24udGFyZ2V0LmNsb3Nlc3QoJy5nYW1lLWNvbnRhaW5lcicpIHx8IG11dGF0aW9uLnRhcmdldC5jbG9zZXN0KCcudGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTa2lwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBsZXQgbG9hZFRpbWUgPSAyMDA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBsb2FkVGltZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleVwiKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcblxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uZmV0dGknKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSAoTWF0aC5yYW5kb20oKSAqIDIuNSkudG9GaXhlZCgyKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tZGVsYXknLCBkZWxheSk7XG4gICAgfSk7XG5cblxuICAgIC8vIGdhbWUgYW5pbWF0aW9uXG5cbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAnKTtcbiAgICBjb25zdCByb3dzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXRSb3cnKV07XG4gICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IG1vdmluZ0ludGVydmFsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGdldFNoaXBYKCkge1xuICAgICAgICByZXR1cm4gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgc2hpcC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdFRhcmdldENvbEluZGV4KCkge1xuICAgICAgICBjb25zdCByb3cgPSByb3dzWzBdO1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gWy4uLnJvdy5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0JyldO1xuICAgICAgICBjb25zdCBzaGlwWCA9IGdldFNoaXBYKCk7XG5cbiAgICAgICAgbGV0IGNsb3Nlc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBjbG9zZXN0RGlzdCA9IEluZmluaXR5O1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhjZW50ZXJYIC0gc2hpcFgpO1xuICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICBjbG9zZXN0SW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RJbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kRmlyc3RWaXNpYmxlVGFyZ2V0SW5Db2x1bW4oY29sSW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvd3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHJvd3NbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldCcpW2NvbEluZGV4XTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGlkZVRhcmdldCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG9vdCgpIHtcbiAgICAgICAgc3RvcFNoaXAoKTtcblxuICAgICAgICBjb25zdCBjb2xJbmRleCA9IGdldENsb3Nlc3RUYXJnZXRDb2xJbmRleCgpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBmaW5kRmlyc3RWaXNpYmxlVGFyZ2V0SW5Db2x1bW4oY29sSW5kZXgpO1xuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuIHJlc3VtZVNoaXAoKTtcblxuICAgICAgICBjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVsbGV0LmNsYXNzTmFtZSA9ICdidWxsZXQnO1xuICAgICAgICBjb25zdCBzaGlwUmVjdCA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBidWxsZXQuc3R5bGUubGVmdCA9IGAke3NoaXBSZWN0LmxlZnQgKyBzaGlwLm9mZnNldFdpZHRoIC8gMiAtIGNvbnRhaW5lclJlY3QubGVmdCAtIDF9cHhgO1xuICAgICAgICBidWxsZXQuc3R5bGUuYm90dG9tID0gYCR7Y29udGFpbmVyUmVjdC5ib3R0b20gLSBzaGlwUmVjdC50b3B9cHhgO1xuICAgICAgICBidWxsZXQuc3R5bGUuaGVpZ2h0ID0gYCR7KDEwICsgTWF0aC5yYW5kb20oKSAqIDIwKX1weGA7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoYnVsbGV0KTtcblxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHNoaXBSZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDUwMDtcblxuICAgICAgICBidWxsZXQuYW5pbWF0ZShcbiAgICAgICAgICAgIFt7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtkaXN0YW5jZX1weClgIH1dLFxuICAgICAgICAgICAgeyBkdXJhdGlvbiwgZWFzaW5nOiAnbGluZWFyJyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBidWxsZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZVRhcmdldCcpO1xuICAgICAgICAgICAgY2hlY2tHYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmVzdW1lU2hpcCgpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcigpIHtcbiAgICAgICAgY29uc3QgZmlyc3RSb3cgPSByb3dzWzBdO1xuICAgICAgICBjb25zdCBhbnlIaXQgPSBbLi4uZmlyc3RSb3cucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldCcpXS5zb21lKHQgPT5cbiAgICAgICAgICAgIHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlVGFyZ2V0JylcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYW55SGl0KSB7XG4gICAgICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxkaXYgY2xhc3M9XCJnYW1lLW92ZXJcIj5ZT1UgV09OPC9kaXY+Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc3RhcnRHYW1lLCA1MDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0LmhpZGVUYXJnZXQnKS5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlVGFyZ2V0JykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyJyk/LnJlbW92ZSgpO1xuICAgICAgICBnYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBtb3ZlU2hpcCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTaGlwKCkge1xuICAgICAgICBpZiAoZ2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXIub2Zmc2V0V2lkdGggLSBzaGlwLm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcbiAgICAgICAgbGV0IHggPSBzaGlwLm9mZnNldExlZnQ7XG5cbiAgICAgICAgbW92aW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2FtZU92ZXIpIHJldHVybiBjbGVhckludGVydmFsKG1vdmluZ0ludGVydmFsKTtcblxuICAgICAgICAgICAgeCArPSBkaXJlY3Rpb24gKiAzO1xuICAgICAgICAgICAgaWYgKHggPD0gMCB8fCB4ID49IG1heFgpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgICAgICAgICAgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHgsIG1heFgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMDEpIHNob290KCk7XG4gICAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wU2hpcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChtb3ZpbmdJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lU2hpcCgpIHtcbiAgICAgICAgc2V0VGltZW91dChtb3ZlU2hpcCwgMjAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgd2Vlayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWspIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUpIHJldHVybiBgcHJpemVfJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAgJiYgcGxhY2UgPj0gNikgcmV0dXJuIGBwcml6ZV82LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwICYmIHBsYWNlID49IDExKSByZXR1cm4gYHByaXplXzExLTIwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMwICYmIHBsYWNlID49IDIxKSByZXR1cm4gYHByaXplXzIxLTMwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlTWFycXVlZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlUHggPSAtZWxlbWVudC5vZmZzZXRXaWR0aCAqIDAuMztcblxuICAgICAgICBlbGVtZW50LmFuaW1hdGUoW1xuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9LFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7ZGlzdGFuY2VQeH1weClgIH1cbiAgICAgICAgXSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAwMCxcbiAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICBpdGVyYXRpb25zOiBJbmZpbml0eVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBhbmltYXRlTWFycXVlZShlbGVtZW50KSB7XG4gICAgLy8gICAgIGxldCBzdGFydCA9IG51bGw7XG4gICAgLy8gICAgIGNvbnN0IGR1cmF0aW9uID0gMzAwMDA7XG4gICAgLy8gICAgIGNvbnN0IGRpc3RhbmNlUHggPSAtZWxlbWVudC5vZmZzZXRXaWR0aCAqIDAuMzsgLy8gMzAlINCy0ZbQtCDRiNC40YDQuNC90Lgg0LXQu9C10LzQtdC90YLQsFxuICAgIC8vXG4gICAgLy8gICAgIGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgLy8gICAgICAgICBpZiAoIXN0YXJ0KSBzdGFydCA9IHRpbWVzdGFtcDtcbiAgICAvLyAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAvL1xuICAgIC8vICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbihlbGFwc2VkIC8gZHVyYXRpb24sIDEpO1xuICAgIC8vICAgICAgICAgY29uc3QgdHJhbnNsYXRlWCA9IHByb2dyZXNzICogZGlzdGFuY2VQeDtcbiAgICAvL1xuICAgIC8vICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYDtcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgIC8vICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgIC8vICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAvLyB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG5cbiAgICAvLyBURVNUXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiaHJcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxMTExMTIyMlwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoKTtcbiJdfQ==
