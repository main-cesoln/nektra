"use client";

import { Settings } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_ICON_MAP } from "@/lib/icons";

export default function IndustryTicker() {
  // Double the items for seamless looping
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-8 overflow-hidden border-y border-subtle bg-tint">
      <p className="text-center text-xs font-mono text-subtle uppercase tracking-widest mb-5">
        Trusted by Industries
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--fade-edge)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--fade-edge)] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker gap-10 w-max">
          {items.map((industry, i) => {
            const Icon = INDUSTRY_ICON_MAP[industry.icon] || Settings;
            return (
              <div
                key={`${industry.slug}-${i}`}
                className="flex items-center gap-2.5 shrink-0"
              >
                <Icon className="w-5 h-5 text-primary/70" />
                <span className="text-sm text-muted whitespace-nowrap">
                  {industry.shortName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
