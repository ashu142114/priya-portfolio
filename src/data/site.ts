export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  shortTitle: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  location: string;
  city: string;
  state: string;
  country: string;
  experienceYears: string;
  currentRole: {
    title: string;
    company: string;
    startDate: string;
    location: string;
  };
  education: {
    degree: string;
    college: string;
    location: string;
    year: string;
  };
  links: {
    linkedin: string;
    behance: string; // placeholder if provided
    dribbble: string; // placeholder if provided
    resumePdf: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Priya",
  fullName: "Priya K. Lakkad",
  title: "UI/UX Designer | Product Designer",
  shortTitle: "Product Designer",
  tagline: "Designing simple, caring digital experiences for healthcare, SaaS, and e-commerce.",
  bio: "UI/UX and Product Designer based in Surat, India. Experienced in transforming complex workflows into intuitive, human-centered mobile and web apps using Figma.",
  email: "priyalakkad11@gmail.com",
  phone: "7048628505",
  phoneFormatted: "+91 70486 28505",
  whatsappUrl: "https://wa.me/917048628505?text=Hi%20Priya%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%21",
  location: "Surat, Gujarat, India",
  city: "Surat",
  state: "Gujarat",
  country: "India",
  experienceYears: "2+ years",
  currentRole: {
    title: "UI/UX Designer",
    company: "ProjectTree",
    startDate: "11/2024",
    location: "Surat, Gujarat",
  },
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "V.N. Borad Mahila BCA College",
    location: "Junagadh",
    year: "03/2024",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/priya-lakkad", // editable placeholder
    behance: "#", // Add Behance profile URL here
    dribbble: "#", // Add Dribbble profile URL here
    resumePdf: "/Priya_Lakkad_Resume.pdf",
  },
  navLinks: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
  ],
};
