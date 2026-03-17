import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import QuoteForm from "@/components/forms/QuoteForm";
import { Shield, Truck, Wrench, Clock } from "lucide-react";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Get a Quote — Custom Battery Solutions",
    description:
      "Request a custom quote for Exide industrial batteries. Tell us your requirements and get a tailored solution with competitive pricing within 24 hours.",
    path: "/get-quote",
  }),
  robots: { index: false, follow: false },
};

const trustBadges = [
  { icon: Shield, label: "5-Year Warranty with AMC" },
  { icon: Truck, label: "Doorstep Delivery" },
  { icon: Wrench, label: "Free Installation" },
  { icon: Clock, label: "24hr Quote Turnaround" },
];

export default function GetQuotePage() {
  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs />
        <SectionHeading
          overline="Request a Quote"
          title="Get a Custom Battery Quote"
          subtitle="Tell us your requirements — we'll prepare a tailored solution within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <MotionWrapper>
              <GlassCard hover={false}>
                <QuoteForm />
              </GlassCard>
            </MotionWrapper>
          </div>

          <div className="space-y-6">
            <MotionWrapper delay={0.2}>
              <GlassCard hover={false}>
                <h3 className="font-heading text-lg font-bold text-white mb-4">
                  What to Expect
                </h3>
                <ol className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                    Submit your requirements using the form
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                    Our battery expert reviews your specifications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                    Receive a detailed quote within 24 hours
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 font-bold">4</span>
                    Free site visit and consultation if needed
                  </li>
                </ol>
              </GlassCard>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="p-3 rounded-xl border border-white/10 bg-white/5 text-center"
                  >
                    <badge.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                    <p className="text-xs text-gray-400">{badge.label}</p>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}
