// src/components/layout/MobileTopBar.tsx
// Mobile-only (< md) fixed top bar. 
// Shows site logo on the left and hamburger menu button on the right.
// Hides on scroll-down, reveals on scroll-up (matching desktop Navbar behavior).
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MobileTopBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (delta < -5 || currentY < 80) {
          setVisible(true);
        } else if (delta > 5 && currentY > 80) {
          setVisible(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/") return null;

  return (
    <>
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5"
        style={{
          height: 64,
          background: "rgba(229, 208, 160, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(74, 47, 27, 0.15)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "transform",
        }}
      >
        {/* LEFT: Website Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/site-logo.png"
            alt="शिवांश"
            width={120}
            height={34}
            className="w-[95px] h-auto object-contain"
            priority
          />
        </Link>

      </header>
    </>
  );
}
