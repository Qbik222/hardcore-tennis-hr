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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsInRvU3RyaW5nIiwidGVzdCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX051bWJlciIsImFwaVVSTCIsImdldEFjdGl2ZVdlZWsiLCJwcm9tb1N0YXJ0RGF0ZSIsIndlZWtEdXJhdGlvbiIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIndlZWtEYXRlcyIsIkRheSIsIldlZWsiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImNvbmNhdCIsImdldERhdGUiLCJwYWRTdGFydCIsImdldE1vbnRoIiwiY2FsY3VsYXRlV2Vla1BlcmlvZCIsIndlZWtJbmRleCIsImJhc2VTdGFydCIsImdldFRpbWUiLCJzdGFydCIsImVuZCIsImFjdGl2ZVdlZWtJbmRleCIsIl9jYWxjdWxhdGVXZWVrUGVyaW9kIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkZXJCdG4iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsIl9pbml0IiwiX2NhbGxlZSIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwid2FpdEZvclVzZXJJZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfcXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJtb3ZlU2hpcCIsInJlbmRlclVzZXJzIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnRpY2lwYXRlIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRhYiIsInRhYldlZWsiLCJnZXRBdHRyaWJ1dGUiLCJfdHJ5RGV0ZWN0VXNlcklkIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJzaG91bGRTa2lwIiwiZXZlcnkiLCJtdXRhdGlvbiIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJfaXRlcmF0b3IiLCJfc3RlcCIsInVuYXV0aE1lcyIsInVzZXJpZCIsIml0ZW0iLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwicmVkaXJlY3RCdG4iLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwicGFydGljaXBhdGVCdG4iLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInN0YWNrIiwid2FybiIsImVsZW1zIiwiZWxlbSIsImxvZyIsImtleSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJiYXNlQ3NzQ2xhc3MiLCJfaSIsIl9hcnIiLCJsYW5nIiwiZGVsYXkiLCJNYXRoIiwicmFuZG9tIiwidG9GaXhlZCIsInNldFByb3BlcnR5Iiwic2hpcCIsInJvd3MiLCJnYW1lT3ZlciIsIm1vdmluZ0ludGVydmFsIiwiZ2V0U2hpcFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwib2Zmc2V0V2lkdGgiLCJnZXRDbG9zZXN0VGFyZ2V0Q29sSW5kZXgiLCJyb3ciLCJ0YXJnZXRzIiwic2hpcFgiLCJjbG9zZXN0SW5kZXgiLCJjbG9zZXN0RGlzdCIsIkluZmluaXR5IiwicmVjdCIsImNlbnRlclgiLCJ3aWR0aCIsImRpc3QiLCJhYnMiLCJmaW5kRmlyc3RWaXNpYmxlVGFyZ2V0SW5Db2x1bW4iLCJjb2xJbmRleCIsImNvbnRhaW5zIiwic2hvb3QiLCJzdG9wU2hpcCIsInJlc3VtZVNoaXAiLCJidWxsZXQiLCJjcmVhdGVFbGVtZW50Iiwic2hpcFJlY3QiLCJjb250YWluZXJSZWN0IiwidGFyZ2V0UmVjdCIsImJvdHRvbSIsInRvcCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJlYXNpbmciLCJjaGVja0dhbWVPdmVyIiwiZmlyc3RSb3ciLCJhbnlIaXQiLCJzb21lIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicmVzdGFydEdhbWUiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJjb250YWluZXIiLCJtYXhYIiwiZGlyZWN0aW9uIiwieCIsIm9mZnNldExlZnQiLCJtYXgiLCJtaW4iLCJ3ZWVrIiwiZGF0YSIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiX29wdGlvbnMkaGlnaGxpZ2h0IiwiaGlnaGxpZ2h0IiwiX29wdGlvbnMkbmVpZ2hib3IiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInBvaW50cyIsImFwcGVuZCIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInBsYWNlIiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVB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IjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2hhcmRjb3JlX3Rlbm5pcydcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbiAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZVdlZWtQZXJpb2QgPSAod2Vla0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlU3RhcnQgPSBwcm9tb1N0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGJhc2VTdGFydCArIHdlZWtJbmRleCAqIFdlZWspO1xuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICh3ZWVrRHVyYXRpb24gKiBEYXkgLSAxKSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbW9TdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDUtMDVUMDA6MDA6MDBcIik7XG4gICAgY29uc3Qgd2Vla0R1cmF0aW9uID0gMTA7XG5cbiAgICBjb25zdCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpLFxuICAgICAgICB0YWJsZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtaXRlbScpXG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiZW5cIlxuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgbW92ZVNoaXAoKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWspXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcCA9IG11dGF0aW9ucy5ldmVyeShtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXV0YXRpb24udGFyZ2V0LmNsb3Nlc3QoJy5nYW1lLWNvbnRhaW5lcicpIHx8IG11dGF0aW9uLnRhcmdldC5jbG9zZXN0KCcudGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTa2lwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBsZXQgbG9hZFRpbWUgPSAyMDA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBsb2FkVGltZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleVwiKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcblxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uZmV0dGknKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSAoTWF0aC5yYW5kb20oKSAqIDIuNSkudG9GaXhlZCgyKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tZGVsYXknLCBkZWxheSk7XG4gICAgfSk7XG5cblxuICAgIC8vIGdhbWUgYW5pbWF0aW9uXG5cbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAnKTtcbiAgICBjb25zdCByb3dzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXRSb3cnKV07XG4gICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IG1vdmluZ0ludGVydmFsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGdldFNoaXBYKCkge1xuICAgICAgICByZXR1cm4gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgc2hpcC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdFRhcmdldENvbEluZGV4KCkge1xuICAgICAgICBjb25zdCByb3cgPSByb3dzWzBdO1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gWy4uLnJvdy5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0JyldO1xuICAgICAgICBjb25zdCBzaGlwWCA9IGdldFNoaXBYKCk7XG5cbiAgICAgICAgbGV0IGNsb3Nlc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBjbG9zZXN0RGlzdCA9IEluZmluaXR5O1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhjZW50ZXJYIC0gc2hpcFgpO1xuICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICBjbG9zZXN0SW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RJbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kRmlyc3RWaXNpYmxlVGFyZ2V0SW5Db2x1bW4oY29sSW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvd3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHJvd3NbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldCcpW2NvbEluZGV4XTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGlkZVRhcmdldCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG9vdCgpIHtcbiAgICAgICAgc3RvcFNoaXAoKTtcblxuICAgICAgICBjb25zdCBjb2xJbmRleCA9IGdldENsb3Nlc3RUYXJnZXRDb2xJbmRleCgpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBmaW5kRmlyc3RWaXNpYmxlVGFyZ2V0SW5Db2x1bW4oY29sSW5kZXgpO1xuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuIHJlc3VtZVNoaXAoKTtcblxuICAgICAgICBjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVsbGV0LmNsYXNzTmFtZSA9ICdidWxsZXQnO1xuICAgICAgICBjb25zdCBzaGlwUmVjdCA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBidWxsZXQuc3R5bGUubGVmdCA9IGAke3NoaXBSZWN0LmxlZnQgKyBzaGlwLm9mZnNldFdpZHRoIC8gMiAtIGNvbnRhaW5lclJlY3QubGVmdCAtIDF9cHhgO1xuICAgICAgICBidWxsZXQuc3R5bGUuYm90dG9tID0gYCR7Y29udGFpbmVyUmVjdC5ib3R0b20gLSBzaGlwUmVjdC50b3B9cHhgO1xuICAgICAgICBidWxsZXQuc3R5bGUuaGVpZ2h0ID0gYCR7KDEwICsgTWF0aC5yYW5kb20oKSAqIDIwKX1weGA7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoYnVsbGV0KTtcblxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHNoaXBSZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDUwMDtcblxuICAgICAgICBidWxsZXQuYW5pbWF0ZShcbiAgICAgICAgICAgIFt7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtkaXN0YW5jZX1weClgIH1dLFxuICAgICAgICAgICAgeyBkdXJhdGlvbiwgZWFzaW5nOiAnbGluZWFyJyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBidWxsZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZVRhcmdldCcpO1xuICAgICAgICAgICAgY2hlY2tHYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmVzdW1lU2hpcCgpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcigpIHtcbiAgICAgICAgY29uc3QgZmlyc3RSb3cgPSByb3dzWzBdO1xuICAgICAgICBjb25zdCBhbnlIaXQgPSBbLi4uZmlyc3RSb3cucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldCcpXS5zb21lKHQgPT5cbiAgICAgICAgICAgIHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlVGFyZ2V0JylcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYW55SGl0KSB7XG4gICAgICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxkaXYgY2xhc3M9XCJnYW1lLW92ZXJcIj5ZT1UgV09OPC9kaXY+Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc3RhcnRHYW1lLCA1MDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0LmhpZGVUYXJnZXQnKS5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlVGFyZ2V0JykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyJyk/LnJlbW92ZSgpO1xuICAgICAgICBnYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBtb3ZlU2hpcCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTaGlwKCkge1xuICAgICAgICBpZiAoZ2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXIub2Zmc2V0V2lkdGggLSBzaGlwLm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcbiAgICAgICAgbGV0IHggPSBzaGlwLm9mZnNldExlZnQ7XG5cbiAgICAgICAgbW92aW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2FtZU92ZXIpIHJldHVybiBjbGVhckludGVydmFsKG1vdmluZ0ludGVydmFsKTtcblxuICAgICAgICAgICAgeCArPSBkaXJlY3Rpb24gKiAzO1xuICAgICAgICAgICAgaWYgKHggPD0gMCB8fCB4ID49IG1heFgpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgICAgICAgICAgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHgsIG1heFgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMDEpIHNob290KCk7XG4gICAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wU2hpcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChtb3ZpbmdJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lU2hpcCgpIHtcbiAgICAgICAgc2V0VGltZW91dChtb3ZlU2hpcCwgMjAwKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gNSkgcmV0dXJuIGBwcml6ZV8ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCAmJiBwbGFjZSA+PSA2KSByZXR1cm4gYHByaXplXzYtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAgJiYgcGxhY2UgPj0gMTEpIHJldHVybiBgcHJpemVfMTEtMjBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMzAgJiYgcGxhY2UgPj0gMjEpIHJldHVybiBgcHJpemVfMjEtMzBgO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJoclwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjExMTExMjIyXCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KSgpO1xuIl19
