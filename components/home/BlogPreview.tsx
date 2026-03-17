import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BlogCard from "@/components/ui/BlogCard";
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
              <BlogCard post={post} showDate={false} readLabel="Read" />
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
