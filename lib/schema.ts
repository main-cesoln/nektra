import { COMPANY, EXIDE_INFO } from "./constants";
import { Product, Service, FAQItem, BlogPost } from "./types";

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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.url,
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Exide",
    },
    manufacturer: {
      "@type": "Organization",
      name: EXIDE_INFO.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: COMPANY.name,
      },
    },
  };
}

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

export function howToSchema(service: Service): Record<string, unknown> | null {
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

export function faqSchema(faqs: FAQItem[]) {
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

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.url}${item.href}`,
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${COMPANY.url}${post.image}`,
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
