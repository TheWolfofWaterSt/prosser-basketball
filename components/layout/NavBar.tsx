"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMobileOpen
          ? "border-b border-white/10 bg-bg-primary/95 shadow-lg backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
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
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
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

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 bg-bg-primary/98 backdrop-blur-lg transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isMobileOpen}
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
          <Button href={PRIMARY_CTA.href} size="lg" className="mt-4 w-full" onClick={closeMobileMenu}>
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
