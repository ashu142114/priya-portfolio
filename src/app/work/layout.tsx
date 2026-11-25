import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Works & Case Studies",
  description:
    "Explore UI/UX, product design, brand identity kits, logos, and graphic design work by Priya K. Lakkad across Healthcare, SaaS, E-commerce, and Event Management.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
