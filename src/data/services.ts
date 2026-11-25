export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  tools: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "End-to-end user research, empathetic journey mapping, information architecture, and intuitive digital interfaces.",
    description:
      "Deep discovery into your users' habits, emotional friction points, and daily tasks. I turn complex domain workflows into human-centered, effortless experiences with zero cognitive fatigue.",
    deliverables: [
      "UX Research & Competitor Benchmarking",
      "User Journey Mapping & Personas",
      "Information Architecture & Task Trees",
      "Interaction Design & Micro-animations",
      "Comprehensive Figma Design System",
    ],
    tools: ["Figma"],
    idealFor: "Startups, healthcare platforms, and SaaS products looking to simplify user workflows.",
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design",
    shortDesc: "Pixel-perfect iOS and Android mobile interfaces with 48px+ touch targets and clickable Figma prototypes.",
    description:
      "Modern native and cross-platform mobile experiences designed for effortless one-handed use. Every tap, swipe, and modal transition is crafted for comfort and clarity.",
    deliverables: [
      "iOS & Android Native Mobile UI",
      "Thumb-Zone Optimized Layouts",
      "Sticky Bottom Navigation & Drawers",
      "Component Variants & Token Sheets",
      "Clickable Interactive Figma Prototypes",
    ],
    tools: ["Figma"],
    idealFor: "Founders and product teams building or scaling mobile consumer and clinical apps.",
  },
  {
    id: "website-design",
    title: "Website Design",
    shortDesc: "Responsive, editorial, and conversion-focused web applications and marketing sites.",
    description:
      "Tailored web design systems that scale seamlessly from 390px mobile viewports up to 4K ultra-wide monitors, balancing typographic elegance with clear conversion paths.",
    deliverables: [
      "Responsive Desktop, Tablet & Mobile Wireframes",
      "Editorial Serif & Clean Sans Typography Scales",
      "Conversion Landing Pages & Portals",
      "Asset Export Folders for Engineering",
      "Interactive Hover & Scroll State Specs",
    ],
    tools: ["Figma"],
    idealFor: "SaaS companies, service providers, and brands seeking a polished web presence.",
  },
  {
    id: "product-redesign",
    title: "Product Redesign",
    shortDesc: "Revitalizing legacy platforms to remove clutter, expand spacing, and elevate modern usability.",
    description:
      "Comprehensive friction audit of existing digital products that feel outdated or overwhelming. I streamline bloated multi-step funnels into clean, empathetic 3-tap workflows.",
    deliverables: [
      "UX Usability & Friction Audit",
      "Information Hierarchy Restructuring",
      "Before & After Comparative Screens",
      "Accessibility & WCAG AA Contrast Overhaul",
      "Incremental Component Migration Guide",
    ],
    tools: ["Figma"],
    idealFor: "Established products, healthcare systems, and SaaS platforms losing users to clunky UX.",
  },
  {
    id: "logo-design",
    title: "Logo Design",
    shortDesc: "Memorable vector logos, geometric monograms, and timeless brand marks.",
    description:
      "Clean, scalable brand marks crafted with mathematical harmony. Designed to reproduce with crisp precision across tiny mobile app icons, digital websites, and physical stationery.",
    deliverables: [
      "Vector Logo Mark & Wordmark (.SVG, .PNG)",
      "Monogram & Favicon App Icon Variants",
      "Light, Dark & Monochrome Colorways",
      "Golden-Ratio Geometry & Clear-Space Rules",
      "Logo Usage & Forbidden Practices Guide",
    ],
    tools: ["Figma"],
    idealFor: "New startups, healthcare practices, and brands establishing their visual identity.",
  },
  {
    id: "brand-identity-kit",
    title: "Brand Identity Kit",
    shortDesc: "Cohesive brand systems with color tokens, typography rules, and collateral mockups.",
    description:
      "A complete visual language that connects your product across every customer touchpoint. Includes full palette tokens, type hierarchies, and real-world stationery applications.",
    deliverables: [
      "Master Brand Guidelines Document",
      "Semantic Color Palette Tokens",
      "Heading & Body Typography Specimens",
      "Stationery & Collateral Mockup Previews",
      "Ready-to-Use Vector Brand Asset Kit",
    ],
    tools: ["Figma", "Canva"],
    idealFor: "Companies seeking a unified, professional brand image across digital and print touchpoints.",
  },
  {
    id: "advertising-marketing-creatives",
    title: "Advertising and Marketing Creatives",
    shortDesc: "High-impact digital banners, flyers, brochures, and embossed business cards.",
    description:
      "Eye-catching promotional collateral engineered for marketing performance. From Google Display ad sets to print-ready tri-fold brochures and luxury business cards.",
    deliverables: [
      "Display Ads & Promotional Web Banners",
      "Print-Ready Marketing Flyers (A4 / A5)",
      "Tri-Fold Clinical & Service Brochures",
      "Executive Business Cards with Spot UV / Bleed",
      "CMYK 300 DPI Print PDF Files",
    ],
    tools: ["Figma", "Canva"],
    idealFor: "Marketing teams, events, and clinics launching advertising campaigns.",
  },
  {
    id: "invitation-social-design",
    title: "Invitation and Social Design",
    shortDesc: "Luxury event invitations, wedding stationery, and curated social media creative suites.",
    description:
      "Bespoke digital stationery and social post suites designed with delicate flourishes and foil accents. Perfect for milestone celebrations, WhatsApp broadcasts, and Instagram campaigns.",
    deliverables: [
      "Bespoke Digital & Print Invitation Cards",
      "WhatsApp & Mobile Story Invitation Slides",
      "Instagram Carousels & Social Grid Templates",
      "Event RSVP Cards, Menus & Place Cards",
      "Canva & Figma Editable Template Kits",
    ],
    tools: ["Figma", "Canva"],
    idealFor: "Event planners, hosts, and lifestyle brands seeking memorable creative stationery.",
  },
];
