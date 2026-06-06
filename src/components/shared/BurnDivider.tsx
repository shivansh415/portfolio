// src/components/shared/BurnDivider.tsx
// Horizontal burnt-edge divider drawn between major sections.
// Renders the shared burn-divider image with responsive width and maintains
// the correct aspect ratio (1536x1024) to avoid shrinking/distortion.
// Negative margins are adjusted to pull sections together and remove excess empty vertical gap.

import Image from "next/image";
import { assets } from "@/data/assets";

interface Props {
  className?: string;
}

export default function BurnDivider({ className = "" }: Props) {
  return (
    <div
      className={`w-full flex justify-center overflow-hidden -my-14 md:-my-24 lg:-my-32 ${className}`}
      aria-hidden="true"
    >
      <div className="w-[220px] md:w-[350px] lg:w-[480px] relative h-auto">
        <Image
          src={assets.shared.burnDivider}
          alt=""
          width={1536}
          height={1024}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
