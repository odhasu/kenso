"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Animation =
  | "fade-up"
  | "fade-down"
  | "slide-left"
  | "slide-right"
  | "pop"
  | "scale-up"
  | "fade";

export function ScrollReveal({
  children,
  delay = 0,
  animation = "fade-up",
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  animation?: Animation;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("sr-visible");
          }, delay);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once]);

  return (
    <div ref={ref} className={cn(`sr sr-${animation}`, className)}>
      {children}
    </div>
  );
}
