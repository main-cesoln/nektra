"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { BLOG_POSTS } from "@/lib/constants";

const latestPosts = BLOG_POSTS.slice(0, 3);

export default function BlogPreview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          overline="From Our Blog"
          title="Expert Insights & Guides"
          subtitle="Practical knowledge from 35+ years of industrial battery expertise."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <MotionWrapper key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <GlassCard className="h-full group">
                  <div className="relative w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-white/5">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <Badge variant="green">{post.category}</Badge>
                  <h3 className="font-heading text-lg font-bold text-white mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="text-sm text-primary flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
