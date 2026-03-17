# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server on localhost:3000
npm run build    # Production build
npm run lint     # ESLint (next lint)
```

No test framework is configured.

## What This Is

Static corporate website for Nektra Energy Solutions (authorized Exide industrial battery dealer, Hyderabad). Next.js 15 App Router, React 19, TypeScript strict mode, Tailwind CSS 3. No backend, API routes, or database — purely static pages. Animations use Framer Motion; icons come from Lucide React plus custom SVG maps in `lib/icons.ts`.

## Key Architectural Patterns

### Data-driven content via `lib/constants.ts`

All site content (products, services, industries, blog posts, FAQs, stats, company info, navigation) is defined as typed arrays/objects in `lib/constants.ts`. Pages and components import and render from these constants. Dynamic routes (`products/[slug]`, `industries/[slug]`, `blog/[slug]`) use `generateStaticParams()` to enumerate slugs from these arrays at build time.

**To add/edit content, modify `lib/constants.ts`** — no page-level changes needed. Types for all data models live in `lib/types.ts`.

### SEO layer

- `lib/seo.ts` exports `generatePageMetadata()` — every page calls this for consistent OpenGraph/canonical metadata with the title template `%s | Nektra Energy Solutions`.
- `lib/schema.ts` exports JSON-LD schema generators (Organization, Product, Service, FAQ, Article, Breadcrumb) — injected via `components/seo/JsonLd.tsx`. JSON-LD schemas reference `COMPANY` data directly (address, coordinates, socials/sameAs) — keep schema.ts in sync when COMPANY fields change.
- `app/sitemap.ts` and `app/robots.ts` handle crawling configuration.

### Icon maps in `lib/icons.ts`

Lucide icons are re-exported as named `Record<string, Component>` maps (INDUSTRY_ICON_MAP, SERVICE_ICON_MAP, SOCIAL_ICON_MAP). Components look up icons by string key from constants data. To add icons: import from Lucide and add to the relevant map. For brand icons without Lucide equivalents (e.g., WhatsApp), use inline SVGs.

### Component organization

- `components/ui/` — reusable primitives (GlassCard, GlowButton, Badge, Container, Breadcrumbs, CTABanner, MotionWrapper)
- `components/home/` — homepage-specific sections
- `components/forms/` — contact, quote, and service booking forms (client-side validation via `lib/validation.ts`, no submission backend)
- `components/layout/` — Navbar, Footer, WhatsAppButton
- `components/seo/` — JsonLd component

## Design System

Dark theme with glass-morphism. Custom Tailwind tokens defined in `tailwind.config.ts`:

- **Colors**: primary `#00E5FF`, accent-red `#FF3D00`, accent-green `#76FF03`, surfaces `#0A0A0F` / `#14141F` / `#1A1A2E`
- **Glass utilities**: `.glass` and `.glass-strong` (Tailwind plugin — backdrop-blur + translucent white bg + border)
- **Fonts**: Syne (headings via `--font-heading`), Space Grotesk (body via `--font-body`), JetBrains Mono (mono via `--font-mono`)
- **Animations**: `glow-pulse`, `float`, `fade-in-up`, `pulse-green` keyframes

## Path Alias

`@/*` maps to project root (e.g., `@/lib/constants`, `@/components/ui/GlassCard`).
