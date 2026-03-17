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
