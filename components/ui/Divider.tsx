export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent ${className}`}
    />
  );
}
