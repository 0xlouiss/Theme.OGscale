(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [808],
  {
    18: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => l });
      let l = (0, t(3908).A)("clock", [
        ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    1679: (e, s, t) => {
      "use strict";
      t.d(s, { SupportPageContent: () => x });
      var l = t(4114),
        a = t(826),
        i = t(3908);
      let o = (0, i.A)("message-square", [
        [
          "path",
          {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p",
          },
        ],
      ]);
      var r = t(960);
      let n = (0, i.A)("headphones", [
        [
          "path",
          {
            d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
            key: "1xhozi",
          },
        ],
      ]);
      var c = t(4730);
      let d = (0, i.A)("circle-check", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
      var m = t(18);
      let u = (0, i.A)("send", [
          [
            "path",
            {
              d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
              key: "1ffxy3",
            },
          ],
          ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
        ]),
        h = [
          {
            title: "Downloading your theme",
            body: "After purchase, visit /theme/portal to download your theme files and license key. If you need to resend your welcome email, let us know your order email and we will resend it.",
          },
          {
            title: "Activating your license",
            body: "To activate your license, go to the Customer Portal, select your license, and click “Activate”. Enter your Shopify .myshopify.com domain and store name. Licenses activate instantly.",
          },
          {
            title: "Need customizations?",
            body: "Scaled Theme is flexible out of the box. For custom sections or layouts, send us a message here and include screenshots. Our team will let you know next steps within 1 business day.",
          },
        ];
      function x() {
        let [e, s] = (0, a.useState)(null),
          [t, i] = (0, a.useState)(""),
          [x, p] = (0, a.useState)(""),
          [g, b] = (0, a.useState)(""),
          [f, y] = (0, a.useState)("idle"),
          [w, j] = (0, a.useState)(null),
          v = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          let e = localStorage.getItem("theme_customer_id");
          e && s(e);
          {
            let e = localStorage.getItem("theme_support_email"),
              s = localStorage.getItem("theme_support_name");
            e && p(e), s && i(s);
          }
        }, []),
          (0, a.useEffect)(() => {
            w && j(null);
          }, [g, x, t]),
          (0, a.useEffect)(
            () => () => {
              v.current && clearTimeout(v.current);
            },
            []
          );
        let N = async () => {
            if (!g.trim())
              return void j(
                "Please include a brief message so we can help you."
              );
            let s = x.trim(),
              l = t.trim();
            if (!e && !s)
              return void j(
                "Please include your email address so we can follow up."
              );
            try {
              y("sending"), j(null);
              let t = await fetch("/api/theme/support/messages", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    ...(e ? { "X-Customer-Id": e } : {}),
                  },
                  body: JSON.stringify({
                    message: g,
                    email: s || void 0,
                    name: l || void 0,
                    source: "support_page",
                  }),
                }),
                a = await t.json().catch(() => null);
              if (!t.ok) {
                let e =
                  (null == a ? void 0 : a.error) ||
                  "Unable to send your message. Please try again.";
                throw Error(e);
              }
              y("sent"),
                b(""),
                s && localStorage.setItem("theme_support_email", s),
                l && localStorage.setItem("theme_support_name", l),
                v.current && clearTimeout(v.current),
                (v.current = setTimeout(() => y("idle"), 4e3));
            } catch (e) {
              y("error"),
                j(
                  e instanceof Error
                    ? e.message
                    : "Something went wrong. Please try again."
                );
            }
          },
          k = (0, a.useMemo)(
            () => [
              {
                title: "Live Support Chat",
                description:
                  "Talk to a support specialist about installs, migrations, or license questions. We typically reply within a few minutes during business hours.",
                icon: (0, l.jsx)(o, { className: "w-5 h-5 text-indigo-500" }),
                actionLabel: "Open chat",
                onClick: () => {
                  let e = document.getElementById("support-chat");
                  e && e.scrollIntoView({ behavior: "smooth", block: "start" });
                },
              },
              {
                title: "Theme Documentation",
                description:
                  "Step-by-step guides for installation, customization, and launch checklists. Updated weekly with new walkthroughs.",
                icon: (0, l.jsx)(r.A, {
                  className: "w-5 h-5 text-emerald-500",
                }),
                actionLabel: "View docs",
                onClick: () => {
                  window.open("https://scaled.info/docs", "_blank");
                },
              },
              {
                title: "Email Support",
                description:
                  "Need us to look at your store? Send us a message and the team will follow up within 1 business day.",
                icon: (0, l.jsx)(n, { className: "w-5 h-5 text-rose-500" }),
                actionLabel: "Email support@scaled.info",
                onClick: () => {
                  window.location.href = "mailto:support@scaled.info";
                },
              },
            ],
            []
          );
        return (0, l.jsx)("div", {
          className: "pt-24 pb-20 px-4 sm:px-6 lg:px-8",
          children: (0, l.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, l.jsxs)("header", {
                className: "text-center mb-16",
                children: [
                  (0, l.jsxs)("span", {
                    className:
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm border border-indigo-100",
                    children: [
                      (0, l.jsx)(n, { className: "w-4 h-4" }),
                      "Support & Customer Care",
                    ],
                  }),
                  (0, l.jsx)("h1", {
                    className:
                      "mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight",
                    children: "We're here to help you launch and scale",
                  }),
                  (0, l.jsx)("p", {
                    className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto",
                    children:
                      "Live chat, theme documentation, and hands-on support from the Scaled theme team. Average response time under 15 minutes during business hours.",
                  }),
                ],
              }),
              (0, l.jsx)("section", {
                className: "grid gap-6 lg:grid-cols-3 mb-16",
                children: k.map((e) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      className:
                        "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-4",
                          children: e.icon,
                        }),
                        (0, l.jsx)("h3", {
                          className:
                            "text-xl font-semibold text-slate-900 mb-2",
                          children: e.title,
                        }),
                        (0, l.jsx)("p", {
                          className: "text-slate-600 mb-4 flex-1",
                          children: e.description,
                        }),
                        (0, l.jsxs)("button", {
                          onClick: e.onClick,
                          className:
                            "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors",
                          children: [
                            e.actionLabel,
                            (0, l.jsx)(m.A, { className: "w-4 h-4" }),
                          ],
                        }),
                      ],
                    },
                    e.title
                  )
                ),
              }),
              (0, l.jsxs)("section", {
                className: "grid gap-10 lg:grid-cols-[2fr,1fr]",
                id: "support-chat",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center",
                            children: (0, l.jsx)(o, { className: "w-5 h-5" }),
                          }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("h2", {
                                className: "text-2xl font-bold text-slate-900",
                                children: "Start a chat with support",
                              }),
                              (0, l.jsx)("p", {
                                className: "text-sm text-slate-500",
                                children:
                                  "Send us a message and we'll respond right here.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "grid sm:grid-cols-2 gap-4",
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("label", {
                                    className:
                                      "block text-sm font-semibold text-slate-700 mb-1",
                                    children: "Name",
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    value: t,
                                    onChange: (e) => i(e.target.value),
                                    placeholder: "Your name (optional)",
                                    className:
                                      "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-900 placeholder-slate-400",
                                  }),
                                ],
                              }),
                              !e &&
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("label", {
                                      className:
                                        "block text-sm font-semibold text-slate-700 mb-1",
                                      children: "Email",
                                    }),
                                    (0, l.jsx)("input", {
                                      type: "email",
                                      value: x,
                                      onChange: (e) => p(e.target.value),
                                      placeholder: "you@example.com",
                                      className:
                                        "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-900 placeholder-slate-400",
                                      required: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, l.jsx)("textarea", {
                            value: g,
                            onChange: (e) => b(e.target.value),
                            placeholder: "Describe how we can help…",
                            className:
                              "w-full min-h-[140px] px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-900 placeholder-slate-400",
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                            children: [
                              (0, l.jsx)("div", {
                                className: "text-xs text-slate-500",
                                children:
                                  "We respond during business hours (Mon-Sat, 9am-5pm EST). Include your order email for faster assistance.",
                              }),
                              (0, l.jsx)("button", {
                                onClick: N,
                                disabled: "sending" === f,
                                className:
                                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50",
                                children:
                                  "sending" === f
                                    ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)(c.A, {
                                            className: "w-4 h-4 animate-spin",
                                          }),
                                          "Sending…",
                                        ],
                                      })
                                    : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)(u, {
                                            className: "w-4 h-4",
                                          }),
                                          "Send message",
                                        ],
                                      }),
                              }),
                            ],
                          }),
                          "idle" === f && w
                            ? (0, l.jsx)("div", {
                                className: "text-sm text-rose-600 font-medium",
                                children: w,
                              })
                            : "sending" === f
                            ? (0, l.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 text-sm text-slate-600",
                                children: [
                                  (0, l.jsx)(c.A, {
                                    className: "w-4 h-4 animate-spin",
                                  }),
                                  "Sending your message…",
                                ],
                              })
                            : "sent" === f
                            ? (0, l.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 text-sm text-emerald-600",
                                children: [
                                  (0, l.jsx)(d, { className: "w-4 h-4" }),
                                  "We received your request! We'll follow up shortly.",
                                ],
                              })
                            : "error" === f && w
                            ? (0, l.jsx)("div", {
                                className: "text-sm text-rose-600 font-medium",
                                children: w,
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("aside", {
                    className:
                      "bg-slate-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "\uD83D\uDCDA Quick resources",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-sm text-slate-300",
                            children:
                              "Save time with these popular guides and updates.",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "space-y-3",
                        children: h.map((e) =>
                          (0, l.jsxs)(
                            "div",
                            {
                              className:
                                "bg-white/10 rounded-xl p-4 border border-white/10",
                              children: [
                                (0, l.jsx)("h4", {
                                  className:
                                    "text-sm font-semibold text-white mb-1",
                                  children: e.title,
                                }),
                                (0, l.jsx)("p", {
                                  className:
                                    "text-xs text-slate-200 leading-relaxed",
                                  children: e.body,
                                }),
                              ],
                            },
                            e.title
                          )
                        ),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "text-xs text-slate-300 border-t border-white/10 pt-4",
                        children: [
                          "For billing or license changes, message us here or email ",
                          (0, l.jsx)("a", {
                            href: "mailto:support@scaled.info",
                            className: "underline",
                            children: "support@scaled.info",
                          }),
                          ".",
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
    3527: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 4605)),
        Promise.resolve().then(t.bind(t, 407)),
        Promise.resolve().then(t.bind(t, 1679));
    },
  },
  (e) => {
    e.O(0, [740, 407, 552, 919, 142, 358], () => e((e.s = 3527))),
      (_N_E = e.O());
  },
]);
