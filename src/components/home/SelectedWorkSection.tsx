import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { MockupFrame } from "@/components/common/MockupFrame";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function SelectedWorkSection() {
  return (
    <section id="selected-work" className="py-20 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-3">
              <SparkleIcon className="w-3 h-3 text-rose-500" />
              <span>Portfolio Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
              Selected Work
            </h2>
            <p className="font-sans text-sm sm:text-base text-plum-600 mt-2 max-w-lg">
              Human-centered mobile applications and platforms designed to bring clarity to sensitive workflows.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-plum border border-blush-300 font-sans text-xs sm:text-sm font-semibold shadow-soft-sm hover:border-rose-400 hover:text-rose-600 transition-all self-start sm:self-auto"
          >
            <span>View all 6 projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 gap-10 lg:gap-14">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-12 bg-white/85 backdrop-blur-md border border-blush-200/90 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Project Details */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    {/* Domain Tag & Period */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-100 text-rose-800 border border-blush-200">
                        {project.domain}
                      </span>
                      <span className="text-xs font-sans text-plum-600 font-medium">
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-plum group-hover:text-rose-600 transition-colors leading-tight mb-3">
                      {project.title}
                    </h3>

                    {/* Subtitle / Summary */}
                    <p className="font-sans text-sm sm:text-base text-plum-600 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-2 mb-8">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-plum-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Link */}
                  <div className="pt-6 border-t border-blush-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-plum-500">Tool:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-cream-200 text-xs font-medium text-plum">
                        Figma
                      </span>
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-soft-sm hover:bg-rose-600 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                      aria-label={`Explore case study for ${project.title}`}
                    >
                      <span>Explore case study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Project Visual Mockup */}
                <div
                  className={`lg:col-span-6 flex justify-center items-center ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="w-full max-w-[340px] lg:max-w-none transform group-hover:scale-[1.02] transition-transform duration-500">
                    <MockupFrame
                      type={project.screens[0]?.type || "mobile"}
                      variant={
                        project.id.includes("womens")
                          ? "cycle"
                          : project.id.includes("booking")
                          ? "healthcare"
                          : "healthcare"
                      }
                      title={project.title}
                      category={project.domain}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
