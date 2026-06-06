// src/data/personal.ts
// Immutable personal data — values are VERBATIM from claude.md Section 2.
// Do NOT alter any Hindi/English string, email, phone, or URL.

export interface Personal {
  name: { hindi: string; english: string; full: string };
  role: { hindi: string; english: string };
  email: string;
  phone: string;
  location: { hindi: string; english: string };
  availability: string;
  socials: { linkedin: string; github: string; instagram: string };
  bio: { hindi: string; english: string }; // multi-line (\n)
  tagline: { hindi: string; english: string }; // multi-line (\n)
}

export const personal = {
  name: {
    hindi: "शिवांश",
    english: "Shivansh",
    full: "Shivansh Patidar",
  },
  role: {
    hindi: "क्रिएटिव फ्रंटएंड डेवलपर",
    english: "Creative Frontend Developer",
  },
  email: "shivanahpatidar@gmail.com",
  phone: "+91 6265581678",
  location: {
    hindi: "इंदौर, भारत",
    english: "Indore, India",
  },
  availability: "Mon – Sat, 10AM – 7PM",
  socials: {
    linkedin: "https://www.linkedin.com/in/shivansh-patidar/",
    github: "https://github.com/shivansh415",
    instagram: "https://www.instagram.com/shivansh.js/",
  },
  bio: {
    hindi: "डेवलपर. क्रिएटर. स्टोरीटेलर.\nकोड के माध्यम से विचारों को\nअनुभव में बदलना ही मेरा धर्म है।",
    english:
      "Developer. Creator. Storyteller.\nTransforming ideas into experiences\nthrough code is my passion.",
  },
  tagline: {
    hindi: "मैं वेबसाइट नहीं बनाता,\nमैं डिजिटल अनुभव रचता हूँ।",
    english: "I don't build websites,\nI craft immersive digital experiences.",
  },
} as const satisfies Personal;
