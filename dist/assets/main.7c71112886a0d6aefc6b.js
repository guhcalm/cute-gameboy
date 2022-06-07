;(() => {
  "use strict"
  var e,
    t = {
      117: (e, t, n) => {
        var r,
          a,
          o,
          i,
          c,
          l = n(897),
          d = n(392)
        !(function (e) {
          ;(e[(e.ACTIVATE = 0)] = "ACTIVATE"),
            (e[(e.INACTIVATE = 1)] = "INACTIVATE")
        })(r || (r = {})),
          (function (e) {
            ;(e[(e.LEFT = 0)] = "LEFT"),
              (e[(e.RIGHT = 1)] = "RIGHT"),
              (e[(e.UP = 2)] = "UP"),
              (e[(e.DOWN = 3)] = "DOWN")
          })(a || (a = {})),
          (function (e) {
            ;(e[(e.SELECT = 0)] = "SELECT"), (e[(e.START = 1)] = "START")
          })(o || (o = {})),
          (function (e) {
            ;(e[(e.E = 0)] = "E"), (e[(e.Q = 1)] = "Q")
          })(i || (i = {})),
          (function (e) {
            e[(e.DEFAULT = 0)] = "DEFAULT"
          })(c || (c = {}))
        const s = {
          name: c.DEFAULT,
          palette: {
            surface: { main: "gray", on: "white" },
            background: { main: "white", on: "black" },
            error: { main: "red", on: "black" },
            primary: {
              light: "yellow",
              main: "orange",
              dark: "red",
              on: "black"
            },
            secondary: {
              light: "cyan",
              main: "green",
              dark: "blue",
              on: "black"
            }
          }
        }
        var u = r.INACTIVATE
        const p = {
          status: u,
          mouse: { position: { x: 0, y: 0 } },
          settings: { theme: s },
          keys: {
            startupSwitcher: u,
            directionalPad: { left: u, right: u, up: u, down: u },
            operationalPad: { select: u, start: u },
            actionPad: { q: u, e: u }
          }
        }
        function f(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function y(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        var P = r,
          b = P.ACTIVATE,
          v = P.INACTIVATE,
          h = a,
          m = h.LEFT,
          O = h.RIGHT,
          k = h.UP,
          g = h.DOWN,
          w = o,
          T = w.SELECT,
          j = w.START,
          E = i,
          A = E.Q,
          S = E.E
        const I = (0, d.oM)({
          name: "gameboy",
          initialState: p,
          reducers: {
            setMousePosition: function (e, t) {
              var n = t.payload
              e.mouse = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? f(Object(n), !0).forEach(function (t) {
                        y(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : f(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        )
                      })
                }
                return e
              })({}, n)
            },
            activateStatus: function (e) {
              e.status = b
            },
            inactivateStatus: function (e) {
              e.status = v
            },
            clickStartupSwitcher: function (e) {
              e.keys.startupSwitcher = b
            },
            unclickStartupSwitcher: function (e) {
              e.keys.startupSwitcher = b
            },
            clickDirectionalPad: function (e, t) {
              var n = t.payload
              n === m && (e.keys.directionalPad.left = b),
                n === O && (e.keys.directionalPad.right = b),
                n === k && (e.keys.directionalPad.up = b),
                n === g && (e.keys.directionalPad.down = b)
            },
            unclickDirectionalPad: function (e, t) {
              var n = t.payload
              n === m && (e.keys.directionalPad.left = b),
                n === O && (e.keys.directionalPad.right = b),
                n === k && (e.keys.directionalPad.up = b),
                n === g && (e.keys.directionalPad.down = b)
            },
            clickOperationalPad: function (e, t) {
              var n = t.payload
              n === T && (e.keys.operationalPad.select = b),
                n === j && (e.keys.operationalPad.start = b)
            },
            unclickOperationalPad: function (e, t) {
              var n = t.payload
              n === T && (e.keys.operationalPad.select = v),
                n === j && (e.keys.operationalPad.start = v)
            },
            clickActionPad: function (e, t) {
              var n = t.payload
              n === A && (e.keys.actionPad.q = b),
                n === S && (e.keys.actionPad.e = b)
            },
            unclickActionPad: function (e, t) {
              var n = t.payload
              n === A && (e.keys.actionPad.q = v),
                n === S && (e.keys.actionPad.e = v)
            }
          }
        })
        var x = n(671),
          C = n(466),
          D = n(255)
        function L(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function V(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        const N = (0, d.oM)({
          name: "mouse",
          initialState: { position: { x: 0, y: 0 } },
          reducers: {
            setMousePosition: function (e, t) {
              var n = t.payload
              e.position = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? L(Object(n), !0).forEach(function (t) {
                        V(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : L(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        )
                      })
                }
                return e
              })({}, n.position)
            }
          }
        })
        const M = function () {
          var e, t, n
          ;(e = (0, D.I0)()),
            (t = N.actions),
            (n = function (n) {
              e(t.setMousePosition({ position: { x: n.x, y: n.y } }))
            }),
            (0, C.useEffect)(function () {
              return (
                window.addEventListener("mousemove", n),
                function () {
                  window.removeEventListener("mousemove", n)
                }
              )
            }, [])
        }
        const R = function () {}
        var U = r.INACTIVATE
        const _ = {
          startupSwitcher: U,
          directionalPad: { left: U, right: U, up: U, down: U },
          operationalPad: { select: U, start: U },
          actionPad: { q: U, e: U }
        }
        var q = r,
          F = q.ACTIVATE,
          z = q.INACTIVATE,
          H = a,
          W = H.LEFT,
          G = H.RIGHT,
          Q = H.UP,
          J = H.DOWN,
          Y = o,
          Z = Y.SELECT,
          B = Y.START,
          K = i,
          X = K.Q,
          $ = K.E
        const ee = (0, d.oM)({
            name: "keyboard",
            initialState: _,
            reducers: {
              clickStartupSwitcher: function (e) {
                e.startupSwitcher = r.ACTIVATE
              },
              unclickStartupSwitcher: function (e) {
                e.startupSwitcher = r.INACTIVATE
              },
              clickDirectionalPad: function (e, t) {
                var n = t.payload
                n === W && (e.directionalPad.left = F),
                  n === G && (e.directionalPad.right = F),
                  n === Q && (e.directionalPad.up = F),
                  n === J && (e.directionalPad.down = F)
              },
              unclickDirectionalPad: function (e, t) {
                var n = t.payload
                n === W && (e.directionalPad.left = z),
                  n === G && (e.directionalPad.right = z),
                  n === Q && (e.directionalPad.up = z),
                  n === J && (e.directionalPad.down = z)
              },
              clickOperaionalPad: function (e, t) {
                var n = t.payload
                n === Z && (e.operationalPad.select = F),
                  n === B && (e.operationalPad.start = F)
              },
              unclickOperaionalPad: function (e, t) {
                var n = t.payload
                n === Z && (e.operationalPad.select = z),
                  n === B && (e.operationalPad.start = z)
              },
              clickActionPad: function (e, t) {
                var n = t.payload
                n === X && (e.actionPad.q = F), n === $ && (e.actionPad.e = F)
              },
              unclickActionPad: function (e, t) {
                var n = t.payload
                n === X && (e.actionPad.q = z), n === $ && (e.actionPad.e = z)
              }
            }
          }),
          te = (0, x.UY)({ mouse: N.reducer, keyboard: ee.reducer })
        var ne = n(823)
        const re = function (e) {
            var t = e.children
            return (0, ne.jsx)(D.zt, { store: ae, children: t })
          },
          ae = (0, d.xC)({ reducer: { gameboy: I.reducer, domains: te } })
        var oe,
          ie = n(549)
        const ce = (0, ie.vJ)(
          oe ||
            ((le = [
              "\n  *,\n  *::before,\n  *::after {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body,\n  #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n  }\n"
            ]),
            de || (de = le.slice(0)),
            (oe = Object.freeze(
              Object.defineProperties(le, { raw: { value: Object.freeze(de) } })
            )))
        )
        var le, de, se
        const ue = ie.ZP.main(
            se ||
              (se = (function (e, t) {
                return (
                  t || (t = e.slice(0)),
                  Object.freeze(
                    Object.defineProperties(e, {
                      raw: { value: Object.freeze(t) }
                    })
                  )
                )
              })([
                "\n  ",
                "\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n"
              ])),
            function (e) {
              var t = e.theme
              return "\n  // surface\n  --surface: "
                .concat(t.palette.surface.main, ";\n  --on-surface: ")
                .concat(
                  t.palette.surface.on,
                  ";\n  // background\n  --background: "
                )
                .concat(t.palette.background.main, ";\n  --on-background: ")
                .concat(t.palette.background.on, ";\n  // error\n  --error: ")
                .concat(t.palette.error.main, ";\n  --on-error: ")
                .concat(t.palette.error.on, ";\n  // primary\n  --primary: ")
                .concat(t.palette.primary.main, ";\n  --primary-on-light: ")
                .concat(t.palette.primary.light, ";\n  --primary-on-dark: ")
                .concat(t.palette.primary.dark, ";\n  --on-primary: ")
                .concat(
                  t.palette.primary.on,
                  ";\n  // secondary\n  --secondary: "
                )
                .concat(t.palette.secondary.main, ";\n  --secondary-on-light: ")
                .concat(t.palette.secondary.light, ";\n  --secondary-on-dark: ")
                .concat(t.palette.secondary.dark, ";\n  --on-primary: ")
                .concat(t.palette.secondary.on, ";\n")
            }
          ),
          pe = function (e) {
            var t = e.children
            return (0, ne.jsx)(ue, { theme: s, children: t })
          }
        const fe = function () {
          var e, t, n
          return (
            M(),
            R(),
            (e = (0, D.I0)()),
            (t = I.actions),
            (n = (0, D.v9)(function (e) {
              return e.domains.mouse
            })),
            (0, C.useEffect)(
              function () {
                e(t.setMousePosition(n))
              },
              [n]
            ),
            (0, ne.jsx)(pe, { children: "Hello World" })
          )
        }
        ;(0, l.s)(document.querySelector("#root")).render(
          (0, ne.jsxs)(re, {
            children: [(0, ne.jsx)(ce, {}), (0, ne.jsx)(fe, {})]
          })
        )
      }
    },
    n = {}
  function r(e) {
    var a = n[e]
    if (void 0 !== a) return a.exports
    var o = (n[e] = { exports: {} })
    return t[e](o, o.exports, r), o.exports
  }
  ;(r.m = t),
    (e = []),
    (r.O = (t, n, a, o) => {
      if (!n) {
        var i = 1 / 0
        for (s = 0; s < e.length; s++) {
          for (var [n, a, o] = e[s], c = !0, l = 0; l < n.length; l++)
            (!1 & o || i >= o) && Object.keys(r.O).every((e) => r.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((c = !1), o < i && (i = o))
          if (c) {
            e.splice(s--, 1)
            var d = a()
            void 0 !== d && (t = d)
          }
        }
        return t
      }
      o = o || 0
      for (var s = e.length; s > 0 && e[s - 1][2] > o; s--) e[s] = e[s - 1]
      e[s] = [n, a, o]
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return r.d(t, { a: t }), t
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 179: 0 }
      r.O.j = (t) => 0 === e[t]
      var t = (t, n) => {
          var a,
            o,
            [i, c, l] = n,
            d = 0
          if (i.some((t) => 0 !== e[t])) {
            for (a in c) r.o(c, a) && (r.m[a] = c[a])
            if (l) var s = l(r)
          }
          for (t && t(n); d < i.length; d++)
            (o = i[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0)
          return r.O(s)
        },
        n = (self.webpackChunk_guhcalm_cute_gameboy =
          self.webpackChunk_guhcalm_cute_gameboy || [])
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)))
    })()
  var a = r.O(void 0, [977], () => r(117))
  a = r.O(a)
})()
