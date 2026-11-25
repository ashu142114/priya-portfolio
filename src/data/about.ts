export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "11/2024 – Present",
    title: "UI/UX Designer",
    company: "ProjectTree",
    location: "Surat, Gujarat, India",
    description:
      "Designing user-centered mobile applications and responsive web products across Healthcare, SaaS, E-commerce, and Event Management domains.",
    highlights: [
      "Designed mobile applications and responsive web products across Healthcare, SaaS, E-commerce and Event Management domains.",
      "Conducted UX research and translated user and client requirements into user-centered product and interface designs.",
      "Created user flows, wireframes and interactive prototypes in Figma for mobile applications and responsive web products.",
      "Developed responsive web interfaces for desktop and mobile experiences.",
      "Redesigned existing products and improved their overall user experience.",
      "Collaborated and communicated directly with clients to understand requirements and shape design solutions.",
      "Created brand identities, logos and social media posts and marketing creatives.",
      "Designed advertising and marketing materials, including banners, flyers, brochures, business cards and invitations.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  college: "V.N. Borad Mahila BCA College",
  location: "Junagadh, Gujarat",
  graduationDate: "03/2024",
  description:
    "Graduated with a strong foundation in computer applications, problem-solving, and digital information systems, which provides a natural technical intuition when collaborating with engineering teams.",
};

export const aboutNarrative = {
  intro:
    "I'm Priya K. Lakkad, a UI/UX and Product Designer based in Surat, Gujarat. I specialize in designing simple, caring, and intuitive digital experiences—particularly in sensitive spaces like healthcare, everyday SaaS, e-commerce, and event management.",
  philosophy:
    "Good design isn't about complexity or decoration; it's about clarity, empathy, and care. Whether designing an appointment booking system for a patient in distress or streamlining an invitation flow for a family celebration, my goal is always to make technology feel calm, respectful, and effortless.",
  background:
    "With a Bachelor of Computer Applications (BCA) from V.N. Borad Mahila BCA College, Junagadh, I bring both structured logical thinking and creative sensitivity to every project. Currently at ProjectTree, I collaborate closely with clients and cross-functional teams to take ideas from raw problem definitions to polished, interactive Figma prototypes and comprehensive design systems.",
};
