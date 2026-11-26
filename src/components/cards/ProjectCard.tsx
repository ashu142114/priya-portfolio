"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { hasRealAsset } from "@/data/assetManifest";
import { ArrowUpRight } from "lucide-react";
import { Parallax, MagneticButton } from "@/components/motion";
import { PhoneFrame } from "@/components/visuals/DeviceFrame";
import {
  HealthcareDashboardScreen,
  WomensHealthCycleRingScreen,
  AiChatScreen,
  DietCalorieRingScreen,
  InvitationTemplatePickerScreen,
  ServiceListCatalogScreen,
} from "@/components/visuals/ProjectScreens";

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

  const renderProjectScreen = () => {
    switch (project.slug) {
      case "healthcare-mobile-app":
        return <HealthcareDashboardScreen />;
      case "womens-health-app":
        return <WomensHealthCycleRingScreen />;
      case "ai-healthcare-module":
        return <AiChatScreen />;
      case "diet-nutrition-module":
        return <DietCalorieRingScreen />;
      case "invitation-app":
        return <InvitationTemplatePickerScreen />;
      case "service-based-booking-platform":
        return <ServiceListCatalogScreen />;
      default:
        return <HealthcareDashboardScreen />;
    }
  };

  const isFeatured = layout === "featured";
  const isAlternate = isFeatured && index % 2 === 1;

  const deviceElement = (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-blush-100/90 via-cream-100 to-lilac-100/60 p-6 sm:p-8 flex items-center justify-center border border-blush-200/80 ${
        isFeatured ? "w-full min-h-[380px] sm:min-h-[440px]" : "mb-6 aspect-[16/11]"
      }`}
    >
      {/* Ambient Glow Blob */}
      <div
        className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-rose-200/40 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700"
        aria-hidden="true"
      />
      <div
        className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-lilac-200/40 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700"
        aria-hidden="true"
      />

      {/* 3D Tilted Device Container */}
      <div className="relative w-full max-w-[260px] transition-all duration-700 ease-out transform group-hover:-translate-y-2 group-hover:scale-[1.03]">
        <div
          className="transform transition-transform duration-700 ease-out"
          style={{
            transform: "perspective(1000px) rotateY(-8deg) rotateX(4deg)",
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
            <PhoneFrame
              time="9:41"
              className="shadow-soft-xl ring-1 ring-black/5"
            >
              {renderProjectScreen()}
            </PhoneFrame>
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
      {/* Featured Mode: Alternate Column Order */}
      {isFeatured ? (
        <>
          <div className={`lg:col-span-6 ${isAlternate ? "lg:order-2" : "lg:order-1"}`}>
            <div>
              {/* Category Chip & Domain Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-100 text-rose-800 border border-blush-200 shadow-soft-sm">
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

              {/* Title */}
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-plum mb-3 group-hover:text-rose-700 transition-colors leading-tight">
                <Link href={`/work/${project.slug}`} data-cursor="View">
                  {project.title}
                </Link>
              </h3>

              {/* Summary */}
              <p className="font-sans text-sm sm:text-base text-plum-600 leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Role & Tools Specs */}
              <div className="space-y-1.5 text-xs text-plum-500 pt-4 border-t border-blush-100/90 mb-8">
                <div>
                  <strong className="text-plum">Role:</strong> {project.role}
                </div>
                <div>
                  <strong className="text-plum">Tools:</strong> {project.tools.join(", ")}
                </div>
              </div>
            </div>

            {/* CTA Magnetic Button */}
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
              {/* Category Chip & Domain Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blush-100 text-rose-800 border border-blush-200 shadow-soft-sm">
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

              {/* Title */}
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum mb-2.5 group-hover:text-rose-700 transition-colors leading-tight">
                <Link href={`/work/${project.slug}`} data-cursor="View">
                  {project.title}
                </Link>
              </h3>

              {/* Summary */}
              <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed mb-6 line-clamp-3">
                {project.summary}
              </p>

              {/* Role & Tools Specs */}
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

            {/* CTA Link */}
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

