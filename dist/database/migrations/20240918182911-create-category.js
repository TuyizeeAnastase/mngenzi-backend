'use strict';

/** @type {import('sequelize-cli').Migration} */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.createTable('Categories', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              title: {
                type: Sequelize.STRING
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.dropTable('Categories');
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwibiIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJhIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwibW9kdWxlIiwiZXhwb3J0cyIsInVwIiwicXVlcnlJbnRlcmZhY2UiLCJTZXF1ZWxpemUiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNyZWF0ZVRhYmxlIiwiaWQiLCJhbGxvd051bGwiLCJhdXRvSW5jcmVtZW50IiwicHJpbWFyeUtleSIsIklOVEVHRVIiLCJ0aXRsZSIsIlNUUklORyIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1cGRhdGVkQXQiLCJkb3duIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJkcm9wVGFibGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDI0MDkxODE4MjkxMS1jcmVhdGUtY2F0ZWdvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLyoqIEB0eXBlIHtpbXBvcnQoJ3NlcXVlbGl6ZS1jbGknKS5NaWdyYXRpb259ICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXN5bmMgdXAocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmNyZWF0ZVRhYmxlKCdDYXRlZ29yaWVzJywge1xuICAgICAgaWQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgY3JlYXRlZEF0OiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICB9LFxuICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGFzeW5jIGRvd24ocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmRyb3BUYWJsZSgnQ2F0ZWdvcmllcycpO1xuICB9XG59OyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWjtBQUFBLFNBQUFBLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssb0JBQUEsdUtBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBTCxTQUFBLEVBQUFNLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxjQUFBLEVBQUFYLENBQUEsR0FBQVMsTUFBQSxDQUFBRyxjQUFBLGNBQUFMLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFLLEtBQUEsS0FB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