import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import ServiceBookingForm from "@/components/forms/ServiceBookingForm";
import { SERVICES, COMPANY } from "@/lib/constants";
import { Phone, Zap } from "lucide-react";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Book a Service — Battery Installation, Testing & Maintenance",
    description:
      "Book battery installation, testing, replacement, AMC, or emergency service. Free diagnostics and installation with every Exide battery from Nektra Energy Solutions.",
    path: "/book-service",
  }),
  robots: { index: false, follow: false },
};

export default function BookServicePage() {
  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs />
        <SectionHeading
          overline="Book a Service"
          title="Schedule Battery Service"
          subtitle="Free installation, free diagnostics, and expert service across Telangana."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <MotionWrapper>
              <GlassCard hover={false}>
                <ServiceBookingForm />
              </GlassCard>
            </MotionWrapper>
          </div>

          <div className="space-y-6">
            {/* Emergency Contact */}
            <MotionWrapper delay={0.2}>
              <GlassCard hover={false} className="border-accent-red/30 bg-accent-red/5">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="w-6 h-6 text-accent-red shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-heading">
                      Emergency Service
                    </h3>
                    <p className="text-muted text-sm mt-1">
                      Battery down and operations stopped? Call us immediately for rapid emergency response.
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent-red text-heading font-semibold text-sm mt-4"
                >
                  <Phone className="w-4 h-4" />
                  Call {COMPANY.phones[0]}
                </a>
              </GlassCard>
            </MotionWrapper>

            {/* Services List */}
            <MotionWrapper delay={0.3}>
              <GlassCard hover={false}>
                <h3 className="font-heading text-lg font-bold text-heading mb-4">
                  Available Services
                </h3>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{s.name}</span>
                      {s.highlight && <Badge variant="green">Free</Badge>}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}
