import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  isPlaceholder?: boolean;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  isPlaceholder = false,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "relative flex flex-col rounded-sm border border-white/10 bg-bg-elevated/50 p-6 md:p-8",
        isPlaceholder && "border-dashed border-white/15",
        className,
      )}
    >
      {isPlaceholder && (
        <span className="mb-4 inline-block w-fit rounded-sm bg-accent/10 px-2 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-accent">
          Placeholder
        </span>
      )}
      <p className="flex-1 text-base leading-relaxed text-text-primary md:text-lg">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-white/10 pt-4">
        <cite className="not-italic">
          <span className="block font-display text-sm font-bold uppercase tracking-wide text-text-primary">
            {name}
          </span>
          <span className="mt-1 block text-sm text-text-secondary">{role}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
