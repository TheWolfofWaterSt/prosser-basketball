import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutBio } from "@/content/credentials";
import { pillars } from "@/content/pillars";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { SITE } from "@/lib/constants";
import { HeroSection } from "@/components/layout/HeroSection";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PillarCard } from "@/components/ui/PillarCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StatBadge } from "@/components/ui/StatBadge";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const credibilityStats = [
  { value: SITE.stats.athletesTrained, label: "Athletes Trained", animate: true },
  { value: "Varsity", label: "Assistant Coach — Eau Claire Memorial" },
  { value: "14U", label: "Head Coach — Wisconsin Playmakers" },
  { value: "EC", label: "Based in Eau Claire, WI" },
];

export function HomePhilosophySection() {
  return (
    <section
      className="bg-bg-secondary py-16 md:py-24"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>The Prosser Difference</SectionLabel>
          <h2
            id="philosophy-heading"
            className="mt-3 max-w-3xl font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl lg:text-5xl"
          >
            Why Playmakers Academy Is Different
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} className={`delay-${index * 100}`}>
              <PillarCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCredibilitySection() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-bg-primary py-12 md:py-16"
      aria-label="Credentials and stats"
    >
      <div
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black leading-none text-white/[0.02] md:text-[16rem]"
        aria-hidden="true"
      >
        40+
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {credibilityStats.map((stat) => (
            <StatBadge
              key={stat.label}
              value={stat.value}
              label={stat.label}
              animate={stat.animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeServicesSection() {
  return (
    <section
      id="services-snapshot"
      className="bg-bg-primary py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Training Options</SectionLabel>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
          >
            How We Train
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => (
            <ScrollReveal key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                ctaHref="/services"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeAboutTeaserSection() {
  return (
    <section
      className="bg-bg-secondary py-16 md:py-24"
      aria-labelledby="about-teaser-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            {/* PLACEHOLDER: Replace with Coach Rayce headshot or action photo */}
            <ImagePlaceholder
              label="Coach Rayce — Photo coming soon"
              aspectRatio="portrait"
              alt="Coach Rayce Prosser"
            />
          </ScrollReveal>
          <ScrollReveal>
            <SectionLabel>Your Coach</SectionLabel>
            <h2
              id="about-teaser-heading"
              className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
            >
              Meet Coach Rayce
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
              {aboutBio}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex min-h-[44px] items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Meet Coach Rayce
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonialsSection() {
  return (
    <section
      className="bg-bg-primary py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Social Proof</SectionLabel>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
          >
            What Athletes &amp; Parents Are Saying
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            {/* PLACEHOLDER: Replace placeholder testimonials with real quotes when available */}
            Real testimonials coming soon — layout is ready for your first
            client stories.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <ScrollReveal key={testimonial.quote}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <HeroSection
      badge={`${SITE.program} | ${SITE.location.region}`}
      headline="Basketball Skills Training in Eau Claire, WI"
      tagline="Train Your Game. Sharpen Your Mind."
      subheadline="Elite basketball skills training for youth and teen athletes. Physical development paired with basketball IQ — because skills without understanding don't win games."
      primaryCta={{ label: "Book a Session", href: "/contact" }}
      secondaryCta={{ label: "Learn More", href: "#services-snapshot" }}
      size="large"
      className="pt-32"
    />
  );
}
