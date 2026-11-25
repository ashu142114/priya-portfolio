export interface BrandKitEntry {
  id: string;
  slug: string;
  title: string;
  client: string; // Placeholder if unknown
  industry: "Healthcare" | "SaaS" | "E-commerce" | "Event Management";
  year: string;
  role: string;
  tools: string[];
  summary: string;
  logo: string;
  palette: { name: string; hex: string; role: string }[];
  typography: {
    heading: string;
    body: string;
    notes: string;
  };
  usageRules: string[];
  mockups: {
    type: "stationery" | "social" | "app" | "print";
    title: string;
    file: string;
  }[];
}

export const brandKits: BrandKitEntry[] = [
  {
    id: "careflow-brand-identity",
    slug: "careflow-brand-identity",
    title: "CareFlow Brand Identity Kit",
    client: "Add brand name here",
    industry: "Healthcare",
    year: "2024",
    role: "Brand Identity Designer",
    tools: ["Figma"],
    summary:
      "A complete digital and print brand identity system designed for a patient-first telemedicine and clinical lab provider.",
    logo: "/brand/careflow-brand-identity/logo.svg",
    palette: [
      { name: "Warm Cream Base", hex: "#FFF8F5", role: "Primary background and paper texture" },
      { name: "Blush Pink", hex: "#F8D7DF", role: "Card backgrounds, badges and soft dividers" },
      { name: "Rose Accent", hex: "#D9577B", role: "Key brand actions and interactive states" },
      { name: "Soft Lilac", hex: "#E6DDF7", role: "Secondary highlights and category tags" },
      { name: "Deep Plum", hex: "#2B1B2E", role: "High-contrast headings and readable body text" },
    ],
    typography: {
      heading: "Fraunces Serif Display",
      body: "DM Sans Geometric Clean",
      notes: "Warm, empathetic display titles paired with accessible, high-legibility sans for medical charts.",
    },
    usageRules: [
      "Always maintain a clear zone equal to 1.5x the emblem height around the primary logo mark.",
      "Never place the rose wordmark on harsh red or neon backgrounds; use warm cream or blush.",
      "Card corner radii must remain strictly rounded at 24px - 32px for an approachable feel.",
      "Minimum logo print size: 24mm width; minimum digital screen display: 32px height.",
    ],
    mockups: [
      {
        type: "stationery",
        title: "Medical Prescription Pad & Doctor Letterhead",
        file: "/brand/careflow-brand-identity/mockup-1.png",
      },
      {
        type: "print",
        title: "Embossed Clinic Business Cards",
        file: "/brand/careflow-brand-identity/mockup-2.png",
      },
    ],
  },
  {
    id: "aura-women-brand-kit",
    slug: "aura-women-brand-kit",
    title: "Aura Women's Health Brand Kit",
    client: "Add brand name here",
    industry: "Healthcare",
    year: "2024",
    role: "Brand & Visual Designer",
    tools: ["Figma"],
    summary:
      "A compassionate, dignified visual identity system supporting reproductive health awareness and PCOD/PCOS lifestyle guidance.",
    logo: "/brand/aura-women-brand-kit/logo.svg",
    palette: [
      { name: "Petal Alabaster", hex: "#FEF7F9", role: "App background and reading surface" },
      { name: "Blush Harmony", hex: "#F8CBD8", role: "Cycle ring indicators and chip states" },
      { name: "Empowerment Rose", hex: "#D9577B", role: "Log buttons and milestone celebrations" },
      { name: "Soothing Lavender", hex: "#E6DDF7", role: "Educational PCOD cards and advice tabs" },
      { name: "Plum Neutral", hex: "#2B1B2E", role: "Body text and medical consultation notes" },
    ],
    typography: {
      heading: "Fraunces Serif 700",
      body: "DM Sans Regular & Medium",
      notes: "Combines editorial grace with clear, non-stigmatizing medical readability.",
    },
    usageRules: [
      "Avoid sharp rectangular containers; all UI and collateral cards feature generous rounded radii.",
      "Use petal-soft pastel backgrounds for all symptom tracking screens to lower user anxiety.",
      "Maintain WCAG AA contrast ratio of at least 4.5:1 across all patient advice text.",
    ],
    mockups: [
      {
        type: "social",
        title: "PCOD Lifestyle Education Instagram Carousel",
        file: "/brand/aura-women-brand-kit/mockup-1.png",
      },
      {
        type: "app",
        title: "App Icon & Mobile Splash Branding",
        file: "/brand/aura-women-brand-kit/mockup-2.png",
      },
    ],
  },
  {
    id: "zenith-saas-brand-kit",
    slug: "zenith-saas-brand-kit",
    title: "Zenith SaaS Suite Brand Kit",
    client: "Add brand name here",
    industry: "SaaS",
    year: "2024",
    role: "Brand Identity Designer",
    tools: ["Figma"],
    summary:
      "A clean, dynamic B2B and consumer identity kit for multi-industry appointment booking and team scheduling.",
    logo: "/brand/zenith-saas-brand-kit/logo.svg",
    palette: [
      { name: "Sand Surface", hex: "#FAF5EE", role: "Workspace dashboard canvas" },
      { name: "Terracotta Accent", hex: "#D86A3E", role: "Instant booking CTA and active slots" },
      { name: "Peach Tint", hex: "#FADEC9", role: "Timeblock highlight pills" },
      { name: "Espresso Text", hex: "#2D1D14", role: "Dashboard data tables and calendar headers" },
    ],
    typography: {
      heading: "DM Sans 700 Bold",
      body: "DM Sans 400 Regular & 500 Medium",
      notes: "High-clarity geometric typeface ensuring numbers and calendar slots are instantly readable.",
    },
    usageRules: [
      "Use high-contrast terracotta buttons for primary conversion actions only.",
      "Do not skew or rotate the monogram logo mark under any circumstance.",
      "Keep dashboard data containers on crisp white cards with soft neutral borders.",
    ],
    mockups: [
      {
        type: "app",
        title: "Responsive Web Dashboard Header & Sidebar",
        file: "/brand/zenith-saas-brand-kit/mockup-1.png",
      },
      {
        type: "stationery",
        title: "Service Partner Onboarding Brochure",
        file: "/brand/zenith-saas-brand-kit/mockup-2.png",
      },
    ],
  },
  {
    id: "celebre-event-brand-kit",
    slug: "celebre-event-brand-kit",
    title: "Célèbre Event Atelier Brand Kit",
    client: "Add brand name here",
    industry: "Event Management",
    year: "2024",
    role: "Visual & Brand Designer",
    tools: ["Figma", "Canva"],
    summary:
      "Luxury visual identity system curated for modern wedding celebrations, digital invitations, and customized event stationery.",
    logo: "/brand/celebre-event-brand-kit/logo.svg",
    palette: [
      { name: "Cream Stationery", hex: "#FFF8F5", role: "Base card paper stock" },
      { name: "Blush Pearl", hex: "#F8CBD8", role: "Envelope liner and RSVP badges" },
      { name: "Rose Gold Foil", hex: "#D9577B", role: "Embossed titles and foil stamp elements" },
      { name: "Plum Charcoal", hex: "#2B1B2E", role: "Formal typography and venue map details" },
    ],
    typography: {
      heading: "Fraunces Serif Display Italic",
      body: "DM Sans Geometric Clean",
      notes: "Luxury stationery elegance combined with modern mobile screen legibility for digital RSVPs.",
    },
    usageRules: [
      "Embossed foil accents should be reserved for couple/host names and milestone dates.",
      "Never compress or alter ligature spacing in the customized headline wordmark.",
      "Maintain a generous margin border on all digital and printed invitation canvases.",
    ],
    mockups: [
      {
        type: "stationery",
        title: "Bespoke Wedding Invitation Suite & RSVP Card",
        file: "/brand/celebre-event-brand-kit/mockup-1.png",
      },
      {
        type: "social",
        title: "Digital Save-the-Date Instagram Story Kit",
        file: "/brand/celebre-event-brand-kit/mockup-2.png",
      },
    ],
  },
];
