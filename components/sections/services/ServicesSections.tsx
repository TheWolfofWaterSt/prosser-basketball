import { faqItems } from "@/content/faq";
import { pillars } from "@/content/pillars";
import { pricingNote, services } from "@/content/services";
import { SITE } from "@/lib/constants";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PillarCard } from "@/components/ui/PillarCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { MapPin } from "lucide-react";

export function ServicesDetailSection() {
  return (
    <section
      className="bg-bg-secondary py-16 md:py-24"
      aria-labelledby="services-detail-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>What We Offer</SectionLabel>
          <h2 id="services-detail-heading" className="sr-only">
            Training services
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-secondary">
            {pricingNote}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ScrollReveal key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.description}
                audience={service.audience}
                features={service.sessionDetails}
                bestFor={service.bestFor}
                ctaLabel="Inquire About Availability"
                ctaHref="/contact"
                variant="detailed"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPhilosophySection() {
  return (
    <section
      className="bg-bg-primary py-16 md:py-24"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>The Training Philosophy</SectionLabel>
          <h2
            id="approach-heading"
            className="mt-3 max-w-3xl font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
          >
            What Makes the Approach Different
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Every session — individual or group — is built on the same three
            pillars that define Playmakers Academy.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <ScrollReveal key={pillar.title}>
              <PillarCard {...pillar} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesLocationSection() {
  return (
    <section
      className="bg-bg-secondary py-16 md:py-24"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Location</SectionLabel>
          <h2
            id="location-heading"
            className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
          >
            Where We Train
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <div className="flex flex-col gap-6 rounded-sm border border-white/10 bg-bg-elevated/50 p-6 md:flex-row md:items-start md:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-text-primary">
                {SITE.location.facility}
              </h3>
              <p className="mt-2 text-base text-text-secondary">
                {SITE.location.city}, {SITE.location.state}
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Sessions are held at the Wisconsin Playmakers facility in
                Altoona, WI — serving athletes across the {SITE.location.region}{" "}
                and Chippewa Valley. Regional travel sessions may be available
                upon request.
              </p>
              {/* PLACEHOLDER: Google Map embed can be added here when ready */}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ServicesFAQSection() {
  return (
    <section
      className="bg-bg-primary py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
          >
            Common Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <FAQAccordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  );
}
