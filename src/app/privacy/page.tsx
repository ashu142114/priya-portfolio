import { siteConfig } from "@/data/site";
import { ShieldCheck, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy information for the portfolio website of Priya K. Lakkad, UI/UX & Product Designer.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
            <span>Privacy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-plum tracking-tight">
            Privacy Policy
          </h1>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-blush-200 shadow-soft space-y-6 text-sm text-plum-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-base font-bold text-plum mb-2">Overview</h2>
            <p>
              This website is the personal portfolio of <strong>{siteConfig.fullName}</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-plum mb-2">Information You Provide</h2>
            <p>
              If you reach out via the contact form or direct email, the details you share (such as your name,
              email address, and message) are used solely to respond to your inquiry and discuss potential design
              work. Your information is never sold, shared, or used for automated marketing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-plum mb-2">Cookies & Analytics</h2>
            <p>
              This website does not use advertising trackers or third-party marketing cookies.
            </p>
          </section>

          <section className="pt-2 border-t border-blush-100">
            <h2 className="font-serif text-base font-bold text-plum mb-2">Contact</h2>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                For questions regarding this website, contact{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-rose-700 font-semibold underline hover:text-rose-800"
                >
                  {siteConfig.email}
                </a>.
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
