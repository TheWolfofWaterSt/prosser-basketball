import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function CTASection({
  headline = "Ready to Elevate Your Game?",
  body = "Spots are limited. The first step is a simple conversation — no commitment required. Reach out today and let's talk about what your athlete needs.",
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-accent py-16 md:py-20",
        className,
      )}
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="font-display text-3xl font-black uppercase tracking-tight text-bg-primary md:text-4xl lg:text-5xl"
        >
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-bg-primary/80 md:text-lg">
          {body}
        </p>
        <div className="mt-8">
          <Link
            href={ctaHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-bg-primary px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-text-primary shadow-xl transition-all hover:bg-bg-secondary hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg-primary focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
