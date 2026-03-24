"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbOverride {
  [key: string]: string;
}

export default function Breadcrumbs({ overrides = {} }: { overrides?: BreadcrumbOverride }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const items = [
    { name: "Home", href: "/" },
    ...segments.map((seg, i) => ({
      name: overrides[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-muted">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3 h-3" />}
              {i === items.length - 1 ? (
                <span className="text-primary">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
