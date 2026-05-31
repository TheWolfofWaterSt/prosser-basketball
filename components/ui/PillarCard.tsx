import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function PillarCard({
  icon: Icon,
  title,
  description,
  className,
}: PillarCardProps) {
  return (
    <article
      className={cn(
        "group relative rounded-sm border border-white/10 bg-bg-elevated/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:p-8",
        className,
      )}
    >
      <div className="mb-5 inline-flex rounded-sm bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-text-primary md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-text-secondary">
        {description}
      </p>
    </article>
  );
}
