// src/data/assets.ts
// Setup ke baad yeh paths /public se serve honge
// Asset paths are VERBATIM from claude.md Section 4 and match the files
// produced by the asset reorganization (task 2.1) under /public/assets.

export interface Assets {
  shared: {
    paperBg: string;
    burntEdgeDesktop: string;
    burntEdgeMobile: string;
    burnDivider: string;
    compass: string;
    geometry: string;
    quill: string;
    seal: string;
    sanskritOverlay: string;
  };
  home: {
    heroPalace: string;
    heroPalaceMobile: string;
    developerJourney: string;
    logo: string;
    ink: string;
    burntEdgeDesktop: string;
    thumbs: {
      onetab: string;
      shell: string;
      luxe: string;
      mahakal: string;
      spaVibe: string;
    };
  };
  about: {
    hero: string;
    timelineIcons: {
      code: string;
      compass: string;
      pen: string;
      star: string;
    };
  };
  contact: {
    letter: string;
    contactArt: string;
  };
  work: {
    archivePalace: string;
    archiveBgScript: string;
  };
  projects: {
    onetabHero: string;
    shellHero: string;
    luxeHero: string;
    mahakalHero: string;
    spaVibeHero: string;
  };
}

export const assets = {
  shared: {
    paperBg:            "/assets/shared/paper-bg.webp",
    burntEdgeDesktop:   "/assets/shared/burnt-edge-desktop.webp",
    burntEdgeMobile:    "/assets/shared/burnt-edge-mobile.webp",
    burnDivider:        "/assets/shared/burn-divider.webp",
    compass:            "/assets/shared/compass.webp",
    geometry:           "/assets/shared/geometry.webp",
    quill:              "/assets/shared/quill.webp",
    seal:               "/assets/shared/seal.webp",
    sanskritOverlay:    "/assets/shared/sanskrit-overlay.webp",
  },
  home: {
    heroPalace:         "/assets/home/hero-palace.webp",
    heroPalaceMobile:   "/assets/home/hero-palace-mobile.webp",
    developerJourney:   "/assets/home/developer-journey.webp",
    logo:               "/assets/home/shivansh-logo.webp",
    ink:                "/assets/home/ink.webp",
    burntEdgeDesktop:   "/assets/home/burnt-edge-desktop.webp",
    thumbs: {
      onetab:   "/assets/home/One-tab-thumb.webp",
      shell:    "/assets/home/Shell-E-learn-thumb.webp",
      luxe:     "/assets/home/Luxe-estate-thumb.webp",
      mahakal:  "/assets/home/mahakal-property-thumb.webp",
      spaVibe:  "/assets/home/spa-vibe-thumb.webp",
    },
  },
  about: {
    hero:               "/assets/about/about-hero.webp",
    timelineIcons: {
      code:     "/assets/about/timeline-icons/code.webp",
      compass:  "/assets/about/timeline-icons/compass.webp",
      pen:      "/assets/about/timeline-icons/pen.webp",
      star:     "/assets/about/timeline-icons/star.webp",
    },
  },
  contact: {
    letter:       "/assets/contact/letter.webp",
    contactArt:   "/assets/contact/contact-art.webp",
  },
  work: {
    archivePalace:      "/assets/work/archive-palace.webp",
    archiveBgScript:    "/assets/work/archive-background-script.webp",
  },
  projects: {
    onetabHero:   "/assets/projects/one-tab-hero.webp",
    shellHero:    "/assets/projects/Shell-E-learning-hero.webp",
    luxeHero:     "/assets/projects/luxe-estate-hero.webp",
    mahakalHero:  "/assets/projects/Mahakal-property-hero.webp",
    spaVibeHero:  "/assets/projects/Spa-vibe-hero.webp",
  },
} as const satisfies Assets;
