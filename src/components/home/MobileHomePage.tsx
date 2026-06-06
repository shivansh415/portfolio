// src/components/home/MobileHomePage.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/data/assets";
import { personal } from "@/data/personal";
import { featuredProjects } from "@/data/projects";
import { Home, BookOpen, User, Mail } from "lucide-react";

// Inline SVG Icons representing the "Tools of Creation" drawn in brown line art.
function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <g transform="translate(12, 12)">
        <ellipse rx="9" ry="3.5" />
        <ellipse rx="9" ry="3.5" transform="rotate(60)" />
        <ellipse rx="9" ry="3.5" transform="rotate(120)" />
        <circle cx="0" cy="0" r="1.8" fill="currentColor" />
      </g>
    </svg>
  );
}

function NextjsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9 16V8l7 8V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NodejsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2.5L4.5 6.8v10.4l7.5 4.3 7.5-4.3V6.8L12 2.5z" />
      <path d="M12 21.5V12" />
      <path d="M4.5 17.2L12 12l7.5 5.2" />
      <path d="M12 12V2.5" />
    </svg>
  );
}

function ThreejsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2.5L3 19.5h18L12 2.5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2.5v17" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 19.5l9-7.5 9 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 6.5c-2.4 0-4 1.2-4.8 3.6 1.2-1.6 2.4-2.2 3.6-1.8.7.2 1.2.7 1.7 1.3 1 1 2.1 2.2 4.3 2.2 2.4 0 4-1.2 4.8-3.6-1.2 1.6-2.4 2.2-3.6 1.8-.7-.2-1.2-.7-1.7-1.3-1-1-2.1-2.2-4.3-2.2zm-6 6c-2.4 0-4 1.2-4.8 3.6 1.2-1.6 2.4-2.2 3.6-1.8.7.2 1.2.7 1.7 1.3 1 1 2.1 2.2 4.3 2.2 2.4 0 4-1.2 4.8-3.6-1.2 1.6-2.4 2.2-3.6 1.8-.7-.2-1.2-.7-1.7-1.3-1-1-2.1-2.2-4.3-2.2z" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2a3 3 0 0 0-3 3v3h3V2zm0 6H9v3h3V8zm0 3a3 3 0 0 0 3-3V5a3 3 0 0 0-3 3v3zm0 0h3v3h-3v-3zm0 3a3 3 0 0 0-3 3v3a3 3 0 0 0 3-3v-3z" />
    </svg>
  );
}

function GraphqlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
      <path d="M12 21.8c5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2 2.2 6.6 2.2 12s4.4 9.8 9.8 9.8z" strokeDasharray="1 3" />
      <path d="M12 2.5L3.8 7.2v9.6L12 21.5l8.2-4.7V7.2L12 2.5z" />
      <path d="M12 2.5l8.2 14.3M12 2.5L3.8 16.8M3.8 7.2l16.4 9.6M3.8 7.2L12 21.5M20.2 7.2L12 21.5M3.8 16.8l16.4-9.6" />
      <circle cx="12" cy="2.5" r="1.2" fill="currentColor" />
      <circle cx="20.2" cy="7.2" r="1.2" fill="currentColor" />
      <circle cx="20.2" cy="16.8" r="1.2" fill="currentColor" />
      <circle cx="12" cy="21.5" r="1.2" fill="currentColor" />
      <circle cx="3.8" cy="16.8" r="1.2" fill="currentColor" />
      <circle cx="3.8" cy="7.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

function MongodbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2c0 0-6 4.5-6 10c0 3.5 2.5 6.5 6 7.5V22h1v-2.5c3.5-1 6-4 6-7.5c0-5.5-6-10-6-10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2v17.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const mobileTools = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "Node.js", Icon: NodejsIcon },
  { name: "Three.js", Icon: ThreejsIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Figma", Icon: FigmaIcon },
  { name: "GraphQL", Icon: GraphqlIcon },
  { name: "MongoDB", Icon: MongodbIcon },
];

export default function MobileHomePage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full max-w-[480px] mx-auto pb-8 pt-4 px-5 overflow-hidden relative gap-10">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full pb-4 pt-14 px-0.5 overflow-hidden">
        <div className="flex w-full items-start gap-1">
          {/* Left Side: Logo & Content */}
          <div className="w-[55%] flex flex-col z-10 pl-4">
            <div className="flex flex-col gap-2">
              {/* Top: Shivansh Hindi logo (larger size) */}
              <div className="relative w-[138px] h-[46px]">
                <Image
                  src={assets.home.logo}
                  alt="शिवांश"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              {/* Middle: CREATIVE FRONTEND DEVELOPER label (below logo, above tagline) */}
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  color: "var(--brown)",
                  fontWeight: 700,
                  marginTop: "6px",
                  marginLeft: "1rem",
                }}
              >
                CREATIVE FRONTEND DEVELOPER
              </span>
            </div>

            {/* Taglines block aligned next to temple artwork */}
            <div className="flex flex-col gap-3 mt-8">
              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.15rem",
                  color: "var(--ink)",
                  lineHeight: 1.35,
                  fontWeight: 700,
                  marginLeft: "1rem",
                }}
              >
                I don&apos;t build websites, I craft immersive digital experiences.
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-devanagari)",
                  fontSize: "0.68rem",
                  color: "var(--brown)",
                  lineHeight: 1.5,
                  marginLeft: "1rem",
                }}
              >
                मैं वेबसाइट नहीं बनाता, मैं डिजिटल अनुभव तैयार करता हूँ।
              </p>
            </div>

            {/* Vintage Circular Compass Badge */}
            <div className="w-9 h-9 rounded-full border border-amber-900/30 flex items-center justify-center bg-[#faf6ee]/70 shadow-sm p-1.5 mt-20">
              <Image
                src={assets.shared.compass}
                alt="Compass"
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Temple artwork scaled and positioned naturally */}
          <div className="w-[45%] flex justify-end z-0 mt-2">
            <div className="relative w-full aspect-[4/5] min-h-[290px]">
              <Image
                src={assets.home.heroPalaceMobile}
                alt="Palace illustration"
                fill
                className="object-contain object-right-top"
                style={{ mixBlendMode: "multiply", opacity: 0.95, }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SELECTED WORKS SECTION ── */}
      <section className="w-full py-4 flex flex-col gap-6 border-t border-amber-900/10">
        <div className="text-center flex flex-col items-center gap-0.5">
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--ink)",
            }}
          >
            SELECTED WORKS
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.68rem",
              color: "var(--brown)",
            }}
          >
            A filament of our selected services
          </p>
          {/* <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.58rem",
              color: "var(--brown)",
              opacity: 0.8,
            }}
          >
            सी शुव सुनिक निमरस्तून नी बनान
          </p> */}
        </div>

        {/* Project Cards Stack — centered perfectly with outer bounds */}
        <div className="flex flex-col gap-8 w-full">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-2 w-full"
            >
              {/* Double border wraps ONLY the image thumbnail */}
              <Link
                href={`/work/${project.slug}`}
                className="text-decoration-none w-full"
              >
                <article className="border border-amber-900/30 p-1 rounded-[2px] bg-[#faf6ee]/10 active:scale-[0.99] transition-all w-full aspect-[16/10]">
                  <div className="border border-amber-900/50 p-1.5 h-full w-full relative">
                    <div className="relative w-full h-full overflow-hidden border border-amber-900/20 bg-amber-950/5 rounded-[4px]">
                      <Image
                        src={project.thumbImage}
                        alt={project.englishName}
                        fill
                        className="object-cover"
                        sizes="90vw"
                      />
                    </div>
                  </div>
                </article>
              </Link>

              {/* Title, Category, and arrow sits directly BELOW the framed card */}
              <div className="flex flex-col items-center text-center mt-2.5 px-4 w-full">
                <h3
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                  }}
                >
                  {project.englishName} <span className="text-amber-900 text-xs ml-1">→</span>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-fell)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.08em",
                    color: "var(--brown)",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    marginTop: "2px",
                  }}
                >
                  {project.englishCategory}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rolled paper scroll banner button */}
        <div className="w-full flex justify-center py-4">
          <Link href="/work" className="w-full flex justify-center text-decoration-none">
            <div className="relative h-11 flex items-center justify-center font-cinzel text-[0.68rem] font-bold tracking-[0.18em] text-amber-950 border-t border-b border-amber-900/40 w-[85%] bg-[#faf6ee]/75 text-center shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
              {/* Scroll rolls */}
              <span
                className="absolute -left-1.5 top-0.5 bottom-0.5 w-[8px] border border-amber-900/40 bg-[#f4ebd0] rounded-sm"
                style={{ boxShadow: "inset 1px 0 2px rgba(42,27,18,0.25)" }}
              />
              <span className="absolute -left-2 top-1.5 bottom-1.5 w-[2.5px] bg-amber-900/20 rounded-sm" />

              <span
                className="absolute -right-1.5 top-0.5 bottom-0.5 w-[8px] border border-amber-900/40 bg-[#f4ebd0] rounded-sm"
                style={{ boxShadow: "inset -1px 0 2px rgba(42,27,18,0.25)" }}
              />
              <span className="absolute -right-2 top-1.5 bottom-1.5 w-[2.5px] bg-amber-900/20 rounded-sm" />

              <span className="translate-y-[1.5px]">EXPLORE ALL WORKS</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── 3. DEVELOPER SECTION ── */}
      <section className="w-full py-4 flex flex-col gap-6 border-t border-amber-900/10">
        <div className="text-center">
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--ink)",
            }}
          >
            THE DEVELOPER
          </h2>
        </div>

        {/* Double-border horizontal bio card with square cameo frame */}
        <div className="relative w-full pb-7">
          <div className="border border-amber-900/30 p-1 rounded-[2px] bg-amber-50/5">
            <div className="border border-amber-900/50 p-5 flex gap-5 items-center">
              {/* Square portrait frame (no circle mask!) */}
              <div className="w-[36%] flex-shrink-0">
                <div className="border border-amber-900/40 p-1.5 relative w-full aspect-square bg-[#faf6ee]/50 rounded-[1px] shadow-sm">
                  {/* Inner decorative border line */}
                  <div className="absolute inset-0.5 border border-amber-900/25" />
                  <div className="relative w-full h-full overflow-hidden border border-amber-900/15">
                    <Image
                      src="/assets/about/about-hero.png"
                      alt="Shivansh Patidar"
                      fill
                      className="object-cover object-center"
                      sizes="30vw"
                    />
                  </div>
                </div>
              </div>

              {/* Biography details */}
              <div className="flex-1 min-w-0 flex flex-col gap-2.5 justify-center">
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "0.68rem",
                    color: "var(--ink)",
                    lineHeight: 1.5,
                  }}
                >
                  Dreamer. Creator. Storyteller. I weave tales from code, breathing life into every line. Crafting digital journeys is my purpose. Let&apos;s craft yours.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-devanagari)",
                    fontSize: "0.6rem",
                    color: "var(--brown)",
                    lineHeight: 1.5,
                  }}
                >
                  मैं कोड के माध्यम से कहानियों को जीवंत बनाता हूँ। डिजिटल यात्राओं का निर्माण ही मेरा उद्देश्य है।
                </p>
              </div>
            </div>
          </div>

          {/* Overlapping pill button on bottom border */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 flex justify-center z-10 w-full">
            <Link href="/about" className="flex justify-center text-decoration-none">
              <button
                className="border text-center shadow-md active:scale-95 transition-all whitespace-nowrap"
                style={{
                  backgroundColor: "var(--ink)",
                  color: "var(--paper)",
                  borderColor: "var(--gold)",
                  padding: "9px 24px",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                }}
              >
                KNOW MORE ABOUT ME
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. TOOLS OF CREATION ── */}
      <section className="w-full py-4 flex flex-col gap-6 border-t border-amber-900/10">
        <div className="text-center">
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--ink)",
            }}
          >
            TOOLS OF CREATION
          </h2>
        </div>

        {/* 2-column icon grid with equal box sizes */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {mobileTools.map((tool) => {
            const IconComponent = tool.Icon;
            return (
              <div
                key={tool.name}
                className="border border-amber-900/20 p-4 rounded bg-[#faf6ee]/25 flex flex-col items-center justify-center gap-2.5 text-center h-[96px] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
              >
                <div className="text-amber-950/75 flex items-center justify-center w-7 h-7">
                  <IconComponent />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-fell)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.08em",
                    color: "var(--brown)",
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* View all skills text link */}
        <div className="flex flex-col items-center gap-1 mt-1">
          <Link href="/about" className="text-decoration-none flex flex-col items-center">
            <span
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--ink)",
              }}
            >
              VIEW ALL SKILLS
            </span>
          </Link>
          <span className="text-[0.6rem] text-amber-900/40">✦</span>
        </div>
      </section>

      {/* ── 5. CTA SECTION ── */}
      <section className="w-full py-14 flex flex-col gap-6 border-t border-amber-900/15 text-center">
        <div className="flex flex-col gap-2 w-full">
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--ink)",
              lineHeight: 1.3,
            }}
          >
            LET&apos;S CREATE SOMETHING EXTRAORDINARY
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.72rem",
              color: "var(--brown)",
            }}
          >
            May the ink write our destiny, and the code craft our vision.
          </p>
          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.62rem",
              color: "var(--brown)",
              opacity: 0.9,
            }}
          >
            आइए मिलकर कुछ असाधारण और जीवंत अनुभव रचें।
          </p>
        </div>

        {/* Stitched leather style button spanning appropriate mobile width */}
        <div className="w-full flex justify-center mt-3">
          <Link href="/contact" className="w-[85%] max-w-[290px] flex justify-center text-decoration-none">
            <button
              className="relative overflow-hidden text-center shadow-md active:scale-95 transition-all w-full"
              style={{
                backgroundColor: "var(--ink)",
                color: "var(--paper)",
                border: "2px solid var(--gold)",
                borderRadius: "4px",
                padding: "13px 20px",
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                cursor: "pointer",
              }}
            >
              {/* Dashed internal border to simulate leather stitching */}
              <span
                className="absolute  inset-0.5 border border-dashed rounded-[1px] pointer-events-none"
                style={{
                  borderColor: "rgba(212, 168, 85, 0.4)",
                }}
              />
              LET&apos;S GET STARTED →
            </button>
          </Link>
        </div>
      </section>

      {/* Spacer to prevent fixed bottom navigation overlap */}
      <div className="h-44 w-full shrink-0" />

    </div>
  );
}
