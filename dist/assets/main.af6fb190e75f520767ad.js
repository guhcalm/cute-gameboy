;(() => {
  "use strict"
  var n,
    e = {
      517: (n, e, r) => {
        var a = r(897),
          t = r(494),
          o = r(632),
          c = r(823)
        const i = function (n) {
            var e = n.children
            return (0, c.jsx)(o.zt, { store: l, children: e })
          },
          l = (0, t.xC)({ reducer: {} })
        var d,
          u = r(549)
        const s = (0, u.vJ)(
          d ||
            ((f = [
              "\n  *,\n  *::before,\n  *::after {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body,\n  #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n  }\n"
            ]),
            p || (p = f.slice(0)),
            (d = Object.freeze(
              Object.defineProperties(f, { raw: { value: Object.freeze(p) } })
            )))
        )
        var f, p, h, m, b, v, y
        !(function (n) {
          n[(n.DEFAULT = 0)] = "DEFAULT"
        })(h || (h = {})),
          (function (n) {
            ;(n[(n.ACTIVATE = 0)] = "ACTIVATE"),
              (n[(n.INACTIVATE = 1)] = "INACTIVATE")
          })(m || (m = {})),
          (function (n) {
            ;(n[(n.LEFT = 0)] = "LEFT"),
              (n[(n.RIGHT = 1)] = "RIGHT"),
              (n[(n.UP = 2)] = "UP"),
              (n[(n.DOWN = 3)] = "DOWN")
          })(b || (b = {})),
          (function (n) {
            ;(n[(n.SELECT = 0)] = "SELECT"), (n[(n.START = 1)] = "START")
          })(v || (v = {})),
          (function (n) {
            ;(n[(n.E = 0)] = "E"), (n[(n.Q = 1)] = "Q")
          })(y || (y = {}))
        const g = {
          name: h.DEFAULT,
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
        var k
        const T = u.ZP.main(
            k ||
              (k = (function (n, e) {
                return (
                  e || (e = n.slice(0)),
                  Object.freeze(
                    Object.defineProperties(n, {
                      raw: { value: Object.freeze(e) }
                    })
                  )
                )
              })([
                "\n  ",
                "\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n"
              ])),
            function (n) {
              var e = n.theme
              return "\n  // surface\n  --surface: "
                .concat(e.palette.surface.main, ";\n  --on-surface: ")
                .concat(
                  e.palette.surface.on,
                  ";\n  // background\n  --background: "
                )
                .concat(e.palette.background.main, ";\n  --on-background: ")
                .concat(e.palette.background.on, ";\n  // error\n  --error: ")
                .concat(e.palette.error.main, ";\n  --on-error: ")
                .concat(e.palette.error.on, ";\n  // primary\n  --primary: ")
                .concat(e.palette.primary.main, ";\n  --primary-on-light: ")
                .concat(e.palette.primary.light, ";\n  --primary-on-dark: ")
                .concat(e.palette.primary.dark, ";\n  --on-primary: ")
                .concat(
                  e.palette.primary.on,
                  ";\n  // secondary\n  --secondary: "
                )
                .concat(e.palette.secondary.main, ";\n  --secondary-on-light: ")
                .concat(e.palette.secondary.light, ";\n  --secondary-on-dark: ")
                .concat(e.palette.secondary.dark, ";\n  --on-primary: ")
                .concat(e.palette.secondary.on, ";\n")
            }
          ),
          O = function (n) {
            var e = n.children
            return (0, c.jsx)(T, { theme: g, children: e })
          }
        const j = function () {
          return (0, c.jsx)(O, { children: "Hello World" })
        }
        ;(0, a.s)(document.querySelector("#root")).render(
          (0, c.jsxs)(i, { children: [(0, c.jsx)(s, {}), (0, c.jsx)(j, {})] })
        )
      }
    },
    r = {}
  function a(n) {
    var t = r[n]
    if (void 0 !== t) return t.exports
    var o = (r[n] = { exports: {} })
    return e[n](o, o.exports, a), o.exports
  }
  ;(a.m = e),
    (n = []),
    (a.O = (e, r, t, o) => {
      if (!r) {
        var c = 1 / 0
        for (u = 0; u < n.length; u++) {
          for (var [r, t, o] = n[u], i = !0, l = 0; l < r.length; l++)
            (!1 & o || c >= o) && Object.keys(a.O).every((n) => a.O[n](r[l]))
              ? r.splice(l--, 1)
              : ((i = !1), o < c && (c = o))
          if (i) {
            n.splice(u--, 1)
            var d = t()
            void 0 !== d && (e = d)
          }
        }
        return e
      }
      o = o || 0
      for (var u = n.length; u > 0 && n[u - 1][2] > o; u--) n[u] = n[u - 1]
      n[u] = [r, t, o]
    }),
    (a.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n
      return a.d(e, { a: e }), e
    }),
    (a.d = (n, e) => {
      for (var r in e)
        a.o(e, r) &&
          !a.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] })
    }),
    (a.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n = { 179: 0 }
      a.O.j = (e) => 0 === n[e]
      var e = (e, r) => {
          var t,
            o,
            [c, i, l] = r,
            d = 0
          if (c.some((e) => 0 !== n[e])) {
            for (t in i) a.o(i, t) && (a.m[t] = i[t])
            if (l) var u = l(a)
          }
          for (e && e(r); d < c.length; d++)
            (o = c[d]), a.o(n, o) && n[o] && n[o][0](), (n[o] = 0)
          return a.O(u)
        },
        r = (self.webpackChunk_guhcalm_cute_gameboy =
          self.webpackChunk_guhcalm_cute_gameboy || [])
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)))
    })()
  var t = a.O(void 0, [977], () => a(517))
  t = a.O(t)
})()
