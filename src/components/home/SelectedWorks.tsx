// src/components/home/SelectedWorks.tsx
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import SectionHeader, {
  OrnamentalDivider,
} from "@/components/shared/SectionHeader";

export default function SelectedWorks() {
  return (
    <section style={{ paddingTop: '64px', paddingBottom: '40px', paddingLeft: 'clamp(20px, 5vw, 140px)', paddingRight: 'clamp(20px, 5vw, 140px)' }}>
      <SectionHeader
        hindi="मेरे अभिलेख"
        english="SELECTED WORKS"
        subtitle={{
          hindi: "मेरे कुछ चुनिंदा प्रोजेक्ट्स की झलक",
          english: "A glimpse of my selected projects",
        }}
      />

      {/* Cards Grid — dark cinematic archive cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 lg:gap-20 mt-12 md:mt-24">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            style={{ textDecoration: "none" }}
          >
            <article className="project-card">
              {/* Image */}
              <div className="relative h-48 md:h-64">
                <Image
                  src={project.thumbImage}
                  alt={project.englishName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Number badge */}
                <span
                  className="card-number absolute top-3 left-3"
                  style={{
                    background: "rgba(26,15,10,0.7)",
                    padding: "2px 8px",
                    borderRadius: "2px",
                    border: "1px solid rgba(185,138,69,0.3)",
                  }}
                >
                  {project.number}
                </span>
                {/* Title overlay on image */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    background: "linear-gradient(to top, rgba(26,15,10,0.95) 0%, rgba(26,15,10,0.6) 60%, transparent 100%)",
                    padding: "36px 20px 16px",
                  }}
                >
                  <p className="card-title-en" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
                    {project.englishName}
                  </p>
                  <p className="card-category" style={{ marginTop: 4 }}>
                    {project.englishCategory}
                  </p>
                </div>
              </div>
              {/* Footer — dark cinematic */}
              <div className="card-footer">
                <OrnamentalDivider symbol="—" />
                <div className="flex items-center justify-between mt-3">
                  <div className="flex flex-col gap-0.5">
                    <span
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        color: "rgba(229,208,160,0.9)",
                        textTransform: "uppercase",
                      }}
                    >
                      VIEW CASE STUDY
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-devanagari)",
                        fontSize: "0.55rem",
                        color: "rgba(229,208,160,0.5)",
                      }}
                    >
                      CASE STUDY देखें
                    </span>
                  </div>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>
                    →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Explore All Button — generous spacing from cards */}
      <div className="flex justify-center" style={{ marginTop: "clamp(24px, 4vw, 40px)" }}>
        <Link href="/work">
          <button className="btn-dark flex flex-col items-center gap-0.5">
            <span
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
              }}
            >
              EXPLORE ALL WORKS →
            </span>
            <span style={{ fontFamily: "var(--font-devanagari)", fontSize: "0.55rem", color: "var(--brown)" }}>
              सभी अभिलेख देखें
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
