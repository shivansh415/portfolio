// src/app/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import SelectedWorks from "@/components/home/SelectedWorks";
import DeveloperSection from "@/components/home/DeveloperSection";
import CtaSection from "@/components/home/CtaSection";
import ManuscriptContainer from "@/components/shared/ManuscriptContainer";

export const metadata: Metadata = {
  title: "शिवांश | Shivansh Patidar — Creative Frontend Developer",
  description:
    "मैं वेबसाइट नहीं बनाता, मैं डिजिटल अनुभव रचता हूँ। Creative frontend developer specializing in React, Next.js, GSAP and immersive digital experiences.",
  keywords: [
    "Shivansh Patidar",
    "Frontend Developer",
    "React Developer",
    "GSAP",
    "Next.js",
    "Indore",
    "Portfolio",
  ],
  openGraph: {
    title: "Shivansh Patidar — Creative Frontend Developer",
    description: "An ancient archive of immersive digital creations.",
    images: ["/assets/home/hero-palace.png"],
  },
};

import MobileHomePage from "@/components/home/MobileHomePage";

export default function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <ManuscriptContainer>
          <HeroSection />
          <SelectedWorks />
          <DeveloperSection />
          <CtaSection />
        </ManuscriptContainer>
      </div>

      <div className="block md:hidden">
        <ManuscriptContainer>
          <MobileHomePage />
        </ManuscriptContainer>
      </div>
    </>
  );
}
