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
