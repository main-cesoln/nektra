"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { productFaqSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

export default function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <JsonLd data={productFaqSchema(faqs)} />
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-sm font-medium text-white pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4">
                <p className="text-sm text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
