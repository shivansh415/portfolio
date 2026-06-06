// src/app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { assets } from "@/data/assets";
import ManuscriptContainer from "@/components/shared/ManuscriptContainer";
import { OrnamentalDivider } from "@/components/shared/SectionHeader";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.hindiName} | ${project.englishName} — Shivansh Patidar`,
    description: project.englishDescription,
    openGraph: {
      title: `${project.englishName} by Shivansh Patidar`,
      description: project.englishDescription,
      images: [project.heroImage],
    },
  };
}

const processSteps = [
  { hindi: "अनुसंधान", english: "RESEARCH", desc: "Market analysis & user study" },
  { hindi: "विचार", english: "IDEATION", desc: "Defining creative direction" },
  { hindi: "डिज़ाइन", english: "DESIGN", desc: "UI/UX and visual design" },
  { hindi: "विकास", english: "DEVELOPMENT", desc: "Interactive & performance dev" },
];

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <ManuscriptContainer>
      <article
        className="w-full pb-36 md:pb-48"
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: 'clamp(100px, 16vw, 200px)',
          paddingLeft: 'clamp(20px, 5vw, 120px)',
          paddingRight: 'clamp(20px, 5vw, 120px)',
        }}
      >
        {/* Back Navigation — no WaxSeal, clean */}
        <div style={{ marginBottom: 40 }}>
          <Link href="/work" className="cta-link">
            <span className="section-label">← BACK TO ARCHIVE</span>
          </Link>
        </div>

        {/* ── HERO ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start" style={{ marginBottom: 60 }}>
          {/* Left Column: Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                {project.number}
              </span>
              <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>✦</span>
              <Image
                src={assets.shared.compass}
                alt=""
                width={24}
                height={24}
                style={{ opacity: 0.6 }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <p
                style={{
                  fontFamily: "var(--font-devanagari)",
                  fontSize: "0.8rem",
                  color: "var(--brown)",
                  lineHeight: 1.3,
                }}
              >
                {project.hindiCategory}
              </p>
              <p className="section-label" style={{ fontSize: "0.7rem", color: "var(--gold)" }}>
                {project.englishCategory}
              </p>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                letterSpacing: "0.08em",
                color: "var(--ink)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              {project.englishName}
            </h1>

            <p
              style={{
                fontFamily: "var(--font-devanagari)",
                fontSize: "0.9rem",
                color: "var(--brown)",
                lineHeight: 1.4,
                marginTop: 4,
              }}
            >
              {project.hindiName}
            </p>

            <OrnamentalDivider />

            {/* Constrained width description paragraphs */}
            <div className="flex flex-col gap-5 text-justify" style={{ maxWidth: "650px" }}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  lineHeight: 1.75,
                  color: "var(--ink)",
                  fontSize: "1.05rem",
                }}
              >
                {project.englishDescription}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-devanagari)",
                  fontSize: "0.85rem",
                  lineHeight: 1.85,
                  color: "var(--brown)",
                }}
              >
                {project.hindiDescription}
              </p>
            </div>

            {/* Metadata panel details - year & keywords */}
            <div
              className="flex flex-wrap gap-x-10 gap-y-4 mt-4 pt-5"
              style={{ borderTop: "1px dashed rgba(185,138,69,0.25)", maxWidth: "650px" }}
            >
              <div>
                <span className="section-label" style={{ fontSize: "0.6rem", display: "block", color: "var(--brown)", marginBottom: "4px" }}>
                  PROJECT YEAR
                </span>
                <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.9rem", fontWeight: 700, color: "var(--ink)" }}>
                  {project.year}
                </span>
              </div>
              <div>
                <span className="section-label" style={{ fontSize: "0.6rem", display: "block", color: "var(--brown)", marginBottom: "4px" }}>
                  KEYWORDS
                </span>
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.9rem", fontStyle: "italic", color: "var(--ink)" }}>
                  {project.keywords.join(" • ")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Rectangular Manuscript-Frame Image */}
          <div className="flex items-start justify-center lg:justify-end w-full">
            <div className="manuscript-frame w-full max-w-[640px]">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.englishName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 01: VISION ── */}
        <ProjectSection number="01" hindi="दृष्टि" english="THE VISION">
          <div
            className="max-w-[650px] mx-auto flex flex-col gap-5 text-center my-10 relative py-10 md:py-14 px-6 md:px-12"
            style={{
              borderLeft: "2px solid var(--gold)",
              borderRight: "2px solid var(--gold)",
              background: "rgba(185,138,69,0.03)",
            }}
          >
            {/* Large double quote marks */}
            <span
              className="absolute -top-3 left-6 text-5xl opacity-15 select-none"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--gold)" }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: "var(--font-devanagari)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "var(--ink)",
              }}
            >
              एक ऐसा डिजिटल अनुभव बनाना जो ब्रांड की पहचान को दर्शाए और यूज़र को
              पहले ही क्षण से कनेक्ट कर ले।
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--brown)",
              }}
            >
              &ldquo;To create a digital experience that reflects the brand&apos;s identity
              and connects with users from the very first moment.&rdquo;
            </p>
            <span
              className="absolute -bottom-3 right-6 text-5xl opacity-15 select-none"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--gold)" }}
            >
              &rdquo;
            </span>
          </div>
        </ProjectSection>

        {/* ── SECTION 02: PROCESS ── */}
        <ProjectSection number="02" hindi="निर्माण" english="THE PROCESS">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {processSteps.map((step, i) => (
              <div key={step.english} className="process-archive-card">
                {/* Step number icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1.5px solid var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold)",
                    fontSize: "1.2rem",
                    background: "rgba(185,138,69,0.05)",
                  }}
                >
                  {["🔍", "💡", "✏", "</>"][i]}
                </div>

                <div className="flex flex-col items-center">
                  <h3
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {step.english}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-devanagari)",
                      fontSize: "0.7rem",
                      color: "var(--brown)",
                      marginTop: 4,
                    }}
                  >
                    {step.hindi}
                  </p>
                </div>

                <div className="ornament w-12 text-[8px]" style={{ margin: "4px 0" }}>✦</div>

                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "0.88rem",
                    color: "var(--ink)",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </ProjectSection>

        {/* ── SECTION 03: TECHNOLOGY ── */}
        <ProjectSection number="03" hindi="तकनीक" english="TECHNOLOGY">
          <div className="flex flex-wrap gap-3 justify-center mt-6 max-w-[800px] mx-auto">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 18px",
                  border: "1px solid rgba(185,138,69,0.35)",
                  borderRadius: 24,
                  fontFamily: "var(--font-fell)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  color: "var(--ink)",
                  background: "rgba(185,138,69,0.06)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s ease",
                }}
                className="hover:bg-[rgba(185,138,69,0.15)] hover:border-[var(--gold)]"
              >
                {tech}
              </div>
            ))}
          </div>
        </ProjectSection>

        {/* ── SECTION 04: OUTCOME ── */}
        <ProjectSection number="04" hindi="परिणाम" english="THE OUTCOME">
          <div className="flex flex-col gap-14">
            <div className="max-w-[650px] mx-auto text-center">
              <p
                style={{
                  fontFamily: "var(--font-devanagari)",
                  lineHeight: 1.85,
                  color: "var(--ink)",
                  fontSize: "0.92rem",
                }}
              >
                ब्रांड की ऑनलाइन उपस्थिति को नया आयाम मिला और यूज़र के लिए एक
                प्रीमियम अनुभव तैयार हुआ।
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  color: "var(--brown)",
                  marginTop: 8,
                  fontSize: "1rem",
                }}
              >
                Elevated the brand&apos;s online presence and delivered a premium
                experience for users.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[960px] mx-auto w-full">
              {project.outcomes.engagement && (
                <MetricItem
                  value={project.outcomes.engagement}
                  hindiLabel="यूज़र एंगेजमेंट"
                  englishLabel="USER ENGAGEMENT"
                />
              )}
              {project.outcomes.timeOnSite && (
                <MetricItem
                  value={project.outcomes.timeOnSite}
                  hindiLabel="अधिक समय साइट पर"
                  englishLabel="TIME ON SITE"
                />
              )}
              {project.outcomes.conversion && (
                <MetricItem
                  value={project.outcomes.conversion}
                  hindiLabel="कन्वर्जन सुधार"
                  englishLabel="CONVERSION IMPROVEMENT"
                />
              )}
            </div>
          </div>
        </ProjectSection>

        {/* ── SECTION 05: WATCH PROJECT BREAKDOWN ── */}
        <ProjectSection number="05" hindi="प्रस्तुति" english="WATCH PROJECT BREAKDOWN">
          <div className="max-w-[650px] mx-auto flex flex-col items-center text-center gap-7 pt-6 pb-16">
            {/* Instagram Icon */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "1.5px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(185,138,69,0.05)",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--ink)",
                maxWidth: "480px",
              }}
            >
              Want to explore this project in detail? Watch the full breakdown on Instagram.
            </p>
            <p
              style={{
                fontFamily: "var(--font-devanagari)",
                fontSize: "0.82rem",
                lineHeight: 1.6,
                color: "var(--brown)",
                maxWidth: "480px",
              }}
            >
              इस प्रोजेक्ट को विस्तार से जानने के लिए Instagram पर पूरा ब्रेकडाउन देखें।
            </p>

            <a
              href="https://www.instagram.com/shivansh.js/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ marginTop: "8px", marginBottom: "50px" }}
            >
              WATCH ON INSTAGRAM
            </a>
          </div>
        </ProjectSection>
      </article>
      {/* Spacer to prevent fixed bottom navigation overlap on mobile */}
      <div className="h-28 w-full shrink-0 md:hidden" />
    </ManuscriptContainer>
  );
}

function ProjectSection({
  number,
  hindi,
  english,
  children,
}: {
  number: string;
  hindi: string;
  english: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginTop: 80,
        paddingTop: 48,
        paddingBottom: 0,
        borderTop: "1px solid rgba(185,138,69,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        {/* Section Number circle */}
        <div
          style={{
            width: 44,
            height: 44,
            minWidth: 44,
            borderRadius: "50%",
            border: "1.5px solid var(--gold)",
            color: "var(--gold)",
            fontFamily: "var(--font-cinzel)",
            fontWeight: 700,
            fontSize: "1rem",
            background: "rgba(185,138,69,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {number}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.75rem",
              color: "var(--brown)",
              lineHeight: 1.3,
              display: "block",
            }}
          >
            {hindi}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              color: "var(--ink)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {english}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function MetricItem({
  value,
  hindiLabel,
  englishLabel,
}: {
  value: string;
  hindiLabel: string;
  englishLabel: string;
}) {
  return (
    <div className="metric-archive-card">
      <span
        style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "2.4rem",
          fontWeight: 900,
          color: "var(--ink)",
          lineHeight: 1,
        }}
      >
        {value}
      </span>

      <div className="ornament w-12 text-[8px]" style={{ margin: "4px 0" }}>✦</div>

      <div className="flex flex-col gap-1">
        <p className="section-label" style={{ fontSize: "0.62rem", color: "var(--gold)" }}>
          {englishLabel}
        </p>
        <p
          style={{
            fontFamily: "var(--font-devanagari)",
            fontSize: "0.68rem",
            color: "var(--brown)",
          }}
        >
          {hindiLabel}
        </p>
      </div>
    </div>
  );
}
