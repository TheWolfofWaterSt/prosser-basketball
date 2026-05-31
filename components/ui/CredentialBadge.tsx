import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CredentialBadgeProps {
  icon: LucideIcon;
  title: string;
  organization: string;
  className?: string;
}

export function CredentialBadge({
  icon: Icon,
  title,
  organization,
  className,
}: CredentialBadgeProps) {
  return (
    <article
      className={cn(
        "flex gap-4 rounded-sm border border-white/10 bg-bg-elevated/50 p-5 transition-colors hover:border-accent/20 md:p-6",
        className,
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-display text-base font-bold uppercase tracking-wide text-text-primary md:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-sm text-text-secondary">{organization}</p>
      </div>
    </article>
  );
}
