interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "red" | "green";
  className?: string;
}

const variantClasses = {
  cyan: "bg-primary/10 text-primary border-primary/20",
  red: "bg-accent-red/10 text-accent-red border-accent-red/20",
  green: "bg-accent-green/10 text-accent-green border-accent-green/20",
};

export default function Badge({
  children,
  variant = "cyan",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
