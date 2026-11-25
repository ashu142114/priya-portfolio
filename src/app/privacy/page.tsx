import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy regarding the portfolio website of Priya K. Lakkad, UI/UX & Product Designer.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
            <span>Respecting Your Privacy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-plum tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-sans text-xs text-plum-500 mt-2">Last updated: November 2026</p>
        </div>

        <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg space-y-6 text-sm text-plum-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-lg font-bold text-plum mb-2">1. Overview</h2>
            <p>
              This website serves as the personal creative design portfolio for <strong>{siteConfig.fullName}</strong>.
              I deeply respect your privacy and am committed to protecting any personal information you share when
              contacting me.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-plum mb-2">2. Information Collected</h2>
            <p>
              When you submit an inquiry through the contact form, you provide your name, email address, and optional
              message details. This information is used solely to respond to your design inquiries, project proposals, or
              career opportunities. It is never sold, shared with third parties, or used for automated marketing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-plum mb-2">3. Cookies & Analytics</h2>
            <p>
              This portfolio does not utilize third-party advertising trackers or invasive tracking cookies. Any
              anonymous performance metrics collected are used strictly to ensure the site loads quickly and smoothly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-plum mb-2">4. Contact Information</h2>
            <p>
              If you have any questions about this policy or your personal data, you may reach out directly to:
            </p>
            <div className="mt-3 p-4 rounded-2xl bg-cream-50 border border-blush-200 text-xs text-plum-800 font-medium space-y-1">
              <div>Email: <a href={`mailto:${siteConfig.email}`} className="text-rose-700 underline">{siteConfig.email}</a></div>
              <div>Phone / WhatsApp: {siteConfig.phoneFormatted}</div>
              <div>Location: {siteConfig.location}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
