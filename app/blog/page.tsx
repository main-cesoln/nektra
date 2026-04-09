import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BlogCard from "@/components/ui/BlogCard";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Industrial Battery Guides & Insights",
  description:
    "Expert articles on forklift batteries, maintenance tips, DIN vs BS standards, gel vs flooded comparisons, and industry insights from Hyderabad's trusted Exide dealer.",
  path: "/blog",
  keywords: [
    "forklift battery guide",
    "industrial battery maintenance tips",
    "DIN vs BS battery standards",
    "gel vs flooded battery comparison",
    "how to choose forklift battery",
    "forklift battery life expectancy",
    "battery sulphation prevention",
    "forklift battery charging best practices",
    "industrial battery ROI",
    "forklift battery safety tips",
    "battery AMC explained",
    "warehouse electrification guide",
    "forklift battery cost per cycle",
  ],
});

export default function BlogPage() {
  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs />
        <SectionHeading
          as="h1"
          overline="Our Blog"
          title="Expert Insights & Guides"
          subtitle="Practical knowledge from 35+ years of industrial battery expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <MotionWrapper key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
