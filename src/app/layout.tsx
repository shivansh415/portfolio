import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import SocialSidebar from "@/components/layout/SocialSidebar";
import LenisProvider from "@/components/layout/LenisProvider";
import PageTransition from "@/components/layout/PageTransition";
import { Yatra_One, Cinzel, Cormorant_Garamond, Noto_Sans_Devanagari, IM_Fell_English_SC } from "next/font/google";

const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["latin", "devanagari"],
  variable: "--font-hindi",
  display: "swap",
});

const cinzel = Cinzel({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

const imFellEnglishSC = IM_Fell_English_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fell",
  display: "swap",
});

export const metadata: Metadata = {
  title: "शिवांश | Shivansh — Creative Frontend Developer",
  description:
    "मैं वेबसाइट नहीं बनाता, मैं डिजिटल अनुभव रचता हूँ। I don't build websites, I craft immersive digital experiences.",
  openGraph: {
    title: "Shivansh — Creative Frontend Developer",
    description: "An ancient archive of immersive digital creations.",
    siteName: "Shivansh Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${yatraOne.variable} ${cinzel.variable} ${cormorantGaramond.variable} ${notoSansDevanagari.variable} ${imFellEnglishSC.variable}`}
        suppressHydrationWarning
      >
        <LenisProvider>
          {/* Desktop only: fixed top nav */}
          <Navbar />
          {/* Mobile only: bottom tab navigation */}
          <MobileBottomNav />
          {/* Desktop only: right sidebar social icons */}
          <SocialSidebar />
          {/* Page content with transitions */}
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
