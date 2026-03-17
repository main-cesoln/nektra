import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import { PRODUCTS } from "@/lib/constants";
import ExideBadge from "@/components/ui/ExideBadge";

export const metadata: Metadata = generatePageMetadata({
  title: "Industrial Batteries — Exide Authorized Dealer",
  description:
    "Complete range of Exide industrial batteries: Flooded Tubular, Gel, HSP Classic, Gen-X, BCI Range. DIN & BS standards for all forklift brands. Hyderabad dealer.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <Breadcrumbs />
          <h1 className="sr-only">Industrial Battery Products — Exide Authorized Dealer</h1>
          <SectionHeading
            overline="Our Products"
            title="Exide Industrial Battery Range"
            subtitle="The complete range of traction and motive power batteries for every industrial application."
          />

          <div className="flex justify-center mb-8">
            <ExideBadge variant="inline" label="Official Exide Product Range" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <MotionWrapper key={product.slug} delay={i * 0.08}>
                <Link href={`/products/${product.slug}`} className="block h-full">
                  <GlassCard className="h-full flex flex-col group">
                    {product.image && (
                      <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-white/5">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <Badge>{product.shortName}</Badge>
                    <h3 className="font-heading text-xl font-bold text-white mt-3 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{product.tagline}</p>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {product.features.slice(0, 4).map((f) => (
                        <li key={f} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="text-primary mt-0.5">&#9656;</span> {f}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-auto">
                      View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </GlassCard>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Not Sure Which Battery You Need?"
        subtitle="Our experts will recommend the perfect battery based on your equipment and operational requirements."
        primaryLabel="Get a Quote"
        primaryHref="/get-quote"
        secondaryLabel="Call an Expert"
        secondaryHref="tel:+919963739107"
      />
    </>
  );
}
