import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight } from "lucide-react";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
}

interface RelatedContentProps {
  heading: string;
  items: RelatedItem[];
}

export default function RelatedContent({ heading, items }: RelatedContentProps) {
  if (items.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="font-heading text-2xl font-bold text-heading mb-6">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <GlassCard className="h-full group">
              <h3 className="font-heading text-sm font-bold text-heading group-hover:text-primary transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-xs line-clamp-2 mb-3">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary">
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
