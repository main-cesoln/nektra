import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import CTABanner from "@/components/ui/CTABanner";
import JsonLd from "@/components/seo/JsonLd";
import RelatedContent from "@/components/ui/RelatedContent";
import { BLOG_POSTS, PRODUCTS, SERVICES } from "@/lib/constants";
import { Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.dateModified,
    section: post.category,
  });
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-heading text-2xl font-bold text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-white font-semibold mt-4 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-1.5 my-3 ml-4">
          {listItems.map((item, j) => (
            <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
              <span className="text-primary mt-1">&#9656;</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("| ")) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("| ")) {
        if (!lines[i].startsWith("|-") && !lines[i].startsWith("| -")) {
          tableRows.push(
            lines[i].split("|").filter(Boolean).map((c) => c.trim())
          );
        }
        i++;
      }
      if (tableRows.length > 1) {
        const [headers, ...rows] = tableRows;
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-4 rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  {headers.map((h, j) => (
                    <th key={j} className="px-4 py-2 text-left text-xs font-mono text-primary">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, j) => (
                  <tr key={j} className="border-t border-white/5">
                    {row.map((cell, k) => (
                      <td key={k} className="px-4 py-2 text-gray-300">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-gray-300 text-sm leading-relaxed mb-3"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <section className="py-16">
        <Container>
          <Breadcrumbs overrides={{ [post.slug]: post.title.slice(0, 40) + "..." }} />

          <article className="max-w-3xl mx-auto">
            <MotionWrapper>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="green">{post.category}</Badge>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
                {post.title}
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.15}>
              <div className="prose-custom">
                {renderMarkdown(post.content)}
              </div>
            </MotionWrapper>
          </article>

          {/* Related Products */}
          <RelatedContent
            heading="Related Products"
            items={(post.relatedProducts || [])
              .map((slug) => PRODUCTS.find((p) => p.slug === slug))
              .filter((p): p is NonNullable<typeof p> => p != null)
              .map((p) => ({
                title: p.name,
                description: p.tagline,
                href: `/products/${p.slug}`,
              }))}
          />

          {/* Related Services */}
          <RelatedContent
            heading="Related Services"
            items={(post.relatedServices || [])
              .map((slug) => SERVICES.find((s) => s.slug === slug))
              .filter((s): s is NonNullable<typeof s> => s != null)
              .map((s) => ({
                title: s.name,
                description: s.description,
                href: `/services/${s.slug}`,
              }))}
          />

          {/* Related Posts */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                  <GlassCard className="group">
                    <Badge variant="green" className="text-xs">{rp.category}</Badge>
                    <h3 className="font-heading text-sm font-bold text-white mt-2 group-hover:text-primary transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Ready to Optimize Your Battery Operations?"
        primaryLabel="Get a Quote"
        primaryHref="/get-quote"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/contact"
      />
    </>
  );
}
