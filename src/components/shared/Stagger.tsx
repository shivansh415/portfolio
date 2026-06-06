// src/components/shared/Stagger.tsx
// Staggered scroll-reveal helpers. `StaggerContainer` orchestrates its
// `StaggerChild` items so they fade up one after another as the group enters
// the viewport. Adapted from claude.md Section 21.4 to Framer Motion v12 +
// React 19, using `whileInView` + `viewport={{ once: true }}`.
//
// Accessibility (Requirement 9.1, 9.3): when the OS reports
// `prefers-reduced-motion: reduce`, `useReducedMotion()` returns true and both
// the container and children render their FINAL resting state immediately with
// no scroll-driven animation.
"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export function StaggerContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion: skip orchestration, render children at their resting state.
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion: plain wrapper at the final resting state.
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  );
}
