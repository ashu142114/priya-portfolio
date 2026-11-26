"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyViewportProps {
  children: React.ReactNode;
  minHeight?: string;
  className?: string;
}

export function LazyViewport({
  children,
  minHeight = "320px",
  className = "",
}: LazyViewportProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "260px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={!visible ? { minHeight } : undefined}>
      {visible ? (
        children
      ) : (
        <div
          className="w-full h-full rounded-3xl bg-cream-100/70 border border-blush-200/70 animate-pulse flex flex-col justify-between p-6"
          style={{ minHeight }}
          aria-hidden="true"
        >
          <div className="h-4 w-1/3 bg-blush-200/60 rounded-full" />
          <div className="space-y-3 my-auto">
            <div className="h-10 w-full bg-white/80 rounded-2xl" />
            <div className="h-10 w-5/6 bg-white/80 rounded-2xl" />
          </div>
          <div className="h-3 w-1/4 bg-blush-200/60 rounded-full" />
        </div>
      )}
    </div>
  );
}
