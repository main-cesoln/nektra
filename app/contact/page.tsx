import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import ContactForm from "@/components/forms/ContactForm";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Exide Battery Dealer Hyderabad",
  description:
    "Contact Nektra Energy Solutions for Exide industrial battery enquiries, service booking, and quotes. Chandanagar, Hyderabad. Call +91 9963739107. Free consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs />
        <h1 className="sr-only">Contact Exide Battery Dealer Hyderabad</h1>
        <SectionHeading
          overline="Contact Us"
          title="Get in Touch"
          subtitle="We're here to help with all your industrial battery needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Form */}
          <MotionWrapper>
            <GlassCard hover={false}>
              <h3 className="font-heading text-xl font-bold text-heading mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </GlassCard>
          </MotionWrapper>

          {/* Contact Info */}
          <MotionWrapper delay={0.2}>
            <div className="space-y-4">
              {/* Quick Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                  className="block p-4 rounded-xl border border-default-theme bg-tint hover:border-primary/30 hover:bg-primary/5 transition-all text-center"
                >
                  <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-heading text-sm font-medium">Call Now</p>
                </a>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border border-default-theme bg-tint hover:border-accent-green/30 hover:bg-accent-green/5 transition-all text-center"
                >
                  <MessageCircle className="w-6 h-6 text-accent-green mx-auto mb-2" />
                  <p className="text-heading text-sm font-medium">WhatsApp</p>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${COMPANY.coordinates.lat},${COMPANY.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border border-default-theme bg-tint hover:border-accent-red/30 hover:bg-accent-red/5 transition-all text-center"
                >
                  <Navigation className="w-6 h-6 text-accent-red mx-auto mb-2" />
                  <p className="text-heading text-sm font-medium">Directions</p>
                </a>
              </div>

              {/* Contact Details */}
              <GlassCard hover={false}>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-heading font-medium text-sm">Address</p>
                      <p className="text-muted text-sm">{COMPANY.address}</p>
                    </div>
                  </li>
                  {COMPANY.phones.map((phone) => (
                    <li key={phone} className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-heading font-medium text-sm">Phone</p>
                        <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-muted text-sm hover:text-primary transition-colors">
                          {phone}
                        </a>
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-heading font-medium text-sm">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-muted text-sm hover:text-primary transition-colors">
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-heading font-medium text-sm">Business Hours</p>
                      <p className="text-muted text-sm">{COMPANY.hours}</p>
                    </div>
                  </li>
                </ul>
              </GlassCard>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-default-theme">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d${COMPANY.coordinates.lng}!3d${COMPANY.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzM2LjAiTiA3OMKwMTknMjAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nektra Energy Solutions Location"
                />
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* Service Areas */}
        <MotionWrapper>
          <GlassCard hover={false} className="text-center">
            <h3 className="font-heading text-xl font-bold text-heading mb-4">
              Serving All of Telangana
            </h3>
            <p className="text-muted text-sm mb-4">
              Battery delivery and on-site service available across:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 rounded-full bg-tint border border-default-theme text-xs text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </GlassCard>
        </MotionWrapper>
      </Container>
    </section>
  );
}
