"use client";

import { useState, FormEvent } from "react";
import { validateEmail, validatePhone, validateRequired } from "@/lib/validation";
import { inputClasses } from "@/lib/styles";
import { COMPANY, INDUSTRIES, PRODUCTS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import GlowButton from "@/components/ui/GlowButton";
import FormSuccessMessage from "./FormSuccessMessage";

const TIMELINE_OPTIONS = [
  { value: "immediate", label: "Immediate (within 1 week)" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "planning", label: "Just planning / exploring" },
] as const;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    batteryType: "",
    quantity: "",
    voltage: "",
    capacity: "",
    timeline: "",
    notes: "",
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
    if (!validatePhone(form.phone)) newErrors.phone = "Valid phone is required";
    if (!validateRequired(form.company)) newErrors.company = "Company name is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const industryName = INDUSTRIES.find((i) => i.slug === form.industry)?.name;
    const batteryName = PRODUCTS.find((p) => p.slug === form.batteryType)?.shortName;
    const url = buildWhatsAppUrl("New Quote Request from Nektra Website", [
      { label: "Name", value: form.name },
      { label: "Email", value: form.email },
      { label: "Phone", value: form.phone },
      { label: "Company", value: form.company },
      { label: "Industry", value: industryName },
      { label: "Battery Type", value: batteryName },
      { label: "Quantity", value: form.quantity },
      { label: "Voltage", value: form.voltage },
      { label: "Capacity", value: form.capacity },
      { label: "Timeline", value: TIMELINE_OPTIONS.find((t) => t.value === form.timeline)?.label },
      { label: "Notes", value: form.notes },
    ]);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FormSuccessMessage
        heading="Opening WhatsApp…"
        message={`Tap Send in WhatsApp to deliver your quote request. If WhatsApp didn't open, please call ${COMPANY.phones[0]}.`}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h3 className="font-heading text-lg font-bold text-heading mb-2">Your Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input name="name" aria-label="Full Name" aria-describedby={errors.name ? "name-error" : undefined} placeholder="Full Name *" value={form.name} onChange={handleChange} className={inputClasses} />
          {errors.name && <p id="name-error" role="alert" className="text-accent-red text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="email" type="email" aria-label="Email" aria-describedby={errors.email ? "email-error" : undefined} placeholder="Email *" value={form.email} onChange={handleChange} className={inputClasses} />
          {errors.email && <p id="email-error" role="alert" className="text-accent-red text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input name="phone" aria-label="Phone" aria-describedby={errors.phone ? "phone-error" : undefined} placeholder="Phone *" value={form.phone} onChange={handleChange} className={inputClasses} />
          {errors.phone && <p id="phone-error" role="alert" className="text-accent-red text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input name="company" aria-label="Company Name" aria-describedby={errors.company ? "company-error" : undefined} placeholder="Company Name *" value={form.company} onChange={handleChange} className={inputClasses} />
          {errors.company && <p id="company-error" role="alert" className="text-accent-red text-xs mt-1">{errors.company}</p>}
        </div>
      </div>

      <h3 className="font-heading text-lg font-bold text-heading mt-6 mb-2">Battery Requirements</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select name="industry" aria-label="Industry" value={form.industry} onChange={handleChange} className={inputClasses}>
          <option value="">Select Industry</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind.slug} value={ind.slug}>{ind.name}</option>
          ))}
        </select>
        <select name="batteryType" aria-label="Battery Type" value={form.batteryType} onChange={handleChange} className={inputClasses}>
          <option value="">Select Battery Type</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.slug}>{p.shortName}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input name="quantity" aria-label="Quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} className={inputClasses} />
        <input name="voltage" aria-label="Voltage" placeholder="Voltage (V)" value={form.voltage} onChange={handleChange} className={inputClasses} />
        <input name="capacity" aria-label="Capacity" placeholder="Capacity (Ah)" value={form.capacity} onChange={handleChange} className={inputClasses} />
      </div>
      <select name="timeline" aria-label="Timeline" value={form.timeline} onChange={handleChange} className={inputClasses}>
        <option value="">Timeline</option>
        {TIMELINE_OPTIONS.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
      <textarea name="notes" rows={3} aria-label="Additional notes" placeholder="Additional notes or requirements" value={form.notes} onChange={handleChange} className={inputClasses} />
      <GlowButton type="submit" className="w-full">
        Request Quote
      </GlowButton>
    </form>
  );
}
