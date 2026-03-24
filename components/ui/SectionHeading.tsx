"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`${align === "center" ? "text-center" : "text-left"} mb-12 ${className}`}
    >
      {overline && (
        <span className="font-mono text-sm text-primary tracking-widest uppercase mb-3 block">
          {overline}
        </span>
      )}
      <Tag className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
