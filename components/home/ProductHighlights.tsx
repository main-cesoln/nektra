"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import { PRODUCTS } from "@/lib/constants";

const featured = PRODUCTS.slice(0, 4);

export default function ProductHighlights() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          overline="Our Products"
          title="Industry-Leading Battery Solutions"
          subtitle="Exide's complete range of traction and motive power batteries for every industrial application."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((product, i) => (
            <MotionWrapper key={product.slug} delay={i * 0.1}>
              <Link href={`/products/${product.slug}`}>
                <GlassCard className="h-full group">
                  {product.image && (
                    <div className="relative w-full aspect-[3/1] mb-4 rounded-lg overflow-hidden bg-tint">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <Badge>{product.shortName}</Badge>
                  <h3 className="font-heading text-xl font-bold text-heading mt-3 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted text-sm mb-4 line-clamp-2">
                    {product.tagline}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-xs text-subtle flex items-start gap-2">
                        <span className="text-primary mt-0.5">&#9656;</span> {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassCard>
              </Link>
            </MotionWrapper>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
