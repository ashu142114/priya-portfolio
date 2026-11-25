export const MOTION_EASINGS = {
  reveal: "expo.out",
  dramatic: "power4.out",
  hover: "power3.out",
  scrubbed: "none",
  smooth: "power2.out",
} as const;

export const MOTION_DURATIONS = {
  reveal: 1.0,
  stagger: 0.06,
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
} as const;
