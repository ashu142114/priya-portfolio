import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF8F5",
          50: "#FFFFFF",
          100: "#FFF8F5",
          200: "#FDF0EB",
          300: "#F7E2DA",
        },
        blush: {
          DEFAULT: "#F8D7DF",
          50: "#FEF7F9",
          100: "#FDEEF2",
          200: "#F8D7DF",
          300: "#F1B7C5",
          400: "#E690A5",
        },
        rose: {
          DEFAULT: "#D9577B",
          50: "#FDF2F4",
          100: "#FCE5EB",
          200: "#F8CBD8",
          300: "#F1A0BA",
          400: "#E66F95",
          500: "#D9577B",
          600: "#C43A61",
          700: "#A52A4E",
          800: "#892543",
          900: "#75223C",
        },
        lilac: {
          DEFAULT: "#E6DDF7",
          50: "#FAF8FD",
          100: "#F3EEFB",
          200: "#E6DDF7",
          300: "#D3C2F0",
          400: "#BAA0E5",
        },
        plum: {
          DEFAULT: "#2B1B2E",
          50: "#F6F4F7",
          100: "#E8E4EB",
          200: "#D2CAD6",
          300: "#B3A5B9",
          400: "#8F7B98",
          500: "#705B79",
          600: "#594660",
          700: "#47364D",
          800: "#372A3C",
          900: "#2B1B2E",
          950: "#1A0E1C",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(43, 27, 46, 0.03), 0 1px 3px rgba(217, 87, 123, 0.04)',
        'soft': '0 8px 30px rgba(43, 27, 46, 0.05), 0 2px 6px rgba(217, 87, 123, 0.06)',
        'soft-lg': '0 20px 50px rgba(43, 27, 46, 0.08), 0 4px 12px rgba(217, 87, 123, 0.08)',
        'soft-xl': '0 30px 70px rgba(43, 27, 46, 0.1), 0 8px 24px rgba(217, 87, 123, 0.1)',
        'glow-rose': '0 0 35px rgba(217, 87, 123, 0.25)',
        'glow-blush': '0 0 35px rgba(248, 215, 223, 0.4)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite reverse',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
