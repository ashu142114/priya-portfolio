import Link from "next/link";
import { services } from "@/data/services";
import { SparkleIcon } from "@/components/common/Stickers";
import { SplitText } from "@/components/motion";
import { ServiceVisualMockup } from "@/components/visuals/ServiceVisuals";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Smartphone,
  Monitor,
  RefreshCw,
  Palette,
  Layers,
  Megaphone,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "8 Core Design Services",
  description:
    "Explore UI/UX, mobile app, website, product redesign, logo design, brand kits, advertising creatives, and invitation design by Priya K. Lakkad.",
};

const serviceIcons = [
  Compass,
  Smartphone,
  Monitor,
  RefreshCw,
  Palette,
  Layers,
  Megaphone,
  Sparkles,
];

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4 shadow-soft-sm">
            <SparkleIcon className="w-3 h-3 text-rose-500" />
            <span>Design Offerings</span>
          </div>
          <SplitText
            as="h1"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight"
          >
            How We Can Work Together
          </SplitText>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-4 leading-relaxed">
            I help startups, founders, and product teams shape clear, human-centered digital products from initial
            discovery to interactive Figma prototypes and production design systems.
          </p>
        </div>

        {/* Services List with Side-by-Side Visual Mockups */}
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden"
              >
                {/* Text & Deliverables Column */}
                <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 flex items-center justify-center shadow-soft-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-serif font-bold text-rose-600 tracking-wider">
                          Service 0{index + 1}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-plum-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200/80 mb-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-plum-400 block mb-1">
                        Best suited for:
                      </span>
                      <p className="text-xs sm:text-sm text-plum-700 font-medium">
                        {service.idealFor}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-2">
                        Included Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-plum-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blush-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-plum-500">
                      <span className="font-semibold">Tools:</span>
                      {service.tools.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full bg-cream-200 text-xs font-medium text-plum">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500 text-white text-xs font-semibold hover:bg-rose-600 transition-all shadow-soft"
                    >
                      <span>Inquire about this</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Visual UI Mockup Column */}
                <div className={`lg:col-span-6 flex justify-center w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="w-full max-w-lg">
                    <ServiceVisualMockup serviceId={service.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
