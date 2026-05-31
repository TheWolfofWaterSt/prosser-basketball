export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isPlaceholder?: boolean;
}

// PLACEHOLDER: Replace with real testimonials from parents and athletes when available.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Rayce doesn't just run drills — he teaches my son to think the game. The improvement in his decision-making has been noticeable from the first few sessions.",
    name: "Parent",
    role: "Parent of a 12U athlete",
    isPlaceholder: true,
  },
  {
    quote:
      "The intensity and attention to detail in every session is unlike anything we've experienced. My daughter actually looks forward to the hard work.",
    name: "Parent",
    role: "Parent of a travel player",
    isPlaceholder: true,
  },
  {
    quote:
      "Coach Rayce pushes you but he also explains everything. I finally understand why I'm doing certain moves, not just how to do them.",
    name: "Athlete",
    role: "High school player",
    isPlaceholder: true,
  },
];
