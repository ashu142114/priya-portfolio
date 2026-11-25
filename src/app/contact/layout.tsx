import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch & Collaboration",
  description:
    "Direct contact details, email, and WhatsApp for Priya K. Lakkad, UI/UX Designer & Product Designer based in Surat, Gujarat, India.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
