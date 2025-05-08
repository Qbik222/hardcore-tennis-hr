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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsInRvU3RyaW5nIiwidGVzdCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX051bWJlciIsImFwaVVSTCIsImdldEFjdGl2ZVdlZWsiLCJwcm9tb1N0YXJ0RGF0ZSIsIndlZWtEdXJhdGlvbiIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIndlZWtEYXRlcyIsIkRheSIsIldlZWsiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImNvbmNhdCIsImdldERhdGUiLCJwYWRTdGFydCIsImdldE1vbnRoIiwiY2FsY3VsYXRlV2Vla1BlcmlvZCIsIndlZWtJbmRleCIsImJhc2VTdGFydCIsImdldFRpbWUiLCJzdGFydCIsImVuZCIsImFjdGl2ZVdlZWtJbmRleCIsIl9jYWxjdWxhdGVXZWVrUGVyaW9kIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkZXJCdG4iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwiX2luaXQiLCJfY2FsbGVlIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJ3YWl0Rm9yVXNlcklkIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl9xdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsIm1vdmVTaGlwIiwicmVuZGVyVXNlcnMiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGFiIiwidGFiV2VlayIsImdldEF0dHJpYnV0ZSIsIl90cnlEZXRlY3RVc2VySWQiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsInNob3VsZFNraXAiLCJldmVyeSIsIm11dGF0aW9uIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsIl9pdGVyYXRvciIsIl9zdGVwIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyZWRpcmVjdEJ0biIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJwYXJ0aWNpcGF0ZUJ0biIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJzdGFjayIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJsb2ciLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwiX2kiLCJfYXJyIiwibGFuZyIsImRlbGF5IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJzZXRQcm9wZXJ0eSIsInNoaXAiLCJyb3dzIiwiZ2FtZU92ZXIiLCJtb3ZpbmdJbnRlcnZhbCIsImdldFNoaXBYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIm9mZnNldFdpZHRoIiwiZ2V0Q2xvc2VzdFRhcmdldENvbEluZGV4Iiwicm93IiwidGFyZ2V0cyIsInNoaXBYIiwiY2xvc2VzdEluZGV4IiwiY2xvc2VzdERpc3QiLCJJbmZpbml0eSIsInJlY3QiLCJjZW50ZXJYIiwid2lkdGgiLCJkaXN0IiwiYWJzIiwiZmluZEZpcnN0VmlzaWJsZVRhcmdldEluQ29sdW1uIiwiY29sSW5kZXgiLCJjb250YWlucyIsInNob290Iiwic3RvcFNoaXAiLCJyZXN1bWVTaGlwIiwiYnVsbGV0IiwiY3JlYXRlRWxlbWVudCIsInNoaXBSZWN0IiwiY29udGFpbmVyUmVjdCIsInRhcmdldFJlY3QiLCJib3R0b20iLCJ0b3AiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJhbmltYXRlIiwidHJhbnNmb3JtIiwiZWFzaW5nIiwiY2hlY2tHYW1lT3ZlciIsImZpcnN0Um93IiwiYW55SGl0Iiwic29tZSIsImluc2VydEFkamFjZW50SFRNTCIsInJlc3RhcnRHYW1lIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiY29udGFpbmVyIiwibWF4WCIsImRpcmVjdGlvbiIsIngiLCJvZmZzZXRMZWZ0IiwibWF4IiwibWluIiwid2VlayIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwiaXNUb3BDdXJyZW50VXNlciIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsInVzZXJEYXRhIiwib3B0aW9ucyIsInVuZGVmaW5lZCIsIl9vcHRpb25zJGhpZ2hsaWdodCIsImhpZ2hsaWdodCIsIl9vcHRpb25zJG5laWdoYm9yIiwibmVpZ2hib3IiLCJ1c2VyUm93IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFB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QTdKLE1BQU0sQ0FBQzRDLFFBQVEsQ0FBQ2tILE1BQU0sQ0FBQyxDQUFDO0VBQzVCLENBQUMsQ0FBQztFQUVGLElBQU1DLE9BQU8sR0FBR3hPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUVuRHVPLE9BQU8sQ0FBQ3ZLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25DLElBQUdsQyxNQUFNLEVBQUM7TUFDTk4sY0FBYyxDQUFDNE0sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLE1BQUk7TUFDRDVNLGNBQWMsQ0FBQzZNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ2hEO0lBQ0E3SixNQUFNLENBQUM0QyxRQUFRLENBQUNrSCxNQUFNLENBQUMsQ0FBQztFQUM1QixDQUFDLENBQUM7RUFFRnZPLFFBQVEsQ0FBQ2lFLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFBQSxJQUFBd0ssc0JBQUE7SUFDaEQsQ0FBQUEsc0JBQUEsR0FBQXpPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFBd08sc0JBQUEsZUFBbkNBLHNCQUFBLENBQXFDeEssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFBQSxJQUFBeUssc0JBQUE7TUFDakUsQ0FBQUEsc0JBQUEsR0FBQTFPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxjQUFBeU8sc0JBQUEsZUFBcENBLHNCQUFBLENBQXNDMU4sU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUVOLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9oYXJkY29yZV90ZW5uaXMnXG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA1LTA1VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDEwO1xuXG4gICAgY29uc3QgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWl0ZW0nKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImVuXCJcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIG1vdmVTaGlwKCk7XG4gICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrKVxuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpKXtcbiAgICAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgbGV0IHRhYldlZWsgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpO1xuICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWspXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwID0gbXV0YXRpb25zLmV2ZXJ5KG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtdXRhdGlvbi50YXJnZXQuY2xvc2VzdCgnLmdhbWUtY29udGFpbmVyJykgfHwgbXV0YXRpb24udGFyZ2V0LmNsb3Nlc3QoJy50YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFNraXApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGxldCBsb2FkVGltZSA9IDIwMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGxvYWRUaW1lKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5XCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuXG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25mZXR0aScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBkZWxheSA9IChNYXRoLnJhbmRvbSgpICogMi41KS50b0ZpeGVkKDIpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kZWxheScsIGRlbGF5KTtcbiAgICB9KTtcblxuXG4gICAgLy8gZ2FtZSBhbmltYXRpb25cblxuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcCcpO1xuICAgIGNvbnN0IHJvd3MgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmdldFJvdycpXTtcbiAgICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBsZXQgbW92aW5nSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcFgoKSB7XG4gICAgICAgIHJldHVybiBzaGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBzaGlwLm9mZnNldFdpZHRoIC8gMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDbG9zZXN0VGFyZ2V0Q29sSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbMF07XG4gICAgICAgIGNvbnN0IHRhcmdldHMgPSBbLi4ucm93LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXQnKV07XG4gICAgICAgIGNvbnN0IHNoaXBYID0gZ2V0U2hpcFgoKTtcblxuICAgICAgICBsZXQgY2xvc2VzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0ID0gSW5maW5pdHk7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0LCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGNlbnRlclggLSBzaGlwWCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xvc2VzdEluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRGaXJzdFZpc2libGVUYXJnZXRJbkNvbHVtbihjb2xJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gcm93cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcm93c1tpXS5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0JylbY29sSW5kZXhdO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlVGFyZ2V0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob290KCkge1xuICAgICAgICBzdG9wU2hpcCgpO1xuXG4gICAgICAgIGNvbnN0IGNvbEluZGV4ID0gZ2V0Q2xvc2VzdFRhcmdldENvbEluZGV4KCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGZpbmRGaXJzdFZpc2libGVUYXJnZXRJbkNvbHVtbihjb2xJbmRleCk7XG4gICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm4gcmVzdW1lU2hpcCgpO1xuXG4gICAgICAgIGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidWxsZXQuY2xhc3NOYW1lID0gJ2J1bGxldCc7XG4gICAgICAgIGNvbnN0IHNoaXBSZWN0ID0gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGJ1bGxldC5zdHlsZS5sZWZ0ID0gYCR7c2hpcFJlY3QubGVmdCArIHNoaXAub2Zmc2V0V2lkdGggLyAyIC0gY29udGFpbmVyUmVjdC5sZWZ0IC0gMX1weGA7XG4gICAgICAgIGJ1bGxldC5zdHlsZS5ib3R0b20gPSBgJHtjb250YWluZXJSZWN0LmJvdHRvbSAtIHNoaXBSZWN0LnRvcH1weGA7XG4gICAgICAgIGJ1bGxldC5zdHlsZS5oZWlnaHQgPSBgJHsoMTAgKyBNYXRoLnJhbmRvbSgpICogMjApfXB4YDtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKS5hcHBlbmRDaGlsZChidWxsZXQpO1xuXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gc2hpcFJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3A7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gNTAwO1xuXG4gICAgICAgIGJ1bGxldC5hbmltYXRlKFxuICAgICAgICAgICAgW3sgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke2Rpc3RhbmNlfXB4KWAgfV0sXG4gICAgICAgICAgICB7IGR1cmF0aW9uLCBlYXNpbmc6ICdsaW5lYXInIH1cbiAgICAgICAgKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJ1bGxldC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlVGFyZ2V0Jyk7XG4gICAgICAgICAgICBjaGVja0dhbWVPdmVyKCk7XG4gICAgICAgICAgICByZXN1bWVTaGlwKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0dhbWVPdmVyKCkge1xuICAgICAgICBjb25zdCBmaXJzdFJvdyA9IHJvd3NbMF07XG4gICAgICAgIGNvbnN0IGFueUhpdCA9IFsuLi5maXJzdFJvdy5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0JyldLnNvbWUodCA9PlxuICAgICAgICAgICAgdC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGVUYXJnZXQnKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChhbnlIaXQpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPGRpdiBjbGFzcz1cImdhbWUtb3ZlclwiPllPVSBXT048L2Rpdj4nKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdGFydEdhbWUsIDUwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXQuaGlkZVRhcmdldCcpLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVUYXJnZXQnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXInKT8ucmVtb3ZlKCk7XG4gICAgICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIG1vdmVTaGlwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNoaXAoKSB7XG4gICAgICAgIGlmIChnYW1lT3ZlcikgcmV0dXJuO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbWF4WCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIHNoaXAub2Zmc2V0V2lkdGg7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xO1xuICAgICAgICBsZXQgeCA9IHNoaXAub2Zmc2V0TGVmdDtcblxuICAgICAgICBtb3ZpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lT3ZlcikgcmV0dXJuIGNsZWFySW50ZXJ2YWwobW92aW5nSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICB4ICs9IGRpcmVjdGlvbiAqIDM7XG4gICAgICAgICAgICBpZiAoeCA8PSAwIHx8IHggPj0gbWF4WCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oeCwgbWF4WCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wMSkgc2hvb3QoKTtcbiAgICAgICAgfSwgMjApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BTaGlwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKG1vdmluZ0ludGVydmFsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWVTaGlwKCkge1xuICAgICAgICBzZXRUaW1lb3V0KG1vdmVTaGlwLCAyMDApO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1KSByZXR1cm4gYHByaXplXyR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwICYmIHBsYWNlID49IDYpIHJldHVybiBgcHJpemVfNi0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMCAmJiBwbGFjZSA+PSAxMSkgcmV0dXJuIGBwcml6ZV8xMS0yMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzMCAmJiBwbGFjZSA+PSAyMSkgcmV0dXJuIGBwcml6ZV8yMS0zMGA7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuXG4gICAgLy8gVEVTVFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImhyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTExMTEyMjJcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKCk7XG4iXX0=
