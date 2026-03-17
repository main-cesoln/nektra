import Link from "next/link";
import { Zap, Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { COMPANY, PRODUCTS } from "@/lib/constants";
import { SOCIAL_ICON_MAP } from "@/lib/icons";
import ExideBadge from "@/components/ui/ExideBadge";
import ExideLogo from "@/components/ui/ExideLogo";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Get a Quote", href: "/get-quote" },
  { label: "Book a Service", href: "/book-service" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="bg-surface-deepest pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Company */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <span className="font-heading text-lg font-bold text-white">
                  Nektra<span className="text-primary">.</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Authorized Exide Industrial Battery dealer in Hyderabad with 35+ years of experience powering industries across Telangana.
              </p>
              <ExideBadge variant="inline" className="mb-3" />
              <p className="text-xs text-gray-500 font-mono mb-4">{COMPANY.tagline}</p>
              {COMPANY.socials && (
                <div className="flex items-center gap-3">
                  {COMPANY.socials.map((social) => {
                    const Icon = SOCIAL_ICON_MAP[social.platform];
                    return Icon ? (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ) : null;
                  })}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-heading text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {PRODUCTS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {p.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {COMPANY.address}
                </li>
                {COMPANY.phones.map((phone) => (
                  <li key={phone} className="flex items-center gap-2 text-sm text-gray-400">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  {COMPANY.hours}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ExideLogo colorMode="color" className="h-14" />
              Authorized dealer of Exide Industries Ltd.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
