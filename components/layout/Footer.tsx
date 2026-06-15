import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [brandPrimary, brandSecondary] = SITE.program.split(" ");

  return (
    <footer className="border-t border-white/10 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl font-black uppercase tracking-tight text-text-primary">
                {brandPrimary}
              </span>
            </Link>
            <p className="mt-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {brandSecondary}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Premier basketball skills development for youth and teen athletes
              in the {SITE.location.region} area. Physical skill development
              paired with basketball IQ.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-text-primary">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-text-primary">
              Contact
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2 text-sm text-text-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-start gap-2 text-sm text-text-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-text-secondary">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {SITE.location.addressLine}
                    <br />
                    Serving {SITE.location.region}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-text-muted">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Website Built by{" "}
            <a
              href="https://www.jameswolf.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              James Wolf Web Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
