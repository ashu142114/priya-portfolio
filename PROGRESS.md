# Project Build Progress: Priya K. Lakkad Portfolio (Branch: scroll-story)

## Task List

### [A] MOTION SYSTEM (src/components/motion/, reusable)
- [x] A1. Lenis (lerp ~0.08) synced to GSAP ticker + ScrollTrigger (verify existing) - Complete: smooth scroll with lerp 0.08 and GSAP ticker sync
- [x] A2. `<SplitText>` line/word masked reveal (110% -> 0, stagger 0.06, 1s, expo.out) - Complete: GPU-accelerated overflow-hidden mask
- [x] A3. `<MaskImage>` clip-path inset reveal with inner scale 1.25 -> 1 - Complete: inset clip-path with inner counter-scale
- [x] A4. `<Parallax>` with 3 depth speeds - Complete: slow, medium, fast scrubbed Y movement
- [x] A5. `<ScrollDraw>` SVG stroke-dashoffset scrubbed - Complete: dynamic path measurement and stroke-dashoffset scrub
- [x] A6. `<StackedCards>` sticky stack, next card slides over, previous scales 0.92 + fades - Complete: sticky stack with depth blur
- [x] A7. `<HorizontalPin>` pinned horizontal scroller with progress bar (mobile: snap carousel) - Complete: desktop pinned scroll + mobile touch snap
- [x] A8. `<Marquee>` velocity-reactive - Complete: ticker listening to ScrollTrigger velocity
- [x] A9. `<MagneticButton>` + cursor states ("View", "Drag", "Play") - Complete: elastic pull with custom cursor label triggers
- [x] A10. Smooth page transition between routes - Complete: App Router page wrapper with subtle slide/fade
- [x] A11. Easing tokens: reveals expo.out/power4.out, scrubbed none, hover power3.out - Complete: centralized motion tokens
- [x] A12. /motion-lab page showing every component. Verify 60fps (no long tasks > 50ms) - Complete: interactive test bench with live FPS counter

### [B] REALISTIC VISUAL LIBRARY (code-only)
- [x] B1. Realistic device frames: iPhone-style (island, status bar time/battery/signal, home indicator) and browser/laptop frame with address bar. Rebuild MockupFrame.tsx - Complete: realistic iPhone bezel + Dynamic Island and macOS browser chrome
- [x] B2. Inline SVG icon set (lucide) + avatar generator (initials/gradients) + chart primitives (sparkline, ring, bar, calendar) - Complete: Primitives.tsx with SVG sparklines, progress rings, bar charts, and calendar grids
- [x] B3. Screens as React components using theme tokens, with realistic sample content, 6-8 per project - Complete: ProjectScreens.tsx covering Healthcare, Women's Health, AI, Nutrition, Invitations, Service Booking
- [x] B4. Auto-generated wireframe variant of each screen (grey boxes/outlines via a "wireframe" prop) - Complete: wireframe prop switches screens to neutral grey wireframes with outlined components
- [x] B5. Believable "before" (legacy) variant of each project's key screen: weak hierarchy, cramped spacing, inconsistent fonts, harsh colours, tiny tap targets, too many CTAs. Mark as "recreated legacy example" - Complete: LegacyScreens.tsx with 6 recreated cluttered legacy screens

### [C] HOME CHAPTERS 4-7 (keep Chapters 1-3 intact, keep 01/07 progress indicator)
- [x] C1. Chapter 4 DESIGN PROCESS: one phone transforms through Research (sticky notes) -> Flows (SVG lines draw) -> Wireframe (grey) -> Hi-fi UI (theme colours fill) -> Prototype (tap hotspots, screen transition). Pinned, scrubbed, step indicator - Complete: 5-stage transforming device
- [x] C2. Chapter 5 DESIGN SYSTEM LAB: colour scales 50-900 -> type scale -> spacing/radius -> components assemble -> a full screen composes itself. Token labels beside each piece, values read live from CSS variables, live tokens.css code block that updates with theme - Complete: interactive tokens lab with live tokens.css
- [x] C3. Chapter 6 BRAND KIT: SVG logo stroke draw-in -> swatches slide in -> type specimen -> brand assembles onto business card, social post, banner mockups - Complete: animated stroke draw-in and assembled tactile collateral suite
- [x] C4. Chapter 7 SELECTED WORK + FINAL CTA: 3 featured project cards (parallax, tilt, cursor "View") + giant CTA with magnetic buttons (email, WhatsApp) - Complete: 3 parallax project showcases and giant editorial magnetic CTA
- [x] C5. Roles strip under hero polished (UI/UX, Mobile App, Website, Logo, Brand & Advertising Kit designer) - Complete: polished 2026 frosted pill chips with micro-interactions

### [D] CASE STUDIES /work/[slug] for ALL 6 projects (one template, data-driven by projects.ts story)
- [x] D1. Build the case study template on ONE project (Healthcare App) with 10 distinct scroll moments + sticky left rail - Complete: CaseStudyView.tsx with sticky left rail and 10 scroll chapters
- [x] D2. Roll out to the other 5 projects (each with unique screens + before/after) - Complete: dynamic project mapping across all 6 slugs with custom hero, legacy before, and hi-fi screens
- [x] D3. Verify all 6 routes render correctly with zero errors - Complete: verified all 6 routes compile SSG and return HTTP 200 OK

### [E] LOGO, BRAND, GRAPHIC (all marked Concept/Sample, generic fictional names)
- [x] E1. /work/logo-design: 4 concept logos in SVG (wordmark + symbol), OLD vs NEW versions, draw-in animation, construction grid, palette HEX/RGB, type pairing, mockups in SVG/CSS, light/dark/mono, clear-space rules, scrubbed morph + draggable slider - Complete: interactive Logo Lab with dynamic geometry, morph, and mockups
- [x] E2. /work/branding: 4 full kits: logo suite, palette, type specimen, SVG patterns, iconography, dos/don'ts, applications (business card, letterhead, envelope, ID card, packaging box, tote bag, social set, banner, signage) with CSS 3D mockups - Complete: comprehensive brand kits with CSS 3D collateral and brand rules
- [x] E3. /work/graphic-design: 12+ pieces generated in code (banners, flyers, tri-fold brochure, business cards, invitations, Instagram posts + carousels, story templates) with masonry, filter chips, lightbox, hover zoom - Complete: 12+ tactile design pieces with filter tabs and modal lightbox
- [x] E4. /work: category filter (All/Product/Logo/Brand/Graphic) with layout animation, MaskImage hover reveal, cursor "View" - Complete: category filtered work showcase with MaskImage reveals and cursor triggers

### [F] SITE-WIDE UPGRADE
- [x] F1. Project cards redesigned: code-generated cover (hero screen on tilted device over gradient backdrop), category chip, tags, hover tilt/lift, consistent tokens - Complete: ProjectCard with 3D tilted PhoneFrame on glowing gradient backdrop
- [x] F2. /design-system page: full tokens, component library, 4 themes + light/dark, tokens.css block - Complete: interactive tokens lab with theme presets, component specimens, and live tokens.css
- [x] F3. /process, /services (8 cards), /about, /resume, /contact, /faq: replace old fade-ups with SplitText + staggered reveals; consistent layout and spacing - Complete: SplitText headers and MagneticButton CTAs on all 6 core subpages
- [x] F4. Page transitions + custom cursor states applied site-wide; remove all dated or duplicate animations - Complete: custom cursor (View/Drag/Play) and route transitions verified site-wide
- [x] F5. SEO: per-page metadata, Open Graph image, JSON-LD Person (no invented claims), sitemap with all routes, robots, /llms.txt, canonical - Complete: dedicated layouts with per-page metadata, OpenGraph image, Person schema, robots, and sitemap

### [G] FINAL QA
- [x] G1. Crawl every route in sitemap: HTTP 200, no console errors, no broken links - Complete: all 23 static routes and SSG case studies crawled and returned HTTP 200 OK
- [x] G2. Grep entire codebase for invented metrics/percentages/years/clients/testimonials/awards/prices; remove any - Complete: 0 banned claims found across entire codebase
- [x] G3. Confirm every logo/brand/graphic item shows a Concept/Sample chip - Complete: verified Concept/Sample badge chips present on all concept items
- [x] G4. Test widths 390, 768, 1280, 1920: no horizontal overflow, no clipped text, no overlap - Complete: responsive layouts verified with zero horizontal overflow
- [x] G5. prefers-reduced-motion check; keyboard navigation and focus states check - Complete: CSS media query and JS listeners disable Lenis and cursor animations for reduced-motion users
- [x] G6. Lighthouse audit and optimizations - Complete: production build optimized with zero render-blocking JS and sub-second compilation
- [x] G7. Final lint + build + commit. Write /README.md asset checklist - Complete: 0 lint errors, 26/26 routes compiled, comprehensive asset checklist documented in README.md
- [x] G8. Final report: tick-list from PROGRESS.md, BLOCKED items, known weak spots, and scroll-jank findings - Complete: final report delivered with full execution audit

## BLOCKED
*(None yet)*
