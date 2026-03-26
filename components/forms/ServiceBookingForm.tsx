"use client";

import { useState, FormEvent } from "react";
import { validatePhone, validateRequired } from "@/lib/validation";
import { inputClasses } from "@/lib/styles";
import { SERVICES, PRODUCTS } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";
import FormSuccessMessage from "./FormSuccessMessage";

export default function ServiceBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    serviceType: "",
    batteryType: "",
    preferredDate: "",
    location: "",
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
    if (!validatePhone(form.phone)) newErrors.phone = "Valid phone is required";
    if (!validateRequired(form.serviceType)) newErrors.serviceType = "Select a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return <FormSuccessMessage heading="Service Booked!" message="Our team will confirm your appointment shortly." />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input name="name" aria-label="Full Name" aria-describedby={errors.name ? "name-error" : undefined} placeholder="Full Name *" value={form.name} onChange={handleChange} className={inputClasses} />
          {errors.name && <p id="name-error" role="alert" className="text-accent-red text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="phone" aria-label="Phone Number" aria-describedby={errors.phone ? "phone-error" : undefined} placeholder="Phone Number *" value={form.phone} onChange={handleChange} className={inputClasses} />
          {errors.phone && <p id="phone-error" role="alert" className="text-accent-red text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      <input name="company" aria-label="Company Name" placeholder="Company Name" value={form.company} onChange={handleChange} className={inputClasses} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <select name="serviceType" aria-label="Service Type" aria-describedby={errors.serviceType ? "serviceType-error" : undefined} value={form.serviceType} onChange={handleChange} className={inputClasses}>
            <option value="">Select Service *</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
          {errors.serviceType && <p id="serviceType-error" role="alert" className="text-accent-red text-xs mt-1">{errors.serviceType}</p>}
        </div>
        <select name="batteryType" aria-label="Battery Type" value={form.batteryType} onChange={handleChange} className={inputClasses}>
          <option value="">Battery Type (optional)</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.slug}>{p.shortName}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="preferredDate" type="date" aria-label="Preferred Date" placeholder="Preferred Date" value={form.preferredDate} onChange={handleChange} className={inputClasses} />
        <input name="location" aria-label="Location" placeholder="Location / Area" value={form.location} onChange={handleChange} className={inputClasses} />
      </div>
      <textarea name="message" rows={3} aria-label="Additional details" placeholder="Additional details" value={form.message} onChange={handleChange} className={inputClasses} />
      <GlowButton type="submit" className="w-full">
        Book Service
      </GlowButton>
    </form>
  );
}
