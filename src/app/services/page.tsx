import Link from "next/link";
import { services } from "@/data/services";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowRight, CheckCircle2, Compass, Smartphone, RefreshCw, PenTool } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "Explore UI/UX design services offered by Priya K. Lakkad: UX research & user flows, mobile & web app design in Figma, product redesigns, and brand & marketing collateral.",
};

const serviceIcons = [Compass, Smartphone, RefreshCw, PenTool];

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <SparkleIcon className="w-3 h-3 text-rose-500" />
            <span>Design Offerings</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight">
            How We Can Work Together
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-4 leading-relaxed">
            I help startups, founders, and product teams shape clear, human-centered digital products from initial
            discovery to interactive Figma prototypes and production design systems.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10 sm:space-y-12">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="p-8 sm:p-12 rounded-3xl sm:rounded-4xl bg-white/90 backdrop-blur-md border border-blush-200/90 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Description */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-serif font-bold text-rose-500">
                          Service 0{index + 1}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-plum-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200/60 mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-plum-400 block mb-1">
                        Best suited for:
                      </span>
                      <p className="text-xs sm:text-sm text-plum-700 font-medium">
                        {service.idealFor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-plum-500">Tools used:</span>
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-cream-200 text-xs font-medium text-plum"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Deliverables Card */}
                <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-blush-50/60 border border-blush-200 flex flex-col justify-between">
                  <h3 className="font-serif text-lg font-bold text-plum mb-4">Deliverables</h3>
                  <div className="space-y-3 mb-8">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-plum-700">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-rose-500 text-white text-xs sm:text-sm font-semibold hover:bg-rose-600 transition-all shadow-soft active:scale-95"
                  >
                    <span>Inquire about this service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
