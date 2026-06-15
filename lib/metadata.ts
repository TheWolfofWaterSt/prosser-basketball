import type { Metadata } from "next";
import { SITE } from "./constants";

const defaultOg = {
  siteName: SITE.name,
  locale: "en_US",
  type: "website" as const,
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE.program}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...defaultOg,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: "Basketball Skills Training Eau Claire WI",
  description:
    "Prosser Basketball offers elite youth and teen basketball skills training in Eau Claire, WI. Physical skill development paired with basketball IQ. Individual and group sessions available.",
  path: "/",
});

export const aboutMetadata = createPageMetadata({
  title: "Meet Coach Rayce Prosser",
  description:
    "Meet Rayce Prosser — varsity assistant coach at Eau Claire Memorial, 15U head coach of the 2029 Playmakers National Team, and founder of Prosser Basketball LLC in the Eau Claire area.",
  path: "/about",
});

export const servicesMetadata = createPageMetadata({
  title: "Individual & Group Basketball Training",
  description:
    "Individual and small group basketball training sessions for youth and teen athletes in Eau Claire, WI. Sessions held at Wisconsin Playmakers in Altoona. Inquire about availability.",
  path: "/services",
});

export const contactMetadata = createPageMetadata({
  title: "Contact & Book Training",
  description:
    "Reach out to Rayce Prosser at Prosser Basketball LLC. No commitment required — inquire about individual or group basketball training in the Eau Claire and Chippewa Valley area.",
  path: "/contact",
});
