// src/components/home/DeveloperSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { personal } from "@/data/personal";
import FallbackImage from "@/components/shared/FallbackImage";

const tools = [
  { name: "React", icon: "/assets/skills/react.webp" },
  { name: "Next.js", icon: "/assets/skills/nextjs.webp" },
  { name: "GSAP", icon: "/assets/skills/gsap.webp" },
  { name: "Three.js", icon: "/assets/skills/threejs.webp" },
  { name: "Framer Motion", icon: "/assets/skills/framer-motion.webp" },
  { name: "Tailwind CSS", icon: "/assets/skills/tailwind.webp" },
  { name: "TypeScript", icon: "/assets/skills/typescript.webp" },
  { name: "WebGL", icon: "/assets/skills/webgl.webp" },
];

export default function DeveloperSection() {
  return (
    <section
      className="relative px-0 pt-8 pb-12 md:pb-20"
    >

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 py-8"
        style={{
          paddingLeft: 'clamp(24px, 6vw, 160px)',
          paddingRight: 'clamp(24px, 6vw, 160px)',
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        {/* LEFT: Developer Bio */}
        <div className="flex flex-col gap-5">
          {/* Section title — left aligned matching reference */}
          <div className="flex flex-col items-start gap-1">
            <h3
              className="section-hindi"
              style={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)", color: "var(--brown)" }}
            >
              निर्माता
            </h3>
            <h2
              className="section-english"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
            >
              THE DEVELOPER
            </h2>
          </div>

          {/* Bio text */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "0.9rem",
              color: "var(--ink)",
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {personal.bio.english}
          </p>
          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.75rem",
              color: "var(--brown)",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {personal.bio.hindi}
          </p>

          {/* CTA link */}
          <Link href="/about" className="cta-link mt-4">
            <span className="section-label">—— KNOW MORE ABOUT ME ——</span>
            <span className="arrow">→</span>
          </Link>
        </div>

        {/* CENTER: Explorer/Warrior Artwork with Sacred Geometry Ring */}
        <div className="relative h-48 md:h-auto min-h-[240px] md:min-h-[320px] flex items-center justify-center order-first md:order-none">
          {/* Sacred geometry mandala ring behind the explorer figure */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 0 }}
          >
            <div
              style={{
                width: "85%",
                height: "85%",
                backgroundImage: `url('${assets.shared.geometry}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.2,
              }}
            />
          </div>
          <Image
            src={assets.home.developerJourney}
            alt="Developer Journey"
            fill
            className="object-contain"
            style={{ mixBlendMode: "multiply", opacity: 0.95, zIndex: 1 }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* RIGHT: Tools of Creation */}
        <div className="flex flex-col gap-5">
          {/* Section title — right aligned matching reference */}
          <div className="flex flex-col md:items-end items-start gap-1">
            <h3
              className="section-hindi"
              style={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)", color: "var(--brown)" }}
            >
              मेरे शस्त्र
            </h3>
            <h2
              className="section-english"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
            >
              TOOLS OF CREATION
            </h2>
          </div>

          {/* Tools grid — 4 columns */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-1 group"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(185,138,69,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    background: "rgba(185,138,69,0.05)",
                    overflow: "hidden",
                    padding: 6,
                  }}
                  className="group-hover:bg-[rgba(185,138,69,0.15)] group-hover:border-[var(--gold)]"
                >
                  <FallbackImage
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="object-contain"
                    style={{ mixBlendMode: "multiply" }}
                    fallbackText={tool.name}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-fell)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.08em",
                    color: "var(--brown)",
                    textAlign: "center",
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* View all skills link */}
          <Link href="/about" className="cta-link mt-4 md:justify-end">
            <span className="section-label">—— VIEW ALL SKILLS ——</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
