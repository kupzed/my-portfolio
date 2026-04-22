import type { Variants, Transition } from "framer-motion";

// ─────────────────────────────────────────────
// EASING CURVES
// ─────────────────────────────────────────────

/** Primary — entrances, modals, scale (Vercel/Linear standard) */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Secondary — hover transitions, subtle movements */
export const easeOut: [number, number, number, number] = [0.33, 1, 0.68, 1];

// ─────────────────────────────────────────────
// DURATION TOKENS
// ─────────────────────────────────────────────

export const duration = {
  fast: 0.25,
  normal: 0.55,
  slow: 0.75,
} as const;

// ─────────────────────────────────────────────
// TRANSITION PRESETS
// ─────────────────────────────────────────────

export const transitionNormal: Transition = {
  duration: duration.normal,
  ease: easeOutExpo,
};

export const transitionSlow: Transition = {
  duration: duration.slow,
  ease: easeOutExpo,
};

// ─────────────────────────────────────────────
// SECTION REVEAL VARIANTS
// ─────────────────────────────────────────────

/**
 * Fade + Y translate + blur(4px→0) — cinematic section reveal.
 * Text "focuses in" from below for a premium entrance feel.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitionSlow,
  },
};

/** Opacity-only reveal — for elements that shouldn't move */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionNormal,
  },
};

/** Scale from 0.95 → 1 — subtle, premium entrance */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionSlow,
  },
};

/**
 * Blur + scale entrance — for large hero headings & section titles.
 * Opacity 0→1, blur 8px→0, scale 0.98→1. Cinematic focus effect.
 */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.97 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.9,
      ease: easeOutExpo,
    },
  },
};

/**
 * Spring-based slide-up for CTA buttons and important CTAs.
 * Y 40→0, opacity 0→1 — feels snappy and physical.
 */
export const slideUpFade: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      mass: 1.1,
    },
  },
};

/**
 * Per-word text reveal with clip-path.
 * Parent must have overflow:hidden on each word container.
 * Y 100%→0%, opacity 0→1 — newspaper-style headline reveal.
 */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: duration.slow,
      ease: easeOutExpo,
    },
  },
};

/**
 * Infinite float loop for avatar / decorative elements.
 * Y: 0→-8→0, duration 3s, repeat Infinity.
 */
export const floatLoop: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

// ─────────────────────────────────────────────
// DIRECTIONAL REVEALS
// ─────────────────────────────────────────────

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionSlow,
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionSlow,
  },
};

// ─────────────────────────────────────────────
// STAGGER CONTAINERS
// ─────────────────────────────────────────────

/** Standard section stagger — used as a parent wrapper */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/** Tighter stagger for card grids — sequential but fluid */
export const staggerCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Stagger with exit support — for AnimatePresence containers */
export const staggerWithExit: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
  exit: {},
};

// ─────────────────────────────────────────────
// CARD VARIANTS
// ─────────────────────────────────────────────

/**
 * Card entrance with 3D flip-in effect.
 * rotateX(8deg→0) + Y + opacity — premium perspective reveal.
 * Apply transformPerspective on the parent or card itself.
 */
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    rotateX: 8,
    transformPerspective: 1200,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transformPerspective: 1200,
    transition: {
      duration: duration.slow,
      ease: easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: duration.fast },
  },
};

// ─────────────────────────────────────────────
// MODAL VARIANTS
// ─────────────────────────────────────────────

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.fast },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration.fast },
  },
};

/**
 * Modal content with spring — feels bouncy and natural on open.
 * stiffness 300, damping 28 = snappy but not over-bouncy.
 */
export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 28,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: { duration: duration.fast },
  },
};

// ─────────────────────────────────────────────
// MOBILE MENU VARIANTS
// ─────────────────────────────────────────────

export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: duration.fast },
  },
};

/**
 * Mobile menu item — slides in from left + bottom for tactile feel.
 * x: -20→0, y: 8→0, opacity 0→1.
 */
export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, y: 8, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration.normal,
      ease: easeOutExpo,
    },
  },
};

// ─────────────────────────────────────────────
// ACCORDION
// ─────────────────────────────────────────────

export const accordionTransition: Transition = {
  duration: duration.normal,
  ease: easeOutExpo,
};

// ─────────────────────────────────────────────
// VIEWPORT SETTINGS
// ─────────────────────────────────────────────

/** Standard once-trigger viewport for sections */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** For headings / smaller elements that need more visibility before triggering */
export const viewportOnceMore = { once: true, amount: 0.3 } as const;

/** For large containers where smaller threshold is needed */
export const viewportOnceLess = { once: true, amount: 0.1 } as const;
