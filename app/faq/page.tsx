import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionWrapper from "@/components/ui/MotionWrapper";
import CTABanner from "@/components/ui/CTABanner";
import JsonLd from "@/components/seo/JsonLd";
import FAQAccordion from "./FAQAccordion";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Industrial Battery FAQ — Exide Dealer Hyderabad",
  description:
    "Frequently asked questions about Exide industrial batteries, warranty, AMC, DIN vs BS standards, gel vs flooded, and maintenance. Hyderabad's trusted battery experts.",
  path: "/faq",
});

const categories = ["General", "Products", "Services", "Warranty", "Technical"] as const;

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <section className="py-16">
        <Container>
          <Breadcrumbs />
          <SectionHeading
            as="h1"
            overline="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about industrial batteries, our products, and services."
          />

          <div className="max-w-3xl mx-auto space-y-10">
            {categories.map((category) => {
              const catFaqs = FAQS.filter((f) => f.category === category);
              if (catFaqs.length === 0) return null;
              return (
                <MotionWrapper key={category}>
                  <h3 className="font-heading text-xl font-bold text-heading mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category}
                  </h3>
                  <FAQAccordion faqs={catFaqs} />
                </MotionWrapper>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Still Have Questions?"
        subtitle="Our battery experts are happy to help with any questions."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/919187615904"
      />
    </>
  );
}
