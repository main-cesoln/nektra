import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import { productSchema, faqSchema } from "@/lib/schema";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import JsonLd from "@/components/seo/JsonLd";
import ProductFAQ from "@/components/ui/ProductFAQ";
import RelatedContent from "@/components/ui/RelatedContent";
import { PRODUCTS, INDUSTRIES, ACCESSORY_PRODUCTS, SERVICES, BLOG_POSTS, COMPANY } from "@/lib/constants";
import { CheckCircle } from "lucide-react";
import ExideBadge from "@/components/ui/ExideBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

const PRODUCT_KEYWORDS: Record<string, string[]> = {
  "motive-power-flooded-tubular": [
    "flooded tubular battery Hyderabad", "IPzS battery dealer", "IPzB traction battery",
    "BS standard forklift battery", "Exide motive power battery",
    "1500 cycle forklift battery", "forklift battery for warehouse", "lead acid traction battery",
    "5% antimony tubular battery", "forklift battery for Jungheinrich", "Toyota forklift battery Hyderabad",
    "multi-shift forklift battery",
    "flooded tubular battery best price", "Exide tubular battery dealer price",
    "cheap traction battery Hyderabad", "buy flooded battery best offer",
  ],
  "motive-power-gel": [
    "CEIL gel battery Hyderabad", "gel forklift battery India", "VRLA traction battery",
    "maintenance free forklift battery", "sealed battery for forklift", "gel battery for cold storage",
    "gel battery for pharma warehouse", "zero maintenance battery forklift", "clean room forklift battery",
    "food processing forklift battery", "spill proof forklift battery", "gel battery price India",
    "CEIL gel battery best price", "gel battery lowest price Hyderabad",
    "buy gel battery best offer", "cheap gel battery India",
  ],
  "hsp-classic": [
    "HSP Classic battery Exide", "HSP traction battery", "standard duty forklift battery",
    "12 month warranty forklift battery", "single shift forklift battery", "budget forklift battery Hyderabad",
    "Exide HSP battery price", "light duty forklift battery", "small warehouse forklift battery",
    "cheapest forklift battery Hyderabad", "HSP battery best price", "affordable forklift battery India",
    "low cost traction battery", "HSP battery dealer price",
  ],
  "gen-x": [
    "Gen-X battery Exide", "15% extra capacity battery", "next gen forklift battery",
    "multi-shift battery Hyderabad", "high capacity forklift battery", "fast charging forklift battery",
    "24/7 operation forklift battery", "heavy duty traction battery", "extended run time forklift battery",
    "Red Lead Grey Oxide battery", "deep discharge forklift battery",
    "Gen-X battery best price", "Gen-X battery dealer price Hyderabad", "buy Gen-X battery best offer",
  ],
  "bci-range": [
    "BCI battery India", "American standard forklift battery",
    "Hyster forklift battery dealer", "Yale forklift battery India", "BCI format battery Hyderabad",
    "imported forklift battery", "US brand forklift battery India",
    "BCI battery best price India", "American forklift battery dealer price",
    "buy BCI battery best offer Hyderabad",
  ],
  "accessories": [
    "single point watering system battery",
    "electrolyte circulation system", "battery watering monitor", "smart clamp battery",
    "forklift battery BMS", "battery fleet management", "battery maintenance accessories",
    "battery water level indicator", "forklift battery charger accessories",
    "battery accessories best price", "buy battery monitoring system best offer",
    "cheap battery watering system", "battery accessories dealer price",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return generatePageMetadata({
    title: `${product.name} — Exide Industrial Battery Hyderabad`,
    description: product.description.length <= 160
      ? product.description
      : product.description.slice(0, product.description.lastIndexOf(" ", 157)) + "...",
    path: `/products/${product.slug}`,
    keywords: PRODUCT_KEYWORDS[product.slug],
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedIndustries = INDUSTRIES.filter((ind) =>
    product.relatedIndustries.includes(ind.slug)
  );

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <section className="py-16">
        <Container>
          <Breadcrumbs overrides={{ [product.slug]: product.shortName }} />

          {/* Hero */}
          <div className="mb-16">
            <MotionWrapper>
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {product.image && (
                  <div className="relative w-full lg:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-tint border border-default-theme shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority
                    />
                  </div>
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="cyan">{product.shortName}</Badge>
                    <ExideBadge variant="compact" />
                  </div>
                  <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
                    {product.name}
                  </h1>
                  <p className="text-primary font-mono text-sm mb-4">{product.tagline}</p>
                  <p className="text-foreground max-w-3xl leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Features */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-heading mb-6">
              Key Features of {product.shortName} Batteries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-3 rounded-xl bg-tint border border-subtle">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* Spec Tables */}
          {product.specTables && product.specTables.map((table) => (
            <MotionWrapper key={table.title} className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-heading mb-4">{table.title}</h2>
              <div className="overflow-x-auto rounded-xl border border-default-theme">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-tint">
                      {table.headers.map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-mono text-primary uppercase tracking-wider whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, i) => (
                      <tr key={i} className="border-t border-subtle hover:bg-tint">
                        {table.headers.map((h) => (
                          <td key={h} className="px-4 py-3 text-foreground whitespace-nowrap">
                            {String(row[h] ?? "")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MotionWrapper>
          ))}

          {/* Accessories Detail */}
          {product.slug === "accessories" && (
            <MotionWrapper className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-heading mb-6">Accessory Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACCESSORY_PRODUCTS.map((acc) => (
                  <GlassCard key={acc.name}>
                    {acc.image && (
                      <div className="relative w-full aspect-[3/2] mb-4 rounded-lg overflow-hidden bg-tint">
                        <Image
                          src={acc.image}
                          alt={acc.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <h3 className="font-heading text-lg font-bold text-heading mb-2">{acc.name}</h3>
                    <p className="text-muted text-sm mb-3">{acc.description}</p>
                    {acc.specs && (
                      <ul className="space-y-1">
                        {acc.specs.map((spec) => (
                          <li key={spec} className="text-xs text-subtle flex items-start gap-2">
                            <span className="text-primary">&#9656;</span> {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlassCard>
                ))}
              </div>
            </MotionWrapper>
          )}

          {/* Technology Features */}
          {product.techFeatures && (
            <MotionWrapper className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-heading mb-6">Technology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.techFeatures.map((tf) => (
                  <GlassCard key={tf.title}>
                    <h3 className="text-heading font-bold text-sm mb-1">{tf.title}</h3>
                    <p className="text-muted text-xs">{tf.description}</p>
                  </GlassCard>
                ))}
              </div>
            </MotionWrapper>
          )}

          {/* Applications */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-heading mb-4">Applications</h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <Badge key={app} variant="green">{app}</Badge>
              ))}
            </div>
          </MotionWrapper>

          {/* Related Industries */}
          {relatedIndustries.length > 0 && (
            <MotionWrapper className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-heading mb-6">Industries Using This Product</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {relatedIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="p-4 rounded-xl border border-default-theme bg-tint hover:border-primary/30 transition-all text-center group"
                  >
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {ind.shortName}
                    </span>
                  </Link>
                ))}
              </div>
            </MotionWrapper>
          )}

          {/* Product FAQ */}
          {product.faqs && product.faqs.length > 0 && (
            <MotionWrapper className="mb-16">
              <JsonLd data={faqSchema(product.faqs)} />
              <h2 className="font-heading text-2xl font-bold text-heading mb-6">
                Frequently Asked Questions About {product.shortName}
              </h2>
              <ProductFAQ faqs={product.faqs} />
            </MotionWrapper>
          )}

          {/* Related Services */}
          <RelatedContent
            heading="Related Services"
            items={(product.relatedServices || [])
              .map((slug) => SERVICES.find((s) => s.slug === slug))
              .filter((s): s is NonNullable<typeof s> => s != null)
              .map((s) => ({
                title: s.name,
                description: s.description,
                href: `/services/${s.slug}`,
              }))}
          />

          {/* Related Articles */}
          <RelatedContent
            heading="Related Articles"
            items={(product.relatedBlogSlugs || [])
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
        heading={`Need ${product.shortName} Batteries?`}
        subtitle="Get a custom quote with competitive pricing and free installation."
        primaryLabel="Get a Quote"
        primaryHref="/get-quote"
        secondaryLabel="Call Us"
        secondaryHref={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
      />
    </>
  );
}
