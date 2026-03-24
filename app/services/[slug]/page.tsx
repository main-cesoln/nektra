import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo";
import { serviceSchema, howToSchema, faqSchema } from "@/lib/schema";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/ui/CTABanner";
import ProductFAQ from "@/components/ui/ProductFAQ";
import RelatedContent from "@/components/ui/RelatedContent";
import JsonLd from "@/components/seo/JsonLd";
import { SERVICES, PRODUCTS, BLOG_POSTS, COMPANY } from "@/lib/constants";
import { Wrench } from "lucide-react";
import { SERVICE_ICON_MAP } from "@/lib/icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return generatePageMetadata({
    title: `${service.name} — Battery Service Hyderabad`,
    description: service.description.length <= 160
      ? service.description
      : service.description.slice(0, service.description.lastIndexOf(" ", 157)) + "...",
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = SERVICE_ICON_MAP[service.icon] || Wrench;
  const howTo = howToSchema(service);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      {howTo && <JsonLd data={howTo} />}
      <section className="py-16">
        <Container>
          <Breadcrumbs overrides={{ [service.slug]: service.name }} />

          {/* Hero */}
          <MotionWrapper className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              {service.highlight && <Badge variant="green">Popular Service</Badge>}
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
              {service.name}
            </h1>
            <p className="text-foreground max-w-3xl leading-relaxed">
              {service.detailedDescription || service.description}
            </p>
          </MotionWrapper>

          {/* Service Details */}
          <MotionWrapper className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-heading mb-6">
              What&apos;s Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.details.map((detail) => (
                <div key={detail} className="flex items-start gap-3 p-3 rounded-xl bg-tint border border-subtle">
                  <span className="text-primary mt-0.5 shrink-0">&#9656;</span>
                  <span className="text-sm text-foreground">{detail}</span>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* Process Steps */}
          {service.steps && service.steps.length > 0 && (
            <MotionWrapper className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-heading mb-6">
                How {service.name} Works
              </h2>
              <div className="space-y-4">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-tint border border-subtle">
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-heading font-medium text-sm">{step.name}</h3>
                      <p className="text-muted text-xs mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          )}

          {/* FAQ */}
          {service.faqs && service.faqs.length > 0 && (
            <MotionWrapper className="mb-16">
              <JsonLd data={faqSchema(service.faqs)} />
              <h2 className="font-heading text-2xl font-bold text-heading mb-6">
                Frequently Asked Questions About {service.name}
              </h2>
              <ProductFAQ faqs={service.faqs} />
            </MotionWrapper>
          )}

          {/* Related Products */}
          <RelatedContent
            heading="Products We Service"
            items={(service.relatedProducts || [])
              .map((s) => PRODUCTS.find((p) => p.slug === s))
              .filter((p): p is NonNullable<typeof p> => p != null)
              .map((p) => ({
                title: p.name,
                description: p.tagline,
                href: `/products/${p.slug}`,
              }))}
          />

          {/* Related Articles */}
          <RelatedContent
            heading="Related Guides"
            items={(service.relatedBlogSlugs || [])
              .map((s) => BLOG_POSTS.find((p) => p.slug === s))
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
        heading={`Need ${service.name}?`}
        subtitle="Book now for professional service across Telangana."
        primaryLabel="Book This Service"
        primaryHref="/book-service"
        secondaryLabel="Call Us"
        secondaryHref={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
      />
    </>
  );
}
