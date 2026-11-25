"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { logos } from "@/data/logos";
import { brandKits } from "@/data/brandKits";
import { graphics } from "@/data/graphics";
import AssetFrame from "@/components/common/AssetFrame";
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
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-4xl bg-white border border-blush-200 shadow-soft glass-card-hover overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 sm:p-7">
                    {/* Visual Preview with auto-fallback */}
                    <Link href={`/work/${project.slug}`} className="block mb-5 overflow-hidden rounded-2xl">
                      <AssetFrame
                        src={project.cover}
                        alt={project.title}
                        aspectRatio="16/10"
                        label={`Add real screen for ${project.title}`}
                        sublabel={project.domainTags[0]}
                        badge="Case Study"
                        className="group-hover:scale-102 transition-transform duration-500"
                      />
                    </Link>

                    {/* Metadata Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-100 text-rose-800">
                        {project.category}
                      </span>
                      {project.domainTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] bg-cream-100 text-plum-600 border border-blush-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif font-bold text-xl text-plum mb-2 group-hover:text-rose-700 transition-colors">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Role & Tools */}
                    <div className="space-y-1 text-xs text-plum-500 pt-4 border-t border-blush-100">
                      <div>
                        <span className="font-semibold text-plum-700">Role:</span> {project.role}
                      </div>
                      <div>
                        <span className="font-semibold text-plum-700">Tools:</span> {project.tools.join(", ")}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/work/${project.slug}`}
                      className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-cream-50 hover:bg-rose-500 text-plum hover:text-white font-sans text-xs font-semibold border border-blush-200 hover:border-transparent transition-all duration-200"
                    >
                      <span>Read Case Study Story</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300">
                        Sample
                      </span>
                      <span className="text-[11px] text-plum-500 capitalize">{item.category}</span>
                    </div>
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
