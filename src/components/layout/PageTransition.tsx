// src/components/layout/PageTransition.tsx
// Client component — wraps route content in a Framer Motion AnimatePresence
// keyed on usePathname() for the "parchment unfold" enter/exit transition.
// See claude.md Section 21.1 and Requirements 4.6, 9.4.
//
// Next 16 App Router note: exit animations on route change are limited because
// the old page unmounts immediately. The enter animation keyed on `pathname`
// works reliably; the exit variant is kept subtle. (Acceptable per spec.)
//
// Accessibility (Requirement 9.4 / 9.1): when prefers-reduced-motion is set we
// render the final resting state with no animation via useReducedMotion().
"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { Variants } from "framer-motion";

// Parchment-unfold variants: the page unfolds upward on enter and folds away on
// exit (opacity + slight y + scale).
const variants: Variants = {
  // Page enter: parchment unfolds upward
  initial: { opacity: 0, y: 24, scale: 0.985 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] },
  },
  // Page exit: parchment folds away
  exit: {
    opacity: 0,
    y: -16,
    scale: 1.01,
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

// Reduced-motion variants: render the final state immediately with no movement.
const reducedVariants: Variants = {
  initial: { opacity: 1, y: 0, scale: 1 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } },
  exit: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={prefersReducedMotion ? reducedVariants : variants}
        style={{ position: "relative", width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
