import Container from "@/components/ui/Container";
import GlowButton from "@/components/ui/GlowButton";
import GridBackground from "@/components/ui/GridBackground";

export default function NotFound() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <GridBackground />
      <Container className="relative text-center">
        <h1 className="font-heading text-8xl font-bold text-primary text-glow-cyan mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton href="/">Go Home</GlowButton>
          <GlowButton href="/products" variant="outline">
            Browse Products
          </GlowButton>
        </div>
      </Container>
    </section>
  );
}
