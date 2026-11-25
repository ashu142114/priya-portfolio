"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { SparkleIcon } from "@/components/common/Stickers";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine background blur state
      setIsScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down fast, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          <nav
            className={`w-full mx-auto px-5 py-3 rounded-full flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-soft border border-blush-200/80"
                : "bg-transparent border border-transparent"
            }`}
            aria-label="Main Navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-full"
              aria-label="Priya K. Lakkad Home"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-plum group-hover:text-rose-600 transition-colors">
                Priya<span className="text-rose-500 font-serif">.</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-sans font-medium text-plum-400 pl-1 border-l border-blush-200">
                UI/UX Designer
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-cream-100/90 p-1.5 rounded-full border border-blush-200/60 shadow-soft-sm">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                      isActive
                        ? "bg-white text-rose-600 shadow-sm font-semibold"
                        : "text-plum-700 hover:text-rose-600 hover:bg-blush-100/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Let's Talk CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-rose-500 text-white text-xs font-semibold tracking-wide shadow-soft-sm hover:bg-rose-600 hover:shadow-soft transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500"
              >
                <span>Let's talk</span>
                <SparkleIcon className="w-3 h-3 text-blush-200" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger (min 44px tap target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-full bg-white/90 border border-blush-200 flex items-center justify-center text-plum hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 shadow-soft-sm active:scale-95"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Soft Pink Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-cream-100/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out flex flex-col justify-between px-6 pt-24 pb-10 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none hidden"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-plum-400 pl-2">
            Navigation
          </span>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`min-h-[48px] px-4 py-3 rounded-2xl font-serif text-2xl font-medium transition-colors flex items-center justify-between ${
                pathname === "/" ? "bg-blush-200 text-rose-700 font-bold" : "text-plum hover:bg-blush-100"
              }`}
            >
              <span>Home</span>
              <span className="text-xs font-sans text-plum-400 font-normal">01</span>
            </Link>

            {siteConfig.navLinks.map((link, idx) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[48px] px-4 py-3 rounded-2xl font-serif text-2xl font-medium transition-colors flex items-center justify-between ${
                    isActive ? "bg-blush-200 text-rose-700 font-bold" : "text-plum hover:bg-blush-100"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans text-plum-400 font-normal">
                    0{idx + 2}
                  </span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`min-h-[48px] px-4 py-3 rounded-2xl font-serif text-2xl font-medium transition-colors flex items-center justify-between ${
                pathname === "/contact"
                  ? "bg-blush-200 text-rose-700 font-bold"
                  : "text-plum hover:bg-blush-100"
              }`}
            >
              <span>Contact</span>
              <span className="text-xs font-sans text-plum-400 font-normal">06</span>
            </Link>
          </div>
        </div>

        {/* Mobile Contact Quick Actions */}
        <div className="pt-6 border-t border-blush-200/80 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-plum-500">
            <span>Direct Inquiries</span>
            <span>Surat, India</span>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="min-h-[48px] px-5 py-3 rounded-full bg-rose-500 text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-soft"
          >
            <span>{siteConfig.email}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-5 py-3 rounded-full bg-white border border-blush-300 text-plum font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-soft-sm hover:border-rose-300"
          >
            <span>WhatsApp Chat</span>
            <ArrowUpRight className="w-4 h-4 text-rose-500" />
          </a>
        </div>
      </div>
    </>
  );
}
