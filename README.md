# Priya K. Lakkad — UI/UX & Product Designer Portfolio

> A bespoke, high-performance, feminine design portfolio website built for **Priya K. Lakkad**, UI/UX and Product Designer based in Surat, Gujarat, India.
> Built on **Next.js 16.4.6 (App Router)**, **React 19**, **Tailwind CSS**, and **GSAP ScrollTrigger + Lenis** pinned scroll storytelling.

---

## 🌸 Visual Identity & Emotional Tone

- **Background (Warm Cream)**: `#FFF8F5`
- **Soft Blush**: `#F8D7DF`
- **Accent Rose**: `#D9577B` (WCAG AA accessible contrast)
- **Soft Lilac**: `#E6DDF7`
- **Text (Deep Plum)**: `#2B1B2E`
- **Typography Pairing**:
  - Display / Headlines: **Fraunces** (Warm optical serif with emotional warmth)
  - Interface / Body: **DM Sans** (Geometric grotesque with high legibility)
- **Texture**: Organic micro-grain overlay, soft pastel ambient glow blobs, tactile 3D cards with hover tilt/lift, and custom desktop cursor with interactive modes (`View`, `Drag`, `Play`).

---

## ⚡ Architecture & Tech Stack

- **Framework**: Next.js 16.4.6 (Turbopack + React 19)
- **Smooth Scrolling**: Lenis (`lerp: 0.08`) synced to GSAP ticker & ScrollTrigger
- **Motion System**: Centralized easing tokens (`tokens.ts`), `<SplitText>`, `<MaskImage>`, `<Parallax>`, `<ScrollDraw>`, `<StackedCards>`, `<HorizontalPin>`, `<Marquee>`, `<MagneticButton>`
- **7-Chapter Pinned Scroll Story**:
  - Chapter 01: Hero & Animated Roles Strip
  - Chapter 02: Multi-Theme Scroll (Studio Rose, Clinical Mint, Warm Ember, Midnight Plum with live CSS variables)
  - Chapter 03: Pinned Before / After Product Transformation
  - Chapter 04: 5-Stage Transforming Device (Research → Flows → Wireframes → Hi-Fi → Prototype)
  - Chapter 05: Interactive Design System Lab (Color tokens, Type hierarchy, Radii, Component assembly, Live `tokens.css`)
  - Chapter 06: Animated Brand Identity Suite (Stroke draw-in, Swatches, 3D Collateral assembly)
  - Chapter 07: Selected Work Parallax Showcase & Editorial Magnetic CTA
- **SEO & Search**: Dynamic OpenGraph images, Schema.org `Person` JSON-LD, XML sitemap (`/sitemap.xml`), `robots.txt`, `/llms.txt`, and canonical URLs.

---

## 📂 Exact Drop-In Asset Checklist for Priya

The portfolio features an intelligent **code-visual fallback system**: every project, logo, brand kit, and marketing graphic has a high-fidelity inline SVG/CSS screen generated in code. Whenever Priya exports real files from Figma or Canva, she simply drops them into the corresponding folder below, and the website will automatically display the real file without needing code edits.

### 1. Product Case Studies (`/public/projects/<slug>/`)
For each of the 6 case studies:
- `healthcare-mobile-app`
- `womens-health-app`
- `ai-healthcare-module`
- `diet-nutrition-module`
- `invitation-app`
- `service-based-booking-platform`

Drop the following files into `/public/projects/<slug>/`:
```
/public/projects/<slug>/
├── cover.png           # 1200x800px Hero card preview image
├── before.png          # Cluttered legacy / unoptimized interface
├── after.png           # Redesigned high-fidelity hero interface
├── screen-1.png        # Key screen 1 (e.g. Dashboard)
├── screen-2.png        # Key screen 2 (e.g. Calendar/Booking)
├── screen-3.png        # Key screen 3 (e.g. Telemedicine/Records)
├── screen-4.png        # Key screen 4 (e.g. Profile/Detail)
├── flow.png            # User journey / task flow diagram
├── wireframe.png       # Low-fidelity structural wireframe
└── design-system.png   # Component tokens & typography board
```

### 2. Logo Design Lab (`/public/logos/<slug>/`)
For each concept logo:
- `careflow-telehealth`
- `aura-womens-wellness`
- `zenith-saas-suite`
- `celebre-invitations`

Drop into `/public/logos/<slug>/`:
```
/public/logos/<slug>/
├── logo-old.svg        # Previous unrefined logo mark
├── logo-new.svg        # Refined vector mark with balanced geometry
└── concept.png         # Real-world mockup or merchandise application
```

### 3. Brand Identity Kits (`/public/brand/<slug>/`)
For each concept brand identity:
```
/public/brand/<slug>/
├── logo.svg            # Primary vector logo
├── collateral.png      # Assembled 3D collateral (business cards, stationery, bags)
└── guideline.pdf       # Brand guidelines document (optional)
```

### 4. Graphic Design Creatives (`/public/graphics/<slug>/`)
For advertising and social media creatives:
```
/public/graphics/<slug>/
└── cover.png           # Exported banner, flyer, brochure, business card, or social post
```

---

## 🔒 Ethical Design & Fact-Checking Policy

- **No Invented Claims**: Zero false metrics, percentages, years of experience, fake testimonials, or fabricated client names.
- **Concept Work Transparency**: All concept brand kits, logos, and advertising graphics display a visible `Concept` or `Sample` badge chip.
- **Scope Integrity**: Priya is accurately represented as a UI/UX & Product Designer working at ProjectTree (Surat). The site strictly excludes web development, WordPress, Shopify, and AI video creation.

---

## 🚀 Local Development & Build

```bash
# Install dependencies
npm install

# Run development server (Turbopack)
npm run dev

# Run linter
npm run lint

# Production build
npm run build

# Start production server
npm run start -p 3000
```
