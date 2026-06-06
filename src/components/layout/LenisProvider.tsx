// src/components/layout/LenisProvider.tsx
// Client component — initializes Lenis smooth scroll and DRIVES IT FROM THE
// GSAP TICKER (a single requestAnimationFrame loop shared with GSAP), keeping
// Lenis and ScrollTrigger in sync. See claude.md Section 15 + 23.1 and
// Requirement 9.2.
//
// Why drive from the GSAP ticker (not Lenis's own raf loop): running smooth
// scroll and ScrollTrigger off a single RAF avoids competing animation frames
// and keeps scroll-driven animations perfectly in step with the scroll value.
//
// SSR safety: Lenis touches `window`/`document`, so all browser work happens
// inside useEffect (client only) behind a `typeof window` guard. ScrollTrigger
// is registered once in `@/lib/gsap`. On unmount we remove the ticker callback
// and destroy Lenis so nothing leaks across route changes.
//
// Accessibility: when `prefers-reduced-motion: reduce` is set we skip Lenis
// entirely and fall back to native scrolling.
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
// Lenis's recommended stylesheet (sets html/body sizing + scroll behaviour).
// Exposed via the package's "./dist/*" export and verified present at
// node_modules/lenis/dist/lenis.css.
import "lenis/dist/lenis.css";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // SSR guard: never construct Lenis or touch matchMedia on the server.
    if (typeof window === "undefined") return;

    // Respect the user's motion preference: skip smooth scroll entirely and
    // let the browser handle native scrolling.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    // Keep ScrollTrigger's calculations in sync with every Lenis scroll frame.
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from the GSAP ticker (single shared RAF loop). GSAP passes
    // time in seconds; Lenis expects milliseconds.
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    // Disable lag smoothing so Lenis receives a continuous, accurate clock.
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
