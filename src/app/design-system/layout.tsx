import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System Lab & CSS Tokens",
  description:
    "Interactive Figma design tokens, WCAG AA color ramps, typography scale, container radii, and accessible component library primitives by Priya K. Lakkad.",
  alternates: {
    canonical: "/design-system",
  },
};

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
