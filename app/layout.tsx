import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ThemeProvider from "@/components/layout/ThemeProvider";
import JsonLd from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    "Exide authorized dealer",
    "Exide battery price",
    "CEIL gel battery dealer",
    "Exide forklift battery price Hyderabad",
    "forklift battery Hyderabad",
    "traction battery dealer Telangana",
    "industrial battery Hyderabad",
    "motive power battery",
    "gel battery India",
    "tubular battery for forklift India",
    "VRLA battery for forklift",
    "IPzS battery Hyderabad",
    "IPzB battery Telangana",
    "DIN standard forklift battery",
    "BS standard traction battery",
    "reach truck battery Hyderabad",
    "pallet truck battery dealer Telangana",
    "AGV battery Hyderabad",
    "electric forklift battery price",
    "forklift battery for Toyota",
    "Godrej forklift battery dealer",
    "Jungheinrich battery Hyderabad",
    "Linde forklift battery",
    "Crown forklift battery India",
    "forklift battery dealer",
    "battery AMC Hyderabad",
    "forklift battery service",
    "forklift battery installation Hyderabad",
    "battery testing service Hyderabad",
    "forklift battery repair near me",
    "battery equalizing charge service",
    "old battery exchange Hyderabad",
    "emergency battery service Telangana",
    "industrial battery dealer Telangana",
    "battery dealer near me Hyderabad",
    "battery dealer Patancheru industrial area",
    "forklift battery Jeedimetla",
    "industrial battery Balanagar",
    "best forklift battery dealer Hyderabad",
    "forklift battery quotation Hyderabad",
    "bulk battery order Telangana",
    "forklift battery warranty 5 years",
    "forklift battery not holding charge",
    "when to replace forklift battery",
    "reduce forklift battery cost",
    "UPS battery Hyderabad",
    "battery monitoring system forklift",
    "forklift battery best price Hyderabad",
    "industrial battery lowest price Telangana",
    "cheap forklift battery Hyderabad",
    "Exide battery best offer Hyderabad",
    "forklift battery dealer price",
    "Exide authorized dealer price",
    "industrial battery wholesale price Hyderabad",
    "forklift battery discount Hyderabad",
    "buy forklift battery online Hyderabad",
    "forklift battery sale Hyderabad",
    "Exide battery rate list",
    "traction battery best price India",
    "gel battery lowest price India",
    "forklift battery cost Hyderabad",
    "affordable industrial battery Telangana",
    "battery dealer offer Hyderabad",
    "Exide factory price battery",
    "forklift battery EMI offer Hyderabad",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <JsonLd data={organizationSchema()} />
          <JsonLd data={websiteSchema()} />
          <Navbar />
          <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
