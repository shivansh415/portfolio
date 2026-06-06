// src/components/layout/MobileMenu.tsx
// Full-screen parchment overlay menu for mobile (< md). DESIGN DEVIATION:
// replaces claude.md Section 8.2's bottom tab bar. Opened by MobileTopBar's
// hamburger. Lists routes Hindi-first (Requirement 7.1), the social links, and
// a wax seal, animated with Framer Motion and respecting prefers-reduced-motion.
//
// Note on icons: lucide-react ^1.17.0 removed the brand glyphs `Linkedin` and
// `Github`, so we use the closest semantic lucide icons (Briefcase / Code2) for
// those social links; `Mail` and `X` still ship and are used as-is.
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Mail, Briefcase, Code2 } from "lucide-react";
import { personal } from "@/data/personal";

// Hindi-first nav links — same routes as the desktop Navbar (Requirement 7.1).
const navLinks = [
  { hindi: "मुखपृष्ठ", english: "HOME", href: "/" },
  { hindi: "अभिलेख", english: "WORKS", href: "/work" },
  { hindi: "निर्माता", english: "DEVELOPER", href: "/about" },
  { hindi: "आरंभ", english: "CONTACT", href: "/contact" },
];

// Data-driven social row (Requirement 5.2). Brand icons substituted as noted.
// Custom Instagram icon (not available in this lucide-react version).
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socials = [
  { Icon: Briefcase, href: personal.socials.linkedin, label: "LinkedIn", external: true },
  { Icon: Code2, href: personal.socials.github, label: "GitHub", external: true },
  { Icon: InstagramIcon, href: personal.socials.instagram, label: "Instagram", external: true },
  { Icon: Mail, href: `mailto:${personal.email}`, label: "Email", external: false },
];

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // While open: focus the close button, close on Escape, and keep Tab focus
  // trapped within the dialog (basic accessibility — Requirement 2.4).
  useEffect(() => {
    if (!open) return;

    // Move focus into the dialog on open.
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Reduced motion → instant, no transform. Otherwise a soft "unfold" fade.
  const panelMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: -24, scaleY: 0.96 },
        animate: { opacity: 1, y: 0, scaleY: 1 },
        exit: { opacity: 0, y: -16, scaleY: 0.98 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
      };

  const backdropMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
      };

  return (
    <AnimatePresence>
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* Backdrop — clicking it closes the menu (Requirement 2.4). */}
          <motion.div
            {...backdropMotion}
            aria-hidden="true"
            onClick={onClose}
            className="absolute inset-0"
            style={{ background: "rgba(15,11,8,0.6)" }}
          />

          {/* Full-screen parchment dialog. */}
          <motion.div
            {...panelMotion}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="नेविगेशन मेन्यू — Navigation menu"
            className="manuscript absolute inset-0 flex flex-col items-center justify-center px-8"
            style={{ transformOrigin: "top center" }}
          >
            {/* Sanskrit Text Overlay (full-bleed, multiply blend). */}
            <div className="sanskrit-overlay" style={{ opacity: 0.08, mixBlendMode: "multiply", pointerEvents: "none" }} />
            {/* Close (✕) control. */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-5 right-5 flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1px solid rgba(185,138,69,0.4)",
                background: "rgba(42,27,18,0.06)",
                color: "var(--ink)",
              }}
            >
              <X size={22} color="var(--ink)" />
            </button>

            {/* Website logo at the top of the menu. */}
            <Link href="/" aria-label="शिवांश — Home" onClick={onClose} style={{ textDecoration: "none" }} className="flex items-center">
              <Image
                src="/site-logo.png"
                alt="शिवांश"
                width={160}
                height={42}
                className="w-[130px] h-auto object-contain"
              />
            </Link>

            {/* Hindi-first large navigation links (Requirement 7.1). */}
            <nav className="mt-10 flex flex-col items-center gap-7" aria-label="मुख्य नेविगेशन">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href + link.english}
                    href={link.href}
                    onClick={onClose}
                    className="flex flex-col items-center px-6 py-2 relative group"
                    style={{ textDecoration: "none", minHeight: 44 }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* English text — prominent */}
                    <span
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: "2rem",
                        lineHeight: 1.1,
                        color: isActive ? "var(--gold)" : "var(--ink)",
                        letterSpacing: "0.1em",
                        fontWeight: 700,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {link.english}
                    </span>
                    {/* Hindi text — subtle subtitle */}
                    <span
                      style={{
                        fontFamily: "var(--font-devanagari)",
                        fontSize: "0.7rem",
                        color: isActive ? "var(--gold-light)" : "var(--brown)",
                        marginTop: 4,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {link.hindi}
                    </span>
                    {/* Underline decorative bar */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "15%",
                        right: "15%",
                        height: 1.5,
                        backgroundColor: "var(--gold)",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transition: "transform 0.3s ease",
                      }}
                      className="group-hover:scale-x-100"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Ornamental divider (manuscript motif). */}
            <div className="ornament mt-10 w-48">✦</div>

            {/* Social row — data-driven from `personal`. */}
            <div className="mt-8 flex items-center gap-8">
              {socials.map(({ Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  onClick={onClose}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    color: "var(--brown)",
                  }}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
