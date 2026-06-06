// src/components/home/CtaSection.tsx
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

export default function CtaSection() {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{
        paddingTop: '64px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 140px)',
        paddingRight: 'clamp(20px, 5vw, 140px)',
      }}
    >
      {/* Ink splatter — bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48"
        style={{ opacity: 0.5 }}
      >
        <Image
          src={assets.home.ink}
          alt=""
          fill
          className="object-contain object-bottom-left"
          sizes="192px"
        />
      </div>

      {/* Left: Quill */}
      <div className="absolute bottom-2 left-6 md:left-14 w-20 md:w-28 h-32 md:h-40 hidden md:block">
        <Image
          src={assets.shared.quill}
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="112px"
        />
      </div>

      {/* Right: Compass + Scroll decoration */}
      <div
        className="absolute bottom-4 right-4 md:right-12 w-24 md:w-36 h-24 md:h-36 hidden md:block"
        style={{ opacity: 0.7 }}
      >
        <Image
          src={assets.shared.compass}
          alt=""
          fill
          className="object-contain"
          sizes="144px"
        />
      </div>


      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Hindi subtitle — small */}
        <p
          style={{
            fontFamily: "var(--font-devanagari)",
            fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
            color: "var(--brown)",
            lineHeight: 1.4,
          }}
        >
          आइये कुछ असाधारण रचें
        </p>
        {/* English heading — prominent */}
        <h2
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
            color: "var(--ink)",
            lineHeight: 1.2,
            letterSpacing: "0.1em",
            fontWeight: 700,
          }}
        >
          LET&apos;S CREATE SOMETHING EXTRAORDINARY
        </h2>

        {/* Subtitle — English first */}
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "var(--brown)",
            marginTop: 4,
          }}
        >
          Every project is a new story, let&apos;s write yours.
        </p>
        <p
          style={{
            fontFamily: "var(--font-devanagari)",
            fontSize: "0.75rem",
            color: "var(--brown)",
            lineHeight: 1.6,
          }}
        >
          हर प्रोजेक्ट एक नई कहानी है, चलिए आपकी कहानी लिखते हैं।
        </p>

        {/* CTA Button — English prominent */}
        <div className="flex items-center gap-4 mt-4">
          <Link
            href="/contact"
            className="btn-dark flex flex-col items-center gap-1"
            style={{ textDecoration: "none" }}
          >
            <span style={{ fontSize: "0.85rem", letterSpacing: "0.15em", fontFamily: "var(--font-cinzel)" }}>
              LET&apos;S GET STARTED
            </span>
            <span style={{ fontFamily: "var(--font-devanagari)", fontSize: "0.6rem", color: "var(--brown)" }}>
              आरंभ करें
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom shadow — matches left/right side shadows */}
      <div className="burnt-edge-bottom-gradient" />
    </section>
  );
}
