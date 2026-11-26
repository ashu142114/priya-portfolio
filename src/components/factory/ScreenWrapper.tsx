"use client";

import React, { useState } from "react";
import { hasRealAsset } from "@/data/assetManifest";
import { LazyViewport } from "@/components/visuals/LazyViewport";

interface ScreenWrapperProps {
  projectSlug: string;
  screenId: string;
  title: string;
  minHeight?: string;
  showBadge?: boolean;
  children: React.ReactNode;
}

/**
 * Wraps every coded screen with:
 * 1. Real-asset override (/public/screens/<projectSlug>/<screenId>.png or .webp)
 * 2. IntersectionObserver lazy rendering
 * 3. Visible "Recreated concept" chip
 */
export function ScreenWrapper({
  projectSlug,
  screenId,
  title,
  minHeight = "260px",
  showBadge = true,
  children,
}: ScreenWrapperProps) {
  const [imgErr, setImgErr] = useState(false);
  const pngPath = `/screens/${projectSlug}/${screenId}.png`;
  const webpPath = `/screens/${projectSlug}/${screenId}.webp`;
  const realPath = hasRealAsset(pngPath) ? pngPath : hasRealAsset(webpPath) ? webpPath : null;

  return (
    <LazyViewport minHeight={minHeight} className="relative w-full">
      {showBadge && (
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-serif font-bold text-xs text-plum truncate">{title}</span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300 shrink-0">
            Recreated concept
          </span>
        </div>
      )}

      {realPath && !imgErr ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={realPath}
          alt={title}
          onError={() => setImgErr(true)}
          className="w-full h-auto rounded-2xl shadow-soft object-cover"
        />
      ) : (
        children
      )}
    </LazyViewport>
  );
}
