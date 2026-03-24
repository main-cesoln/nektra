"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import ExideBadge from "@/components/ui/ExideBadge";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/90 border-b border-subtle"
          : "backdrop-blur-md bg-background/60"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Zap className="w-7 h-7 text-primary transition-all group-hover:drop-shadow-[0_0_8px_rgb(var(--primary-rgb)/0.6)]" />
            <span className="font-heading text-xl font-bold text-heading">
              Nektra<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Exide Badge — desktop only */}
          <div className="hidden lg:flex items-center ml-3 pl-3 border-l border-default-theme">
            <ExideBadge variant="compact" priority />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-primary"
                      : "text-foreground hover:text-heading"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-surface-card border border-default-theme rounded-xl p-2 shadow-2xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                            pathname === child.href
                              ? "text-primary bg-primary/10"
                              : "text-foreground hover:text-heading hover:bg-tint"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-quote"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-on-bg text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgb(var(--primary-rgb)/0.4)]"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-heading"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-subtle bg-surface-deepest backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium ${
                      pathname === item.href ? "text-primary bg-primary/10" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 rounded-lg text-sm ${
                            pathname === child.href
                              ? "text-primary"
                              : "text-muted hover:text-heading"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/get-quote"
                className="block mx-4 mt-4 text-center px-5 py-3 rounded-xl bg-primary text-primary-on-bg font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
