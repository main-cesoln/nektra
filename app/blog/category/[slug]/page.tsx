import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BlogCard from "@/components/ui/BlogCard";
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
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-heading mb-4">
            {category.name}
          </h1>
          <p className="text-muted text-lg max-w-2xl">{category.description}</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <MotionWrapper key={post.slug} delay={i * 0.08}>
                <BlogCard post={post} />
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <GlassCard hover={false}>
            <p className="text-muted text-center py-8">
              No articles in this category yet. Check back soon!
            </p>
          </GlassCard>
        )}
      </Container>
    </section>
  );
}
