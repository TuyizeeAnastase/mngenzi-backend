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
            return queryInterface.createTable('Roles', {
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
            return queryInterface.dropTable('Roles');
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwibiIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJhIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwibW9kdWxlIiwiZXhwb3J0cyIsInVwIiwicXVlcnlJbnRlcmZhY2UiLCJTZXF1ZWxpemUiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNyZWF0ZVRhYmxlIiwiaWQiLCJhbGxvd051bGwiLCJhdXRvSW5jcmVtZW50IiwicHJpbWFyeUtleSIsIklOVEVHRVIiLCJ0aXRsZSIsIlNUUklORyIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1cGRhdGVkQXQiLCJkb3duIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJkcm9wVGFibGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDI0MDkxNzE4NTYyNy1jcmVhdGUtcm9sZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG4vKiogQHR5cGUge2ltcG9ydCgnc2VxdWVsaXplLWNsaScpLk1pZ3JhdGlvbn0gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3luYyB1cChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSB7XG4gICAgYXdhaXQgcXVlcnlJbnRlcmZhY2UuY3JlYXRlVGFibGUoJ1JvbGVzJywge1xuICAgICAgaWQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgY3JlYXRlZEF0OiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICB9LFxuICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGFzeW5jIGRvd24ocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmRyb3BUYWJsZSgnUm9sZXMnKTtcbiAgfVxufTsiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1o7QUFBQSxTQUFBQSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLG9CQUFBLHVLQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUwsU0FBQSxFQUFBTSxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsY0FBQSxFQUFBWCxDQUFBLEdBQUFTLE1BQUEsQ0FBQUcsY0FBQSxjQUFBTCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBSyxLQUFBLEtBQUFDLENBQUEsd0JBQUFi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