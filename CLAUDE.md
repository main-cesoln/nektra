# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server on localhost:3000
npm run build    # Production build
npm run start    # Production server (after build)
npm run lint     # ESLint (next lint)
```

No test framework is configured. No `.env` files needed — purely static site.

## What This Is

Static corporate website for Nektra Energy Solutions (authorized Exide industrial battery dealer, Hyderabad). Next.js 15 App Router, React 19, TypeScript strict mode, Tailwind CSS 3. No backend, API routes, or database — purely static pages with `generateStaticParams()` on all dynamic routes. Deployed on Vercel with Analytics and Speed Insights.

**Live site:** [nektraenergy.com](https://nektraenergy.com)

## Key Architectural Patterns

### Data-driven content via `lib/constants.ts`

All site content (products, services, industries, blog posts, FAQs, stats, company info, navigation) is defined as typed arrays/objects in `lib/constants.ts`. Pages and components import and render from these constants. Dynamic routes (`products/[slug]`, `industries/[slug]`, `services/[slug]`, `blog/[slug]`, `blog/category/[slug]`) use `generateStaticParams()` to enumerate slugs at build time.

**To add/edit content, modify `lib/constants.ts`** — no page-level changes needed. Types for all data models live in `lib/types.ts`. After adding an entry, run `npm run build` to generate new static pages.

| To add a... | Modify array | Type in `lib/types.ts` |
|---|---|---|
| Product | `PRODUCTS` | `Product` |
| Industry | `INDUSTRIES` | `Industry` |
| Service | `SERVICES` | `Service` |
| Blog post | `BLOG_POSTS` | `BlogPost` |
| FAQ | `FAQ_ITEMS` | `FAQItem` |

### Theming via CSS custom properties

Light/dark theme powered by `next-themes` (class strategy, system default). `ThemeProvider` wraps the app in `app/layout.tsx`.

- **Color definitions**: CSS custom properties in `app/globals.css` — `:root` for light mode, `.dark` for dark mode
- **Tailwind integration**: `tailwind.config.ts` references CSS vars (e.g., `primary: "rgb(var(--primary-rgb) / <alpha-value>)"`) so all Tailwind color utilities are theme-aware
- **`darkMode: "class"`** in Tailwind config — theme toggle adds/removes `.dark` on `<html>`

When adding colors: define the CSS var in both `:root` and `.dark` in `globals.css`, then reference it in `tailwind.config.ts`.

### SEO layer

- `lib/seo.ts` exports `generatePageMetadata()` — every page calls this for consistent OpenGraph/canonical metadata with the title template `%s | Nektra Energy Solutions`.
- `lib/schema.ts` exports JSON-LD schema generators (Organization, Product, Service, FAQ, Article, Breadcrumb, HowTo, CollectionPage, Industry) — injected via `components/seo/JsonLd.tsx`. Schemas reference `COMPANY` data directly — keep `schema.ts` in sync when COMPANY fields change.
- `app/sitemap.ts` and `app/robots.ts` handle crawling. `app/opengraph-image.tsx` generates dynamic OG images.
- `public/llms.txt` and `public/llms-full.txt` for LLM discoverability.

### Icon maps in `lib/icons.ts`

Lucide icons re-exported as `Record<string, Component>` maps (INDUSTRY_ICON_MAP, SERVICE_ICON_MAP, SOCIAL_ICON_MAP). Components look up icons by string key. To add: import from Lucide and add to the relevant map. For brand icons (e.g., WhatsApp), use inline SVGs.

### Component organization

- `components/ui/` — reusable primitives (GlassCard, GlowButton, SectionHeading, AnimatedCounter, MouseGlow, ParticleField, MotionWrapper, etc.)
- `components/home/` — homepage sections (HeroSection, StatsBar, ProductHighlights, IndustryGrid, etc.)
- `components/forms/` — contact, quote, service booking forms (client-side validation via `lib/validation.ts`, no submission backend — shows `FormSuccessMessage` on success)
- `components/layout/` — Navbar, Footer, ThemeProvider, ThemeToggle, WhatsAppButton
- `components/seo/` — JsonLd component
- `app/loading.tsx` — global loading spinner (shown during route transitions)
- `app/not-found.tsx` — custom 404 page

### Framer Motion patterns

- **MotionWrapper** — standard reusable animation wrapper (`whileInView` with `viewport={{ once: true }}`)
- **Accessibility**: all animated components check `useReducedMotion()` and skip/simplify animations accordingly
- **HeroSection** uses `useScroll()` + `useTransform()` for parallax

### Shared utilities

- `lib/styles.ts` — `inputClasses` string used by all form inputs
- `hooks/useMediaQuery.ts` — client-side media query hook (used for pointer detection, reduced motion)

## Design System

Light/dark theme with glass-morphism. Custom Tailwind tokens in `tailwind.config.ts`, colors driven by CSS custom properties in `globals.css`:

- **Colors**: primary cyan, accent-red, accent-green — each defined as `--*-rgb` vars for alpha support
- **Surfaces**: `surface-deepest`, `surface-panel`, `surface-card` (theme-aware via CSS vars)
- **Glass utilities**: `.glass` (16px blur) and `.glass-strong` (24px blur) via Tailwind plugin
- **CSS utilities**: `.bg-tint` / `.bg-tint-hover`, `.border-default-theme` / `.border-subtle`, `.glow-cyan` / `.glow-red` / `.glow-green`, `.gradient-text`, `.grid-bg`
- **Fonts**: Syne (headings via `--font-heading`), Space Grotesk (body via `--font-body`), JetBrains Mono (mono via `--font-mono`)
- **Animations**: `glow-pulse`, `float`, `fade-in-up`, `pulse-green`, `ticker`, `blob-morph-*`, `energy-flow`

## Configuration

- `next.config.mjs` — security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- `@/*` path alias maps to project root
