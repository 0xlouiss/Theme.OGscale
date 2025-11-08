/**
 * Carousel Module
 * Handles the infinite scrolling carousel for social proof
 */

const Carousel = {
  init() {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((carousel) => {
      this.setupCarousel(carousel);
    });
  },

  setupCarousel(carousel) {
    const group = carousel.querySelector(".carousel-group");
    if (!group) return;

    // Clone items for seamless loop
    const items = group.querySelectorAll("[data-carousel-item]");
    if (items.length > 0) {
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        group.appendChild(clone);
      });
    }
  },

  // Pause carousel on hover
  pause() {
    const groups = document.querySelectorAll(".carousel-group");
    groups.forEach((group) => {
      group.style.animationPlayState = "paused";
    });
  },

  // Resume carousel animation
  resume() {
    const groups = document.querySelectorAll(".carousel-group");
    groups.forEach((group) => {
      group.style.animationPlayState = "running";
    });
  },
};

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => Carousel.init());
} else {
  Carousel.init();
}
