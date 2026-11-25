import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SparkleIcon, FourPointStar } from "@/components/common/Stickers";
import { Mail, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-cream-100 via-blush-100/60 to-blush-200/50 pt-20 pb-12 overflow-hidden border-t border-blush-200">
      {/* Decorative Stars */}
      <div className="absolute top-8 left-10 pointer-events-none opacity-40" aria-hidden="true">
        <FourPointStar className="w-6 h-6 text-rose-400" />
      </div>
      <div className="absolute bottom-16 right-12 pointer-events-none opacity-30" aria-hidden="true">
        <SparkleIcon className="w-8 h-8 text-rose-500" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl md:rounded-4xl bg-white/80 backdrop-blur-md border border-blush-200/80 shadow-soft-lg text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100 border border-blush-300/60 text-xs font-semibold text-rose-700 mb-6">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>Open for new opportunities & collaborations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight max-w-2xl mx-auto leading-tight mb-5">
            Let's design thoughtful, caring experiences together.
          </h2>

          <p className="font-sans text-plum-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you are building a healthcare app, streamlining a SaaS platform, or need a fresh
            intuitive redesign, I'd love to chat.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold shadow-soft hover:bg-rose-600 hover:shadow-soft-lg transition-all duration-200 active:scale-95"
            >
              <Mail className="w-4 h-4 text-blush-200" />
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-plum border border-blush-300 font-sans text-xs sm:text-sm font-semibold shadow-soft-sm hover:border-rose-400 hover:bg-blush-50 transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-rose-500" />
              <span>WhatsApp: {siteConfig.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation and Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-blush-200/80">
          {/* Identity Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif text-2xl font-bold tracking-tight text-plum">
                {siteConfig.name}
                <span className="text-rose-500">.</span>
              </span>
            </Link>
            <p className="font-sans text-xs sm:text-sm text-plum-600 max-w-sm leading-relaxed mb-4">
              {siteConfig.fullName} — {siteConfig.title}. Designing empathetic, functional, and
              delightful user experiences from Surat, India.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-plum-500">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-plum mb-3 tracking-wide">Explore</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-plum-600">
              <li>
                <Link href="/work" className="hover:text-rose-600 transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rose-600 transition-colors">
                  Design Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-600 transition-colors">
                  About Me & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-rose-600 transition-colors">
                  Interactive Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-600 transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-serif text-sm font-bold text-plum mb-3 tracking-wide">Connect</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-plum-600">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-rose-600 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-plum-400" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1 hover:text-rose-600 transition-colors"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-plum-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-rose-600 transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-plum-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-plum-500 font-sans gap-3">
          <p>© {new Date().getFullYear()} Priya K. Lakkad. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-plum-400">
            <span>Designed with care in Figma</span>
            <span>•</span>
            <span>Surat, Gujarat</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
