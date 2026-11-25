import Link from "next/link";
import { graphics } from "@/data/graphics";
import AssetFrame from "@/components/common/AssetFrame";
import { ArrowLeft, Image as ImageIcon, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertising, Print & Marketing Collateral",
  description:
    "Explore advertising banners, flyers, brochures, business cards, invitations, and social media creatives designed by Priya K. Lakkad.",
};

export default function GraphicDesignPage() {
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
            <ImageIcon className="w-3.5 h-3.5 text-rose-600" />
            <span>Marketing & Print Collateral</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
            Graphic & Advertising Design
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            High-impact marketing collateral, print-ready files, social media creative suites, and bespoke luxury invitations crafted in Figma and Canva.
          </p>
        </div>

        {/* Graphics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {graphics.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-4xl bg-white border border-blush-200 shadow-soft-lg flex flex-col justify-between space-y-6"
            >
              <div>
                <AssetFrame
                  src={item.file}
                  alt={item.title}
                  aspectRatio="16/9"
                  label={`Add real ${item.category} screen`}
                  sublabel={item.dimensions}
                  badge={item.category}
                  className="mb-6"
                />

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-blush-100 text-rose-800 capitalize">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-plum-500">{item.domain}</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-plum mb-3">{item.title}</h2>
                <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 p-4 rounded-2xl bg-cream-50 border border-blush-100 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-plum-500 block mb-1">
                    Delivered Assets:
                  </span>
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="text-xs text-plum-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-blush-100 flex items-center justify-between text-xs text-plum-500">
                <span>Tools: {item.tools.join(", ")}</span>
                <span className="font-medium text-rose-700">{item.dimensions}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
