"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useAmbientAudio } from "@/components/audio/AmbientAudioProvider";

export default function DesktopSoundToggle() {
  const { enabled, toggle } = useAmbientAudio();
  const Icon = enabled ? Volume2 : VolumeX;
  const stateLabel = enabled ? "Sound On" : "Sound Off";

  return (
    <div className="hidden md:block fixed bottom-8 right-8 z-50 group">
      <button
        type="button"
        onClick={toggle}
        aria-label={`Ambient Experience: ${stateLabel}`}
        aria-pressed={enabled}
        className="relative grid h-14 w-14 place-items-center rounded-full text-[#f9e7b7] outline-none transition-all duration-300 hover:scale-105 focus-visible:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--gold-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#150c07]"
        style={{
          background:
            "radial-gradient(circle at 35% 28%, #8b2d23 0%, #5c1a1a 42%, #2a0d0a 100%)",
          border: "2px solid rgba(212, 168, 85, 0.82)",
          boxShadow:
            "0 10px 28px rgba(15, 11, 8, 0.48), inset 0 1px 8px rgba(255, 218, 150, 0.28)",
        }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-1 rounded-full border border-[#d4a855]/35"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          style={{ boxShadow: "0 0 22px rgba(212, 168, 85, 0.42)" }}
        />
        <Icon className="relative z-10 h-5 w-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]" />
      </button>

      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full right-0 mb-3 rounded-sm border border-[var(--gold)]/50 bg-[#2a1b12]/95 px-3 py-1.5 text-xs text-[#f8e7bd] opacity-0 shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{ fontFamily: "var(--font-cinzel)", letterSpacing: "0.08em" }}
      >
        Ambient Experience
        <span className="mt-0.5 block text-center text-[0.64rem] text-[#d4a855]">{stateLabel}</span>
      </div>
    </div>
  );
}
