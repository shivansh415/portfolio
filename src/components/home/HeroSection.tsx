// src/components/home/HeroSection.tsx
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { assets } from "@/data/assets";
import { personal } from "@/data/personal";
import { gsap } from "@/lib/gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-logo", { y: -30, opacity: 0, duration: 1.2 })
        .from(".hero-role", { y: 10, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          ".hero-tagline > *",
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.2 },
          "-=0.4"
        )
        .from(".hero-scroll", { y: 10, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(
          ".hero-palace",
          { x: 40, opacity: 0, duration: 1.4 },
          "-=1.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ minHeight: "85vh" }}
    >
      {/* ── Desktop: 2-Column Grid Layout ── */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "48% 52%", minHeight: "85vh" }}>
        {/* LEFT COLUMN: Logo + Text */}
        <div
          className="relative z-10 flex flex-col justify-center gap-1"
          style={{ padding: "40px 40px 30px 60px" }}
        >
          {/* शिवांश Logo — Large */}
          <div className="hero-logo">
            <Image
              src={assets.home.logo}
              alt="शिवांश"
              width={520}
              height={150}
              className="w-[460px]"
              style={{ filter: "drop-shadow(0 2px 8px rgba(42,27,18,0.3))" }}
              priority
            />
          </div>

          {/* Role Label */}
          <p
            className="hero-role section-label"
            style={{
              letterSpacing: "0.35em",
              color: "var(--brown)",
              fontSize: "0.8rem",
              marginTop: "-2px",
            }}
          >
            {personal.role.english}
          </p>

          {/* Ornamental Divider */}
          <div className="ornament" style={{ maxWidth: 180 }}>
            ⊕
          </div>

          {/* Tagline Hindi + English */}
          <div className="hero-tagline" style={{ marginTop: "2px" }}>
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                color: "var(--ink)",
                lineHeight: 1.4,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              {personal.tagline.english}
            </p>
            <p
              style={{
                fontFamily: "var(--font-devanagari)",
                fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)",
                color: "var(--brown)",
                marginTop: 6,
                lineHeight: 1.6,
              }}
            >
              {personal.tagline.hindi}
            </p>
          </div>

          {/* Scroll Indicator */}
          <div
            className="hero-scroll flex items-center gap-3 mt-4"
            style={{ color: "var(--brown)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-fell)",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                opacity: 0.7,
              }}
            >
              ←── SCROLL TO EXPLORE ──→
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Palace Artwork filling entire right side */}
        <div className="hero-palace relative">
          {/* Golden sun glow behind palace */}
          <div
            className="absolute"
            style={{
              top: "8%",
              left: "15%",
              width: "65%",
              height: "60%",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,168,85,0.5) 0%, rgba(185,138,69,0.3) 30%, rgba(180,120,40,0.12) 55%, transparent 75%)",
              filter: "blur(50px)",
              zIndex: 0,
            }}
          />
          <Image
            src={assets.home.heroPalace}
            alt="Ancient Palace"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.9, mixBlendMode: "multiply" }}
            sizes="52vw"
            priority
          />
        </div>
      </div>

      {/* ── Mobile: Stacked Layout ── */}
      <div className="md:hidden flex flex-col" style={{ minHeight: "100vh" }}>
        {/* Palace at top — mobile hero image with gradient fade */}
        <div className="relative w-full" style={{ height: "50vh", marginTop: 64 }}>
          <Image
            src={assets.home.heroPalaceMobile}
            alt="Ancient Palace"
            fill
            className="object-cover object-top"
            style={{ opacity: 0.75, mixBlendMode: "multiply" }}
            sizes="100vw"
            priority
          />
          {/* Bottom gradient fade into content */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "30%",
              background: "linear-gradient(to top, var(--paper) 0%, rgba(229,208,160,0.8) 40%, transparent 100%)",
              zIndex: 2,
            }}
          />
        </div>

        {/* Content below palace */}
        <div
          className="relative z-10 flex flex-col gap-3"
          style={{ padding: "16px 24px 40px" }}
        >
          <div className="hero-logo">
            <Image
              src={assets.home.logo}
              alt="शिवांश"
              width={360}
              height={100}
              style={{ width: "clamp(180px, 60vw, 280px)", height: "auto" }}
              priority
            />
          </div>

          <p
            className="hero-role section-label"
            style={{
              letterSpacing: "0.25em",
              color: "var(--brown)",
              fontSize: "0.7rem",
            }}
          >
            {personal.role.english}
          </p>

          <div className="ornament" style={{ maxWidth: 140 }}>
            ⊕
          </div>

          <div className="hero-tagline" style={{ marginTop: 4 }}>
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(1.1rem, 5vw, 1.4rem)",
                color: "var(--ink)",
                lineHeight: 1.35,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              {personal.tagline.english}
            </p>
            <p
              style={{
                fontFamily: "var(--font-devanagari)",
                fontSize: "clamp(0.72rem, 2.5vw, 0.85rem)",
                color: "var(--brown)",
                marginTop: 8,
                lineHeight: 1.6,
              }}
            >
              {personal.tagline.hindi}
            </p>
          </div>

          <div
            className="hero-scroll flex items-center gap-3 mt-3"
            style={{ color: "var(--brown)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-fell)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                opacity: 0.6,
              }}
            >
              ←── SCROLL TO EXPLORE ──→
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
