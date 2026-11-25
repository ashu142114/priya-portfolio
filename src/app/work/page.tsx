"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { projects, categoriesList } from "@/data/projects";
import { logos } from "@/data/logos";
import { brandKits } from "@/data/brandKits";
import { graphics } from "@/data/graphics";
import { MockupFrame } from "@/components/common/MockupFrame";
import AssetFrame from "@/components/common/AssetFrame";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowUpRight, Palette, Layers, Award, Image as ImageIcon } from "lucide-react";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <SparkleIcon className="w-3 h-3 text-rose-500" />
            <span>Design Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight">
            Work & Case Studies
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-4 leading-relaxed">
            Thoughtful digital products, logo marks, brand identity kits, and marketing collateral designed with Figma.
          </p>

          {/* Quick Hub Navigation Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto">
            <Link
              href="/work"
              onClick={() => setActiveCategory("Product")}
              className="p-3 rounded-2xl bg-white border border-blush-200 text-center hover:border-rose-400 hover:shadow-soft-sm transition-all"
            >
              <span className="block font-serif font-bold text-xs text-plum">Product Design</span>
              <span className="text-[10px] text-plum-400">6 Projects</span>
            </Link>
            <Link
              href="/work/logo-design"
              className="p-3 rounded-2xl bg-white border border-blush-200 text-center hover:border-rose-400 hover:shadow-soft-sm transition-all"
            >
              <span className="block font-serif font-bold text-xs text-plum">Logo Marks</span>
              <span className="text-[10px] text-plum-400">4 Identities</span>
            </Link>
            <Link
              href="/work/branding"
              className="p-3 rounded-2xl bg-white border border-blush-200 text-center hover:border-rose-400 hover:shadow-soft-sm transition-all"
            >
              <span className="block font-serif font-bold text-xs text-plum">Brand Kits</span>
              <span className="text-[10px] text-plum-400">4 Systems</span>
            </Link>
            <Link
              href="/work/graphic-design"
              className="p-3 rounded-2xl bg-white border border-blush-200 text-center hover:border-rose-400 hover:shadow-soft-sm transition-all"
            >
              <span className="block font-serif font-bold text-xs text-plum">Graphics & Print</span>
              <span className="text-[10px] text-plum-400">4 Suites</span>
            </Link>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categoriesList.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[44px] px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    isActive
                      ? "bg-rose-500 text-white shadow-soft font-semibold"
                      : "bg-white text-plum-700 border border-blush-200 hover:border-rose-300 hover:bg-blush-50"
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 1: Product Design Projects (Shown if All or Product) */}
        {(activeCategory === "All" || activeCategory === "Product") && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-blush-200">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-rose-500" />
                <h2 className="font-serif text-2xl font-bold text-plum">Product & UI/UX Design</h2>
              </div>
              <span className="text-xs text-plum-500 font-medium">{projects.length} Mobile & Web Apps</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-blush-200/90 shadow-soft glass-card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Preview with auto-fallback */}
                    <div className="mb-6 rounded-2xl bg-gradient-to-b from-cream-100 to-blush-50/50 p-6 flex justify-center items-center border border-blush-100 overflow-hidden min-h-[280px]">
                      <div className="w-full max-w-[240px] transform group-hover:scale-105 transition-transform duration-500">
                        <MockupFrame
                          type={project.screens[0]?.type || "mobile"}
                          variant={
                            project.id.includes("womens")
                              ? "cycle"
                              : project.id.includes("ai")
                              ? "ai"
                              : project.id.includes("nutrition")
                              ? "nutrition"
                              : "healthcare"
                          }
                          title={project.title}
                          category={project.domain}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blush-100 text-rose-800 border border-blush-200">
                        {project.domain}
                      </span>
                      <span className="text-[11px] font-sans text-plum-600 font-medium">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-plum group-hover:text-rose-600 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-blush-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 rounded-full bg-cream-100 text-[10px] font-medium text-plum border border-blush-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-rose-500 text-white text-xs font-semibold hover:bg-rose-600 transition-all active:scale-95 shadow-soft-sm"
                      aria-label={`Explore case study for ${project.title}`}
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Logo Designs (Shown if All or Logo) */}
        {(activeCategory === "All" || activeCategory === "Logo") && (
          <div className="mb-16">
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
                    <AssetFrame
                      src={logo.newLogo}
                      alt={logo.title}
                      aspectRatio="1/1"
                      label={logo.title}
                      sublabel={logo.industry}
                      badge="Logo Mark"
                      className="mb-4"
                    />
                    <h3 className="font-serif font-bold text-base text-plum mb-1">{logo.title}</h3>
                    <p className="text-xs text-plum-600 line-clamp-2 mb-3">{logo.summary}</p>
                  </div>
                  <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-[11px] text-plum-500">
                    <span>{logo.industry}</span>
                    <span className="font-semibold text-rose-700">{logo.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Brand Kits (Shown if All or Brand) */}
        {(activeCategory === "All" || activeCategory === "Brand") && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-blush-200">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-rose-500" />
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
                    <AssetFrame
                      src={kit.mockups[0]?.file}
                      alt={kit.title}
                      aspectRatio="16/9"
                      label={kit.title}
                      sublabel="Brand Kit Presentation"
                      badge="Identity System"
                      className="mb-4"
                    />
                    <h3 className="font-serif font-bold text-xl text-plum mb-2">{kit.title}</h3>
                    <p className="text-xs sm:text-sm text-plum-600 leading-relaxed mb-4">{kit.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {kit.palette.map((p) => (
                        <div
                          key={p.name}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cream-100 border border-blush-200 text-[10px] font-medium text-plum"
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                            style={{ backgroundColor: p.hex }}
                          />
                          <span>{p.name.split(" ")[0]}</span>
                        </div>
                      ))}
                    </div>
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
                    <AssetFrame
                      src={item.file}
                      alt={item.title}
                      aspectRatio="4/3"
                      label={item.title}
                      sublabel={item.dimensions}
                      badge={item.category}
                      className="mb-4"
                    />
                    <h3 className="font-serif font-bold text-sm text-plum mb-1">{item.title}</h3>
                    <p className="text-[11px] text-plum-600 line-clamp-2 mb-3">{item.summary}</p>
                  </div>
                  <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-[11px] text-plum-500">
                    <span className="capitalize">{item.category}</span>
                    <span className="font-semibold text-rose-700">Figma / Canva</span>
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
