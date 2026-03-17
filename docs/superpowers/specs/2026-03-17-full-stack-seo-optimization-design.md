# Full-Stack SEO Optimization — Nektra Energy Solutions

**Date:** 2026-03-17
**Status:** Reviewed
**Scope:** Comprehensive SEO optimization for Nektra Energy Solutions (Exide industrial battery dealer, Hyderabad/Telangana)

## Context

Nektra Energy Solutions is a static Next.js 15 corporate website for an authorized Exide industrial battery dealer serving Hyderabad and Telangana. The site already has a solid B+ SEO foundation: metadata on most pages, JSON-LD schemas (Organization, Product, Service, FAQ, Article, Breadcrumb), sitemap, robots.txt, semantic HTML, and statically pre-rendered routes.

**Business scope:** Local business, India only, Hyderabad/Telangana region.
**Goal:** World-class SEO — close all gaps, implement every viable strategy within the codebase.

## Constraints

- No backend/API — all content is static via `lib/constants.ts`
- No Google Business Profile yet (planned separately)
- Images to be handled later — infrastructure only for now
- No test framework configured
- Quote-based pricing (no public prices)

---

## Section 1: Technical SEO Fixes (Foundation)

### 1.1 Homepage metadata export
`app/page.tsx` has no `export const metadata`. Add a dedicated metadata export:
- **Title:** `"Exide Industrial Battery Dealer in Hyderabad | Nektra Energy Solutions"`
- **Description:** 150-160 chars, includes "Hyderabad", "Exide", "industrial battery", and CTA

### 1.2 Missing H1 tags on listing pages
Pages using `SectionHeading` (renders H2) need explicit H1 elements:
- **Services:** "Industrial Battery Services in Hyderabad"
- **FAQ:** "Frequently Asked Questions — Industrial Batteries"
- **Blog listing:** "Expert Insights on Industrial Battery Solutions"
- **Industries listing:** "Battery Solutions by Industry"
- **Products listing:** "Industrial Battery Products — Exide Authorized Dealer"
- **About** and **Contact** pages should also be audited for H1 presence in the same pass

### 1.3 OpenGraph image infrastructure
- Add default OG image path (`/og-default.jpg`) in `lib/seo.ts`
- Wire up the existing `image` field in `PageSEO` interface — it is already declared but never passed to the returned Metadata object. Connect it to `openGraph.images` and `twitter.images`.
- Add Twitter card image support alongside OpenGraph

### 1.6 OpenGraph type differentiation
Blog post pages should emit `og:type: "article"` with `article:published_time` and `article:section` instead of the current hardcoded `type: "website"`. Extend `generatePageMetadata()` to accept an optional `type` parameter (default "website").

### 1.4 Canonical URL consistency
Verify every page has explicit canonical URL. Ensure no trailing slash inconsistencies.

### 1.5 Meta robots refinement
- Add `index, follow` explicitly to all public pages
- Add `noindex` to utility pages (`/get-quote`, `/book-service`) via `robots: { index: false, follow: false }` in each page's exported `metadata` constant (Next.js Metadata API)
- **Also remove `/get-quote` and `/book-service` from `app/sitemap.ts` staticRoutes** — `noindex` + sitemap inclusion sends contradictory signals to crawlers

---

## Section 2: Local SEO Optimization

### 2.1 Enhanced LocalBusiness schema
Expand `lib/schema.ts` organization schema:
- `OpeningHoursSpecification`: Replace the current `openingHours: "Mo-Sa 09:00-20:00"` string with structured `openingHoursSpecification` array. **Note:** Current schema says 09:00-20:00 — verify actual business hours before implementation. Use verified hours consistently.
- `ContactPoint`: sales department + service department (telephone, contactType)
- `areaServed`: multiple — Hyderabad, Secunderabad, Telangana
- `priceRange`: "$$"
- `paymentAccepted`, `currenciesAccepted`: INR
- `hasMap`: Google Maps link

### 2.2 Geo-targeted meta tags
These tags are NOT supported by the Next.js Metadata API. They must be added as raw `<meta>` tags in the root layout JSX via a `<head>` block within the `<html>` element in `app/layout.tsx`:
- `geo.region`: "IN-TG"
- `geo.placename`: "Hyderabad"
- `geo.position`: from COMPANY coordinates
- `ICBM`: same coordinates

### 2.3 Location-specific landing page
Create `/battery-dealer-hyderabad`:
- Local-focused H1 and content targeting "Exide battery dealer Hyderabad", "industrial battery dealer near me"
- Service area list: Hyderabad zones, Secunderabad, Rangareddy, etc.
- LocalBusiness JSON-LD specific to this page
- Internal links to products/services
- Unique metadata optimized for local queries

### 2.4 NAP consistency
Verify Name, Address, Phone rendered identically everywhere: footer, contact page, schema, landing page. All must reference `COMPANY` constant.

---

## Section 3: Advanced Structured Data

### 3.1 Product page enhancements
- **FAQ schema per product:** Add `faqs` field to Product type in `lib/types.ts`. Populate product-specific FAQs in `lib/constants.ts`. Render FAQ section + inject faqSchema on each product page.
- **AggregateRating:** Deferred — Google's structured data guidelines require ratings from a verified third-party platform (Google Business Profile, Justdial, etc.), not self-authored static testimonials. Implementing from static constants data risks a manual action from Google. Revisit once Google Business Profile is set up and has verified reviews.
- **Brand/Manufacturer:** Ensure Exide branding explicit in product schema.

### 3.2 Service schema expansion
- Each service gets `areaServed` (Hyderabad, Telangana), `provider` (Organization ref), `serviceType`
- **HowTo schema:** For applicable services (installation, testing), add step-by-step process. Add `steps` field to Service type for services that warrant it.

### 3.3 Breadcrumb schema improvements
- Render breadcrumbs on every page including homepage
- 3-level depth on dynamic pages: Home > Products > Product Name

### 3.4 WebSite schema — remove broken SearchAction
The current `websiteSchema()` includes a `SearchAction` pointing to `${COMPANY.url}/search?q={search_term_string}`. This site has no `/search` route and no search functionality — the action is actively broken and will fail Google's Rich Results Test. **Remove the `potentialAction` / `SearchAction` from `websiteSchema()`.**

### 3.5 Article schema enrichment
- Add `dateModified` field to BlogPost type
- Add `wordCount` to article schema
- Add `articleSection` (category mapping)
- ~~`speakable` schema~~ — **Low priority / optional.** This is a Google-specific extension in limited beta, relevant only to Google Assistant/Google News surfaces. Minimal practical impact for a B2B industrial battery dealer. Skip unless explicitly requested later.

---

## Section 4: Content Architecture & New Pages

### 4.1 Service detail pages (`/services/[slug]`)
Create individual pages for each of the 8 services. Each page includes:
- Dedicated H1, detailed description, process steps
- Applicable products, FAQ section with schema
- CTA to book service
- Unique metadata

**Type changes:** Add `detailedDescription`, `faqs`, `steps` to Service type (`slug` already exists in the type). Add `generateStaticParams()`.

### 4.2 Blog category pages (`/blog/category/[slug]`)
Group blog posts by category:
- `/blog/category/battery-technology`
- `/blog/category/maintenance-guides`
- `/blog/category/industry-insights`

Add categories constant, `generateStaticParams()`. Each category page gets unique metadata and category-specific H1.

### 4.3 Expanded blog content
Add 10-15 new blog posts to `lib/constants.ts` targeting high-intent keywords:
- "How to choose the right industrial battery for your business"
- "Industrial battery maintenance checklist"
- "UPS battery replacement guide for Hyderabad businesses"
- "Exide tubular battery vs flat plate: which is right for you"
- "Battery backup solutions for telecom towers in Telangana"
- "Solar battery storage for commercial buildings in Hyderabad"
- Industry-specific guides for each served industry
- Cost/ROI focused articles

Each post: 800-1200 words, proper markdown, category, tags, readTime, dateModified.

### 4.4 Sitemap expansion
Update `app/sitemap.ts` to include:
- Service detail pages (priority 0.85)
- Blog category pages (priority 0.6)
- Location landing page (priority 0.95)
- Remove `/get-quote` and `/book-service` from staticRoutes (noindex pages should not be in sitemap)
- **`lastModified` strategy:** Current sitemap uses `new Date()` for static pages, which re-emits today's date on every build (misleading to crawlers). Use a hardcoded release date constant (e.g., `SITE_LAST_UPDATED = "2026-03-17"`) for static pages, and `post.date` / `post.dateModified` for blog posts.

---

## Section 5: Internal Linking & Content Hub Strategy

### 5.1 Hub-and-spoke model
- **Product hub:** `/products` > product pages > linked industries + services + blog
- **Industry hub:** `/industries` > industry pages > linked products + blog
- **Service hub:** `/services` > service detail pages > linked products + booking CTA
- **Blog hub:** `/blog` > category pages > posts > linked products/services/industries

Every piece of content links to 2-3 related pieces.

### 5.2 Related content fields in constants
Extend data models:
- **Products:** add `relatedServices: string[]` and `relatedBlogSlugs: string[]`
- **Services:** add `relatedProducts: string[]` and `relatedBlogSlugs: string[]`
- **BlogPost:** add `relatedProducts: string[]`, `relatedServices: string[]`, `relatedIndustries: string[]`
- **Industries:** add `relatedBlogSlugs: string[]` (already has `recommendedProducts`)

### 5.3 Related content sections on every dynamic page
Render at the bottom of each page:
- **Product page:** "Related Services" + "Related Articles"
- **Blog post:** "Related Products" + "Explore the Industry"
- **Service page:** "Products We Service" + "Related Guides"
- **Industry page:** (has recommended products) + "Related Articles"

Link-rich sections with title + short description.

### 5.4 Contextual in-content links
Blog post markdown content includes inline links to product and service pages where naturally relevant.

---

## Section 6: Performance & Crawl Optimization

### 6.1 Image optimization
- Add `priority` prop to above-the-fold hero images (LCP)
- Verify `sizes` attribute on all `next/image` usages
- Ensure descriptive, keyword-relevant alt text on every image

### 6.2 Preconnect & DNS prefetch
Verify preconnect to Google Fonts handled by next/font. Add dns-prefetch for any external resources.

### 6.3 Metadata performance hints
- `metadataBase` is already set in root layout (`metadataBase: new URL(COMPANY.url)`) — no change needed
- Add `formatDetection` control to root layout metadata
- Add `viewport` with `themeColor` for mobile browser chrome

### 6.4 Robots.txt refinement
- Disallow `/_next/` static assets
- Disallow `/api/` if exists
- Add `Crawl-delay` for polite crawling

### 6.5 Sitemap priority tuning
| Page Type | Priority |
|-----------|----------|
| Home | 1.0 |
| Location landing | 0.95 |
| Products (detail) | 0.9 |
| Services (detail) | 0.85 |
| Industries (detail) | 0.8 |
| Blog posts | 0.7 |
| Blog categories | 0.6 |
| FAQ | 0.5 |
| Utility (quote/booking) | excluded |

### 6.6 Page load optimizations
- Defer non-critical Framer Motion animations
- Add `fetchPriority="high"` on hero images
- Verify no layout shift from animation entry states (CLS)

---

## Section 7: Keyword Strategy & On-Page SEO

### 7.1 Title tag optimization
**Important:** The root layout uses the title template `%s | Nektra Energy Solutions`, which auto-appends the brand suffix. Page-level titles passed to `generatePageMetadata()` must **omit** the `| Nektra...` suffix to avoid double-branding (e.g., "Title | Nektra | Nektra Energy Solutions"). The homepage should use `title.absolute` to set the full title without the template.

Front-load primary keywords in all titles (brand suffix auto-appended by template):
| Page | Title (passed to generatePageMetadata) | Rendered |
|------|-------|---------|
| Home | `title.absolute`: "Exide Industrial Battery Dealer in Hyderabad \| Nektra Energy Solutions" | Exide Industrial Battery Dealer in Hyderabad \| Nektra Energy Solutions |
| Products | "Industrial Batteries — Exide Authorized Dealer" | Industrial Batteries — Exide Authorized Dealer \| Nektra Energy Solutions |
| Product detail | "{Name} — Exide Industrial Battery Hyderabad" | {Name} — Exide Industrial Battery Hyderabad \| Nektra Energy Solutions |
| Services | "Industrial Battery Services in Hyderabad" | Industrial Battery Services in Hyderabad \| Nektra Energy Solutions |
| Service detail | "{Name} — Battery Service Hyderabad" | {Name} — Battery Service Hyderabad \| Nektra Energy Solutions |
| Industries | "Battery Solutions by Industry" | Battery Solutions by Industry \| Nektra Energy Solutions |
| Blog | "Industrial Battery Guides & Insights" | Industrial Battery Guides & Insights \| Nektra Energy Solutions |
| Contact | "Contact Exide Battery Dealer Hyderabad" | Contact Exide Battery Dealer Hyderabad \| Nektra Energy Solutions |
| FAQ | "Industrial Battery FAQ — Exide Dealer Hyderabad" | Industrial Battery FAQ — Exide Dealer Hyderabad \| Nektra Energy Solutions |

### 7.2 Meta description optimization
All descriptions: 150-160 chars, include primary keyword + "Hyderabad"/"Telangana" + "Exide" where natural + action CTA ("Get a free quote", "Call now", "Explore solutions").

### 7.3 Heading keyword integration
- Product H2s: "Key Features of {Product} Batteries" not just "Key Features"
- Industry H2s: "Battery Solutions for {Industry} in Hyderabad"
- Service H2s: include service type + location context

### 7.4 URL structure
Keep clean URLs (no location in slugs). Location context in content and schema only.

### 7.5 Long-tail keyword targeting via blog
Each blog post targets a specific long-tail query cluster:
- "industrial battery maintenance tips Hyderabad"
- "exide tubular battery price for UPS"
- "battery backup for hospitals in Telangana"
- "forklift battery replacement cost India"
- Woven into titles, H1s, first paragraphs, and meta descriptions.

---

## Files Modified

### Existing files to modify:
- `lib/types.ts` — Add fields: Product.faqs, Product.relatedServices, Product.relatedBlogSlugs, Service.detailedDescription, Service.faqs, Service.steps, Service.relatedProducts, Service.relatedBlogSlugs, BlogPost.dateModified, BlogPost.relatedProducts, BlogPost.relatedServices, BlogPost.relatedIndustries, Industry.relatedBlogSlugs (Note: Service.slug already exists)
- `lib/constants.ts` — Populate all new fields, add 10-15 blog posts, add blog categories, add service details, add product FAQs, add location landing page content
- `lib/seo.ts` — Wire up existing dead `image` field to OG/Twitter images, add OG type parameter, add hreflang support
- `lib/schema.ts` — LocalBusiness enhancements (OpeningHoursSpecification, ContactPoint, areaServed, priceRange), HowTo, remove broken SearchAction, article enrichment
- `lib/icons.ts` — New icons for service detail pages if needed
- `app/layout.tsx` — Geo meta tags (raw JSX `<head>` block), formatDetection, themeColor
- `app/page.tsx` — Add metadata export with `title.absolute`
- `app/sitemap.ts` — Add service pages, category pages, location page, priority tuning, remove `/get-quote` and `/book-service`
- `app/robots.ts` — Disallow rules, crawl-delay
- `app/products/[slug]/page.tsx` — FAQ section, related content, heading keywords
- `app/industries/[slug]/page.tsx` — Related articles section, heading keywords
- `app/blog/[slug]/page.tsx` — Related content section, article schema enrichment, OG type "article"
- `app/blog/page.tsx` — Add H1
- `app/services/page.tsx` — Add H1
- `app/faq/page.tsx` — Add H1
- `app/industries/page.tsx` — Add H1
- `app/products/page.tsx` — Add H1
- `app/about/page.tsx` — Audit H1, keyword-optimize metadata
- `app/contact/page.tsx` — Audit H1, keyword-optimize metadata
- `app/get-quote/page.tsx` — Add `robots: { index: false, follow: false }` to metadata
- `app/book-service/page.tsx` — Add `robots: { index: false, follow: false }` to metadata

### New files to create:
- `app/services/[slug]/page.tsx` — Service detail pages
- `app/blog/category/[slug]/page.tsx` — Blog category pages
- `app/battery-dealer-hyderabad/page.tsx` — Location landing page

### New components:
- `components/ui/RelatedContent.tsx` — Reusable related content section
- `components/ui/ProductFAQ.tsx` — Product FAQ section with schema

### Notes on existing components:
- `components/seo/JsonLd.tsx` already accepts arbitrary JSON-LD objects (`Record<string, unknown>`) — no changes needed for new schema types

---

## Success Criteria

1. Every public page has unique title, description, canonical URL, and OG image infrastructure
2. Every public page has appropriate JSON-LD structured data
3. Homepage ranks for "Exide industrial battery dealer Hyderabad"
4. Location landing page targets "battery dealer near me" + Hyderabad variants
5. All dynamic pages have H1 with target keywords
6. Internal link graph connects every page to 2-3 related pages
7. Sitemap includes all pages with appropriate priorities
8. Blog content targets 15-20 long-tail keyword clusters
9. No CLS issues from animations
10. Build completes without errors (`npm run build`)
