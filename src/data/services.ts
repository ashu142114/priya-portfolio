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
    id: "ux-research-flows",
    title: "UX Research & User Flows",
    shortDesc: "Transforming user needs and complex requirements into crystal-clear journeys and structured architecture.",
    description:
      "Deep-dive discovery to understand your users' core pain points, habits, and tasks. I craft intuitive user journey maps, information architecture, and structured user flows that remove friction before a single screen is drawn.",
    deliverables: [
      "UX Research & Competitor Audits",
      "User Journey Mapping & Personas",
      "Information Architecture (IA)",
      "Detailed Task & User Flows",
      "Problem Definition & Opportunity Framing",
    ],
    tools: ["Figma"],
    idealFor: "Startups, healthcare platforms, and complex SaaS products looking to simplify user tasks.",
  },
  {
    id: "mobile-web-app-design",
    title: "Mobile & Web App Design",
    shortDesc: "End-to-end digital product design with thoughtful interaction, responsive layouts, and Figma prototypes.",
    description:
      "Complete user interface design for iOS, Android, and responsive web applications. From low-fidelity wireframing to high-fidelity, polished screens with interactive prototypes ready for seamless developer handoff.",
    deliverables: [
      "Low & High-Fidelity Wireframes",
      "Pixel-Perfect Mobile UI (iOS / Android)",
      "Responsive Web Application Design",
      "Figma Design Systems & Components",
      "Clickable Interactive Prototypes",
    ],
    tools: ["Figma"],
    idealFor: "Founders, product teams, and businesses launching or modernizing their mobile or web applications.",
  },
  {
    id: "product-redesign",
    title: "Product Redesign",
    shortDesc: "Elevating existing platforms with modern UI aesthetics, improved usability, and higher conversion.",
    description:
      "Audit and revitalize existing digital products that feel outdated, cluttered, or difficult to navigate. I enhance visual hierarchy, streamline navigation, and refine user touchpoints to bring clarity and polish to your platform.",
    deliverables: [
      "UX / UI Usability & Friction Audit",
      "Navigation & Information Restructuring",
      "Visual Hierarchy & Aesthetic Modernization",
      "Accessibility & Readability Enhancements",
      "Before & After Comparative Screens",
    ],
    tools: ["Figma"],
    idealFor: "Established platforms, SaaS products, and service portals looking to improve user satisfaction.",
  },
  {
    id: "brand-marketing-design",
    title: "Brand & Marketing Design",
    shortDesc: "Consistent visual identities, logos, social media creatives, and print advertising collateral.",
    description:
      "Cohesive brand expression that connects with your audience across digital and physical touchpoints. I design memorable logos, social media creative suites, marketing banners, flyers, brochures, and custom invitations.",
    deliverables: [
      "Logo Design & Brand Identity Systems",
      "Social Media Post & Banner Creatives",
      "Marketing Banners & Advertising Visuals",
      "Print Collateral (Brochures, Flyers, Business Cards)",
      "Bespoke Digital & Print Invitation Design",
    ],
    tools: ["Figma", "Canva"],
    idealFor: "Brands, events, and businesses seeking a cohesive, memorable identity across marketing channels.",
  },
];
