import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";
import CustomCursor from "@/components/common/CustomCursor";
import JsonLd from "@/components/common/JsonLd";
import { DecorativeGlowBlobs } from "@/components/common/Stickers";
import { siteConfig } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyalakkad.design";

export const viewport: Viewport = {
  themeColor: "#FFF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Priya K. Lakkad | UI/UX & Product Designer",
    template: "%s | Priya K. Lakkad",
  },
  description:
    "Portfolio of Priya K. Lakkad, a UI/UX & Product Designer based in Surat, India. Specializing in healthcare mobile apps, SaaS, and thoughtful user-centered digital products.",
  keywords: [
    "Priya Lakkad",
    "UI/UX Designer",
    "Product Designer",
    "Healthcare UX Design",
    "Mobile App Design",
    "Figma Designer Surat",
    "User Journey Mapping",
    "Responsive Web Design",
  ],
  authors: [{ name: "Priya K. Lakkad", url: siteUrl }],
  creator: "Priya K. Lakkad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Priya K. Lakkad | UI/UX & Product Designer",
    description:
      "Designing simple, caring digital experiences for healthcare, SaaS, and e-commerce.",
    siteName: "Priya K. Lakkad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya K. Lakkad | UI/UX & Product Designer",
    description:
      "Designing simple, caring digital experiences for healthcare, SaaS, and e-commerce.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent-secondary)] selection:text-[var(--text-primary)] min-h-screen relative overflow-x-hidden">
        {/* Subtle background grain texture */}
        <div className="fixed inset-0 grain-overlay -z-20 pointer-events-none" aria-hidden="true" />
        {/* Soft pastel ambient gradient blobs */}
        <DecorativeGlowBlobs />

        {/* Custom cursor for desktop pointer */}
        <CustomCursor />

        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full pt-20">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
