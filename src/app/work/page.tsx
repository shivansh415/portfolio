// src/app/work/page.tsx
// Premium ancient archive manuscript experience — museum-quality project gallery.
// Uses GSAP ScrollTrigger for staggered card reveal on scroll.
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { assets } from "@/data/assets";
import ManuscriptContainer from "@/components/shared/ManuscriptContainer";
import SectionHeader, {
  OrnamentalDivider,
} from "@/components/shared/SectionHeader";
import { WaxSeal } from "@/components/shared/WaxSeal";

export default function WorkPage() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

    async function initGSAP() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!cardsRef.current) return;

      const rows = cardsRef.current.querySelectorAll(".archive-row");

      ctx = gsap.context(() => {
        rows.forEach((row, i) => {
          const card = row.querySelector(".archive-record-card");
          const node = row.querySelector(".archive-timeline-node");

          if (card) {
            gsap.fromTo(
              card,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
                delay: i * 0.05,
              }
            );
          }

          if (node) {
            gsap.fromTo(
              node,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: row,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
                delay: i * 0.05,
              }
            );
          }
        });
      }, cardsRef);
    }

    initGSAP();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <ManuscriptContainer>
      {/* ═══════════════════════════════════════════════
          HERO — 55-60vh, compact, editorial
      ═══════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center px-6 md:px-16"
        style={{ minHeight: "48vh", paddingTop: "clamp(80px, 14vw, 120px)", paddingBottom: 24 }}
      >


        {/* Sacred geometry — barely visible */}
        <div
          className="geometry-overlay hidden md:block"
          style={{
            width: 280,
            height: 280,
            left: "5%",
            top: "18%",
            opacity: 0.025,
          }}
        />

        {/* Sanskrit overlay — barely visible */}
        <div className="sanskrit-overlay" style={{ opacity: 0.02 }} />

        {/* Header content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <SectionHeader
            hindi="अभिलेख"
            english="THE ARCHIVE"
            subtitle={{
              hindi: "मेरे द्वारा रचित डिजिटल अनुभवों का संग्रह",
              english:
                "A curated collection of immersive digital experiences, crafted with purpose and passion.",
            }}
          />
          <WaxSeal size={44} className="mt-1" />
        </div>

        {/* Vertical label — desktop only */}
        <div
          className="absolute left-3 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center"
          style={{
            writingMode: "vertical-rl",
            transform: "translateY(-50%) rotate(180deg)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-fell)",
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              opacity: 0.3,
            }}
          >
            SELECTED WORKS &amp; ARCHIVE
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ARCHIVE RECORDS — Timeline + Cards (Grid)
      ═══════════════════════════════════════════════ */}
      <section
        ref={cardsRef}
        className="relative px-4 md:px-12 lg:px-16 pb-12 md:pb-16"
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        {/* Timeline gold line — spans full height of records */}
        <div
          className="hidden md:block absolute"
          style={{
            left: 27,
            top: 0,
            bottom: 0,
            width: 2,
            background:
              "linear-gradient(to bottom, transparent, rgba(185,138,69,0.15) 3%, rgba(185,138,69,0.35) 15%, rgba(185,138,69,0.35) 85%, rgba(185,138,69,0.15) 97%, transparent)",
          }}
        />

        {/* Each row = timeline node + card */}
        <div className="flex flex-col gap-5 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="archive-row flex flex-col md:flex-row gap-4 md:gap-8 items-stretch"
            >
              {/* Timeline Node */}
              <div
                className="hidden md:flex items-center justify-center"
                style={{ width: 56, flexShrink: 0 }}
              >
                <div className="archive-timeline-node">
                  {project.number}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1">
                <ArchiveRecordCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER — Cinematic ending
      ═══════════════════════════════════════════════ */}
      <section
        className="relative px-6 md:px-16 py-10 md:py-16"
        style={{ borderTop: "1px solid rgba(185,138,69,0.12)" }}
      >
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <OrnamentalDivider />

          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.85rem",
              color: "var(--brown)",
              lineHeight: 1.6,
            }}
          >
            हर परियोजना एक कथा है।
          </p>

          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
              color: "var(--ink)",
              fontWeight: 700,
              letterSpacing: "0.06em",
              lineHeight: 1.5,
            }}
          >
            EVERY PROJECT IS A STORY,
            <br />
            AND EVERY STORY IS AN EXPERIENCE.
          </p>

          <WaxSeal size={40} />

          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.3rem",
              color: "var(--brown)",
              fontStyle: "italic",
              opacity: 0.6,
            }}
          >
            Shivansh
          </p>
        </div>
      </section>
      {/* Spacer to prevent fixed bottom navigation overlap on mobile */}
      <div className="h-40 w-full shrink-0 md:hidden" />
    </ManuscriptContainer>
  );
}

/* ════════════════════════════════════════════════════════════════
   ARCHIVE RECORD CARD — Premium manuscript document card
════════════════════════════════════════════════════════════════ */

function ArchiveRecordCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <article className="archive-record-card relative overflow-hidden">
      {/* Left notebook binder holes */}
      <div className="absolute left-0 top-0 bottom-0 w-[45px] md:w-[60px] flex flex-col justify-around py-5 pointer-events-none z-20">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full"
            style={{
              backgroundColor: "var(--bg)",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.85), 0 0.5px 0.5px rgba(255,255,255,0.15)",
              border: "1px solid rgba(74, 47, 27, 0.25)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        ))}
      </div>
      
      {/* Vertical red margin line */}
      <div 
        className="absolute left-[45px] md:left-[60px] top-0 bottom-0 w-px pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(210, 125, 125, 0.5) 10%, rgba(210, 125, 125, 0.5) 90%, transparent)",
        }}
      />

      <div
        className="flex flex-col md:flex-row"
        style={{ minHeight: "auto" }}
      >
        {/* ── Left: Content Panel ── */}
        <div
          className="flex-1 p-4 md:p-7 flex flex-col justify-center gap-2 relative z-10"
          style={{ minWidth: 0, paddingLeft: "clamp(55px, 14vw, 95px)" }}
        >
          {/* Project number — subtle, ghost-style */}
          <div className="flex items-center gap-2">
            <span
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "var(--gold)",
                lineHeight: 1,
                opacity: 0.3,
              }}
            >
              {project.number}
            </span>
            <span
              style={{
                color: "var(--gold)",
                fontSize: "0.5rem",
                opacity: 0.4,
              }}
            >
              ✦
            </span>
            {/* Mobile-only label */}
            <span
              className="md:hidden"
              style={{
                fontFamily: "var(--font-fell)",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                color: "var(--brown)",
                opacity: 0.5,
              }}
            >
              RECORD
            </span>
          </div>

          {/* Hindi name — subtle subtitle */}
          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.7rem",
              color: "var(--brown)",
              lineHeight: 1.3,
              opacity: 0.7,
            }}
          >
            {project.hindiName}
          </p>

          {/* English name — prominent heading */}
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--ink)",
              lineHeight: 1.2,
            }}
          >
            {project.englishName}
          </h2>

          {/* Category */}
          <span
            style={{
              fontFamily: "var(--font-fell)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--brown)",
              opacity: 0.6,
            }}
          >
            {project.englishCategory}
          </span>

          {/* Ornamental divider */}
          <div
            className="ornament"
            style={{ maxWidth: 140, margin: "2px 0" }}
          >
            ✦
          </div>

          {/* CTA */}
          <Link
            href={`/work/${project.slug}`}
            className="cta-link"
            style={{ marginTop: 2 }}
          >
            <span
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              OPEN RECORD
            </span>
            <span
              className="arrow"
              style={{ color: "var(--gold)", fontSize: "0.9rem" }}
            >
              →
            </span>
          </Link>
        </div>

        {/* ── Center: Rope Binding + Wax Seal ── */}
        <div className="archive-rope-binding hidden md:flex">
          <WaxSeal size={30} />
        </div>
        {/* ── Right: Burnt Reveal Window ── */}
        <div
          className="relative h-44 md:h-auto flex items-center justify-center p-3 md:p-5"
          style={{ flexShrink: 0 }}
        >
          <div
            className="archive-reveal w-full h-full relative"
            style={{ maxHeight: 220 }}
          >
            <div className="archive-reveal-mask w-full h-full relative">
              <Image
                src={project.thumbImage}
                alt={project.englishName}
                fill
                className="object-cover"
                style={{
                  filter: "sepia(0.15) brightness(0.92) contrast(1.05)",
                }}
                sizes="(max-width: 768px) 100vw, 260px"
              />
            </div>
          </div>

          {/* Mobile wax seal */}
          <div className="absolute bottom-2 right-2 md:hidden">
            <WaxSeal size={26} />
          </div>
        </div>
      </div>
    </article>
  );
}
