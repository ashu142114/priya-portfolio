"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { projects, domainsList } from "@/data/projects";
import { MockupFrame } from "@/components/common/MockupFrame";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Event") {
      return projects.filter((p) => p.domain === "Event Management");
    }
    return projects.filter((p) => p.domain === activeFilter);
  }, [activeFilter]);

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <SparkleIcon className="w-3 h-3 text-rose-500" />
            <span>Product Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight">
            Selected Design Projects
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-4 leading-relaxed">
            A collection of mobile applications, modules, and booking platforms designed with Figma,
            focusing on clarity, empathy, and intuitive user workflows.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {domainsList.map((domain) => {
              const isActive = activeFilter === domain;
              const count =
                domain === "All"
                  ? projects.length
                  : domain === "Event"
                  ? projects.filter((p) => p.domain === "Event Management").length
                  : projects.filter((p) => p.domain === domain).length;

              return (
                <button
                  key={domain}
                  onClick={() => setActiveFilter(domain)}
                  className={`min-h-[44px] px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    isActive
                      ? "bg-rose-500 text-white shadow-soft font-semibold"
                      : "bg-white text-plum-700 border border-blush-200 hover:border-rose-300 hover:bg-blush-50"
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{domain}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/25 text-white" : "bg-cream-200 text-plum-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-blush-200/90 shadow-soft glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview */}
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

                {/* Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blush-100 text-rose-700 border border-blush-200">
                    {project.domain}
                  </span>
                  <span className="text-[11px] font-sans text-plum-400">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl font-bold text-plum group-hover:text-rose-600 transition-colors mb-2">
                  {project.title}
                </h2>

                {/* Summary */}
                <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Footer Details */}
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
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
