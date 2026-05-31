import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  audience?: string;
  features?: string[];
  bestFor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "compact" | "detailed";
  className?: string;
}

export function ServiceCard({
  title,
  description,
  audience,
  features,
  bestFor,
  ctaLabel = "Learn More",
  ctaHref = "/services",
  variant = "compact",
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-sm border border-white/10 bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 md:p-8",
        variant === "detailed" && "lg:p-10",
        className,
      )}
    >
      <div className="mb-4 h-1 w-12 bg-accent transition-all group-hover:w-16" />
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary md:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-text-secondary">
        {description}
      </p>

      {audience && (
        <p className="mt-4 text-sm font-medium text-text-primary">
          <span className="text-accent">Who:</span> {audience}
        </p>
      )}

      {features && features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-text-secondary"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {bestFor && (
        <p className="mt-6 rounded-sm border border-white/5 bg-bg-primary/50 p-4 text-sm text-text-secondary">
          <span className="font-semibold text-text-primary">Best for: </span>
          {bestFor}
        </p>
      )}

      <div className="mt-auto pt-8">
        <Link
          href={ctaHref}
          className="inline-flex min-h-[44px] items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated"
        >
          {ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
