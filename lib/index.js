import * as g from "react";
import pe, { version as Si, isValidElement as xi, useContext as Ct, createContext as Ln, useRef as Et, useLayoutEffect as Uo, useEffect as Ht, useState as Ei, useCallback as Ci, useMemo as Ti } from "react";
import eo from "react-dom";
function wi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ln = { exports: {} }, Lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function ki() {
  if (to) return Lt;
  to = 1;
  var e = pe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, s, c) {
    var f, d = {}, v = null, h = null;
    c !== void 0 && (v = "" + c), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (h = s.ref);
    for (f in s) n.call(s, f) && !a.hasOwnProperty(f) && (d[f] = s[f]);
    if (l && l.defaultProps) for (f in s = l.defaultProps, s) d[f] === void 0 && (d[f] = s[f]);
    return { $$typeof: t, type: l, key: v, ref: h, props: d, _owner: o.current };
  }
  return Lt.Fragment = r, Lt.jsx = i, Lt.jsxs = i, Lt;
}
var Dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Oi() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), S = Symbol.iterator, m = "@@iterator";
    function p(u) {
      if (u === null || typeof u != "object")
        return null;
      var b = S && u[S] || u[m];
      return typeof b == "function" ? b : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(u) {
      {
        for (var b = arguments.length, E = new Array(b > 1 ? b - 1 : 0), j = 1; j < b; j++)
          E[j - 1] = arguments[j];
        k("error", u, E);
      }
    }
    function k(u, b, E) {
      {
        var j = x.ReactDebugCurrentFrame, B = j.getStackAddendum();
        B !== "" && (b += "%s", E = E.concat([B]));
        var K = E.map(function(D) {
          return String(D);
        });
        K.unshift("Warning: " + b), Function.prototype.apply.call(console[u], console, K);
      }
    }
    var w = !1, C = !1, O = !1, T = !1, _ = !1, V;
    V = Symbol.for("react.module.reference");
    function H(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || _ || u === o || u === c || u === f || T || u === h || w || C || O || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === d || u.$$typeof === i || u.$$typeof === l || u.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === V || u.getModuleId !== void 0));
    }
    function Y(u, b, E) {
      var j = u.displayName;
      if (j)
        return j;
      var B = b.displayName || b.name || "";
      return B !== "" ? E + "(" + B + ")" : E;
    }
    function Z(u) {
      return u.displayName || "Context";
    }
    function R(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            var b = u;
            return Z(b) + ".Consumer";
          case i:
            var E = u;
            return Z(E._context) + ".Provider";
          case s:
            return Y(u, u.render, "ForwardRef");
          case d:
            var j = u.displayName || null;
            return j !== null ? j : R(u.type) || "Memo";
          case v: {
            var B = u, K = B._payload, D = B._init;
            try {
              return R(D(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, A = 0, q, te, Q, U, J, le, X;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function he() {
      {
        if (A === 0) {
          q = console.log, te = console.info, Q = console.warn, U = console.error, J = console.group, le = console.groupCollapsed, X = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        A++;
      }
    }
    function Ce() {
      {
        if (A--, A === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, u, {
              value: q
            }),
            info: N({}, u, {
              value: te
            }),
            warn: N({}, u, {
              value: Q
            }),
            error: N({}, u, {
              value: U
            }),
            group: N({}, u, {
              value: J
            }),
            groupCollapsed: N({}, u, {
              value: le
            }),
            groupEnd: N({}, u, {
              value: X
            })
          });
        }
        A < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = x.ReactCurrentDispatcher, _e;
    function Ie(u, b, E) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (B) {
            var j = B.stack.trim().match(/\n( *(at )?)/);
            _e = j && j[1] || "";
          }
        return `
` + _e + u;
      }
    }
    var He = !1, Pe;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Re();
    }
    function Qe(u, b) {
      if (!u || He)
        return "";
      {
        var E = Pe.get(u);
        if (E !== void 0)
          return E;
      }
      var j;
      He = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = ge.current, ge.current = null, he();
      try {
        if (b) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (ye) {
              j = ye;
            }
            Reflect.construct(u, [], D);
          } else {
            try {
              D.call();
            } catch (ye) {
              j = ye;
            }
            u.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            j = ye;
          }
          u();
        }
      } catch (ye) {
        if (ye && j && typeof ye.stack == "string") {
          for (var I = ye.stack.split(`
`), ve = j.stack.split(`
`), oe = I.length - 1, se = ve.length - 1; oe >= 1 && se >= 0 && I[oe] !== ve[se]; )
            se--;
          for (; oe >= 1 && se >= 0; oe--, se--)
            if (I[oe] !== ve[se]) {
              if (oe !== 1 || se !== 1)
                do
                  if (oe--, se--, se < 0 || I[oe] !== ve[se]) {
                    var ke = `
` + I[oe].replace(" at new ", " at ");
                    return u.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", u.displayName)), typeof u == "function" && Pe.set(u, ke), ke;
                  }
                while (oe >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        He = !1, ge.current = K, Ce(), Error.prepareStackTrace = B;
      }
      var mt = u ? u.displayName || u.name : "", lt = mt ? Ie(mt) : "";
      return typeof u == "function" && Pe.set(u, lt), lt;
    }
    function Je(u, b, E) {
      return Qe(u, !1);
    }
    function P(u) {
      var b = u.prototype;
      return !!(b && b.isReactComponent);
    }
    function fe(u, b, E) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Qe(u, P(u));
      if (typeof u == "string")
        return Ie(u);
      switch (u) {
        case c:
          return Ie("Suspense");
        case f:
          return Ie("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            return Je(u.render);
          case d:
            return fe(u.type, b, E);
          case v: {
            var j = u, B = j._payload, K = j._init;
            try {
              return fe(K(B), b, E);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ae = {}, Ze = x.ReactDebugCurrentFrame;
    function ne(u) {
      if (u) {
        var b = u._owner, E = fe(u.type, u._source, b ? b.type : null);
        Ze.setExtraStackFrame(E);
      } else
        Ze.setExtraStackFrame(null);
    }
    function ae(u, b, E, j, B) {
      {
        var K = Function.call.bind(me);
        for (var D in u)
          if (K(u, D)) {
            var I = void 0;
            try {
              if (typeof u[D] != "function") {
                var ve = Error((j || "React class") + ": " + E + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              I = u[D](b, D, j, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              I = oe;
            }
            I && !(I instanceof Error) && (ne(B), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", E, D, typeof I), ne(null)), I instanceof Error && !(I.message in Ae) && (Ae[I.message] = !0, ne(B), y("Failed %s type: %s", E, I.message), ne(null));
          }
      }
    }
    var be = Array.isArray;
    function Le(u) {
      return be(u);
    }
    function Dr(u) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, E = b && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return E;
      }
    }
    function Fr(u) {
      try {
        return Jt(u), !1;
      } catch {
        return !0;
      }
    }
    function Jt(u) {
      return "" + u;
    }
    function Zt(u) {
      if (Fr(u))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dr(u)), Jt(u);
    }
    var at = x.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, tr, $t;
    $t = {};
    function Hr(u) {
      if (me.call(u, "ref")) {
        var b = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Vr(u) {
      if (me.call(u, "key")) {
        var b = Object.getOwnPropertyDescriptor(u, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Br(u, b) {
      if (typeof u.ref == "string" && at.current && b && at.current.stateNode !== b) {
        var E = R(at.current.type);
        $t[E] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(at.current.type), u.ref), $t[E] = !0);
      }
    }
    function Wr(u, b) {
      {
        var E = function() {
          er || (er = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Gr(u, b) {
      {
        var E = function() {
          tr || (tr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var rr = function(u, b, E, j, B, K, D) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: b,
        ref: E,
        props: D,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function it(u, b, E, j, B) {
      {
        var K, D = {}, I = null, ve = null;
        E !== void 0 && (Zt(E), I = "" + E), Vr(b) && (Zt(b.key), I = "" + b.key), Hr(b) && (ve = b.ref, Br(b, B));
        for (K in b)
          me.call(b, K) && !zr.hasOwnProperty(K) && (D[K] = b[K]);
        if (u && u.defaultProps) {
          var oe = u.defaultProps;
          for (K in oe)
            D[K] === void 0 && (D[K] = oe[K]);
        }
        if (I || ve) {
          var se = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          I && Wr(D, se), ve && Gr(D, se);
        }
        return rr(u, I, ve, B, j, at.current, D);
      }
    }
    var Ve = x.ReactCurrentOwner, st = x.ReactDebugCurrentFrame;
    function De(u) {
      if (u) {
        var b = u._owner, E = fe(u.type, u._source, b ? b.type : null);
        st.setExtraStackFrame(E);
      } else
        st.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function ze(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function nr() {
      {
        if (Ve.current) {
          var u = R(Ve.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function ue(u) {
      return "";
    }
    var Nt = {};
    function Ur(u) {
      {
        var b = nr();
        if (!b) {
          var E = typeof u == "string" ? u : u.displayName || u.name;
          E && (b = `

Check the top-level render call using <` + E + ">.");
        }
        return b;
      }
    }
    function ee(u, b) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var E = Ur(b);
        if (Nt[E])
          return;
        Nt[E] = !0;
        var j = "";
        u && u._owner && u._owner !== Ve.current && (j = " It was passed a child from " + R(u._owner.type) + "."), De(u), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, j), De(null);
      }
    }
    function ie(u, b) {
      {
        if (typeof u != "object")
          return;
        if (Le(u))
          for (var E = 0; E < u.length; E++) {
            var j = u[E];
            ze(j) && ee(j, b);
          }
        else if (ze(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var B = p(u);
          if (typeof B == "function" && B !== u.entries)
            for (var K = B.call(u), D; !(D = K.next()).done; )
              ze(D.value) && ee(D.value, b);
        }
      }
    }
    function Te(u) {
      {
        var b = u.type;
        if (b == null || typeof b == "string")
          return;
        var E;
        if (typeof b == "function")
          E = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === d))
          E = b.propTypes;
        else
          return;
        if (E) {
          var j = R(b);
          ae(E, u.props, "prop", j, u);
        } else if (b.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var B = R(b);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(u) {
      {
        for (var b = Object.keys(u.props), E = 0; E < b.length; E++) {
          var j = b[E];
          if (j !== "children" && j !== "key") {
            De(u), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), De(null);
            break;
          }
        }
        u.ref !== null && (De(u), y("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var ct = {};
    function or(u, b, E, j, B, K) {
      {
        var D = H(u);
        if (!D) {
          var I = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = ue();
          ve ? I += ve : I += nr();
          var oe;
          u === null ? oe = "null" : Le(u) ? oe = "array" : u !== void 0 && u.$$typeof === t ? (oe = "<" + (R(u.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof u, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, I);
        }
        var se = it(u, b, E, B, K);
        if (se == null)
          return se;
        if (D) {
          var ke = b.children;
          if (ke !== void 0)
            if (j)
              if (Le(ke)) {
                for (var mt = 0; mt < ke.length; mt++)
                  ie(ke[mt], u);
                Object.freeze && Object.freeze(ke);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ie(ke, u);
        }
        if (me.call(b, "key")) {
          var lt = R(u), ye = Object.keys(b).filter(function(yi) {
            return yi !== "key";
          }), Yr = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ct[lt + Yr]) {
            var bi = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Yr, lt, bi, lt), ct[lt + Yr] = !0;
          }
        }
        return u === n ? we(se) : Te(se), se;
      }
    }
    function ar(u, b, E) {
      return or(u, b, E, !0);
    }
    function It(u, b, E) {
      return or(u, b, E, !1);
    }
    var ir = It, Xr = ar;
    Dt.Fragment = n, Dt.jsx = ir, Dt.jsxs = Xr;
  }()), Dt;
}
process.env.NODE_ENV === "production" ? ln.exports = ki() : ln.exports = Oi();
var $ = ln.exports, Xo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        l && (a = o(a, n(l)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var i = "";
      for (var l in a)
        t.call(a, l) && a[l] && (i = o(i, l));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Xo);
var _i = Xo.exports;
const Gt = /* @__PURE__ */ wi(_i);
function nt() {
  return nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nt.apply(null, arguments);
}
var un = { exports: {} }, W = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function Pi() {
  if (no) return W;
  no = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case c:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case l:
                case i:
                case s:
                case v:
                case d:
                case a:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return W.ContextConsumer = i, W.ContextProvider = a, W.Element = e, W.ForwardRef = s, W.Fragment = r, W.Lazy = v, W.Memo = d, W.Portal = t, W.Profiler = o, W.StrictMode = n, W.Suspense = c, W.SuspenseList = f, W.isAsyncMode = function() {
    return !1;
  }, W.isConcurrentMode = function() {
    return !1;
  }, W.isContextConsumer = function(p) {
    return m(p) === i;
  }, W.isContextProvider = function(p) {
    return m(p) === a;
  }, W.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, W.isForwardRef = function(p) {
    return m(p) === s;
  }, W.isFragment = function(p) {
    return m(p) === r;
  }, W.isLazy = function(p) {
    return m(p) === v;
  }, W.isMemo = function(p) {
    return m(p) === d;
  }, W.isPortal = function(p) {
    return m(p) === t;
  }, W.isProfiler = function(p) {
    return m(p) === o;
  }, W.isStrictMode = function(p) {
    return m(p) === n;
  }, W.isSuspense = function(p) {
    return m(p) === c;
  }, W.isSuspenseList = function(p) {
    return m(p) === f;
  }, W.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === c || p === f || p === h || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === d || p.$$typeof === a || p.$$typeof === i || p.$$typeof === s || p.$$typeof === S || p.getModuleId !== void 0);
  }, W.typeOf = m, W;
}
var G = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function Ri() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), S = !1, m = !1, p = !1, x = !1, y = !1, k;
    k = Symbol.for("react.module.reference");
    function w(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === o || y || P === n || P === c || P === f || x || P === h || S || m || p || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === d || P.$$typeof === a || P.$$typeof === i || P.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === k || P.getModuleId !== void 0));
    }
    function C(P) {
      if (typeof P == "object" && P !== null) {
        var fe = P.$$typeof;
        switch (fe) {
          case e:
            var me = P.type;
            switch (me) {
              case r:
              case o:
              case n:
              case c:
              case f:
                return me;
              default:
                var Ae = me && me.$$typeof;
                switch (Ae) {
                  case l:
                  case i:
                  case s:
                  case v:
                  case d:
                  case a:
                    return Ae;
                  default:
                    return fe;
                }
            }
          case t:
            return fe;
        }
      }
    }
    var O = i, T = a, _ = e, V = s, H = r, Y = v, Z = d, R = t, N = o, A = n, q = c, te = f, Q = !1, U = !1;
    function J(P) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function le(P) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(P) {
      return C(P) === i;
    }
    function L(P) {
      return C(P) === a;
    }
    function he(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function Ce(P) {
      return C(P) === s;
    }
    function ge(P) {
      return C(P) === r;
    }
    function _e(P) {
      return C(P) === v;
    }
    function Ie(P) {
      return C(P) === d;
    }
    function He(P) {
      return C(P) === t;
    }
    function Pe(P) {
      return C(P) === o;
    }
    function Re(P) {
      return C(P) === n;
    }
    function Qe(P) {
      return C(P) === c;
    }
    function Je(P) {
      return C(P) === f;
    }
    G.ContextConsumer = O, G.ContextProvider = T, G.Element = _, G.ForwardRef = V, G.Fragment = H, G.Lazy = Y, G.Memo = Z, G.Portal = R, G.Profiler = N, G.StrictMode = A, G.Suspense = q, G.SuspenseList = te, G.isAsyncMode = J, G.isConcurrentMode = le, G.isContextConsumer = X, G.isContextProvider = L, G.isElement = he, G.isForwardRef = Ce, G.isFragment = ge, G.isLazy = _e, G.isMemo = Ie, G.isPortal = He, G.isProfiler = Pe, G.isStrictMode = Re, G.isSuspense = Qe, G.isSuspenseList = Je, G.isValidElementType = w, G.typeOf = C;
  }()), G;
}
process.env.NODE_ENV === "production" ? un.exports = Pi() : un.exports = Ri();
var Vt = un.exports;
function kr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return pe.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(kr(n)) : Vt.isFragment(n) && n.props ? r = r.concat(kr(n.props.children, t)) : r.push(n));
  }), r;
}
var fn = {}, Dn = [], Ai = function(t) {
  Dn.push(t);
};
function Fn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Dn.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function ji(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Dn.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Yo() {
  fn = {};
}
function qo(e, t, r) {
  !t && !fn[r] && (e(!1, r), fn[r] = !0);
}
function ot(e, t) {
  qo(Fn, e, t);
}
function Mi(e, t) {
  qo(ji, e, t);
}
ot.preMessage = Ai;
ot.resetWarned = Yo;
ot.noteOnce = Mi;
function re(e) {
  "@babel/helpers - typeof";
  return re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, re(e);
}
function $i(e, t) {
  if (re(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (re(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ko(e) {
  var t = $i(e, "string");
  return re(t) == "symbol" ? t : t + "";
}
function z(e, t, r) {
  return (t = Ko(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ao(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ao(Object(r), !0).forEach(function(n) {
      z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ao(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function io(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Ni(e) {
  return e && re(e) === "object" && io(e.nativeElement) ? e.nativeElement : io(e) ? e : null;
}
function Ii(e) {
  var t = Ni(e);
  if (t)
    return t;
  if (e instanceof pe.Component) {
    var r;
    return (r = eo.findDOMNode) === null || r === void 0 ? void 0 : r.call(eo, e);
  }
  return null;
}
function Qo(e, t, r) {
  var n = g.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Li = function(t, r) {
  typeof t == "function" ? t(r) : re(t) === "object" && t && "current" in t && (t.current = r);
}, Di = function(t) {
  var r, n, o = Vt.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Vt.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Vt.ForwardRef);
};
function so(e) {
  return /* @__PURE__ */ xi(e) && !Vt.isFragment(e);
}
Number(Si.split(".")[0]) >= 19;
function Ye(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function co(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ko(n.key), n);
  }
}
function qe(e, t, r) {
  return t && co(e.prototype, t), r && co(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function dn(e, t) {
  return dn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, dn(e, t);
}
function Rr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && dn(e, t);
}
function Tt(e) {
  return Tt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Tt(e);
}
function zn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zn = function() {
    return !!e;
  })();
}
function vn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jo(e, t) {
  if (t && (re(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vn(e);
}
function Zo(e) {
  var t = zn();
  return function() {
    var r, n = Tt(e);
    if (t) {
      var o = Tt(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Jo(this, r);
  };
}
function pn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fi(e) {
  if (Array.isArray(e)) return pn(e);
}
function ea(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Hn(e, t) {
  if (e) {
    if (typeof e == "string") return pn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pn(e, t) : void 0;
  }
}
function zi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xe(e) {
  return Fi(e) || ea(e) || Hn(e) || zi();
}
var ta = function(t) {
  return +setTimeout(t, 16);
}, ra = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (ta = function(t) {
  return window.requestAnimationFrame(t);
}, ra = function(t) {
  return window.cancelAnimationFrame(t);
});
var lo = 0, Ar = /* @__PURE__ */ new Map();
function na(e) {
  Ar.delete(e);
}
var Or = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  lo += 1;
  var n = lo;
  function o(a) {
    if (a === 0)
      na(n), t();
    else {
      var i = ta(function() {
        o(a - 1);
      });
      Ar.set(n, i);
    }
  }
  return o(r), n;
};
Or.cancel = function(e) {
  var t = Ar.get(e);
  return na(e), ra(t);
};
process.env.NODE_ENV !== "production" && (Or.ids = function() {
  return Ar;
});
function oa(e) {
  if (Array.isArray(e)) return e;
}
function Hi(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!s && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function aa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F(e, t) {
  return oa(e) || Hi(e, t) || Hn(e, t) || aa();
}
function Ut(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ke() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Vi(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var uo = "data-rc-order", fo = "data-rc-priority", Bi = "rc-util-key", hn = /* @__PURE__ */ new Map();
function ia() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Bi;
}
function jr(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Wi(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Vn(e) {
  return Array.from((hn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function sa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ke())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = Wi(n), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(uo, i), l && a && s.setAttribute(fo, "".concat(a)), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  var c = jr(t), f = c.firstChild;
  if (n) {
    if (l) {
      var d = (t.styles || Vn(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(uo)))
          return !1;
        var h = Number(v.getAttribute(fo) || 0);
        return a >= h;
      });
      if (d.length)
        return c.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    c.insertBefore(s, f);
  } else
    c.appendChild(s);
  return s;
}
function ca(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = jr(t);
  return (t.styles || Vn(r)).find(function(n) {
    return n.getAttribute(ia(t)) === e;
  });
}
function la(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ca(e, t);
  if (r) {
    var n = jr(t);
    n.removeChild(r);
  }
}
function Gi(e, t) {
  var r = hn.get(e);
  if (!r || !Vi(document, r)) {
    var n = sa("", t), o = n.parentNode;
    hn.set(e, o), e.removeChild(n);
  }
}
function dt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = jr(r), o = Vn(n), a = M(M({}, r), {}, {
    styles: o
  });
  Gi(n, a);
  var i = ca(t, a);
  if (i) {
    var l, s;
    if ((l = a.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = a.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = a.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var f = sa(e, a);
  return f.setAttribute(ia(a), t), f;
}
function Ui(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e[n];
  }
  return r;
}
function Xt(e, t) {
  if (e == null) return {};
  var r, n, o = Ui(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Xi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = n.has(a);
    if (ot(!s, "Warning: There may be circular references"), s)
      return !1;
    if (a === i)
      return !0;
    if (r && l > 1)
      return !1;
    n.add(a);
    var c = l + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var f = 0; f < a.length; f++)
        if (!o(a[f], i[f], c))
          return !1;
      return !0;
    }
    if (a && i && re(a) === "object" && re(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(v) {
        return o(a[v], i[v], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Yi = "%";
function gn(e) {
  return e.join(Yi);
}
var qi = /* @__PURE__ */ function() {
  function e(t) {
    Ye(this, e), z(this, "instanceId", void 0), z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return qe(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(gn(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(gn(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), wt = "data-token-hash", $e = "data-css-hash", Ki = "data-cache-path", tt = "__cssinjs_instance__";
function Qi() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat($e, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[tt] = o[tt] || e, o[tt] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat($e, "]"))).forEach(function(o) {
      var a = o.getAttribute($e);
      if (n[a]) {
        if (o[tt] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new qi(e);
}
var Mr = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: Qi(),
  defaultCache: !0
});
function Ji(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Bn = /* @__PURE__ */ function() {
  function e() {
    Ye(this, e), z(this, "cache", void 0), z(this, "keys", void 0), z(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return qe(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(l) {
        if (!i)
          i = void 0;
        else {
          var s;
          i = (s = i) === null || s === void 0 || (s = s.map) === null || s === void 0 ? void 0 : s.get(l);
        }
      }), (n = i) !== null && n !== void 0 && n.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(c, f) {
            var d = F(c, 2), v = d[1];
            return o.internalGet(f)[1] < v ? [f, o.internalGet(f)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = F(a, 1), l = i[0];
          this.delete(l);
        }
        this.keys.push(r);
      }
      var s = this.cache;
      r.forEach(function(c, f) {
        if (f === r.length - 1)
          s.set(c, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var d = s.get(c);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : s.set(c, {
            map: /* @__PURE__ */ new Map()
          }), s = s.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var a;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !Ji(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
z(Bn, "MAX_CACHE_SIZE", 20);
z(Bn, "MAX_CACHE_OFFSET", 5);
var vo = 0, ua = /* @__PURE__ */ function() {
  function e(t) {
    Ye(this, e), z(this, "derivatives", void 0), z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = vo, t.length === 0 && Fn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), vo += 1;
  }
  return qe(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), qr = new Bn();
function mn(e) {
  var t = Array.isArray(e) ? e : [e];
  return qr.has(t) || qr.set(t, new ua(t)), qr.get(t);
}
var Zi = /* @__PURE__ */ new WeakMap(), Kr = {};
function es(e, t) {
  for (var r = Zi, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Kr) || r.set(Kr, e()), r.get(Kr);
}
var po = /* @__PURE__ */ new WeakMap();
function Bt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = po.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var o = e[n];
    r += n, o instanceof ua ? r += o.id : o && re(o) === "object" ? r += Bt(o, t) : r += o;
  }), t && (r = Ut(r)), po.set(e, r)), r;
}
function ho(e, t) {
  return Ut("".concat(t, "_").concat(Bt(e, !0)));
}
var bn = Ke();
function go(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function _r(e, t, r) {
  var n, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var i = M(M({}, o), {}, (n = {}, z(n, wt, t), z(n, $e, r), n)), l = Object.keys(i).map(function(s) {
    var c = i[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(l, ">").concat(e, "</style>");
}
var mr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, ts = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = F(o, 2), i = a[0], l = a[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, fa = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var l, s, c = F(i, 2), f = c[0], d = c[1];
    if (n != null && (l = n.preserve) !== null && l !== void 0 && l[f])
      a[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (s = n.ignore) !== null && s !== void 0 && s[f])) {
      var v, h = mr(f, n == null ? void 0 : n.prefix);
      o[h] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[f]) ? "".concat(d, "px") : String(d), a[f] = "var(".concat(h, ")");
    }
  }), [a, ts(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, mo = process.env.NODE_ENV !== "test" && Ke() ? g.useLayoutEffect : g.useEffect, rs = function(t, r) {
  var n = g.useRef(!0);
  mo(function() {
    return t(n.current);
  }, r), mo(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ns = M({}, g), bo = ns.useInsertionEffect, os = function(t, r, n) {
  g.useMemo(t, n), rs(function() {
    return r(!0);
  }, n);
}, as = bo ? function(e, t, r) {
  return bo(function() {
    return e(), t();
  }, r);
} : os, is = M({}, g), ss = is.useInsertionEffect, cs = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && Fn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return g.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, ls = function() {
  return function(t) {
    t();
  };
}, us = typeof ss < "u" ? cs : ls;
function fs() {
  return !1;
}
var yn = !1;
function ds() {
  return yn;
}
const vs = process.env.NODE_ENV === "production" ? fs : ds;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Qr = window;
  if (typeof Qr.webpackHotUpdate == "function") {
    var ps = Qr.webpackHotUpdate;
    Qr.webpackHotUpdate = function() {
      return yn = !0, setTimeout(function() {
        yn = !1;
      }, 0), ps.apply(void 0, arguments);
    };
  }
}
function Wn(e, t, r, n, o) {
  var a = g.useContext(Mr), i = a.cache, l = [e].concat(Xe(t)), s = gn(l), c = us([s]), f = vs(), d = function(m) {
    i.opUpdate(s, function(p) {
      var x = p || [void 0, void 0], y = F(x, 2), k = y[0], w = k === void 0 ? 0 : k, C = y[1], O = C;
      process.env.NODE_ENV !== "production" && C && f && (n == null || n(O, f), O = null);
      var T = O || r(), _ = [w, T];
      return m ? m(_) : _;
    });
  };
  g.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var v = i.opGet(s);
  process.env.NODE_ENV !== "production" && !v && (d(), v = i.opGet(s));
  var h = v[1];
  return as(function() {
    o == null || o(h);
  }, function(S) {
    return d(function(m) {
      var p = F(m, 2), x = p[0], y = p[1];
      return S && x === 0 && (o == null || o(h)), [x + 1, y];
    }), function() {
      i.opUpdate(s, function(m) {
        var p = m || [], x = F(p, 2), y = x[0], k = y === void 0 ? 0 : y, w = x[1], C = k - 1;
        return C === 0 ? (c(function() {
          (S || !i.opGet(s)) && (n == null || n(w, !1));
        }), null) : [k - 1, w];
      });
    };
  }, [s]), h;
}
var hs = {}, gs = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", ut = /* @__PURE__ */ new Map();
function ms(e) {
  ut.set(e, (ut.get(e) || 0) + 1);
}
function bs(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(wt, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[tt] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var ys = 0;
function Ss(e, t) {
  ut.set(e, (ut.get(e) || 0) - 1);
  var r = Array.from(ut.keys()), n = r.filter(function(o) {
    var a = ut.get(o) || 0;
    return a <= 0;
  });
  r.length - n.length > ys && n.forEach(function(o) {
    bs(o, t), ut.delete(o);
  });
}
var xs = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = M(M({}, a), r);
  return o && (i = o(i)), i;
}, da = "token";
function Es(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ct(Mr), o = n.cache.instanceId, a = n.container, i = r.salt, l = i === void 0 ? "" : i, s = r.override, c = s === void 0 ? hs : s, f = r.formatToken, d = r.getComputedToken, v = r.cssVar, h = es(function() {
    return Object.assign.apply(Object, [{}].concat(Xe(t)));
  }, t), S = Bt(h), m = Bt(c), p = v ? Bt(v) : "", x = Wn(da, [l, e.id, S, m, p], function() {
    var y, k = d ? d(h, c, e) : xs(h, c, e, f), w = M({}, k), C = "";
    if (v) {
      var O = fa(k, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), T = F(O, 2);
      k = T[0], C = T[1];
    }
    var _ = ho(k, l);
    k._tokenKey = _, w._tokenKey = ho(w, l);
    var V = (y = v == null ? void 0 : v.key) !== null && y !== void 0 ? y : _;
    k._themeKey = V, ms(V);
    var H = "".concat(gs, "-").concat(Ut(_));
    return k._hashId = H, [k, H, w, C, (v == null ? void 0 : v.key) || ""];
  }, function(y) {
    Ss(y[0]._themeKey, o);
  }, function(y) {
    var k = F(y, 4), w = k[0], C = k[3];
    if (v && C) {
      var O = dt(C, Ut("css-variables-".concat(w._themeKey)), {
        mark: $e,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      O[tt] = o, O.setAttribute(wt, w._themeKey);
    }
  });
  return x;
}
var Cs = function(t, r, n) {
  var o = F(t, 5), a = o[2], i = o[3], l = o[4], s = n || {}, c = s.plain;
  if (!i)
    return null;
  var f = a._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, h = _r(i, l, f, v, c);
  return [d, f, h];
}, Ts = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, va = "comm", pa = "rule", ha = "decl", ws = "@import", ks = "@keyframes", Os = "@layer", ga = Math.abs, Gn = String.fromCharCode;
function ma(e) {
  return e.trim();
}
function br(e, t, r) {
  return e.replace(t, r);
}
function _s(e, t, r) {
  return e.indexOf(t, r);
}
function Yt(e, t) {
  return e.charCodeAt(t) | 0;
}
function qt(e, t, r) {
  return e.slice(t, r);
}
function Ue(e) {
  return e.length;
}
function Ps(e) {
  return e.length;
}
function sr(e, t) {
  return t.push(e), e;
}
var $r = 1, kt = 1, ba = 0, Oe = 0, ce = 0, _t = "";
function Un(e, t, r, n, o, a, i, l) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: $r, column: kt, length: i, return: "", siblings: l };
}
function Rs() {
  return ce;
}
function As() {
  return ce = Oe > 0 ? Yt(_t, --Oe) : 0, kt--, ce === 10 && (kt = 1, $r--), ce;
}
function Ne() {
  return ce = Oe < ba ? Yt(_t, Oe++) : 0, kt++, ce === 10 && (kt = 1, $r++), ce;
}
function vt() {
  return Yt(_t, Oe);
}
function yr() {
  return Oe;
}
function Nr(e, t) {
  return qt(_t, e, t);
}
function Sn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function js(e) {
  return $r = kt = 1, ba = Ue(_t = e), Oe = 0, [];
}
function Ms(e) {
  return _t = "", e;
}
function Jr(e) {
  return ma(Nr(Oe - 1, xn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $s(e) {
  for (; (ce = vt()) && ce < 33; )
    Ne();
  return Sn(e) > 2 || Sn(ce) > 3 ? "" : " ";
}
function Ns(e, t) {
  for (; --t && Ne() && !(ce < 48 || ce > 102 || ce > 57 && ce < 65 || ce > 70 && ce < 97); )
    ;
  return Nr(e, yr() + (t < 6 && vt() == 32 && Ne() == 32));
}
function xn(e) {
  for (; Ne(); )
    switch (ce) {
      case e:
        return Oe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xn(ce);
        break;
      case 40:
        e === 41 && xn(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Oe;
}
function Is(e, t) {
  for (; Ne() && e + ce !== 57; )
    if (e + ce === 84 && vt() === 47)
      break;
  return "/*" + Nr(t, Oe - 1) + "*" + Gn(e === 47 ? e : Ne());
}
function Ls(e) {
  for (; !Sn(vt()); )
    Ne();
  return Nr(e, Oe);
}
function Ds(e) {
  return Ms(Sr("", null, null, null, [""], e = js(e), 0, [0], e));
}
function Sr(e, t, r, n, o, a, i, l, s) {
  for (var c = 0, f = 0, d = i, v = 0, h = 0, S = 0, m = 1, p = 1, x = 1, y = 0, k = "", w = o, C = a, O = n, T = k; p; )
    switch (S = y, y = Ne()) {
      case 40:
        if (S != 108 && Yt(T, d - 1) == 58) {
          _s(T += br(Jr(y), "&", "&\f"), "&\f", ga(c ? l[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Jr(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += $s(S);
        break;
      case 92:
        T += Ns(yr() - 1, 7);
        continue;
      case 47:
        switch (vt()) {
          case 42:
          case 47:
            sr(Fs(Is(Ne(), yr()), t, r, s), s);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * m:
        l[c++] = Ue(T) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            p = 0;
          case 59 + f:
            x == -1 && (T = br(T, /\f/g, "")), h > 0 && Ue(T) - d && sr(h > 32 ? So(T + ";", n, r, d - 1, s) : So(br(T, " ", "") + ";", n, r, d - 2, s), s);
            break;
          case 59:
            T += ";";
          default:
            if (sr(O = yo(T, t, r, c, f, o, l, k, w = [], C = [], d, a), a), y === 123)
              if (f === 0)
                Sr(T, t, O, O, w, a, d, l, C);
              else
                switch (v === 99 && Yt(T, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Sr(e, O, O, n && sr(yo(e, O, O, 0, 0, o, l, k, o, w = [], d, C), C), o, C, d, l, n ? w : C);
                    break;
                  default:
                    Sr(T, O, O, O, [""], C, 0, l, C);
                }
        }
        c = f = h = 0, m = x = 1, k = T = "", d = i;
        break;
      case 58:
        d = 1 + Ue(T), h = S;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && As() == 125)
            continue;
        }
        switch (T += Gn(y), y * m) {
          case 38:
            x = f > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[c++] = (Ue(T) - 1) * x, x = 1;
            break;
          case 64:
            vt() === 45 && (T += Jr(Ne())), v = vt(), f = d = Ue(k = T += Ls(yr())), y++;
            break;
          case 45:
            S === 45 && Ue(T) == 2 && (m = 0);
        }
    }
  return a;
}
function yo(e, t, r, n, o, a, i, l, s, c, f, d) {
  for (var v = o - 1, h = o === 0 ? a : [""], S = Ps(h), m = 0, p = 0, x = 0; m < n; ++m)
    for (var y = 0, k = qt(e, v + 1, v = ga(p = i[m])), w = e; y < S; ++y)
      (w = ma(p > 0 ? h[y] + " " + k : br(k, /&\f/g, h[y]))) && (s[x++] = w);
  return Un(e, t, r, o === 0 ? pa : l, s, c, f, d);
}
function Fs(e, t, r, n) {
  return Un(e, t, r, va, Gn(Rs()), qt(e, 2, -2), 0, n);
}
function So(e, t, r, n, o) {
  return Un(e, t, r, ha, qt(e, 0, n), qt(e, n + 1, -1), n, o);
}
function En(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function zs(e, t, r, n) {
  switch (e.type) {
    case Os:
      if (e.children.length) break;
    case ws:
    case ha:
      return e.return = e.return || e.value;
    case va:
      return "";
    case ks:
      return e.return = e.value + "{" + En(e.children, n) + "}";
    case pa:
      if (!Ue(e.value = e.props.join(","))) return "";
  }
  return Ue(r = En(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ya(e, t) {
  var r = t.path, n = t.parentSelectors;
  ot(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Hs = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && ya("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Vs = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && ya("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, xo = "data-ant-cssinjs-cache-path", Sa = "_FILE_STYLE__", pt, xa = !0;
function Bs() {
  if (!pt && (pt = {}, Ke())) {
    var e = document.createElement("div");
    e.className = xo, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = F(a, 2), l = i[0], s = i[1];
      pt[l] = s;
    });
    var r = document.querySelector("style[".concat(xo, "]"));
    if (r) {
      var n;
      xa = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Ws(e) {
  return Bs(), !!pt[e];
}
function Gs(e) {
  var t = pt[e], r = null;
  if (t && Ke())
    if (xa)
      r = Sa;
    else {
      var n = document.querySelector("style[".concat($e, '="').concat(pt[e], '"]'));
      n ? r = n.innerHTML : delete pt[e];
    }
  return [r, t];
}
var Ea = "_skip_check_", Ca = "_multi_value_";
function xr(e) {
  var t = En(Ds(e), zs);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Us(e) {
  return re(e) === "object" && e && (Ea in e || Ca in e);
}
function Xs(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", f = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(f).concat(o).concat(c.slice(f.length)), [c].concat(Xe(s.slice(1))).join(" ");
  });
  return a.join(",");
}
var Ys = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, l = r.hashId, s = r.layer, c = r.path, f = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, h = r.linters, S = h === void 0 ? [] : h, m = "", p = {};
  function x(w) {
    var C = w.getName(l);
    if (!p[C]) {
      var O = e(w.style, r, {
        root: !1,
        parentSelectors: i
      }), T = F(O, 1), _ = T[0];
      p[C] = "@keyframes ".concat(w.getName(l)).concat(_);
    }
  }
  function y(w) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(O) {
      Array.isArray(O) ? y(O, C) : O && C.push(O);
    }), C;
  }
  var k = y(Array.isArray(t) ? t : [t]);
  return k.forEach(function(w) {
    var C = typeof w == "string" && !o ? {} : w;
    if (typeof C == "string")
      m += "".concat(C, `
`);
    else if (C._keyframe)
      x(C);
    else {
      var O = v.reduce(function(T, _) {
        var V;
        return (_ == null || (V = _.visit) === null || V === void 0 ? void 0 : V.call(_, T)) || T;
      }, C);
      Object.keys(O).forEach(function(T) {
        var _ = O[T];
        if (re(_) === "object" && _ && (T !== "animationName" || !_._keyframe) && !Us(_)) {
          var V = !1, H = T.trim(), Y = !1;
          (o || a) && l ? H.startsWith("@") ? V = !0 : H = Xs(T, l, f) : o && !l && (H === "&" || H === "") && (H = "", Y = !0);
          var Z = e(_, r, {
            root: Y,
            injectHash: V,
            parentSelectors: [].concat(Xe(i), [H])
          }), R = F(Z, 2), N = R[0], A = R[1];
          p = M(M({}, p), A), m += "".concat(H).concat(N);
        } else {
          let Q = function(U, J) {
            process.env.NODE_ENV !== "production" && (re(_) !== "object" || !(_ != null && _[Ea])) && [Hs, Vs].concat(Xe(S)).forEach(function(L) {
              return L(U, J, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var le = U.replace(/[A-Z]/g, function(L) {
              return "-".concat(L.toLowerCase());
            }), X = J;
            !Ts[U] && typeof X == "number" && X !== 0 && (X = "".concat(X, "px")), U === "animationName" && J !== null && J !== void 0 && J._keyframe && (x(J), X = J.getName(l)), m += "".concat(le, ":").concat(X, ";");
          };
          var q, te = (q = _ == null ? void 0 : _.value) !== null && q !== void 0 ? q : _;
          re(_) === "object" && _ !== null && _ !== void 0 && _[Ca] && Array.isArray(te) ? te.forEach(function(U) {
            Q(T, U);
          }) : Q(T, te);
        }
      });
    }
  }), o ? s && (m = "@layer ".concat(s.name, " {").concat(m, "}"), s.dependencies && (p["@layer ".concat(s.name)] = s.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(s.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, p];
};
function Ta(e, t) {
  return Ut("".concat(e.join("%")).concat(t));
}
function qs() {
  return null;
}
var wa = "style";
function Cn(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, f = g.useContext(Mr), d = f.autoClear, v = f.mock, h = f.defaultCache, S = f.hashPriority, m = f.container, p = f.ssrInline, x = f.transformers, y = f.linters, k = f.cache, w = f.layer, C = r._tokenKey, O = [C];
  w && O.push("layer"), O.push.apply(O, Xe(n));
  var T = bn;
  process.env.NODE_ENV !== "production" && v !== void 0 && (T = v === "client");
  var _ = Wn(
    wa,
    O,
    // Create cache if needed
    function() {
      var R = O.join("|");
      if (Ws(R)) {
        var N = Gs(R), A = F(N, 2), q = A[0], te = A[1];
        if (q)
          return [q, C, te, {}, l, c];
      }
      var Q = t(), U = Ys(Q, {
        hashId: o,
        hashPriority: S,
        layer: w ? a : void 0,
        path: n.join("-"),
        transformers: x,
        linters: y
      }), J = F(U, 2), le = J[0], X = J[1], L = xr(le), he = Ta(O, L);
      return [L, C, he, X, l, c];
    },
    // Remove cache if no need
    function(R, N) {
      var A = F(R, 3), q = A[2];
      (N || d) && bn && la(q, {
        mark: $e
      });
    },
    // Effect: Inject style here
    function(R) {
      var N = F(R, 4), A = N[0];
      N[1];
      var q = N[2], te = N[3];
      if (T && A !== Sa) {
        var Q = {
          mark: $e,
          prepend: w ? !1 : "queue",
          attachTo: m,
          priority: c
        }, U = typeof i == "function" ? i() : i;
        U && (Q.csp = {
          nonce: U
        });
        var J = [], le = [];
        Object.keys(te).forEach(function(L) {
          L.startsWith("@layer") ? J.push(L) : le.push(L);
        }), J.forEach(function(L) {
          dt(xr(te[L]), "_layer-".concat(L), M(M({}, Q), {}, {
            prepend: !0
          }));
        });
        var X = dt(A, q, Q);
        X[tt] = k.instanceId, X.setAttribute(wt, C), process.env.NODE_ENV !== "production" && X.setAttribute(Ki, O.join("|")), le.forEach(function(L) {
          dt(xr(te[L]), "_effect-".concat(L), Q);
        });
      }
    }
  ), V = F(_, 3), H = V[0], Y = V[1], Z = V[2];
  return function(R) {
    var N;
    if (!p || T || !h)
      N = /* @__PURE__ */ g.createElement(qs, null);
    else {
      var A;
      N = /* @__PURE__ */ g.createElement("style", nt({}, (A = {}, z(A, wt, Y), z(A, $e, Z), A), {
        dangerouslySetInnerHTML: {
          __html: H
        }
      }));
    }
    return /* @__PURE__ */ g.createElement(g.Fragment, null, N, R);
  };
}
var Ks = function(t, r, n) {
  var o = F(t, 6), a = o[0], i = o[1], l = o[2], s = o[3], c = o[4], f = o[5], d = n || {}, v = d.plain;
  if (c)
    return null;
  var h = a, S = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return h = _r(a, i, l, S, v), s && Object.keys(s).forEach(function(m) {
    if (!r[m]) {
      r[m] = !0;
      var p = xr(s[m]), x = _r(p, i, "_effect-".concat(m), S, v);
      m.startsWith("@layer") ? h = x + h : h += x;
    }
  }), [f, l, h];
}, ka = "cssVar", Qs = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, f = Ct(Mr), d = f.cache.instanceId, v = f.container, h = l._tokenKey, S = [].concat(Xe(t.path), [n, c, h]), m = Wn(ka, S, function() {
    var p = r(), x = fa(p, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: c
    }), y = F(x, 2), k = y[0], w = y[1], C = Ta(S, w);
    return [k, w, C, n];
  }, function(p) {
    var x = F(p, 3), y = x[2];
    bn && la(y, {
      mark: $e
    });
  }, function(p) {
    var x = F(p, 3), y = x[1], k = x[2];
    if (y) {
      var w = dt(y, k, {
        mark: $e,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      w[tt] = d, w.setAttribute(wt, n);
    }
  });
  return m;
}, Js = function(t, r, n) {
  var o = F(t, 4), a = o[1], i = o[2], l = o[3], s = n || {}, c = s.plain;
  if (!a)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = _r(a, l, i, d, c);
  return [f, i, v];
}, Ft;
Ft = {}, z(Ft, wa, Ks), z(Ft, da, Cs), z(Ft, ka, Js);
function bt(e) {
  return e.notSplit = !0, e;
}
bt(["borderTop", "borderBottom"]), bt(["borderTop"]), bt(["borderBottom"]), bt(["borderLeft", "borderRight"]), bt(["borderLeft"]), bt(["borderRight"]);
var Xn = /* @__PURE__ */ Ln({});
function Zs(e) {
  return oa(e) || ea(e) || Hn(e) || aa();
}
function Tn(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Oa(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Zs(t), a = o[0], i = o.slice(1), l;
  return !e && typeof a == "number" ? l = [] : Array.isArray(e) ? l = Xe(e) : l = M({}, e), n && r === void 0 && i.length === 1 ? delete l[a][i[0]] : l[a] = Oa(l[a], i, r, n), l;
}
function Zr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Tn(e, t.slice(0, -1)) ? e : Oa(e, t, r, n);
}
function ec(e) {
  return re(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Eo(e) {
  return Array.isArray(e) ? [] : {};
}
var tc = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function rc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Eo(t[0]);
  return t.forEach(function(o) {
    function a(i, l) {
      var s = new Set(l), c = Tn(o, i), f = Array.isArray(c);
      if (f || ec(c)) {
        if (!s.has(c)) {
          s.add(c);
          var d = Tn(n, i);
          f ? n = Zr(n, i, []) : (!d || re(d) !== "object") && (n = Zr(n, i, Eo(c))), tc(c).forEach(function(v) {
            a([].concat(Xe(i), [v]), s);
          });
        }
      } else
        n = Zr(n, i, c);
    }
    a([]);
  }), n;
}
function _a() {
}
let Ge = null;
function nc() {
  Ge = null, Yo();
}
let Pt = _a;
process.env.NODE_ENV !== "production" && (Pt = (e, t, r) => {
  ot(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && nc();
});
const Pa = /* @__PURE__ */ g.createContext({}), Ir = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(Pa), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = Ge;
        Ge || (Ge = {}), Ge[e] = Ge[e] || [], Ge[e].includes(a || "") || Ge[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ge);
      } else
        process.env.NODE_ENV !== "production" && Pt(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = _a, e;
}, oc = /* @__PURE__ */ Ln(void 0);
var ac = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, ic = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const Ra = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Co = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, ic),
  timePickerLocale: Object.assign({}, Ra)
}, Se = "${label} is not a valid ${type}", Lr = {
  locale: "en",
  Pagination: ac,
  DatePicker: Co,
  TimePicker: Ra,
  Calendar: Co,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Se,
        method: Se,
        array: Se,
        object: Se,
        number: Se,
        date: Se,
        boolean: Se,
        integer: Se,
        float: Se,
        regexp: Se,
        email: Se,
        url: Se,
        hex: Se
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
Object.assign({}, Lr.Modal);
let Er = [];
const To = () => Er.reduce((e, t) => Object.assign(Object.assign({}, e), t), Lr.Modal);
function sc(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Er.push(t), To(), () => {
      Er = Er.filter((r) => r !== t), To();
    };
  }
  Object.assign({}, Lr.Modal);
}
const Aa = /* @__PURE__ */ Ln(void 0), ja = "internalMark", Ma = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = Ir("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(n === ja, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => sc(t && t.Modal), [t]);
  const o = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(Aa.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Ma.displayName = "LocaleProvider");
function de(e, t) {
  cc(e) && (e = "100%");
  var r = lc(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function cr(e) {
  return Math.min(1, Math.max(0, e));
}
function cc(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function lc(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function $a(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function lr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ft(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function uc(e, t, r) {
  return {
    r: de(e, 255) * 255,
    g: de(t, 255) * 255,
    b: de(r, 255) * 255
  };
}
function wo(e, t, r) {
  e = de(e, 255), t = de(t, 255), r = de(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a = 0, i = 0, l = (n + o) / 2;
  if (n === o)
    i = 0, a = 0;
  else {
    var s = n - o;
    switch (i = l > 0.5 ? s / (2 - n - o) : s / (n + o), n) {
      case e:
        a = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / s + 2;
        break;
      case r:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function en(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function fc(e, t, r) {
  var n, o, a;
  if (e = de(e, 360), t = de(t, 100), r = de(r, 100), t === 0)
    o = r, a = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - i;
    n = en(l, i, e + 1 / 3), o = en(l, i, e), a = en(l, i, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function wn(e, t, r) {
  e = de(e, 255), t = de(t, 255), r = de(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a = 0, i = n, l = n - o, s = n === 0 ? 0 : l / n;
  if (n === o)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / l + 2;
        break;
      case r:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: i };
}
function dc(e, t, r) {
  e = de(e, 360) * 6, t = de(t, 100), r = de(r, 100);
  var n = Math.floor(e), o = e - n, a = r * (1 - t), i = r * (1 - o * t), l = r * (1 - (1 - o) * t), s = n % 6, c = [r, i, a, a, l, r][s], f = [l, r, r, i, a, a][s], d = [a, a, l, r, r, i][s];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function kn(e, t, r, n) {
  var o = [
    ft(Math.round(e).toString(16)),
    ft(Math.round(t).toString(16)),
    ft(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function vc(e, t, r, n, o) {
  var a = [
    ft(Math.round(e).toString(16)),
    ft(Math.round(t).toString(16)),
    ft(Math.round(r).toString(16)),
    ft(pc(n))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function pc(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ko(e) {
  return xe(e) / 255;
}
function xe(e) {
  return parseInt(e, 16);
}
function hc(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var On = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function yt(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, a = null, i = !1, l = !1;
  return typeof e == "string" && (e = bc(e)), typeof e == "object" && (Be(e.r) && Be(e.g) && Be(e.b) ? (t = uc(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Be(e.h) && Be(e.s) && Be(e.v) ? (n = lr(e.s), o = lr(e.v), t = dc(e.h, n, o), i = !0, l = "hsv") : Be(e.h) && Be(e.s) && Be(e.l) && (n = lr(e.s), a = lr(e.l), t = fc(e.h, n, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = $a(r), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var gc = "[-\\+]?\\d+%?", mc = "[-\\+]?\\d*\\.\\d+%?", rt = "(?:".concat(mc, ")|(?:").concat(gc, ")"), tn = "[\\s|\\(]+(".concat(rt, ")[,|\\s]+(").concat(rt, ")[,|\\s]+(").concat(rt, ")\\s*\\)?"), rn = "[\\s|\\(]+(".concat(rt, ")[,|\\s]+(").concat(rt, ")[,|\\s]+(").concat(rt, ")[,|\\s]+(").concat(rt, ")\\s*\\)?"), je = {
  CSS_UNIT: new RegExp(rt),
  rgb: new RegExp("rgb" + tn),
  rgba: new RegExp("rgba" + rn),
  hsl: new RegExp("hsl" + tn),
  hsla: new RegExp("hsla" + rn),
  hsv: new RegExp("hsv" + tn),
  hsva: new RegExp("hsva" + rn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function bc(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (On[e])
    e = On[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = je.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = je.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = je.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = je.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = je.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = je.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = je.hex8.exec(e), r ? {
    r: xe(r[1]),
    g: xe(r[2]),
    b: xe(r[3]),
    a: ko(r[4]),
    format: t ? "name" : "hex8"
  } : (r = je.hex6.exec(e), r ? {
    r: xe(r[1]),
    g: xe(r[2]),
    b: xe(r[3]),
    format: t ? "name" : "hex"
  } : (r = je.hex4.exec(e), r ? {
    r: xe(r[1] + r[1]),
    g: xe(r[2] + r[2]),
    b: xe(r[3] + r[3]),
    a: ko(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = je.hex3.exec(e), r ? {
    r: xe(r[1] + r[1]),
    g: xe(r[2] + r[2]),
    b: xe(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Be(e) {
  return !!je.CSS_UNIT.exec(String(e));
}
var Ee = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = hc(t)), this.originalInput = t;
      var o = yt(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, a = t.r / 255, i = t.g / 255, l = t.b / 255;
      return a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = $a(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = wn(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = wn(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = wo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = wo(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), kn(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), vc(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(de(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(de(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + kn(this.r, this.g, this.b, !1), r = 0, n = Object.entries(On); r < n.length; r++) {
        var o = n[r], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, a = !r && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = cr(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = cr(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = cr(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = cr(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new e(t).toRgb(), a = r / 100, i = {
        r: (o.r - n.r) * a + n.r,
        g: (o.g - n.g) * a + n.g,
        b: (o.b - n.b) * a + n.b,
        a: (o.a - n.a) * a + n.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, a = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, a.push(new e(n));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, a = r.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: n, s: o, v: a })), a = (a + l) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (n + i * a) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), ur = 2, Oo = 0.16, yc = 0.05, Sc = 0.05, xc = 0.15, Na = 5, Ia = 4, Ec = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function _o(e) {
  var t = e.r, r = e.g, n = e.b, o = wn(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function fr(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(kn(t, r, n, !1));
}
function Cc(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function Po(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - ur * t : Math.round(e.h) + ur * t : n = r ? Math.round(e.h) + ur * t : Math.round(e.h) - ur * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ro(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Oo * t : t === Ia ? n = e.s + Oo : n = e.s + yc * t, n > 1 && (n = 1), r && t === Na && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Ao(e, t, r) {
  var n;
  return r ? n = e.v + Sc * t : n = e.v - xc * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function gt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = yt(e), o = Na; o > 0; o -= 1) {
    var a = _o(n), i = fr(yt({
      h: Po(a, o, !0),
      s: Ro(a, o, !0),
      v: Ao(a, o, !0)
    }));
    r.push(i);
  }
  r.push(fr(n));
  for (var l = 1; l <= Ia; l += 1) {
    var s = _o(n), c = fr(yt({
      h: Po(s, l),
      s: Ro(s, l),
      v: Ao(s, l)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? Ec.map(function(f) {
    var d = f.index, v = f.opacity, h = fr(Cc(yt(t.backgroundColor || "#141414"), yt(r[d]), v * 100));
    return h;
  }) : r;
}
var nn = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Cr = {}, on = {};
Object.keys(nn).forEach(function(e) {
  Cr[e] = gt(nn[e]), Cr[e].primary = Cr[e][5], on[e] = gt(nn[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), on[e].primary = on[e][5];
});
var Tc = Cr.blue;
const La = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Kt = Object.assign(Object.assign({}, La), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function wc(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: a,
    colorError: i,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: f
  } = e, d = r(s), v = r(o), h = r(a), S = r(i), m = r(l), p = n(c, f), x = e.colorLink || e.colorInfo, y = r(x);
  return Object.assign(Object.assign({}, p), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: S[1],
    colorErrorBgHover: S[2],
    colorErrorBgActive: S[3],
    colorErrorBorder: S[3],
    colorErrorBorderHover: S[4],
    colorErrorHover: S[5],
    colorError: S[6],
    colorErrorActive: S[7],
    colorErrorTextHover: S[8],
    colorErrorText: S[9],
    colorErrorTextActive: S[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Ee("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const kc = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Oc(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, kc(n));
}
const _c = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Pc(e) {
  return (e + 8) / e;
}
function Rc(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, a = e * Math.pow(2.71828, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: Pc(r)
  }));
}
const Ac = (e) => {
  const t = Rc(e), r = t.map((f) => f.size), n = t.map((f) => f.lineHeight), o = r[1], a = r[0], i = r[2], l = n[1], s = n[0], c = n[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: l,
    lineHeightLG: c,
    lineHeightSM: s,
    fontHeight: Math.round(l * o),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(s * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function jc(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const We = (e, t) => new Ee(e).setAlpha(t).toRgbString(), zt = (e, t) => new Ee(e).darken(t).toHexString(), Mc = (e) => {
  const t = gt(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, $c = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: We(n, 0.88),
    colorTextSecondary: We(n, 0.65),
    colorTextTertiary: We(n, 0.45),
    colorTextQuaternary: We(n, 0.25),
    colorFill: We(n, 0.15),
    colorFillSecondary: We(n, 0.06),
    colorFillTertiary: We(n, 0.04),
    colorFillQuaternary: We(n, 0.02),
    colorBgLayout: zt(r, 4),
    colorBgContainer: zt(r, 0),
    colorBgElevated: zt(r, 0),
    colorBgSpotlight: We(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: zt(r, 15),
    colorBorderSecondary: zt(r, 6)
  };
};
function Nc(e) {
  const t = Object.keys(La).map((r) => {
    const n = gt(e[r]);
    return new Array(10).fill(1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), wc(e, {
    generateColorPalettes: Mc,
    generateNeutralColorPalettes: $c
  })), Ac(e.fontSize)), jc(e)), _c(e)), Oc(e));
}
const Da = mn(Nc), _n = {
  token: Kt,
  override: {
    override: Kt
  },
  hashed: !0
}, Fa = /* @__PURE__ */ pe.createContext(_n), za = "anticon", Ic = (e, t) => t || (e ? `ant-${e}` : "ant"), Rt = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Ic,
  iconPrefixCls: za
}), Lc = `-ant-${Date.now()}-${Math.random()}`;
function Dc(e, t) {
  const r = {}, n = (i, l) => {
    let s = i.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, o = (i, l) => {
    const s = new Ee(i), c = gt(s.toRgbString());
    r[`${l}-color`] = n(s), r[`${l}-color-disabled`] = c[1], r[`${l}-color-hover`] = c[4], r[`${l}-color-active`] = c[6], r[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), r[`${l}-color-deprecated-bg`] = c[0], r[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new Ee(t.primaryColor), l = gt(i.toRgbString());
    l.forEach((c, f) => {
      r[`primary-${f + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(i, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new Ee(l[0]);
    r["primary-color-active-deprecated-f-30"] = n(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(s, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function Fc(e, t) {
  const r = Dc(e, t);
  Ke() ? dt(r, `${Lc}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Pt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Pn = /* @__PURE__ */ g.createContext(!1), zc = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = g.useContext(Pn);
  return /* @__PURE__ */ g.createElement(Pn.Provider, {
    value: r ?? n
  }, t);
}, Ot = /* @__PURE__ */ g.createContext(void 0), Hc = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = g.useContext(Ot);
  return /* @__PURE__ */ g.createElement(Ot.Provider, {
    value: r || n
  }, t);
};
function Vc() {
  const e = Ct(Pn), t = Ct(Ot);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const Bc = "5.18.1";
function an(e) {
  return e >= 0 && e <= 255;
}
function dr(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new Ee(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: l,
    b: s
  } = new Ee(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((r - i * (1 - c)) / c), d = Math.round((n - l * (1 - c)) / c), v = Math.round((o - s * (1 - c)) / c);
    if (an(f) && an(d) && an(v))
      return new Ee({
        r: f,
        g: d,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Ee({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Wc = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Ha(e) {
  const {
    override: t
  } = e, r = Wc(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Kt).forEach((v) => {
    delete n[v];
  });
  const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, l = 768, s = 992, c = 1200, f = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: dr(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: dr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: dr(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 4,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: dr(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ee("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ee("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ee("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var jo = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Va = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, Ba = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, Gc = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Wa = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = jo(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = Ha(i), a && Object.entries(a).forEach((l) => {
    let [s, c] = l;
    const {
      theme: f
    } = c, d = jo(c, ["theme"]);
    let v = d;
    f && (v = Wa(Object.assign(Object.assign({}, i), d), {
      override: d
    }, f)), i[s] = v;
  }), i;
};
function Qt() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = pe.useContext(Fa), a = `${Bc}-${t || ""}`, i = r || Da, [l, s, c] = Es(i, [Kt, e], {
    salt: a,
    override: n,
    getComputedToken: Wa,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ha,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Va,
      ignore: Ba,
      preserve: Gc
    }
  });
  return [i, c, t ? s : "", l, o];
}
function Ga(e, t, r) {
  return t = Tt(t), Jo(e, zn() ? Reflect.construct(t, [], Tt(e).constructor) : t.apply(e, r));
}
let Ua = /* @__PURE__ */ qe(function e() {
  Ye(this, e);
});
const Xa = "CALC_UNIT", Uc = new RegExp(Xa, "g");
function sn(e) {
  return typeof e == "number" ? `${e}${Xa}` : e;
}
let Xc = /* @__PURE__ */ function(e) {
  function t(r, n) {
    var o;
    Ye(this, t), o = Ga(this, t), o.result = "";
    const a = typeof r;
    return o.unitlessCssVar = n, r instanceof t ? o.result = `(${r.result})` : a === "number" ? o.result = sn(r) : a === "string" && (o.result = r), o;
  }
  return Rr(t, e), qe(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${sn(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${sn(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} * ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} * ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} / ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} / ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(n) {
      return this.lowPriority || n ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(n) {
      const {
        unit: o
      } = n || {};
      let a = !0;
      return typeof o == "boolean" ? a = o : Array.from(this.unitlessCssVar).some((i) => this.result.includes(i)) && (a = !1), this.result = this.result.replace(Uc, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]);
}(Ua), Yc = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return Ye(this, t), n = Ga(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return Rr(t, e), qe(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result += n.result : typeof n == "number" && (this.result += n), this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result -= n.result : typeof n == "number" && (this.result -= n), this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return n instanceof t ? this.result *= n.result : typeof n == "number" && (this.result *= n), this;
    }
  }, {
    key: "div",
    value: function(n) {
      return n instanceof t ? this.result /= n.result : typeof n == "number" && (this.result /= n), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]);
}(Ua);
const qc = (e, t) => {
  const r = e === "css" ? Xc : Yc;
  return (n) => new r(n, t);
}, Kc = 1e3 * 60 * 10;
let Qc = /* @__PURE__ */ function() {
  function e() {
    Ye(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
  }
  return qe(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      const o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      const n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      return r.map((o) => o && typeof o == "object" ? `obj_${this.getObjectID(o)}` : `${typeof o}_${o}`).join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      const n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      if (this.accessBeat > 1e4) {
        const r = Date.now();
        this.lastAccessBeat.forEach((n, o) => {
          r - n > Kc && (this.map.delete(o), this.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]);
}();
const Mo = new Qc();
function Jc(e, t) {
  return pe.useMemo(() => {
    const r = Mo.get(t);
    if (r)
      return r;
    const n = e();
    return Mo.set(t, n), n;
  }, t);
}
function Zc(e) {
  var t = g.useRef();
  t.current = e;
  var r = g.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function Tr(e) {
  var t = g.useRef(!1), r = g.useState(e), n = F(r, 2), o = n[0], a = n[1];
  g.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(l, s) {
    s && t.current || a(l);
  }
  return [o, i];
}
const el = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), tl = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), rl = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let l = {};
  return n !== !1 && (l = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, l), i), {
      [o]: i
    })
  };
};
function nl(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((o) => go(o)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((o) => go(o)).join(",")})`;
    }
  };
}
const Ya = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Rn = !0;
function Yn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Ya)
    return Object.assign.apply(Object, [{}].concat(t));
  Rn = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => o[i]
      });
    });
  }), Rn = !0, n;
}
const $o = {};
function ol() {
}
const al = (e) => {
  let t, r = e, n = ol;
  return Ya && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, a) {
      return Rn && t.add(a), o[a];
    }
  }), n = (o, a) => {
    var i;
    $o[o] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = $o[o]) === null || i === void 0 ? void 0 : i.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, qa = (e, t) => {
  const [r, n] = Qt();
  return Cn({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, el()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Ka = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(Yn(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Qa = (e, t, r, n) => {
  const o = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((l) => {
      let [s, c] = l;
      var f;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ot(!(o != null && o[s]), `Component Token \`${String(s)}\` of ${e} is deprecated. Please use \`${String(c)}\` instead.`), (o != null && o[s] || o != null && o[c]) && ((f = o[c]) !== null && f !== void 0 || (o[c] = o == null ? void 0 : o[s]));
    });
  }
  const a = Object.assign(Object.assign({}, r), o);
  return Object.keys(a).forEach((i) => {
    a[i] === t[i] && delete a[i];
  }), a;
}, No = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function il(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e], [a] = o, i = o.join("-");
  return function(l) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l;
    const [c, f, d, v, h] = Qt(), {
      getPrefixCls: S,
      iconPrefixCls: m,
      csp: p
    } = Ct(Rt), x = S(), y = h ? "css" : "js", k = Jc(() => {
      const _ = /* @__PURE__ */ new Set();
      return h && Object.keys(n.unitless || {}).forEach((V) => {
        _.add(mr(V, h.prefix)), _.add(mr(V, No(a, h.prefix)));
      }), qc(y, _);
    }, [y, a, h && h.prefix]), {
      max: w,
      min: C
    } = nl(y), O = {
      theme: c,
      token: v,
      hashId: d,
      nonce: () => p == null ? void 0 : p.nonce,
      clientOnly: n.clientOnly,
      layer: {
        name: "antd"
      },
      // antd is always at top of styles
      order: n.order || -999
    };
    return Cn(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", x]
    }), () => [{
      // Link
      "&": tl(v)
    }]), qa(m, p), [Cn(Object.assign(Object.assign({}, O), {
      path: [i, l, m]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: _,
        flush: V
      } = al(v), H = Ka(a, f, r), Y = `.${l}`, Z = Qa(a, f, H, {
        deprecatedTokens: n.deprecatedTokens
      });
      h && Object.keys(H).forEach((A) => {
        H[A] = `var(${mr(A, No(a, h.prefix))})`;
      });
      const R = Yn(_, {
        componentCls: Y,
        prefixCls: l,
        iconCls: `.${m}`,
        antCls: `.${x}`,
        calc: k,
        // @ts-ignore
        max: w,
        // @ts-ignore
        min: C
      }, h ? H : Z), N = t(R, {
        hashId: d,
        prefixCls: l,
        rootPrefixCls: x,
        iconPrefixCls: m
      });
      return V(a, Z), [n.resetStyle === !1 ? null : rl(R, l, s, n.resetFont), N];
    }), d];
  };
}
const sl = (e, t, r) => {
  const {
    unitless: n,
    injectStyle: o = !0,
    prefixToken: a
  } = r, i = (s) => {
    let {
      rootCls: c,
      cssVar: f
    } = s;
    const [, d] = Qt();
    return Qs({
      path: [e],
      prefix: f.prefix,
      key: f == null ? void 0 : f.key,
      unitless: n,
      ignore: Ba,
      token: d,
      scope: c
    }, () => {
      const v = Ka(e, d, t), h = Qa(e, d, v, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(v).forEach((S) => {
        h[a(S)] = h[S], delete h[S];
      }), h;
    }), null;
  };
  return (s) => {
    const [, , , , c] = Qt();
    return [(f) => o && c ? /* @__PURE__ */ pe.createElement(pe.Fragment, null, /* @__PURE__ */ pe.createElement(i, {
      rootCls: s,
      cssVar: c,
      component: e
    }), f) : f, c == null ? void 0 : c.key];
  };
}, cl = (e, t, r, n) => {
  const o = Array.isArray(e) ? e[0] : e;
  function a(d) {
    return `${o}${d.slice(0, 1).toUpperCase()}${d.slice(1)}`;
  }
  const i = n && n.unitless || {}, l = Object.assign(Object.assign({}, Va), {
    [a("zIndexPopup")]: !0
  });
  Object.keys(i).forEach((d) => {
    l[a(d)] = i[d];
  });
  const s = Object.assign(Object.assign({}, n), {
    unitless: l,
    prefixToken: a
  }), c = il(e, t, r, s), f = sl(o, r, s);
  return function(d) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
    const [, h] = c(d, v), [S, m] = f(v);
    return [S, h, m];
  };
}, ll = Object.assign({}, g), {
  useId: Io
} = ll, ul = () => "", fl = typeof Io > "u" ? ul : Io;
function dl(e, t, r) {
  var n, o;
  const a = Ir("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, _n), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : _n.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = fl();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, f = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || s);
    process.env.NODE_ENV !== "production" && a(!c || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Qo(() => {
    var c, f;
    if (!e)
      return t;
    const d = Object.assign({}, l.components);
    Object.keys(e.components || {}).forEach((S) => {
      d[S] = Object.assign(Object.assign({}, d[S]), e.components[S]);
    });
    const v = `css-var-${s.replace(/:/g, "")}`, h = ((c = i.cssVar) !== null && c !== void 0 ? c : l.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof l.cssVar == "object" ? l.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((f = i.cssVar) === null || f === void 0 ? void 0 : f.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, l), i), {
      token: Object.assign(Object.assign({}, l.token), i.token),
      components: d,
      cssVar: h
    });
  }, [i, l], (c, f) => c.some((d, v) => {
    const h = f[v];
    return !Xi(d, h, !0);
  }));
}
var vl = ["children"], Ja = /* @__PURE__ */ g.createContext({});
function pl(e) {
  var t = e.children, r = Xt(e, vl);
  return /* @__PURE__ */ g.createElement(Ja.Provider, {
    value: r
  }, t);
}
var hl = /* @__PURE__ */ function(e) {
  Rr(r, e);
  var t = Zo(r);
  function r() {
    return Ye(this, r), t.apply(this, arguments);
  }
  return qe(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(g.Component), et = "none", vr = "appear", pr = "enter", hr = "leave", Lo = "none", Me = "prepare", St = "start", xt = "active", qn = "end", Za = "prepared";
function Do(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function gl(e, t) {
  var r = {
    animationend: Do("Animation", "AnimationEnd"),
    transitionend: Do("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var ml = gl(Ke(), typeof window < "u" ? window : {}), ei = {};
if (Ke()) {
  var bl = document.createElement("div");
  ei = bl.style;
}
var gr = {};
function ti(e) {
  if (gr[e])
    return gr[e];
  var t = ml[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in ei)
        return gr[e] = t[a], gr[e];
    }
  return "";
}
var ri = ti("animationend"), ni = ti("transitionend"), oi = !!(ri && ni), Fo = ri || "animationend", zo = ni || "transitionend";
function Ho(e, t) {
  if (!e) return null;
  if (re(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const yl = function(e) {
  var t = Et();
  function r(o) {
    o && (o.removeEventListener(zo, e), o.removeEventListener(Fo, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(zo, e), o.addEventListener(Fo, e), t.current = o);
  }
  return g.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var ai = Ke() ? Uo : Ht;
const Sl = function() {
  var e = g.useRef(null);
  function t() {
    Or.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Or(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return g.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var xl = [Me, St, xt, qn], El = [Me, Za], ii = !1, Cl = !0;
function si(e) {
  return e === xt || e === qn;
}
const Tl = function(e, t, r) {
  var n = Tr(Lo), o = F(n, 2), a = o[0], i = o[1], l = Sl(), s = F(l, 2), c = s[0], f = s[1];
  function d() {
    i(Me, !0);
  }
  var v = t ? El : xl;
  return ai(function() {
    if (a !== Lo && a !== qn) {
      var h = v.indexOf(a), S = v[h + 1], m = r(a);
      m === ii ? i(S, !0) : S && c(function(p) {
        function x() {
          p.isCanceled() || i(S, !0);
        }
        m === !0 ? x() : Promise.resolve(m).then(x);
      });
    }
  }, [e, a]), g.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, a];
};
function wl(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, l = i === void 0 ? !0 : i, s = n.motionLeave, c = s === void 0 ? !0 : s, f = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, h = n.onEnterPrepare, S = n.onLeavePrepare, m = n.onAppearStart, p = n.onEnterStart, x = n.onLeaveStart, y = n.onAppearActive, k = n.onEnterActive, w = n.onLeaveActive, C = n.onAppearEnd, O = n.onEnterEnd, T = n.onLeaveEnd, _ = n.onVisibleChanged, V = Tr(), H = F(V, 2), Y = H[0], Z = H[1], R = Tr(et), N = F(R, 2), A = N[0], q = N[1], te = Tr(null), Q = F(te, 2), U = Q[0], J = Q[1], le = Et(!1), X = Et(null);
  function L() {
    return r();
  }
  var he = Et(!1);
  function Ce() {
    q(et, !0), J(null, !0);
  }
  var ge = Zc(function(ne) {
    if (A !== et) {
      var ae = L();
      if (!(ne && !ne.deadline && ne.target !== ae)) {
        var be = he.current, Le;
        A === vr && be ? Le = C == null ? void 0 : C(ae, ne) : A === pr && be ? Le = O == null ? void 0 : O(ae, ne) : A === hr && be && (Le = T == null ? void 0 : T(ae, ne)), be && Le !== !1 && Ce();
      }
    }
  }), _e = yl(ge), Ie = F(_e, 1), He = Ie[0], Pe = function(ae) {
    switch (ae) {
      case vr:
        return z(z(z({}, Me, v), St, m), xt, y);
      case pr:
        return z(z(z({}, Me, h), St, p), xt, k);
      case hr:
        return z(z(z({}, Me, S), St, x), xt, w);
      default:
        return {};
    }
  }, Re = g.useMemo(function() {
    return Pe(A);
  }, [A]), Qe = Tl(A, !e, function(ne) {
    if (ne === Me) {
      var ae = Re[Me];
      return ae ? ae(L()) : ii;
    }
    if (fe in Re) {
      var be;
      J(((be = Re[fe]) === null || be === void 0 ? void 0 : be.call(Re, L(), null)) || null);
    }
    return fe === xt && A !== et && (He(L()), f > 0 && (clearTimeout(X.current), X.current = setTimeout(function() {
      ge({
        deadline: !0
      });
    }, f))), fe === Za && Ce(), Cl;
  }), Je = F(Qe, 2), P = Je[0], fe = Je[1], me = si(fe);
  he.current = me, ai(function() {
    Z(t);
    var ne = le.current;
    le.current = !0;
    var ae;
    !ne && t && l && (ae = vr), ne && t && a && (ae = pr), (ne && !t && c || !ne && d && !t && c) && (ae = hr);
    var be = Pe(ae);
    ae && (e || be[Me]) ? (q(ae), P()) : q(et);
  }, [t]), Ht(function() {
    // Cancel appear
    (A === vr && !l || // Cancel enter
    A === pr && !a || // Cancel leave
    A === hr && !c) && q(et);
  }, [l, a, c]), Ht(function() {
    return function() {
      le.current = !1, clearTimeout(X.current);
    };
  }, []);
  var Ae = g.useRef(!1);
  Ht(function() {
    Y && (Ae.current = !0), Y !== void 0 && A === et && ((Ae.current || Y) && (_ == null || _(Y)), Ae.current = !0);
  }, [Y, A]);
  var Ze = U;
  return Re[Me] && fe === St && (Ze = M({
    transition: "none"
  }, Ze)), [A, fe, Ze, Y ?? t];
}
function kl(e) {
  var t = e;
  re(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ g.forwardRef(function(o, a) {
    var i = o.visible, l = i === void 0 ? !0 : i, s = o.removeOnLeave, c = s === void 0 ? !0 : s, f = o.forceRender, d = o.children, v = o.motionName, h = o.leavedClassName, S = o.eventProps, m = g.useContext(Ja), p = m.motion, x = r(o, p), y = Et(), k = Et();
    function w() {
      try {
        return y.current instanceof HTMLElement ? y.current : Ii(k.current);
      } catch {
        return null;
      }
    }
    var C = wl(x, l, w, o), O = F(C, 4), T = O[0], _ = O[1], V = O[2], H = O[3], Y = g.useRef(H);
    H && (Y.current = !0);
    var Z = g.useCallback(function(U) {
      y.current = U, Li(a, U);
    }, [a]), R, N = M(M({}, S), {}, {
      visible: l
    });
    if (!d)
      R = null;
    else if (T === et)
      H ? R = d(M({}, N), Z) : !c && Y.current && h ? R = d(M(M({}, N), {}, {
        className: h
      }), Z) : f || !c && !h ? R = d(M(M({}, N), {}, {
        style: {
          display: "none"
        }
      }), Z) : R = null;
    else {
      var A;
      _ === Me ? A = "prepare" : si(_) ? A = "active" : _ === St && (A = "start");
      var q = Ho(v, "".concat(T, "-").concat(A));
      R = d(M(M({}, N), {}, {
        className: Gt(Ho(v, T), z(z({}, q, q && A), v, typeof v == "string")),
        style: V
      }), Z);
    }
    if (/* @__PURE__ */ g.isValidElement(R) && Di(R)) {
      var te = R, Q = te.ref;
      Q || (R = /* @__PURE__ */ g.cloneElement(R, {
        ref: Z
      }));
    }
    return /* @__PURE__ */ g.createElement(hl, {
      ref: k
    }, R);
  });
  return n.displayName = "CSSMotion", n;
}
const Ol = kl(oi);
var An = "add", jn = "keep", Mn = "remove", cn = "removed";
function _l(e) {
  var t;
  return e && re(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, M(M({}, t), {}, {
    key: String(t.key)
  });
}
function $n() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(_l);
}
function Pl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = $n(e), i = $n(t);
  a.forEach(function(c) {
    for (var f = !1, d = n; d < o; d += 1) {
      var v = i[d];
      if (v.key === c.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(h) {
          return M(M({}, h), {}, {
            status: An
          });
        })), n = d), r.push(M(M({}, v), {}, {
          status: jn
        })), n += 1, f = !0;
        break;
      }
    }
    f || r.push(M(M({}, c), {}, {
      status: Mn
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(c) {
    return M(M({}, c), {}, {
      status: An
    });
  })));
  var l = {};
  r.forEach(function(c) {
    var f = c.key;
    l[f] = (l[f] || 0) + 1;
  });
  var s = Object.keys(l).filter(function(c) {
    return l[c] > 1;
  });
  return s.forEach(function(c) {
    r = r.filter(function(f) {
      var d = f.key, v = f.status;
      return d !== c || v !== Mn;
    }), r.forEach(function(f) {
      f.key === c && (f.status = jn);
    });
  }), r;
}
var Rl = ["component", "children", "onVisibleChanged", "onAllRemoved"], Al = ["status"], jl = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Ml(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ol, r = /* @__PURE__ */ function(n) {
    Rr(a, n);
    var o = Zo(a);
    function a() {
      var i;
      Ye(this, a);
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      return i = o.call.apply(o, [this].concat(s)), z(vn(i), "state", {
        keyEntities: []
      }), z(vn(i), "removeKey", function(f) {
        var d = i.state.keyEntities, v = d.map(function(h) {
          return h.key !== f ? h : M(M({}, h), {}, {
            status: cn
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(h) {
          var S = h.status;
          return S !== cn;
        }).length;
      }), i;
    }
    return qe(a, [{
      key: "render",
      value: function() {
        var l = this, s = this.state.keyEntities, c = this.props, f = c.component, d = c.children, v = c.onVisibleChanged, h = c.onAllRemoved, S = Xt(c, Rl), m = f || g.Fragment, p = {};
        return jl.forEach(function(x) {
          p[x] = S[x], delete S[x];
        }), delete S.keys, /* @__PURE__ */ g.createElement(m, S, s.map(function(x, y) {
          var k = x.status, w = Xt(x, Al), C = k === An || k === jn;
          return /* @__PURE__ */ g.createElement(t, nt({}, p, {
            key: w.key,
            visible: C,
            eventProps: w,
            onVisibleChanged: function(T) {
              if (v == null || v(T, {
                key: w.key
              }), !T) {
                var _ = l.removeKey(w.key);
                _ === 0 && h && h();
              }
            }
          }), function(O, T) {
            return d(M(M({}, O), {}, {
              index: y
            }), T);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var c = l.keys, f = s.keyEntities, d = $n(c), v = Pl(f, d);
        return {
          keyEntities: v.filter(function(h) {
            var S = f.find(function(m) {
              var p = m.key;
              return h.key === p;
            });
            return !(S && S.status === cn && h.status === Mn);
          })
        };
      }
    }]), a;
  }(g.Component);
  return z(r, "defaultProps", {
    component: "div"
  }), r;
}
Ml(oi);
function $l(e) {
  const {
    children: t
  } = e, [, r] = Qt(), {
    motion: n
  } = r, o = g.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ g.createElement(pl, {
    motion: n
  }, t) : t;
}
const ci = /* @__PURE__ */ g.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Ir("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (ci.displayName = "PropWarning");
const Nl = process.env.NODE_ENV !== "production" ? ci : () => null;
var Il = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let Nn = !1;
process.env.NODE_ENV;
const Ll = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Dl = "ant";
let li;
function Fl() {
  return li || Dl;
}
function zl(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Hl = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (li = t), n && zl(n) && (process.env.NODE_ENV !== "production" && Pt(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Fc(Fl(), n));
}, Vl = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    form: i,
    locale: l,
    componentSize: s,
    direction: c,
    space: f,
    virtual: d,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: h,
    popupOverflow: S,
    legacyLocale: m,
    parentContext: p,
    iconPrefixCls: x,
    theme: y,
    componentDisabled: k,
    segmented: w,
    statistic: C,
    spin: O,
    calendar: T,
    carousel: _,
    cascader: V,
    collapse: H,
    typography: Y,
    checkbox: Z,
    descriptions: R,
    divider: N,
    drawer: A,
    skeleton: q,
    steps: te,
    image: Q,
    layout: U,
    list: J,
    mentions: le,
    modal: X,
    progress: L,
    result: he,
    slider: Ce,
    breadcrumb: ge,
    menu: _e,
    pagination: Ie,
    input: He,
    textArea: Pe,
    empty: Re,
    badge: Qe,
    radio: Je,
    rate: P,
    switch: fe,
    transfer: me,
    avatar: Ae,
    message: Ze,
    tag: ne,
    table: ae,
    card: be,
    tabs: Le,
    timeline: Dr,
    timePicker: Fr,
    upload: Jt,
    notification: Zt,
    tree: at,
    colorPicker: zr,
    datePicker: er,
    rangePicker: tr,
    flex: $t,
    wave: Hr,
    dropdown: Vr,
    warning: Br,
    tour: Wr,
    floatButtonGroup: Gr
  } = e, rr = g.useCallback((ee, ie) => {
    const {
      prefixCls: Te
    } = e;
    if (ie)
      return ie;
    const we = Te || p.getPrefixCls("");
    return ee ? `${we}-${ee}` : we;
  }, [p.getPrefixCls, e.prefixCls]), it = x || p.iconPrefixCls || za, Ve = r || p.csp;
  qa(it, Ve);
  const st = dl(y, p.theme, {
    prefixCls: rr("")
  });
  process.env.NODE_ENV !== "production" && (Nn = Nn || !!st);
  const De = {
    csp: Ve,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    locale: l || m,
    direction: c,
    space: f,
    virtual: d,
    popupMatchSelectWidth: h ?? v,
    popupOverflow: S,
    getPrefixCls: rr,
    iconPrefixCls: it,
    theme: st,
    segmented: w,
    statistic: C,
    spin: O,
    calendar: T,
    carousel: _,
    cascader: V,
    collapse: H,
    typography: Y,
    checkbox: Z,
    descriptions: R,
    divider: N,
    drawer: A,
    skeleton: q,
    steps: te,
    image: Q,
    input: He,
    textArea: Pe,
    layout: U,
    list: J,
    mentions: le,
    modal: X,
    progress: L,
    result: he,
    slider: Ce,
    breadcrumb: ge,
    menu: _e,
    pagination: Ie,
    empty: Re,
    badge: Qe,
    radio: Je,
    rate: P,
    switch: fe,
    transfer: me,
    avatar: Ae,
    message: Ze,
    tag: ne,
    table: ae,
    card: be,
    tabs: Le,
    timeline: Dr,
    timePicker: Fr,
    upload: Jt,
    notification: Zt,
    tree: at,
    colorPicker: zr,
    datePicker: er,
    rangePicker: tr,
    flex: $t,
    wave: Hr,
    dropdown: Vr,
    warning: Br,
    tour: Wr,
    floatButtonGroup: Gr
  };
  process.env.NODE_ENV !== "production" && Ir("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Fe = Object.assign({}, p);
  Object.keys(De).forEach((ee) => {
    De[ee] !== void 0 && (Fe[ee] = De[ee]);
  }), Ll.forEach((ee) => {
    const ie = e[ee];
    ie && (Fe[ee] = ie);
  }), typeof n < "u" && (Fe.button = Object.assign({
    autoInsertSpace: n
  }, Fe.button));
  const ze = Qo(() => Fe, Fe, (ee, ie) => {
    const Te = Object.keys(ee), we = Object.keys(ie);
    return Te.length !== we.length || Te.some((ct) => ee[ct] !== ie[ct]);
  }), nr = g.useMemo(() => ({
    prefixCls: it,
    csp: Ve
  }), [it, Ve]);
  let ue = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Nl, {
    dropdownMatchSelectWidth: v
  }), t);
  const Nt = g.useMemo(() => {
    var ee, ie, Te, we;
    return rc(((ee = Lr.Form) === null || ee === void 0 ? void 0 : ee.defaultValidateMessages) || {}, ((Te = (ie = ze.locale) === null || ie === void 0 ? void 0 : ie.Form) === null || Te === void 0 ? void 0 : Te.defaultValidateMessages) || {}, ((we = ze.form) === null || we === void 0 ? void 0 : we.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [ze, i == null ? void 0 : i.validateMessages]);
  Object.keys(Nt).length > 0 && (ue = /* @__PURE__ */ g.createElement(oc.Provider, {
    value: Nt
  }, ue)), l && (ue = /* @__PURE__ */ g.createElement(Ma, {
    locale: l,
    _ANT_MARK__: ja
  }, ue)), (it || Ve) && (ue = /* @__PURE__ */ g.createElement(Xn.Provider, {
    value: nr
  }, ue)), s && (ue = /* @__PURE__ */ g.createElement(Hc, {
    size: s
  }, ue)), ue = /* @__PURE__ */ g.createElement($l, null, ue);
  const Ur = g.useMemo(() => {
    const ee = st || {}, {
      algorithm: ie,
      token: Te,
      components: we,
      cssVar: ct
    } = ee, or = Il(ee, ["algorithm", "token", "components", "cssVar"]), ar = ie && (!Array.isArray(ie) || ie.length > 0) ? mn(ie) : Da, It = {};
    Object.entries(we || {}).forEach((Xr) => {
      let [u, b] = Xr;
      const E = Object.assign({}, b);
      "algorithm" in E && (E.algorithm === !0 ? E.theme = ar : (Array.isArray(E.algorithm) || typeof E.algorithm == "function") && (E.theme = mn(E.algorithm)), delete E.algorithm), It[u] = E;
    });
    const ir = Object.assign(Object.assign({}, Kt), Te);
    return Object.assign(Object.assign({}, or), {
      theme: ar,
      token: ir,
      components: It,
      override: Object.assign({
        override: ir
      }, It),
      cssVar: ct
    });
  }, [st]);
  return y && (ue = /* @__PURE__ */ g.createElement(Fa.Provider, {
    value: Ur
  }, ue)), ze.warning && (ue = /* @__PURE__ */ g.createElement(Pa.Provider, {
    value: ze.warning
  }, ue)), k !== void 0 && (ue = /* @__PURE__ */ g.createElement(zc, {
    disabled: k
  }, ue)), /* @__PURE__ */ g.createElement(Rt.Provider, {
    value: ze
  }, ue);
}, At = (e) => {
  const t = g.useContext(Rt), r = g.useContext(Aa);
  return /* @__PURE__ */ g.createElement(Vl, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
At.ConfigContext = Rt;
At.SizeContext = Ot;
At.config = Hl;
At.useConfig = Vc;
Object.defineProperty(At, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Pt(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Ot)
});
process.env.NODE_ENV !== "production" && (At.displayName = "ConfigProvider");
var Bl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function ui(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Wl(e) {
  return ui(e) instanceof ShadowRoot;
}
function Gl(e) {
  return Wl(e) ? ui(e) : null;
}
function Ul(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Xl(e, t) {
  ot(e, "[@ant-design/icons] ".concat(t));
}
function Vo(e) {
  return re(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (re(e.icon) === "object" || typeof e.icon == "function");
}
function Bo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Ul(r)] = n;
    }
    return t;
  }, {});
}
function In(e, t, r) {
  return r ? /* @__PURE__ */ pe.createElement(e.tag, M(M({
    key: t
  }, Bo(e.attrs)), r), (e.children || []).map(function(n, o) {
    return In(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ pe.createElement(e.tag, M({
    key: t
  }, Bo(e.attrs)), (e.children || []).map(function(n, o) {
    return In(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function fi(e) {
  return gt(e)[0];
}
function di(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Yl = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, ql = function(t) {
  var r = Ct(Xn), n = r.csp, o = r.prefixCls, a = Yl;
  o && (a = a.replace(/anticon/g, o)), Ht(function() {
    var i = t.current, l = Gl(i);
    dt(a, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: l
    });
  }, []);
}, Kl = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Wt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Ql(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Wt.primaryColor = t, Wt.secondaryColor = r || fi(t), Wt.calculated = !!r;
}
function Jl() {
  return M({}, Wt);
}
var jt = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, l = t.secondaryColor, s = Xt(t, Kl), c = g.useRef(), f = Wt;
  if (i && (f = {
    primaryColor: i,
    secondaryColor: l || fi(i)
  }), ql(c), Xl(Vo(r), "icon should be icon definiton, but got ".concat(r)), !Vo(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = M(M({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), In(d.icon, "svg-".concat(d.name), M(M({
    className: n,
    onClick: o,
    style: a,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: c
  }));
};
jt.displayName = "IconReact";
jt.getTwoToneColors = Jl;
jt.setTwoToneColors = Ql;
function vi(e) {
  var t = di(e), r = F(t, 2), n = r[0], o = r[1];
  return jt.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function Zl() {
  var e = jt.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var eu = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
vi(Tc.primary);
var Mt = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = Xt(e, eu), f = g.useContext(Xn), d = f.prefixCls, v = d === void 0 ? "anticon" : d, h = f.rootClassName, S = Gt(h, v, z(z({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!o || n.name === "loading"), r), m = i;
  m === void 0 && l && (m = -1);
  var p = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, x = di(s), y = F(x, 2), k = y[0], w = y[1];
  return /* @__PURE__ */ g.createElement("span", nt({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: S
  }), /* @__PURE__ */ g.createElement(jt, {
    icon: n,
    primaryColor: k,
    secondaryColor: w,
    style: p
  }));
});
Mt.displayName = "AntdIcon";
Mt.getTwoToneColor = Zl;
Mt.setTwoToneColor = vi;
var tu = function(t, r) {
  return /* @__PURE__ */ g.createElement(Mt, nt({}, t, {
    ref: r,
    icon: Bl
  }));
}, Kn = /* @__PURE__ */ g.forwardRef(tu);
process.env.NODE_ENV !== "production" && (Kn.displayName = "CheckCircleFilled");
var ru = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, nu = function(t, r) {
  return /* @__PURE__ */ g.createElement(Mt, nt({}, t, {
    ref: r,
    icon: ru
  }));
}, Qn = /* @__PURE__ */ g.forwardRef(nu);
process.env.NODE_ENV !== "production" && (Qn.displayName = "ExclamationCircleFilled");
var ou = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, au = function(t, r) {
  return /* @__PURE__ */ g.createElement(Mt, nt({}, t, {
    ref: r,
    icon: ou
  }));
}, Jn = /* @__PURE__ */ g.forwardRef(au);
process.env.NODE_ENV !== "production" && (Jn.displayName = "LoadingOutlined");
const iu = (e) => {
  const t = pe.useContext(Ot);
  return pe.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, su = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, cu = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${t}-item > ${r}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
}, lu = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, pi = cl("Space", (e) => {
  const t = Yn(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [cu(t), lu(t), su(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var hi = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const gi = /* @__PURE__ */ g.createContext(null), uu = (e) => {
  var {
    children: t
  } = e, r = hi(e, ["children"]);
  return /* @__PURE__ */ g.createElement(gi.Provider, {
    value: r
  }, t);
}, fu = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = g.useContext(Rt), {
    size: n,
    direction: o,
    block: a,
    prefixCls: i,
    className: l,
    rootClassName: s,
    children: c
  } = e, f = hi(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = iu((k) => n ?? k), v = t("space-compact", i), [h, S] = pi(v), m = Gt(v, S, {
    [`${v}-rtl`]: r === "rtl",
    [`${v}-block`]: a,
    [`${v}-vertical`]: o === "vertical"
  }, l, s), p = g.useContext(gi), x = kr(c), y = g.useMemo(() => x.map((k, w) => {
    const C = k && k.key || `${v}-item-${w}`;
    return /* @__PURE__ */ g.createElement(uu, {
      key: C,
      compactSize: d,
      compactDirection: o,
      isFirstItem: w === 0 && (!p || (p == null ? void 0 : p.isFirstItem)),
      isLastItem: w === x.length - 1 && (!p || (p == null ? void 0 : p.isLastItem))
    }, k);
  }), [n, x, p]);
  return x.length === 0 ? null : h(/* @__PURE__ */ g.createElement("div", Object.assign({
    className: m
  }, f), y));
};
function Wo(e) {
  return ["small", "middle", "large"].includes(e);
}
function Go(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const mi = /* @__PURE__ */ pe.createContext({
  latestIndex: 0
}), du = mi.Provider, vu = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: o,
    style: a
  } = e;
  const {
    latestIndex: i
  } = g.useContext(mi);
  return n == null ? null : /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", {
    className: t,
    style: a
  }, n), r < i && o && /* @__PURE__ */ g.createElement("span", {
    className: `${t}-split`
  }, o));
};
var pu = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const hu = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r, n, o;
  const {
    getPrefixCls: a,
    space: i,
    direction: l
  } = g.useContext(Rt), {
    size: s = (r = i == null ? void 0 : i.size) !== null && r !== void 0 ? r : "small",
    align: c,
    className: f,
    rootClassName: d,
    children: v,
    direction: h = "horizontal",
    prefixCls: S,
    split: m,
    style: p,
    wrap: x = !1,
    classNames: y,
    styles: k
  } = e, w = pu(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [C, O] = Array.isArray(s) ? s : [s, s], T = Wo(O), _ = Wo(C), V = Go(O), H = Go(C), Y = kr(v, {
    keepEmpty: !0
  }), Z = c === void 0 && h === "horizontal" ? "center" : c, R = a("space", S), [N, A, q] = pi(R), te = Gt(R, i == null ? void 0 : i.className, A, `${R}-${h}`, {
    [`${R}-rtl`]: l === "rtl",
    [`${R}-align-${Z}`]: Z,
    [`${R}-gap-row-${O}`]: T,
    [`${R}-gap-col-${C}`]: _
  }, f, d, q), Q = Gt(`${R}-item`, (n = y == null ? void 0 : y.item) !== null && n !== void 0 ? n : (o = i == null ? void 0 : i.classNames) === null || o === void 0 ? void 0 : o.item);
  let U = 0;
  const J = Y.map((L, he) => {
    var Ce, ge;
    L != null && (U = he);
    const _e = L && L.key || `${Q}-${he}`;
    return /* @__PURE__ */ g.createElement(vu, {
      className: Q,
      key: _e,
      index: he,
      split: m,
      style: (Ce = k == null ? void 0 : k.item) !== null && Ce !== void 0 ? Ce : (ge = i == null ? void 0 : i.styles) === null || ge === void 0 ? void 0 : ge.item
    }, L);
  }), le = g.useMemo(() => ({
    latestIndex: U
  }), [U]);
  if (Y.length === 0)
    return null;
  const X = {};
  return x && (X.flexWrap = "wrap"), !_ && H && (X.columnGap = C), !T && V && (X.rowGap = O), N(/* @__PURE__ */ g.createElement("div", Object.assign({
    ref: t,
    className: te,
    style: Object.assign(Object.assign(Object.assign({}, X), i == null ? void 0 : i.style), p)
  }, w), /* @__PURE__ */ g.createElement(du, {
    value: le
  }, J)));
}), Zn = hu;
Zn.Compact = fu;
process.env.NODE_ENV !== "production" && (Zn.displayName = "Space");
var Pr = function() {
  return Pr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Pr.apply(this, arguments);
};
function gu(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), o, a = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) a.push(o.value);
  } catch (l) {
    i = { error: l };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
var mu = function(e) {
  return typeof e == "function";
}, bu = function(e) {
  var t = gu(Ei(e), 2), r = t[0], n = t[1], o = Ci(function(a) {
    n(function(i) {
      var l = mu(a) ? a(i) : a;
      return l ? Pr(Pr({}, i), l) : i;
    });
  }, []);
  return [r, o];
}, ht = /* @__PURE__ */ ((e) => (e.Initial = "initial", e.Pending = "pending", e.Success = "success", e.Error = "error", e.Optional = "optional", e))(ht || {}), wr = /* @__PURE__ */ ((e) => (e.Send = "send", e.SendSelf = "sendSelf", e.SendAndBack = "sendAndBack", e))(wr || {});
const yu = ({ title: e, subTitle: t, status: r }) => {
  let n = /* @__PURE__ */ $.jsx("div", { className: "placeholder hidden" });
  switch (r) {
    case ht.Pending:
      n = /* @__PURE__ */ $.jsx(Jn, { style: { fontSize: "14px", color: "#006eff" } });
      break;
    case ht.Success:
      n = /* @__PURE__ */ $.jsx(Kn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
    case ht.Error:
      n = /* @__PURE__ */ $.jsx(Qn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
  }
  return /* @__PURE__ */ $.jsxs("div", { className: `send-task ${r ? `bg-${r}` : ""}`, children: [
    /* @__PURE__ */ $.jsxs("div", { className: "title-wrapper", children: [
      /* @__PURE__ */ $.jsx("div", { className: `title ${r ? `txt-${r}` : ""}`, children: e }),
      /* @__PURE__ */ $.jsx("div", { style: { width: "5px" } }),
      n
    ] }),
    /* @__PURE__ */ $.jsx("div", { className: `subtitle ${r ? `txt-${r}` : ""}`, children: t }),
    /* @__PURE__ */ $.jsx("div", { className: `border-line ${r ? `line-bg-${r}` : ""}` }),
    /* @__PURE__ */ $.jsx("div", { className: `caret ${r ? `cart-border-${r}` : ""}` }),
    /* @__PURE__ */ $.jsx("div", { className: `histogram ${r ? `line-bg-${r}` : ""}` })
  ] });
}, Su = ({ title: e, subTitle: t }) => /* @__PURE__ */ $.jsxs("div", { className: "send-self-task", children: [
  /* @__PURE__ */ $.jsxs("div", { className: "send-self-task-left-part", children: [
    /* @__PURE__ */ $.jsx("div", { className: "histogram" }),
    /* @__PURE__ */ $.jsx("div", { className: "border-line-top" }),
    /* @__PURE__ */ $.jsx("div", { className: "border-line-right" }),
    /* @__PURE__ */ $.jsx("div", { className: "border-line-bottom" }),
    /* @__PURE__ */ $.jsx("div", { className: "caret" })
  ] }),
  /* @__PURE__ */ $.jsxs("div", { className: "send-self-task-right-part", children: [
    /* @__PURE__ */ $.jsx("div", { className: "title", children: e }),
    /* @__PURE__ */ $.jsx("div", { className: "subtitle", children: t })
  ] })
] }), xu = ({ title: e, subTitle: t, status: r }) => {
  let n = /* @__PURE__ */ $.jsx("div", { className: "placeholder hidden" });
  switch (r) {
    case ht.Pending:
      n = /* @__PURE__ */ $.jsx(Jn, { style: { fontSize: "14px", color: "#006eff" } });
      break;
    case ht.Success:
      n = /* @__PURE__ */ $.jsx(Kn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
    case ht.Error:
      n = /* @__PURE__ */ $.jsx(Qn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
  }
  return /* @__PURE__ */ $.jsxs("div", { className: `send-and-back-task ${r ? `bg-${r}` : ""}`, children: [
    /* @__PURE__ */ $.jsxs("div", { className: "title-wrapper", children: [
      /* @__PURE__ */ $.jsx("div", { className: `title ${r ? `txt-${r}` : ""}`, children: e }),
      /* @__PURE__ */ $.jsx("div", { style: { width: "5px" } }),
      n
    ] }),
    /* @__PURE__ */ $.jsx("div", { className: `subtitle ${r ? `txt-${r}` : ""}`, children: t }),
    /* @__PURE__ */ $.jsx("div", { className: `border-line ${r ? `line-bg-${r}` : "line-bg-initial"}` }),
    /* @__PURE__ */ $.jsx("div", { className: `caret ${r ? `cart-border-${r}` : ""}` }),
    /* @__PURE__ */ $.jsx("div", { className: `caret-back ${r ? `caret-back-line-bg-${r}` : ""}` }),
    /* @__PURE__ */ $.jsx("div", { className: `histogram ${r ? `line-bg-${r}` : "line-bg-initial"}` }),
    /* @__PURE__ */ $.jsx("div", { className: `border-line-dotted ${r ? `line-bg-dot-${r}` : ""}` })
  ] });
}, ku = ({ roleList: e, taskList: t, taskGap: r = 8, componentId: n = "" }) => {
  const [o, a] = bu({
    calTaskList: t,
    calRoleList: e
  });
  Uo(() => {
    l();
  }, []);
  const i = Ti(() => {
    const s = e.length * 2, c = 100 / (2 * s - 4), f = 2 * c, d = [];
    for (let v = 1; v <= s; v++)
      v < 3 || v > s - 2 ? d.push(`${c}%`) : d.push(`${f}%`);
    return d.join(" ");
  }, []), l = () => {
    const s = {};
    o.calTaskList.forEach((c) => {
      var v;
      const f = (v = document.getElementById(`${n}-task-component-${c.taskSeq}`)) == null ? void 0 : v.getBoundingClientRect(), d = (f == null ? void 0 : f.height) || 0;
      s[c.taskSeq] = {
        height: d
      };
    }), o.calTaskList.forEach((c) => {
      const f = c.depTasks || [];
      let d = 0;
      (f == null ? void 0 : f.length) > 0 ? (f.forEach((v) => {
        d += s[v].height;
      }), c.taskOffset = d + (f == null ? void 0 : f.length) * r) : c.taskSeq === 1 ? c.taskOffset = 0 : c.taskOffset = d + r;
    }), o.calRoleList.forEach((c) => {
      var v, h;
      const f = (v = document.getElementById(`${n}-role-component-${c.roleSeq}`)) == null ? void 0 : v.getBoundingClientRect(), d = ((h = document.getElementById(`${n}-role-component-${c.roleSeq}`)) == null ? void 0 : h.offsetLeft) || 0;
      if (f) {
        const { height: S, width: m } = f, p = S + Cu;
        let x = 0;
        c.roleSeq === 1 ? x = 0 : c.roleSeq === e.length ? x = d + m - 8 : x = d + m / 2 - 8, c.divideLinePosition = {
          top: p,
          left: x
        };
      }
    }), a({
      calTaskList: o.calTaskList,
      calRoleList: o.calRoleList
    });
  };
  return /* @__PURE__ */ $.jsxs(
    "div",
    {
      id: "sequence-diagrams",
      className: "sequence-diagrams-2ad5122f-c389-48c5-b8c5-8d870e5100aa",
      style: { gridTemplateColumns: i, gridTemplateRows: "auto" },
      children: [
        o.calRoleList.map((s) => {
          const c = 2 * s.roleSeq - 1, f = 2 * s.roleSeq + 1, d = s.roleSeq === 1 ? "start" : s.roleSeq === e.length ? "end" : "center";
          return /* @__PURE__ */ $.jsxs(
            "div",
            {
              style: { gridColumnStart: c, gridColumnEnd: f },
              className: `unit-cell-${d}`,
              id: `${n}-role-component-${s.roleSeq}`,
              children: [
                /* @__PURE__ */ $.jsx(Zn, { children: /* @__PURE__ */ $.jsx("div", { children: s.roleName }) }),
                s.divideLinePosition && /* @__PURE__ */ $.jsx(
                  "div",
                  {
                    style: { left: s.divideLinePosition.left, top: s.divideLinePosition.top },
                    className: "divide-line"
                  }
                )
              ]
            },
            s.roleSeq
          );
        }),
        /* @__PURE__ */ $.jsx("div", { className: "divide-20" }),
        o.calTaskList.map((s) => {
          const c = Eu[s.type], f = s.from === 1 ? 1 : 2 * s.from, d = s.to === 1 ? 1 : s.to === e.length ? 2 * s.to + 1 : 2 * s.to;
          return /* @__PURE__ */ $.jsx(
            "div",
            {
              style: {
                // position: 'relative',
                marginTop: `${s.taskOffset}px`,
                gridColumnStart: f,
                gridColumnEnd: d,
                paddingLeft: `${s.from === 1 ? "8px" : ""}`
              },
              children: /* @__PURE__ */ $.jsx("div", { id: `${n}-task-component-${s.taskSeq}`, children: /* @__PURE__ */ $.jsx(c, { ...s }) })
            },
            s.taskSeq
          );
        })
      ]
    }
  );
}, Eu = {
  [wr.Send]: yu,
  [wr.SendSelf]: Su,
  [wr.SendAndBack]: xu
}, Cu = 20;
export {
  ku as SequenceDiagrams,
  ht as TaskStatus,
  wr as TaskType
};
