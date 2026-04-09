import { Metadata } from "next";
import { COMPANY } from "./constants";

const baseUrl = COMPANY.url;

interface PageSEO {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  keywords?: string[];
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
  keywords,
}: PageSEO): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
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
      ...(image && {
        images: [{ url: image, width: 1200, height: 630, alt: title }],
      }),
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
      ...(image && { images: [image] }),
      ...(COMPANY.twitter && { site: COMPANY.twitter, creator: COMPANY.twitter }),
    },
  };
}
