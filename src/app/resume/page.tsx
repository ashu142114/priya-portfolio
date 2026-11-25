import Link from "next/link";
import { siteConfig } from "@/data/site";
import { skillCategories, designTools, spokenLanguages } from "@/data/skills";
import { experiences, education } from "@/data/about";
import { projects } from "@/data/projects";
import { SparkleIcon } from "@/components/common/Stickers";
import { Download, Mail, Phone, MapPin, ExternalLink, Calendar, Briefcase, GraduationCap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Curriculum Vitae of Priya K. Lakkad — UI/UX Designer & Product Designer with experience across Healthcare, SaaS, E-commerce, and Event Management.",
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-blush-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
              Curriculum Vitae
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-plum mt-1">
              Resume: Priya K. Lakkad
            </h1>
          </div>

          <a
            href={siteConfig.links.resumePdf}
            download="Priya_K_Lakkad_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-soft hover:bg-rose-600 transition-all self-start sm:self-auto active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Clean Paper-like Resume Document Container */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-blush-200 shadow-soft-lg text-plum space-y-10">
          {/* Resume Header */}
          <div className="text-center pb-8 border-b-2 border-plum-900">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-plum">
              {siteConfig.fullName}
            </h2>
            <p className="font-serif italic text-lg text-rose-600 mt-1">{siteConfig.title}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-plum-600 mt-4">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-rose-500" />
                {siteConfig.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                {siteConfig.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {siteConfig.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium text-rose-700">
                LinkedIn: Priya Lakkad
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-plum border-b border-plum-900 pb-1 mb-3">
              Professional Summary
            </h3>
            <p className="font-sans text-xs sm:text-sm text-plum-700 leading-relaxed">
              UI/UX and Product Designer designing user-centered digital products,
              mobile applications and responsive websites across healthcare, SaaS, e-commerce and
              event-management domains. Experienced in UX research, user flows, wireframing, interactive
              prototyping, responsive UI design, product redesign, problem solving and visual design, using Figma
              to support mobile and web application design.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-plum border-b border-plum-900 pb-1 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-sm text-plum">ProjectTree</h4>
                  <span className="text-xs font-medium text-plum-500">11/2024 – Present</span>
                </div>
                <div className="italic text-xs text-rose-700 mb-3">UI/UX Designer</div>
                <ul className="space-y-1.5 text-xs text-plum-700 list-disc pl-4 leading-relaxed">
                  <li>
                    Designed mobile applications and responsive web products across Healthcare, SaaS,
                    E-commerce and Event Management domains.
                  </li>
                  <li>
                    Conducted UX research and translated user and client requirements into user-centered
                    product and interface designs.
                  </li>
                  <li>
                    Created user flows, wireframes and interactive prototypes in Figma for mobile applications
                    and responsive web products.
                  </li>
                  <li>Developed responsive web interfaces for desktop and mobile experiences.</li>
                  <li>Redesigned existing products and improved their user experiences.</li>
                  <li>Collaborated and communicated with clients to understand requirements and shape design solutions.</li>
                  <li>Created brand identities, logos and social media posts and marketing creatives.</li>
                  <li>
                    Designed advertising and marketing materials, including banners, flyers, brochures,
                    business cards and invitations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-plum border-b border-plum-900 pb-1 mb-3">
              Education
            </h3>
            <div className="flex justify-between items-baseline">
              <div>
                <h4 className="font-bold text-sm text-plum">V.N. Borad Mahila BCA College</h4>
                <div className="italic text-xs text-plum-600">
                  Bachelor of Computer Applications (BCA)
                </div>
              </div>
              <div className="text-right text-xs text-plum-500">
                <div>03/2024</div>
                <div>Junagadh</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-plum border-b border-plum-900 pb-1 mb-4">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs text-plum-700">
              <div>
                <h5 className="font-bold text-plum mb-2">UX/UI & Product Design</h5>
                <ul className="space-y-1">
                  <li>• UI/UX Design</li>
                  <li>• Product Design</li>
                  <li>• User-Centered Design</li>
                  <li>• UX Research</li>
                  <li>• User Flows</li>
                  <li>• User Journey Mapping</li>
                  <li>• Information Architecture</li>
                  <li>• Interaction Design</li>
                  <li>• Wireframing</li>
                  <li>• Prototyping</li>
                  <li>• Responsive Design</li>
                  <li>• Mobile App Design</li>
                  <li>• Web Application Design</li>
                  <li>• Website Design</li>
                  <li>• Product Redesign</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-plum mb-2">Visual & Brand Design</h5>
                <ul className="space-y-1">
                  <li>• Visual Design</li>
                  <li>• Brand Identity</li>
                  <li>• Logo Design</li>
                  <li>• Social Media Creatives</li>
                  <li>• Marketing & Advertising Design</li>
                  <li>• Banners & Flyers</li>
                  <li>• Brochures</li>
                  <li>• Business Cards</li>
                  <li>• Invitation Design</li>
                </ul>
              </div>

              <div>
                <div className="mb-4">
                  <h5 className="font-bold text-plum mb-2">Design Tools</h5>
                  <ul className="space-y-1">
                    <li>• Figma</li>
                    <li>• Canva</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-plum mb-2">Industry Experience</h5>
                  <ul className="space-y-1">
                    <li>• Healthcare</li>
                    <li>• SaaS</li>
                    <li>• E-commerce</li>
                    <li>• Event Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-plum border-b border-plum-900 pb-1 mb-3">
              Languages
            </h3>
            <div className="flex gap-8 text-xs font-medium text-plum-700">
              <span>English</span>
              <span>Gujarati</span>
              <span>Hindi</span>
            </div>
          </div>

          {/* Selected Product Experience */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-plum border-b border-plum-900 pb-1 mb-4">
              Selected Product Experience
            </h3>
            <div className="space-y-4 text-xs text-plum-700">
              {projects.map((proj) => (
                <div key={proj.id} className="pb-2">
                  <div className="flex justify-between items-baseline font-bold text-plum">
                    <Link
                      href={`/work/${proj.slug}`}
                      className="hover:text-rose-600 transition-colors flex items-center gap-1"
                    >
                      <span>{proj.title}</span>
                      <ExternalLink className="w-3 h-3 text-rose-500" />
                    </Link>
                    <span className="font-normal italic text-plum-500">{proj.domain}</span>
                  </div>
                  <div className="text-[11px] text-rose-700 italic">{proj.role}</div>
                  <p className="mt-1 text-plum-600 leading-relaxed">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
