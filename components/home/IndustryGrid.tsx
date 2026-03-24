"use client";

import Link from "next/link";
import { Settings } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_ICON_MAP } from "@/lib/icons";

export default function IndustryGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          overline="Industries We Serve"
          title="Trusted by 10+ Industries"
          subtitle="From pharmaceutical clean rooms to steel plant furnaces, our batteries power India's industries."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = INDUSTRY_ICON_MAP[industry.icon] || Settings;
            return (
              <MotionWrapper key={industry.slug} delay={i * 0.05}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block p-5 rounded-2xl border border-subtle bg-tint hover:bg-tint-hover hover:border-primary/30 transition-all text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground group-hover:text-heading transition-colors">
                    {industry.shortName}
                  </span>
                </Link>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
