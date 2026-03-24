"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function RotatingText({
  texts,
  interval = 4500,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || texts.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval, reducedMotion]);

  if (reducedMotion) {
    return <span className={className}>{texts[0]}</span>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={texts[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`inline-block ${className}`}
      >
        {texts[index]}
      </motion.span>
    </AnimatePresence>
  );
}
