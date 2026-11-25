import Link from "next/link";
import { brandKits } from "@/data/brandKits";
import AssetFrame from "@/components/common/AssetFrame";
import { ArrowLeft, Award, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity Kits & Design Systems",
  description:
    "Explore comprehensive brand identity kits, color guidelines, typography rules, and collateral mockups by Priya K. Lakkad.",
};

export default function BrandingPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all work</span>
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <Award className="w-3.5 h-3.5 text-rose-600" />
            <span>Brand Systems</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
            Brand Identity Kits
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Holistic brand systems that connect seamlessly across digital platforms, app interfaces, and print stationery.
          </p>
        </div>

        {/* Brand Kits Grid */}
        <div className="space-y-16">
          {brandKits.map((kit) => (
            <div
              key={kit.id}
              className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-100 text-rose-800 inline-block mb-3">
                    {kit.industry} • {kit.year}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-plum mb-3">{kit.title}</h2>
                  <p className="font-sans text-sm text-plum-600 leading-relaxed mb-6">
                    {kit.summary}
                  </p>

                  {/* Usage Rules */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-plum-500 block mb-2">
                      Brand Usage Guidelines:
                    </span>
                    {kit.usageRules.map((rule, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-plum-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Palette & Typography Summary */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-cream-50 border border-blush-200 space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-plum mb-3">Color System</h3>
                    <div className="space-y-2">
                      {kit.palette.map((p) => (
                        <div key={p.name} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                              style={{ backgroundColor: p.hex }}
                            />
                            <span className="font-semibold text-plum">{p.name}</span>
                          </div>
                          <span className="font-mono text-plum-500 text-[11px]">{p.hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blush-100">
                    <h3 className="font-serif font-bold text-sm text-plum mb-1">Typography</h3>
                    <p className="text-xs text-plum-600">
                      <strong>Headings:</strong> {kit.typography.heading}
                    </p>
                    <p className="text-xs text-plum-600">
                      <strong>Body:</strong> {kit.typography.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mockups Row */}
              <div className="pt-6 border-t border-blush-100">
                <h3 className="font-serif font-bold text-base text-plum mb-4">
                  Collateral Mockups
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {kit.mockups.map((mockup, mIdx) => (
                    <AssetFrame
                      key={mIdx}
                      src={mockup.file}
                      alt={mockup.title}
                      aspectRatio="16/9"
                      label={`Add real ${mockup.type} mockup`}
                      sublabel={mockup.title}
                      badge={mockup.type}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
