export interface Project {
  id: string;
  number: string;
  slug: string;
  hindiName: string;
  englishName: string;
  hindiCategory: string;
  englishCategory: string;
  hindiDescription: string;
  englishDescription: string;
  technologies: string[];
  year: string;
  keywords: string[];
  outcomes: {
    engagement?: string;
    timeOnSite?: string;
    conversion?: string;
  };
  heroImage: string; // path from /public/assets/projects/
  thumbImage: string; // path from /public/assets/home/
}

export const projects: Project[] = [
  {
    id: "onetab-spa",
    number: "01",
    slug: "onetab-spa",
    hindiName: "वनटैब स्पा",
    englishName: "ONETAB SPA",
    hindiCategory: "स्पा मैनेजमेंट प्लेटफ़ॉर्म",
    englishCategory: "SPA MANAGEMENT PLATFORM",
    hindiDescription:
      "एक ऑल-इन-वन स्पा मैनेजमेंट प्लेटफ़ॉर्म जो बुकिंग, स्टाफ, ग्राहकों और दैनिक संचालन को एक ही डैशबोर्ड से प्रबंधित करने की सुविधा देता है।",
    englishDescription:
      "An all-in-one spa management platform designed to streamline appointments, staff management, customer records and daily operations from a single dashboard.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB", "Framer Motion", "GSAP"],
    year: "2024",
    keywords: ["wellness", "management", "dashboard", "booking"],
    outcomes: {
      engagement: "+62%",
      timeOnSite: "+48%",
      conversion: "+35%",
    },
    heroImage: "/assets/projects/one-tab-hero.webp",
    thumbImage: "/assets/home/One-tab-thumb.webp",
  },
  {
    id: "shell-elearning",
    number: "02",
    slug: "shell-elearning",
    hindiName: "शेल ई-लर्निंग",
    englishName: "SHELL E-LEARNING",
    hindiCategory: "ई-लर्निंग प्लेटफ़ॉर्म",
    englishCategory: "E-LEARNING PLATFORM",
    hindiDescription:
      "आईएसओ प्रमाणित शिक्षा संस्थान के लिए निर्मित एक आधुनिक ई-लर्निंग प्लेटफ़ॉर्म जो छात्रों को कोर्स, प्रमाणपत्र और डिजिटल शिक्षण अनुभव प्रदान करता है।",
    englishDescription:
      "A modern e-learning platform built for an ISO-certified academy, offering courses, certifications and an engaging digital learning experience.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "GSAP", "Node.js", "MongoDB"],
    year: "2024",
    keywords: ["education", "learning", "courses", "certification"],
    outcomes: {
      engagement: "+55%",
      timeOnSite: "+40%",
      conversion: "+28%",
    },
    heroImage: "/assets/projects/Shell-E-learning-hero.webp",
    thumbImage: "/assets/home/Shell-E-learn-thumb.webp",
  },
  {
    id: "luxe-estate",
    number: "03",
    slug: "luxe-estate",
    hindiName: "लक्से एस्टेट",
    englishName: "LUXE ESTATE",
    hindiCategory: "लक्ज़री रियल एस्टेट",
    englishCategory: "LUXURY REAL ESTATE",
    hindiDescription:
      "अत्याधुनिक लक्ज़री रियल एस्टेट अनुभव जो प्रीमियम संपत्तियों को सिनेमैटिक विजुअल्स और इमर्सिव स्टोरीटेलिंग के माध्यम से प्रस्तुत करता है।",
    englishDescription:
      "A luxury real estate experience showcasing premium properties through cinematic visuals, immersive storytelling and modern web interactions.",
    technologies: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "Three.js", "React Three Fiber"],
    year: "2024",
    keywords: ["luxury", "real estate", "cinematic", "premium"],
    outcomes: {
      engagement: "+70%",
      timeOnSite: "+55%",
      conversion: "+42%",
    },
    heroImage: "/assets/projects/luxe-estate-hero.webp",
    thumbImage: "/assets/home/Luxe-estate-thumb.webp",
  },
  {
    id: "mahakal-property",
    number: "04",
    slug: "mahakal-property",
    hindiName: "महाकाल प्रॉपर्टी",
    englishName: "MAHAKAL PROPERTY",
    hindiCategory: "प्रॉपर्टी प्लेटफ़ॉर्म",
    englishCategory: "PROPERTY PLATFORM",
    hindiDescription:
      "रियल एस्टेट और प्रॉपर्टी निवेश के लिए निर्मित एक प्रीमियम डिजिटल प्लेटफ़ॉर्म, जो भरोसेमंद जानकारी और आकर्षक उपयोगकर्ता अनुभव प्रदान करता है।",
    englishDescription:
      "A premium property platform designed to showcase real estate opportunities through intuitive navigation and a trustworthy digital experience.",
    technologies: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "TypeScript"],
    year: "2024",
    keywords: ["property", "real estate", "investment", "trust"],
    outcomes: {
      engagement: "+45%",
      timeOnSite: "+38%",
      conversion: "+30%",
    },
    heroImage: "/assets/projects/Mahakal-property-hero.webp",
    thumbImage: "/assets/home/mahakal-property-thumb.webp",
  },
  {
    id: "spa-vibe",
    number: "05",
    slug: "spa-vibe",
    hindiName: "स्पा वाइब",
    englishName: "SPA VIBE",
    hindiCategory: "वेलनेस वेबसाइट",
    englishCategory: "WELLNESS WEBSITE",
    hindiDescription:
      "लक्ज़री वेलनेस और स्पा सेवाओं के लिए निर्मित एक प्रीमियम वेबसाइट जो शांति, आराम और विशिष्ट अनुभव को डिजिटल रूप में प्रस्तुत करती है।",
    englishDescription:
      "A premium wellness website crafted to capture the essence of relaxation, luxury and personalized spa experiences.",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Three.js"],
    year: "2024",
    keywords: ["wellness", "spa", "luxury", "relaxation"],
    outcomes: {
      engagement: "+58%",
      timeOnSite: "+44%",
      conversion: "+33%",
    },
    heroImage: "/assets/projects/Spa-vibe-hero.webp",
    thumbImage: "/assets/home/spa-vibe-thumb.webp",
  },
];

/**
 * Resolve a single project by its slug.
 *
 * Pure lookup: no mutation of `projects`; same input → same output.
 * Round-trips with every project's slug:
 *   getProjectBySlug(p.slug) === p for every p in projects.
 *
 * @returns the unique Project whose `.slug === slug`, or `undefined` if none match.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Home page mein sirf 3 dikhao
export const featuredProjects = projects.slice(0, 3);
