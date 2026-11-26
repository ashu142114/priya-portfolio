"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { getScenario } from "@/data/scenarios";
import { hasRealAsset } from "@/data/assetManifest";
import { ArrowUpRight } from "lucide-react";
import { Parallax, MagneticButton } from "@/components/motion";
import { PhoneFrame } from "@/components/visuals/DeviceFrame";
import { ScenarioMobileHero } from "@/components/visuals/DeepProjectScreens";
import { LazyViewport } from "@/components/visuals/LazyViewport";

interface ProjectCardProps {
  project: Project;
  layout?: "grid" | "featured" | "compact";
  index?: number;
}

export default function ProjectCard({
  project,
  layout = "grid",
  index = 0,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const scenario = getScenario(project.slug);

  const isFeatured = layout === "featured";
  const isAlternate = isFeatured && index % 2 === 1;

  const deviceElement = (
    <div
      className={`relative overflow-hidden rounded-3xl p-5 sm:p-7 flex items-center justify-center border ${
        isFeatured ? "w-full min-h-[420px] sm:min-h-[480px]" : "mb-6 min-h-[300px]"
      }`}
      style={{
        background: `linear-gradient(135deg, ${scenario.palette.primarySoft} 0%, ${scenario.palette.bg} 55%, #FFFFFF 100%)`,
        borderColor: scenario.palette.border,
      }}
    >
      {/* Scenario App Label Pill */}
      <div
        className="absolute top-3.5 left-3.5 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-sm border shadow-soft-sm flex items-center gap-1.5"
        style={{ color: scenario.palette.primary, borderColor: scenario.palette.border }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: scenario.palette.primary }}
        />
        <span>{scenario.brandName}</span>
      </div>

      {/* 3D Tilted Device Container */}
      <div
        className={`relative w-full transition-all duration-700 ease-out transform group-hover:-translate-y-2 group-hover:scale-[1.03] ${
          isFeatured ? "max-w-[250px]" : "max-w-[195px]"
        }`}
      >
        <div
          className="transform transition-transform duration-700 ease-out"
          style={{
            transform: "perspective(1000px) rotateY(-6deg) rotateX(3deg)",
          }}
        >
          {hasRealAsset(project.cover) && !imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-auto rounded-3xl shadow-soft-lg object-cover"
            />
          ) : (
            <LazyViewport minHeight={isFeatured ? "400px" : "260px"}>
              <PhoneFrame
                time="09:41"
                screenBg={scenario.palette.bg}
                className="shadow-soft-xl ring-1 ring-black/5"
              >
                <ScenarioMobileHero slug={project.slug} />
              </PhoneFrame>
            </LazyViewport>
          )}
        </div>
      </div>

      {/* Quick Link Overlay */}
      <Link
        href={`/work/${project.slug}`}
        data-cursor="View"
        className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 rounded-3xl"
        aria-label={`View ${project.title} Case Study`}
      />
    </div>
  );

  return (
    <div
      className={`group relative rounded-4xl bg-white border border-blush-200/90 shadow-soft hover:shadow-soft-xl hover:border-rose-300 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden ${
        isFeatured
          ? "lg:grid lg:grid-cols-12 lg:gap-10 items-center p-8 sm:p-12"
          : "p-6 sm:p-8"
      }`}
    >
      {isFeatured ? (
        <>
          <div className={`lg:col-span-6 ${isAlternate ? "lg:order-2" : "lg:order-1"}`}>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3.5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold border shadow-soft-sm"
                  style={{
                    backgroundColor: scenario.palette.primarySoft,
                    color: scenario.palette.primary,
                    borderColor: scenario.palette.border,
                  }}
                >
                  {project.category.toUpperCase()}
                </span>
                {project.domainTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs bg-cream-100 text-plum-600 border border-blush-200/80 font-medium"
                  >
                    • {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-plum mb-3 group-hover:text-rose-700 transition-colors leading-tight">
                <Link href={`/work/${project.slug}`} data-cursor="View">
                  {project.title}
                </Link>
              </h3>

              <p className="font-sans text-sm sm:text-base text-plum-600 leading-relaxed mb-6">
                {project.summary}
              </p>

              <div className="space-y-1.5 text-xs text-plum-500 pt-4 border-t border-blush-100/90 mb-8">
                <div>
                  <strong className="text-plum">Role:</strong> {project.role}
                </div>
                <div>
                  <strong className="text-plum">Tools:</strong> {project.tools.join(", ")}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <MagneticButton
                as="a"
                href={`/work/${project.slug}`}
                cursorState="View"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold shadow-soft hover:bg-rose-600 transition-all"
              >
                <span>Explore Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>

          <div className={`lg:col-span-6 flex justify-center ${isAlternate ? "lg:order-1" : "lg:order-2"}`}>
            <Parallax speed="slow" className="w-full flex justify-center">
              {deviceElement}
            </Parallax>
          </div>
        </>
      ) : (
        <>
          {deviceElement}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3.5">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-semibold border shadow-soft-sm"
                  style={{
                    backgroundColor: scenario.palette.primarySoft,
                    color: scenario.palette.primary,
                    borderColor: scenario.palette.border,
                  }}
                >
                  {project.category.toUpperCase()}
                </span>
                {project.domainTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] bg-cream-100 text-plum-600 border border-blush-200/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum mb-2.5 group-hover:text-rose-700 transition-colors leading-tight">
                <Link href={`/work/${project.slug}`} data-cursor="View">
                  {project.title}
                </Link>
              </h3>

              <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed mb-6 line-clamp-3">
                {project.summary}
              </p>

              <div className="space-y-1.5 text-xs text-plum-500 pt-4 border-t border-blush-100/90 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-plum-700">Role:</span>
                  <span className="text-plum-600">{project.role}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-plum-700">Tools:</span>
                  <span className="text-plum-600">{project.tools.join(", ")}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/work/${project.slug}`}
                data-cursor="View"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream-50 text-rose-700 font-sans text-xs font-semibold border border-blush-200 shadow-soft-sm group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all duration-300"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
