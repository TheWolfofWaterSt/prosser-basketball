import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
  alt?: string;
}

const aspectStyles = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  label = "Photo coming soon",
  aspectRatio = "video",
  className,
  alt = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm border border-white/10",
        aspectStyles[aspectRatio],
        className,
      )}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    >
      {/* PLACEHOLDER: Replace with real photography when available */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-elevated to-bg-primary" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5821F' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <Circle
          className="h-12 w-12 text-accent/40"
          strokeWidth={1}
          aria-hidden="true"
        />
        <span className="font-display text-xs font-semibold uppercase tracking-widest text-text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}
