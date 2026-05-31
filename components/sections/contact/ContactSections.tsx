import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";

export function ContactInfoSection() {
  return (
    <section
      className="bg-bg-secondary py-16 md:py-24"
      aria-labelledby="contact-info-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <ScrollReveal className="lg:col-span-3">
            <SectionLabel>Send a Message</SectionLabel>
            <h2 id="contact-info-heading" className="sr-only">
              Contact form
            </h2>
            <div className="mt-6 rounded-sm border border-white/10 bg-bg-elevated/30 p-6 md:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2">
            <SectionLabel>Direct Contact</SectionLabel>
            <div className="mt-6 space-y-6">
              <div className="rounded-sm border border-white/10 bg-bg-elevated/30 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-text-primary">
                  Email
                </h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-3 flex items-center gap-3 text-base text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </div>

              <div className="rounded-sm border border-white/10 bg-bg-elevated/30 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-text-primary">
                  Phone
                </h3>
                <a
                  href={SITE.phoneHref}
                  className="mt-3 flex items-center gap-3 text-base text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </div>

              <div className="rounded-sm border border-white/10 bg-bg-elevated/30 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-text-primary">
                  Location
                </h3>
                <div className="mt-3 flex items-start gap-3 text-base text-text-secondary">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {SITE.location.addressLine}
                    <br />
                    Serving {SITE.location.region}
                  </span>
                </div>
              </div>

              <p className="text-sm text-text-muted">
                Rayce typically responds within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
