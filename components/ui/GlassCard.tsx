interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6
        ${hover ? "transition-all duration-300 hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
