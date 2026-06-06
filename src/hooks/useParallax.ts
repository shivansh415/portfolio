// src/hooks/useParallax.ts
// Parallax helper: returns a ref whose element is translated on scroll by
// `y = progress * 100 * speed * -1` (default speed 0.4).
// See claude.md Section 23.4 and Requirements 9.1, 9.3.
"use client";

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Returns a ref to attach to the element you want to parallax.
 *
 * Creates a scrubbed ScrollTrigger that, as the element travels through the
 * viewport, sets `y = progress * 100 * speed * -1`. Higher `speed` means a
 * stronger parallax shift.
 *
 * When `prefers-reduced-motion: reduce` is set, the hook is a NO-OP: it
 * registers no ScrollTrigger and leaves the element at its resting position
 * (y 0). (Requirement 9.1, 9.3)
 *
 * @param speed Parallax factor. Default 0.4.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.4
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    // SSR guard: ScrollTrigger / matchMedia are browser-only.
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced motion: no scroll-driven animation, leave the element at y 0.
    if (prefersReducedMotion) return;

    // gsap.context scopes everything to `ref`; ctx.revert() on cleanup kills
    // the ScrollTrigger created below so nothing leaks on unmount.
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(el, {
            y: self.progress * 100 * speed * -1,
          });
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

export default useParallax;
