import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "अभिलेख | The Archive — Shivansh Patidar",
  description:
    "A curated collection of immersive digital experiences crafted with purpose and passion by Shivansh Patidar.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
