/**
 * Main App Module
 * Handles navigation, smooth scrolling, and page interactions
 */

const App = {
  init() {
    this.setupNavigation();
    this.setupSmoothScroll();
    this.setupButtonActions();
  },

  setupNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href === "#") return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  },

  setupSmoothScroll() {
    document.documentElement.classList.add("scroll-smooth");
  },

  setupButtonActions() {
    const purchaseButtons = document.querySelectorAll(
      'button[data-action="purchase"]'
    );
    purchaseButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Add purchase logic here
        console.log("Purchase button clicked");
      });
    });

    const ctaButtons = document.querySelectorAll('a[href^="https://discord"]');
    ctaButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Track CTA clicks
        console.log("CTA button clicked:", btn.href);
      });
    });
  },
};

// Initialize app when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => App.init());
} else {
  App.init();
}
