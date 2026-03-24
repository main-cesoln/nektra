import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Divider from "@/components/ui/Divider";
import CTABanner from "@/components/ui/CTABanner";
import Badge from "@/components/ui/Badge";
import { EXIDE_INFO } from "@/lib/constants";
import { Award, Globe, Factory, Shield, User } from "lucide-react";
import ExideLogo from "@/components/ui/ExideLogo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us — 35+ Years of Industrial Battery Expertise in Hyderabad",
  description:
    "Learn about Nektra Energy Solutions, authorized Exide industrial battery dealer in Hyderabad with 35+ years of experience serving 10+ industries across Telangana.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <Breadcrumbs />
          <SectionHeading
            as="h1"
            overline="About Us"
            title="35+ Years of Powering Indian Industry"
            subtitle="From a single dealership to Telangana's most trusted industrial battery partner."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <MotionWrapper>
              <div className="space-y-4 text-foreground">
                <p>
                  Nektra Energy Solutions has been at the forefront of industrial energy solutions for over three decades. As an authorized Exide Industrial Battery dealer in Hyderabad, we have built our reputation on technical expertise, genuine products, and service that goes beyond the sale.
                </p>
                <p>
                  Based in Chandanagar, Hyderabad, we serve businesses across Telangana — from pharmaceutical giants in Genome Valley to logistics hubs in Shamshabad, from steel plants in Jeedimetla to e-commerce warehouses in Medchal.
                </p>
                <p>
                  Our team of trained technicians provides free installation, free battery diagnostics, emergency service, and comprehensive Annual Maintenance Contracts. We don&apos;t just sell batteries — we partner with our clients to optimize their material handling operations for maximum uptime and minimum cost.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <GlassCard hover={false} className="space-y-6">
                <h3 className="font-heading text-xl font-bold text-heading">Our Mission</h3>
                <p className="text-muted">
                  To be the most reliable and technically proficient industrial battery partner in South India, delivering genuine Exide products with unmatched service and support.
                </p>
                <h3 className="font-heading text-xl font-bold text-heading">Our Vision</h3>
                <p className="text-muted">
                  To power every forklift, every warehouse, and every factory in Telangana with the best battery technology available — backed by service that never lets our clients down.
                </p>
                <h3 className="font-heading text-xl font-bold text-heading">Our Values</h3>
                <ul className="space-y-2 text-muted text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary">&#9656;</span> Technical excellence in everything we do</li>
                  <li className="flex items-start gap-2"><span className="text-primary">&#9656;</span> Genuine products, honest advice</li>
                  <li className="flex items-start gap-2"><span className="text-primary">&#9656;</span> Service speed that matches industry urgency</li>
                  <li className="flex items-start gap-2"><span className="text-primary">&#9656;</span> Long-term partnerships over one-time sales</li>
                </ul>
              </GlassCard>
            </MotionWrapper>
          </div>

          <Divider className="my-16" />

          {/* About Exide */}
          <SectionHeading
            overline="Our Manufacturer"
            title="Powered by Exide Industries"
            subtitle="India's largest and South Asia's #1 battery manufacturer."
          />

          <div className="flex justify-center mb-10">
            <ExideLogo colorMode="color" className="h-24" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Factory, label: "Manufacturing Plants", value: `${EXIDE_INFO.plants} Plants Across India` },
              { icon: Globe, label: "Global Reach", value: `${EXIDE_INFO.countries} Countries Worldwide` },
              { icon: Award, label: "Annual Turnover", value: EXIDE_INFO.turnover },
              { icon: Shield, label: "Certifications", value: EXIDE_INFO.certifications.join(", ") },
            ].map((item, i) => (
              <MotionWrapper key={item.label} delay={i * 0.1}>
                <GlassCard className="text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-heading font-bold text-sm mb-1">{item.value}</p>
                  <p className="text-subtle text-xs font-mono uppercase">{item.label}</p>
                </GlassCard>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper>
            <GlassCard hover={false}>
              <p className="text-foreground text-sm leading-relaxed">
                {EXIDE_INFO.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {EXIDE_INFO.brands.map((brand) => (
                  <Badge key={brand}>{brand}</Badge>
                ))}
              </div>
            </GlassCard>
          </MotionWrapper>
          <Divider className="my-16" />

          {/* Timeline */}
          <SectionHeading
            overline="Our Journey"
            title="Milestones"
            subtitle="Key moments in our 35+ year journey of powering Indian industry."
          />

          <div className="relative max-w-2xl mx-auto mb-20">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-tint-hover" />

            {[
              { year: "1990", text: "Founded in Hyderabad with a vision to provide reliable industrial battery solutions" },
              { year: "1995", text: "Became an Authorized Exide Industrial Battery Dealer for Telangana" },
              { year: "2005", text: "Expanded service coverage to all major industrial areas across Telangana" },
              { year: "2015", text: "Introduced CEIL Gel battery technology for clean-room and food-grade industries" },
              { year: "2024", text: "Serving 500+ clients across 10+ industries with comprehensive AMC programs" },
            ].map((milestone, i) => (
              <MotionWrapper key={milestone.year} delay={i * 0.1}>
                <div className="relative pl-12 pb-10 last:pb-0">
                  <div className="absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-primary bg-surface-deepest" />
                  <p className="font-mono text-primary text-sm font-bold mb-1">{milestone.year}</p>
                  <p className="text-muted text-sm">{milestone.text}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <Divider className="my-16" />

          {/* Team Placeholder */}
          <SectionHeading
            overline="Our People"
            title="Our Team"
            subtitle="The experts behind Nektra's trusted service and support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Coming Soon", role: "Managing Director" },
              { name: "Coming Soon", role: "Technical Head" },
              { name: "Coming Soon", role: "Service Manager" },
              { name: "Coming Soon", role: "Sales Lead" },
            ].map((member, i) => (
              <MotionWrapper key={member.role} delay={i * 0.1}>
                <GlassCard className="text-center">
                  <div className="w-20 h-20 rounded-full bg-tint border border-default-theme flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-heading font-bold text-sm">{member.name}</p>
                  <p className="text-subtle text-xs font-mono uppercase mt-1">{member.role}</p>
                </GlassCard>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Ready to Partner with Telangana's Most Trusted Battery Experts?"
        primaryLabel="Get a Quote"
        primaryHref="/get-quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
