import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Design Lab & Geometry Grid",
  description:
    "Interactive concept logo designs with construction grids, typography pairings, color systems, and old-to-new comparisons by Priya K. Lakkad.",
  alternates: {
    canonical: "/work/logo-design",
  },
};

export default function LogoDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
