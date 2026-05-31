import { SITE } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    alternateName: SITE.program,
    description:
      "Youth and teen basketball skills training in the Eau Claire, WI area. Individual and small group sessions focused on physical skill development and basketball IQ.",
    email: SITE.email,
    telephone: SITE.phone,
    url: "/",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 44.8113,
        longitude: -91.4985,
      },
      geoRadius: "50000",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.state,
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: SITE.coach,
      jobTitle: "Basketball Skills Coach",
    },
    priceRange: "$$",
    knowsAbout: [
      "Youth basketball training",
      "Basketball skills development",
      "Individual basketball coaching",
      "Group basketball training",
    ],
  };
}
