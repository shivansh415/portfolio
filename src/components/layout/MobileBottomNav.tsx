// src/components/layout/MobileBottomNav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { assets } from "@/data/assets";
import { Home, BookOpen, User, Mail } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[480px] grid grid-cols-5 items-center shadow-[0_-8px_24px_rgba(0,0,0,0.4)] pb-[env(safe-area-inset-bottom)]"
      style={{
        height: "calc(74px + env(safe-area-inset-bottom))",
        background: "linear-gradient(180deg, #1c110b 0%, #080402 100%)",
        borderTop: "2.5px solid var(--gold)",
      }}
    >
      {/* Tab: Home */}
      <Link
        href="/"
        className={`flex flex-col items-center justify-center gap-1 w-full h-[74px] transition-colors ${
          pathname === "/" ? "text-[var(--gold)]" : "text-[#faf6ee]/65"
        }`}
        style={{ textDecoration: "none" }}
      >
        <Home className="w-[19px] h-[19px]" />
        <span
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.52rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Home
        </span>
      </Link>

      {/* Tab: Works */}
      <Link
        href="/work"
        className={`flex flex-col items-center justify-center gap-1 w-full h-[74px] transition-colors ${
          pathname === "/work" || pathname.startsWith("/work/") ? "text-[var(--gold)]" : "text-[#faf6ee]/65"
        }`}
        style={{ textDecoration: "none" }}
      >
        <BookOpen className="w-[19px] h-[19px]" />
        <span
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.52rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Works
        </span>
      </Link>

      {/* Medallion (Center Scroll/Quill Action) overlapping naturally */}
      <div className="relative flex justify-center items-center w-full h-[74px]">
        <Link
          href="/contact"
          className="absolute -top-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all"
          style={{
            background: "radial-gradient(circle, #e5c080 0%, #b98a45 70%, #8a5a1f 100%)",
            border: "4px solid #080402",
            boxShadow: "0 6px 16px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.45)",
          }}
        >
          <div className="relative w-[22px] h-[22px] transform rotate-[25deg]">
            <Image
              src={assets.shared.quill}
              alt="Quill"
              fill
              className="object-contain"
              style={{ filter: "drop-shadow(1px 1.5px 1px rgba(0,0,0,0.7))" }}
              priority
            />
          </div>
        </Link>
      </div>

      {/* Tab: Developer */}
      <Link
        href="/about"
        className={`flex flex-col items-center justify-center gap-1 w-full h-[74px] transition-colors ${
          pathname === "/about" ? "text-[var(--gold)]" : "text-[#faf6ee]/65"
        }`}
        style={{ textDecoration: "none" }}
      >
        <User className="w-[19px] h-[19px]" />
        <span
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.52rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Developer
        </span>
      </Link>

      {/* Tab: Contact */}
      <Link
        href="/contact"
        className={`flex flex-col items-center justify-center gap-1 w-full h-[74px] transition-colors ${
          pathname === "/contact" ? "text-[var(--gold)]" : "text-[#faf6ee]/65"
        }`}
        style={{ textDecoration: "none" }}
      >
        <Mail className="w-[19px] h-[19px]" />
        <span
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.52rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Contact
        </span>
      </Link>
    </nav>
  );
}
