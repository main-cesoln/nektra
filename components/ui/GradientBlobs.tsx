"use client";

import { useReducedMotion } from "framer-motion";

export default function GradientBlobs() {
  const reducedMotion = useReducedMotion();

  const blobs = [
    {
      id: "blob-primary",
      className:
        "w-[300px] h-[300px] md:w-[500px] md:h-[500px] -top-[10%] -left-[5%]",
      animation: reducedMotion ? "" : "animate-blob-1",
      from: "var(--blob-1-from)",
      to: "var(--blob-1-to)",
      blur: 100,
    },
    {
      id: "blob-accent",
      className:
        "w-[250px] h-[250px] md:w-[400px] md:h-[400px] -bottom-[5%] -right-[10%]",
      animation: reducedMotion ? "" : "animate-blob-2",
      from: "var(--blob-2-from)",
      to: "var(--blob-2-to)",
      blur: 120,
    },
    {
      id: "blob-tertiary",
      className:
        "w-[200px] h-[200px] md:w-[350px] md:h-[350px] top-[40%] right-[20%]",
      animation: reducedMotion ? "" : "animate-blob-3",
      from: "var(--blob-3-from)",
      to: "var(--blob-3-to)",
      blur: 80,
    },
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className={`absolute ${blob.className} ${blob.animation} will-change-transform`}
          style={{
            background: `radial-gradient(ellipse, ${blob.from}, ${blob.to})`,
            filter: `blur(${blob.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
