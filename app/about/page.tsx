import type { Metadata } from "next";
import { CTASection } from "@/components/layout/CTASection";
import { HeroSection } from "@/components/layout/HeroSection";
import {
  AboutCredentialsSection,
  AboutPhilosophySection,
  AboutStatsSection,
} from "@/components/sections/about/AboutSections";
import { aboutBio, aboutIntro } from "@/content/credentials";
import { aboutMetadata } from "@/lib/metadata";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <HeroSection
        headline="Meet Coach Rayce"
        subheadline={`${aboutIntro} ${aboutBio}`}
        size="default"
        className="pt-28"
      />

      <section
        className="bg-bg-primary pb-8 md:pb-16"
        aria-label="Coach photo"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-md">
            {/* PLACEHOLDER: Replace with Coach Rayce photo */}
            <ImagePlaceholder
              label="Coach Rayce — Photo coming soon"
              aspectRatio="portrait"
              alt="Coach Rayce Prosser, basketball skills coach in Eau Claire WI"
            />
          </ScrollReveal>
        </div>
      </section>

      <AboutPhilosophySection />
      <AboutCredentialsSection />
      <AboutStatsSection />
      <CTASection
        headline="Ready to Train with Rayce?"
        body="Let's talk about your athlete's goals. No commitment required — just reach out and we'll figure out what works."
        ctaLabel="Let's Talk"
      />
    </>
  );
}
