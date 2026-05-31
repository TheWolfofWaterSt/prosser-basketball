import type { Metadata } from "next";
import { HeroSection } from "@/components/layout/HeroSection";
import { ContactInfoSection } from "@/components/sections/contact/ContactSections";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <HeroSection
        headline="Get in Touch"
        subheadline="No commitment required — just reach out and we'll figure out what works for your athlete. Spots are available and Rayce responds promptly."
        size="default"
        align="center"
        className="pt-28"
      />
      <ContactInfoSection />
    </>
  );
}
