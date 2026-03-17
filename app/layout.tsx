import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — Authorized Exide Industrial Battery Dealer in Hyderabad`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Authorized Exide Industrial Battery dealer in Hyderabad with 35+ years experience. Forklift batteries, traction batteries, installation, AMC & Pan-Telangana service.",
  keywords: [
    "Exide industrial battery",
    "forklift battery Hyderabad",
    "traction battery dealer Telangana",
    "industrial battery Hyderabad",
    "Exide authorized dealer",
    "forklift battery dealer",
    "motive power battery",
    "gel battery India",
  ],
  metadataBase: new URL(COMPANY.url),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": `${COMPANY.coordinates.lat};${COMPANY.coordinates.lng}`,
    "ICBM": `${COMPANY.coordinates.lat}, ${COMPANY.coordinates.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased bg-surface-deepest text-foreground`}
      >
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Navbar />
        <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
