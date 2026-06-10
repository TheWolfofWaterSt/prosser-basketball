"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  const closeMobileMenu = () => setIsMobileOpen(false);

  const mobileMenu =
    isMounted && isMobileOpen
      ? createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[60] overflow-y-auto bg-bg-primary pt-[4.5rem] lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-6 sm:px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "min-h-[44px] rounded-sm px-4 py-3 font-display text-lg font-bold uppercase tracking-wide transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    pathname === link.href ? "text-accent" : "text-text-primary",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href={PRIMARY_CTA.href}
                size="lg"
                className="mt-4 w-full"
                onClick={closeMobileMenu}
              >
                {PRIMARY_CTA.label}
              </Button>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-colors duration-300",
          isScrolled || isMobileOpen
            ? "border-b border-white/10 bg-bg-primary shadow-lg"
            : "bg-transparent",
        )}
      >
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
            onClick={closeMobileMenu}
          >
            <span className="font-display text-lg font-black uppercase leading-none tracking-tight text-text-primary transition-colors group-hover:text-accent md:text-xl">
              {SITE.name.split(" ")[0]} Basketball
            </span>
            <span className="mt-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-accent md:text-xs">
              {SITE.program}
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-sm font-semibold uppercase tracking-widest transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-secondary",
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={PRIMARY_CTA.href}
              size="sm"
              className="animate-pulse-subtle motion-reduce:animate-none"
            >
              {PRIMARY_CTA.label}
            </Button>
          </div>

          <button
            type="button"
            className="relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>
      {mobileMenu}
    </>
  );
}
