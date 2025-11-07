"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [799],
  {
    4555: (e, t, a) => {
      a.d(t, { $g: () => r, Du: () => l, ay: () => i, rl: () => n });
      let s = "theme_utm_params";
      function o(e) {
        if (!e) return;
        let t = {};
        return (
          e.source && (t.source = e.source),
          e.medium && (t.medium = e.medium),
          e.campaign && (t.campaign = e.campaign),
          e.term && (t.term = e.term),
          e.content && (t.content = e.content),
          e.id && (t.id = e.id),
          Object.keys(t).length > 0 ? t : void 0
        );
      }
      function r(e) {
        let t = e.get("utm_source") || e.get("source"),
          a = e.get("utm_medium") || e.get("medium"),
          s = e.get("utm_campaign") || e.get("campaign"),
          r = e.get("utm_term") || e.get("term"),
          n = e.get("utm_content") || e.get("content"),
          l =
            e.get("utm_id") ||
            e.get("utmId") ||
            e.get("tracking_id") ||
            e.get("trackingId") ||
            e.get("aff") ||
            e.get("ref");
        return o({
          source: null != t ? t : void 0,
          medium: null != a ? a : void 0,
          campaign: null != s ? s : void 0,
          term: null != r ? r : void 0,
          content: null != n ? n : void 0,
          id: null != l ? l : void 0,
        });
      }
      function n(e) {
        try {
          let t = { ...e, storedAt: Date.now() };
          window.sessionStorage.setItem(s, JSON.stringify(t));
        } catch (e) {
          console.warn("Failed to persist theme UTM parameters", e);
        }
      }
      function l() {
        try {
          let e = window.sessionStorage.getItem(s);
          if (!e) return;
          let t = JSON.parse(e);
          return o(t);
        } catch (e) {
          console.warn("Failed to read stored theme UTM parameters", e);
          return;
        }
      }
      function i(e) {
        let t = r(e);
        return t ? (n(t), t) : l();
      }
    },
    4605: (e, t, a) => {
      a.d(t, { SmartNav: () => u });
      var s = a(4114),
        o = a(826),
        r = a(740),
        n = a.n(r),
        l = a(3081),
        i = a(5992),
        c = a(6663),
        d = a(9458),
        h = a(6180);
      function u() {
        let [e, t] = (0, o.useState)(!1),
          [a, r] = (0, o.useState)(!1),
          h = (0, l.usePathname)();
        return (
          (0, o.useEffect)(() => {
            let e = () => {
              let e = document.querySelector("nav");
              if (!e) return;
              let a = e.getBoundingClientRect(),
                s = a.top + a.height / 2,
                o = document.querySelectorAll('[data-dark-section="true"]'),
                r = !1;
              o.forEach((e) => {
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
          (0, o.useEffect)(() => {
            r(!1);
          }, [h]),
          (0, o.useEffect)(
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
                    (0, s.jsx)(n(), {
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
                        ? (0, s.jsx)(i.A, { className: "w-6 h-6" })
                        : (0, s.jsx)(c.A, { className: "w-6 h-6" }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "hidden lg:flex items-center gap-6 sm:gap-8",
                      children: [
                        (0, s.jsxs)(n(), {
                          href: "/theme/products",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden sm:block relative ".concat(
                              "/theme/products" === h
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Products",
                            "/theme/products" === h &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(n(), {
                          href: "/theme/support",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden md:block relative ".concat(
                              "/theme/support" === h
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Support",
                            "/theme/support" === h &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(n(), {
                          href: "/theme/login",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden lg:block relative ".concat(
                              "/theme/login" === h
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Account",
                            "/theme/login" === h &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(n(), {
                          href: "/theme/affiliate",
                          className:
                            "text-base font-semibold transition-all duration-300 hidden lg:block relative ".concat(
                              "/theme/affiliate" === h
                                ? e
                                  ? "text-white"
                                  : "text-slate-900"
                                : e
                                ? "text-slate-300 hover:text-white"
                                : "text-slate-600 hover:text-slate-900"
                            ),
                          children: [
                            "Affiliate",
                            "/theme/affiliate" === h &&
                              (0, s.jsx)("span", {
                                className:
                                  "absolute -bottom-2 left-0 right-0 h-0.5 ".concat(
                                    e ? "bg-white" : "bg-slate-900"
                                  ),
                              }),
                          ],
                        }),
                        (0, s.jsxs)(n(), {
                          href: "#purchase",
                          className:
                            "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 ".concat(
                              e
                                ? "bg-white text-slate-900 hover:bg-slate-100"
                                : "bg-slate-900 text-white hover:bg-slate-800"
                            ),
                          children: [
                            "Get Started",
                            (0, s.jsx)(d.A, { className: "w-4 h-4" }),
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
                            (0, s.jsx)(n(), {
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
                              children: (0, s.jsx)(i.A, {
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
                              isActive: "/theme" === h,
                              children: "Home",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/products",
                              isActive: "/theme/products" === h,
                              children: "Products",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/support",
                              isActive: "/theme/support" === h,
                              children: "Support",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/login",
                              isActive: "/theme/login" === h,
                              children: "Account",
                            }),
                            (0, s.jsx)(m, {
                              href: "/theme/affiliate",
                              isActive: "/theme/affiliate" === h,
                              children: "Affiliate",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "p-4 border-t border-slate-200/50 bg-gradient-to-b from-transparent to-slate-50/50",
                          children: (0, s.jsxs)(n(), {
                            href: "#purchase",
                            onClick: () => r(!1),
                            className:
                              "flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold text-lg bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:bg-blue-800 transition-all duration-300 active:scale-[0.98]",
                            children: [
                              "Get Started",
                              (0, s.jsx)(d.A, { className: "w-5 h-5" }),
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
        let { href: t, isActive: a, children: o } = e;
        return (0, s.jsxs)(n(), {
          href: t,
          className:
            "flex items-center justify-between px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-200 active:scale-[0.98] ".concat(
              a
                ? "bg-blue-50 text-slate-900 shadow-sm border border-blue-200"
                : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
            ),
          children: [
            (0, s.jsx)("span", { children: o }),
            (0, s.jsx)(h.A, {
              className: "w-5 h-5 transition-all ".concat(
                a ? "text-blue-700" : "text-slate-400"
              ),
            }),
          ],
        });
      }
    },
    6863: (e, t, a) => {
      a.d(t, { AnalyticsTracker: () => l, s: () => i });
      var s = a(826),
        o = a(3081),
        r = a(4555);
      function n() {
        let e = "theme_session_id",
          t = sessionStorage.getItem(e);
        return (
          t ||
            ((t = ""
              .concat(Date.now(), "-")
              .concat(Math.random().toString(36).substring(2, 15))),
            sessionStorage.setItem(e, t)),
          t
        );
      }
      function l(e) {
        let {
            eventType: t = "page_view",
            orderId: a,
            revenueCents: l,
            currency: i,
            metadata: c,
          } = e,
          d = (0, o.useSearchParams)(),
          h = (0, s.useRef)(!1);
        return (
          (0, s.useEffect)(() => {
            if (h.current) return;
            h.current = !0;
            let e = n();
            if (!e) return;
            let s = (0, r.$g)(d);
            s ? (0, r.rl)(s) : (s = (0, r.Du)());
            let o =
              "undefined" != typeof navigator ? navigator.userAgent : void 0;
            fetch("/api/theme/track", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                eventType: t,
                sessionId: e,
                utmParams: s,
                referrer: document.referrer || void 0,
                pagePath: window.location.pathname,
                orderId: a,
                revenueCents: l,
                currency: i,
                metadata: c,
                userAgent: o,
              }),
            }).catch((e) => {
              console.error("Analytics tracking failed:", e);
            });
          }, [d, t, a, l, i, c]),
          null
        );
      }
      async function i(e, t) {
        let a = n();
        if (!a) return;
        let s = new URLSearchParams(window.location.search),
          o = (0, r.$g)(s);
        o ? (0, r.rl)(o) : (o = (0, r.Du)());
        let l = "undefined" != typeof navigator ? navigator.userAgent : void 0;
        try {
          await fetch("/api/theme/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              eventType: e,
              sessionId: a,
              utmParams: o,
              referrer: document.referrer || void 0,
              pagePath: window.location.pathname,
              userAgent: l,
              ...t,
            }),
          });
        } catch (e) {
          console.error("Analytics tracking failed:", e);
        }
      }
    },
    8239: (e, t, a) => {
      a.d(t, { CheckoutButton: () => n });
      var s = a(4114),
        o = a(3081),
        r = a(6863);
      function n(e) {
        let { priceId: t = "lite", amount: a = 179 } = e,
          n = (0, o.useRouter)();
        return (0, s.jsx)("button", {
          onClick: () => {
            (0, r.s)("checkout_initiated", {
              metadata: { priceId: t, amount: a },
            }),
              n.push("/theme/checkout?plan=".concat(t));
          },
          className:
            "w-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5",
          children: "Purchase Now",
        });
      }
    },
  },
]);
