import Link from "next/link";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full text-center p-8 sm:p-12 rounded-4xl bg-white/90 backdrop-blur-md border border-blush-200/90 shadow-soft-lg">
        <div className="w-16 h-16 rounded-3xl bg-blush-100 text-rose-600 mx-auto flex items-center justify-center font-serif text-2xl font-bold mb-6">
          <SparkleIcon className="w-8 h-8 text-rose-500" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-widest text-rose-600 block mb-2">
          Error 404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-3">
          Page Not Found
        </h1>

        <p className="font-sans text-sm text-plum-600 leading-relaxed mb-8">
          The page you are looking for doesn't exist or has moved. Let's get you back to the design
          portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold shadow-soft hover:bg-rose-600 transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-plum border border-blush-300 font-sans text-xs sm:text-sm font-semibold shadow-soft-sm hover:border-rose-400 hover:bg-blush-50 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-rose-500" />
            <span>View Work</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
