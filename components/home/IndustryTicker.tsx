"use client";

import {
  Pill, Settings, Warehouse, UtensilsCrossed, Flame,
  Building, Plane, Package, Car, ScrollText,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill, Settings, Warehouse, UtensilsCrossed, Flame,
  Building, Plane, Package, Car, ScrollText,
};

export default function IndustryTicker() {
  // Double the items for seamless looping
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-8 overflow-hidden border-y border-white/5 bg-white/[0.01]">
      <p className="text-center text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">
        Trusted by Industries
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker gap-10 w-max">
          {items.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Settings;
            return (
              <div
                key={`${industry.slug}-${i}`}
                className="flex items-center gap-2.5 shrink-0"
              >
                <Icon className="w-5 h-5 text-primary/70" />
                <span className="text-sm text-gray-400 whitespace-nowrap">
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
