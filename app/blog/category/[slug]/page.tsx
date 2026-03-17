import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import Badge from "@/components/ui/Badge";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};
  return generatePageMetadata({
    title: `${category.name} — Industrial Battery Blog`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = BLOG_POSTS.filter((p) => p.categorySlug === slug);

  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs overrides={{ category: "Categories", [category.slug]: category.name }} />

        <div className="mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">{category.description}</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <MotionWrapper key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <GlassCard className="h-full flex flex-col group">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="green">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
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
        ) : (
          <GlassCard hover={false}>
            <p className="text-gray-400 text-center py-8">
              No articles in this category yet. Check back soon!
            </p>
          </GlassCard>
        )}
      </Container>
    </section>
  );
}
