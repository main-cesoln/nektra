import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Industrial Battery Guides & Insights",
  description:
    "Expert articles on forklift batteries, maintenance tips, DIN vs BS standards, gel vs flooded comparisons, and industry insights from Hyderabad's trusted Exide dealer.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs />
        <h1 className="sr-only">Industrial Battery Guides &amp; Insights</h1>
        <SectionHeading
          overline="Our Blog"
          title="Expert Insights & Guides"
          subtitle="Practical knowledge from 35+ years of industrial battery expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <MotionWrapper key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <GlassCard className="h-full flex flex-col group">
                  <div className="relative w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-white/5">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="green">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="text-sm text-primary flex items-center gap-1">
                      Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
