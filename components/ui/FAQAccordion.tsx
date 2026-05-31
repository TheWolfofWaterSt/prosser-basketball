"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/content/faq";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-white/10 rounded-sm border border-white/10", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="bg-bg-elevated/30">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent md:px-6"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-display text-base font-bold uppercase tracking-wide text-text-primary md:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden px-5 pb-5 md:px-6 md:pb-6",
                !isOpen && "hidden",
              )}
            >
              <p className="text-base leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
