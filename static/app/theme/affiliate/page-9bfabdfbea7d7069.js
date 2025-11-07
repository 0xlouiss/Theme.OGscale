(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [288],
  {
    1267: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      let a = (0, s(3908).A)("circle-alert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    3403: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      let a = (0, s(3908).A)("zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
    },
    5890: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      let a = (0, s(3908).A)("external-link", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
    5940: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 6240)),
        Promise.resolve().then(s.bind(s, 4605)),
        Promise.resolve().then(s.bind(s, 407));
    },
    6240: (e, t, s) => {
      "use strict";
      s.d(t, { AffiliatePortalContent: () => g });
      var a = s(4114),
        l = s(826),
        r = s(4730),
        i = s(1267),
        n = s(3908);
      let o = (0, n.A)("refresh-cw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]);
      var d = s(960);
      let c = (0, n.A)("copy", [
          [
            "rect",
            {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
              key: "17jyea",
            },
          ],
          [
            "path",
            {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
              key: "zix9uf",
            },
          ],
        ]),
        u = (0, n.A)("link", [
          [
            "path",
            {
              d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
              key: "1cjeqo",
            },
          ],
          [
            "path",
            {
              d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
              key: "19qd67",
            },
          ],
        ]);
      var m = s(3403),
        x = s(5890),
        p = s(740),
        h = s.n(p);
      function f(e) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(e / 100);
      }
      function b(e) {
        return e
          ? new Date(e).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "—";
      }
      function g() {
        var e;
        let [t, s] = (0, l.useState)(!0),
          [n, p] = (0, l.useState)(null),
          [g, y] = (0, l.useState)(null),
          [j, v] = (0, l.useState)([]),
          [N, w] = (0, l.useState)(null),
          [k, C] = (0, l.useState)(""),
          [S, _] = (0, l.useState)(null),
          [A, P] = (0, l.useState)(!1),
          [E, T] = (0, l.useState)(""),
          [q, L] = (0, l.useState)(""),
          [M, O] = (0, l.useState)(null),
          F = (0, l.useRef)(null),
          [R, U] = (0, l.useState)(!1),
          [I, D] = (0, l.useState)(""),
          [z, W] = (0, l.useState)(""),
          [Y, J] = (0, l.useState)(null),
          [B, H] = (0, l.useState)(!1),
          [Q, V] = (0, l.useState)("signup"),
          [X, G] = (0, l.useState)(""),
          [K, Z] = (0, l.useState)(""),
          [$, ee] = (0, l.useState)(""),
          [et, es] = (0, l.useState)(""),
          [ea, el] = (0, l.useState)(null),
          [er, ei] = (0, l.useState)(!1),
          en = (e) => {
            V(e),
              J(null),
              el(null),
              "login" === e && K && !I && D(K),
              "signup" === e && I && !K && Z(I);
          };
        (0, l.useEffect)(() => {
          C(window.location.origin);
        }, []),
          (0, l.useEffect)(
            () => (
              eo(),
              () => {
                F.current && clearTimeout(F.current);
              }
            ),
            []
          );
        let eo = async () => {
            try {
              s(!0), _(null);
              let e = localStorage.getItem("theme_customer_id");
              if (!e) {
                w(null), p(null), y(null), v([]), U(!0), en("signup");
                return;
              }
              w(e);
              let t = await fetch("/api/theme/affiliates/me", {
                  headers: { "X-Customer-Id": e },
                }),
                a = await t.json().catch(() => null);
              if (!t.ok) {
                if (401 === t.status || 403 === t.status) {
                  localStorage.removeItem("theme_customer_id"),
                    w(null),
                    p(null),
                    y(null),
                    v([]),
                    U(!0),
                    en("signup");
                  return;
                }
                let e =
                  (null == a ? void 0 : a.error) ||
                  "Unable to load your affiliate dashboard.";
                throw Error(e);
              }
              if (!a) throw Error("Unexpected response from affiliate API.");
              let l = ((e) => {
                var t,
                  s,
                  a,
                  l,
                  r,
                  i,
                  n,
                  o,
                  d,
                  c,
                  u,
                  m,
                  x,
                  p,
                  h,
                  f,
                  b,
                  g,
                  y,
                  j,
                  v,
                  N,
                  w,
                  k,
                  C,
                  S,
                  _,
                  A,
                  P;
                let E = {
                    id: e.affiliate.id,
                    slug: e.affiliate.slug,
                    referralCode: e.affiliate.referral_code,
                    status: e.affiliate.status,
                    commissionRate: Number(
                      null != (h = e.affiliate.default_commission_rate) ? h : 0
                    ),
                    createdAt: e.affiliate.created_at,
                  },
                  T = {
                    totalClicks: Number(
                      null !=
                        (b =
                          null !=
                          (f = null == (t = e.stats) ? void 0 : t.totalClicks)
                            ? f
                            : null == (s = e.stats)
                            ? void 0
                            : s.total_clicks)
                        ? b
                        : 0
                    ),
                    uniqueSessions: Number(
                      null !=
                        (y =
                          null !=
                          (g =
                            null == (a = e.stats) ? void 0 : a.uniqueSessions)
                            ? g
                            : null == (l = e.stats)
                            ? void 0
                            : l.unique_sessions)
                        ? y
                        : 0
                    ),
                    totalOrders: Number(
                      null !=
                        (v =
                          null !=
                          (j = null == (r = e.stats) ? void 0 : r.totalOrders)
                            ? j
                            : null == (i = e.stats)
                            ? void 0
                            : i.total_orders)
                        ? v
                        : 0
                    ),
                    totalRevenueCents: Number(
                      null !=
                        (w =
                          null !=
                          (N =
                            null == (n = e.stats)
                              ? void 0
                              : n.totalRevenueCents)
                            ? N
                            : null == (o = e.stats)
                            ? void 0
                            : o.total_revenue_cents)
                        ? w
                        : 0
                    ),
                    totalCommissionCents: Number(
                      null !=
                        (C =
                          null !=
                          (k =
                            null == (d = e.stats)
                              ? void 0
                              : d.totalCommissionCents)
                            ? k
                            : null == (c = e.stats)
                            ? void 0
                            : c.total_commission_cents)
                        ? C
                        : 0
                    ),
                    lastClickAt:
                      null !=
                      (_ =
                        null !=
                        (S = null == (u = e.stats) ? void 0 : u.lastClickAt)
                          ? S
                          : null == (m = e.stats)
                          ? void 0
                          : m.last_click_at)
                        ? _
                        : null,
                    lastOrderAt:
                      null !=
                      (P =
                        null !=
                        (A = null == (x = e.stats) ? void 0 : x.lastOrderAt)
                          ? A
                          : null == (p = e.stats)
                          ? void 0
                          : p.last_order_at)
                        ? P
                        : null,
                  };
                return {
                  affiliate: E,
                  stats: T,
                  links: (e.links || []).map((e) => ({
                    id: e.id,
                    slug: e.slug,
                    label: e.label,
                    destinationPath: e.destination_path,
                    createdAt: e.created_at,
                    isActive: !!e.is_active,
                    utmSource: e.utm_source,
                    utmMedium: e.utm_medium,
                    utmCampaign: e.utm_campaign,
                    utmContent: e.utm_content,
                    utmTerm: e.utm_term,
                  })),
                };
              })(a);
              J(null), p(l.affiliate), y(l.stats), v(l.links), U(!1);
            } catch (e) {
              console.error("Failed to load affiliate dashboard:", e),
                _(
                  e instanceof Error
                    ? e.message
                    : "Unable to load your affiliate dashboard right now."
                );
            } finally {
              s(!1);
            }
          },
          ed = async (e) => {
            if ((e.preventDefault(), !N || R)) {
              U(!0), _(null), en("signup");
              return;
            }
            let t = E.trim();
            if (t.length < 2)
              return void _(
                "Please give your link a descriptive name (at least 2 characters)."
              );
            try {
              P(!0), _(null);
              let e = await fetch("/api/theme/affiliates/me/links", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Customer-Id": N,
                  },
                  body: JSON.stringify({ label: t, slug: q.trim() || void 0 }),
                }),
                s = await e.json().catch(() => null);
              if (!e.ok)
                throw Error(
                  (null == s ? void 0 : s.error) ||
                    "Unable to create a new tracking link."
                );
              if (!s)
                throw Error(
                  "Unexpected response while creating tracking link."
                );
              let a = {
                id: s.id,
                slug: s.slug,
                label: s.label,
                destinationPath: s.destination_path,
                createdAt: s.created_at,
                isActive: s.is_active,
                utmSource: s.utm_source,
                utmMedium: s.utm_medium,
                utmCampaign: s.utm_campaign,
                utmContent: s.utm_content,
                utmTerm: s.utm_term,
              };
              v((e) => [a, ...e]), T(""), L("");
            } catch (e) {
              console.error(e),
                _(
                  e instanceof Error
                    ? e.message
                    : "Something went wrong while creating your link."
                );
            } finally {
              P(!1);
            }
          },
          ec = async (e) => {
            let t = ex(e);
            try {
              if (navigator.clipboard && navigator.clipboard.writeText)
                await navigator.clipboard.writeText(t);
              else {
                let e = document.createElement("textarea");
                (e.value = t),
                  (e.style.position = "fixed"),
                  (e.style.left = "-9999px"),
                  document.body.appendChild(e),
                  e.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(e);
              }
              O(e.id),
                F.current && clearTimeout(F.current),
                (F.current = setTimeout(() => O(null), 2e3));
            } catch (e) {
              console.error("Failed to copy link:", e),
                _("Could not copy the link. Please try again.");
            }
          },
          eu = async (e) => {
            if ((e.preventDefault(), !I || !z))
              return void J("Please enter both your email and password.");
            try {
              var t;
              H(!0), J(null), el(null);
              let e = await fetch("/api/theme/customers/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: I, password: z }),
                }),
                s = await e.json().catch(() => null);
              if (!e.ok) {
                let e =
                  (null == s ? void 0 : s.error) ||
                  "Login failed. Please check your credentials.";
                throw Error(e);
              }
              (null == s || null == (t = s.customer) ? void 0 : t.id) &&
                localStorage.setItem("theme_customer_id", s.customer.id),
                U(!1),
                D(""),
                W(""),
                await eo();
            } catch (e) {
              console.error("Affiliate login failed:", e),
                J(
                  e instanceof Error
                    ? e.message
                    : "Login failed. Please try again."
                );
            } finally {
              H(!1);
            }
          },
          em = async (e) => {
            e.preventDefault();
            let t = K.trim(),
              s = X.trim();
            if (!t || !$)
              return void el("Please enter your email and password.");
            if ($.length < 8)
              return void el("Password must be at least 8 characters.");
            if ($ !== et) return void el("Passwords do not match.");
            try {
              var a;
              ei(!0), el(null), J(null);
              let e = await fetch("/api/theme/affiliates/signup", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: t, name: s, password: $ }),
                }),
                l = await e.json().catch(() => null);
              if (!e.ok) {
                let e =
                  (null == l ? void 0 : l.error) ||
                  "Could not create your affiliate account. Please try again.";
                throw Error(e);
              }
              if (!(null == l || null == (a = l.customer) ? void 0 : a.id))
                throw Error(
                  "Missing customer information from signup response."
                );
              localStorage.setItem("theme_customer_id", l.customer.id),
                U(!1),
                G(""),
                Z(""),
                ee(""),
                es(""),
                en("login"),
                await eo();
            } catch (e) {
              console.error("Affiliate signup failed:", e),
                el(
                  e instanceof Error
                    ? e.message
                    : "Signup failed. Please try again."
                );
            } finally {
              ei(!1);
            }
          },
          ex = (e) => {
            let t = new URLSearchParams({
              utm_source: e.utmSource || "affiliate",
              utm_medium: e.utmMedium || "partner",
              utm_campaign: e.utmCampaign || "theme-affiliate",
              utm_content:
                e.utmContent || (null == n ? void 0 : n.slug) || e.slug,
              utm_id: e.slug,
            });
            return (
              e.utmTerm && t.set("utm_term", e.utmTerm),
              ""
                .concat(k || "")
                .concat(e.destinationPath, "?")
                .concat(t.toString())
            );
          },
          ep = (0, l.useMemo)(
            () => (n && (j.find((e) => e.slug === n.slug) || j[0])) || null,
            [j, n]
          ),
          eh = (0, l.useMemo)(
            () => (ep ? j.filter((e) => e.id !== ep.id) : j),
            [j, ep]
          );
        if (R) {
          let e = "signup" === Q;
          return (0, a.jsx)("div", {
            className: "pt-24 pb-20 px-4 sm:px-6 lg:px-8",
            children: (0, a.jsxs)("div", {
              className:
                "max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-6",
              children: [
                (0, a.jsxs)("div", {
                  className: "space-y-2 text-center",
                  children: [
                    (0, a.jsx)("h1", {
                      className: "text-2xl font-bold text-slate-900",
                      children: e
                        ? "Become a Scaled affiliate"
                        : "Welcome back, partner",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-sm text-slate-600",
                      children: e
                        ? "Earn 40% commission on every theme sale. Create your account in under a minute."
                        : "Sign in to access your affiliate dashboard, links, and real-time stats.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex justify-center gap-2 bg-slate-100/70 rounded-lg p-1",
                  children: [
                    (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => en("signup"),
                      className:
                        "flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors ".concat(
                          e
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        ),
                      disabled: er || B,
                      children: "Become an affiliate",
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => en("login"),
                      className:
                        "flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors ".concat(
                          e
                            ? "text-slate-600 hover:text-slate-900"
                            : "bg-white text-slate-900 shadow-sm"
                        ),
                      disabled: er || B,
                      children: "Sign in",
                    }),
                  ],
                }),
                e
                  ? (0, a.jsxs)("form", {
                      onSubmit: em,
                      className: "space-y-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("label", {
                              className: "text-sm font-semibold text-slate-900",
                              children: "Full name",
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: X,
                              onChange: (e) => G(e.target.value),
                              placeholder: "Alex Carter",
                              className:
                                "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/80 focus:border-transparent transition-all",
                              minLength: 2,
                              maxLength: 120,
                              disabled: er,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("label", {
                              className: "text-sm font-semibold text-slate-900",
                              children: "Email address",
                            }),
                            (0, a.jsx)("input", {
                              type: "email",
                              value: K,
                              onChange: (e) => Z(e.target.value),
                              placeholder: "you@example.com",
                              className:
                                "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/80 focus:border-transparent transition-all",
                              required: !0,
                              autoComplete: "email",
                              disabled: er,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("label", {
                              className: "text-sm font-semibold text-slate-900",
                              children: "Password",
                            }),
                            (0, a.jsx)("input", {
                              type: "password",
                              value: $,
                              onChange: (e) => ee(e.target.value),
                              placeholder: "Create a password",
                              className:
                                "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/80 focus:border-transparent transition-all",
                              required: !0,
                              minLength: 8,
                              autoComplete: "new-password",
                              disabled: er,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("label", {
                              className: "text-sm font-semibold text-slate-900",
                              children: "Confirm password",
                            }),
                            (0, a.jsx)("input", {
                              type: "password",
                              value: et,
                              onChange: (e) => es(e.target.value),
                              placeholder: "Re-enter your password",
                              className:
                                "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/80 focus:border-transparent transition-all",
                              required: !0,
                              minLength: 8,
                              autoComplete: "new-password",
                              disabled: er,
                            }),
                          ],
                        }),
                        ea &&
                          (0, a.jsx)("div", {
                            className:
                              "bg-rose-50 border border-rose-200 text-rose-600 px-4 py-3 rounded-lg text-sm font-medium",
                            children: ea,
                          }),
                        (0, a.jsx)("button", {
                          type: "submit",
                          disabled: er,
                          className:
                            "w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children: er
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(r.A, {
                                    className: "w-4 h-4 animate-spin",
                                  }),
                                  "Creating your account…",
                                ],
                              })
                            : "Create affiliate account",
                        }),
                      ],
                    })
                  : (0, a.jsxs)("form", {
                      onSubmit: eu,
                      className: "space-y-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("label", {
                              className: "text-sm font-semibold text-slate-900",
                              children: "Email address",
                            }),
                            (0, a.jsx)("input", {
                              type: "email",
                              value: I,
                              onChange: (e) => D(e.target.value),
                              placeholder: "you@example.com",
                              className:
                                "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/80 focus:border-transparent transition-all",
                              required: !0,
                              autoComplete: "email",
                              disabled: B,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("label", {
                              className: "text-sm font-semibold text-slate-900",
                              children: "Password",
                            }),
                            (0, a.jsx)("input", {
                              type: "password",
                              value: z,
                              onChange: (e) => W(e.target.value),
                              placeholder: "Enter your password",
                              className:
                                "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/80 focus:border-transparent transition-all",
                              required: !0,
                              autoComplete: "current-password",
                              disabled: B,
                            }),
                          ],
                        }),
                        Y &&
                          (0, a.jsx)("div", {
                            className:
                              "bg-rose-50 border border-rose-200 text-rose-600 px-4 py-3 rounded-lg text-sm font-medium",
                            children: Y,
                          }),
                        (0, a.jsx)("button", {
                          type: "submit",
                          disabled: B,
                          className:
                            "w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children: B
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(r.A, {
                                    className: "w-4 h-4 animate-spin",
                                  }),
                                  "Signing in…",
                                ],
                              })
                            : "Sign in",
                        }),
                      ],
                    }),
                (0, a.jsxs)("div", {
                  className: "text-xs text-slate-500 text-center space-y-1",
                  children: [
                    (0, a.jsxs)("p", {
                      children: [
                        "Questions about the program? Email ",
                        (0, a.jsx)("a", {
                          href: "mailto:partners@scaled.info",
                          className:
                            "text-indigo-600 font-medium hover:underline",
                          children: "partners@scaled.info",
                        }),
                        ".",
                      ],
                    }),
                    (0, a.jsx)("p", {
                      children: "We review new affiliate signups daily.",
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        if (t)
          return (0, a.jsx)("div", {
            className: "pt-32 pb-20 px-4 sm:px-6 lg:px-8",
            children: (0, a.jsxs)("div", {
              className: "max-w-4xl mx-auto flex flex-col items-center gap-4",
              children: [
                (0, a.jsx)(r.A, {
                  className: "w-8 h-8 animate-spin text-slate-400",
                }),
                (0, a.jsx)("p", {
                  className: "text-sm text-slate-500",
                  children: "Loading your affiliate portal…",
                }),
              ],
            }),
          });
        if (!n || !g)
          return (0, a.jsx)("div", {
            className: "pt-32 pb-20 px-4 sm:px-6 lg:px-8",
            children: (0, a.jsxs)("div", {
              className: "max-w-4xl mx-auto text-center space-y-4",
              children: [
                (0, a.jsx)(i.A, {
                  className: "w-10 h-10 text-amber-500 mx-auto",
                }),
                (0, a.jsx)("h2", {
                  className: "text-2xl font-semibold text-slate-900",
                  children: "Affiliate access unavailable",
                }),
                (0, a.jsx)("p", {
                  className: "text-slate-600",
                  children:
                    "We couldn't load your affiliate profile. Please refresh the page or contact support if the issue persists.",
                }),
                (0, a.jsxs)("button", {
                  onClick: eo,
                  className:
                    "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors",
                  children: [
                    (0, a.jsx)(o, { className: "w-4 h-4" }),
                    "Refresh",
                  ],
                }),
              ],
            }),
          });
        let ef =
            ((e = n.commissionRate || 0), "".concat(Math.round(100 * e), "%")),
          eb =
            "paused" === n.status
              ? "Your affiliate account is currently paused. Reach out to the team if you need help getting reactivated."
              : "deleted" === n.status
              ? "Your affiliate account has been deactivated. Contact support if this is unexpected."
              : null;
        return (0, a.jsx)("div", {
          className: "pt-24 pb-20 px-4 sm:px-6 lg:px-8",
          children: (0, a.jsxs)("div", {
            className: "max-w-6xl mx-auto space-y-10",
            children: [
              (0, a.jsxs)("header", {
                className:
                  "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-sm font-semibold text-indigo-600 mb-2",
                        children: "Affiliate Program",
                      }),
                      (0, a.jsx)("h1", {
                        className:
                          "text-3xl sm:text-4xl font-bold text-slate-900",
                        children: "Affiliate Portal",
                      }),
                      (0, a.jsxs)("p", {
                        className: "mt-3 text-slate-600 max-w-2xl",
                        children: [
                          "Share your link, track performance, and earn ",
                          ef,
                          " on every referred sale. Keep it simple: send traffic to your primary link and we'll do the rest.",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-start gap-3",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide ".concat(
                            {
                              active:
                                "bg-emerald-100 text-emerald-700 border border-emerald-200",
                              paused:
                                "bg-amber-100 text-amber-700 border border-amber-200",
                              deleted:
                                "bg-rose-100 text-rose-700 border border-rose-200",
                            }[n.status]
                          ),
                        children: [
                          "Status: ",
                          "active" === n.status
                            ? "Active"
                            : "paused" === n.status
                            ? "Paused"
                            : "Archived",
                        ],
                      }),
                      (0, a.jsxs)("button", {
                        onClick: eo,
                        className:
                          "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium",
                        children: [
                          (0, a.jsx)(o, { className: "w-4 h-4" }),
                          "Refresh data",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              eb &&
                (0, a.jsxs)("div", {
                  className:
                    "border border-amber-200 bg-amber-50 rounded-xl px-5 py-4 text-amber-700 text-sm font-medium flex items-start gap-3",
                  children: [
                    (0, a.jsx)(i.A, { className: "w-4 h-4 mt-0.5" }),
                    (0, a.jsx)("span", { children: eb }),
                  ],
                }),
              S &&
                (0, a.jsx)("div", {
                  className:
                    "border border-rose-200 bg-rose-50 rounded-xl px-5 py-4 text-rose-700 text-sm font-medium",
                  children: S,
                }),
              (0, a.jsxs)("section", {
                className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "glass-card p-6 rounded-2xl border border-slate-200 bg-white",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-xs uppercase tracking-wide text-slate-500 font-semibold mb-2",
                        children: "Lifetime Revenue",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-3xl font-bold text-slate-900",
                        children: f(g.totalRevenueCents),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs text-slate-500 mt-2",
                        children: "Total sales generated from your links",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "glass-card p-6 rounded-2xl border border-slate-200 bg-white",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-xs uppercase tracking-wide text-slate-500 font-semibold mb-2",
                        children: "Commission Earned",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-3xl font-bold text-slate-900",
                        children: f(g.totalCommissionCents),
                      }),
                      (0, a.jsxs)("p", {
                        className: "text-xs text-slate-500 mt-2",
                        children: ["Paid at your ", ef, " share"],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "glass-card p-6 rounded-2xl border border-slate-200 bg-white",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-xs uppercase tracking-wide text-slate-500 font-semibold mb-2",
                        children: "Clicks",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-3xl font-bold text-slate-900",
                        children: g.totalClicks,
                      }),
                      (0, a.jsxs)("p", {
                        className: "text-xs text-slate-500 mt-2",
                        children: ["Unique sessions: ", g.uniqueSessions],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "glass-card p-6 rounded-2xl border border-slate-200 bg-white",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-xs uppercase tracking-wide text-slate-500 font-semibold mb-2",
                        children: "Sales",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-3xl font-bold text-slate-900",
                        children: g.totalOrders,
                      }),
                      (0, a.jsxs)("p", {
                        className: "text-xs text-slate-500 mt-2",
                        children: ["Last sale: ", b(g.lastOrderAt)],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                className:
                  "grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "rounded-2xl border border-slate-200 bg-white p-6 space-y-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm font-semibold text-slate-500 uppercase tracking-wide",
                                children: "Primary link",
                              }),
                              (0, a.jsx)("h2", {
                                className:
                                  "text-xl font-bold text-slate-900 mt-1",
                                children: "Share this URL anywhere",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-sm text-slate-600 mt-2",
                                children:
                                  "Send traffic to one link. We cookie visitors and credit any sale within 30 days.",
                              }),
                            ],
                          }),
                          (0, a.jsx)(d.A, {
                            className: "w-10 h-10 text-indigo-500",
                          }),
                        ],
                      }),
                      ep
                        ? (0, a.jsxs)("div", {
                            className:
                              "border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between gap-3",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-sm font-semibold text-slate-600 uppercase tracking-wide",
                                    children: "Primary",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => ec(ep),
                                    className:
                                      "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors",
                                    children:
                                      M === ep.id
                                        ? (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsx)("span", {
                                              children: "Copied",
                                            }),
                                          })
                                        : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsx)(c, {
                                                className: "w-4 h-4",
                                              }),
                                              "Copy link",
                                            ],
                                          }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "rounded-lg bg-white border border-slate-200 px-3 py-2 text-sm text-slate-700 break-all",
                                children: ex(ep),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 text-xs text-slate-500",
                                children: [
                                  (0, a.jsx)(u, { className: "w-3.5 h-3.5" }),
                                  (0, a.jsxs)("span", {
                                    children: [
                                      "Leads to ",
                                      (0, a.jsx)("span", {
                                        className: "font-medium text-slate-600",
                                        children: ep.destinationPath,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, a.jsx)("div", {
                            className:
                              "border border-dashed border-slate-200 rounded-xl p-4 text-sm text-slate-500",
                            children:
                              "Your primary link will appear here once it's provisioned.",
                          }),
                      eh.length > 0 &&
                        (0, a.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "text-sm font-semibold text-slate-700 uppercase tracking-wide",
                              children: "Additional tracking links",
                            }),
                            (0, a.jsx)("div", {
                              className: "space-y-3",
                              children: eh.map((e) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "border border-slate-200 rounded-xl p-4 bg-white shadow-sm flex flex-col gap-2",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className:
                                                  "text-sm font-semibold text-slate-800",
                                                children: e.label,
                                              }),
                                              !e.isActive &&
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "text-xs font-semibold text-amber-600 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full",
                                                  children: "Inactive",
                                                }),
                                            ],
                                          }),
                                          (0, a.jsx)("button", {
                                            onClick: () => ec(e),
                                            className:
                                              "inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors",
                                            children:
                                              M === e.id
                                                ? (0, a.jsx)(a.Fragment, {
                                                    children: (0, a.jsx)(
                                                      "span",
                                                      { children: "Copied" }
                                                    ),
                                                  })
                                                : (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                      (0, a.jsx)(c, {
                                                        className:
                                                          "w-3.5 h-3.5",
                                                      }),
                                                      "Copy",
                                                    ],
                                                  }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-700 break-all",
                                        children: ex(e),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between text-xs text-slate-500",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            children: [
                                              "Created ",
                                              b(e.createdAt),
                                            ],
                                          }),
                                          (0, a.jsxs)("span", {
                                            children: [
                                              "Destination: ",
                                              (0, a.jsx)("span", {
                                                className:
                                                  "text-slate-600 font-medium",
                                                children: e.destinationPath,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, a.jsxs)("aside", {
                    className: "space-y-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "rounded-2xl border border-slate-200 bg-white p-6 space-y-5",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, a.jsx)(m.A, {
                                className: "w-6 h-6 text-indigo-500",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "text-lg font-semibold text-slate-900",
                                    children: "Create a new campaign link",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm text-slate-600",
                                    children:
                                      "Tag different channels (YouTube, email, TikTok) with custom slugs so you can see what's working.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("form", {
                            onSubmit: ed,
                            className: "space-y-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, a.jsx)("label", {
                                    className:
                                      "text-sm font-semibold text-slate-700",
                                    children: "Link label",
                                  }),
                                  (0, a.jsx)("input", {
                                    value: E,
                                    onChange: (e) => T(e.target.value),
                                    placeholder: "Example: TikTok organic",
                                    className:
                                      "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10",
                                    disabled: A,
                                    required: !0,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, a.jsxs)("label", {
                                    className:
                                      "text-sm font-semibold text-slate-700",
                                    children: [
                                      "Custom slug ",
                                      (0, a.jsx)("span", {
                                        className: "text-slate-400 font-normal",
                                        children: "(optional)",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("input", {
                                    value: q,
                                    onChange: (e) => L(e.target.value),
                                    placeholder: "e.g. tiktok-feb",
                                    className:
                                      "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10",
                                    disabled: A,
                                    pattern: "^[a-zA-Z0-9-]+$",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-slate-500",
                                    children:
                                      "Letters, numbers, and hyphens only. Leave blank to auto-generate.",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("button", {
                                type: "submit",
                                disabled: A,
                                className:
                                  "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors",
                                children: A
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(r.A, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                        "Creating…",
                                      ],
                                    })
                                  : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(u, { className: "w-4 h-4" }),
                                        "Generate tracking link",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "rounded-2xl border border-slate-200 bg-white p-6 space-y-4",
                        children: [
                          (0, a.jsxs)("h3", {
                            className:
                              "text-lg font-semibold text-slate-900 flex items-center gap-2",
                            children: [
                              (0, a.jsx)(x.A, {
                                className: "w-5 h-5 text-indigo-500",
                              }),
                              "Quick notes",
                            ],
                          }),
                          (0, a.jsxs)("ul", {
                            className: "space-y-3 text-sm text-slate-600",
                            children: [
                              (0, a.jsx)("li", {
                                children:
                                  "40% commission is locked in by default. Payouts go out on the 1st business day each month.",
                              }),
                              (0, a.jsxs)("li", {
                                children: [
                                  "Need a custom asset or co-branded landing page? Email",
                                  " ",
                                  (0, a.jsx)(h(), {
                                    href: "mailto:partners@scaled.info",
                                    className:
                                      "text-indigo-600 hover:underline",
                                    children: "partners@scaled.info",
                                  }),
                                  ".",
                                ],
                              }),
                              (0, a.jsx)("li", {
                                children:
                                  "Use custom links for every channel so you can see which audiences convert best.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    e.O(0, [740, 407, 552, 919, 142, 358], () => e((e.s = 5940))),
      (_N_E = e.O());
  },
]);
