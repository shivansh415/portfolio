import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import SocialSidebar from "@/components/layout/SocialSidebar";
import LenisProvider from "@/components/layout/LenisProvider";
import PageTransition from "@/components/layout/PageTransition";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body suppressHydrationWarning>
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
