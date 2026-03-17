"use client";

import { useState, FormEvent } from "react";
import { validateEmail, validatePhone, validateRequired } from "@/lib/validation";
import { INDUSTRIES } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

const inputClasses =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm";

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

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-accent-green text-2xl">&#10003;</span>
        </div>
        <h3 className="font-heading text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} className={inputClasses} />
          {errors.name && <p className="text-accent-red text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handleChange} className={inputClasses} />
          {errors.email && <p className="text-accent-red text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className={inputClasses} />
          {errors.phone && <p className="text-accent-red text-xs mt-1">{errors.phone}</p>}
        </div>
        <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} className={inputClasses} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select name="industry" value={form.industry} onChange={handleChange} className={inputClasses}>
          <option value="">Select Industry</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind.slug} value={ind.slug}>{ind.name}</option>
          ))}
        </select>
        <input name="batteryType" placeholder="Battery Type (if known)" value={form.batteryType} onChange={handleChange} className={inputClasses} />
      </div>
      <div>
        <textarea name="message" rows={4} placeholder="Your Message *" value={form.message} onChange={handleChange} className={inputClasses} />
        {errors.message && <p className="text-accent-red text-xs mt-1">{errors.message}</p>}
      </div>
      <GlowButton type="submit" className="w-full">
        Send Message
      </GlowButton>
    </form>
  );
}
