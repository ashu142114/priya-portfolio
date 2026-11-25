import Link from "next/link";
import { SparkleIcon } from "@/components/common/Stickers";
import { Compass, Layers, Smartphone, Sparkles, Cpu, ArrowRight } from "lucide-react";
import { SplitText, MagneticButton } from "@/components/motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Process & Methodology",
  description:
    "A deep dive into Priya K. Lakkad's 5-step UI/UX design process: Research, User Flows, Wireframing, Hi-fi UI, and Interactive Figma Prototyping.",
};

const processSteps = [
  {
    step: "01",
    title: "UX Research & Empathy Mapping",
    tagline: "Listening closely to user pain points before drawing a single rectangle.",
    icon: Compass,
    description:
      "Every project starts with empathetic inquiry. I analyze user mental models, interview stakeholders, audit competitor workflows, and identify anxiety spikes in complex domains like healthcare and everyday SaaS.",
    deliverables: [
      "User Persona & Mental Model Mapping",
      "Competitive UX & Usability Benchmarking",
      "Emotional Pain Point Identification",
      "Problem Framing & Feature Prioritization",
    ],
  },
  {
    step: "02",
    title: "User Flows & Information Architecture",
    tagline: "Organizing complex multi-step processes into intuitive, friction-free pathways.",
    icon: Layers,
    description:
      "I map out the logical journey from entry point to goal completion. By eliminating redundant confirmation gates and structuring navigation hierarchies, I ensure users accomplish their tasks with zero cognitive strain.",
    deliverables: [
      "Task-based User Flow Diagrams",
      "Site Maps & Information Architecture (IA)",
      "Decision Trees & Error Handling Paths",
      "3-Tap Action Optimization",
    ],
  },
  {
    step: "03",
    title: "Wireframing & Rapid Iteration",
    tagline: "Validating thumb reach zones, accessibility, and content hierarchy in low-fidelity.",
    icon: Smartphone,
    description:
      "Low-fidelity wireframing in Figma lets us test layout balance and interactive density quickly. We establish clear visual hierarchy and 48px+ tap targets before investing time into visual styling.",
    deliverables: [
      "Mobile & Desktop Low-Fidelity Layouts",
      "Thumb-Zone & Touch Target Verification",
      "Content Hierarchy & Container Structuring",
      "Sticky Bottom Drawers & Modal Specs",
    ],
  },
  {
    step: "04",
    title: "Visual UI Design & Design System",
    tagline: "Infusing human-centered aesthetics, calming color palettes, and component tokens.",
    icon: Sparkles,
    description:
      "Translating wireframes into polished, accessible user interfaces. I build comprehensive Figma design systems with reusable variants, auto-layout components, WCAG AA contrast rules, and soft, welcoming aesthetics.",
    deliverables: [
      "Pixel-Perfect Mobile & Web Interfaces",
      "Figma Design Systems & Variants",
      "WCAG AA Color Token Guidelines",
      "Responsive Breakpoint Layouts",
    ],
  },
  {
    step: "05",
    title: "Interactive Prototyping & Handoff",
    tagline: "Bringing screens to life with realistic micro-interactions ready for engineers.",
    icon: Cpu,
    description:
      "Clickable prototypes simulate actual production behavior: accordion reveals, slot selection feedback, and animated drawer transitions. I deliver clean Figma files with developer specs, tokens, and asset exports.",
    deliverables: [
      "Clickable Figma Prototype for User Testing",
      "Micro-interaction & Transition Specs",
      "Organized Component Hand-off Files",
      "Asset Export Guidelines for Engineering",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-600" />
            <span>Methodology</span>
          </div>
          <SplitText
            as="h1"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight"
          >
            How The Design Builds Itself
          </SplitText>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-4 leading-relaxed">
            A structured, 5-step creative process designed to turn complex, high-friction requirements into
            empathetic, delightful digital products.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                <div className="md:col-span-4 flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-700 flex items-center justify-center font-serif text-lg font-bold">
                      {step.step}
                    </div>
                    <Icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-plum mb-2">{step.title}</h2>
                  <p className="font-sans text-xs sm:text-sm text-rose-800 font-medium">
                    {step.tagline}
                  </p>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <p className="font-sans text-sm text-plum-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-cream-50 border border-blush-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-plum-500 block mb-2">
                      Key Deliverables & Artifacts:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="text-xs text-plum-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-4xl bg-blush-100/60 border border-blush-200">
          <h3 className="font-serif text-2xl font-bold text-plum mb-2">
            Ready to design your product with this process?
          </h3>
          <p className="text-xs sm:text-sm text-plum-600 mb-6">
            Let's collaborate to transform your users' journeys into simple, caring interfaces.
          </p>
          <MagneticButton
            as="a"
            href="/contact"
            cursorState="View"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide hover:bg-rose-600 shadow-soft"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
