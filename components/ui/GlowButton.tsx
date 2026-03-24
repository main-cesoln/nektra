"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-primary text-primary-on-bg font-semibold hover:shadow-[0_0_30px_rgb(var(--primary-rgb)/0.4)]",
  secondary: "bg-accent-red text-white font-semibold hover:shadow-[0_0_30px_rgb(var(--accent-red-rgb)/0.4)]",
  outline: "border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgb(var(--primary-rgb)/0.2)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: GlowButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      type={type}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
