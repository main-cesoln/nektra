"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Nektra%20Energy%2C%20I%27d%20like%20to%20enquire%20about%20industrial%20batteries.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg animate-pulse-green transition-transform hover:scale-110"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
