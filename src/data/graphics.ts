export interface GraphicEntry {
  id: string;
  slug: string;
  title: string;
  client: string; // Placeholder if unknown
  category: "banner" | "flyer" | "brochure" | "business-card" | "invitation" | "social-post";
  domain: "Healthcare" | "SaaS" | "E-commerce" | "Event Management";
  year: string;
  role: string;
  tools: string[];
  summary: string;
  dimensions: string;
  file: string;
  deliverables: string[];
}

export const graphics: GraphicEntry[] = [
  {
    id: "healthcare-campaign-banner",
    slug: "healthcare-campaign-banner",
    title: "Healthcare Awareness Web & Display Banners",
    client: "Add client name here",
    category: "banner",
    domain: "Healthcare",
    year: "2024",
    role: "Marketing & Advertising Designer",
    tools: ["Figma", "Canva"],
    summary:
      "A cohesive suite of responsive digital advertising banners designed to promote telemedicine services and seasonal health check-ups.",
    dimensions: "1920x1080 (Hero), 1200x628 (Social), 300x250 (Display)",
    file: "/graphics/healthcare-campaign-banner/banner.png",
    deliverables: [
      "Google Display Network ad set (5 standard sizes)",
      "Website promotional hero banner",
      "High-contrast CTA button variants",
    ],
  },
  {
    id: "clinical-wellness-brochure",
    slug: "clinical-wellness-brochure",
    title: "Clinical Wellness Services Tri-fold Brochure",
    client: "Add client name here",
    category: "brochure",
    domain: "Healthcare",
    year: "2024",
    role: "Print & Collateral Designer",
    tools: ["Figma", "Canva"],
    summary:
      "An informative, patient-friendly tri-fold brochure breaking down full-body checkup packages, lab report turnaround times, and doctor consultations.",
    dimensions: "A4 Tri-fold (297mm x 210mm unfolded, 300 DPI print-ready)",
    file: "/graphics/clinical-wellness-brochure/brochure.png",
    deliverables: [
      "CMYK print-ready PDF with 3mm bleed",
      "Digital flipbook PDF for website download",
      "Doctor appointment QR code sticker insert",
    ],
  },
  {
    id: "luxury-event-invitation-suite",
    slug: "luxury-event-invitation-suite",
    title: "Luxury Event Stationery & Invitation Suite",
    client: "Add client name here",
    category: "invitation",
    domain: "Event Management",
    year: "2024",
    role: "Invitation & Stationery Designer",
    tools: ["Figma", "Canva"],
    summary:
      "Bespoke digital and print invitation cards featuring rose gold foil aesthetics, custom typography flourishes, and QR-linked digital RSVPs.",
    dimensions: "5x7 inches (Print card) + 1080x1920px (WhatsApp/Story version)",
    file: "/graphics/luxury-event-invitation-suite/invitation.png",
    deliverables: [
      "Printable two-sided invitation card with foil layer",
      "Animated WhatsApp video invitation slide",
      "Matching place cards & table numbers",
    ],
  },
  {
    id: "consultant-business-card",
    slug: "consultant-business-card",
    title: "Executive Business Cards & Social Suite",
    client: "Add client name here",
    category: "business-card",
    domain: "SaaS",
    year: "2024",
    role: "Brand Collateral Designer",
    tools: ["Figma", "Canva"],
    summary:
      "Minimalist, tactile business cards featuring spot UV monogram detailing and an integrated NFC/QR profile link for seamless client networking.",
    dimensions: "3.5 x 2.0 inches (Standard business card format)",
    file: "/graphics/consultant-business-card/business-card.png",
    deliverables: [
      "Front and back print layouts with 3.5mm safety zone",
      "LinkedIn & Instagram square post creative templates",
      "Vector logo stamp files for physical embossing",
    ],
  },
];
