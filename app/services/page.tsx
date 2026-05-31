import type { Metadata } from "next";
import { CTASection } from "@/components/layout/CTASection";
import { HeroSection } from "@/components/layout/HeroSection";
import {
  ServicesDetailSection,
  ServicesFAQSection,
  ServicesLocationSection,
  ServicesPhilosophySection,
} from "@/components/sections/services/ServicesSections";
import { servicesMetadata } from "@/lib/metadata";

export const metadata: Metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        headline="Training Built for Real Improvement"
        subheadline="Playmakers Academy offers focused, high-quality basketball training tailored to each athlete — whether they're coming in one-on-one or as part of a small group."
        size="default"
        className="pt-28"
      />
      <ServicesDetailSection />
      <ServicesPhilosophySection />
      <ServicesLocationSection />
      <ServicesFAQSection />
      <CTASection
        headline="Inquire About Availability"
        body="Individual and group spots are limited. Reach out today to discuss your athlete's goals and find the right training format."
        ctaLabel="Inquire About Availability"
      />
    </>
  );
}
