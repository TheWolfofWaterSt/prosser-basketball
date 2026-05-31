import { credentials, philosophyQuotes, aboutIntro } from "@/content/credentials";
import { pillars } from "@/content/pillars";
import { SITE } from "@/lib/constants";
import { CredentialBadge } from "@/components/ui/CredentialBadge";
import { PillarCard } from "@/components/ui/PillarCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatBadge } from "@/components/ui/StatBadge";

export function AboutPhilosophySection() {
  return (
    <section
      className="bg-bg-secondary py-16 md:py-24"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Coaching Philosophy</SectionLabel>
          <h2
            id="philosophy-heading"
            className="mt-3 max-w-3xl font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
          >
            More Than Drills — Basketball Thinkers
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
            {aboutIntro} Rayce&apos;s approach goes beyond running drills. He
            develops athletes who understand the game — who know why they&apos;re
            making every move, read situations before they happen, and perform
            when it matters most.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {philosophyQuotes.map((item) => (
            <ScrollReveal key={item.quote}>
              <blockquote className="relative rounded-sm border border-accent/20 bg-bg-elevated/50 p-6 md:p-8">
                <div
                  className="absolute left-4 top-4 font-display text-6xl leading-none text-accent/20"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="relative text-lg leading-relaxed text-text-primary md:text-xl">
                  {item.quote}
                </p>
                <footer className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-accent">
                  — {item.attribution}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
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

export function AboutCredentialsSection() {
  return (
    <section
      className="bg-bg-primary py-16 md:py-24"
      aria-labelledby="credentials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Credentials</SectionLabel>
          <h2
            id="credentials-heading"
            className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-text-primary md:text-4xl"
          >
            Affiliations &amp; Experience
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {credentials.map((credential) => (
            <ScrollReveal key={credential.title}>
              <CredentialBadge {...credential} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutStatsSection() {
  return (
    <section
      className="border-y border-white/10 bg-bg-secondary py-16 md:py-20"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col items-center text-center">
          <SectionLabel>By the Numbers</SectionLabel>
          <h2 id="stats-heading" className="sr-only">
            Training statistics
          </h2>
          <div className="mt-6">
            <StatBadge
              value={SITE.stats.athletesTrained}
              label="Athletes Trained and Counting"
              animate
              className="text-center"
            />
          </div>
          <p className="mt-6 max-w-xl text-base text-text-secondary md:text-lg">
            Every athlete gets the same level of attention and detail — whether
            they&apos;re picking up a basketball for the first time or preparing
            for a travel team season.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}