// src/components/shared/ManuscriptContainer.tsx
// Parchment wrapper applied to every page — includes burn overlays on all 4 borders.
// Server Component — no hooks/client APIs, so no "use client".
import { assets } from "@/data/assets";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Use the darker parchment surface (e.g. CTA / darker sections). */
  darkSection?: boolean;
}

export default function ManuscriptContainer({
  children,
  className = "",
  darkSection = false,
}: Props) {
  return (
    <div
      className={`manuscript relative w-full max-w-[1440px] mx-auto ${className}`}
      style={darkSection ? { backgroundColor: "var(--paper-dark)" } : undefined}
    >
      {/* Sacred Geometry Overlay — hero area: top-left, large & visible. */}
      <div
        className="geometry-overlay"
        style={{
          top: "2%",
          left: "2%",
          width: "clamp(200px, 50%, 720px)",
          height: "clamp(200px, 55%, 800px)",
          backgroundImage: `url('${assets.shared.geometry}')`,
          backgroundPosition: "center",
          opacity: 0.14,
        }}
      />

      {/* Sacred Geometry Overlay — developer section center accent (hidden on mobile). */}
      <div
        className="geometry-overlay hidden md:block"
        style={{
          bottom: "15%",
          left: "25%",
          width: "50%",
          height: "40%",
          backgroundImage: `url('${assets.shared.geometry}')`,
          backgroundPosition: "center",
        }}
      />

      {/* Sacred Geometry Overlay — bottom-left small accent (hidden on mobile). */}
      <div
        className="geometry-overlay hidden md:block"
        style={{
          bottom: "5%",
          left: "4%",
          width: "25%",
          height: "30%",
          backgroundImage: `url('${assets.shared.geometry}')`,
          opacity: 0.1,
        }}
      />

      {/* Sanskrit Text Overlay (full-bleed, multiply blend). */}
      <div className="sanskrit-overlay" />

      {/* Burnt Edges — desktop only (hidden below md via the CSS media query). */}
      {/* NOTE: burnt-edge-top and burnt-edge-bottom removed to avoid overlays behind navbar and footer */}
      <div className="burnt-edge-left hidden md:block" />
      <div className="burnt-edge-right hidden md:block" />

      {/* Content — sits above the decorative overlays AND burnt edges. */}
      <div className="relative z-[20]">{children}</div>
    </div>
  );
}
