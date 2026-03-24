import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import CTABanner from "@/components/ui/CTABanner";
import { INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_ICON_MAP } from "@/lib/icons";

export const metadata: Metadata = generatePageMetadata({
  title: "Battery Solutions by Industry",
  description:
    "Industrial battery solutions for pharmaceutical, manufacturing, logistics, food processing, steel, construction, airports, e-commerce, automotive, and textile industries in Hyderabad.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <Breadcrumbs />
          <h1 className="sr-only">Battery Solutions by Industry</h1>
          <SectionHeading
            overline="Industries We Serve"
            title="Battery Solutions for Every Industry"
            subtitle="Tailored industrial battery solutions for the unique demands of each sector."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = INDUSTRY_ICON_MAP[industry.icon] || Settings;
              return (
                <MotionWrapper key={industry.slug} delay={i * 0.06}>
                  <Link href={`/industries/${industry.slug}`} className="block h-full">
                    <GlassCard className="h-full group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-bold text-heading group-hover:text-primary transition-colors">
                            {industry.name}
                          </h3>
                          <p className="text-muted text-sm mt-2 line-clamp-3">
                            {industry.description}
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3">
                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </MotionWrapper>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Your Industry Not Listed?"
        subtitle="We serve any industry that uses material handling equipment. Contact us for a tailored solution."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Get a Quote"
        secondaryHref="/get-quote"
      />
    </>
  );
}
