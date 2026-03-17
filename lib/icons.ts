import {
  Pill, Settings, Warehouse, UtensilsCrossed, Flame,
  Building, Plane, Package, Car, ScrollText,
  Wrench, Activity, RefreshCw, ArrowLeftRight, Truck,
  Zap, Shield, BarChart3, MapPin,
  Facebook, Instagram, Linkedin, Twitter, Youtube,
} from "lucide-react";

export const INDUSTRY_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill, Settings, Warehouse, UtensilsCrossed, Flame,
  Building, Plane, Package, Car, ScrollText,
};

export const SERVICE_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench, Activity, RefreshCw, ArrowLeftRight, Truck,
  Zap, Shield, BarChart3, MapPin,
};

export const SOCIAL_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook, Instagram, Linkedin, Twitter, Youtube,
};
