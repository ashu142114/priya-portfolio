import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SparkleIcon } from "@/components/common/Stickers";
import { CheckCircle2, Home, MessageCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You for Reaching Out",
  description: "Your inquiry has been received by Priya K. Lakkad.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full text-center p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-widest text-rose-700 block mb-2">
          Message Initiated
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-3">
          Thank You!
        </h1>

        <p className="font-sans text-sm text-plum-600 leading-relaxed mb-8">
          Thank you for getting in touch. I review design proposals and inquiries promptly and will get back to you soon.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold shadow-soft hover:bg-rose-600 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp for fast response</span>
          </a>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-plum border border-blush-300 font-sans text-xs sm:text-sm font-semibold shadow-soft-sm hover:border-rose-400 hover:bg-blush-50 transition-all active:scale-95"
          >
            <Home className="w-4 h-4 text-rose-500" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
