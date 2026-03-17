import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import { productSchema } from "@/lib/schema";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import JsonLd from "@/components/seo/JsonLd";
import ProductFAQ from "@/components/ui/ProductFAQ";
import RelatedContent from "@/components/ui/RelatedContent";
import { PRODUCTS, INDUSTRIES, ACCESSORY_PRODUCTS, SERVICES, BLOG_POSTS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";
import ExideBadge from "@/components/ui/ExideBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return generatePageMetadata({
    title: `${product.name} — Exide Industrial Battery Hyderabad`,
    description: product.description.slice(0, 160),
    path: `/products/${product.slug}`,
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
                  <div className="relative w-full lg:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
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
                  <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {product.name}
                  </h1>
                  <p className="text-primary font-mono text-sm mb-4">{product.tagline}</p>
                  <p className="text-gray-300 max-w-3xl leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Features */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">
              Key Features of {product.shortName} Batteries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* Spec Tables */}
          {product.specTables && product.specTables.map((table) => (
            <MotionWrapper key={table.title} className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">{table.title}</h2>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/5">
                      {table.headers.map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-mono text-primary uppercase tracking-wider whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, i) => (
                      <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                        {table.headers.map((h) => (
                          <td key={h} className="px-4 py-3 text-gray-300 whitespace-nowrap">
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
              <h2 className="font-heading text-2xl font-bold text-white mb-6">Accessory Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACCESSORY_PRODUCTS.map((acc) => (
                  <GlassCard key={acc.name}>
                    {acc.image && (
                      <div className="relative w-full aspect-[3/2] mb-4 rounded-lg overflow-hidden bg-white/5">
                        <Image
                          src={acc.image}
                          alt={acc.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <h3 className="font-heading text-lg font-bold text-white mb-2">{acc.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{acc.description}</p>
                    {acc.specs && (
                      <ul className="space-y-1">
                        {acc.specs.map((spec) => (
                          <li key={spec} className="text-xs text-gray-500 flex items-start gap-2">
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
              <h2 className="font-heading text-2xl font-bold text-white mb-6">Technology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.techFeatures.map((tf) => (
                  <GlassCard key={tf.title}>
                    <h3 className="text-white font-bold text-sm mb-1">{tf.title}</h3>
                    <p className="text-gray-400 text-xs">{tf.description}</p>
                  </GlassCard>
                ))}
              </div>
            </MotionWrapper>
          )}

          {/* Applications */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Applications</h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <Badge key={app} variant="green">{app}</Badge>
              ))}
            </div>
          </MotionWrapper>

          {/* Related Industries */}
          {relatedIndustries.length > 0 && (
            <MotionWrapper className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">Industries Using This Product</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {relatedIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-all text-center group"
                  >
                    <span className="text-sm text-gray-300 group-hover:text-primary transition-colors">
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
              <h2 className="font-heading text-2xl font-bold text-white mb-6">
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
        secondaryHref="tel:+919963739107"
      />
    </>
  );
}
