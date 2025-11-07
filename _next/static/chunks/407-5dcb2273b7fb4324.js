"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [407],
  {
    407: (e, s, t) => {
      t.d(s, { ThemeFooter: () => o });
      var a = t(4114),
        l = t(740),
        n = t.n(l),
        i = t(826),
        r = t(2722);
      function o() {
        let [e, s] = (0, i.useState)({
            company: !1,
            contact: !1,
            legal: !1,
            payment: !1,
            license: !1,
            disclosures: !1,
          }),
          t = (e) => {
            s((s) => ({ ...s, [e]: !s[e] }));
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("section", {
            className: "py-16 px-4 bg-slate-50 border-t border-slate-200",
            children: (0, a.jsxs)("div", {
              className: "max-w-6xl mx-auto",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid md:grid-cols-3 gap-8 mb-12",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("button", {
                          onClick: () => t("company"),
                          className:
                            "flex items-center justify-between w-full text-left cursor-pointer hover:opacity-70 transition-opacity",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-bold text-slate-900",
                              children: "Company Information",
                            }),
                            (0, a.jsx)(r.A, {
                              className:
                                "w-5 h-5 text-slate-600 transition-transform duration-300 ".concat(
                                  e.company ? "rotate-180" : ""
                                ),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "space-y-2 text-sm text-slate-600 overflow-hidden transition-all duration-300 ".concat(
                              e.company ? "mt-4 max-h-48" : "mt-0 max-h-0"
                            ),
                          children: [
                            (0, a.jsx)("p", {
                              className: "font-semibold text-slate-900",
                              children: "Shand Enterprises LLC",
                            }),
                            (0, a.jsx)("p", { children: "DBA: scaled.info" }),
                            (0, a.jsx)("p", {
                              children:
                                "Business Address: Available upon request",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("button", {
                          onClick: () => t("contact"),
                          className:
                            "flex items-center justify-between w-full text-left cursor-pointer hover:opacity-70 transition-opacity",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-bold text-slate-900",
                              children: "Contact & Support",
                            }),
                            (0, a.jsx)(r.A, {
                              className:
                                "w-5 h-5 text-slate-600 transition-transform duration-300 ".concat(
                                  e.contact ? "rotate-180" : ""
                                ),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "space-y-2 text-sm text-slate-600 overflow-hidden transition-all duration-300 ".concat(
                              e.contact ? "mt-4 max-h-48" : "mt-0 max-h-0"
                            ),
                          children: [
                            (0, a.jsxs)("p", {
                              children: [
                                (0, a.jsx)("span", {
                                  className: "font-semibold text-slate-700",
                                  children: "Email:",
                                }),
                                " ",
                                (0, a.jsx)("a", {
                                  href: "mailto:shopify@scaled.info",
                                  className:
                                    "text-blue-600 hover:text-blue-700 underline",
                                  children: "shopify@scaled.info",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              children: [
                                (0, a.jsx)("span", {
                                  className: "font-semibold text-slate-700",
                                  children: "Hours:",
                                }),
                                " Mon-Sat, 9 AM - 5 PM EST",
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-slate-500 italic",
                              children: "Email support only",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("button", {
                          onClick: () => t("legal"),
                          className:
                            "flex items-center justify-between w-full text-left cursor-pointer hover:opacity-70 transition-opacity",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-bold text-slate-900",
                              children: "Legal & Policies",
                            }),
                            (0, a.jsx)(r.A, {
                              className:
                                "w-5 h-5 text-slate-600 transition-transform duration-300 ".concat(
                                  e.legal ? "rotate-180" : ""
                                ),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "space-y-2 text-sm overflow-hidden transition-all duration-300 ".concat(
                              e.legal ? "mt-4 max-h-64" : "mt-0 max-h-0"
                            ),
                          children: [
                            (0, a.jsx)(n(), {
                              href: "/theme/privacy",
                              className:
                                "block text-blue-600 hover:text-blue-700 hover:underline",
                              children: "Privacy Policy",
                            }),
                            (0, a.jsx)(n(), {
                              href: "/theme/terms",
                              className:
                                "block text-blue-600 hover:text-blue-700 hover:underline",
                              children: "Terms of Service",
                            }),
                            (0, a.jsx)(n(), {
                              href: "/theme/refund",
                              className:
                                "block text-blue-600 hover:text-blue-700 hover:underline",
                              children: "Refund Policy",
                            }),
                            (0, a.jsx)("div", {
                              className: "pt-2 mt-2 border-t border-slate-200",
                              children: (0, a.jsx)("p", {
                                className:
                                  "text-xs text-slate-500 leading-relaxed",
                                children:
                                  "All sales are final. No refunds under any circumstances.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "border-t border-slate-200 pt-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "grid sm:grid-cols-2 gap-6 mb-8",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("button", {
                              onClick: () => t("payment"),
                              className:
                                "flex items-center justify-between w-full text-left mb-2 cursor-pointer hover:opacity-70 transition-opacity",
                              children: [
                                (0, a.jsx)("h4", {
                                  className:
                                    "text-sm font-semibold text-slate-900",
                                  children: "Payment Processing",
                                }),
                                (0, a.jsx)(r.A, {
                                  className:
                                    "w-4 h-4 text-slate-600 transition-transform duration-300 ".concat(
                                      e.payment ? "rotate-180" : ""
                                    ),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "overflow-hidden transition-all duration-300 ".concat(
                                  e.payment ? "max-h-96" : "max-h-0"
                                ),
                              children: (0, a.jsx)("p", {
                                className:
                                  "text-xs text-slate-600 leading-relaxed",
                                children:
                                  "Secure payments processed using industry-standard encryption. We never store your payment card details.",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("button", {
                              onClick: () => t("license"),
                              className:
                                "flex items-center justify-between w-full text-left mb-2 cursor-pointer hover:opacity-70 transition-opacity",
                              children: [
                                (0, a.jsx)("h4", {
                                  className:
                                    "text-sm font-semibold text-slate-900",
                                  children: "License Information",
                                }),
                                (0, a.jsx)(r.A, {
                                  className:
                                    "w-4 h-4 text-slate-600 transition-transform duration-300 ".concat(
                                      e.license ? "rotate-180" : ""
                                    ),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "overflow-hidden transition-all duration-300 ".concat(
                                  e.license ? "max-h-96" : "max-h-0"
                                ),
                              children: (0, a.jsx)("p", {
                                className:
                                  "text-xs text-slate-600 leading-relaxed",
                                children:
                                  "Lite Theme: 1 store license. Pro Theme: 5 store license. Themes may not be resold or redistributed. License limitations strictly enforced. See Terms of Service for complete license restrictions and prohibited uses.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "bg-slate-100 rounded-xl p-6 mb-8",
                      children: [
                        (0, a.jsxs)("button", {
                          onClick: () => t("disclosures"),
                          className:
                            "flex items-center justify-between w-full text-left mb-3 cursor-pointer hover:opacity-70 transition-opacity",
                          children: [
                            (0, a.jsx)("h4", {
                              className: "text-sm font-semibold text-slate-900",
                              children: "Important Disclosures",
                            }),
                            (0, a.jsx)(r.A, {
                              className:
                                "w-4 h-4 text-slate-600 transition-transform duration-300 ".concat(
                                  e.disclosures ? "rotate-180" : ""
                                ),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "space-y-2 text-xs text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ".concat(
                              e.disclosures ? "max-h-[500px]" : "max-h-0"
                            ),
                          children: [
                            (0, a.jsxs)("p", {
                              children: [
                                (0, a.jsx)("strong", {
                                  className: "text-slate-700",
                                  children: "No Guarantees:",
                                }),
                                " We make no guarantees about business success, sales performance, or revenue generation. Results vary based on individual effort and market conditions.",
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              children: [
                                (0, a.jsx)("strong", {
                                  className: "text-slate-700",
                                  children: "Digital Products:",
                                }),
                                " All products are digital and delivered instantly. Once accessed, sales are final and non-refundable.",
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              children: [
                                (0, a.jsx)("strong", {
                                  className: "text-slate-700",
                                  children: "Data Collection:",
                                }),
                                " We collect name, email, and phone number for order fulfillment and support. We use in-house analytics to improve our services. See Privacy Policy for details.",
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              children: [
                                (0, a.jsx)("strong", {
                                  className: "text-slate-700",
                                  children: "International Sales:",
                                }),
                                " Digital delivery available internationally. You are responsible for compliance with local laws and any applicable taxes.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-sm text-slate-600 mb-2",
                          children:
                            "\xa9 2025 Shand Enterprises LLC. All rights reserved.",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xs text-slate-500",
                          children:
                            "scaled.info and associated logos are trademarks of Shand Enterprises LLC. Unauthorized use is prohibited.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
