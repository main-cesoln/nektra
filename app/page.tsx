import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import HeroSection from "@/components/home/HeroSection";
import IndustryTicker from "@/components/home/IndustryTicker";
import StatsBar from "@/components/home/StatsBar";
import ProductHighlights from "@/components/home/ProductHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustryGrid from "@/components/home/IndustryGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import ExideSection from "@/components/home/ExideSection";
import CTASection from "@/components/home/CTASection";
import Divider from "@/components/ui/Divider";

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

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }])} />
      <HeroSection />
      <IndustryTicker />
      <StatsBar />
      <Divider />
      <ProductHighlights />
      <WhyChooseUs />
      <IndustryGrid />
      <Divider />
      <TestimonialsSection />
      <BlogPreview />
      <ExideSection />
      <CTASection />
    </>
  );
}
