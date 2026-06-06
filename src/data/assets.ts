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
    paperBg:            "/assets/shared/paper-bg.png",
    burntEdgeDesktop:   "/assets/shared/burnt-edge-desktop.png",
    burntEdgeMobile:    "/assets/shared/burnt-edge-mobile.png",
    burnDivider:        "/assets/shared/burn-divider.png",
    compass:            "/assets/shared/compass.png",
    geometry:           "/assets/shared/geometry.png",
    quill:              "/assets/shared/quill.png",
    seal:               "/assets/shared/seal.png",
    sanskritOverlay:    "/assets/shared/sanskrit-overlay.png",
  },
  home: {
    heroPalace:         "/assets/home/hero-palace.png",
    heroPalaceMobile:   "/assets/home/hero-palace-mobile.png",
    developerJourney:   "/assets/home/developer-journey.png",
    logo:               "/assets/home/shivansh-logo.png",
    ink:                "/assets/home/ink.png",
    burntEdgeDesktop:   "/assets/home/burnt-edge-desktop.png",
    thumbs: {
      onetab:   "/assets/home/One-tab-thumb.png",
      shell:    "/assets/home/Shell-E-learn-thumb.png",
      luxe:     "/assets/home/Luxe-estate-thumb.png",
      mahakal:  "/assets/home/mahakal-property-thumb.png",
      spaVibe:  "/assets/home/spa-vibe-thumb.png",
    },
  },
  about: {
    hero:               "/assets/about/about-hero.png",
    timelineIcons: {
      code:     "/assets/about/timeline-icons/code.png",
      compass:  "/assets/about/timeline-icons/compass.png",
      pen:      "/assets/about/timeline-icons/pen.png",
      star:     "/assets/about/timeline-icons/star.png",
    },
  },
  contact: {
    letter:       "/assets/contact/letter.webp",
    contactArt:   "/assets/contact/contact-art.webp",
  },
  work: {
    archivePalace:      "/assets/work/archive-palace.webp",
    archiveBgScript:    "/assets/work/archive-background-script.png",
  },
  projects: {
    onetabHero:   "/assets/projects/one-tab-hero.png",
    shellHero:    "/assets/projects/Shell-E-learning-hero.png",
    luxeHero:     "/assets/projects/luxe-estate-hero.png",
    mahakalHero:  "/assets/projects/Mahakal-property-hero.png",
    spaVibeHero:  "/assets/projects/Spa-vibe-hero.png",
  },
} as const satisfies Assets;
