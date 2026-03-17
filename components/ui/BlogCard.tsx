import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  showDate?: boolean;
  readLabel?: string;
}

export default function BlogCard({ post, showDate = true, readLabel = "Read Article" }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <GlassCard className="h-full flex flex-col group">
        <div className="relative w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-white/5">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="green">{post.category}</Badge>
          {showDate && <span className="text-xs text-gray-500">{post.date}</span>}
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
            {readLabel} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
