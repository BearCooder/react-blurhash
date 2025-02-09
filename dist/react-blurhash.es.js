import * as he from "react";
import Oe from "react";
import { decode as Ae } from "blurhash";
var S = { exports: {} }, j = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Ne() {
  if (Ee) return j;
  Ee = 1;
  var E = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function f(g, s, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      l = {};
      for (var v in s)
        v !== "key" && (l[v] = s[v]);
    } else l = s;
    return s = l.ref, {
      $$typeof: E,
      type: g,
      key: c,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return j.Fragment = d, j.jsx = f, j.jsxs = f, j;
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Pe() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function E(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ce ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case ye:
          return "Portal";
        case Q:
          return "Profiler";
        case B:
          return "StrictMode";
        case M:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return (e.displayName || "Context") + ".Provider";
          case K:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return r = e.displayName || null, r !== null ? r : E(e.type) || "Memo";
          case U:
            r = e._payload, e = e._init;
            try {
              return E(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function f(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function g() {
    }
    function s() {
      if (T === 0) {
        te = console.log, oe = console.info, ne = console.warn, ae = console.error, se = console.group, ue = console.groupCollapsed, ie = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: g,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      T++;
    }
    function l() {
      if (T--, T === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: w({}, e, { value: te }),
          info: w({}, e, { value: oe }),
          warn: w({}, e, { value: ne }),
          error: w({}, e, { value: ae }),
          group: w({}, e, { value: se }),
          groupCollapsed: w({}, e, { value: ue }),
          groupEnd: w({}, e, { value: ie })
        });
      }
      0 > T && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function c(e) {
      if (X === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          X = r && r[1] || "", le = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + X + e + le;
    }
    function v(e, r) {
      if (!e || J) return "";
      var t = q.get(e);
      if (t !== void 0) return t;
      J = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = p.H, p.H = null, s();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var h = function() {
                  throw Error();
                };
                if (Object.defineProperty(h.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(h, []);
                  } catch (b) {
                    var k = b;
                  }
                  Reflect.construct(e, [], h);
                } else {
                  try {
                    h.call();
                  } catch (b) {
                    k = b;
                  }
                  e.call(h.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (b) {
                  k = b;
                }
                (h = e()) && typeof h.catch == "function" && h.catch(function() {
                });
              }
            } catch (b) {
              if (b && k && typeof b.stack == "string")
                return [b.stack, k.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = u.DetermineComponentFrameRoot(), m = o[0], _ = o[1];
        if (m && _) {
          var i = m.split(`
`), x = _.split(`
`);
          for (o = a = 0; a < i.length && !i[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < x.length && !x[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === i.length || o === x.length)
            for (a = i.length - 1, o = x.length - 1; 1 <= a && 0 <= o && i[a] !== x[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (i[a] !== x[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || i[a] !== x[o]) {
                    var y = `
` + i[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, y), y;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        J = !1, p.H = n, l(), Error.prepareStackTrace = t;
      }
      return i = (i = e ? e.displayName || e.name : "") ? c(i) : "", typeof e == "function" && q.set(e, i), i;
    }
    function R(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return v(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return c(e);
      switch (e) {
        case M:
          return c("Suspense");
        case W:
          return c("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return e = v(e.render, !1), e;
          case $:
            return R(e.type);
          case U:
            r = e._payload, e = e._init;
            try {
              return R(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = p.A;
      return e === null ? null : e.getOwner();
    }
    function pe(e) {
      if (re.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function we(e, r) {
      function t() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function xe() {
      var e = E(this.type);
      return fe[e] || (fe[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _e(e, r, t, n, u, a) {
      return t = a.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: xe
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function I(e, r, t, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === P || e === Q || e === B || e === M || e === W || e === je || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === $ || e.$$typeof === D || e.$$typeof === K || e.$$typeof === Y || e.$$typeof === ke || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (z(o)) {
              for (n = 0; n < o.length; n++)
                L(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else L(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : z(e) ? n = "array" : e !== void 0 && e.$$typeof === N ? (n = "<" + (E(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (re.call(r, "key")) {
        o = E(e);
        var m = Object.keys(r).filter(function(i) {
          return i !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", de[o + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          m,
          o
        ), de[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), pe(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var _ in r)
          _ !== "key" && (t[_] = r[_]);
      } else t = r;
      return o && we(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _e(e, o, a, u, O(), t);
    }
    function L(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Se) {
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            A(n) && Z(n, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ee && e[ee] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && Z(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    function Z(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = Re(r), !ve[r])) {
        ve[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = E(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = p.getCurrentStack;
        p.getCurrentStack = function() {
          var u = R(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), p.getCurrentStack = n;
      }
    }
    function Re(e) {
      var r = "", t = O();
      return t && (t = E(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = E(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var Te = Oe, N = Symbol.for("react.transitional.element"), ye = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), K = Symbol.for("react.consumer"), D = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), je = Symbol.for("react.offscreen"), ee = Symbol.iterator, Ce = Symbol.for("react.client.reference"), p = Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, w = Object.assign, ke = Symbol.for("react.client.reference"), z = Array.isArray, T = 0, te, oe, ne, ae, se, ue, ie;
    g.__reactDisabledLog = !0;
    var X, le, J = !1, q = new (typeof WeakMap == "function" ? WeakMap : Map)(), Se = Symbol.for("react.client.reference"), ce, fe = {}, de = {}, ve = {};
    C.Fragment = P, C.jsx = function(e, r, t, n, u) {
      return I(e, r, t, !1, n, u);
    }, C.jsxs = function(e, r, t, n, u) {
      return I(e, r, t, !0, n, u);
    };
  }()), C;
}
var me;
function Ye() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? S.exports = Ne() : S.exports = Pe()), S.exports;
}
var V = Ye();
const H = class H extends he.PureComponent {
  constructor() {
    super(...arguments), this.canvas = null, this.handleRef = (d) => {
      this.canvas = d, this.draw();
    }, this.draw = () => {
      const { hash: d, height: f, punch: g, width: s } = this.props;
      if (this.canvas) {
        const l = Ae(d, s, f, g), c = this.canvas.getContext("2d"), v = c.createImageData(s, f);
        v.data.set(l), c.putImageData(v, 0, 0);
      }
    };
  }
  componentDidUpdate() {
    this.draw();
  }
  render() {
    const { hash: d, height: f, width: g, ...s } = this.props;
    return /* @__PURE__ */ V.jsx("canvas", { ...s, height: f, width: g, ref: this.handleRef });
  }
};
H.defaultProps = {
  height: 128,
  width: 128
};
let G = H;
const Me = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%"
}, F = class F extends he.PureComponent {
  componentDidUpdate() {
    if (this.props.resolutionX <= 0)
      throw new Error("resolutionX must be larger than zero");
    if (this.props.resolutionY <= 0)
      throw new Error("resolutionY must be larger than zero");
  }
  render() {
    const { hash: d, height: f, width: g, punch: s, resolutionX: l, resolutionY: c, style: v, ...R } = this.props;
    return /* @__PURE__ */ V.jsx(
      "div",
      {
        ...R,
        style: { display: "inline-block", height: f, width: g, ...v, position: "relative" },
        children: /* @__PURE__ */ V.jsx(
          G,
          {
            hash: d,
            height: c,
            width: l,
            punch: s,
            style: Me
          }
        )
      }
    );
  }
};
F.defaultProps = {
  height: 128,
  width: 128,
  resolutionX: 32,
  resolutionY: 32
};
let be = F;
export {
  be as Blurhash,
  G as BlurhashCanvas
};
