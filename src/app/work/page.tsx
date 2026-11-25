"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { logos } from "@/data/logos";
import { brandKits } from "@/data/brandKits";
import { graphics } from "@/data/graphics";
import { MaskImage } from "@/components/motion";
import ProjectCard from "@/components/cards/ProjectCard";
import MockupFrame from "@/components/common/MockupFrame";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowUpRight, Palette, Layers, Sparkles, Image as ImageIcon } from "lucide-react";

const categories = [
  { id: "All", label: "All Work" },
  { id: "Product", label: "Product & UI/UX" },
  { id: "Logo", label: "Logos & Marks" },
  { id: "Brand", label: "Brand Identity Kits" },
  { id: "Graphic", label: "Advertising & Graphics" },
] as const;

type Category = (typeof categories)[number]["id"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-600" />
            <span>Design Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-plum tracking-tight">
            Selected Works
          </h1>
          <p className="font-sans text-base sm:text-lg text-plum-600 mt-4 leading-relaxed">
            A comprehensive collection of user-centered mobile apps, web design systems, concept logos, and advertising creatives.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap gap-2 mb-14 pb-4 border-b border-blush-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-rose-500 text-white shadow-soft"
                  : "bg-white text-plum-700 border border-blush-200 hover:border-rose-300 hover:bg-blush-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Section 1: Product Design (Shown if All or Product) */}
        {(activeCategory === "All" || activeCategory === "Product") && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-blush-200">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-rose-500" />
                <h2 className="font-serif text-2xl font-bold text-plum">Product & UI/UX Design</h2>
              </div>
              <span className="text-xs text-plum-500 font-medium">
                {projects.length} Case Studies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  layout="grid"
                  index={idx}
                />
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Logo Design (Shown if All or Logo) */}
        {(activeCategory === "All" || activeCategory === "Logo") && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-blush-200">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-rose-500" />
                <h2 className="font-serif text-2xl font-bold text-plum">Logo & Identity Marks</h2>
              </div>
              <Link
                href="/work/logo-design"
                className="text-xs font-semibold text-rose-700 hover:underline flex items-center gap-1"
              >
                <span>View all logos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft glass-card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300">
                        Concept
                      </span>
                      <span className="text-[11px] text-plum-500">{logo.industry}</span>
                    </div>
                    <div className="w-full aspect-square rounded-2xl bg-cream-50 border border-blush-100 flex items-center justify-center p-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-blush-100 flex items-center justify-center font-serif text-2xl font-bold text-rose-600">
                        {logo.title[0]}
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-base text-plum mb-1">{logo.title}</h3>
                    <p className="text-xs text-plum-600 line-clamp-2 mb-3">{logo.summary}</p>
                  </div>
                  <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-[11px] text-plum-500">
                    <span>{logo.industry}</span>
                    <Link href="/work/logo-design" className="font-semibold text-rose-700 hover:underline">
                      Explore Mark →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Brand Kits (Shown if All or Brand) */}
        {(activeCategory === "All" || activeCategory === "Brand") && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-blush-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-500" />
                <h2 className="font-serif text-2xl font-bold text-plum">Brand Identity Kits</h2>
              </div>
              <Link
                href="/work/branding"
                className="text-xs font-semibold text-rose-700 hover:underline flex items-center gap-1"
              >
                <span>View all brand kits</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandKits.map((kit) => (
                <div
                  key={kit.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200 shadow-soft glass-card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300">
                        Concept
                      </span>
                      <span className="text-xs text-plum-500">{kit.industry}</span>
                    </div>
                    <div className="w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-cream-100 via-white to-blush-50 border border-blush-200 p-6 flex flex-col justify-between mb-4">
                      <div className="flex justify-between items-start">
                        <span className="font-serif font-bold text-xl text-plum">{kit.title.split(" ")[0]}</span>
                        <div className="flex gap-1">
                          {kit.palette.map((p) => (
                            <span key={p.name} className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: p.hex }} />
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-plum-400">Complete Brand Guidelines & Collateral</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl text-plum mb-2">{kit.title}</h3>
                    <p className="text-xs sm:text-sm text-plum-600 leading-relaxed mb-4">{kit.summary}</p>
                  </div>
                  <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-xs text-plum-500">
                    <span>{kit.industry}</span>
                    <Link
                      href="/work/branding"
                      className="text-xs font-semibold text-rose-700 hover:underline"
                    >
                      Explore Brand Kit →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Graphic Design & Print Collateral (Shown if All or Graphic) */}
        {(activeCategory === "All" || activeCategory === "Graphic") && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-blush-200">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-rose-500" />
                <h2 className="font-serif text-2xl font-bold text-plum">Advertising, Print & Collateral</h2>
              </div>
              <Link
                href="/work/graphic-design"
                className="text-xs font-semibold text-rose-700 hover:underline flex items-center gap-1"
              >
                <span>View all graphic suites</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {graphics.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft glass-card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300">
                        Sample
                      </span>
                      <span className="text-[11px] text-plum-500 capitalize">{item.category}</span>
                    </div>
                    <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cream-100 via-blush-50 to-rose-50 border border-blush-200 flex flex-col justify-center items-center text-center p-4 mb-4">
                      <span className="font-serif font-bold text-xs text-plum leading-tight mb-1">{item.title}</span>
                      <span className="text-[9px] font-mono text-rose-700">{item.dimensions}</span>
                    </div>
                    <h3 className="font-serif font-bold text-sm text-plum mb-1">{item.title}</h3>
                    <p className="text-[11px] text-plum-600 line-clamp-2 mb-3">{item.summary}</p>
                  </div>
                  <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-[11px] text-plum-500">
                    <span className="capitalize">{item.category}</span>
                    <Link href="/work/graphic-design" className="font-semibold text-rose-700 hover:underline">
                      Inspect →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
