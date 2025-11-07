"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [67],
  {
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
            children: h,
            iconNode: d,
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
              ...(!h &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                })(u) && { "aria-hidden": "true" }),
              ...u,
            },
            [
              ...d.map((e) => {
                let [t, a] = e;
                return (0, s.createElement)(t, a);
              }),
              ...(Array.isArray(h) ? h : [h]),
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
        h = a(9458),
        d = a(6180);
      function u() {
        let [e, t] = (0, l.useState)(!1),
          [a, r] = (0, l.useState)(!1),
          d = (0, i.usePathname)();
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
          }, [d]),
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
                    (0, s.jsx)(o(), {
                      href: "/theme",
                      children: (0, s.jsx)("img", {
                        src: e
                          ? "https://ik.imagekit.io/scaledinfo/scaled.info/1.png?updatedAt=1758504581551"
                          : "https://ik.imagekit.io/scaledinfo/scaled.info/2.png?updatedAt=1758504581531",
                        alt: "Logo",
                        className:
                          "h-8 sm:h-9 w-auto transition-opacity duration-300",
                      }),
                    }),
                    (0, s.jsx)("button", {
                      onClick: () => r(!a),
                      className:
                        "lg:hidden p-2 rounded-lg transition-colors ".concat(
                          e
                            ? "text-white hover:bg-white/10"
                            : "text-slate-900 hover:bg-slate-100"
                        ),
                      "aria-label": "Toggle menu",
                      children: a
                        ? (0, s.jsx)(n.A, { className: "w-6 h-6" })
                        : (0, s.jsx)(c.A, { className: "w-6 h-6" }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "hidden lg:flex items-center gap-6 sm:gap-8",
                      children: [
                        (0, s.jsxs)(o(), {
                          href: "/theme/products",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden sm:block relative ".concat(
                              "/theme/products" === d
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Products",
                            "/theme/products" === d &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(o(), {
                          href: "/theme/support",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden md:block relative ".concat(
                              "/theme/support" === d
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Support",
                            "/theme/support" === d &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(o(), {
                          href: "/theme/login",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden lg:block relative ".concat(
                              "/theme/login" === d
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Account",
                            "/theme/login" === d &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(o(), {
                          href: "/theme/affiliate",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden lg:block relative ".concat(
                              "/theme/affiliate" === d
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Affiliate",
                            "/theme/affiliate" === d &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(o(), {
                          href: "#purchase",
                          className:
                            "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 ".concat(
                              e
                                ? "bg-white text-slate-900 hover:bg-slate-100"
                                : "bg-slate-900 text-white hover:bg-slate-800"
                            ),
                          children: [
                            "Get Started",
                            (0, s.jsx)(h.A, { className: "w-4 h-4" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "fixed inset-0 z-40 lg:hidden transition-all duration-500 ".concat(
                    a
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  ),
                children: [
                  (0, s.jsx)("div", {
                    onClick: () => r(!1),
                    className:
                      "absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-500 ".concat(
                        a ? "opacity-100" : "opacity-0"
                      ),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-r border-slate-200/50 transition-all duration-500 ease-out ".concat(
                        a
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-full opacity-0"
                      ),
                    children: (0, s.jsxs)("div", {
                      className: "h-full flex flex-col",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between px-6 py-6 border-b border-slate-200/50",
                          children: [
                            (0, s.jsx)(o(), {
                              href: "/theme",
                              onClick: () => r(!1),
                              children: (0, s.jsx)("img", {
                                src: "https://ik.imagekit.io/scaledinfo/scaled.info/2.png?updatedAt=1758504581531",
                                alt: "Logo",
                                className: "h-8 w-auto",
                              }),
                            }),
                            (0, s.jsx)("button", {
                              onClick: () => r(!1),
                              className:
                                "p-2 rounded-lg text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors",
                              "aria-label": "Close menu",
                              children: (0, s.jsx)(n.A, {
                                className: "w-6 h-6",
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex-1 overflow-y-auto px-4 py-6 space-y-2",
                          children: [
                            (0, s.jsx)(m, {
                              href: "/theme",
                              isActive: "/theme" === d,
                              children: "Home",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/products",
                              isActive: "/theme/products" === d,
                              children: "Products",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/support",
                              isActive: "/theme/support" === d,
                              children: "Support",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/login",
                              isActive: "/theme/login" === d,
                              children: "Account",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/affiliate",
                              isActive: "/theme/affiliate" === d,
                              children: "Affiliate",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "p-4 border-t border-slate-200/50 bg-gradient-to-b from-transparent to-slate-50/50",
                          children: (0, s.jsxs)(o(), {
                            href: "#purchase",
                            onClick: () => r(!1),
                            className:
                              "flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold text-lg bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:bg-blue-800 transition-all duration-300 active:scale-[0.98]",
                            children: [
                              "Get Started",
                              (0, s.jsx)(h.A, { className: "w-5 h-5" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function m(e) {
        let { href: t, isActive: a, children: l } = e;
        return (0, s.jsxs)(o(), {
          href: t,
          className:
            "flex items-center justify-between px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-200 active:scale-[0.98] ".concat(
              a
                ? "bg-blue-50 text-slate-900 shadow-sm border border-blue-200"
                : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
            ),
          children: [
            (0, s.jsx)("span", { children: l }),
            (0, s.jsx)(d.A, {
              className: "w-5 h-5 transition-all ".concat(
                a ? "text-blue-700" : "text-slate-400"
              ),
            }),
          ],
        });
      }
    },
    5711: (e, t, a) => {
      a.d(t, { A: () => s });
      let s = (0, a(3908).A)("lock", [
        [
          "rect",
          {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1",
          },
        ],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
      ]);
    },
    5992: (e, t, a) => {
      a.d(t, { A: () => s });
      let s = (0, a(3908).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    6180: (e, t, a) => {
      a.d(t, { A: () => s });
      let s = (0, a(3908).A)("chevron-right", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    6663: (e, t, a) => {
      a.d(t, { A: () => s });
      let s = (0, a(3908).A)("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]);
    },
    9458: (e, t, a) => {
      a.d(t, { A: () => s });
      let s = (0, a(3908).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
  },
]);
