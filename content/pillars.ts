import { Brain, Dumbbell, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const pillars: Pillar[] = [
  {
    icon: Brain,
    title: "Physical + Mental Development",
    description:
      "Most trainers work on your handles. We work on your mind. Rayce teaches the why and when — not just the how — so skills translate to real game situations.",
  },
  {
    icon: Dumbbell,
    title: "Competitive Stamina",
    description:
      "Training built for players who want to compete, perform under pressure, and push their limits. Every session demands focus and effort from start to finish.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description:
      "Small habits, refined mechanics, and micro-adjustments compound into major improvement over time. The details are where good players become great ones.",
  },
];
