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
  var locale = "en";
  var loaderBtn = false;
  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = false;
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
    return fetch("".concat(apiURL, "/new-translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
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
    var topUsers = users.slice(0, 10);
    var isTopCurrentUser = currentUser && topUsers.some(function (user) {
      return user.userid === currentUserId;
    });
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
      if (highlight) {
        userRow.classList.add('_your');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(highlight ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
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
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
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
      sessionStorage.setItem("locale", "en");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsInRvU3RyaW5nIiwidGVzdCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX051bWJlciIsImFwaVVSTCIsImdldEFjdGl2ZVdlZWsiLCJwcm9tb1N0YXJ0RGF0ZSIsIndlZWtEdXJhdGlvbiIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIndlZWtEYXRlcyIsIkRheSIsIldlZWsiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImNvbmNhdCIsImdldERhdGUiLCJwYWRTdGFydCIsImdldE1vbnRoIiwiY2FsY3VsYXRlV2Vla1BlcmlvZCIsIndlZWtJbmRleCIsImJhc2VTdGFydCIsImdldFRpbWUiLCJzdGFydCIsImVuZCIsImFjdGl2ZVdlZWtJbmRleCIsIl9jYWxjdWxhdGVXZWVrUGVyaW9kIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhbGUiLCJsb2FkZXJCdG4iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwiX2luaXQiLCJfY2FsbGVlIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJ3YWl0Rm9yVXNlcklkIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl9xdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsIm1vdmVTaGlwIiwicmVuZGVyVXNlcnMiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGFiIiwidGFiV2VlayIsImdldEF0dHJpYnV0ZSIsIl90cnlEZXRlY3RVc2VySWQiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsInNob3VsZFNraXAiLCJldmVyeSIsIm11dGF0aW9uIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsIl9pdGVyYXRvciIsIl9zdGVwIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyZWRpcmVjdEJ0biIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJwYXJ0aWNpcGF0ZUJ0biIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJzdGFjayIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJsb2ciLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwiX2kiLCJfYXJyIiwibGFuZyIsImRlbGF5IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJzZXRQcm9wZXJ0eSIsInNoaXAiLCJyb3dzIiwiZ2FtZU92ZXIiLCJtb3ZpbmdJbnRlcnZhbCIsImdldFNoaXBYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIm9mZnNldFdpZHRoIiwiZ2V0Q2xvc2VzdFRhcmdldENvbEluZGV4Iiwicm93IiwidGFyZ2V0cyIsInNoaXBYIiwiY2xvc2VzdEluZGV4IiwiY2xvc2VzdERpc3QiLCJJbmZpbml0eSIsInJlY3QiLCJjZW50ZXJYIiwid2lkdGgiLCJkaXN0IiwiYWJzIiwiZmluZEZpcnN0VmlzaWJsZVRhcmdldEluQ29sdW1uIiwiY29sSW5kZXgiLCJjb250YWlucyIsInNob290Iiwic3RvcFNoaXAiLCJyZXN1bWVTaGlwIiwiYnVsbGV0IiwiY3JlYXRlRWxlbWVudCIsInNoaXBSZWN0IiwiY29udGFpbmVyUmVjdCIsInRhcmdldFJlY3QiLCJib3R0b20iLCJ0b3AiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJhbmltYXRlIiwidHJhbnNmb3JtIiwiZWFzaW5nIiwiY2hlY2tHYW1lT3ZlciIsImZpcnN0Um93IiwiYW55SGl0Iiwic29tZSIsImluc2VydEFkamFjZW50SFRNTCIsInJlc3RhcnRHYW1lIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiY29udGFpbmVyIiwibWF4WCIsImRpcmVjdGlvbiIsIngiLCJvZmZzZXRMZWZ0IiwibWF4IiwibWluIiwid2VlayIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwidG9wVXNlcnMiLCJpc1RvcEN1cnJlbnRVc2VyIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJfb3B0aW9ucyRoaWdobGlnaHQiLCJoaWdobGlnaHQiLCJfb3B0aW9ucyRuZWlnaGJvciIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwidHJhbnNsYXRlS2V5IiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FB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VSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLE1BQU07TUFDSHRNLGNBQWMsQ0FBQ3VNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQzFDO0lBQ0E1SixNQUFNLENBQUM0QyxRQUFRLENBQUNpSCxNQUFNLENBQUMsQ0FBQztFQUM1QixDQUFDLENBQUM7RUFFRixJQUFNQyxPQUFPLEdBQUd2TyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFFbkRzTyxPQUFPLENBQUN0SyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNuQyxJQUFHcEMsTUFBTSxFQUFDO01BQ05DLGNBQWMsQ0FBQ3NNLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQyxNQUFJO01BQ0R0TSxjQUFjLENBQUN1TSxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNoRDtJQUNBNUosTUFBTSxDQUFDNEMsUUFBUSxDQUFDaUgsTUFBTSxDQUFDLENBQUM7RUFDNUIsQ0FBQyxDQUFDO0VBRUZ0TyxRQUFRLENBQUNpRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0lBQUEsSUFBQXVLLHNCQUFBO0lBQ2hELENBQUFBLHNCQUFBLEdBQUF4TyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsY0FBQXVPLHNCQUFBLGVBQW5DQSxzQkFBQSxDQUFxQ3ZLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQUEsSUFBQXdLLHNCQUFBO01BQ2pFLENBQUFBLHNCQUFBLEdBQUF6TyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsY0FBQXdPLHNCQUFBLGVBQXBDQSxzQkFBQSxDQUFzQ3pOLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFFTixDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfaGFyZGNvcmVfdGVubmlzJ1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNS0wNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSAxMDtcblxuICAgIGNvbnN0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1idG4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyksXG4gICAgICAgIHRhYmxlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJylcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvY2FsZSA9IFwiZW5cIlxuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSBmYWxzZTtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgbW92ZVNoaXAoKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWspXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZFNraXAgPSBtdXRhdGlvbnMuZXZlcnkobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG11dGF0aW9uLnRhcmdldC5jbG9zZXN0KCcuZ2FtZS1jb250YWluZXInKSB8fCBtdXRhdGlvbi50YXJnZXQuY2xvc2VzdCgnLnRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU2tpcCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgbGV0IGxvYWRUaW1lID0gMjAwO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKClcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbG9hZFRpbWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlcIilcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG5cblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmZldHRpJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gKE1hdGgucmFuZG9tKCkgKiAyLjUpLnRvRml4ZWQoMik7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWRlbGF5JywgZGVsYXkpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBnYW1lIGFuaW1hdGlvblxuXG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwJyk7XG4gICAgY29uc3Qgcm93cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0Um93JyldO1xuICAgIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICAgIGxldCBtb3ZpbmdJbnRlcnZhbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBnZXRTaGlwWCgpIHtcbiAgICAgICAgcmV0dXJuIHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHNoaXAub2Zmc2V0V2lkdGggLyAyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RUYXJnZXRDb2xJbmRleCgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gcm93c1swXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0cyA9IFsuLi5yb3cucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldCcpXTtcbiAgICAgICAgY29uc3Qgc2hpcFggPSBnZXRTaGlwWCgpO1xuXG4gICAgICAgIGxldCBjbG9zZXN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgY2xvc2VzdERpc3QgPSBJbmZpbml0eTtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5hYnMoY2VudGVyWCAtIHNoaXBYKTtcbiAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZXN0SW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZEZpcnN0VmlzaWJsZVRhcmdldEluQ29sdW1uKGNvbEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSByb3dzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSByb3dzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXQnKVtjb2xJbmRleF07XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGVUYXJnZXQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvb3QoKSB7XG4gICAgICAgIHN0b3BTaGlwKCk7XG5cbiAgICAgICAgY29uc3QgY29sSW5kZXggPSBnZXRDbG9zZXN0VGFyZ2V0Q29sSW5kZXgoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZmluZEZpcnN0VmlzaWJsZVRhcmdldEluQ29sdW1uKGNvbEluZGV4KTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiByZXN1bWVTaGlwKCk7XG5cbiAgICAgICAgY29uc3QgYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1bGxldC5jbGFzc05hbWUgPSAnYnVsbGV0JztcbiAgICAgICAgY29uc3Qgc2hpcFJlY3QgPSBzaGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgYnVsbGV0LnN0eWxlLmxlZnQgPSBgJHtzaGlwUmVjdC5sZWZ0ICsgc2hpcC5vZmZzZXRXaWR0aCAvIDIgLSBjb250YWluZXJSZWN0LmxlZnQgLSAxfXB4YDtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmJvdHRvbSA9IGAke2NvbnRhaW5lclJlY3QuYm90dG9tIC0gc2hpcFJlY3QudG9wfXB4YDtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmhlaWdodCA9IGAkeygxMCArIE1hdGgucmFuZG9tKCkgKiAyMCl9cHhgO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGJ1bGxldCk7XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzaGlwUmVjdC50b3AgLSB0YXJnZXRSZWN0LnRvcDtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSA1MDA7XG5cbiAgICAgICAgYnVsbGV0LmFuaW1hdGUoXG4gICAgICAgICAgICBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7ZGlzdGFuY2V9cHgpYCB9XSxcbiAgICAgICAgICAgIHsgZHVyYXRpb24sIGVhc2luZzogJ2xpbmVhcicgfVxuICAgICAgICApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYnVsbGV0LnJlbW92ZSgpO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGVUYXJnZXQnKTtcbiAgICAgICAgICAgIGNoZWNrR2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJlc3VtZVNoaXAoKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Um93ID0gcm93c1swXTtcbiAgICAgICAgY29uc3QgYW55SGl0ID0gWy4uLmZpcnN0Um93LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXQnKV0uc29tZSh0ID0+XG4gICAgICAgICAgICB0LmNsYXNzTGlzdC5jb250YWlucygnaGlkZVRhcmdldCcpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGFueUhpdCkge1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+WU9VIFdPTjwvZGl2PicpO1xuICAgICAgICAgICAgc2V0VGltZW91dChyZXN0YXJ0R2FtZSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldC5oaWRlVGFyZ2V0JykuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZVRhcmdldCcpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3ZlcicpPy5yZW1vdmUoKTtcbiAgICAgICAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgbW92ZVNoaXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2hpcCgpIHtcbiAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBtYXhYID0gY29udGFpbmVyLm9mZnNldFdpZHRoIC0gc2hpcC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTE7XG4gICAgICAgIGxldCB4ID0gc2hpcC5vZmZzZXRMZWZ0O1xuXG4gICAgICAgIG1vdmluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm4gY2xlYXJJbnRlcnZhbChtb3ZpbmdJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIHggKz0gZGlyZWN0aW9uICogMztcbiAgICAgICAgICAgIGlmICh4IDw9IDAgfHwgeCA+PSBtYXhYKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uICo9IC0xO1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih4LCBtYXhYKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcblxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjAxKSBzaG9vdCgpO1xuICAgICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFNoaXAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZVNoaXAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQobW92ZVNoaXAsIDIwMCk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgd2Vlayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWspIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAxMCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB0b3BVc2Vycy5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX3lvdXInKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtoaWdobGlnaHQgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjExMTExMjIyXCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KSgpO1xuIl19
