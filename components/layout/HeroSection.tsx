import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  badge?: string;
  headline: string;
  tagline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  badge,
  headline,
  tagline,
  subheadline,
  primaryCta,
  secondaryCta,
  align = "left",
  size = "default",
  className,
  children,
}: HeroSectionProps) {
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-bg-primary",
        size === "large" ? "py-24 md:py-32 lg:py-40" : "py-16 md:py-24",
        className,
      )}
    >
      {/* Court texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23F5821F' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-4xl",
            isCenter && "mx-auto text-center",
          )}
        >
          {badge && (
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              {badge}
            </p>
          )}
          <h1
            className={cn(
              "font-display font-black uppercase leading-[0.95] tracking-tight text-text-primary",
              size === "large"
                ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                : "text-3xl sm:text-4xl md:text-5xl",
            )}
          >
            {headline}
          </h1>
          {tagline && (
            <p
              className={cn(
                "mt-4 font-display text-2xl font-bold uppercase tracking-wide text-accent sm:text-3xl md:text-4xl",
                isCenter && "mx-auto",
              )}
            >
              {tagline}
            </p>
          )}
          {subheadline && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl",
                isCenter && "mx-auto",
              )}
            >
              {subheadline}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "mt-10 flex flex-col gap-4 sm:flex-row",
                isCenter && "sm:justify-center",
              )}
            >
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta &&
                (secondaryCta.href.startsWith("#") ? (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/20 px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-text-primary transition-all hover:border-accent/50 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Button href={secondaryCta.href} variant="secondary" size="lg">
                    {secondaryCta.label}
                  </Button>
                ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
