export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "UX/UI & Product Design",
    description: "Designing thoughtful digital interactions rooted in research, clarity, and empathy.",
    skills: [
      "UI/UX Design",
      "Product Design",
      "User-Centered Design",
      "UX Research",
      "User Flows",
      "User Journey Mapping",
      "Information Architecture",
      "Interaction Design",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "Mobile App Design",
      "Web Application Design",
      "Website Design",
      "Product Redesign",
    ],
  },
  {
    category: "Visual & Brand Design",
    description: "Creating cohesive brand stories, marketing visuals, and memorable touchpoints.",
    skills: [
      "Visual Design",
      "Brand Identity",
      "Logo Design",
      "Social Media Creatives",
      "Marketing & Advertising Design",
      "Banners & Flyers",
      "Brochures",
      "Business Cards",
      "Invitation Design",
    ],
  },
  {
    category: "Industry Domains",
    description: "Deep exposure to user expectations and workflows across diverse sectors.",
    skills: ["Healthcare", "SaaS", "E-commerce", "Event Management"],
  },
];

export const designTools = [
  { name: "Figma", level: "Primary Product Design & Prototyping", experience: "Daily Driver" },
  { name: "Canva", level: "Brand & Social Marketing Creatives", experience: "Visual Collateral" },
];

export const spokenLanguages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Gujarati", level: "Native / Mother Tongue" },
  { name: "Hindi", level: "Full Professional Fluency" },
];
