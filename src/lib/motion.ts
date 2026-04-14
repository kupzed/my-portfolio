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
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
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

/** Fade + subtle Y translate — the standard section reveal */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Tighter stagger for card grids */
export const staggerCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

/** Stagger with exit support — for AnimatePresence containers */
export const staggerWithExit: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
  exit: {},
};

// ─────────────────────────────────────────────
// CARD VARIANTS
// ─────────────────────────────────────────────

/** Card entrance — scale + Y + opacity */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: duration.normal,
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

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOutExpo,
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

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
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
