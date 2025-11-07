(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2],
  {
    89: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      let a = (0, s(3908).A)("eye", [
        [
          "path",
          {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ]);
    },
    2594: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      let a = (0, s(3908).A)("eye-off", [
        [
          "path",
          {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f",
          },
        ],
        ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
        [
          "path",
          {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a",
          },
        ],
        ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ]);
    },
    4029: (e, t, s) => {
      "use strict";
      s.d(t, { LoginForm: () => c });
      var a = s(4114),
        r = s(826),
        l = s(3081);
      let o = (0, s(3908).A)("mail", [
        [
          "path",
          { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" },
        ],
        [
          "rect",
          { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
        ],
      ]);
      var n = s(5711),
        i = s(2594),
        d = s(89);
      function c() {
        let e = (0, l.useRouter)(),
          t = (0, l.useSearchParams)(),
          [s, c] = (0, r.useState)(""),
          [u, m] = (0, r.useState)(""),
          [h, x] = (0, r.useState)(!1),
          [p, b] = (0, r.useState)(!1),
          [f, g] = (0, r.useState)(""),
          y = (0, r.useMemo)(() => {
            let e = t.get("next");
            return !e || !e.startsWith("/") || e.startsWith("//")
              ? "/theme/portal"
              : e;
          }, [t]),
          v = async (t) => {
            if ((t.preventDefault(), !s || !u))
              return void g("Please enter both email and password");
            b(!0), g("");
            try {
              let t = await fetch("/api/theme/customers/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: s, password: u }),
                }),
                a = await t.json();
              if (!t.ok) throw Error(a.error || "Login failed");
              a.customer &&
                a.customer.id &&
                localStorage.setItem("theme_customer_id", a.customer.id),
                e.push(y);
            } catch (e) {
              g(e instanceof Error ? e.message : "Something went wrong"), b(!1);
            }
          };
        return (0, a.jsxs)("form", {
          onSubmit: v,
          className: "space-y-6",
          children: [
            (0, a.jsxs)("div", {
              className: "space-y-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    (0, a.jsxs)("label", {
                      className:
                        "text-sm font-semibold text-slate-900 flex items-center gap-2",
                      children: [
                        (0, a.jsx)(o, { className: "w-4 h-4" }),
                        "Email Address",
                      ],
                    }),
                    (0, a.jsx)("input", {
                      type: "email",
                      value: s,
                      onChange: (e) => c(e.target.value),
                      placeholder: "your@email.com",
                      className:
                        "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all",
                      required: !0,
                      disabled: p,
                      autoComplete: "email",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    (0, a.jsxs)("label", {
                      className:
                        "text-sm font-semibold text-slate-900 flex items-center gap-2",
                      children: [
                        (0, a.jsx)(n.A, { className: "w-4 h-4" }),
                        "Password",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, a.jsx)("input", {
                          type: h ? "text" : "password",
                          value: u,
                          onChange: (e) => m(e.target.value),
                          placeholder: "Enter your password",
                          className:
                            "w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all",
                          required: !0,
                          disabled: p,
                          autoComplete: "current-password",
                        }),
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: () => x(!h),
                          className:
                            "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
                          tabIndex: -1,
                          children: h
                            ? (0, a.jsx)(i.A, { className: "w-5 h-5" })
                            : (0, a.jsx)(d.A, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                f &&
                  (0, a.jsx)("div", {
                    className:
                      "bg-rose-50 border border-rose-200 text-rose-600 px-4 py-3 rounded-lg text-sm font-medium",
                    children: f,
                  }),
              ],
            }),
            (0, a.jsx)("button", {
              type: "submit",
              disabled: p || !s || !u,
              className:
                "w-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 disabled:from-slate-400 disabled:to-slate-300 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 disabled:transform-none",
              children: p ? "Logging in..." : "Login to Portal",
            }),
            (0, a.jsx)("div", {
              className: "text-center",
              children: (0, a.jsxs)("p", {
                className: "text-sm text-slate-600",
                children: [
                  "Don't have an account yet?",
                  " ",
                  (0, a.jsx)("a", {
                    href: "/theme",
                    className: "text-blue-600 hover:text-blue-700 font-medium",
                    children: "Purchase a theme",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    9505: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 4605)),
        Promise.resolve().then(s.bind(s, 4029)),
        Promise.resolve().then(s.t.bind(s, 740, 23));
    },
  },
  (e) => {
    e.O(0, [740, 67, 919, 142, 358], () => e((e.s = 9505))), (_N_E = e.O());
  },
]);
