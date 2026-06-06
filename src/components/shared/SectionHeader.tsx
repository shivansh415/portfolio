// src/components/shared/SectionHeader.tsx
// Presentational Server Component — no hooks, no "use client".
//
// CRITICAL DESIGN LAW (Property 5 / Requirement 7.1): the Hindi text node MUST
// appear BEFORE the English text node in DOM order, with no exceptions.
// Render order: optional preLabel (.section-label) → ornamental divider →
// Hindi title (.section-hindi) → English title (.section-english) →
// optional subtitle (Hindi before English).
//
// Headings use the serif theme fonts via the manuscript classes from globals.css
// (Yatra One for Hindi via .section-hindi, Cinzel for English via .section-english) —
// never the default sans (Requirement 7.2).

interface Props {
  preLabel?: string; // small text above hindi (e.g. "मेरी कथा")
  hindi: string;
  english: string;
  subtitle?: { hindi: string; english: string };
  centered?: boolean;
}

export default function SectionHeader({
  preLabel,
  hindi,
  english,
  subtitle,
  centered = true,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        centered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {preLabel && (
        <span className="section-label" style={{ color: "var(--gold)" }}>
          {preLabel}
        </span>
      )}
      <OrnamentalDivider />
      {/* Hindi subtitle — small, above English */}
      <h3
        className="section-hindi"
        style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.9rem)" }}
      >
        {hindi}
      </h3>
      {/* English title — prominent heading */}
      <h2
        className="section-english"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {english}
      </h2>
      {subtitle && (
        <>
          {/* Subtitle — English first (prominent), then Hindi */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "var(--brown)",
              marginTop: 16,
            }}
          >
            {subtitle.english}
          </p>
          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.8rem",
              color: "var(--brown)",
              marginBottom: 40,
            }}
          >
            {subtitle.hindi}
          </p>
        </>
      )}
    </div>
  );
}

// ── Ornamental Divider ──
// Renders the ——— ✦ ——— gold divider using the .ornament class (globals.css).
// The leading/trailing gold gradient rules come from .ornament::before/::after.
export function OrnamentalDivider({ symbol = "✦" }: { symbol?: string }) {
  return (
    <div
      className="ornament w-full max-w-xs mx-auto my-2"
      style={{ fontSize: "0.75rem" }}
    >
      {symbol}
    </div>
  );
}
