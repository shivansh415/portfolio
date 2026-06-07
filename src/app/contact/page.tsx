// src/app/contact/page.tsx
// Rebuilt Contact page — matches reference layout exactly.
// Structure: Hero → Send a Message form → Other Ways to Connect → Footer Quote
"use client";
import Image from "next/image";
import { assets } from "@/data/assets";
import { personal } from "@/data/personal";
import ManuscriptContainer from "@/components/shared/ManuscriptContainer";
import { OrnamentalDivider } from "@/components/shared/SectionHeader";
import { WaxSeal } from "@/components/shared/WaxSeal";
import { useState } from "react";

const contactMethods = [
  {
    icon: "✉",
    hindi: "ईमेल करें",
    english: "EMAIL ME",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: "☎",
    hindi: "कॉल करें",
    english: "CALL ME",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: "📍",
    hindi: "स्थान",
    english: "LOCATION",
    value: personal.location.english,
    href: "#",
  },
  {
    icon: "🕐",
    hindi: "उपलब्धता",
    english: "AVAILABILITY",
    value: personal.availability,
    href: "#",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <ManuscriptContainer>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO (Centered with decorative elements)
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: "clamp(100px, 14vw, 160px)",
          paddingBottom: 40,
          paddingLeft: "clamp(16px, 4vw, 80px)",
          paddingRight: "clamp(16px, 4vw, 80px)",
          overflow: "hidden",
        }}
      >
        {/* ── Decorative: Quill + Compass (Left side, desktop) ── */}
        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            left: "clamp(16px, 3vw, 40px)",
            top: 100,
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 0,
          }}
        >
          <Image
            src={assets.shared.quill}
            alt=""
            width={55}
            height={130}
            style={{ objectFit: "contain", opacity: 0.7 }}
          />
          <Image
            src={assets.shared.compass}
            alt=""
            width={50}
            height={50}
            style={{ objectFit: "contain", opacity: 0.5 }}
          />
        </div>

        {/* ── Decorative: Contact art (Right side, desktop) ── */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "30%",
            height: "70%",
            zIndex: 0,
          }}
        >
          <Image
            src={assets.contact.contactArt}
            alt=""
            fill
            className="object-contain object-right-bottom"
            style={{ opacity: 0.3, mixBlendMode: "multiply" }}
            sizes="30vw"
          />
        </div>

        {/* ── Hero Content (Centered) ── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 650,
            margin: "0 auto",
            gap: 6,
          }}
        >
          {/* Large Hindi heading */}
          <h1
            style={{
              fontFamily: "var(--font-hindi)",
              fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
              fontWeight: 400,
              margin: 0,
            }}
          >
            संपर्क
          </h1>

          {/* English heading */}
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "var(--ink)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            CONTACT
          </h2>

          <OrnamentalDivider />

          {/* Hindi subtitle */}
          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.9rem",
              color: "var(--brown)",
              lineHeight: 1.6,
              marginTop: 8,
            }}
          >
            आइये, कुछ असाधारण रचें
          </p>

          {/* English subtitle */}
          <h3
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--ink)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            LET&apos;S CREATE SOMETHING
            <br />
            EXTRAORDINARY
          </h3>

          <OrnamentalDivider />

          {/* Hindi description */}
          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.78rem",
              color: "var(--brown)",
              lineHeight: 1.6,
              marginTop: 8,
              maxWidth: 480,
            }}
          >
            आपके विचार, मेरे कौशल और हमारी कल्पना से
            <br />
            कुछ अद्भुत संभव है।
          </p>

          {/* English description */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.85rem",
              color: "var(--brown)",
              lineHeight: 1.6,
              letterSpacing: "0.03em",
              maxWidth: 480,
            }}
          >
            YOUR VISION, MY SKILLS AND OUR IMAGINATION
            <br />
            CAN CREATE SOMETHING EXTRAORDINARY.
          </p>

          {/* Wax seal */}
          <div style={{ marginTop: 12 }}>
            <WaxSeal size={44} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — SEND A MESSAGE (Contact Form)
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 48,
          paddingBottom: 48,
          paddingLeft: "clamp(16px, 4vw, 80px)",
          paddingRight: "clamp(16px, 4vw, 80px)",
          borderTop: "1px solid rgba(185,138,69,0.15)",
        }}
      >
        {/* Section Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginBottom: 32,
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
            संदेश भेजें
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            SEND A MESSAGE
          </h2>
        </div>

        {/* Form */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          {/* Name + Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="input-label-hindi">आपका नाम</label>
              <label className="input-label-en">YOUR NAME</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="parchment-input"
                placeholder="अपना नाम लिखें"
              />
            </div>
            <div>
              <label className="input-label-hindi">आपका ईमेल</label>
              <label className="input-label-en">YOUR EMAIL</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="parchment-input"
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="input-label-hindi">विषय</label>
            <label className="input-label-en">SUBJECT</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="parchment-input"
              placeholder="किस बारे में बात करनी है?"
            />
          </div>

          {/* Message */}
          <div>
            <label className="input-label-hindi">आपका संदेश</label>
            <label className="input-label-en">YOUR MESSAGE</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="parchment-input"
              rows={4}
              placeholder="अपना संदेश यहाँ लिखें..."
            />
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={handleSubmit}
              className="btn-dark"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                paddingLeft: 28,
                paddingRight: 28,
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-devanagari)",
                    fontSize: "0.65rem",
                    color: "var(--gold)",
                  }}
                >
                  संदेश भेजें
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  SEND MESSAGE
                </span>
              </span>
              <span style={{ fontSize: "1.1rem" }}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — OTHER WAYS TO CONNECT
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 48,
          paddingBottom: 48,
          paddingLeft: "clamp(16px, 4vw, 80px)",
          paddingRight: "clamp(16px, 4vw, 80px)",
          borderTop: "1px solid rgba(185,138,69,0.15)",
        }}
      >
        {/* Section Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginBottom: 32,
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
            अन्य माध्यम
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            OTHER WAYS TO CONNECT
          </h2>
          <OrnamentalDivider />
        </div>

        {/* Contact methods grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: "clamp(12px, 3vw, 32px)",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {contactMethods.map((method) => (
            <a
              key={method.english}
              href={method.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                textAlign: "center",
                padding: "16px 8px",
                borderRadius: 12,
                transition: "background 0.3s ease",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(185,138,69,0.5)",
                  fontSize: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(185,138,69,0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                {method.icon}
              </div>

              {/* Hindi label */}
              <p
                style={{
                  fontFamily: "var(--font-devanagari)",
                  fontSize: "0.7rem",
                  color: "var(--brown)",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {method.hindi}
              </p>

              {/* English label */}
              <p
                className="section-label"
                style={{
                  fontSize: "0.6rem",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {method.english}
              </p>

              {/* Value */}
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(0.7rem, 2.2vw, 0.85rem)",
                  color: "var(--brown)",
                  lineHeight: 1.4,
                  margin: 0,
                  wordBreak: "break-word",
                }}
              >
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — FOOTER QUOTE
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 48,
          paddingBottom: 64,
          paddingLeft: "clamp(16px, 4vw, 80px)",
          paddingRight: "clamp(16px, 4vw, 80px)",
          borderTop: "1px solid rgba(185,138,69,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto",
            gap: 8,
          }}
        >
          {/* Opening quote mark */}
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "2.5rem",
              color: "var(--ink)",
              opacity: 0.25,
              lineHeight: 0.8,
            }}
          >
            &ldquo;
          </span>

          {/* Hindi quote */}
          <p
            style={{
              fontFamily: "var(--font-devanagari)",
              fontSize: "0.88rem",
              color: "var(--brown)",
              lineHeight: 1.7,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            हर प्रोजेक्ट एक कहानी है,
            <br />
            और हर कहानी एक अनुभव ।
          </p>

          {/* English quote */}
          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
              color: "var(--ink)",
              lineHeight: 1.6,
              fontWeight: 700,
              letterSpacing: "0.08em",
              margin: 0,
              marginTop: 4,
            }}
          >
            EVERY PROJECT IS A STORY,
            <br />
            AND EVERY STORY IS AN EXPERIENCE.
          </p>

          {/* Signature */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.6rem",
              color: "var(--brown)",
              marginTop: 16,
              fontStyle: "italic",
              opacity: 0.7,
              margin: 0,
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
