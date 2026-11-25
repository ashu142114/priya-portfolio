import Link from "next/link";
import { siteConfig } from "@/data/site";
import { HelpCircle, ArrowRight } from "lucide-react";
import { SplitText } from "@/components/motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions answered about working with Priya K. Lakkad: tools, deliverables, design process, and collaboration.",
};

const faqs = [
  {
    q: "What tools do you use for your design work?",
    a: "My primary tool is Figma for all UX research, user flows, wireframes, high-fidelity UI design systems, and interactive clickable prototypes. For social media marketing creatives, banners, flyers, brochures, business cards, and invitations, I also use Canva.",
  },
  {
    q: "Do you write frontend code or build websites on WordPress / Shopify?",
    a: "No. I specialize strictly in UI/UX and Product Design. I do not do coding, WordPress, Shopify, or AI video generation. This allows me to focus entirely on user research, user flows, wireframes, and design systems in Figma.",
  },
  {
    q: "Which domains and industries do you design for?",
    a: "I have experience designing for Healthcare, SaaS, E-commerce, and Event Management. My focus is on creating simple, caring, and intuitive digital interfaces tailored to each domain's user needs.",
  },
  {
    q: "What is your typical design process for a project?",
    a: "My process generally follows five stages: (1) UX Research and User Journey Mapping, (2) Information Architecture & User Flows, (3) Low-Fidelity Wireframing, (4) High-Fidelity UI Design in Figma, and (5) Interactive Clickable Prototyping.",
  },
  {
    q: "What does the developer handoff include?",
    a: "I provide clean, organized Figma files with structured components, color tokens, typography scales, responsive layouts, exportable vector assets, and clickable prototypes showing interactive flows.",
  },
  {
    q: "Can you redesign an existing mobile app or website?",
    a: "Yes. Product redesign is one of my core services. I review the current user journey to identify usability friction and drop-off points, then restructure the experience with improved visual hierarchy, comfortable touch targets, and clear navigation.",
  },
  {
    q: "What are your rates, pricing, and turnaround times?",
    a: "Pricing, scope, and project timelines depend entirely on the specific requirements and complexity of each project. Contact me to discuss your project.",
  },
  {
    q: "How can I contact you or collaborate on a project?",
    a: "You can reach out directly via email at priyalakkad11@gmail.com or on WhatsApp at 7048628505. I am based in Surat, Gujarat, India, and am open to freelance design collaborations and remote opportunities.",
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
          <SplitText
            as="h1"
            className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight"
          >
            Frequently Asked Questions
          </SplitText>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Answers to common questions about my design scope, tools, process, and collaboration.
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
            Have a question about your project?
          </h3>
          <p className="text-xs text-plum-600 mb-6">
            Feel free to send an email or start a chat on WhatsApp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold hover:bg-rose-600 shadow-soft"
          >
            <span>Contact me to discuss</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
