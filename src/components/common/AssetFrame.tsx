"use client";

import { useState } from "react";
import Image from "next/image";
import { SparkleIcon } from "@/components/common/Stickers";
import { Image as ImageIcon, Sparkles } from "lucide-react";

interface AssetFrameProps {
  src?: string;
  alt: string;
  aspectRatio?: "16/9" | "16/10" | "4/3" | "1/1" | "9/16" | "3/4";
  label?: string;
  sublabel?: string;
  className?: string;
  badge?: string;
  accentColor?: string;
}

export default function AssetFrame({
  src,
  alt,
  aspectRatio = "16/9",
  label = "Add real screen",
  sublabel,
  className = "",
  badge = "Figma Asset",
  accentColor = "#F8D7DF",
}: AssetFrameProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no source is provided or image loading fails, show the placeholder frame
  const showPlaceholder = !src || hasError;

  const aspectClass =
    aspectRatio === "9/16"
      ? "aspect-[9/16]"
      : aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "1/1"
      ? "aspect-square"
      : aspectRatio === "3/4"
      ? "aspect-[3/4]"
      : "aspect-[16/9]";

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-3xl overflow-hidden border border-blush-200/90 bg-gradient-to-br from-cream-100 via-white to-blush-50/50 shadow-soft flex items-center justify-center p-6 text-center select-none ${className}`}
    >
      {/* Try rendering actual image if provided */}
      {src && !hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className={`object-cover object-top transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Fallback Soft Labeled Placeholder Frame */}
      {showPlaceholder && (
        <div className="relative z-10 flex flex-col items-center justify-center max-w-xs mx-auto space-y-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-blush-300 shadow-soft-sm"
            style={{ backgroundColor: accentColor }}
          >
            <ImageIcon className="w-6 h-6 text-rose-700" />
          </div>

          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-rose-700 border border-blush-200 shadow-xs mb-1.5">
              <SparkleIcon className="w-3 h-3 text-rose-500" />
              <span>{badge}</span>
            </span>
            <h4 className="font-serif font-bold text-base text-plum">{label}</h4>
            {sublabel ? (
              <p className="text-xs text-plum-500 mt-0.5">{sublabel}</p>
            ) : (
              <p className="text-[11px] text-plum-400 mt-0.5">
                Drop image into public folder to replace
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
