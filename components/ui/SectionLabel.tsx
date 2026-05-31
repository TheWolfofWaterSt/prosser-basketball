import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}
