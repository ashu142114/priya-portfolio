import Link from "next/link";
import { logos } from "@/data/logos";
import AssetFrame from "@/components/common/AssetFrame";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowLeft, Palette, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Design & Brand Marks",
  description:
    "Explore vector logos, monograms, and brand marks created by Priya K. Lakkad across Healthcare, SaaS, Wellness, and Events.",
};

export default function LogoDesignPage() {
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
            <Palette className="w-3.5 h-3.5 text-rose-600" />
            <span>Identity Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
            Logo Design & Brand Marks
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Clean, memorable monograms and vector marks designed with Figma. Each identity is rooted in
            geometric balance, scalable vector paths, and emotional relevance to its domain.
          </p>
        </div>

        {/* Logos Showcase List */}
        <div className="space-y-12">
          {logos.map((logo, idx) => (
            <div
              key={logo.id}
              className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-100 text-rose-800">
                      {logo.industry}
                    </span>
                    <span className="text-xs text-plum-500">{logo.year}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum mb-3">
                    {logo.title}
                  </h2>

                  <p className="font-sans text-sm text-plum-600 leading-relaxed mb-6">
                    {logo.summary}
                  </p>

                  {/* Concept Notes Card */}
                  <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-plum-500 block mb-1">
                      Concept & Geometry Notes:
                    </span>
                    <p className="text-xs text-plum-700 leading-relaxed italic">
                      {logo.conceptNotes}
                    </p>
                  </div>

                  {/* Typography & Colors */}
                  <div className="space-y-2 mb-6 text-xs text-plum-700">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-plum-500">Typography:</span>
                      <span>{logo.typography}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-plum-500">Palette:</span>
                      <div className="flex gap-1.5">
                        {logo.colors.map((c) => (
                          <span
                            key={c.name}
                            className="w-4 h-4 rounded-full border border-black/10"
                            style={{ backgroundColor: c.hex }}
                            title={`${c.name} (${c.hex})`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-blush-100 text-[11px] text-plum-400">
                  <span>Tools: {logo.tools.join(", ")}</span>
                </div>
              </div>

              {/* Right Visual Frames: Old vs. New Logo */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <AssetFrame
                  src={logo.oldLogo}
                  alt={`${logo.title} Previous`}
                  aspectRatio="1/1"
                  label="Add previous logo"
                  sublabel="Old Mark"
                  badge="Before"
                  accentColor="#F3EEFB"
                />
                <AssetFrame
                  src={logo.newLogo}
                  alt={`${logo.title} Redesign`}
                  aspectRatio="1/1"
                  label="Add new vector logo"
                  sublabel="Final Redesign"
                  badge="After"
                  accentColor="#F8D7DF"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
