import React from "react";

export function SparkleIcon({ className = "w-4 h-4 text-rose" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

export function FourPointStar({ className = "w-5 h-5 text-rose-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z" />
    </svg>
  );
}

export function SoftHeart({ className = "w-4 h-4 text-rose-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function CurvedArrow({ className = "w-8 h-8 text-rose" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5 30C15 30 28 28 32 12" />
      <path d="M25 8L33 12L35 20" />
    </svg>
  );
}

export function DecorativeGlowBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Top right blush rose blob */}
      <div className="absolute -top-[15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blush-200/50 via-rose-100/35 to-transparent blur-3xl" />
      {/* Middle left lilac blob */}
      <div className="absolute top-[40%] -left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-lilac-200/45 via-blush-100/30 to-transparent blur-3xl" />
      {/* Bottom right soft cream rose blob */}
      <div className="absolute -bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-rose-200/30 via-lilac-100/30 to-transparent blur-3xl" />
    </div>
  );
}
