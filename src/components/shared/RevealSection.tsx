// src/components/shared/RevealSection.tsx
// Declarative scroll-reveal wrapper. Wrap ANY section in this to fade it in as
// it enters the viewport. Adapted from claude.md Section 21.3 to Framer Motion
// v12 + React 19, using `whileInView` + `viewport={{ once: true }}` instead of
// the `useInView` ref pattern.
//
// Theme rule: prefer the "up" reveal — opacity 0 -> 1 while translating up
// (y offset -> 0). "left"/"right" translate on the x axis instead.
//
// Accessibility (Requirement 9.1, 9.3): when the OS reports
// `prefers-reduced-motion: reduce`, `useReducedMotion()` returns true and we
// render the FINAL resting state immediately (no scroll-driven animation).
"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface Props {
  children: React.ReactNode;
  /** Reveal delay in seconds. Default 0. */
  delay?: number;
  /** Reveal direction. Default "up" (theme preferred). */
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function RevealSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  // Resting (final) state — what both reduced-motion and the "visible" target
  // render to.
  const rest = { opacity: 1, y: 0, x: 0 };

  // Hidden (initial) offset derived from the requested direction.
  const hidden = {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  // Reduced motion: render the final state immediately and register no
  // viewport-driven animation.
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden,
    visible: {
      ...rest,
      transition: { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96], delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
