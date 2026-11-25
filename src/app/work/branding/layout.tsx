import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity Systems & 3D Collateral",
  description:
    "Comprehensive concept brand identity kits with color tokens, typography scales, CSS 3D business cards, packaging, and brand rules by Priya K. Lakkad.",
  alternates: {
    canonical: "/work/branding",
  },
};

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
