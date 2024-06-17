import * as h from "react";
import pe, { version as xi, isValidElement as Ei, useContext as Ct, createContext as Dn, useRef as Et, useLayoutEffect as Xo, useEffect as Vt, useState as Ci, useCallback as Ti, useMemo as wi } from "react";
import eo from "react-dom";
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var un = { exports: {} }, Lt = {};
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
function Oi() {
  if (to) return Lt;
  to = 1;
  var e = pe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, s, c) {
    var f, d = {}, v = null, g = null;
    c !== void 0 && (v = "" + c), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (f in s) n.call(s, f) && !a.hasOwnProperty(f) && (d[f] = s[f]);
    if (l && l.defaultProps) for (f in s = l.defaultProps, s) d[f] === void 0 && (d[f] = s[f]);
    return { $$typeof: t, type: l, key: v, ref: g, props: d, _owner: o.current };
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
function _i() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), S = Symbol.iterator, m = "@@iterator";
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
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || _ || u === o || u === c || u === f || T || u === g || w || C || O || typeof u == "object" && u !== null && (u.$$typeof === v || u.$$typeof === d || u.$$typeof === i || u.$$typeof === l || u.$$typeof === s || // This needs to include all possible module reference object
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
    function ge() {
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
    var he = x.ReactCurrentDispatcher, _e;
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
    var Ve = !1, Pe;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Re();
    }
    function Je(u, b) {
      if (!u || Ve)
        return "";
      {
        var E = Pe.get(u);
        if (E !== void 0)
          return E;
      }
      var j;
      Ve = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = he.current, he.current = null, ge();
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
        Ve = !1, he.current = K, Ce(), Error.prepareStackTrace = B;
      }
      var mt = u ? u.displayName || u.name : "", ut = mt ? Ie(mt) : "";
      return typeof u == "function" && Pe.set(u, ut), ut;
    }
    function Ze(u, b, E) {
      return Je(u, !1);
    }
    function P(u) {
      var b = u.prototype;
      return !!(b && b.isReactComponent);
    }
    function fe(u, b, E) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Je(u, P(u));
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
            return Ze(u.render);
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
    var me = Object.prototype.hasOwnProperty, Ae = {}, et = x.ReactDebugCurrentFrame;
    function ne(u) {
      if (u) {
        var b = u._owner, E = fe(u.type, u._source, b ? b.type : null);
        et.setExtraStackFrame(E);
      } else
        et.setExtraStackFrame(null);
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
    function Fr(u) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, E = b && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return E;
      }
    }
    function zr(u) {
      try {
        return er(u), !1;
      } catch {
        return !0;
      }
    }
    function er(u) {
      return "" + u;
    }
    function tr(u) {
      if (zr(u))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(u)), er(u);
    }
    var it = x.ReactCurrentOwner, Hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, nr, $t;
    $t = {};
    function Vr(u) {
      if (me.call(u, "ref")) {
        var b = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Br(u) {
      if (me.call(u, "key")) {
        var b = Object.getOwnPropertyDescriptor(u, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Wr(u, b) {
      if (typeof u.ref == "string" && it.current && b && it.current.stateNode !== b) {
        var E = R(it.current.type);
        $t[E] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(it.current.type), u.ref), $t[E] = !0);
      }
    }
    function Gr(u, b) {
      {
        var E = function() {
          rr || (rr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Ur(u, b) {
      {
        var E = function() {
          nr || (nr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var or = function(u, b, E, j, B, K, D) {
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
    function st(u, b, E, j, B) {
      {
        var K, D = {}, I = null, ve = null;
        E !== void 0 && (tr(E), I = "" + E), Br(b) && (tr(b.key), I = "" + b.key), Vr(b) && (ve = b.ref, Wr(b, B));
        for (K in b)
          me.call(b, K) && !Hr.hasOwnProperty(K) && (D[K] = b[K]);
        if (u && u.defaultProps) {
          var oe = u.defaultProps;
          for (K in oe)
            D[K] === void 0 && (D[K] = oe[K]);
        }
        if (I || ve) {
          var se = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          I && Gr(D, se), ve && Ur(D, se);
        }
        return or(u, I, ve, B, j, it.current, D);
      }
    }
    var Be = x.ReactCurrentOwner, ct = x.ReactDebugCurrentFrame;
    function De(u) {
      if (u) {
        var b = u._owner, E = fe(u.type, u._source, b ? b.type : null);
        ct.setExtraStackFrame(E);
      } else
        ct.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function ze(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function ar() {
      {
        if (Be.current) {
          var u = R(Be.current.type);
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
    function Xr(u) {
      {
        var b = ar();
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
        var E = Xr(b);
        if (Nt[E])
          return;
        Nt[E] = !0;
        var j = "";
        u && u._owner && u._owner !== Be.current && (j = " It was passed a child from " + R(u._owner.type) + "."), De(u), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, j), De(null);
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
    var lt = {};
    function ir(u, b, E, j, B, K) {
      {
        var D = H(u);
        if (!D) {
          var I = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = ue();
          ve ? I += ve : I += ar();
          var oe;
          u === null ? oe = "null" : Le(u) ? oe = "array" : u !== void 0 && u.$$typeof === t ? (oe = "<" + (R(u.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof u, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, I);
        }
        var se = st(u, b, E, B, K);
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
          var ut = R(u), ye = Object.keys(b).filter(function(Si) {
            return Si !== "key";
          }), qr = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lt[ut + qr]) {
            var yi = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qr, ut, yi, ut), lt[ut + qr] = !0;
          }
        }
        return u === n ? we(se) : Te(se), se;
      }
    }
    function sr(u, b, E) {
      return ir(u, b, E, !0);
    }
    function It(u, b, E) {
      return ir(u, b, E, !1);
    }
    var cr = It, Yr = sr;
    Dt.Fragment = n, Dt.jsx = cr, Dt.jsxs = Yr;
  }()), Dt;
}
process.env.NODE_ENV === "production" ? un.exports = Oi() : un.exports = _i();
var $ = un.exports, Yo = { exports: {} };
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
})(Yo);
var Pi = Yo.exports;
const Ut = /* @__PURE__ */ ki(Pi);
function ot() {
  return ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ot.apply(null, arguments);
}
var fn = { exports: {} }, W = {};
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
function Ri() {
  if (no) return W;
  no = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), S;
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
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === c || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === d || p.$$typeof === a || p.$$typeof === i || p.$$typeof === s || p.$$typeof === S || p.getModuleId !== void 0);
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
function Ai() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), S = !1, m = !1, p = !1, x = !1, y = !1, k;
    k = Symbol.for("react.module.reference");
    function w(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === o || y || P === n || P === c || P === f || x || P === g || S || m || p || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === d || P.$$typeof === a || P.$$typeof === i || P.$$typeof === s || // This needs to include all possible module reference object
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
    function ge(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function Ce(P) {
      return C(P) === s;
    }
    function he(P) {
      return C(P) === r;
    }
    function _e(P) {
      return C(P) === v;
    }
    function Ie(P) {
      return C(P) === d;
    }
    function Ve(P) {
      return C(P) === t;
    }
    function Pe(P) {
      return C(P) === o;
    }
    function Re(P) {
      return C(P) === n;
    }
    function Je(P) {
      return C(P) === c;
    }
    function Ze(P) {
      return C(P) === f;
    }
    G.ContextConsumer = O, G.ContextProvider = T, G.Element = _, G.ForwardRef = V, G.Fragment = H, G.Lazy = Y, G.Memo = Z, G.Portal = R, G.Profiler = N, G.StrictMode = A, G.Suspense = q, G.SuspenseList = te, G.isAsyncMode = J, G.isConcurrentMode = le, G.isContextConsumer = X, G.isContextProvider = L, G.isElement = ge, G.isForwardRef = Ce, G.isFragment = he, G.isLazy = _e, G.isMemo = Ie, G.isPortal = Ve, G.isProfiler = Pe, G.isStrictMode = Re, G.isSuspense = Je, G.isSuspenseList = Ze, G.isValidElementType = w, G.typeOf = C;
  }()), G;
}
process.env.NODE_ENV === "production" ? fn.exports = Ri() : fn.exports = Ai();
var Bt = fn.exports;
function Or(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return pe.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Or(n)) : Bt.isFragment(n) && n.props ? r = r.concat(Or(n.props.children, t)) : r.push(n));
  }), r;
}
var dn = {}, Fn = [], ji = function(t) {
  Fn.push(t);
};
function zn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Fn.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Mi(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Fn.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function qo() {
  dn = {};
}
function Ko(e, t, r) {
  !t && !dn[r] && (e(!1, r), dn[r] = !0);
}
function at(e, t) {
  Ko(zn, e, t);
}
function $i(e, t) {
  Ko(Mi, e, t);
}
at.preMessage = ji;
at.resetWarned = qo;
at.noteOnce = $i;
function re(e) {
  "@babel/helpers - typeof";
  return re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, re(e);
}
function Ni(e, t) {
  if (re(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (re(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qo(e) {
  var t = Ni(e, "string");
  return re(t) == "symbol" ? t : t + "";
}
function z(e, t, r) {
  return (t = Qo(t)) in e ? Object.defineProperty(e, t, {
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
function Ii(e) {
  return e && re(e) === "object" && io(e.nativeElement) ? e.nativeElement : io(e) ? e : null;
}
function Li(e) {
  var t = Ii(e);
  if (t)
    return t;
  if (e instanceof pe.Component) {
    var r;
    return (r = eo.findDOMNode) === null || r === void 0 ? void 0 : r.call(eo, e);
  }
  return null;
}
function Jo(e, t, r) {
  var n = h.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Di = function(t, r) {
  typeof t == "function" ? t(r) : re(t) === "object" && t && "current" in t && (t.current = r);
}, Fi = function(t) {
  var r, n, o = Bt.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Bt.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Bt.ForwardRef);
};
function so(e) {
  return /* @__PURE__ */ Ei(e) && !Bt.isFragment(e);
}
Number(xi.split(".")[0]) >= 19;
function qe(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function co(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Qo(n.key), n);
  }
}
function Ke(e, t, r) {
  return t && co(e.prototype, t), r && co(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function vn(e, t) {
  return vn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, vn(e, t);
}
function Ar(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && vn(e, t);
}
function Tt(e) {
  return Tt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Tt(e);
}
function Hn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Hn = function() {
    return !!e;
  })();
}
function pn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zo(e, t) {
  if (t && (re(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return pn(e);
}
function ea(e) {
  var t = Hn();
  return function() {
    var r, n = Tt(e);
    if (t) {
      var o = Tt(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Zo(this, r);
  };
}
function gn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zi(e) {
  if (Array.isArray(e)) return gn(e);
}
function ta(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vn(e, t) {
  if (e) {
    if (typeof e == "string") return gn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? gn(e, t) : void 0;
  }
}
function Hi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ye(e) {
  return zi(e) || ta(e) || Vn(e) || Hi();
}
var ra = function(t) {
  return +setTimeout(t, 16);
}, na = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (ra = function(t) {
  return window.requestAnimationFrame(t);
}, na = function(t) {
  return window.cancelAnimationFrame(t);
});
var lo = 0, jr = /* @__PURE__ */ new Map();
function oa(e) {
  jr.delete(e);
}
var _r = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  lo += 1;
  var n = lo;
  function o(a) {
    if (a === 0)
      oa(n), t();
    else {
      var i = ra(function() {
        o(a - 1);
      });
      jr.set(n, i);
    }
  }
  return o(r), n;
};
_r.cancel = function(e) {
  var t = jr.get(e);
  return oa(e), na(t);
};
process.env.NODE_ENV !== "production" && (_r.ids = function() {
  return jr;
});
function aa(e) {
  if (Array.isArray(e)) return e;
}
function Vi(e, t) {
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
function ia() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F(e, t) {
  return aa(e) || Vi(e, t) || Vn(e, t) || ia();
}
function Xt(e) {
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
function Qe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Bi(e, t) {
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
var uo = "data-rc-order", fo = "data-rc-priority", Wi = "rc-util-key", hn = /* @__PURE__ */ new Map();
function sa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Wi;
}
function Mr(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Gi(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Bn(e) {
  return Array.from((hn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ca(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qe())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = Gi(n), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(uo, i), l && a && s.setAttribute(fo, "".concat(a)), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  var c = Mr(t), f = c.firstChild;
  if (n) {
    if (l) {
      var d = (t.styles || Bn(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(uo)))
          return !1;
        var g = Number(v.getAttribute(fo) || 0);
        return a >= g;
      });
      if (d.length)
        return c.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    c.insertBefore(s, f);
  } else
    c.appendChild(s);
  return s;
}
function la(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Mr(t);
  return (t.styles || Bn(r)).find(function(n) {
    return n.getAttribute(sa(t)) === e;
  });
}
function ua(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = la(e, t);
  if (r) {
    var n = Mr(t);
    n.removeChild(r);
  }
}
function Ui(e, t) {
  var r = hn.get(e);
  if (!r || !Bi(document, r)) {
    var n = ca("", t), o = n.parentNode;
    hn.set(e, o), e.removeChild(n);
  }
}
function vt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Mr(r), o = Bn(n), a = M(M({}, r), {}, {
    styles: o
  });
  Ui(n, a);
  var i = la(t, a);
  if (i) {
    var l, s;
    if ((l = a.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = a.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = a.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var f = ca(e, a);
  return f.setAttribute(sa(a), t), f;
}
function Xi(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e[n];
  }
  return r;
}
function Yt(e, t) {
  if (e == null) return {};
  var r, n, o = Xi(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Yi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = n.has(a);
    if (at(!s, "Warning: There may be circular references"), s)
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
var qi = "%";
function mn(e) {
  return e.join(qi);
}
var Ki = /* @__PURE__ */ function() {
  function e(t) {
    qe(this, e), z(this, "instanceId", void 0), z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ke(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(mn(r));
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
      return this.opUpdate(mn(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), wt = "data-token-hash", $e = "data-css-hash", Qi = "data-cache-path", rt = "__cssinjs_instance__";
function Ji() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat($e, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[rt] = o[rt] || e, o[rt] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat($e, "]"))).forEach(function(o) {
      var a = o.getAttribute($e);
      if (n[a]) {
        if (o[rt] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new Ki(e);
}
var $r = /* @__PURE__ */ h.createContext({
  hashPriority: "low",
  cache: Ji(),
  defaultCache: !0
});
function Zi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Wn = /* @__PURE__ */ function() {
  function e() {
    qe(this, e), z(this, "cache", void 0), z(this, "keys", void 0), z(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ke(e, [{
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
          return !Zi(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
z(Wn, "MAX_CACHE_SIZE", 20);
z(Wn, "MAX_CACHE_OFFSET", 5);
var vo = 0, fa = /* @__PURE__ */ function() {
  function e(t) {
    qe(this, e), z(this, "derivatives", void 0), z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = vo, t.length === 0 && zn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), vo += 1;
  }
  return Ke(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), Kr = new Wn();
function bn(e) {
  var t = Array.isArray(e) ? e : [e];
  return Kr.has(t) || Kr.set(t, new fa(t)), Kr.get(t);
}
var es = /* @__PURE__ */ new WeakMap(), Qr = {};
function ts(e, t) {
  for (var r = es, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Qr) || r.set(Qr, e()), r.get(Qr);
}
var po = /* @__PURE__ */ new WeakMap();
function Wt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = po.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var o = e[n];
    r += n, o instanceof fa ? r += o.id : o && re(o) === "object" ? r += Wt(o, t) : r += o;
  }), t && (r = Xt(r)), po.set(e, r)), r;
}
function go(e, t) {
  return Xt("".concat(t, "_").concat(Wt(e, !0)));
}
var yn = Qe();
function ho(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Pr(e, t, r) {
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
var yr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, rs = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = F(o, 2), i = a[0], l = a[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, da = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var l, s, c = F(i, 2), f = c[0], d = c[1];
    if (n != null && (l = n.preserve) !== null && l !== void 0 && l[f])
      a[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (s = n.ignore) !== null && s !== void 0 && s[f])) {
      var v, g = yr(f, n == null ? void 0 : n.prefix);
      o[g] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[f]) ? "".concat(d, "px") : String(d), a[f] = "var(".concat(g, ")");
    }
  }), [a, rs(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, mo = process.env.NODE_ENV !== "test" && Qe() ? h.useLayoutEffect : h.useEffect, ns = function(t, r) {
  var n = h.useRef(!0);
  mo(function() {
    return t(n.current);
  }, r), mo(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, os = M({}, h), bo = os.useInsertionEffect, as = function(t, r, n) {
  h.useMemo(t, n), ns(function() {
    return r(!0);
  }, n);
}, is = bo ? function(e, t, r) {
  return bo(function() {
    return e(), t();
  }, r);
} : as, ss = M({}, h), cs = ss.useInsertionEffect, ls = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && zn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return h.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, us = function() {
  return function(t) {
    t();
  };
}, fs = typeof cs < "u" ? ls : us;
function ds() {
  return !1;
}
var Sn = !1;
function vs() {
  return Sn;
}
const ps = process.env.NODE_ENV === "production" ? ds : vs;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Jr = window;
  if (typeof Jr.webpackHotUpdate == "function") {
    var gs = Jr.webpackHotUpdate;
    Jr.webpackHotUpdate = function() {
      return Sn = !0, setTimeout(function() {
        Sn = !1;
      }, 0), gs.apply(void 0, arguments);
    };
  }
}
function Gn(e, t, r, n, o) {
  var a = h.useContext($r), i = a.cache, l = [e].concat(Ye(t)), s = mn(l), c = fs([s]), f = ps(), d = function(m) {
    i.opUpdate(s, function(p) {
      var x = p || [void 0, void 0], y = F(x, 2), k = y[0], w = k === void 0 ? 0 : k, C = y[1], O = C;
      process.env.NODE_ENV !== "production" && C && f && (n == null || n(O, f), O = null);
      var T = O || r(), _ = [w, T];
      return m ? m(_) : _;
    });
  };
  h.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var v = i.opGet(s);
  process.env.NODE_ENV !== "production" && !v && (d(), v = i.opGet(s));
  var g = v[1];
  return is(function() {
    o == null || o(g);
  }, function(S) {
    return d(function(m) {
      var p = F(m, 2), x = p[0], y = p[1];
      return S && x === 0 && (o == null || o(g)), [x + 1, y];
    }), function() {
      i.opUpdate(s, function(m) {
        var p = m || [], x = F(p, 2), y = x[0], k = y === void 0 ? 0 : y, w = x[1], C = k - 1;
        return C === 0 ? (c(function() {
          (S || !i.opGet(s)) && (n == null || n(w, !1));
        }), null) : [k - 1, w];
      });
    };
  }, [s]), g;
}
var hs = {}, ms = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", ft = /* @__PURE__ */ new Map();
function bs(e) {
  ft.set(e, (ft.get(e) || 0) + 1);
}
function ys(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(wt, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[rt] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Ss = 0;
function xs(e, t) {
  ft.set(e, (ft.get(e) || 0) - 1);
  var r = Array.from(ft.keys()), n = r.filter(function(o) {
    var a = ft.get(o) || 0;
    return a <= 0;
  });
  r.length - n.length > Ss && n.forEach(function(o) {
    ys(o, t), ft.delete(o);
  });
}
var Es = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = M(M({}, a), r);
  return o && (i = o(i)), i;
}, va = "token";
function Cs(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ct($r), o = n.cache.instanceId, a = n.container, i = r.salt, l = i === void 0 ? "" : i, s = r.override, c = s === void 0 ? hs : s, f = r.formatToken, d = r.getComputedToken, v = r.cssVar, g = ts(function() {
    return Object.assign.apply(Object, [{}].concat(Ye(t)));
  }, t), S = Wt(g), m = Wt(c), p = v ? Wt(v) : "", x = Gn(va, [l, e.id, S, m, p], function() {
    var y, k = d ? d(g, c, e) : Es(g, c, e, f), w = M({}, k), C = "";
    if (v) {
      var O = da(k, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), T = F(O, 2);
      k = T[0], C = T[1];
    }
    var _ = go(k, l);
    k._tokenKey = _, w._tokenKey = go(w, l);
    var V = (y = v == null ? void 0 : v.key) !== null && y !== void 0 ? y : _;
    k._themeKey = V, bs(V);
    var H = "".concat(ms, "-").concat(Xt(_));
    return k._hashId = H, [k, H, w, C, (v == null ? void 0 : v.key) || ""];
  }, function(y) {
    xs(y[0]._themeKey, o);
  }, function(y) {
    var k = F(y, 4), w = k[0], C = k[3];
    if (v && C) {
      var O = vt(C, Xt("css-variables-".concat(w._themeKey)), {
        mark: $e,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      O[rt] = o, O.setAttribute(wt, w._themeKey);
    }
  });
  return x;
}
var Ts = function(t, r, n) {
  var o = F(t, 5), a = o[2], i = o[3], l = o[4], s = n || {}, c = s.plain;
  if (!i)
    return null;
  var f = a._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, g = Pr(i, l, f, v, c);
  return [d, f, g];
}, ws = {
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
}, pa = "comm", ga = "rule", ha = "decl", ks = "@import", Os = "@keyframes", _s = "@layer", ma = Math.abs, Un = String.fromCharCode;
function ba(e) {
  return e.trim();
}
function Sr(e, t, r) {
  return e.replace(t, r);
}
function Ps(e, t, r) {
  return e.indexOf(t, r);
}
function qt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Kt(e, t, r) {
  return e.slice(t, r);
}
function Xe(e) {
  return e.length;
}
function Rs(e) {
  return e.length;
}
function lr(e, t) {
  return t.push(e), e;
}
var Nr = 1, kt = 1, ya = 0, Oe = 0, ce = 0, _t = "";
function Xn(e, t, r, n, o, a, i, l) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Nr, column: kt, length: i, return: "", siblings: l };
}
function As() {
  return ce;
}
function js() {
  return ce = Oe > 0 ? qt(_t, --Oe) : 0, kt--, ce === 10 && (kt = 1, Nr--), ce;
}
function Ne() {
  return ce = Oe < ya ? qt(_t, Oe++) : 0, kt++, ce === 10 && (kt = 1, Nr++), ce;
}
function pt() {
  return qt(_t, Oe);
}
function xr() {
  return Oe;
}
function Ir(e, t) {
  return Kt(_t, e, t);
}
function xn(e) {
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
function Ms(e) {
  return Nr = kt = 1, ya = Xe(_t = e), Oe = 0, [];
}
function $s(e) {
  return _t = "", e;
}
function Zr(e) {
  return ba(Ir(Oe - 1, En(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ns(e) {
  for (; (ce = pt()) && ce < 33; )
    Ne();
  return xn(e) > 2 || xn(ce) > 3 ? "" : " ";
}
function Is(e, t) {
  for (; --t && Ne() && !(ce < 48 || ce > 102 || ce > 57 && ce < 65 || ce > 70 && ce < 97); )
    ;
  return Ir(e, xr() + (t < 6 && pt() == 32 && Ne() == 32));
}
function En(e) {
  for (; Ne(); )
    switch (ce) {
      case e:
        return Oe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && En(ce);
        break;
      case 40:
        e === 41 && En(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Oe;
}
function Ls(e, t) {
  for (; Ne() && e + ce !== 57; )
    if (e + ce === 84 && pt() === 47)
      break;
  return "/*" + Ir(t, Oe - 1) + "*" + Un(e === 47 ? e : Ne());
}
function Ds(e) {
  for (; !xn(pt()); )
    Ne();
  return Ir(e, Oe);
}
function Fs(e) {
  return $s(Er("", null, null, null, [""], e = Ms(e), 0, [0], e));
}
function Er(e, t, r, n, o, a, i, l, s) {
  for (var c = 0, f = 0, d = i, v = 0, g = 0, S = 0, m = 1, p = 1, x = 1, y = 0, k = "", w = o, C = a, O = n, T = k; p; )
    switch (S = y, y = Ne()) {
      case 40:
        if (S != 108 && qt(T, d - 1) == 58) {
          Ps(T += Sr(Zr(y), "&", "&\f"), "&\f", ma(c ? l[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Zr(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Ns(S);
        break;
      case 92:
        T += Is(xr() - 1, 7);
        continue;
      case 47:
        switch (pt()) {
          case 42:
          case 47:
            lr(zs(Ls(Ne(), xr()), t, r, s), s);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * m:
        l[c++] = Xe(T) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            p = 0;
          case 59 + f:
            x == -1 && (T = Sr(T, /\f/g, "")), g > 0 && Xe(T) - d && lr(g > 32 ? So(T + ";", n, r, d - 1, s) : So(Sr(T, " ", "") + ";", n, r, d - 2, s), s);
            break;
          case 59:
            T += ";";
          default:
            if (lr(O = yo(T, t, r, c, f, o, l, k, w = [], C = [], d, a), a), y === 123)
              if (f === 0)
                Er(T, t, O, O, w, a, d, l, C);
              else
                switch (v === 99 && qt(T, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Er(e, O, O, n && lr(yo(e, O, O, 0, 0, o, l, k, o, w = [], d, C), C), o, C, d, l, n ? w : C);
                    break;
                  default:
                    Er(T, O, O, O, [""], C, 0, l, C);
                }
        }
        c = f = g = 0, m = x = 1, k = T = "", d = i;
        break;
      case 58:
        d = 1 + Xe(T), g = S;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && js() == 125)
            continue;
        }
        switch (T += Un(y), y * m) {
          case 38:
            x = f > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[c++] = (Xe(T) - 1) * x, x = 1;
            break;
          case 64:
            pt() === 45 && (T += Zr(Ne())), v = pt(), f = d = Xe(k = T += Ds(xr())), y++;
            break;
          case 45:
            S === 45 && Xe(T) == 2 && (m = 0);
        }
    }
  return a;
}
function yo(e, t, r, n, o, a, i, l, s, c, f, d) {
  for (var v = o - 1, g = o === 0 ? a : [""], S = Rs(g), m = 0, p = 0, x = 0; m < n; ++m)
    for (var y = 0, k = Kt(e, v + 1, v = ma(p = i[m])), w = e; y < S; ++y)
      (w = ba(p > 0 ? g[y] + " " + k : Sr(k, /&\f/g, g[y]))) && (s[x++] = w);
  return Xn(e, t, r, o === 0 ? ga : l, s, c, f, d);
}
function zs(e, t, r, n) {
  return Xn(e, t, r, pa, Un(As()), Kt(e, 2, -2), 0, n);
}
function So(e, t, r, n, o) {
  return Xn(e, t, r, ha, Kt(e, 0, n), Kt(e, n + 1, -1), n, o);
}
function Cn(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Hs(e, t, r, n) {
  switch (e.type) {
    case _s:
      if (e.children.length) break;
    case ks:
    case ha:
      return e.return = e.return || e.value;
    case pa:
      return "";
    case Os:
      return e.return = e.value + "{" + Cn(e.children, n) + "}";
    case ga:
      if (!Xe(e.value = e.props.join(","))) return "";
  }
  return Xe(r = Cn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Sa(e, t) {
  var r = t.path, n = t.parentSelectors;
  at(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Vs = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Sa("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Bs = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Sa("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, xo = "data-ant-cssinjs-cache-path", xa = "_FILE_STYLE__", gt, Ea = !0;
function Ws() {
  if (!gt && (gt = {}, Qe())) {
    var e = document.createElement("div");
    e.className = xo, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = F(a, 2), l = i[0], s = i[1];
      gt[l] = s;
    });
    var r = document.querySelector("style[".concat(xo, "]"));
    if (r) {
      var n;
      Ea = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Gs(e) {
  return Ws(), !!gt[e];
}
function Us(e) {
  var t = gt[e], r = null;
  if (t && Qe())
    if (Ea)
      r = xa;
    else {
      var n = document.querySelector("style[".concat($e, '="').concat(gt[e], '"]'));
      n ? r = n.innerHTML : delete gt[e];
    }
  return [r, t];
}
var Ca = "_skip_check_", Ta = "_multi_value_";
function Cr(e) {
  var t = Cn(Fs(e), Hs);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Xs(e) {
  return re(e) === "object" && e && (Ca in e || Ta in e);
}
function Ys(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", f = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(f).concat(o).concat(c.slice(f.length)), [c].concat(Ye(s.slice(1))).join(" ");
  });
  return a.join(",");
}
var qs = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, l = r.hashId, s = r.layer, c = r.path, f = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, g = r.linters, S = g === void 0 ? [] : g, m = "", p = {};
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
        if (re(_) === "object" && _ && (T !== "animationName" || !_._keyframe) && !Xs(_)) {
          var V = !1, H = T.trim(), Y = !1;
          (o || a) && l ? H.startsWith("@") ? V = !0 : H = Ys(T, l, f) : o && !l && (H === "&" || H === "") && (H = "", Y = !0);
          var Z = e(_, r, {
            root: Y,
            injectHash: V,
            parentSelectors: [].concat(Ye(i), [H])
          }), R = F(Z, 2), N = R[0], A = R[1];
          p = M(M({}, p), A), m += "".concat(H).concat(N);
        } else {
          let Q = function(U, J) {
            process.env.NODE_ENV !== "production" && (re(_) !== "object" || !(_ != null && _[Ca])) && [Vs, Bs].concat(Ye(S)).forEach(function(L) {
              return L(U, J, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var le = U.replace(/[A-Z]/g, function(L) {
              return "-".concat(L.toLowerCase());
            }), X = J;
            !ws[U] && typeof X == "number" && X !== 0 && (X = "".concat(X, "px")), U === "animationName" && J !== null && J !== void 0 && J._keyframe && (x(J), X = J.getName(l)), m += "".concat(le, ":").concat(X, ";");
          };
          var q, te = (q = _ == null ? void 0 : _.value) !== null && q !== void 0 ? q : _;
          re(_) === "object" && _ !== null && _ !== void 0 && _[Ta] && Array.isArray(te) ? te.forEach(function(U) {
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
function wa(e, t) {
  return Xt("".concat(e.join("%")).concat(t));
}
function Ks() {
  return null;
}
var ka = "style";
function Tn(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, f = h.useContext($r), d = f.autoClear, v = f.mock, g = f.defaultCache, S = f.hashPriority, m = f.container, p = f.ssrInline, x = f.transformers, y = f.linters, k = f.cache, w = f.layer, C = r._tokenKey, O = [C];
  w && O.push("layer"), O.push.apply(O, Ye(n));
  var T = yn;
  process.env.NODE_ENV !== "production" && v !== void 0 && (T = v === "client");
  var _ = Gn(
    ka,
    O,
    // Create cache if needed
    function() {
      var R = O.join("|");
      if (Gs(R)) {
        var N = Us(R), A = F(N, 2), q = A[0], te = A[1];
        if (q)
          return [q, C, te, {}, l, c];
      }
      var Q = t(), U = qs(Q, {
        hashId: o,
        hashPriority: S,
        layer: w ? a : void 0,
        path: n.join("-"),
        transformers: x,
        linters: y
      }), J = F(U, 2), le = J[0], X = J[1], L = Cr(le), ge = wa(O, L);
      return [L, C, ge, X, l, c];
    },
    // Remove cache if no need
    function(R, N) {
      var A = F(R, 3), q = A[2];
      (N || d) && yn && ua(q, {
        mark: $e
      });
    },
    // Effect: Inject style here
    function(R) {
      var N = F(R, 4), A = N[0];
      N[1];
      var q = N[2], te = N[3];
      if (T && A !== xa) {
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
          vt(Cr(te[L]), "_layer-".concat(L), M(M({}, Q), {}, {
            prepend: !0
          }));
        });
        var X = vt(A, q, Q);
        X[rt] = k.instanceId, X.setAttribute(wt, C), process.env.NODE_ENV !== "production" && X.setAttribute(Qi, O.join("|")), le.forEach(function(L) {
          vt(Cr(te[L]), "_effect-".concat(L), Q);
        });
      }
    }
  ), V = F(_, 3), H = V[0], Y = V[1], Z = V[2];
  return function(R) {
    var N;
    if (!p || T || !g)
      N = /* @__PURE__ */ h.createElement(Ks, null);
    else {
      var A;
      N = /* @__PURE__ */ h.createElement("style", ot({}, (A = {}, z(A, wt, Y), z(A, $e, Z), A), {
        dangerouslySetInnerHTML: {
          __html: H
        }
      }));
    }
    return /* @__PURE__ */ h.createElement(h.Fragment, null, N, R);
  };
}
var Qs = function(t, r, n) {
  var o = F(t, 6), a = o[0], i = o[1], l = o[2], s = o[3], c = o[4], f = o[5], d = n || {}, v = d.plain;
  if (c)
    return null;
  var g = a, S = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return g = Pr(a, i, l, S, v), s && Object.keys(s).forEach(function(m) {
    if (!r[m]) {
      r[m] = !0;
      var p = Cr(s[m]), x = Pr(p, i, "_effect-".concat(m), S, v);
      m.startsWith("@layer") ? g = x + g : g += x;
    }
  }), [f, l, g];
}, Oa = "cssVar", Js = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, f = Ct($r), d = f.cache.instanceId, v = f.container, g = l._tokenKey, S = [].concat(Ye(t.path), [n, c, g]), m = Gn(Oa, S, function() {
    var p = r(), x = da(p, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: c
    }), y = F(x, 2), k = y[0], w = y[1], C = wa(S, w);
    return [k, w, C, n];
  }, function(p) {
    var x = F(p, 3), y = x[2];
    yn && ua(y, {
      mark: $e
    });
  }, function(p) {
    var x = F(p, 3), y = x[1], k = x[2];
    if (y) {
      var w = vt(y, k, {
        mark: $e,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      w[rt] = d, w.setAttribute(wt, n);
    }
  });
  return m;
}, Zs = function(t, r, n) {
  var o = F(t, 4), a = o[1], i = o[2], l = o[3], s = n || {}, c = s.plain;
  if (!a)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = Pr(a, l, i, d, c);
  return [f, i, v];
}, Ft;
Ft = {}, z(Ft, ka, Qs), z(Ft, va, Ts), z(Ft, Oa, Zs);
function bt(e) {
  return e.notSplit = !0, e;
}
bt(["borderTop", "borderBottom"]), bt(["borderTop"]), bt(["borderBottom"]), bt(["borderLeft", "borderRight"]), bt(["borderLeft"]), bt(["borderRight"]);
var Yn = /* @__PURE__ */ Dn({});
function ec(e) {
  return aa(e) || ta(e) || Vn(e) || ia();
}
function wn(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function _a(e, t, r, n) {
  if (!t.length)
    return r;
  var o = ec(t), a = o[0], i = o.slice(1), l;
  return !e && typeof a == "number" ? l = [] : Array.isArray(e) ? l = Ye(e) : l = M({}, e), n && r === void 0 && i.length === 1 ? delete l[a][i[0]] : l[a] = _a(l[a], i, r, n), l;
}
function en(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !wn(e, t.slice(0, -1)) ? e : _a(e, t, r, n);
}
function tc(e) {
  return re(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Eo(e) {
  return Array.isArray(e) ? [] : {};
}
var rc = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function nc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Eo(t[0]);
  return t.forEach(function(o) {
    function a(i, l) {
      var s = new Set(l), c = wn(o, i), f = Array.isArray(c);
      if (f || tc(c)) {
        if (!s.has(c)) {
          s.add(c);
          var d = wn(n, i);
          f ? n = en(n, i, []) : (!d || re(d) !== "object") && (n = en(n, i, Eo(c))), rc(c).forEach(function(v) {
            a([].concat(Ye(i), [v]), s);
          });
        }
      } else
        n = en(n, i, c);
    }
    a([]);
  }), n;
}
function Pa() {
}
let Ue = null;
function oc() {
  Ue = null, qo();
}
let Pt = Pa;
process.env.NODE_ENV !== "production" && (Pt = (e, t, r) => {
  at(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && oc();
});
const Ra = /* @__PURE__ */ h.createContext({}), Lr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = h.useContext(Ra), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = Ue;
        Ue || (Ue = {}), Ue[e] = Ue[e] || [], Ue[e].includes(a || "") || Ue[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ue);
      } else
        process.env.NODE_ENV !== "production" && Pt(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = Pa, e;
}, ac = /* @__PURE__ */ Dn(void 0);
var ic = {
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
}, sc = {
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
const Aa = {
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
  }, sc),
  timePickerLocale: Object.assign({}, Aa)
}, Se = "${label} is not a valid ${type}", Dr = {
  locale: "en",
  Pagination: ic,
  DatePicker: Co,
  TimePicker: Aa,
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
Object.assign({}, Dr.Modal);
let Tr = [];
const To = () => Tr.reduce((e, t) => Object.assign(Object.assign({}, e), t), Dr.Modal);
function cc(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Tr.push(t), To(), () => {
      Tr = Tr.filter((r) => r !== t), To();
    };
  }
  Object.assign({}, Dr.Modal);
}
const ja = /* @__PURE__ */ Dn(void 0), Ma = "internalMark", $a = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = Lr("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(n === Ma, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  h.useEffect(() => cc(t && t.Modal), [t]);
  const o = h.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ h.createElement(ja.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && ($a.displayName = "LocaleProvider");
function de(e, t) {
  lc(e) && (e = "100%");
  var r = uc(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ur(e) {
  return Math.min(1, Math.max(0, e));
}
function lc(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function uc(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Na(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function dt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function fc(e, t, r) {
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
function tn(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function dc(e, t, r) {
  var n, o, a;
  if (e = de(e, 360), t = de(t, 100), r = de(r, 100), t === 0)
    o = r, a = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - i;
    n = tn(l, i, e + 1 / 3), o = tn(l, i, e), a = tn(l, i, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function kn(e, t, r) {
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
function vc(e, t, r) {
  e = de(e, 360) * 6, t = de(t, 100), r = de(r, 100);
  var n = Math.floor(e), o = e - n, a = r * (1 - t), i = r * (1 - o * t), l = r * (1 - (1 - o) * t), s = n % 6, c = [r, i, a, a, l, r][s], f = [l, r, r, i, a, a][s], d = [a, a, l, r, r, i][s];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function On(e, t, r, n) {
  var o = [
    dt(Math.round(e).toString(16)),
    dt(Math.round(t).toString(16)),
    dt(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function pc(e, t, r, n, o) {
  var a = [
    dt(Math.round(e).toString(16)),
    dt(Math.round(t).toString(16)),
    dt(Math.round(r).toString(16)),
    dt(gc(n))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function gc(e) {
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
var _n = {
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
  return typeof e == "string" && (e = yc(e)), typeof e == "object" && (We(e.r) && We(e.g) && We(e.b) ? (t = fc(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : We(e.h) && We(e.s) && We(e.v) ? (n = fr(e.s), o = fr(e.v), t = vc(e.h, n, o), i = !0, l = "hsv") : We(e.h) && We(e.s) && We(e.l) && (n = fr(e.s), a = fr(e.l), t = dc(e.h, n, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Na(r), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var mc = "[-\\+]?\\d+%?", bc = "[-\\+]?\\d*\\.\\d+%?", nt = "(?:".concat(bc, ")|(?:").concat(mc, ")"), rn = "[\\s|\\(]+(".concat(nt, ")[,|\\s]+(").concat(nt, ")[,|\\s]+(").concat(nt, ")\\s*\\)?"), nn = "[\\s|\\(]+(".concat(nt, ")[,|\\s]+(").concat(nt, ")[,|\\s]+(").concat(nt, ")[,|\\s]+(").concat(nt, ")\\s*\\)?"), je = {
  CSS_UNIT: new RegExp(nt),
  rgb: new RegExp("rgb" + rn),
  rgba: new RegExp("rgba" + nn),
  hsl: new RegExp("hsl" + rn),
  hsla: new RegExp("hsla" + nn),
  hsv: new RegExp("hsv" + rn),
  hsva: new RegExp("hsva" + nn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function yc(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (_n[e])
    e = _n[e], t = !0;
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
function We(e) {
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
      return this.a = Na(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = kn(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = kn(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = wo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = wo(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), On(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), pc(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + On(this.r, this.g, this.b, !1), r = 0, n = Object.entries(_n); r < n.length; r++) {
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
      return r.l += t / 100, r.l = ur(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = ur(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = ur(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = ur(r.s), new e(r);
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
), dr = 2, Oo = 0.16, Sc = 0.05, xc = 0.05, Ec = 0.15, Ia = 5, La = 4, Cc = [{
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
  var t = e.r, r = e.g, n = e.b, o = kn(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function vr(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(On(t, r, n, !1));
}
function Tc(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function Po(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - dr * t : Math.round(e.h) + dr * t : n = r ? Math.round(e.h) + dr * t : Math.round(e.h) - dr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ro(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Oo * t : t === La ? n = e.s + Oo : n = e.s + Sc * t, n > 1 && (n = 1), r && t === Ia && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Ao(e, t, r) {
  var n;
  return r ? n = e.v + xc * t : n = e.v - Ec * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function ht(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = yt(e), o = Ia; o > 0; o -= 1) {
    var a = _o(n), i = vr(yt({
      h: Po(a, o, !0),
      s: Ro(a, o, !0),
      v: Ao(a, o, !0)
    }));
    r.push(i);
  }
  r.push(vr(n));
  for (var l = 1; l <= La; l += 1) {
    var s = _o(n), c = vr(yt({
      h: Po(s, l),
      s: Ro(s, l),
      v: Ao(s, l)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? Cc.map(function(f) {
    var d = f.index, v = f.opacity, g = vr(Tc(yt(t.backgroundColor || "#141414"), yt(r[d]), v * 100));
    return g;
  }) : r;
}
var on = {
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
}, wr = {}, an = {};
Object.keys(on).forEach(function(e) {
  wr[e] = ht(on[e]), wr[e].primary = wr[e][5], an[e] = ht(on[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), an[e].primary = an[e][5];
});
var wc = wr.blue;
const Da = {
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
}, Qt = Object.assign(Object.assign({}, Da), {
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
function kc(e, t) {
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
  } = e, d = r(s), v = r(o), g = r(a), S = r(i), m = r(l), p = n(c, f), x = e.colorLink || e.colorInfo, y = r(x);
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
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
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
const Oc = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function _c(e) {
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
  }, Oc(n));
}
const Pc = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Rc(e) {
  return (e + 8) / e;
}
function Ac(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, a = e * Math.pow(2.71828, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: Rc(r)
  }));
}
const jc = (e) => {
  const t = Ac(e), r = t.map((f) => f.size), n = t.map((f) => f.lineHeight), o = r[1], a = r[0], i = r[2], l = n[1], s = n[0], c = n[2];
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
function Mc(e) {
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
const Ge = (e, t) => new Ee(e).setAlpha(t).toRgbString(), zt = (e, t) => new Ee(e).darken(t).toHexString(), $c = (e) => {
  const t = ht(e);
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
}, Nc = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Ge(n, 0.88),
    colorTextSecondary: Ge(n, 0.65),
    colorTextTertiary: Ge(n, 0.45),
    colorTextQuaternary: Ge(n, 0.25),
    colorFill: Ge(n, 0.15),
    colorFillSecondary: Ge(n, 0.06),
    colorFillTertiary: Ge(n, 0.04),
    colorFillQuaternary: Ge(n, 0.02),
    colorBgLayout: zt(r, 4),
    colorBgContainer: zt(r, 0),
    colorBgElevated: zt(r, 0),
    colorBgSpotlight: Ge(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: zt(r, 15),
    colorBorderSecondary: zt(r, 6)
  };
};
function Ic(e) {
  const t = Object.keys(Da).map((r) => {
    const n = ht(e[r]);
    return new Array(10).fill(1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), kc(e, {
    generateColorPalettes: $c,
    generateNeutralColorPalettes: Nc
  })), jc(e.fontSize)), Mc(e)), Pc(e)), _c(e));
}
const Fa = bn(Ic), Pn = {
  token: Qt,
  override: {
    override: Qt
  },
  hashed: !0
}, za = /* @__PURE__ */ pe.createContext(Pn), Ha = "anticon", Lc = (e, t) => t || (e ? `ant-${e}` : "ant"), Rt = /* @__PURE__ */ h.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Lc,
  iconPrefixCls: Ha
}), Dc = `-ant-${Date.now()}-${Math.random()}`;
function Fc(e, t) {
  const r = {}, n = (i, l) => {
    let s = i.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, o = (i, l) => {
    const s = new Ee(i), c = ht(s.toRgbString());
    r[`${l}-color`] = n(s), r[`${l}-color-disabled`] = c[1], r[`${l}-color-hover`] = c[4], r[`${l}-color-active`] = c[6], r[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), r[`${l}-color-deprecated-bg`] = c[0], r[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new Ee(t.primaryColor), l = ht(i.toRgbString());
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
function zc(e, t) {
  const r = Fc(e, t);
  Qe() ? vt(r, `${Dc}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Pt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Rn = /* @__PURE__ */ h.createContext(!1), Hc = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = h.useContext(Rn);
  return /* @__PURE__ */ h.createElement(Rn.Provider, {
    value: r ?? n
  }, t);
}, Ot = /* @__PURE__ */ h.createContext(void 0), Vc = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = h.useContext(Ot);
  return /* @__PURE__ */ h.createElement(Ot.Provider, {
    value: r || n
  }, t);
};
function Bc() {
  const e = Ct(Rn), t = Ct(Ot);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const Wc = "5.18.1";
function sn(e) {
  return e >= 0 && e <= 255;
}
function pr(e, t) {
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
    if (sn(f) && sn(d) && sn(v))
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
var Gc = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Va(e) {
  const {
    override: t
  } = e, r = Gc(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Qt).forEach((v) => {
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
    colorSplit: pr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: pr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: pr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: pr(o.colorPrimaryBg, o.colorBgContainer),
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
const Ba = {
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
}, Wa = {
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
}, Uc = {
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
}, Ga = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = jo(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = Va(i), a && Object.entries(a).forEach((l) => {
    let [s, c] = l;
    const {
      theme: f
    } = c, d = jo(c, ["theme"]);
    let v = d;
    f && (v = Ga(Object.assign(Object.assign({}, i), d), {
      override: d
    }, f)), i[s] = v;
  }), i;
};
function Jt() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = pe.useContext(za), a = `${Wc}-${t || ""}`, i = r || Fa, [l, s, c] = Cs(i, [Qt, e], {
    salt: a,
    override: n,
    getComputedToken: Ga,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Va,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Ba,
      ignore: Wa,
      preserve: Uc
    }
  });
  return [i, c, t ? s : "", l, o];
}
function Ua(e, t, r) {
  return t = Tt(t), Zo(e, Hn() ? Reflect.construct(t, [], Tt(e).constructor) : t.apply(e, r));
}
let Xa = /* @__PURE__ */ Ke(function e() {
  qe(this, e);
});
const Ya = "CALC_UNIT", Xc = new RegExp(Ya, "g");
function cn(e) {
  return typeof e == "number" ? `${e}${Ya}` : e;
}
let Yc = /* @__PURE__ */ function(e) {
  function t(r, n) {
    var o;
    qe(this, t), o = Ua(this, t), o.result = "";
    const a = typeof r;
    return o.unitlessCssVar = n, r instanceof t ? o.result = `(${r.result})` : a === "number" ? o.result = cn(r) : a === "string" && (o.result = r), o;
  }
  return Ar(t, e), Ke(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${cn(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${cn(n)}`), this.lowPriority = !0, this;
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
      return typeof o == "boolean" ? a = o : Array.from(this.unitlessCssVar).some((i) => this.result.includes(i)) && (a = !1), this.result = this.result.replace(Xc, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]);
}(Xa), qc = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return qe(this, t), n = Ua(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return Ar(t, e), Ke(t, [{
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
}(Xa);
const Kc = (e, t) => {
  const r = e === "css" ? Yc : qc;
  return (n) => new r(n, t);
}, Qc = 1e3 * 60 * 10;
let Jc = /* @__PURE__ */ function() {
  function e() {
    qe(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
  }
  return Ke(e, [{
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
          r - n > Qc && (this.map.delete(o), this.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]);
}();
const Mo = new Jc();
function Zc(e, t) {
  return pe.useMemo(() => {
    const r = Mo.get(t);
    if (r)
      return r;
    const n = e();
    return Mo.set(t, n), n;
  }, t);
}
function el(e) {
  var t = h.useRef();
  t.current = e;
  var r = h.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function kr(e) {
  var t = h.useRef(!1), r = h.useState(e), n = F(r, 2), o = n[0], a = n[1];
  h.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(l, s) {
    s && t.current || a(l);
  }
  return [o, i];
}
const tl = () => ({
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
}), rl = (e) => ({
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
}), nl = (e, t, r, n) => {
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
function ol(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((o) => ho(o)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((o) => ho(o)).join(",")})`;
    }
  };
}
const qa = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let An = !0;
function qn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!qa)
    return Object.assign.apply(Object, [{}].concat(t));
  An = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => o[i]
      });
    });
  }), An = !0, n;
}
const $o = {};
function al() {
}
const il = (e) => {
  let t, r = e, n = al;
  return qa && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, a) {
      return An && t.add(a), o[a];
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
}, Ka = (e, t) => {
  const [r, n] = Jt();
  return Tn({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, tl()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Qa = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(qn(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Ja = (e, t, r, n) => {
  const o = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((l) => {
      let [s, c] = l;
      var f;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && at(!(o != null && o[s]), `Component Token \`${String(s)}\` of ${e} is deprecated. Please use \`${String(c)}\` instead.`), (o != null && o[s] || o != null && o[c]) && ((f = o[c]) !== null && f !== void 0 || (o[c] = o == null ? void 0 : o[s]));
    });
  }
  const a = Object.assign(Object.assign({}, r), o);
  return Object.keys(a).forEach((i) => {
    a[i] === t[i] && delete a[i];
  }), a;
}, No = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function sl(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e], [a] = o, i = o.join("-");
  return function(l) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l;
    const [c, f, d, v, g] = Jt(), {
      getPrefixCls: S,
      iconPrefixCls: m,
      csp: p
    } = Ct(Rt), x = S(), y = g ? "css" : "js", k = Zc(() => {
      const _ = /* @__PURE__ */ new Set();
      return g && Object.keys(n.unitless || {}).forEach((V) => {
        _.add(yr(V, g.prefix)), _.add(yr(V, No(a, g.prefix)));
      }), Kc(y, _);
    }, [y, a, g && g.prefix]), {
      max: w,
      min: C
    } = ol(y), O = {
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
    return Tn(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", x]
    }), () => [{
      // Link
      "&": rl(v)
    }]), Ka(m, p), [Tn(Object.assign(Object.assign({}, O), {
      path: [i, l, m]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: _,
        flush: V
      } = il(v), H = Qa(a, f, r), Y = `.${l}`, Z = Ja(a, f, H, {
        deprecatedTokens: n.deprecatedTokens
      });
      g && Object.keys(H).forEach((A) => {
        H[A] = `var(${yr(A, No(a, g.prefix))})`;
      });
      const R = qn(_, {
        componentCls: Y,
        prefixCls: l,
        iconCls: `.${m}`,
        antCls: `.${x}`,
        calc: k,
        // @ts-ignore
        max: w,
        // @ts-ignore
        min: C
      }, g ? H : Z), N = t(R, {
        hashId: d,
        prefixCls: l,
        rootPrefixCls: x,
        iconPrefixCls: m
      });
      return V(a, Z), [n.resetStyle === !1 ? null : nl(R, l, s, n.resetFont), N];
    }), d];
  };
}
const cl = (e, t, r) => {
  const {
    unitless: n,
    injectStyle: o = !0,
    prefixToken: a
  } = r, i = (s) => {
    let {
      rootCls: c,
      cssVar: f
    } = s;
    const [, d] = Jt();
    return Js({
      path: [e],
      prefix: f.prefix,
      key: f == null ? void 0 : f.key,
      unitless: n,
      ignore: Wa,
      token: d,
      scope: c
    }, () => {
      const v = Qa(e, d, t), g = Ja(e, d, v, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(v).forEach((S) => {
        g[a(S)] = g[S], delete g[S];
      }), g;
    }), null;
  };
  return (s) => {
    const [, , , , c] = Jt();
    return [(f) => o && c ? /* @__PURE__ */ pe.createElement(pe.Fragment, null, /* @__PURE__ */ pe.createElement(i, {
      rootCls: s,
      cssVar: c,
      component: e
    }), f) : f, c == null ? void 0 : c.key];
  };
}, ll = (e, t, r, n) => {
  const o = Array.isArray(e) ? e[0] : e;
  function a(d) {
    return `${o}${d.slice(0, 1).toUpperCase()}${d.slice(1)}`;
  }
  const i = n && n.unitless || {}, l = Object.assign(Object.assign({}, Ba), {
    [a("zIndexPopup")]: !0
  });
  Object.keys(i).forEach((d) => {
    l[a(d)] = i[d];
  });
  const s = Object.assign(Object.assign({}, n), {
    unitless: l,
    prefixToken: a
  }), c = sl(e, t, r, s), f = cl(o, r, s);
  return function(d) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
    const [, g] = c(d, v), [S, m] = f(v);
    return [S, g, m];
  };
}, ul = Object.assign({}, h), {
  useId: Io
} = ul, fl = () => "", dl = typeof Io > "u" ? fl : Io;
function vl(e, t, r) {
  var n, o;
  const a = Lr("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Pn), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : Pn.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = dl();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, f = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || s);
    process.env.NODE_ENV !== "production" && a(!c || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Jo(() => {
    var c, f;
    if (!e)
      return t;
    const d = Object.assign({}, l.components);
    Object.keys(e.components || {}).forEach((S) => {
      d[S] = Object.assign(Object.assign({}, d[S]), e.components[S]);
    });
    const v = `css-var-${s.replace(/:/g, "")}`, g = ((c = i.cssVar) !== null && c !== void 0 ? c : l.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof l.cssVar == "object" ? l.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((f = i.cssVar) === null || f === void 0 ? void 0 : f.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, l), i), {
      token: Object.assign(Object.assign({}, l.token), i.token),
      components: d,
      cssVar: g
    });
  }, [i, l], (c, f) => c.some((d, v) => {
    const g = f[v];
    return !Yi(d, g, !0);
  }));
}
var pl = ["children"], Za = /* @__PURE__ */ h.createContext({});
function gl(e) {
  var t = e.children, r = Yt(e, pl);
  return /* @__PURE__ */ h.createElement(Za.Provider, {
    value: r
  }, t);
}
var hl = /* @__PURE__ */ function(e) {
  Ar(r, e);
  var t = ea(r);
  function r() {
    return qe(this, r), t.apply(this, arguments);
  }
  return Ke(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(h.Component), tt = "none", gr = "appear", hr = "enter", mr = "leave", Lo = "none", Me = "prepare", St = "start", xt = "active", Kn = "end", ei = "prepared";
function Do(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function ml(e, t) {
  var r = {
    animationend: Do("Animation", "AnimationEnd"),
    transitionend: Do("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var bl = ml(Qe(), typeof window < "u" ? window : {}), ti = {};
if (Qe()) {
  var yl = document.createElement("div");
  ti = yl.style;
}
var br = {};
function ri(e) {
  if (br[e])
    return br[e];
  var t = bl[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in ti)
        return br[e] = t[a], br[e];
    }
  return "";
}
var ni = ri("animationend"), oi = ri("transitionend"), ai = !!(ni && oi), Fo = ni || "animationend", zo = oi || "transitionend";
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
const Sl = function(e) {
  var t = Et();
  function r(o) {
    o && (o.removeEventListener(zo, e), o.removeEventListener(Fo, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(zo, e), o.addEventListener(Fo, e), t.current = o);
  }
  return h.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var ii = Qe() ? Xo : Vt;
const xl = function() {
  var e = h.useRef(null);
  function t() {
    _r.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = _r(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return h.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var El = [Me, St, xt, Kn], Cl = [Me, ei], si = !1, Tl = !0;
function ci(e) {
  return e === xt || e === Kn;
}
const wl = function(e, t, r) {
  var n = kr(Lo), o = F(n, 2), a = o[0], i = o[1], l = xl(), s = F(l, 2), c = s[0], f = s[1];
  function d() {
    i(Me, !0);
  }
  var v = t ? Cl : El;
  return ii(function() {
    if (a !== Lo && a !== Kn) {
      var g = v.indexOf(a), S = v[g + 1], m = r(a);
      m === si ? i(S, !0) : S && c(function(p) {
        function x() {
          p.isCanceled() || i(S, !0);
        }
        m === !0 ? x() : Promise.resolve(m).then(x);
      });
    }
  }, [e, a]), h.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, a];
};
function kl(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, l = i === void 0 ? !0 : i, s = n.motionLeave, c = s === void 0 ? !0 : s, f = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, g = n.onEnterPrepare, S = n.onLeavePrepare, m = n.onAppearStart, p = n.onEnterStart, x = n.onLeaveStart, y = n.onAppearActive, k = n.onEnterActive, w = n.onLeaveActive, C = n.onAppearEnd, O = n.onEnterEnd, T = n.onLeaveEnd, _ = n.onVisibleChanged, V = kr(), H = F(V, 2), Y = H[0], Z = H[1], R = kr(tt), N = F(R, 2), A = N[0], q = N[1], te = kr(null), Q = F(te, 2), U = Q[0], J = Q[1], le = Et(!1), X = Et(null);
  function L() {
    return r();
  }
  var ge = Et(!1);
  function Ce() {
    q(tt, !0), J(null, !0);
  }
  var he = el(function(ne) {
    if (A !== tt) {
      var ae = L();
      if (!(ne && !ne.deadline && ne.target !== ae)) {
        var be = ge.current, Le;
        A === gr && be ? Le = C == null ? void 0 : C(ae, ne) : A === hr && be ? Le = O == null ? void 0 : O(ae, ne) : A === mr && be && (Le = T == null ? void 0 : T(ae, ne)), be && Le !== !1 && Ce();
      }
    }
  }), _e = Sl(he), Ie = F(_e, 1), Ve = Ie[0], Pe = function(ae) {
    switch (ae) {
      case gr:
        return z(z(z({}, Me, v), St, m), xt, y);
      case hr:
        return z(z(z({}, Me, g), St, p), xt, k);
      case mr:
        return z(z(z({}, Me, S), St, x), xt, w);
      default:
        return {};
    }
  }, Re = h.useMemo(function() {
    return Pe(A);
  }, [A]), Je = wl(A, !e, function(ne) {
    if (ne === Me) {
      var ae = Re[Me];
      return ae ? ae(L()) : si;
    }
    if (fe in Re) {
      var be;
      J(((be = Re[fe]) === null || be === void 0 ? void 0 : be.call(Re, L(), null)) || null);
    }
    return fe === xt && A !== tt && (Ve(L()), f > 0 && (clearTimeout(X.current), X.current = setTimeout(function() {
      he({
        deadline: !0
      });
    }, f))), fe === ei && Ce(), Tl;
  }), Ze = F(Je, 2), P = Ze[0], fe = Ze[1], me = ci(fe);
  ge.current = me, ii(function() {
    Z(t);
    var ne = le.current;
    le.current = !0;
    var ae;
    !ne && t && l && (ae = gr), ne && t && a && (ae = hr), (ne && !t && c || !ne && d && !t && c) && (ae = mr);
    var be = Pe(ae);
    ae && (e || be[Me]) ? (q(ae), P()) : q(tt);
  }, [t]), Vt(function() {
    // Cancel appear
    (A === gr && !l || // Cancel enter
    A === hr && !a || // Cancel leave
    A === mr && !c) && q(tt);
  }, [l, a, c]), Vt(function() {
    return function() {
      le.current = !1, clearTimeout(X.current);
    };
  }, []);
  var Ae = h.useRef(!1);
  Vt(function() {
    Y && (Ae.current = !0), Y !== void 0 && A === tt && ((Ae.current || Y) && (_ == null || _(Y)), Ae.current = !0);
  }, [Y, A]);
  var et = U;
  return Re[Me] && fe === St && (et = M({
    transition: "none"
  }, et)), [A, fe, et, Y ?? t];
}
function Ol(e) {
  var t = e;
  re(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ h.forwardRef(function(o, a) {
    var i = o.visible, l = i === void 0 ? !0 : i, s = o.removeOnLeave, c = s === void 0 ? !0 : s, f = o.forceRender, d = o.children, v = o.motionName, g = o.leavedClassName, S = o.eventProps, m = h.useContext(Za), p = m.motion, x = r(o, p), y = Et(), k = Et();
    function w() {
      try {
        return y.current instanceof HTMLElement ? y.current : Li(k.current);
      } catch {
        return null;
      }
    }
    var C = kl(x, l, w, o), O = F(C, 4), T = O[0], _ = O[1], V = O[2], H = O[3], Y = h.useRef(H);
    H && (Y.current = !0);
    var Z = h.useCallback(function(U) {
      y.current = U, Di(a, U);
    }, [a]), R, N = M(M({}, S), {}, {
      visible: l
    });
    if (!d)
      R = null;
    else if (T === tt)
      H ? R = d(M({}, N), Z) : !c && Y.current && g ? R = d(M(M({}, N), {}, {
        className: g
      }), Z) : f || !c && !g ? R = d(M(M({}, N), {}, {
        style: {
          display: "none"
        }
      }), Z) : R = null;
    else {
      var A;
      _ === Me ? A = "prepare" : ci(_) ? A = "active" : _ === St && (A = "start");
      var q = Ho(v, "".concat(T, "-").concat(A));
      R = d(M(M({}, N), {}, {
        className: Ut(Ho(v, T), z(z({}, q, q && A), v, typeof v == "string")),
        style: V
      }), Z);
    }
    if (/* @__PURE__ */ h.isValidElement(R) && Fi(R)) {
      var te = R, Q = te.ref;
      Q || (R = /* @__PURE__ */ h.cloneElement(R, {
        ref: Z
      }));
    }
    return /* @__PURE__ */ h.createElement(hl, {
      ref: k
    }, R);
  });
  return n.displayName = "CSSMotion", n;
}
const _l = Ol(ai);
var jn = "add", Mn = "keep", $n = "remove", ln = "removed";
function Pl(e) {
  var t;
  return e && re(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, M(M({}, t), {}, {
    key: String(t.key)
  });
}
function Nn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Pl);
}
function Rl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = Nn(e), i = Nn(t);
  a.forEach(function(c) {
    for (var f = !1, d = n; d < o; d += 1) {
      var v = i[d];
      if (v.key === c.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(g) {
          return M(M({}, g), {}, {
            status: jn
          });
        })), n = d), r.push(M(M({}, v), {}, {
          status: Mn
        })), n += 1, f = !0;
        break;
      }
    }
    f || r.push(M(M({}, c), {}, {
      status: $n
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(c) {
    return M(M({}, c), {}, {
      status: jn
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
      return d !== c || v !== $n;
    }), r.forEach(function(f) {
      f.key === c && (f.status = Mn);
    });
  }), r;
}
var Al = ["component", "children", "onVisibleChanged", "onAllRemoved"], jl = ["status"], Ml = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function $l(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _l, r = /* @__PURE__ */ function(n) {
    Ar(a, n);
    var o = ea(a);
    function a() {
      var i;
      qe(this, a);
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      return i = o.call.apply(o, [this].concat(s)), z(pn(i), "state", {
        keyEntities: []
      }), z(pn(i), "removeKey", function(f) {
        var d = i.state.keyEntities, v = d.map(function(g) {
          return g.key !== f ? g : M(M({}, g), {}, {
            status: ln
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(g) {
          var S = g.status;
          return S !== ln;
        }).length;
      }), i;
    }
    return Ke(a, [{
      key: "render",
      value: function() {
        var l = this, s = this.state.keyEntities, c = this.props, f = c.component, d = c.children, v = c.onVisibleChanged, g = c.onAllRemoved, S = Yt(c, Al), m = f || h.Fragment, p = {};
        return Ml.forEach(function(x) {
          p[x] = S[x], delete S[x];
        }), delete S.keys, /* @__PURE__ */ h.createElement(m, S, s.map(function(x, y) {
          var k = x.status, w = Yt(x, jl), C = k === jn || k === Mn;
          return /* @__PURE__ */ h.createElement(t, ot({}, p, {
            key: w.key,
            visible: C,
            eventProps: w,
            onVisibleChanged: function(T) {
              if (v == null || v(T, {
                key: w.key
              }), !T) {
                var _ = l.removeKey(w.key);
                _ === 0 && g && g();
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
        var c = l.keys, f = s.keyEntities, d = Nn(c), v = Rl(f, d);
        return {
          keyEntities: v.filter(function(g) {
            var S = f.find(function(m) {
              var p = m.key;
              return g.key === p;
            });
            return !(S && S.status === ln && g.status === $n);
          })
        };
      }
    }]), a;
  }(h.Component);
  return z(r, "defaultProps", {
    component: "div"
  }), r;
}
$l(ai);
function Nl(e) {
  const {
    children: t
  } = e, [, r] = Jt(), {
    motion: n
  } = r, o = h.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ h.createElement(gl, {
    motion: n
  }, t) : t;
}
const li = /* @__PURE__ */ h.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Lr("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (li.displayName = "PropWarning");
const Il = process.env.NODE_ENV !== "production" ? li : () => null;
var Ll = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let In = !1;
process.env.NODE_ENV;
const Dl = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Fl = "ant";
let ui;
function zl() {
  return ui || Fl;
}
function Hl(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Vl = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (ui = t), n && Hl(n) && (process.env.NODE_ENV !== "production" && Pt(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), zc(zl(), n));
}, Bl = (e) => {
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
    popupMatchSelectWidth: g,
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
    result: ge,
    slider: Ce,
    breadcrumb: he,
    menu: _e,
    pagination: Ie,
    input: Ve,
    textArea: Pe,
    empty: Re,
    badge: Je,
    radio: Ze,
    rate: P,
    switch: fe,
    transfer: me,
    avatar: Ae,
    message: et,
    tag: ne,
    table: ae,
    card: be,
    tabs: Le,
    timeline: Fr,
    timePicker: zr,
    upload: er,
    notification: tr,
    tree: it,
    colorPicker: Hr,
    datePicker: rr,
    rangePicker: nr,
    flex: $t,
    wave: Vr,
    dropdown: Br,
    warning: Wr,
    tour: Gr,
    floatButtonGroup: Ur
  } = e, or = h.useCallback((ee, ie) => {
    const {
      prefixCls: Te
    } = e;
    if (ie)
      return ie;
    const we = Te || p.getPrefixCls("");
    return ee ? `${we}-${ee}` : we;
  }, [p.getPrefixCls, e.prefixCls]), st = x || p.iconPrefixCls || Ha, Be = r || p.csp;
  Ka(st, Be);
  const ct = vl(y, p.theme, {
    prefixCls: or("")
  });
  process.env.NODE_ENV !== "production" && (In = In || !!ct);
  const De = {
    csp: Be,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    locale: l || m,
    direction: c,
    space: f,
    virtual: d,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: S,
    getPrefixCls: or,
    iconPrefixCls: st,
    theme: ct,
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
    input: Ve,
    textArea: Pe,
    layout: U,
    list: J,
    mentions: le,
    modal: X,
    progress: L,
    result: ge,
    slider: Ce,
    breadcrumb: he,
    menu: _e,
    pagination: Ie,
    empty: Re,
    badge: Je,
    radio: Ze,
    rate: P,
    switch: fe,
    transfer: me,
    avatar: Ae,
    message: et,
    tag: ne,
    table: ae,
    card: be,
    tabs: Le,
    timeline: Fr,
    timePicker: zr,
    upload: er,
    notification: tr,
    tree: it,
    colorPicker: Hr,
    datePicker: rr,
    rangePicker: nr,
    flex: $t,
    wave: Vr,
    dropdown: Br,
    warning: Wr,
    tour: Gr,
    floatButtonGroup: Ur
  };
  process.env.NODE_ENV !== "production" && Lr("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Fe = Object.assign({}, p);
  Object.keys(De).forEach((ee) => {
    De[ee] !== void 0 && (Fe[ee] = De[ee]);
  }), Dl.forEach((ee) => {
    const ie = e[ee];
    ie && (Fe[ee] = ie);
  }), typeof n < "u" && (Fe.button = Object.assign({
    autoInsertSpace: n
  }, Fe.button));
  const ze = Jo(() => Fe, Fe, (ee, ie) => {
    const Te = Object.keys(ee), we = Object.keys(ie);
    return Te.length !== we.length || Te.some((lt) => ee[lt] !== ie[lt]);
  }), ar = h.useMemo(() => ({
    prefixCls: st,
    csp: Be
  }), [st, Be]);
  let ue = /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Il, {
    dropdownMatchSelectWidth: v
  }), t);
  const Nt = h.useMemo(() => {
    var ee, ie, Te, we;
    return nc(((ee = Dr.Form) === null || ee === void 0 ? void 0 : ee.defaultValidateMessages) || {}, ((Te = (ie = ze.locale) === null || ie === void 0 ? void 0 : ie.Form) === null || Te === void 0 ? void 0 : Te.defaultValidateMessages) || {}, ((we = ze.form) === null || we === void 0 ? void 0 : we.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [ze, i == null ? void 0 : i.validateMessages]);
  Object.keys(Nt).length > 0 && (ue = /* @__PURE__ */ h.createElement(ac.Provider, {
    value: Nt
  }, ue)), l && (ue = /* @__PURE__ */ h.createElement($a, {
    locale: l,
    _ANT_MARK__: Ma
  }, ue)), (st || Be) && (ue = /* @__PURE__ */ h.createElement(Yn.Provider, {
    value: ar
  }, ue)), s && (ue = /* @__PURE__ */ h.createElement(Vc, {
    size: s
  }, ue)), ue = /* @__PURE__ */ h.createElement(Nl, null, ue);
  const Xr = h.useMemo(() => {
    const ee = ct || {}, {
      algorithm: ie,
      token: Te,
      components: we,
      cssVar: lt
    } = ee, ir = Ll(ee, ["algorithm", "token", "components", "cssVar"]), sr = ie && (!Array.isArray(ie) || ie.length > 0) ? bn(ie) : Fa, It = {};
    Object.entries(we || {}).forEach((Yr) => {
      let [u, b] = Yr;
      const E = Object.assign({}, b);
      "algorithm" in E && (E.algorithm === !0 ? E.theme = sr : (Array.isArray(E.algorithm) || typeof E.algorithm == "function") && (E.theme = bn(E.algorithm)), delete E.algorithm), It[u] = E;
    });
    const cr = Object.assign(Object.assign({}, Qt), Te);
    return Object.assign(Object.assign({}, ir), {
      theme: sr,
      token: cr,
      components: It,
      override: Object.assign({
        override: cr
      }, It),
      cssVar: lt
    });
  }, [ct]);
  return y && (ue = /* @__PURE__ */ h.createElement(za.Provider, {
    value: Xr
  }, ue)), ze.warning && (ue = /* @__PURE__ */ h.createElement(Ra.Provider, {
    value: ze.warning
  }, ue)), k !== void 0 && (ue = /* @__PURE__ */ h.createElement(Hc, {
    disabled: k
  }, ue)), /* @__PURE__ */ h.createElement(Rt.Provider, {
    value: ze
  }, ue);
}, At = (e) => {
  const t = h.useContext(Rt), r = h.useContext(ja);
  return /* @__PURE__ */ h.createElement(Bl, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
At.ConfigContext = Rt;
At.SizeContext = Ot;
At.config = Vl;
At.useConfig = Bc;
Object.defineProperty(At, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Pt(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Ot)
});
process.env.NODE_ENV !== "production" && (At.displayName = "ConfigProvider");
var Wl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function fi(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Gl(e) {
  return fi(e) instanceof ShadowRoot;
}
function Ul(e) {
  return Gl(e) ? fi(e) : null;
}
function Xl(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Yl(e, t) {
  at(e, "[@ant-design/icons] ".concat(t));
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
        delete t[r], t[Xl(r)] = n;
    }
    return t;
  }, {});
}
function Ln(e, t, r) {
  return r ? /* @__PURE__ */ pe.createElement(e.tag, M(M({
    key: t
  }, Bo(e.attrs)), r), (e.children || []).map(function(n, o) {
    return Ln(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ pe.createElement(e.tag, M({
    key: t
  }, Bo(e.attrs)), (e.children || []).map(function(n, o) {
    return Ln(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function di(e) {
  return ht(e)[0];
}
function vi(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var ql = `
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
`, Kl = function(t) {
  var r = Ct(Yn), n = r.csp, o = r.prefixCls, a = ql;
  o && (a = a.replace(/anticon/g, o)), Vt(function() {
    var i = t.current, l = Ul(i);
    vt(a, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: l
    });
  }, []);
}, Ql = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Gt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Jl(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Gt.primaryColor = t, Gt.secondaryColor = r || di(t), Gt.calculated = !!r;
}
function Zl() {
  return M({}, Gt);
}
var jt = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, l = t.secondaryColor, s = Yt(t, Ql), c = h.useRef(), f = Gt;
  if (i && (f = {
    primaryColor: i,
    secondaryColor: l || di(i)
  }), Kl(c), Yl(Vo(r), "icon should be icon definiton, but got ".concat(r)), !Vo(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = M(M({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), Ln(d.icon, "svg-".concat(d.name), M(M({
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
jt.getTwoToneColors = Zl;
jt.setTwoToneColors = Jl;
function pi(e) {
  var t = vi(e), r = F(t, 2), n = r[0], o = r[1];
  return jt.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function eu() {
  var e = jt.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var tu = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
pi(wc.primary);
var Mt = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = Yt(e, tu), f = h.useContext(Yn), d = f.prefixCls, v = d === void 0 ? "anticon" : d, g = f.rootClassName, S = Ut(g, v, z(z({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!o || n.name === "loading"), r), m = i;
  m === void 0 && l && (m = -1);
  var p = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, x = vi(s), y = F(x, 2), k = y[0], w = y[1];
  return /* @__PURE__ */ h.createElement("span", ot({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: S
  }), /* @__PURE__ */ h.createElement(jt, {
    icon: n,
    primaryColor: k,
    secondaryColor: w,
    style: p
  }));
});
Mt.displayName = "AntdIcon";
Mt.getTwoToneColor = eu;
Mt.setTwoToneColor = pi;
var ru = function(t, r) {
  return /* @__PURE__ */ h.createElement(Mt, ot({}, t, {
    ref: r,
    icon: Wl
  }));
}, Qn = /* @__PURE__ */ h.forwardRef(ru);
process.env.NODE_ENV !== "production" && (Qn.displayName = "CheckCircleFilled");
var nu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, ou = function(t, r) {
  return /* @__PURE__ */ h.createElement(Mt, ot({}, t, {
    ref: r,
    icon: nu
  }));
}, Jn = /* @__PURE__ */ h.forwardRef(ou);
process.env.NODE_ENV !== "production" && (Jn.displayName = "ExclamationCircleFilled");
var au = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, iu = function(t, r) {
  return /* @__PURE__ */ h.createElement(Mt, ot({}, t, {
    ref: r,
    icon: au
  }));
}, Zn = /* @__PURE__ */ h.forwardRef(iu);
process.env.NODE_ENV !== "production" && (Zn.displayName = "LoadingOutlined");
const su = (e) => {
  const t = pe.useContext(Ot);
  return pe.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, cu = (e) => {
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
}, lu = (e) => {
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
}, uu = (e) => {
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
}, gi = ll("Space", (e) => {
  const t = qn(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [lu(t), uu(t), cu(t)];
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
const mi = /* @__PURE__ */ h.createContext(null), fu = (e) => {
  var {
    children: t
  } = e, r = hi(e, ["children"]);
  return /* @__PURE__ */ h.createElement(mi.Provider, {
    value: r
  }, t);
}, du = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = h.useContext(Rt), {
    size: n,
    direction: o,
    block: a,
    prefixCls: i,
    className: l,
    rootClassName: s,
    children: c
  } = e, f = hi(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = su((k) => n ?? k), v = t("space-compact", i), [g, S] = gi(v), m = Ut(v, S, {
    [`${v}-rtl`]: r === "rtl",
    [`${v}-block`]: a,
    [`${v}-vertical`]: o === "vertical"
  }, l, s), p = h.useContext(mi), x = Or(c), y = h.useMemo(() => x.map((k, w) => {
    const C = k && k.key || `${v}-item-${w}`;
    return /* @__PURE__ */ h.createElement(fu, {
      key: C,
      compactSize: d,
      compactDirection: o,
      isFirstItem: w === 0 && (!p || (p == null ? void 0 : p.isFirstItem)),
      isLastItem: w === x.length - 1 && (!p || (p == null ? void 0 : p.isLastItem))
    }, k);
  }), [n, x, p]);
  return x.length === 0 ? null : g(/* @__PURE__ */ h.createElement("div", Object.assign({
    className: m
  }, f), y));
};
function Wo(e) {
  return ["small", "middle", "large"].includes(e);
}
function Go(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const bi = /* @__PURE__ */ pe.createContext({
  latestIndex: 0
}), vu = bi.Provider, pu = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: o,
    style: a
  } = e;
  const {
    latestIndex: i
  } = h.useContext(bi);
  return n == null ? null : /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement("div", {
    className: t,
    style: a
  }, n), r < i && o && /* @__PURE__ */ h.createElement("span", {
    className: `${t}-split`
  }, o));
};
var gu = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const hu = /* @__PURE__ */ h.forwardRef((e, t) => {
  var r, n, o;
  const {
    getPrefixCls: a,
    space: i,
    direction: l
  } = h.useContext(Rt), {
    size: s = (r = i == null ? void 0 : i.size) !== null && r !== void 0 ? r : "small",
    align: c,
    className: f,
    rootClassName: d,
    children: v,
    direction: g = "horizontal",
    prefixCls: S,
    split: m,
    style: p,
    wrap: x = !1,
    classNames: y,
    styles: k
  } = e, w = gu(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [C, O] = Array.isArray(s) ? s : [s, s], T = Wo(O), _ = Wo(C), V = Go(O), H = Go(C), Y = Or(v, {
    keepEmpty: !0
  }), Z = c === void 0 && g === "horizontal" ? "center" : c, R = a("space", S), [N, A, q] = gi(R), te = Ut(R, i == null ? void 0 : i.className, A, `${R}-${g}`, {
    [`${R}-rtl`]: l === "rtl",
    [`${R}-align-${Z}`]: Z,
    [`${R}-gap-row-${O}`]: T,
    [`${R}-gap-col-${C}`]: _
  }, f, d, q), Q = Ut(`${R}-item`, (n = y == null ? void 0 : y.item) !== null && n !== void 0 ? n : (o = i == null ? void 0 : i.classNames) === null || o === void 0 ? void 0 : o.item);
  let U = 0;
  const J = Y.map((L, ge) => {
    var Ce, he;
    L != null && (U = ge);
    const _e = L && L.key || `${Q}-${ge}`;
    return /* @__PURE__ */ h.createElement(pu, {
      className: Q,
      key: _e,
      index: ge,
      split: m,
      style: (Ce = k == null ? void 0 : k.item) !== null && Ce !== void 0 ? Ce : (he = i == null ? void 0 : i.styles) === null || he === void 0 ? void 0 : he.item
    }, L);
  }), le = h.useMemo(() => ({
    latestIndex: U
  }), [U]);
  if (Y.length === 0)
    return null;
  const X = {};
  return x && (X.flexWrap = "wrap"), !_ && H && (X.columnGap = C), !T && V && (X.rowGap = O), N(/* @__PURE__ */ h.createElement("div", Object.assign({
    ref: t,
    className: te,
    style: Object.assign(Object.assign(Object.assign({}, X), i == null ? void 0 : i.style), p)
  }, w), /* @__PURE__ */ h.createElement(vu, {
    value: le
  }, J)));
}), Zt = hu;
Zt.Compact = du;
process.env.NODE_ENV !== "production" && (Zt.displayName = "Space");
var Rr = function() {
  return Rr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Rr.apply(this, arguments);
};
function mu(e, t) {
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
var bu = function(e) {
  return typeof e == "function";
}, yu = function(e) {
  var t = mu(Ci(e), 2), r = t[0], n = t[1], o = Ti(function(a) {
    n(function(i) {
      var l = bu(a) ? a(i) : a;
      return l ? Rr(Rr({}, i), l) : i;
    });
  }, []);
  return [r, o];
}, He = /* @__PURE__ */ ((e) => (e.Initial = "initial", e.Pending = "pending", e.Success = "success", e.Error = "error", e.Optional = "optional", e))(He || {}), Ht = /* @__PURE__ */ ((e) => (e.Send = "send", e.SendSelf = "sendSelf", e.SendAndBack = "sendAndBack", e.Back = "back", e))(Ht || {});
const Uo = ({ title: e, subTitle: t, status: r }) => {
  let n = /* @__PURE__ */ $.jsx("div", { className: "placeholder hidden" });
  switch (r) {
    case He.Pending:
      n = /* @__PURE__ */ $.jsx(Zn, { style: { fontSize: "16px", color: "#006eff" } });
      break;
    case He.Success:
      n = /* @__PURE__ */ $.jsx(Qn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
    case He.Error:
      n = /* @__PURE__ */ $.jsx(Jn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
  }
  return /* @__PURE__ */ $.jsxs("div", { className: `send-task ${r ? `bg-${r}` : ""}`, children: [
    /* @__PURE__ */ $.jsxs(Zt, { size: 3.5, children: [
      /* @__PURE__ */ $.jsx("div", { className: `title ${r ? `txt-${r}` : ""}`, children: e }),
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
  let n = null;
  switch (r) {
    case He.Pending:
      n = /* @__PURE__ */ $.jsx(Zn, { style: { fontSize: "16px", color: "#006eff" } });
      break;
    case He.Success:
      n = /* @__PURE__ */ $.jsx(Qn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
    case He.Error:
      n = /* @__PURE__ */ $.jsx(Jn, { className: `txt-${r}`, style: { fontSize: "14px" } });
      break;
  }
  return /* @__PURE__ */ $.jsxs("div", { className: `send-and-back-task ${r ? `bg-${r}` : ""}`, children: [
    /* @__PURE__ */ $.jsxs(Zt, { size: 3.5, children: [
      /* @__PURE__ */ $.jsx("div", { className: `title ${r ? `txt-${r}` : ""}`, children: e }),
      r && [He.Pending, He.Success, He.Error].includes(r) && n
    ] }),
    /* @__PURE__ */ $.jsx("div", { className: `subtitle ${r ? `txt-${r}` : ""}`, children: t }),
    /* @__PURE__ */ $.jsx("div", { className: `border-line ${r ? `line-bg-${r}` : "line-bg-initial"}` }),
    /* @__PURE__ */ $.jsx("div", { className: `caret ${r ? `cart-border-${r}` : ""}` }),
    /* @__PURE__ */ $.jsx("div", { className: `caret-back ${r ? `caret-back-line-bg-${r}` : ""}` }),
    /* @__PURE__ */ $.jsx("div", { className: `histogram ${r ? `line-bg-${r}` : "line-bg-initial"}` }),
    /* @__PURE__ */ $.jsx("div", { className: `border-line-dotted ${r ? `line-bg-dot-${r}` : ""}` })
  ] });
}, ku = ({ roleList: e, taskList: t, taskGap: r = 8, componentId: n = "" }) => {
  const [o, a] = yu({
    calTaskList: t,
    calRoleList: e
  });
  Xo(() => {
    l();
  }, []);
  const i = wi(() => {
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
      var v, g;
      const f = (v = document.getElementById(`${n}-role-component-${c.roleSeq}`)) == null ? void 0 : v.getBoundingClientRect(), d = ((g = document.getElementById(`${n}-role-component-${c.roleSeq}`)) == null ? void 0 : g.offsetLeft) || 0;
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
                /* @__PURE__ */ $.jsx(Zt, { children: /* @__PURE__ */ $.jsx("div", { children: s.roleName }) }),
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
  [Ht.Send]: Uo,
  [Ht.SendSelf]: Su,
  [Ht.SendAndBack]: xu,
  [Ht.Back]: Uo
}, Cu = 20;
export {
  ku as SequenceDiagrams,
  He as TaskStatus,
  Ht as TaskType
};
