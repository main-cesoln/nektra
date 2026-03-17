export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SpecRow {
  [key: string]: string | number;
}

export interface SpecTable {
  title: string;
  headers: string[];
  rows: SpecRow[];
}

export interface TechFeature {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  techFeatures?: TechFeature[];
  specTables?: SpecTable[];
  applications: string[];
  relatedIndustries: string[];
  image?: string;
}

export interface AccessoryProduct {
  name: string;
  description: string;
  specs?: string[];
  image?: string;
}

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  recommendedProducts: string[];
  icon: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  details: string[];
  icon: string;
  highlight?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Products" | "Services" | "Warranty" | "Technical";
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  name: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phones: string[];
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  url: string;
}
