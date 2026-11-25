import Link from "next/link";
import { services } from "@/data/services";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowUpRight, Compass, Smartphone, RefreshCw, PenTool } from "lucide-react";

const serviceIcons = [Compass, Smartphone, RefreshCw, PenTool];

export default function WhatIDoSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream-200/40 border-y border-blush-200/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-3">
            <SparkleIcon className="w-3 h-3 text-rose-500" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            What I Do
          </h2>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3">
            Four specialized design offerings crafted to turn user complexity into simple, delightful experiences.
          </p>
        </div>

        {/* 4 Soft Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="group p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-blush-200/80 shadow-soft glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-lg font-bold text-plum-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-plum mb-3 group-hover:text-rose-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-plum-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pb-6">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="text-xs text-plum-600 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-rose-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-blush-100 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-full bg-cream-100 text-[11px] font-medium text-plum-700 border border-blush-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:text-rose-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
