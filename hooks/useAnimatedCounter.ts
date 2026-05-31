"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string): { numeric: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: 0, suffix: value };
  return { numeric: parseInt(match[1], 10), suffix: match[2] };
}

export function useAnimatedCounter(
  targetValue: string,
  isVisible: boolean,
  duration = 1500,
) {
  const { numeric, suffix } = parseStatValue(targetValue);
  const [displayValue, setDisplayValue] = useState(targetValue);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current || numeric === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numeric * eased);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numeric, suffix, duration]);

  if (!isVisible || numeric === 0) {
    return targetValue;
  }

  return displayValue;
}
