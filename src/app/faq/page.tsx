import Link from "next/link";
import { SparkleIcon } from "@/components/common/Stickers";
import { HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions answered about working with Priya K. Lakkad: tools, deliverables, design process, timeline, and developer handoff.",
};

const faqs = [
  {
    q: "What tools do you use for your design work?",
    a: "My primary daily driver is Figma for all UX research, user flows, wireframes, high-fidelity UI design systems, and interactive clickable prototypes. For social media advertising creatives, marketing banners, flyers, brochures, and invitations, I also use Canva.",
  },
  {
    q: "Do you write frontend code or build websites on WordPress / Shopify?",
    a: "No. I specialize strictly in UI/UX and Product Design. I do NOT do coding, WordPress, Shopify, or AI video generation. This allows me to dedicate 100% of my craft to user research, friction-free flows, and pixel-perfect design systems that your engineering team can build with precision.",
  },
  {
    q: "What does the typical developer handoff look like?",
    a: "I deliver clean, organized Figma files complete with auto-layout components, color tokens, typography scales, responsive mobile and desktop variants, and exportable vector SVG assets. I also provide clickable prototypes showing exact transition micro-interactions.",
  },
  {
    q: "Can you redesign our existing mobile app or SaaS web portal?",
    a: "Yes! Product redesign is one of my core offerings. I start by auditing your current user journey to identify drop-off points and cognitive clutter, and then restructure the experience with modern hierarchy, 48px+ touch targets, and calming aesthetics.",
  },
  {
    q: "How does project communication and client collaboration work?",
    a: "I communicate directly through email, Google Meet, and WhatsApp for fast feedback loops. I share live Figma view links at each milestone so you can leave comments directly on screens as we progress.",
  },
  {
    q: "What is your current location and availability?",
    a: "I am based in Surat, Gujarat, India. I am currently working as a UI/UX Designer at ProjectTree (since November 2024) and am open to select freelance design collaborations, consultations, and remote opportunities.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Questions & Answers</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Everything you need to know about my design scope, tools, deliverables, and collaboration.
          </p>
        </div>

        {/* FAQs Accordion Cards */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-blush-200 shadow-soft"
            >
              <h2 className="font-serif text-xl font-bold text-plum mb-3 flex items-start gap-3">
                <span className="font-sans text-xs font-bold text-rose-700 bg-blush-100 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">
                  Q{idx + 1}
                </span>
                <span>{faq.q}</span>
              </h2>
              <p className="font-sans text-sm text-plum-600 leading-relaxed pl-10">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-14 p-8 rounded-3xl bg-cream-50 border border-blush-200 text-center">
          <h3 className="font-serif text-xl font-bold text-plum mb-2">
            Have a question not listed here?
          </h3>
          <p className="text-xs text-plum-600 mb-6">
            Feel free to send a direct message or chat with me on WhatsApp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold hover:bg-rose-600 shadow-soft"
          >
            <span>Ask Priya a question</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
