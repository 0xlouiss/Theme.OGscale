"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [552],
  {
    960: (e, t, a) => {
      a.d(t, { A: () => s });
      let s = (0, a(3908).A)("shield-check", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    2722: (e, t, a) => {
      a.d(t, { A: () => s });
      let s = (0, a(3908).A)("chevron-down", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    3081: (e, t, a) => {
      var s = a(2581);
      a.o(s, "useParams") &&
        a.d(t, {
          useParams: function () {
            return s.useParams;
          },
        }),
        a.o(s, "usePathname") &&
          a.d(t, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        a.o(s, "useRouter") &&
          a.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        a.o(s, "useSearchParams") &&
          a.d(t, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
    3908: (e, t, a) => {
      a.d(t, { A: () => n });
      var s = a(826);
      let l = (e) => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) =>
            a ? a.toUpperCase() : t.toLowerCase()
          );
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        r = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return t
            .filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let i = (0, s.forwardRef)((e, t) => {
          let {
            color: a = "currentColor",
            size: l = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: n,
            className: c = "",
            children: d,
            iconNode: h,
            ...u
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...o,
              width: l,
              height: l,
              stroke: a,
              strokeWidth: n ? (24 * Number(i)) / Number(l) : i,
              className: r("lucide", c),
              ...(!d &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                })(u) && { "aria-hidden": "true" }),
              ...u,
            },
            [
              ...h.map((e) => {
                let [t, a] = e;
                return (0, s.createElement)(t, a);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        n = (e, t) => {
          let a = (0, s.forwardRef)((a, o) => {
            let { className: n, ...c } = a;
            return (0, s.createElement)(i, {
              ref: o,
              iconNode: t,
              className: r(
                "lucide-".concat(
                  l(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                n
              ),
              ...c,
            });
          });
          return (a.displayName = l(e)), a;
        };
    },
    4605: (e, t, a) => {
      a.d(t, { SmartNav: () => u });
      var s = a(4114),
        l = a(826),
        r = a(740),
        o = a.n(r),
        i = a(3081),
        n = a(5992),
        c = a(6663),
        d = a(9458),
        h = a(6180);
      function u() {
        let [e, t] = (0, l.useState)(!1),
          [a, r] = (0, l.useState)(!1),
          h = (0, i.usePathname)();
        return (
          (0, l.useEffect)(() => {
            let e = () => {
              let e = document.querySelector("nav");
              if (!e) return;
              let a = e.getBoundingClientRect(),
                s = a.top + a.height / 2,
                l = document.querySelectorAll('[data-dark-section="true"]'),
                r = !1;
              l.forEach((e) => {
                let t = e.getBoundingClientRect();
                s >= t.top && s <= t.bottom && (r = !0);
              }),
                t(r);
            };
            return (
              e(),
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, l.useEffect)(() => {
            r(!1);
          }, [h]),
          (0, l.useEffect)(
            () => (
              a
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "unset"),
              () => {
                document.body.style.overflow = "unset";
              }
            ),
            [a]
          ),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("nav", {
                className:
                  "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ".concat(
                    e
                      ? "bg-slate-900/95 backdrop-blur-sm border-slate-700/70"
                      : "bg-white/95 backdrop-blur-sm border-slate-200/70"
                  ),
                children: (0, s.jsxs)("div", {
                  className:
                    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center",
                  children: [
                    {
                      ...
                    }
                  ]
                })
              })
            ]
          })
        )
      }
    }
  }
]);
