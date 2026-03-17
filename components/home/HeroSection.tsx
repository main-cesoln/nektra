"use client";

import { motion } from "framer-motion";
import GridBackground from "@/components/ui/GridBackground";
import ParticleField from "@/components/ui/ParticleField";
import GlowButton from "@/components/ui/GlowButton";
import ExideLogo from "@/components/ui/ExideLogo";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <GridBackground />
      <ParticleField />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-sm text-primary tracking-widest uppercase mb-6 border border-primary/20 px-4 py-1.5 rounded-full">
            <ExideLogo colorMode="color" className="h-14" />
            Authorized Exide Industrial Battery Dealer — 35+ Years
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Powering Industries.{" "}
          <span className="gradient-text">Enabling Reliability.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Hyderabad&apos;s trusted partner for Exide forklift and traction batteries.
          Expert installation, testing, and Pan-Telangana service for 10+ industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <GlowButton href="/products" size="lg">
            Explore Products
          </GlowButton>
          <GlowButton href="/get-quote" variant="outline" size="lg">
            Get a Quote
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-3 text-gray-500"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Powered by</span>
          <ExideLogo colorMode="color" className="h-20" />
        </motion.div>
      </div>
    </section>
  );
}
