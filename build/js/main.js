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
    var start = null;
    var duration = 30000;
    var distancePx = -element.offsetWidth * 0.3; // 30% від ширини елемента

    function step(timestamp) {
      if (!start) start = timestamp;
      var elapsed = timestamp - start;
      var progress = Math.min(elapsed / duration, 1);
      var translateX = progress * distancePx;
      element.style.transform = "translateX(".concat(translateX, "px)");
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        start = null;
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsInRvU3RyaW5nIiwidGVzdCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX051bWJlciIsImFwaVVSTCIsImdldEFjdGl2ZVdlZWsiLCJwcm9tb1N0YXJ0RGF0ZSIsIndlZWtEdXJhdGlvbiIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIndlZWtEYXRlcyIsIkRheSIsIldlZWsiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImNvbmNhdCIsImdldERhdGUiLCJwYWRTdGFydCIsImdldE1vbnRoIiwiY2FsY3VsYXRlV2Vla1BlcmlvZCIsIndlZWtJbmRleCIsImJhc2VTdGFydCIsImdldFRpbWUiLCJzdGFydCIsImVuZCIsImFjdGl2ZVdlZWtJbmRleCIsIl9jYWxjdWxhdGVXZWVrUGVyaW9kIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkZXJCdG4iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsIl9pbml0IiwiX2NhbGxlZSIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwid2FpdEZvclVzZXJJZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfcXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJtb3ZlU2hpcCIsImFuaW1hdGVNYXJxdWVlIiwicmVuZGVyVXNlcnMiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGFiIiwidGFiV2VlayIsImdldEF0dHJpYnV0ZSIsIl90cnlEZXRlY3RVc2VySWQiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsInNob3VsZFNraXAiLCJldmVyeSIsIm11dGF0aW9uIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsIl9pdGVyYXRvciIsIl9zdGVwIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyZWRpcmVjdEJ0biIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJwYXJ0aWNpcGF0ZUJ0biIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwic3RhY2siLCJ3YXJuIiwiZWxlbXMiLCJlbGVtIiwibG9nIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsIl9pIiwiX2FyciIsImxhbmciLCJkZWxheSIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwic2V0UHJvcGVydHkiLCJzaGlwIiwicm93cyIsImdhbWVPdmVyIiwibW92aW5nSW50ZXJ2YWwiLCJnZXRTaGlwWCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsImdldENsb3Nlc3RUYXJnZXRDb2xJbmRleCIsInJvdyIsInRhcmdldHMiLCJzaGlwWCIsImNsb3Nlc3RJbmRleCIsImNsb3Nlc3REaXN0IiwiSW5maW5pdHkiLCJyZWN0IiwiY2VudGVyWCIsIndpZHRoIiwiZGlzdCIsImFicyIsImZpbmRGaXJzdFZpc2libGVUYXJnZXRJbkNvbHVtbiIsImNvbEluZGV4IiwiY29udGFpbnMiLCJzaG9vdCIsInN0b3BTaGlwIiwicmVzdW1lU2hpcCIsImJ1bGxldCIsImNyZWF0ZUVsZW1lbnQiLCJzaGlwUmVjdCIsImNvbnRhaW5lclJlY3QiLCJ0YXJnZXRSZWN0IiwiYm90dG9tIiwidG9wIiwiaGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsImVhc2luZyIsImNoZWNrR2FtZU92ZXIiLCJmaXJzdFJvdyIsImFueUhpdCIsInNvbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJyZXN0YXJ0R2FtZSIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsImNvbnRhaW5lciIsIm1heFgiLCJkaXJlY3Rpb24iLCJ4Iiwib2Zmc2V0TGVmdCIsIm1heCIsIm1pbiIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJfb3B0aW9ucyRoaWdobGlnaHQiLCJoaWdobGlnaHQiLCJfb3B0aW9ucyRuZWlnaGJvciIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJkaXN0YW5jZVB4Iiwic3RlcCIsInRpbWVzdGFtcCIsImVsYXBzZWQiLCJwcm9ncmVzcyIsInRyYW5zbGF0ZVgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFB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QUM7SUFDdkMsQ0FBQyxNQUFNO01BQ0h0TixjQUFjLENBQUN1TixPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztJQUMxQztJQUNBbE0sTUFBTSxDQUFDQyxRQUFRLENBQUNrTSxNQUFNLENBQUMsQ0FBQztFQUM1QixDQUFDLENBQUM7RUFFRixJQUFNQyxPQUFPLEdBQUdsUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFFbkRpUCxPQUFPLENBQUMxSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNuQyxJQUFHekMsTUFBTSxFQUFDO01BQ05OLGNBQWMsQ0FBQ3NOLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQyxNQUFJO01BQ0R0TixjQUFjLENBQUN1TixPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNoRDtJQUNBbE0sTUFBTSxDQUFDQyxRQUFRLENBQUNrTSxNQUFNLENBQUMsQ0FBQztFQUM1QixDQUFDLENBQUM7RUFFRmpQLFFBQVEsQ0FBQ3dFLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFBQSxJQUFBMkssc0JBQUE7SUFDaEQsQ0FBQUEsc0JBQUEsR0FBQW5QLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFBa1Asc0JBQUEsZUFBbkNBLHNCQUFBLENBQXFDM0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFBQSxJQUFBNEssc0JBQUE7TUFDakUsQ0FBQUEsc0JBQUEsR0FBQXBQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxjQUFBbVAsc0JBQUEsZUFBcENBLHNCQUFBLENBQXNDcE8sU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUVOLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9oYXJkY29yZV90ZW5uaXMnXG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA1LTA1VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDEwO1xuXG4gICAgY29uc3QgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWl0ZW0nKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImVuXCJcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIG1vdmVTaGlwKCk7XG4gICAgICAgICAgICBhbmltYXRlTWFycXVlZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hcnF1ZWVcIikpXG4gICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrKVxuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpKXtcbiAgICAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgbGV0IHRhYldlZWsgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpO1xuICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWspXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZFNraXAgPSBtdXRhdGlvbnMuZXZlcnkobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG11dGF0aW9uLnRhcmdldC5jbG9zZXN0KCcuZ2FtZS1jb250YWluZXInKSB8fCBtdXRhdGlvbi50YXJnZXQuY2xvc2VzdCgnLnRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU2tpcCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgbGV0IGxvYWRUaW1lID0gMjAwO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKClcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbG9hZFRpbWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlcIilcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG5cblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmZldHRpJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gKE1hdGgucmFuZG9tKCkgKiAyLjUpLnRvRml4ZWQoMik7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWRlbGF5JywgZGVsYXkpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBnYW1lIGFuaW1hdGlvblxuXG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwJyk7XG4gICAgY29uc3Qgcm93cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0Um93JyldO1xuICAgIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICAgIGxldCBtb3ZpbmdJbnRlcnZhbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBnZXRTaGlwWCgpIHtcbiAgICAgICAgcmV0dXJuIHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHNoaXAub2Zmc2V0V2lkdGggLyAyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RUYXJnZXRDb2xJbmRleCgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gcm93c1swXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0cyA9IFsuLi5yb3cucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldCcpXTtcbiAgICAgICAgY29uc3Qgc2hpcFggPSBnZXRTaGlwWCgpO1xuXG4gICAgICAgIGxldCBjbG9zZXN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgY2xvc2VzdERpc3QgPSBJbmZpbml0eTtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5hYnMoY2VudGVyWCAtIHNoaXBYKTtcbiAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZXN0SW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZEZpcnN0VmlzaWJsZVRhcmdldEluQ29sdW1uKGNvbEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSByb3dzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSByb3dzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXQnKVtjb2xJbmRleF07XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGVUYXJnZXQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvb3QoKSB7XG4gICAgICAgIHN0b3BTaGlwKCk7XG5cbiAgICAgICAgY29uc3QgY29sSW5kZXggPSBnZXRDbG9zZXN0VGFyZ2V0Q29sSW5kZXgoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZmluZEZpcnN0VmlzaWJsZVRhcmdldEluQ29sdW1uKGNvbEluZGV4KTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiByZXN1bWVTaGlwKCk7XG5cbiAgICAgICAgY29uc3QgYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1bGxldC5jbGFzc05hbWUgPSAnYnVsbGV0JztcbiAgICAgICAgY29uc3Qgc2hpcFJlY3QgPSBzaGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgYnVsbGV0LnN0eWxlLmxlZnQgPSBgJHtzaGlwUmVjdC5sZWZ0ICsgc2hpcC5vZmZzZXRXaWR0aCAvIDIgLSBjb250YWluZXJSZWN0LmxlZnQgLSAxfXB4YDtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmJvdHRvbSA9IGAke2NvbnRhaW5lclJlY3QuYm90dG9tIC0gc2hpcFJlY3QudG9wfXB4YDtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmhlaWdodCA9IGAkeygxMCArIE1hdGgucmFuZG9tKCkgKiAyMCl9cHhgO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGJ1bGxldCk7XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzaGlwUmVjdC50b3AgLSB0YXJnZXRSZWN0LnRvcDtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSA1MDA7XG5cbiAgICAgICAgYnVsbGV0LmFuaW1hdGUoXG4gICAgICAgICAgICBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7ZGlzdGFuY2V9cHgpYCB9XSxcbiAgICAgICAgICAgIHsgZHVyYXRpb24sIGVhc2luZzogJ2xpbmVhcicgfVxuICAgICAgICApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYnVsbGV0LnJlbW92ZSgpO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGVUYXJnZXQnKTtcbiAgICAgICAgICAgIGNoZWNrR2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJlc3VtZVNoaXAoKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Um93ID0gcm93c1swXTtcbiAgICAgICAgY29uc3QgYW55SGl0ID0gWy4uLmZpcnN0Um93LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXQnKV0uc29tZSh0ID0+XG4gICAgICAgICAgICB0LmNsYXNzTGlzdC5jb250YWlucygnaGlkZVRhcmdldCcpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGFueUhpdCkge1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+WU9VIFdPTjwvZGl2PicpO1xuICAgICAgICAgICAgc2V0VGltZW91dChyZXN0YXJ0R2FtZSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldC5oaWRlVGFyZ2V0JykuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZVRhcmdldCcpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3ZlcicpPy5yZW1vdmUoKTtcbiAgICAgICAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgbW92ZVNoaXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2hpcCgpIHtcbiAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBtYXhYID0gY29udGFpbmVyLm9mZnNldFdpZHRoIC0gc2hpcC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTE7XG4gICAgICAgIGxldCB4ID0gc2hpcC5vZmZzZXRMZWZ0O1xuXG4gICAgICAgIG1vdmluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm4gY2xlYXJJbnRlcnZhbChtb3ZpbmdJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIHggKz0gZGlyZWN0aW9uICogMztcbiAgICAgICAgICAgIGlmICh4IDw9IDAgfHwgeCA+PSBtYXhYKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uICo9IC0xO1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih4LCBtYXhYKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcblxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjAxKSBzaG9vdCgpO1xuICAgICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFNoaXAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZVNoaXAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQobW92ZVNoaXAsIDIwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1KSByZXR1cm4gYHByaXplXyR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwICYmIHBsYWNlID49IDYpIHJldHVybiBgcHJpemVfNi0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMCAmJiBwbGFjZSA+PSAxMSkgcmV0dXJuIGBwcml6ZV8xMS0yMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzMCAmJiBwbGFjZSA+PSAyMSkgcmV0dXJuIGBwcml6ZV8yMS0zMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU1hcnF1ZWUoZWxlbWVudCkge1xuICAgICAgICBsZXQgc3RhcnQgPSBudWxsO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDMwMDAwO1xuICAgICAgICBjb25zdCBkaXN0YW5jZVB4ID0gLWVsZW1lbnQub2Zmc2V0V2lkdGggKiAwLjM7IC8vIDMwJSDQstGW0LQg0YjQuNGA0LjQvdC4INC10LvQtdC80LXQvdGC0LBcblxuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgaWYgKCFzdGFydCkgc3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBwcm9ncmVzcyAqIGRpc3RhbmNlUHg7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWA7XG5cbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuXG4gICAgLy8gVEVTVFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImhyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTExMTEyMjJcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKCk7XG4iXX0=
