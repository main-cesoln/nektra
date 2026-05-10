"use client";

import { useState, FormEvent } from "react";
import { validateEmail, validatePhone, validateRequired } from "@/lib/validation";
import { inputClasses } from "@/lib/styles";
import { COMPANY, INDUSTRIES } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import GlowButton from "@/components/ui/GlowButton";
import FormSuccessMessage from "./FormSuccessMessage";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    batteryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!validateRequired(form.name)) newErrors.name = "Name is required";
    if (!validateEmail(form.email)) newErrors.email = "Valid email is required";
    if (!validatePhone(form.phone)) newErrors.phone = "Valid phone number is required";
    if (!validateRequired(form.message)) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const industryName = INDUSTRIES.find((i) => i.slug === form.industry)?.name;
    const url = buildWhatsAppUrl("New Enquiry from Nektra Website", [
      { label: "Name", value: form.name },
      { label: "Email", value: form.email },
      { label: "Phone", value: form.phone },
      { label: "Company", value: form.company },
      { label: "Industry", value: industryName },
      { label: "Battery Type", value: form.batteryType },
      { label: "Message", value: form.message },
    ]);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FormSuccessMessage
        heading="Opening WhatsApp…"
        message={`Tap Send in WhatsApp to deliver your message. If WhatsApp didn't open, please call ${COMPANY.phones[0]}.`}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input name="name" aria-label="Full Name" aria-describedby={errors.name ? "name-error" : undefined} placeholder="Full Name *" value={form.name} onChange={handleChange} className={inputClasses} />
          {errors.name && <p id="name-error" role="alert" className="text-accent-red text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="email" type="email" aria-label="Email Address" aria-describedby={errors.email ? "email-error" : undefined} placeholder="Email Address *" value={form.email} onChange={handleChange} className={inputClasses} />
          {errors.email && <p id="email-error" role="alert" className="text-accent-red text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input name="phone" aria-label="Phone Number" aria-describedby={errors.phone ? "phone-error" : undefined} placeholder="Phone Number *" value={form.phone} onChange={handleChange} className={inputClasses} />
          {errors.phone && <p id="phone-error" role="alert" className="text-accent-red text-xs mt-1">{errors.phone}</p>}
        </div>
        <input name="company" aria-label="Company Name" placeholder="Company Name" value={form.company} onChange={handleChange} className={inputClasses} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select name="industry" aria-label="Industry" value={form.industry} onChange={handleChange} className={inputClasses}>
          <option value="">Select Industry</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind.slug} value={ind.slug}>{ind.name}</option>
          ))}
        </select>
        <input name="batteryType" aria-label="Battery Type" placeholder="Battery Type (if known)" value={form.batteryType} onChange={handleChange} className={inputClasses} />
      </div>
      <div>
        <textarea name="message" rows={4} aria-label="Your Message" aria-describedby={errors.message ? "message-error" : undefined} placeholder="Your Message *" value={form.message} onChange={handleChange} className={inputClasses} />
        {errors.message && <p id="message-error" role="alert" className="text-accent-red text-xs mt-1">{errors.message}</p>}
      </div>
      <GlowButton type="submit" className="w-full">
        Send Message
      </GlowButton>
    </form>
  );
}
