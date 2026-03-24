"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface MouseGlowProps {
  containerRef: RefObject<HTMLElement | null>;
}

export default function MouseGlow({ containerRef }: MouseGlowProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const isPointer = useMediaQuery("(pointer: fine)");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isPointer) return;

    let pendingX = 0;
    let pendingY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      pendingX = e.clientX - rect.left;
      pendingY = e.clientY - rect.top;

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ x: pendingX, y: pendingY });
          rafRef.current = null;
        });
      }
    };

    const onLeave = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      setPosition(null);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [containerRef, isPointer]);

  if (!isPointer || !position) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-[5] transition-opacity duration-300"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--mouse-glow-color), transparent 60%)`,
      }}
    />
  );
}
