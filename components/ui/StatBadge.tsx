"use client";

import { cn } from "@/lib/utils";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface StatBadgeProps {
  value: string;
  label: string;
  animate?: boolean;
  className?: string;
}

export function StatBadge({
  value,
  label,
  animate = false,
  className,
}: StatBadgeProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const displayValue = useAnimatedCounter(value, animate && isVisible);

  return (
    <div
      ref={ref}
      className={cn("relative text-center md:text-left", className)}
    >
      <span
        className="font-display text-4xl font-black leading-none text-accent md:text-5xl lg:text-6xl"
        aria-label={`${value} ${label}`}
      >
        {animate ? displayValue : value}
      </span>
      <p className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-text-secondary md:text-sm">
        {label}
      </p>
    </div>
  );
}
