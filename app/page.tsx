import type { Metadata } from "next";
import { CTASection } from "@/components/layout/CTASection";
import {
  HomeAboutTeaserSection,
  HomeCredibilitySection,
  HomeHero,
  HomePhilosophySection,
  HomeServicesSection,
  HomeTestimonialsSection,
} from "@/components/sections/home/HomeSections";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePhilosophySection />
      <HomeCredibilitySection />
      <HomeServicesSection />
      <HomeAboutTeaserSection />
      <HomeTestimonialsSection />
      <CTASection />
    </>
  );
}
