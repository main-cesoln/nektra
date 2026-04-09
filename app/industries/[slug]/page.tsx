import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { industrySchema } from "@/lib/schema";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import JsonLd from "@/components/seo/JsonLd";
import RelatedContent from "@/components/ui/RelatedContent";
import { INDUSTRIES, PRODUCTS, BLOG_POSTS } from "@/lib/constants";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  "pharmaceutical": [
    "pharma warehouse forklift battery", "clean room battery solution", "GMP compliant forklift battery",
    "gel battery for pharmaceutical", "hospital logistics battery", "healthcare forklift battery Hyderabad",
    "emission free forklift battery", "drug manufacturing battery solution",
  ],
  "engineering-manufacturing": [
    "manufacturing plant forklift battery", "heavy duty factory battery", "multi-shift manufacturing battery",
    "production line forklift battery", "engineering works battery dealer", "factory forklift battery Hyderabad",
  ],
  "warehouse-logistics": [
    "warehouse forklift battery Hyderabad", "logistics centre battery", "reach truck battery warehouse",
    "pallet jack battery dealer", "order picker battery", "multi-shift warehouse battery",
    "3PL warehouse battery solution", "supply chain battery Telangana",
  ],
  "food-beverage": [
    "food processing forklift battery", "FSSAI compliant battery", "cold storage battery solution",
    "beverage plant forklift battery", "spill proof battery food industry", "dairy plant battery Hyderabad",
  ],
  "steel-metal": [
    "steel plant forklift battery", "foundry battery dealer Hyderabad", "metal industry battery solution",
    "high temperature forklift battery", "heavy load battery steel plant", "corrosion resistant traction battery",
  ],
  "cement-construction": [
    "cement plant forklift battery", "construction site battery dealer", "dust resistant forklift battery",
    "heavy duty battery cement industry", "building material handling battery",
  ],
  "airports-aviation": [
    "airport ground support battery", "baggage tractor battery", "aviation GSE battery",
    "pushback tug battery", "airport forklift battery Hyderabad", "ground handling equipment battery",
  ],
  "ecommerce-distribution": [
    "e-commerce warehouse battery", "distribution centre forklift battery", "fulfilment centre battery",
    "rapid cycle forklift battery", "peak season warehouse battery", "fast charge battery e-commerce",
  ],
  "automotive": [
    "automotive plant forklift battery", "assembly line battery dealer", "JIT manufacturing battery",
    "auto factory forklift battery Hyderabad", "OEM grade traction battery",
  ],
  "paper-textile": [
    "paper mill forklift battery", "textile mill battery dealer", "heavy roll handling battery",
    "humid environment forklift battery", "bale handling forklift battery",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);
  if (!industry) return {};
  return generatePageMetadata({
    title: `${industry.name} — Industrial Battery Solutions Hyderabad`,
    description: `${industry.name} battery solutions in Hyderabad. ${industry.description.slice(0, 120)}`,
    path: `/industries/${industry.slug}`,
    keywords: INDUSTRY_KEYWORDS[industry.slug],
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);
  if (!industry) notFound();

  const recommended = PRODUCTS.filter((p) =>
    industry.recommendedProducts.includes(p.slug)
  );

  return (
    <>
      <JsonLd data={industrySchema(industry)} />
      <section className="py-16">
        <Container>
          <Breadcrumbs overrides={{ [industry.slug]: industry.shortName }} />

          {/* Hero */}
          <MotionWrapper className="mb-16">
            <Badge variant="cyan" className="mb-4">{industry.shortName}</Badge>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
              {industry.name}
            </h1>
            <p className="text-foreground max-w-3xl leading-relaxed">
              {industry.description}
            </p>
          </MotionWrapper>

          {/* Pain Points & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <MotionWrapper>
              <GlassCard hover={false} className="h-full">
                <h2 className="font-heading text-xl font-bold text-heading mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent-red" />
                  {industry.shortName} Battery Challenges
                </h2>
                <ul className="space-y-3">
                  {industry.painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-red mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </MotionWrapper>

            <MotionWrapper delay={0.15}>
              <GlassCard hover={false} className="h-full border-primary/20 bg-primary/5">
                <h2 className="font-heading text-xl font-bold text-heading mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Battery Solutions for {industry.shortName} in Hyderabad
                </h2>
                <ul className="space-y-3">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </MotionWrapper>
          </div>

          {/* Recommended Products */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-heading mb-6">
              Recommended Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommended.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`}>
                  <GlassCard className="group">
                    <Badge>{product.shortName}</Badge>
                    <h3 className="font-heading text-lg font-bold text-heading mt-2 mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted text-xs mb-3 line-clamp-2">{product.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary">
                      View Product <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </MotionWrapper>

          {/* Related Articles */}
          <RelatedContent
            heading={`Battery Insights for ${industry.shortName}`}
            items={(industry.relatedBlogSlugs || [])
              .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
              .filter((p): p is NonNullable<typeof p> => p != null)
              .map((p) => ({
                title: p.title,
                description: p.excerpt,
                href: `/blog/${p.slug}`,
              }))}
          />
        </Container>
      </section>

      <CTABanner
        heading={`Battery Solutions for ${industry.shortName}`}
        subtitle="Get expert recommendations tailored to your specific operational requirements."
        primaryLabel="Get a Quote"
        primaryHref="/get-quote"
        secondaryLabel="Book a Consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
