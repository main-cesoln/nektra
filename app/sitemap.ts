import { MetadataRoute } from "next";
import { PRODUCTS, INDUSTRIES, BLOG_POSTS, SERVICES, BLOG_CATEGORIES, COMPANY } from "@/lib/constants";

const SITE_LAST_UPDATED = new Date().toISOString().split("T")[0];

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
