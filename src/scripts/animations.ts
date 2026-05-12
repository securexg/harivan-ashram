import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Easing curves - Premium personality for spiritual/ashram feel
const EASING = {
  smooth: "power2.out",
  entrance: "power3.out",
  exit: "power2.in",
  bounce: "back.out(1.2)",
  elastic: "elastic.out(1, 0.75)",
  gentle: "sine.out",
};

// Default animation settings
const DEFAULTS = {
  duration: 0.8,
  ease: EASING.entrance,
  stagger: 0.1,
};

// ============================================
// ENTRANCE ANIMATIONS (Scroll Triggered)
// ============================================

export function initEntranceAnimations() {
  // Fade up animation for sections
  gsap.utils.toArray<HTMLElement>(".animate-fade-up").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: EASING.entrance,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Stagger children animation
  gsap.utils.toArray<HTMLElement>(".animate-stagger").forEach((container) => {
    const children = container.children;
    gsap.fromTo(
      children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: EASING.entrance,
        stagger: 0.08,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Scale entrance for cards
  gsap.utils.toArray<HTMLElement>(".animate-scale").forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: EASING.entrance,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Left slide entrance
  gsap.utils.toArray<HTMLElement>(".animate-slide-left").forEach((el) => {
    gsap.fromTo(
      el,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: EASING.entrance,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Right slide entrance
  gsap.utils.toArray<HTMLElement>(".animate-slide-right").forEach((el) => {
    gsap.fromTo(
      el,
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: EASING.entrance,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Rotate entrance
  gsap.utils.toArray<HTMLElement>(".animate-rotate").forEach((el) => {
    gsap.fromTo(
      el,
      { rotation: -10, opacity: 0, scale: 0.9 },
      {
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: EASING.entrance,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

// ============================================
// PARALLAX EFFECTS
// ============================================

export function initParallaxEffects() {
  // Slow parallax for background elements
  gsap.utils.toArray<HTMLElement>(".parallax-slow").forEach((el) => {
    gsap.to(el, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // Medium parallax
  gsap.utils.toArray<HTMLElement>(".parallax-medium").forEach((el) => {
    gsap.to(el, {
      yPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });

  // Fast parallax for foreground elements
  gsap.utils.toArray<HTMLElement>(".parallax-fast").forEach((el) => {
    gsap.to(el, {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  });
}

// ============================================
// HOVER EFFECTS
// ============================================

export function initHoverEffects() {
  // Magnetic button effect
  document.querySelectorAll<HTMLElement>(".magnetic-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });

  // Card lift effect
  document.querySelectorAll<HTMLElement>(".card-lift").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -12,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.4,
        ease: EASING.smooth,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: EASING.smooth,
      });
    });
  });

  // Image zoom effect
  document.querySelectorAll<HTMLElement>(".img-zoom").forEach((container) => {
    const img = container.querySelector("img");
    if (!img) return;

    container.addEventListener("mouseenter", () => {
      gsap.to(img, {
        scale: 1.1,
        duration: 0.6,
        ease: EASING.smooth,
      });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: EASING.smooth,
      });
    });
  });

  // Text underline animation
  document.querySelectorAll<HTMLElement>(".hover-underline").forEach((el) => {
    const underline = document.createElement("span");
    underline.className = "underline-anim";
    underline.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: currentColor;
      transition: width 0.3s ease;
    `;
    el.style.position = "relative";
    el.appendChild(underline);

    el.addEventListener("mouseenter", () => {
      underline.style.width = "100%";
    });

    el.addEventListener("mouseleave", () => {
      underline.style.width = "0";
    });
  });

  // Glow effect on hover
  document.querySelectorAll<HTMLElement>(".hover-glow").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        boxShadow: "0 0 30px rgba(246, 207, 133, 0.4)",
        duration: 0.3,
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        boxShadow: "0 0 0 rgba(246, 207, 133, 0)",
        duration: 0.3,
      });
    });
  });
}

// ============================================
// CLICK ANIMATIONS
// ============================================

export function initClickAnimations() {
  // Button press effect
  document.querySelectorAll<HTMLElement>(".btn-press").forEach((btn) => {
    btn.addEventListener("mousedown", () => {
      gsap.to(btn, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseup", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.2,
      });
    });
  });

  // Ripple effect
  document.querySelectorAll<HTMLElement>(".ripple").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        width: 10px;
        height: 10px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        transform: translate(-50%, -50%);
      `;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);

      gsap.to(ripple, {
        scale: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });
    });
  });
}

// ============================================
// CONTINUOUS ANIMATIONS
// ============================================

export function initContinuousAnimations() {
  // Gentle floating animation
  gsap.utils.toArray<HTMLElement>(".float-gentle").forEach((el) => {
    gsap.to(el, {
      y: -15,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  // Pulse animation
  gsap.utils.toArray<HTMLElement>(".pulse-soft").forEach((el) => {
    gsap.to(el, {
      scale: 1.05,
      opacity: 0.8,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  // Slow rotation
  gsap.utils.toArray<HTMLElement>(".rotate-slow").forEach((el) => {
    gsap.to(el, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  // Shimmer effect
  gsap.utils.toArray<HTMLElement>(".shimmer").forEach((el) => {
    const shimmer = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    shimmer
      .fromTo(
        el,
        { backgroundPosition: "-200% 0" },
        { backgroundPosition: "200% 0", duration: 1.5, ease: "power2.inOut" }
      )
      .to(el, { duration: 2 });
  });
}

// ============================================
// TEXT ANIMATIONS
// ============================================

export function initTextAnimations() {
  // Split text reveal
  gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = text
      .split("")
      .map((char) => `<span class="char" style="display: inline-block; opacity: 0; transform: translateY(20px);">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    const chars = el.querySelectorAll(".char");
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Word by word reveal
  gsap.utils.toArray<HTMLElement>(".text-reveal-words").forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = text
      .trim()
      .split(/\s+/)
      .map((word) => `<span class="word" style="display: inline-block; opacity: 0; transform: translateY(30px); margin-right: 0.3em;">${word}</span>`)
      .join("");

    const words = el.querySelectorAll(".word");
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: EASING.entrance,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

// ============================================
// SPECIAL SECTION ANIMATIONS
// ============================================

export function initSpecialAnimations() {
  // Hero parallax on scroll
  const heroSection = document.querySelector("#top");
  const heroContent = document.querySelector("#top .container-x");
  
  if (heroSection && heroContent) {
    gsap.to(heroContent, {
      y: 100,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  // Gallery masonry stagger
  const galleryGrid = document.querySelector("[data-gallery-grid]");
  if (galleryGrid) {
    const items = galleryGrid.querySelectorAll("[data-gallery-item]");
    gsap.fromTo(
      items,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: {
          each: 0.08,
          from: "random",
        },
        ease: EASING.entrance,
        scrollTrigger: {
          trigger: galleryGrid,
          start: "top 80%",
        },
      }
    );
  }

  // Reels carousel animation
  const reelsTrack = document.querySelector("[data-reels-track]");
  if (reelsTrack) {
    gsap.fromTo(
      reelsTrack.children,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: EASING.entrance,
        scrollTrigger: {
          trigger: reelsTrack,
          start: "top 85%",
        },
      }
    );
  }
}

// ============================================
// CURSOR EFFECTS
// ============================================

export function initCursorEffects() {
  // Custom cursor follower (desktop only)
  if (window.matchMedia("(pointer: fine)").matches) {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid var(--color-saffron-400, #d99529);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.15s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
      transform: translate(-50%, -50%);
      mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Expand on interactive elements
    document.querySelectorAll("a, button, .card-lift, .img-zoom").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.width = "50px";
        cursor.style.height = "50px";
        cursor.style.borderColor = "var(--color-saffron-200, #f6cf85)";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderColor = "var(--color-saffron-400, #d99529)";
      });
    });
  }
}

// ============================================
// INITIALIZE ALL
// ============================================

export function initAnimations() {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupAnimations);
  } else {
    setupAnimations();
  }
}

function setupAnimations() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  if (prefersReducedMotion) {
    // Just make elements visible without animation
    document.querySelectorAll("[class*='animate-']").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });
    return;
  }

  // Initialize all animation types
  initEntranceAnimations();
  initParallaxEffects();
  initHoverEffects();
  initClickAnimations();
  initContinuousAnimations();
  initTextAnimations();
  initSpecialAnimations();
  initCursorEffects();

  // Refresh ScrollTrigger after all content loads
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

// Auto-initialize
initAnimations();
