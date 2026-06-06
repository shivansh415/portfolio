// src/lib/gsap.ts
// Import GSAP from here everywhere — ensures plugins are registered exactly once.
// See claude.md Section 23.1.
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// SSR guard: registerPlugin must only run in the browser. GSAP's
// registerPlugin is idempotent, but we still gate on `window` so it never
// executes during server-side rendering. This satisfies Requirement 9.2
// (ScrollTrigger registered exactly once).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export { gsap, ScrollTrigger };
export default gsap;
