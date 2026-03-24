"use client";

import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-surface-panel">
      <Container>
        <SectionHeading
          overline="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from industry professionals across Telangana."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <MotionWrapper key={t.name} delay={i * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm italic flex-1 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-heading font-medium text-sm">{t.name}</p>
                  <p className="text-subtle text-xs">{t.company} — {t.industry}</p>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
