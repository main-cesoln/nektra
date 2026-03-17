"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            target={stat.numericValue}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
