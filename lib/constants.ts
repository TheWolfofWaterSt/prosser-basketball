export const SITE = {
  name: "Prosser Basketball LLC",
  program: "Prosser Basketball",
  aauTeam: "2029 Playmakers National Team",
  coach: "Rayce Prosser",
  tagline: "Train Your Game. Sharpen Your Mind.",
  email: "prosserbasketball8@gmail.com",
  phone: "920-209-2909",
  phoneHref: "tel:+19202092909",
  location: {
    facility: "Wisconsin Playmakers",
    city: "Altoona",
    state: "WI",
    region: "Eau Claire, WI",
    serviceArea: "Eau Claire region and regional travel",
    addressLine: "Wisconsin Playmakers, Altoona, WI",
  },
  stats: {
    athletesTrained: "60+",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const PRIMARY_CTA = {
  label: "Get in Touch",
  href: "/contact",
} as const;
