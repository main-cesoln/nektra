import Image from "next/image";

interface ExideLogoProps {
  colorMode?: "color" | "white" | "primary";
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const filterMap = {
  color: "",
  white: "brightness-0 invert",
  primary: "brightness-0 invert sepia saturate-[10000%] hue-rotate-[165deg]",
};

export default function ExideLogo({
  colorMode = "color",
  className = "h-20",
  priority = false,
  sizes = "80px",
}: ExideLogoProps) {
  return (
    <span className={`relative inline-block ${className}`} style={{ aspectRatio: "1/1" }}>
      <Image
        src="/images/exide-logo.webp"
        alt="Exide Industries"
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${filterMap[colorMode]}`}
      />
    </span>
  );
}
