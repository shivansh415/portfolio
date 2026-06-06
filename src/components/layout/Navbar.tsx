// src/components/layout/Navbar.tsx
// Desktop-only navigation — scrolls with page content (not fixed).
// Active page is indicated by a gold underline only.
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Static bilingual nav links (English prominent, Hindi subtitle).
const navLinks = [
  { hindi: "अनुभव", english: "EXPERIENCE", href: "/" },
  { hindi: "अभिलेख", english: "WORKS", href: "/work" },
  { hindi: "निर्माता", english: "DEVELOPER", href: "/about" },
  { hindi: "संपर्क", english: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden md:flex absolute top-8 left-0 right-0 z-50 justify-between items-center px-16 w-full max-w-[1440px] mx-auto pointer-events-none"
      style={{ background: "transparent" }}
    >
      {/* Left: Website Logo */}
      <Link href="/" className="pointer-events-auto flex items-center">
        <Image
          src="/site-logo.png"
          alt="शिवांश"
          width={180}
          height={48}
          className="w-[140px] h-auto object-contain"
          priority
        />
      </Link>

      {/* CENTER: Bilingual nav links (English prominent, Hindi subtitle) */}
      <div className="flex items-center gap-12 pointer-events-auto absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href + link.english}
              href={link.href}
              className="flex flex-col items-center group"
              style={{ textDecoration: "none" }}
              aria-current={isActive ? "page" : undefined}
            >
              {/* English text — prominent */}
              <span
                className="group-hover:text-[var(--gold)]"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "var(--ink)",
                  transition: "color 0.3s",
                  lineHeight: 1.2,
                }}
              >
                {link.english}
              </span>
              {/* Hindi text — subtle subtitle */}
              <span
                style={{
                  fontFamily: "var(--font-devanagari)",
                  fontSize: "0.55rem",
                  color: "var(--brown)",
                  opacity: 0.7,
                  transition: "color 0.3s",
                }}
              >
                {link.hindi}
              </span>
              {/* Active indicator — gold underline only */}
              {isActive && (
                <span
                  style={{
                    width: "100%",
                    height: 1.5,
                    background: "var(--gold)",
                    marginTop: 3,
                    display: "block",
                    borderRadius: 1,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
