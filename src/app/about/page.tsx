// src/app/about/page.tsx
// Rebuilt About page — matches reference layout exactly.
// Structure: Hero (2-col) → Journey (horizontal timeline) → Skills (icon grid)
import type { Metadata } from "next";
import Image from "next/image";
import { assets } from "@/data/assets";
import ManuscriptContainer from "@/components/shared/ManuscriptContainer";
import { OrnamentalDivider } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "मेरे बारे में | About — Shivansh Patidar",
  description:
    "Code is my medium, ideas are my strength, and creativity is my path. The story of Shivansh Patidar.",
};

/* ── Data ── */

const journey = [
  {
    icon: assets.about.timelineIcons.compass,
    hindi: "जिज्ञासा से शुरुआत",
    english: "STARTED WITH CURIOSITY",
    hindiDesc: "कहानी, कला और तकनीक ने मुझे प्रेरित किया।",
    englishDesc: "Stories, art and technology inspired me.",
  },
  {
    icon: assets.about.timelineIcons.code,
    hindi: "कोड से लगाव",
    english: "FELL IN LOVE WITH CODE",
    hindiDesc: "समस्या हल करने और कुछ नया बनाने में मज़ा आया।",
    englishDesc: "Loved solving problems and building something new.",
  },
  {
    icon: assets.about.timelineIcons.pen,
    hindi: "डिज़ाइन से पहचान",
    english: "FOUND MY IDENTITY IN DESIGN",
    hindiDesc: "डिज़ाइन और डेवेलपमेंट का मिलन मेरा असली जुनून बना।",
    englishDesc:
      "The blend of design and development became my true passion.",
  },
  {
    icon: assets.about.timelineIcons.star,
    hindi: "अनुभव रचना",
    english: "CREATING EXPERIENCES",
    hindiDesc:
      "अब मेरा उद्देश्य है – डिजिटल अनुभवों के जरिये प्रभाव छोड़ना।",
    englishDesc:
      "Now, my purpose is to create impactful digital experiences.",
  },
];

/* ── Skill Icons (Custom Vector SVGs with transparent backgrounds) ── */

function WebDevIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="webDevGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="url(#webDevGrad)" strokeWidth="1.8" />
      <line x1="2" y1="8" x2="22" y2="8" stroke="url(#webDevGrad)" strokeWidth="1.5" />
      <circle cx="5" cy="6" r="1" fill="url(#webDevGrad)" />
      <circle cx="8" cy="6" r="1" fill="url(#webDevGrad)" />
      <circle cx="11" cy="6" r="1" fill="url(#webDevGrad)" />
      <path d="M9 11l-3 2 3 2M15 11l3 2-3 2M13 10l-2 6" stroke="url(#webDevGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="uiUxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="10" height="10" rx="1.5" stroke="url(#uiUxGrad)" strokeWidth="1.8" />
      <circle cx="14" cy="14" r="5" stroke="url(#uiUxGrad)" strokeWidth="1.8" />
      <path d="M4 17c3-3 7-3 10 0" stroke="url(#uiUxGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="4" cy="17" r="1.5" fill="url(#uiUxGrad)" />
      <circle cx="14" cy="17" r="1.5" fill="url(#uiUxGrad)" />
    </svg>
  );
}

function AnimationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="animGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#animGrad)" strokeWidth="1.8" />
      <path d="M10 8.5l5.5 3.5-5.5 3.5v-7z" fill="url(#animGrad)" />
      <path d="M3 12h2M19 12h2M12 3v2M12 19v2" stroke="url(#animGrad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function JavascriptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e" />
      <path
        d="M12.5 15.5c.3.5.7.8 1.3.8.6 0 .9-.3.9-.8v-3.5h1.2v3.5c0 1.2-.8 1.9-2.1 1.9-1.2 0-1.9-.6-2.2-1.4l.9-.5zm4.8.9c-.3.4-.8.7-1.4.7-.7 0-1.2-.4-1.2-1.1h1.2c0 .3.2.4.4.4.2 0 .3-.1.3-.3 0-.5-.9-.5-1.2-1-.2-.3-.3-.7-.3-1 0-.8.6-1.3 1.4-1.3.6 0 1.1.3 1.3.8l-.9.5c-.1-.3-.2-.4-.4-.4-.2 0-.3.1-.3.2 0 .4.9.4 1.1.9.2.3.3.6.3 1 0 .8-.5 1.3-1.2 1.3z"
        fill="#222222"
      />
    </svg>
  );
}

function GsapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="gsapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#88ce02" />
          <stop offset="100%" stopColor="#559900" />
        </linearGradient>
      </defs>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#gsapGrad)" />
    </svg>
  );
}

function ThreejsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="threeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#0088ff" />
        </linearGradient>
      </defs>
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="url(#threeGrad)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 2v20M4 7l8 5 8-5" stroke="url(#threeGrad)" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.5" fill="url(#threeGrad)" />
    </svg>
  );
}

function SaasIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="saasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <path d="M18 10h-1.26A6 6 0 0 0 6 11a5 5 0 0 0 0 10h12a4 4 0 0 0 0-8z" stroke="url(#saasGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="2.5" stroke="url(#saasGrad)" strokeWidth="1.5" />
      <path d="M12 11v1.5M12 17.5v1.5M8.5 15h1.5M14 15h1.5" stroke="url(#saasGrad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const skills = [
  { icon: <WebDevIcon />, hindi: "वेब डेवलपमेंट", english: "WEB DEVELOPMENT" },
  { icon: <UiUxIcon />, hindi: "यूआई / यूएक्स डिज़ाइन", english: "UI/UX DESIGN" },
  { icon: <AnimationIcon />, hindi: "एनिमेशन", english: "ANIMATION" },
  { icon: <JavascriptIcon />, hindi: "जावास्क्रिप्ट", english: "JAVASCRIPT" },
  { icon: <GsapIcon />, hindi: "जीएसएपी", english: "GSAP" },
  { icon: <ThreejsIcon />, hindi: "थ्री.जेएस", english: "THREE.JS" },
  { icon: <SaasIcon />, hindi: "सास प्रोडक्ट", english: "SAAS PRODUCT DEV" },
];

export default function AboutPage() {
  return (
    <ManuscriptContainer>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO (Two-column: Text left, Image right)
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "clamp(80px, 14vw, 160px)",
          paddingBottom: 48,
          paddingLeft: "clamp(20px, 5vw, 80px)",
          paddingRight: "clamp(20px, 5vw, 80px)",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          {/* ── Left: Text Content ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Pre-label */}
            <span
              className="section-label"
              style={{ color: "var(--gold)", marginBottom: 4 }}
            >
              मेरी कथा
            </span>

            {/* Large Hindi heading */}
            <h1
              style={{
                fontFamily: "var(--font-hindi)",
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                fontWeight: 400,
                margin: 0,
              }}
            >
              मेरे बारे में
            </h1>

            {/* English heading */}
            <h2
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "var(--ink)",
                fontWeight: 700,
                letterSpacing: "0.1em",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              ABOUT ME
            </h2>

            <OrnamentalDivider />

            {/* Hindi description */}
            <p
              style={{
                fontFamily: "var(--font-devanagari)",
                fontSize: "0.88rem",
                color: "var(--brown)",
                lineHeight: 1.8,
                marginTop: 8,
                maxWidth: 420,
              }}
            >
              कोड मेरा माध्यम है, विचार मेरी शक्ति है,
              <br />
              और रचनात्मकता मेरा मार्ग है।
            </p>

            {/* English description */}
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.05rem",
                color: "var(--ink)",
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              Code is my medium, ideas are my strength,
              <br />
              and creativity is my path.
            </p>
          </div>

          {/* ── Right: Hero Image ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="manuscript-frame"
              style={{ width: "100%", maxWidth: 520 }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                  maxHeight: "400px",
                }}
              >
                <Image
                  src={assets.about.hero}
                  alt="Shivansh Patidar — Explorer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — MY JOURNEY (Horizontal Timeline)
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 48,
          paddingBottom: 48,
          paddingLeft: "clamp(20px, 5vw, 80px)",
          paddingRight: "clamp(20px, 5vw, 80px)",
          borderTop: "1px solid rgba(185,138,69,0.2)",
        }}
      >
        {/* Section Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              color: "var(--brown)",
              lineHeight: 1.3,
            }}
          >
            मेरी यात्रा
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            MY JOURNEY
          </h2>
        </div>

        {/* Desktop: Horizontal timeline with connecting line */}
        <div
          className="hidden md:block"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          {/* Timeline connector line */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 28,
                left: "8%",
                right: "8%",
                height: 1,
                background:
                  "linear-gradient(to right, transparent, var(--gold), transparent)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 24,
                position: "relative",
                zIndex: 1,
              }}
            >
              {journey.map((step) => (
                <div
                  key={step.english}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    textAlign: "center",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      border: "2px solid var(--gold)",
                      background: "var(--paper)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Image
                      src={step.icon}
                      alt={step.english}
                      width={26}
                      height={26}
                      style={{ opacity: 0.85 }}
                    />
                  </div>

                  {/* Hindi title */}
                  <p
                    style={{
                      fontFamily: "var(--font-devanagari)",
                      fontSize: "0.75rem",
                      color: "var(--brown)",
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {step.hindi}
                  </p>

                  {/* English title */}
                  <p
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "var(--ink)",
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {step.english}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "0.82rem",
                      fontStyle: "italic",
                      color: "var(--brown)",
                      lineHeight: 1.55,
                      margin: 0,
                      maxWidth: 200,
                    }}
                  >
                    {step.englishDesc}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-devanagari)",
                      fontSize: "0.68rem",
                      color: "var(--brown)",
                      lineHeight: 1.5,
                      margin: 0,
                      maxWidth: 200,
                    }}
                  >
                    {step.hindiDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical list */}
        <div
          className="md:hidden"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 400,
            margin: "0 auto",
            borderLeft: "2px solid rgba(185,138,69,0.25)",
            paddingLeft: 20,
          }}
        >
          {journey.map((step) => (
            <div
              key={step.english}
              style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  borderRadius: "50%",
                  border: "2px solid var(--gold)",
                  background: "rgba(185,138,69,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={step.icon}
                  alt={step.english}
                  width={22}
                  height={22}
                />
              </div>

              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <p
                  style={{
                    fontFamily: "var(--font-devanagari)",
                    fontSize: "0.72rem",
                    color: "var(--brown)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {step.hindi}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--ink)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {step.english}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — MY SKILLS (Icon Grid)
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 48,
          paddingBottom: 60,
          paddingLeft: "clamp(20px, 5vw, 80px)",
          paddingRight: "clamp(20px, 5vw, 80px)",
          borderTop: "1px solid rgba(185,138,69,0.2)",
        }}
      >
        {/* Section Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              color: "var(--brown)",
              lineHeight: 1.3,
            }}
          >
            मेरे कौशल
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            MY SKILLS
          </h2>
        </div>

        {/* Skills grid — 7 columns desktop, 3 columns mobile */}
        <div
          className="grid grid-cols-3 md:grid-cols-7"
          style={{
            gap: "clamp(16px, 3vw, 28px)",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.english}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                textAlign: "center",
              }}
            >
              {/* Icon circle with image */}
              <div
                style={{
                  width: "clamp(48px, 12vw, 64px)",
                  height: "clamp(48px, 12vw, 64px)",
                  borderRadius: "50%",
                  border: "2px solid rgba(185,138,69,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(185,138,69,0.06)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  padding: "clamp(6px, 2vw, 10px)",
                }}
              >
                {skill.icon}
              </div>

              {/* Hindi label */}
              <p
                style={{
                  fontFamily: "var(--font-devanagari)",
                  fontSize: "0.62rem",
                  color: "var(--brown)",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {skill.hindi}
              </p>

              {/* English label */}
              <p
                className="section-label"
                style={{
                  fontSize: "0.55rem",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {skill.english}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer to prevent fixed bottom navigation overlap on mobile */}
      <div className="h-28 w-full shrink-0 md:hidden" />
    </ManuscriptContainer>
  );
}
