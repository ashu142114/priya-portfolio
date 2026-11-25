import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyalakkad.design";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: "Priya Lakkad",
    jobTitle: "UI/UX Designer & Product Designer",
    description: siteConfig.bio,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneFormatted,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: siteConfig.country,
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.currentRole.company,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.education.college,
    },
    knowsAbout: [
      "UI/UX Design",
      "Product Design",
      "Healthcare UX",
      "Mobile App Design",
      "User Research",
      "User Flows",
      "Wireframing",
      "Figma",
      "Canva",
      "Design Systems",
    ],
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.whatsappUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
