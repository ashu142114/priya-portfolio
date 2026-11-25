import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertising & Marketing Creatives",
  description:
    "Collection of 12+ concept graphic design deliverables: banners, flyers, tri-fold brochures, business cards, invitations, and social carousels by Priya K. Lakkad.",
  alternates: {
    canonical: "/work/graphic-design",
  },
};

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
