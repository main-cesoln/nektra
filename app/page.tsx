import HeroSection from "@/components/home/HeroSection";
import IndustryTicker from "@/components/home/IndustryTicker";
import StatsBar from "@/components/home/StatsBar";
import ProductHighlights from "@/components/home/ProductHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustryGrid from "@/components/home/IndustryGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import ExideSection from "@/components/home/ExideSection";
import CTASection from "@/components/home/CTASection";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IndustryTicker />
      <StatsBar />
      <Divider />
      <ProductHighlights />
      <WhyChooseUs />
      <IndustryGrid />
      <Divider />
      <TestimonialsSection />
      <BlogPreview />
      <ExideSection />
      <CTASection />
    </>
  );
}
