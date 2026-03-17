# Full-Stack SEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement comprehensive SEO optimization for Nektra Energy Solutions — technical fixes, local SEO, structured data, new content pages, internal linking, performance, and keyword strategy.

**Architecture:** Data-driven static Next.js 15 site. All content lives in `lib/constants.ts` with types in `lib/types.ts`. SEO layer uses `lib/seo.ts` (metadata), `lib/schema.ts` (JSON-LD), and `components/seo/JsonLd.tsx`. Pages consume constants and render static HTML via `generateStaticParams()`. No backend.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript strict mode, Tailwind CSS 3, Framer Motion

**Spec:** `docs/superpowers/specs/2026-03-17-full-stack-seo-optimization-design.md`

---

## File Structure

### Files to modify:
| File | Responsibility |
|------|---------------|
| `lib/types.ts` | Add new fields to Product, Service, BlogPost, Industry types |
| `lib/constants.ts` | Populate new fields, add blog posts, categories, service details, product FAQs |
| `lib/seo.ts` | Wire up image field, add OG type param, default OG image |
| `lib/schema.ts` | LocalBusiness enhancements, remove SearchAction, HowTo, article enrichment, service expansion |
| `app/layout.tsx` | Geo meta tags, formatDetection, themeColor |
| `app/page.tsx` | Add metadata export |
| `app/sitemap.ts` | Add new routes, remove utility pages, priority tuning, lastModified strategy |
| `app/robots.ts` | Disallow rules, crawl-delay |
| `app/services/page.tsx` | Add H1, keyword-optimize metadata |
| `app/blog/page.tsx` | Add H1, keyword-optimize metadata |
| `app/blog/[slug]/page.tsx` | OG type "article", related content, article schema enrichment |
| `app/faq/page.tsx` | Add H1, keyword-optimize metadata |
| `app/products/page.tsx` | Add H1, keyword-optimize metadata |
| `app/products/[slug]/page.tsx` | FAQ section, related content, heading keywords |
| `app/industries/page.tsx` | Add H1, keyword-optimize metadata |
| `app/industries/[slug]/page.tsx` | Related articles section, heading keywords |
| `app/about/page.tsx` | Audit H1, keyword-optimize metadata |
| `app/contact/page.tsx` | Audit H1, keyword-optimize metadata |
| `app/get-quote/page.tsx` | Add noindex robots |
| `app/book-service/page.tsx` | Add noindex robots |

### Files to create:
| File | Responsibility |
|------|---------------|
| `app/services/[slug]/page.tsx` | Individual service detail pages |
| `app/blog/category/[slug]/page.tsx` | Blog category archive pages |
| `app/battery-dealer-hyderabad/page.tsx` | Local SEO landing page |
| `components/ui/RelatedContent.tsx` | Reusable related content link section |
| `components/ui/ProductFAQ.tsx` | Product FAQ section with JSON-LD schema |

---

## Task 1: Type System Extensions

**Files:**
- Modify: `lib/types.ts`

- [ ] **Step 1: Add new fields to Product type**

In `lib/types.ts`, add to the `Product` interface after `relatedIndustries`:

```typescript
  faqs?: { question: string; answer: string }[];
  relatedServices?: string[];
  relatedBlogSlugs?: string[];
```

- [ ] **Step 2: Add new fields to Service type**

Add after `highlight?`:

```typescript
  detailedDescription?: string;
  faqs?: { question: string; answer: string }[];
  steps?: { name: string; description: string }[];
  serviceType?: string;
  relatedProducts?: string[];
  relatedBlogSlugs?: string[];
```

- [ ] **Step 3: Add new fields to BlogPost type**

Add after `category`:

```typescript
  dateModified?: string;
  tags?: string[];
  relatedProducts?: string[];
  relatedServices?: string[];
  relatedIndustries?: string[];
```

- [ ] **Step 4: Add new fields to Industry type**

Add after `icon`:

```typescript
  relatedBlogSlugs?: string[];
```

- [ ] **Step 5: Add BlogCategory type**

Add after the Industry interface:

```typescript
export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}
```

- [ ] **Step 6: Verify build**

Run: `npx tsc --noEmit`
Expected: PASS (all new fields are optional, so existing constants still type-check)

- [ ] **Step 7: Commit**

```bash
git add lib/types.ts
git commit -m "feat(seo): extend type system with SEO-related fields for products, services, blog, industries"
```

---

## Task 2: SEO Utility Enhancements (`lib/seo.ts`)

**Files:**
- Modify: `lib/seo.ts`

- [ ] **Step 1: Wire up image field and add type/ogType parameters**

Replace the entire `lib/seo.ts` with:

```typescript
import { Metadata } from "next";
import { COMPANY } from "./constants";

const baseUrl = COMPANY.url;
const DEFAULT_OG_IMAGE = "/og-default.jpg";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
}: PageSEO): Metadata {
  const url = `${baseUrl}${path}`;
  const ogImage = image || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description,
      url,
      siteName: COMPANY.name,
      locale: "en_IN",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        section,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${COMPANY.name}`,
      description,
      images: [ogImage],
    },
  };
}
```

- [ ] **Step 2: Verify build**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add lib/seo.ts
git commit -m "feat(seo): wire up OG image field, add type/article support to generatePageMetadata"
```

---

## Task 3: Schema.ts Enhancements

**Files:**
- Modify: `lib/schema.ts`

- [ ] **Step 1: Enhance organizationSchema with LocalBusiness fields**

Replace the `organizationSchema()` function:

```typescript
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: COMPANY.name,
    description: `Authorized Exide Industrial Battery dealer in Hyderabad with 35+ years experience. ${COMPANY.tagline}`,
    url: COMPANY.url,
    telephone: COMPANY.phones[0],
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chandanagar",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.coordinates.lat,
      longitude: COMPANY.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phones[0],
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phones[1] || COMPANY.phones[0],
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
    ],
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Secunderabad" },
      { "@type": "State", name: "Telangana" },
    ],
    sameAs: COMPANY.socials?.map((s) => s.url) ?? [],
    priceRange: "$$",
    paymentAccepted: "Cash, Bank Transfer, UPI",
    currenciesAccepted: "INR",
    hasMap: `https://www.google.com/maps/search/?api=1&query=${COMPANY.coordinates.lat},${COMPANY.coordinates.lng}`,
  };
}
```

- [ ] **Step 2: Remove broken SearchAction from websiteSchema**

Replace `websiteSchema()`:

```typescript
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.url,
  };
}
```

- [ ] **Step 3: Enhance serviceSchema with serviceType and expanded areaServed**

Replace `serviceSchema()`:

```typescript
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    ...(service.serviceType && { serviceType: service.serviceType }),
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "State", name: "Telangana" },
    ],
  };
}
```

- [ ] **Step 4: Add howToSchema function**

Add after `serviceSchema`:

```typescript
export function howToSchema(service: Service) {
  if (!service.steps || service.steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How ${service.name} Works`,
    description: service.description,
    step: service.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.description,
    })),
  };
}
```

- [ ] **Step 5: Enhance articleSchema with dateModified, wordCount, articleSection**

Replace `articleSchema()`:

```typescript
export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    ...(post.dateModified && { dateModified: post.dateModified }),
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
  };
}
```

- [ ] **Step 6: Add productFaqSchema function**

Add after `articleSchema`:

```typescript
export function productFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
```

- [ ] **Step 7: Verify build**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add lib/schema.ts
git commit -m "feat(seo): enhance LocalBusiness schema, remove broken SearchAction, add HowTo and product FAQ schemas"
```

---

## Task 4: Root Layout & Global SEO

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add geo meta tags and formatDetection to root layout**

Add a `<head>` block inside the `<html>` element, before `<body>`:

```tsx
<head>
  <meta name="geo.region" content="IN-TG" />
  <meta name="geo.placename" content="Hyderabad" />
  <meta name="geo.position" content={`${COMPANY.coordinates.lat};${COMPANY.coordinates.lng}`} />
  <meta name="ICBM" content={`${COMPANY.coordinates.lat}, ${COMPANY.coordinates.lng}`} />
</head>
```

- [ ] **Step 2: Add formatDetection and themeColor to metadata export**

Add to the existing `metadata` export object:

```typescript
formatDetection: {
  email: false,
  address: false,
  telephone: false,
},
other: {
  "theme-color": "#0A0A0F",
},
```

- [ ] **Step 3: Verify build**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(seo): add geo meta tags, formatDetection, themeColor to root layout"
```

---

## Task 5: Homepage Metadata + noindex Utility Pages

**Files:**
- Modify: `app/page.tsx`, `app/get-quote/page.tsx`, `app/book-service/page.tsx`

- [ ] **Step 1: Add metadata to homepage**

Add at the top of `app/page.tsx` (after imports):

```typescript
import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Exide Industrial Battery Dealer in Hyderabad | Nektra Energy Solutions",
  },
  description:
    "Authorized Exide industrial battery dealer in Hyderabad. 35+ years of expertise in forklift batteries, traction batteries, installation, AMC & Pan-Telangana service. Get a free quote today.",
  openGraph: {
    title: "Exide Industrial Battery Dealer in Hyderabad | Nektra Energy Solutions",
    description:
      "Authorized Exide industrial battery dealer in Hyderabad. 35+ years of expertise in forklift batteries, traction batteries, installation, AMC & Pan-Telangana service.",
    url: COMPANY.url,
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Nektra Energy Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exide Industrial Battery Dealer in Hyderabad | Nektra Energy Solutions",
    description:
      "Authorized Exide industrial battery dealer in Hyderabad. 35+ years of expertise.",
    images: ["/og-default.jpg"],
  },
};
```

- [ ] **Step 2: Add noindex to get-quote page**

In `app/get-quote/page.tsx`, add `robots` to the metadata:

```typescript
export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Get a Quote — Custom Battery Solutions",
    description:
      "Request a custom quote for Exide industrial batteries. Tell us your requirements and get a tailored solution with competitive pricing within 24 hours.",
    path: "/get-quote",
  }),
  robots: { index: false, follow: false },
};
```

- [ ] **Step 3: Add noindex to book-service page**

Same pattern in `app/book-service/page.tsx`:

```typescript
export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Book a Service — Battery Installation, Testing & Maintenance",
    description:
      "Book battery installation, testing, replacement, AMC, or emergency service. Free diagnostics and installation with every Exide battery from Nektra Energy Solutions.",
    path: "/book-service",
  }),
  robots: { index: false, follow: false },
};
```

- [ ] **Step 4: Verify build**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/get-quote/page.tsx app/book-service/page.tsx
git commit -m "feat(seo): add homepage metadata with title.absolute, noindex get-quote and book-service"
```

---

## Task 6: H1 Tags and Keyword-Optimized Metadata on Listing Pages

**Files:**
- Modify: `app/services/page.tsx`, `app/blog/page.tsx`, `app/faq/page.tsx`, `app/products/page.tsx`, `app/industries/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`

- [ ] **Step 1: Add H1 to services page**

In `app/services/page.tsx`, add an H1 before the `SectionHeading`. Replace the `SectionHeading` block:

```tsx
<h1 className="sr-only">Industrial Battery Services in Hyderabad</h1>
<SectionHeading
  overline="Our Services"
  title="Complete Battery Service Solutions"
  subtitle="From free installation to emergency response — we've got your batteries covered across Telangana."
/>
```

Update metadata title:
```typescript
title: "Industrial Battery Services in Hyderabad — Installation, AMC & Emergency",
description:
  "Expert industrial battery services in Hyderabad: free installation, free diagnostics, AMC with 5-year warranty, and emergency response across Telangana. Call now.",
```

- [ ] **Step 2: Add H1 to blog page**

In `app/blog/page.tsx`:

```tsx
<h1 className="sr-only">Industrial Battery Guides &amp; Insights</h1>
<SectionHeading
  overline="Our Blog"
  title="Expert Insights & Guides"
  subtitle="Practical knowledge from 35+ years of industrial battery expertise."
/>
```

Update metadata:
```typescript
title: "Industrial Battery Guides & Insights",
description:
  "Expert articles on forklift batteries, maintenance tips, DIN vs BS standards, gel vs flooded comparisons, and industry insights from Hyderabad's trusted Exide dealer.",
```

- [ ] **Step 3: Add H1 to FAQ page**

In `app/faq/page.tsx`:

```tsx
<h1 className="sr-only">Industrial Battery FAQ — Exide Dealer Hyderabad</h1>
<SectionHeading
  overline="FAQ"
  title="Frequently Asked Questions"
  subtitle="Everything you need to know about industrial batteries, our products, and services."
/>
```

Update metadata:
```typescript
title: "Industrial Battery FAQ — Exide Dealer Hyderabad",
description:
  "Frequently asked questions about Exide industrial batteries, warranty, AMC, DIN vs BS standards, gel vs flooded, and maintenance. Hyderabad's trusted battery experts.",
```

- [ ] **Step 4: Add H1 to products page**

In `app/products/page.tsx`:

```tsx
<h1 className="sr-only">Industrial Battery Products — Exide Authorized Dealer</h1>
<SectionHeading
  overline="Our Products"
  title="Exide Industrial Battery Range"
  subtitle="The complete range of traction and motive power batteries for every industrial application."
/>
```

Update metadata:
```typescript
title: "Industrial Batteries — Exide Authorized Dealer",
description:
  "Complete range of Exide industrial batteries: Flooded Tubular, Gel, HSP Classic, Gen-X, BCI Range. DIN & BS standards for all forklift brands. Hyderabad dealer.",
```

- [ ] **Step 5: Add H1 to industries page**

In `app/industries/page.tsx`:

```tsx
<h1 className="sr-only">Battery Solutions by Industry</h1>
<SectionHeading
  overline="Industries We Serve"
  title="Battery Solutions for Every Industry"
  subtitle="Tailored industrial battery solutions for the unique demands of each sector."
/>
```

Update metadata:
```typescript
title: "Battery Solutions by Industry",
description:
  "Industrial battery solutions for pharmaceutical, manufacturing, logistics, food processing, steel, construction, airports, e-commerce, automotive, and textile industries in Hyderabad.",
```

- [ ] **Step 6: Audit about page — update metadata keywords**

`app/about/page.tsx` already has an effective H1 via `SectionHeading` ("35+ Years of Powering Indian Industry"). Add sr-only H1:

```tsx
<h1 className="sr-only">About Nektra Energy Solutions — 35+ Years of Industrial Battery Expertise</h1>
<SectionHeading
  overline="About Us"
  title="35+ Years of Powering Indian Industry"
  subtitle="From a single dealership to Telangana's most trusted industrial battery partner."
/>
```

Update metadata:
```typescript
title: "About Us — 35+ Years of Industrial Battery Expertise in Hyderabad",
description:
  "Learn about Nektra Energy Solutions, authorized Exide industrial battery dealer in Hyderabad with 35+ years experience serving 10+ industries across Telangana.",
```

- [ ] **Step 7: Audit contact page — update metadata keywords**

`app/contact/page.tsx` — add sr-only H1:

```tsx
<h1 className="sr-only">Contact Exide Battery Dealer Hyderabad</h1>
<SectionHeading
  overline="Contact Us"
  title="Get in Touch"
  subtitle="We're here to help with all your industrial battery needs."
/>
```

Update metadata:
```typescript
title: "Contact Exide Battery Dealer Hyderabad",
description:
  "Contact Nektra Energy Solutions for Exide industrial battery enquiries, service booking, and quotes. Chandanagar, Hyderabad. Call +91 9963739107. Free consultation.",
```

- [ ] **Step 8: Verify build**

Run: `npm run build`
Expected: PASS, all pages build successfully

- [ ] **Step 9: Commit**

```bash
git add app/services/page.tsx app/blog/page.tsx app/faq/page.tsx app/products/page.tsx app/industries/page.tsx app/about/page.tsx app/contact/page.tsx
git commit -m "feat(seo): add H1 tags and keyword-optimized metadata to all listing pages"
```

---

## Task 7: Sitemap & Robots Overhaul

**Files:**
- Modify: `app/sitemap.ts`, `app/robots.ts`

- [ ] **Step 1: Rewrite sitemap with priority tuning and new routes**

Replace `app/sitemap.ts`:

```typescript
import { MetadataRoute } from "next";
import { PRODUCTS, INDUSTRIES, BLOG_POSTS, SERVICES, COMPANY } from "@/lib/constants";
import { BLOG_CATEGORIES } from "@/lib/constants";

const SITE_LAST_UPDATED = "2026-03-17";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;
  const lastMod = new Date(SITE_LAST_UPDATED);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/products`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/battery-dealer-hyderabad`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.95 },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...categoryRoutes,
  ];
}
```

- [ ] **Step 2: Enhance robots.txt**

Replace `app/robots.ts`:

```typescript
import { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
```

- [ ] **Step 3: Verify build**

Run: `npx tsc --noEmit`
Expected: Will fail until BLOG_CATEGORIES is created in constants (Task 8). That's expected — commit sitemap/robots now, fix import after Task 8.

Note: Comment out the BLOG_CATEGORIES import temporarily to verify the rest compiles, or do this task after Task 8.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat(seo): overhaul sitemap with priority tuning and new routes, enhance robots.txt"
```

---

## Task 8: Constants Data — Blog Categories, Service Details, Product FAQs

**Files:**
- Modify: `lib/constants.ts`

This is the largest task — adding all the new content data.

- [ ] **Step 1: Add BLOG_CATEGORIES constant**

Add after the BLOG_POSTS array:

```typescript
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "battery-technology",
    name: "Battery Technology",
    description: "Deep dives into industrial battery technology, comparisons, and innovations.",
  },
  {
    slug: "maintenance-guides",
    name: "Maintenance Guides",
    description: "Practical guides for maintaining and optimizing your industrial battery fleet.",
  },
  {
    slug: "industry-insights",
    name: "Industry Insights",
    description: "Battery solutions and best practices for specific industries.",
  },
  {
    slug: "buying-guides",
    name: "Buying Guides",
    description: "How to choose the right industrial battery for your business needs.",
  },
];
```

Import `BlogCategory` at the top of constants.ts.

- [ ] **Step 2: Add `dateModified`, `tags`, and related fields to existing blog posts**

For each of the 5 existing blog posts, add the new optional fields. Example for the first post:

```typescript
{
  slug: "how-to-choose-forklift-battery",
  // ... existing fields ...
  dateModified: "2026-03-01",
  tags: ["forklift battery", "buying guide", "warehouse"],
  relatedProducts: ["motive-power-flooded-tubular", "motive-power-gel"],
  relatedServices: ["battery-installation", "testing-diagnostics"],
  relatedIndustries: ["warehouse-logistics", "engineering-manufacturing"],
},
```

Do this for all 5 existing posts with appropriate cross-references.

- [ ] **Step 3: Add service detail fields to existing SERVICES entries**

For each of the 9 services, add `detailedDescription`, `serviceType`, `faqs`, `steps` (where applicable), `relatedProducts`, `relatedBlogSlugs`. Example:

```typescript
{
  slug: "battery-installation",
  name: "Battery Installation",
  // ... existing fields ...
  serviceType: "BatteryInstallation",
  detailedDescription: "Our professional battery installation service ensures your new Exide industrial battery is fitted correctly from day one. Our Exide-trained technicians handle everything — from removing the old battery to configuring connectors, performing initial charging, and training your operators on day-to-day maintenance. Every installation includes a post-installation inspection to verify optimal performance. This service is completely free with every battery purchase from Nektra Energy Solutions.",
  faqs: [
    { question: "Is battery installation really free?", answer: "Yes, professional installation is completely free with every battery purchase from Nektra Energy Solutions. Our trained technicians handle the complete setup." },
    { question: "How long does installation take?", answer: "Most industrial battery installations are completed within 2-4 hours, including connector setup, initial charging configuration, and operator training." },
    { question: "Do you install batteries from other brands?", answer: "Our free installation service is for Exide batteries purchased from us. For other brands, we offer paid installation services." },
  ],
  steps: [
    { name: "Assessment", description: "Inspect the equipment and battery compartment to ensure compatibility" },
    { name: "Old Battery Removal", description: "Safely disconnect and remove the existing battery" },
    { name: "New Battery Installation", description: "Place and secure the new Exide battery with proper fitment" },
    { name: "Connector Setup", description: "Connect and verify all cables and connectors" },
    { name: "Initial Charging", description: "Configure the charger and begin the first charge cycle" },
    { name: "Operator Training", description: "Train operators on daily maintenance and safety procedures" },
  ],
  relatedProducts: ["motive-power-flooded-tubular", "motive-power-gel", "hsp-classic"],
  relatedBlogSlugs: ["how-to-choose-forklift-battery"],
},
```

Repeat for all 9 services with appropriate content. Services like `testing-diagnostics`, `amc`, `emergency-service` should also have `steps`. Simpler services like `doorstep-delivery` and `old-battery-exchange` can omit `steps`.

- [ ] **Step 4: Add product FAQs and related fields to existing PRODUCTS entries**

For each product, add `faqs`, `relatedServices`, `relatedBlogSlugs`. Example:

```typescript
{
  slug: "motive-power-flooded-tubular",
  // ... existing fields ...
  faqs: [
    { question: "What is the warranty on Motive Power Flooded Tubular batteries?", answer: "With AMC: 5-year full replacement warranty. Without AMC: 2-year full warranty + 3-year pro-rata warranty." },
    { question: "Which forklift brands are compatible?", answer: "Compatible with all major forklift brands including Toyota, Linde, Still, Jungheinrich, Hyster, Yale, Crown, BT, and Indian brands like Godrej and Voltas." },
    { question: "How often does this battery need maintenance?", answer: "We recommend topping up with distilled water every 7-10 days and a full equalizing charge every 5-10 cycles for optimal performance." },
  ],
  relatedServices: ["battery-installation", "amc", "testing-diagnostics"],
  relatedBlogSlugs: ["how-to-choose-forklift-battery", "flooded-vs-gel-batteries"],
},
```

Repeat for all 6 products.

- [ ] **Step 5: Add relatedBlogSlugs to existing INDUSTRIES entries**

For each industry, add:

```typescript
relatedBlogSlugs: ["how-to-choose-forklift-battery"],
```

Match blog slugs to relevant industries.

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add lib/constants.ts lib/types.ts
git commit -m "feat(seo): add blog categories, service details, product FAQs, and cross-reference fields"
```

---

## Task 9: New Blog Posts (10-15 posts)

**Files:**
- Modify: `lib/constants.ts`

- [ ] **Step 1: Add 12 new blog posts to BLOG_POSTS array**

Each post needs: slug, title, excerpt, content (800-1200 words), date, readTime, category, dateModified, tags, relatedProducts, relatedServices, relatedIndustries.

Target keyword clusters:

1. `"industrial-battery-maintenance-checklist"` — "Industrial Battery Maintenance Checklist: The Complete Guide"
2. `"ups-battery-replacement-guide-hyderabad"` — "UPS Battery Replacement Guide for Hyderabad Businesses"
3. `"exide-tubular-vs-flat-plate-batteries"` — "Exide Tubular vs Flat Plate Batteries: Which Is Right for You?"
4. `"battery-backup-telecom-towers-telangana"` — "Battery Backup Solutions for Telecom Towers in Telangana"
5. `"solar-battery-storage-commercial-hyderabad"` — "Solar Battery Storage for Commercial Buildings in Hyderabad"
6. `"forklift-battery-safety-best-practices"` — "Forklift Battery Safety: 10 Best Practices for Your Warehouse"
7. `"industrial-battery-roi-calculator"` — "Industrial Battery ROI: How to Calculate Total Cost of Ownership"
8. `"gel-battery-advantages-cleanroom"` — "Why Gel Batteries Are Essential for Cleanroom and Food-Grade Facilities"
9. `"battery-amc-benefits-explained"` — "Battery AMC Explained: Why Annual Maintenance Contracts Save You Money"
10. `"warehouse-electrification-guide"` — "Warehouse Electrification Guide: Transitioning from IC to Electric Forklifts"
11. `"battery-charging-best-practices"` — "Industrial Battery Charging Best Practices: Maximize Battery Life"
12. `"exide-battery-dealer-hyderabad-why-choose"` — "Why Choose an Authorized Exide Dealer in Hyderabad?"

Each post should have 800-1200 words of content with proper markdown ## headings, lists, and tables where relevant. Include inline references to products/services/industries naturally in the content.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add lib/constants.ts
git commit -m "feat(seo): add 12 new blog posts targeting high-intent keyword clusters"
```

---

## Task 10: Reusable RelatedContent Component

**Files:**
- Create: `components/ui/RelatedContent.tsx`

- [ ] **Step 1: Create the component**

```typescript
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight } from "lucide-react";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
}

interface RelatedContentProps {
  heading: string;
  items: RelatedItem[];
}

export default function RelatedContent({ heading, items }: RelatedContentProps) {
  if (items.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="font-heading text-2xl font-bold text-white mb-6">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <GlassCard className="h-full group">
              <h3 className="font-heading text-sm font-bold text-white group-hover:text-primary transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs line-clamp-2 mb-3">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary">
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/RelatedContent.tsx
git commit -m "feat(seo): add reusable RelatedContent component for internal linking"
```

---

## Task 11: ProductFAQ Component

**Files:**
- Create: `components/ui/ProductFAQ.tsx`

- [ ] **Step 1: Create the component**

```typescript
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { productFaqSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

export default function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <JsonLd data={productFaqSchema(faqs)} />
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-sm font-medium text-white pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4">
                <p className="text-sm text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/ProductFAQ.tsx
git commit -m "feat(seo): add ProductFAQ component with JSON-LD schema injection"
```

---

## Task 12: Enhance Product Detail Pages

**Files:**
- Modify: `app/products/[slug]/page.tsx`

- [ ] **Step 1: Add FAQ section and related content to product pages**

Import the new components at the top:

```typescript
import ProductFAQ from "@/components/ui/ProductFAQ";
import RelatedContent from "@/components/ui/RelatedContent";
import { SERVICES, BLOG_POSTS } from "@/lib/constants";
```

Update `generateMetadata` title for keyword optimization:

```typescript
return generatePageMetadata({
  title: `${product.name} — Exide Industrial Battery Hyderabad`,
  description: product.description.slice(0, 160),
  path: `/products/${product.slug}`,
});
```

Add after the "Industries Using This Product" section (before `</Container>`):

```tsx
{/* Product FAQ */}
{product.faqs && product.faqs.length > 0 && (
  <MotionWrapper className="mb-16">
    <h2 className="font-heading text-2xl font-bold text-white mb-6">
      Frequently Asked Questions About {product.shortName}
    </h2>
    <ProductFAQ faqs={product.faqs} />
  </MotionWrapper>
)}

{/* Related Services */}
<RelatedContent
  heading="Related Services"
  items={(product.relatedServices || [])
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)
    .map((s) => ({
      title: s!.name,
      description: s!.description,
      href: `/services/${s!.slug}`,
    }))}
/>

{/* Related Articles */}
<RelatedContent
  heading="Related Articles"
  items={(product.relatedBlogSlugs || [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      description: p!.excerpt,
      href: `/blog/${p!.slug}`,
    }))}
/>
```

- [ ] **Step 2: Keyword-optimize headings**

Change `"Key Features"` heading to include product name:

```tsx
<h2 className="font-heading text-2xl font-bold text-white mb-6">
  Key Features of {product.shortName} Batteries
</h2>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/products/[slug]/page.tsx
git commit -m "feat(seo): add FAQ section, related content, and keyword headings to product pages"
```

---

## Task 13: Enhance Industry Detail Pages

**Files:**
- Modify: `app/industries/[slug]/page.tsx`

- [ ] **Step 1: Add related articles section**

Import:
```typescript
import RelatedContent from "@/components/ui/RelatedContent";
import { BLOG_POSTS } from "@/lib/constants";
```

(BLOG_POSTS already imported? Check — it's not in the current imports. Add it.)

Add after the "Recommended Products" section (before `</Container>`):

```tsx
{/* Related Articles */}
<RelatedContent
  heading={`Battery Insights for ${industry.shortName}`}
  items={(industry.relatedBlogSlugs || [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      description: p!.excerpt,
      href: `/blog/${p!.slug}`,
    }))}
/>
```

- [ ] **Step 2: Keyword-optimize headings**

Change "Industry Challenges" to:
```tsx
<h2 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
  <AlertTriangle className="w-5 h-5 text-accent-red" />
  {industry.shortName} Battery Challenges
</h2>
```

Change "Our Solutions" to:
```tsx
<h2 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
  <CheckCircle className="w-5 h-5 text-primary" />
  Battery Solutions for {industry.shortName} in Hyderabad
</h2>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/industries/[slug]/page.tsx
git commit -m "feat(seo): add related articles and keyword-optimized headings to industry pages"
```

---

## Task 14: Enhance Blog Post Pages

**Files:**
- Modify: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Add OG type "article" to blog metadata**

Update `generateMetadata`:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.dateModified,
    section: post.category,
  });
}
```

- [ ] **Step 2: Add related products/services/industries sections**

Import:
```typescript
import RelatedContent from "@/components/ui/RelatedContent";
import { PRODUCTS, SERVICES, INDUSTRIES } from "@/lib/constants";
```

(Some already imported — add what's missing.)

Replace the existing "Related Articles" section with expanded related content. After the article, before the CTABanner:

```tsx
{/* Related Products */}
<RelatedContent
  heading="Related Products"
  items={(post.relatedProducts || [])
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.name,
      description: p!.tagline,
      href: `/products/${p!.slug}`,
    }))}
/>

{/* Related Services */}
<RelatedContent
  heading="Related Services"
  items={(post.relatedServices || [])
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)
    .map((s) => ({
      title: s!.name,
      description: s!.description,
      href: `/services/${s!.slug}`,
    }))}
/>

{/* Keep existing Related Articles section */}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/blog/[slug]/page.tsx
git commit -m "feat(seo): add article OG type, related products/services to blog post pages"
```

---

## Task 15: Service Detail Pages

**Files:**
- Create: `app/services/[slug]/page.tsx`

- [ ] **Step 1: Create the service detail page**

```typescript
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { serviceSchema, howToSchema } from "@/lib/schema";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import ProductFAQ from "@/components/ui/ProductFAQ";
import RelatedContent from "@/components/ui/RelatedContent";
import JsonLd from "@/components/seo/JsonLd";
import { SERVICES, PRODUCTS, BLOG_POSTS } from "@/lib/constants";
import { Wrench } from "lucide-react";
import { SERVICE_ICON_MAP } from "@/lib/icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return generatePageMetadata({
    title: `${service.name} — Battery Service Hyderabad`,
    description: service.description.slice(0, 160),
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = SERVICE_ICON_MAP[service.icon] || Wrench;
  const howTo = howToSchema(service);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      {howTo && <JsonLd data={howTo} />}
      <section className="py-16">
        <Container>
          <Breadcrumbs overrides={{ [service.slug]: service.name }} />

          {/* Hero */}
          <MotionWrapper className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              {service.highlight && <Badge variant="green">Popular Service</Badge>}
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {service.name}
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              {service.detailedDescription || service.description}
            </p>
          </MotionWrapper>

          {/* Service Details */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">
              What&apos;s Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.details.map((detail) => (
                <div key={detail} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-primary mt-0.5 shrink-0">&#9656;</span>
                  <span className="text-sm text-gray-300">{detail}</span>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* Process Steps */}
          {service.steps && service.steps.length > 0 && (
            <MotionWrapper className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">
                How {service.name} Works
              </h2>
              <div className="space-y-4">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-white font-medium text-sm">{step.name}</h3>
                      <p className="text-gray-400 text-xs mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          )}

          {/* FAQ */}
          {service.faqs && service.faqs.length > 0 && (
            <MotionWrapper className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">
                Frequently Asked Questions About {service.name}
              </h2>
              <ProductFAQ faqs={service.faqs} />
            </MotionWrapper>
          )}

          {/* Related Products */}
          <RelatedContent
            heading="Products We Service"
            items={(service.relatedProducts || [])
              .map((s) => PRODUCTS.find((p) => p.slug === s))
              .filter(Boolean)
              .map((p) => ({
                title: p!.name,
                description: p!.tagline,
                href: `/products/${p!.slug}`,
              }))}
          />

          {/* Related Articles */}
          <RelatedContent
            heading="Related Guides"
            items={(service.relatedBlogSlugs || [])
              .map((s) => BLOG_POSTS.find((p) => p.slug === s))
              .filter(Boolean)
              .map((p) => ({
                title: p!.title,
                description: p!.excerpt,
                href: `/blog/${p!.slug}`,
              }))}
          />
        </Container>
      </section>

      <CTABanner
        heading={`Need ${service.name}?`}
        subtitle="Book now for professional service across Telangana."
        primaryLabel="Book This Service"
        primaryHref="/book-service"
        secondaryLabel="Call Us"
        secondaryHref="tel:+919963739107"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: PASS with service detail routes generated

- [ ] **Step 3: Commit**

```bash
git add app/services/[slug]/page.tsx
git commit -m "feat(seo): create service detail pages with HowTo schema, FAQ, and related content"
```

---

## Task 16: Blog Category Pages

**Files:**
- Create: `app/blog/category/[slug]/page.tsx`

- [ ] **Step 1: Create the category page**

```typescript
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};
  return generatePageMetadata({
    title: `${category.name} — Industrial Battery Blog`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = BLOG_POSTS.filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and") === slug
      || p.category === category.name
      || (p.tags && p.tags.some((t) => t.toLowerCase().includes(slug.replace(/-/g, " "))))
  );

  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs overrides={{ category: "Categories", [category.slug]: category.name }} />

        <div className="mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">{category.description}</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <MotionWrapper key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <GlassCard className="h-full flex flex-col group">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="green">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                      <span className="text-sm text-primary flex items-center gap-1">
                        Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <GlassCard hover={false}>
            <p className="text-gray-400 text-center py-8">
              No articles in this category yet. Check back soon!
            </p>
          </GlassCard>
        )}
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: PASS with category pages generated

- [ ] **Step 3: Commit**

```bash
git add app/blog/category/[slug]/page.tsx
git commit -m "feat(seo): create blog category pages with generateStaticParams"
```

---

## Task 17: Location Landing Page

**Files:**
- Create: `app/battery-dealer-hyderabad/page.tsx`

- [ ] **Step 1: Create the local SEO landing page**

```typescript
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Shield, Truck, Wrench, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { COMPANY, SERVICE_AREAS, PRODUCTS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Exide Industrial Battery Dealer in Hyderabad — Nektra Energy Solutions",
  },
  description:
    "Authorized Exide industrial battery dealer in Hyderabad, Telangana. 35+ years experience, free installation, AMC with 5-year warranty. Serving all of Hyderabad and Telangana. Call +91 9963739107.",
  openGraph: {
    title: "Exide Industrial Battery Dealer in Hyderabad — Nektra Energy Solutions",
    description:
      "Authorized Exide industrial battery dealer in Hyderabad, Telangana. 35+ years experience, free installation, AMC with 5-year warranty.",
    url: `${COMPANY.url}/battery-dealer-hyderabad`,
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Nektra Energy Solutions Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exide Industrial Battery Dealer in Hyderabad",
    description: "Authorized Exide dealer. 35+ years. Free installation. Call now.",
    images: ["/og-default.jpg"],
  },
};

export default function BatteryDealerHyderabadPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <section className="py-16">
        <Container>
          <MotionWrapper className="mb-16 text-center">
            <Badge variant="cyan" className="mb-4">Authorized Exide Dealer</Badge>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Industrial Battery Dealer in Hyderabad
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Nektra Energy Solutions is Hyderabad&apos;s trusted authorized Exide industrial battery dealer with over 35 years of experience. We provide the complete range of forklift batteries, traction batteries, and industrial energy solutions with free installation, free diagnostics, and Pan-Telangana service coverage.
            </p>
          </MotionWrapper>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Shield, label: "5-Year AMC Warranty", value: "35+ Years" },
              { icon: Truck, label: "Free Doorstep Delivery", value: "Pan-India" },
              { icon: Wrench, label: "Free Installation", value: "Every Battery" },
              { icon: Clock, label: "Emergency Service", value: "Rapid Response" },
            ].map((item, i) => (
              <MotionWrapper key={item.label} delay={i * 0.1}>
                <GlassCard className="text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-white font-bold text-sm">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </GlassCard>
              </MotionWrapper>
            ))}
          </div>

          {/* Products Overview */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-6 text-center">
              Exide Industrial Battery Range in Hyderabad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PRODUCTS.slice(0, 6).map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`}>
                  <GlassCard className="group">
                    <Badge>{product.shortName}</Badge>
                    <h3 className="font-heading text-lg font-bold text-white mt-2 mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2">{product.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary mt-3">
                      View Product <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </MotionWrapper>

          {/* Services Overview */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-6 text-center">
              Battery Services Available in Hyderabad
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICES.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-all text-center group">
                    <h3 className="text-sm text-gray-300 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </MotionWrapper>

          {/* Service Areas */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-6 text-center">
              Areas We Serve in Hyderabad &amp; Telangana
            </h2>
            <GlassCard hover={false}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {SERVICE_AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </GlassCard>
          </MotionWrapper>

          {/* Contact CTA */}
          <MotionWrapper>
            <GlassCard hover={false} className="text-center border-primary/20 bg-primary/5">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                Contact Nektra Energy Solutions — Hyderabad
              </h2>
              <p className="text-gray-400 mb-6">
                {COMPANY.address}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" /> Call {COMPANY.phones[0]}
                </a>
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-semibold text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>
            </GlassCard>
          </MotionWrapper>
        </Container>
      </section>

      <CTABanner
        heading="Hyderabad's Most Trusted Industrial Battery Partner"
        subtitle="35+ years of powering industries across Telangana. Free consultation, free installation."
        primaryLabel="Get a Quote"
        primaryHref="/get-quote"
        secondaryLabel="View All Products"
        secondaryHref="/products"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add app/battery-dealer-hyderabad/page.tsx
git commit -m "feat(seo): create local SEO landing page for Hyderabad battery dealer"
```

---

## Task 18: Full Build Verification & Final Cleanup

**Files:**
- All modified files

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: All pages build successfully with no errors. Verify output shows all new routes.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: PASS or only pre-existing warnings

- [ ] **Step 3: Verify sitemap output**

Check the built sitemap includes:
- All static routes (no get-quote or book-service)
- All product routes
- All service detail routes (new)
- All industry routes
- All blog routes
- All blog category routes (new)
- Location landing page (new)

- [ ] **Step 4: Spot-check JSON-LD output**

Start dev server (`npm run dev`) and check a few pages in browser view-source:
- Homepage: Organization + WebSite (no SearchAction)
- Product page: Product + FAQ schemas
- Service detail page: Service + HowTo schemas
- Blog post: Article (with wordCount, articleSection)

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat(seo): full-stack SEO optimization — final verification pass"
```
