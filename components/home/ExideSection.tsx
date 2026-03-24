"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import { EXIDE_INFO } from "@/lib/constants";
import { Factory, Globe, Award, Shield } from "lucide-react";
import ExideLogo from "@/components/ui/ExideLogo";

const highlights = [
  { icon: Factory, value: `Est. ${EXIDE_INFO.established}`, label: "Heritage" },
  { icon: Globe, value: `${EXIDE_INFO.countries} Countries`, label: "Global Reach" },
  { icon: Award, value: EXIDE_INFO.turnover, label: "Annual Turnover" },
  { icon: Shield, value: EXIDE_INFO.ranking, label: "Industry Rank" },
];

export default function ExideSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          overline="Our Manufacturer"
          title="Latest from Exide"
          subtitle="India's largest and South Asia's #1 battery manufacturer — powering industries since 1947."
        />

        <MotionWrapper>
          <GlassCard hover={false} className="border-primary/20">
            <div className="flex justify-center mb-6">
              <ExideLogo colorMode="color" className="h-24" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-7 h-7 text-primary mx-auto mb-2" />
                  <p className="text-heading font-bold text-sm">{item.value}</p>
                  <p className="text-subtle text-xs font-mono uppercase">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm leading-relaxed text-center max-w-3xl mx-auto">
              {EXIDE_INFO.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {EXIDE_INFO.brands.map((brand) => (
                <Badge key={brand}>{brand}</Badge>
              ))}
            </div>
          </GlassCard>
        </MotionWrapper>
      </Container>
    </section>
  );
}
