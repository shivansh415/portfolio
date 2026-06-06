// src/hooks/useScrollAnimation.ts
// Scroll-reveal helper: on viewport entry, fade content upward to its resting
// position (opacity 0 -> 1, y offset -> 0) using GSAP + ScrollTrigger.
// See claude.md Sections 23.2 / 23.5 and Requirements 9.1, 9.3.
"use client";

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

// useLayoutEffect warns during SSR; fall back to useEffect on the server so the
// hook is safe in any rendering context. Effects never run on the server, but
// this keeps React from logging the SSR warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface ScrollAnimationOptions {
  /** Starting vertical offset in pixels (animates back to 0). Default 40. */
  y?: number;
  /** Animation delay in seconds. Default 0. */
  delay?: number;
  /** Animation duration in seconds. Default 1. */
  duration?: number;
}

/**
 * Returns a ref to attach to the element you want to reveal on scroll.
 *
 * On viewport entry the element animates from `{ opacity: 0, y }` to its
 * resting `{ opacity: 1, y: 0 }` state via a ScrollTrigger that fires once
 * around "top 85%".
 *
 * When `prefers-reduced-motion: reduce` is set, the hook is a NO-OP: it
 * registers no ScrollTrigger and leaves the element at its final resting
 * state (opacity 1, y 0) immediately. (Requirement 9.1, 9.3)
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { y = 40, delay = 0, duration = 1 } = options;

  useIsomorphicLayoutEffect(() => {
    // SSR guard: browser-only APIs (matchMedia, ScrollTrigger) must not run on
    // the server.
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // No scroll-driven animation. Render the final resting state immediately.
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    // gsap.context scopes the animation/ScrollTrigger so ctx.revert() cleans
    // everything up (and kills the ScrollTrigger) on unmount — no leak.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, delay, duration]);

  return ref;
}

export default useScrollAnimation;
