"use client";

import { Wrench, Activity, Zap, Award, Shield, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";

const usps = [
  {
    icon: Wrench,
    title: "Free Installation",
    description: "Professional battery installation by trained technicians at no extra cost with every purchase.",
  },
  {
    icon: Activity,
    title: "Free Testing & Diagnostics",
    description: "Comprehensive battery health assessment including load testing, voltage measurement, and diagnostics.",
  },
  {
    icon: Zap,
    title: "Emergency Service",
    description: "Rapid response when your operations can't wait. Temporary solutions and expedited repairs available.",
  },
  {
    icon: Award,
    title: "35+ Years Experience",
    description: "Three decades of expertise in industrial battery solutions serving Hyderabad and Telangana.",
  },
  {
    icon: Shield,
    title: "Authorized Exide Dealer",
    description: "Official Exide partner ensuring genuine products, factory warranty, and certified service.",
  },
  {
    icon: MapPin,
    title: "Pan-Telangana Coverage",
    description: "On-site service teams covering all of Telangana with same-day response in Hyderabad metro.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-surface-panel/50">
      <Container>
        <SectionHeading
          overline="Why Choose Us"
          title="The Nektra Advantage"
          subtitle="35+ years of trust, expertise, and unmatched service in industrial battery solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, i) => (
            <MotionWrapper key={usp.title} delay={i * 0.08}>
              <GlassCard className="text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <usp.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {usp.title}
                </h3>
                <p className="text-gray-400 text-sm">{usp.description}</p>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
