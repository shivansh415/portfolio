// src/components/shared/WaxSeal.tsx
// Circular red/gold wax-seal motif (claude.md Section 9 / Section 6 `.wax-seal`).
// Server component — purely presentational, no hooks or browser APIs.
import Image from "next/image";
import { assets } from "@/data/assets";

interface WaxSealProps {
  /** Diameter of the seal in pixels. Defaults to 52 (matches `.wax-seal`). */
  size?: number;
  className?: string;
}

export function WaxSeal({ size = 52, className = "" }: WaxSealProps) {
  // Inner seal image scales with the seal (52 → 30 in globals.css).
  const inner = Math.round(size * (30 / 52));

  return (
    <span
      className={`wax-seal ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <Image
        src={assets.shared.seal}
        alt=""
        aria-hidden="true"
        width={inner}
        height={inner}
        // Inline size beats the fixed `.wax-seal img { width:30px }` rule
        // so the seal stays proportional at custom sizes.
        style={{ width: inner, height: inner }}
      />
    </span>
  );
}

export default WaxSeal;
