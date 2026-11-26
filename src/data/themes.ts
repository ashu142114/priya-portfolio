export interface ThemePreset {
  id: string;
  name: string;
  tagline: string;
  dotColor: string;
  isDark: boolean;
  tokens: {
    bgPrimary: string;
    textPrimary: string;
    textSecondary: string;
    accentPrimary: string;
    accentSecondary: string;
    surface: string;
    surfaceMuted: string;
    borderColor: string;
    cardRadius: string;
    fontFamily: string;
  };
}

export interface ThemePreferences {
  skinId: string;
  accentOverride?: string;
  cardRadiusPx?: number;
  paperGrain: boolean;
  reducedMotion: boolean;
}

export const ACCENT_SWATCHES = [
  { name: "Studio Rose", hex: "#D9577B" },
  { name: "Clinical Teal", hex: "#0D7C85" },
  { name: "Terracotta", hex: "#D86A3E" },
  { name: "Lavender", hex: "#7C3AED" },
  { name: "Emerald", hex: "#059669" },
  { name: "Sapphire", hex: "#2563EB" },
];

export const themePresets: ThemePreset[] = [
  {
    id: "studio",
    name: "Studio Rose",
    tagline: "Warm pastel cream • Default",
    dotColor: "#D9577B",
    isDark: false,
    tokens: {
      bgPrimary: "#FFF8F5",
      textPrimary: "#2B1B2E",
      textSecondary: "#5E4362",
      accentPrimary: "#D9577B",
      accentSecondary: "#F8D7DF",
      surface: "rgba(255, 255, 255, 0.92)",
      surfaceMuted: "#FDF1EE",
      borderColor: "rgba(235, 198, 208, 0.85)",
      cardRadius: "28px",
      fontFamily: "var(--font-fraunces), serif",
    },
  },
  {
    id: "clinical",
    name: "Clinical Mint",
    tagline: "Calm healthcare • Crisp contrast",
    dotColor: "#0D7C85",
    isDark: false,
    tokens: {
      bgPrimary: "#F4F8F9",
      textPrimary: "#15282D",
      textSecondary: "#3E5A61",
      accentPrimary: "#0D7C85",
      accentSecondary: "#D4EFF2",
      surface: "rgba(255, 255, 255, 0.94)",
      surfaceMuted: "#E9F3F4",
      borderColor: "rgba(186, 224, 229, 0.9)",
      cardRadius: "20px",
      fontFamily: "var(--font-dm-sans), sans-serif",
    },
  },
  {
    id: "ember",
    name: "Warm Ember",
    tagline: "Warm paper • Tactile SaaS",
    dotColor: "#D86A3E",
    isDark: false,
    tokens: {
      bgPrimary: "#FAF5EE",
      textPrimary: "#2D1D14",
      textSecondary: "#61473A",
      accentPrimary: "#D86A3E",
      accentSecondary: "#FADEC9",
      surface: "rgba(255, 253, 250, 0.92)",
      surfaceMuted: "#F5EAE0",
      borderColor: "rgba(232, 200, 178, 0.9)",
      cardRadius: "32px",
      fontFamily: "var(--font-fraunces), serif",
    },
  },
  {
    id: "midnight",
    name: "Midnight Plum",
    tagline: "Obsidian plum • High contrast",
    dotColor: "#E14B7B",
    isDark: true,
    tokens: {
      bgPrimary: "#140E17",
      textPrimary: "#FAF3F6",
      textSecondary: "#D5C4CF",
      accentPrimary: "#E14B7B",
      accentSecondary: "#2C1B31",
      surface: "#1E1522",
      surfaceMuted: "#281C2D",
      borderColor: "rgba(225, 75, 123, 0.35)",
      cardRadius: "24px",
      fontFamily: "var(--font-fraunces), serif",
    },
  },
];

export const THEME_STORAGE_KEY = "priya-theme-prefs-v1";

export function applyTheme(
  theme: ThemePreset,
  overrides?: Partial<Pick<ThemePreferences, "accentOverride" | "cardRadiusPx" | "paperGrain" | "reducedMotion">>
) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const rawOverride = overrides?.accentOverride;
  const validOverride =
    rawOverride &&
    /^#[0-9A-Fa-f]{6}$/.test(rawOverride) &&
    rawOverride.toLowerCase() !== "#ffffff" &&
    rawOverride.toLowerCase() !== "#000000"
      ? rawOverride
      : undefined;
  const accent = validOverride || theme.tokens.accentPrimary;
  const radius = overrides?.cardRadiusPx !== undefined ? `${overrides.cardRadiusPx}px` : theme.tokens.cardRadius;

  root.setAttribute("data-theme", theme.isDark ? "dark" : "light");
  root.setAttribute("data-skin", theme.id);
  root.setAttribute("data-grain", overrides?.paperGrain === false ? "off" : "on");
  root.setAttribute("data-motion", overrides?.reducedMotion ? "reduced" : "full");

  root.style.setProperty("--bg-primary", theme.tokens.bgPrimary);
  root.style.setProperty("--text-primary", theme.tokens.textPrimary);
  root.style.setProperty("--text-secondary", theme.tokens.textSecondary);
  root.style.setProperty("--accent-primary", accent);
  root.style.setProperty("--accent-secondary", theme.tokens.accentSecondary);
  root.style.setProperty("--surface", theme.tokens.surface);
  root.style.setProperty("--surface-muted", theme.tokens.surfaceMuted);
  root.style.setProperty("--border-color", theme.tokens.borderColor);
  root.style.setProperty("--card-radius", radius);
}
