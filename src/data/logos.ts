export interface LogoEntry {
  id: string;
  slug: string;
  title: string;
  client: string; // Placeholder if unknown
  industry: "Healthcare" | "SaaS" | "E-commerce" | "Event Management" | "Wellness";
  year: string;
  role: string;
  tools: string[];
  summary: string;
  conceptNotes: string;
  typography: string;
  colors: { name: string; hex: string }[];
  oldLogo: string;
  newLogo: string;
  conceptSketch: string;
}

export const logos: LogoEntry[] = [
  {
    id: "careflow-identity",
    slug: "careflow-identity",
    title: "CareFlow Healthcare Logo",
    client: "Add client / brand name here",
    industry: "Healthcare",
    year: "2024",
    role: "Logo & Visual Identity Designer",
    tools: ["Figma"],
    summary:
      "A compassionate, human-centered emblem blending a protective heart silhouette with a continuous care cross.",
    conceptNotes:
      "Add concept notes here (e.g. Crafted with geometric golden-ratio arcs to convey safety, empathy, and medical trust without feeling cold or clinical).",
    typography: "Fraunces Serif Display paired with DM Sans geometric wordmark",
    colors: [
      { name: "Healing Rose", hex: "#D9577B" },
      { name: "Comfort Blush", hex: "#F8D7DF" },
      { name: "Deep Plum", hex: "#2B1B2E" },
    ],
    oldLogo: "/logos/careflow-identity/logo-old.svg",
    newLogo: "/logos/careflow-identity/logo-new.svg",
    conceptSketch: "/logos/careflow-identity/concept.png",
  },
  {
    id: "aura-menstrual-wellness",
    slug: "aura-menstrual-wellness",
    title: "Aura Women's Wellness Logo",
    client: "Add client / brand name here",
    industry: "Wellness",
    year: "2024",
    role: "Logo & Brand Mark Designer",
    tools: ["Figma"],
    summary:
      "An organic, circular crest symbolizing the natural rhythm of bodily cycles and empowered female health.",
    conceptNotes:
      "Add concept notes here (e.g. Soft continuous line art depicting lunar phases intertwined with a blooming lotus petal).",
    typography: "Custom rounded display lettering with gentle organic terminals",
    colors: [
      { name: "Lotus Rose", hex: "#E66F95" },
      { name: "Petal Lilac", hex: "#E6DDF7" },
      { name: "Night Plum", hex: "#1A0E1C" },
    ],
    oldLogo: "/logos/aura-menstrual-wellness/logo-old.svg",
    newLogo: "/logos/aura-menstrual-wellness/logo-new.svg",
    conceptSketch: "/logos/aura-menstrual-wellness/concept.png",
  },
  {
    id: "zenith-saas-platform",
    slug: "zenith-saas-platform",
    title: "Zenith SaaS Suite Logo",
    client: "Add client / brand name here",
    industry: "SaaS",
    year: "2024",
    role: "Logo Designer",
    tools: ["Figma"],
    summary:
      "A minimalist kinetic monogram depicting multi-industry appointment scheduling and calendar precision.",
    conceptNotes:
      "Add concept notes here (e.g. Built from 3 interlocking pill geometry elements forming a forward-pointing 'Z' mark).",
    typography: "DM Sans Bold geometric sans wordmark",
    colors: [
      { name: "Terracotta Ember", hex: "#D86A3E" },
      { name: "Warm Alabaster", hex: "#FAF5EE" },
      { name: "Deep Espresso", hex: "#2D1D14" },
    ],
    oldLogo: "/logos/zenith-saas-platform/logo-old.svg",
    newLogo: "/logos/zenith-saas-platform/logo-new.svg",
    conceptSketch: "/logos/zenith-saas-platform/concept.png",
  },
  {
    id: "celebre-invitations-mark",
    slug: "celebre-invitations-mark",
    title: "Célèbre Event Atelier Mark",
    client: "Add client / brand name here",
    industry: "Event Management",
    year: "2024",
    role: "Logo & Monogram Designer",
    tools: ["Figma", "Canva"],
    summary:
      "An elegant luxury stationery monogram designed for bespoke digital invitations and celebratory cards.",
    conceptNotes:
      "Add concept notes here (e.g. High-contrast editorial monogram with delicate flourishes for print foil stamping and mobile app headers).",
    typography: "Editorial Serif with customized ligatures and flourish accents",
    colors: [
      { name: "Rose Gold Accent", hex: "#D9577B" },
      { name: "Cream Stationery", hex: "#FFF8F5" },
      { name: "Plum Ink", hex: "#2B1B2E" },
    ],
    oldLogo: "/logos/celebre-invitations-mark/logo-old.svg",
    newLogo: "/logos/celebre-invitations-mark/logo-new.svg",
    conceptSketch: "/logos/celebre-invitations-mark/concept.png",
  },
];
