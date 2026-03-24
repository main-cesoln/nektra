import ExideLogo from "@/components/ui/ExideLogo";

interface ExideBadgeProps {
  variant?: "inline" | "stacked" | "compact";
  label?: string;
  className?: string;
  priority?: boolean;
}

export default function ExideBadge({
  variant = "inline",
  label = "Authorized Dealer",
  className = "",
  priority = false,
}: ExideBadgeProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <ExideLogo colorMode="color" className="h-16" priority={priority} />
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted">
          {label}
        </span>
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div
        className={`inline-flex flex-col items-center gap-2 px-5 py-3 rounded-xl border border-primary/20 bg-tint backdrop-blur-sm ${className}`}
      >
        <ExideLogo colorMode="color" className="h-20" priority={priority} />
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
          {label}
        </span>
      </div>
    );
  }

  // inline
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-primary/20 bg-tint backdrop-blur-sm ${className}`}
    >
      <ExideLogo colorMode="color" className="h-16" priority={priority} />
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
        {label}
      </span>
    </div>
  );
}
