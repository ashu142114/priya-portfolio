"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { SparkleIcon } from "@/components/common/Stickers";
import { Parallax, MagneticButton } from "@/components/motion";
import MockupFrame from "@/components/common/MockupFrame";
import { ArrowUpRight, Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Chapter7SelectedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div
      id="chapter-work-cta"
      className="relative w-full py-20 sm:py-28 bg-cream-100 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full space-y-24">
        {/* Section 1: 3 Featured Project Cards with Parallax Depth */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-xs font-semibold text-rose-700 mb-3 shadow-soft-sm">
              <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
              <span>Chapter 07 • Selected Case Studies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
              Crafted with Empathy & Care
            </h2>
            <p className="font-sans text-sm sm:text-base text-plum-600 mt-2">
              Three signature case studies demonstrating end-to-end UX research, wireframing, and interactive design systems.
            </p>
          </div>

          <div className="space-y-16">
            {featured.map((project, idx) => (
              <div
                key={project.id}
                className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Details Column */}
                <div className={`lg:col-span-6 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-100 text-rose-800">
                        {project.category}
                      </span>
                      {project.domainTags.map((tag) => (
                        <span key={tag} className="text-xs text-plum-500 font-medium">
                          • {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mb-3">
                      <Link href={`/work/${project.slug}`} className="hover:text-rose-700 transition-colors">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="font-sans text-sm text-plum-600 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    <div className="space-y-1 text-xs text-plum-500 pb-6 border-b border-blush-100">
                      <div><strong className="text-plum">Role:</strong> {project.role}</div>
                      <div><strong className="text-plum">Tools:</strong> {project.tools.join(", ")}</div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <MagneticButton
                      as="a"
                      href={`/work/${project.slug}`}
                      cursorState="View"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold shadow-soft hover:bg-rose-600 transition-all"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>

                {/* Visual Column with Parallax Depth */}
                <div className={`lg:col-span-6 flex justify-center ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <Parallax speed="slow" className="w-full flex justify-center">
                    <Link
                      href={`/work/${project.slug}`}
                      data-cursor="View"
                      className="block transform hover:scale-102 transition-transform duration-300"
                    >
                      <MockupFrame
                        type="mobile"
                        variant={
                          project.slug === "healthcare-mobile-app"
                            ? "healthcare"
                            : project.slug === "womens-health-app"
                            ? "cycle"
                            : "booking"
                        }
                        title={project.title}
                        category={project.domain}
                      />
                    </Link>
                  </Parallax>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-plum border border-blush-300 font-sans text-sm font-semibold shadow-soft hover:border-rose-400 hover:bg-blush-50 transition-all"
            >
              <span>View All 6 Product Case Studies & Graphic Works</span>
              <ArrowRight className="w-4 h-4 text-rose-500" />
            </Link>
          </div>
        </div>

        {/* Section 2: Giant Editorial Final CTA */}
        <div className="p-10 sm:p-16 rounded-4xl bg-gradient-to-br from-plum-950 via-plum-900 to-plum-950 text-white shadow-soft-xl text-center space-y-8 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-300 block">
              Have a Project in Mind?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let's Design Something Simple & Caring Together.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-rose-100/80 leading-relaxed max-w-xl mx-auto">
              I collaborate with healthcare platforms, SaaS startups, and creative event founders to turn complex problems into delightful user experiences.
            </p>
          </div>

          {/* Magnetic CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton
              as="a"
              href={`mailto:${siteConfig.email}`}
              cursorState="Hover"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rose-500 text-white font-sans text-sm font-bold shadow-soft hover:bg-rose-600 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email Priya Directly</span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              cursorState="Hover"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans text-sm font-bold backdrop-blur-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-rose-300" />
              <span>Chat on WhatsApp</span>
            </MagneticButton>
          </div>

          <div className="text-[11px] text-plum-300 pt-4 font-mono">
            Surat, Gujarat, India • Available for Select Collaborations & Remote Roles
          </div>
        </div>
      </div>
    </div>
  );
}
