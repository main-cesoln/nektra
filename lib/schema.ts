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
    openingHours: "Mo-Sa 09:00-20:00",
    sameAs: COMPANY.socials?.map((s) => s.url) ?? [],
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Telangana",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${COMPANY.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    areaServed: {
      "@type": "State",
      name: "Telangana",
    },
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
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
    },
  };
}
