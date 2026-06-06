// src/components/shared/BurntHole.tsx
// Masks an image with the irregular burnt-circle SVG mask plus a charred-edge
// glow, optionally overlaying a small wax seal (claude.md Section 22).
// Server component — purely presentational, no hooks or browser APIs.
import Image from "next/image";
import { WaxSeal } from "./WaxSeal";

interface BurntHoleProps {
  src: string;
  alt: string;
  className?: string;
  /** Overlay a small wax seal on the hole (bottom-right). */
  withSeal?: boolean;
}

// The `.burnt-hole-mask` class in globals.css applies the clip-path ellipse
// to create the burnt irregular circle look. No additional inline styles needed.

export function BurntHole({ src, alt, className = "", withSeal = false }: BurntHoleProps) {
  return (
    <div className={`burnt-hole ${className}`.trim()}>
      <div className="burnt-hole-mask relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ filter: "sepia(0.3) brightness(0.85)" }}
        />
      </div>

      {withSeal && (
        <div className="absolute bottom-2 right-2 z-[3]">
          <WaxSeal size={44} />
        </div>
      )}
    </div>
  );
}

export default BurntHole;
