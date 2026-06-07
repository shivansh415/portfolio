// src/components/layout/LenisProvider.tsx
// Client component — initializes Lenis smooth scroll and DRIVES IT FROM THE
// GSAP TICKER (a single requestAnimationFrame loop shared with GSAP), keeping
// Lenis and ScrollTrigger in sync.
//
// SSR safety: Lenis touches `window`/`document`, so all browser work happens
// inside useEffect (client only) behind a `typeof window` guard. ScrollTrigger
// is registered once in `@/lib/gsap`. On unmount we remove the ticker callback
// and destroy Lenis so nothing leaks across route changes.
//
// Accessibility: when `prefers-reduced-motion: reduce` is set we skip Lenis
// entirely and fall back to native scrolling.
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

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
      lerp: 0.08, // Premium smooth damping feel
      smoothWheel: true,
      syncTouch: false, // Keep mobile touch native for responsiveness and native kinetic feel
    });

    lenisRef.current = lenis;

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
      lenisRef.current = null;
    };
  }, []);

  // Listen to pathname changes to reset scroll position and refresh triggers
  useEffect(() => {
    if (lenisRef.current) {
      // Reset scroll position to top instantly via Lenis
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      // Fallback for native/reduced motion scrolling
      window.scrollTo(0, 0);
    }

    // Refresh ScrollTrigger calculations after route transition completes
    // and elements settle down to prevent offset jank.
    ScrollTrigger.refresh();

    const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 300);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 700); // Wait for AnimatePresence unfold (0.65s) to finish

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return <>{children}</>;
}
