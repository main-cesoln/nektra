import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";
import ExideBadge from "@/components/ui/ExideBadge";
import {
  Wrench, Activity, RefreshCw, ArrowLeftRight, Truck,
  Zap, Shield, BarChart3, MapPin,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Services — Installation, Testing, AMC & Emergency Service",
  description:
    "Free battery installation, free diagnostics, AMC with 5-year warranty, emergency service, and Pan-Telangana coverage. Complete battery service solutions.",
  path: "/services",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench, Activity, RefreshCw, ArrowLeftRight, Truck,
  Zap, Shield, BarChart3, MapPin,
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <Breadcrumbs />
          <SectionHeading
            overline="Our Services"
            title="Complete Battery Service Solutions"
            subtitle="From free installation to emergency response — we've got your batteries covered across Telangana."
          />

          <div className="flex justify-center mb-8">
            <ExideBadge variant="inline" label="Exide Authorized Service Center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <MotionWrapper key={service.slug} delay={i * 0.08}>
                  <GlassCard className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      {service.highlight && <Badge variant="green">Popular</Badge>}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5">
                      {service.details.map((detail) => (
                        <li key={detail} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="text-primary mt-0.5 shrink-0">&#9656;</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </MotionWrapper>
              );
            })}
          </div>

          {/* AMC Highlight */}
          <MotionWrapper className="mt-16">
            <GlassCard hover={false} className="border-primary/30 bg-primary/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Badge variant="cyan">Best Value</Badge>
                  <h3 className="font-heading text-2xl font-bold text-white mt-3 mb-4">
                    Annual Maintenance Contract (AMC)
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Transform your battery from a variable cost to a predictable expense.
                    Our AMC plans provide comprehensive coverage with the most valuable
                    warranty in the industry.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-primary font-bold text-lg mb-2">With AMC</h4>
                    <p className="text-white text-2xl font-heading font-bold mb-1">5 Years</p>
                    <p className="text-gray-400 text-sm">Full Replacement Warranty</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-gray-400 font-bold text-lg mb-2">Without AMC</h4>
                    <p className="text-white text-2xl font-heading font-bold mb-1">2 + 3 Years</p>
                    <p className="text-gray-400 text-sm">Full + Pro-rata Warranty</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </MotionWrapper>
          {/* Service Area */}
          <MotionWrapper className="mt-16">
            <div>
              <SectionHeading
                overline="Coverage"
                title="Our Service Area"
                subtitle="Pan-Telangana coverage with same-day service in Hyderabad."
              />

              <GlassCard hover={false}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Map placeholder */}
                  <div className="aspect-[4/3] rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center text-center p-6">
                    <MapPin className="w-12 h-12 text-primary mb-4" />
                    <p className="font-heading text-xl font-bold text-white mb-2">Telangana, India</p>
                    <p className="text-gray-500 text-sm">
                      Headquartered in Chandanagar, Hyderabad
                    </p>
                    <p className="text-gray-600 text-xs font-mono mt-3">
                      Interactive map coming soon
                    </p>
                  </div>

                  {/* Service areas list */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white mb-4">
                      Areas We Serve
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {SERVICE_AREAS.map((area) => (
                        <div
                          key={area}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </MotionWrapper>
        </Container>
      </section>

      <CTABanner
        heading="Need Battery Service? We're Just a Call Away"
        subtitle="Free testing, free installation, and emergency response across Telangana."
        primaryLabel="Book a Service"
        primaryHref="/book-service"
        secondaryLabel="Call Now"
        secondaryHref="tel:+919963739107"
      />
    </>
  );
}
