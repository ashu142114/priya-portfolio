# Priya K. Lakkad — UI/UX & Product Designer Portfolio

A bespoke, soft, elegant, and feminine design portfolio website built from scratch for **Priya K. Lakkad**, UI/UX and Product Designer based in Surat, Gujarat, India.

---

## 🌸 Design Direction & Palette

The visual identity is designed to be calm, caring, and human-centered—especially tailored for healthcare, everyday SaaS, and digital products:

- **Background (Warm Cream)**: `#FFF8F5`
- **Soft Blush**: `#F8D7DF`
- **Accent Rose**: `#D9577B` (and WCAG AA `#A52A4E` for high contrast text)
- **Soft Lilac**: `#E6DDF7`
- **Text (Deep Plum)**: `#2B1B2E`
- **Typography**:
  - Headlines: **Fraunces** (Warm, organic serif display)
  - Body: **DM Sans** (Clean, accessible geometric sans)
- **Visual Texture**: Large rounded corners (`rounded-3xl` / `rounded-4xl`), pill buttons, gentle glass cards, subtle organic grain overlay, and soft pastel gradient blobs.
- **Micro-Interactions**: Smooth Lenis scrolling, small soft pink desktop cursor follower, and GSAP ScrollTrigger pinned storytelling.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Motion & Scrolling**: GSAP + ScrollTrigger + Lenis
- **Icons**: Lucide Icons + Custom SVG stickers (stars, sparkles, heart)
- **SEO & A11y**: Metadata API, Person JSON-LD schema, dynamic OpenGraph image (`/opengraph-image`), XML sitemap (`/sitemap.xml`), `robots.txt`, and `/llms.txt`.

---

## 🏆 Lighthouse Performance & Quality Scores

Tested on production build:
- **Performance**: `100 / 100`
- **SEO**: `100 / 100`
- **Best Practices**: `96 / 100`
- **Accessibility**: `94 / 100`
- **First Contentful Paint (FCP)**: `0.9s`
- **Largest Contentful Paint (LCP)**: `0.9s` (target: < 2.5s)
- **Cumulative Layout Shift (CLS)**: `0`
- **Total Blocking Time (TBT)**: `0ms`

---

## 📋 What Priya Must Provide & Customize

All data is intentionally isolated in **`/src/data/`** so Priya can update text, projects, and links in minutes without touching layout code.

### 1. Portfolio Images & Screen Mockups
Currently, the portfolio renders crisp, soft SVG mockup frames as placeholders. When Priya exports her real Figma frames:
- Export Figma frames as high-resolution PNG or WebP (e.g. 1200x800px).
- Place them in `/public/images/projects/`.
- Reference them in `src/data/projects.ts` inside the `screens` array.

### 2. Profile Photo
- Currently, the photo placeholder in the arch frame shows an elegant monogram (`PK`).
- Priya can drop her portrait photo into `/public/images/priya-lakkad.jpg` and reference it in `src/components/home/AboutSnippetSection.tsx` and `src/app/about/page.tsx`.

### 3. Resume PDF
- Replace the placeholder file at:
  ```
  /public/Priya_Lakkad_Resume.pdf
  ```
  with her latest exported resume PDF.

### 4. Social & Professional Links
Open `src/data/site.ts` and update:
```typescript
links: {
  linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
  behance: "https://www.behance.net/your-behance-handle", // optional
  dribbble: "https://dribbble.com/your-dribbble-handle",   // optional
  resumePdf: "/Priya_Lakkad_Resume.pdf",
}
```

### 5. Project Outcomes / Real Results
Each project in `src/data/projects.ts` includes an editable `outcome` field clearly marked:
```typescript
outcome: "Add result here (e.g. Conducted usability testing demonstrating 95% task completion...)",
```
Priya can replace these with her specific client metrics, app launch details, or feedback.

### 6. Custom Domain URL
Set your production domain in `.env.local` or your Vercel Project Environment Variables:
```env
NEXT_PUBLIC_SITE_URL=https://priyalakkad.design
```

### 7. Contact Form Service (Optional)
The contact form currently validates fields and opens a pre-composed direct email (`mailto:priyalakkad11@gmail.com`) as well as providing 1-tap WhatsApp chat (`https://wa.me/917048628505`).
If Priya wants an automated backend mailer (e.g., [Resend](https://resend.com) or [Formspree](https://formspree.io)), she can connect the form action in `src/app/contact/page.tsx`.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000

# 4. Verify production build & lint
npm run lint
npm run build
```

---

## 📂 Project Structure

```
├── public/
│   ├── llms.txt                    # Machine-readable overview for LLMs
│   └── Priya_Lakkad_Resume.pdf      # Downloadable resume placeholder
├── src/
│   ├── app/
│   │   ├── about/page.tsx          # Full story, domains, grouped skills, education
│   │   ├── contact/page.tsx        # Form with validation + direct WhatsApp/email
│   │   ├── resume/page.tsx         # Clean on-page resume matching Priya's CV
│   │   ├── services/page.tsx       # 4 core design services & deliverables
│   │   ├── work/
│   │   │   ├── page.tsx            # Filterable project catalog (All, Healthcare, SaaS, etc.)
│   │   │   └── [slug]/page.tsx     # Full case study template for all 6 projects
│   │   ├── globals.css             # Theme variables, custom cursor, Lenis rules
│   │   ├── layout.tsx              # Root layout with fonts, smooth scroll, JSON-LD
│   │   ├── not-found.tsx           # Custom 404 page
│   │   ├── opengraph-image.tsx     # Dynamic Edge OpenGraph card generator
│   │   ├── page.tsx                # Home page with 6 sections
│   │   ├── robots.ts               # Robots.txt generator
│   │   └── sitemap.ts              # XML sitemap generator
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx    # Small soft pink desktop follower
│   │   │   ├── JsonLd.tsx          # Person schema
│   │   │   ├── MockupFrame.tsx     # Mobile & web mockup frames
│   │   │   ├── SmoothScroll.tsx    # Lenis + GSAP ScrollTrigger bridge
│   │   │   └── Stickers.tsx        # Sparkle, stars, heart, glow blobs
│   │   ├── home/
│   │   │   ├── AboutSnippetSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PinnedStorySection.tsx # "The design builds itself as you scroll"
│   │   │   ├── SelectedWorkSection.tsx
│   │   │   └── WhatIDoSection.tsx
│   │   └── layout/
│   │       ├── Footer.tsx
│   │       └── Navbar.tsx          # Auto-hiding header + mobile drawer
│   └── data/
│       ├── about.ts                # Bio narrative & experience
│       ├── projects.ts             # 6 exact projects & case study content
│       ├── services.ts             # 4 services & deliverables
│       ├── site.ts                 # Contact info, social links, navigation
│       └── skills.ts               # Categorized skills, tools, languages
└── tailwind.config.ts
```
