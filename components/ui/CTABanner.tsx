import Container from "./Container";
import Link from "next/link";

interface CTABannerProps {
  heading: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-surface-panel to-accent-red/10" />
      <Container className="relative text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        {subtitle && (
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-surface-deepest font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
