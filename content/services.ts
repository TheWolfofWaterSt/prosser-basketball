export interface Service {
  id: "individual" | "group";
  title: string;
  shortDescription: string;
  description: string;
  audience: string;
  sessionDetails: string[];
  bestFor: string;
}

export const services: Service[] = [
  {
    id: "individual",
    title: "Individual Training",
    shortDescription:
      "One-on-one sessions tailored to your athlete's specific goals, skill level, and development areas.",
    description:
      "Focused, high-intensity sessions built entirely around your athlete. Rayce assesses strengths and gaps, then designs a session that targets exactly what needs work — from ball handling and shooting mechanics to decision-making and basketball IQ.",
    audience: "Youth and teen athletes ages 6–18, all skill levels",
    sessionDetails: [
      "Personalized skill assessment and development plan",
      "Ball handling, shooting, footwork, and finishing work",
      "Mental game training — reads, decisions, and situational awareness",
      "Competitive drill work with immediate feedback and correction",
    ],
    bestFor:
      "Athletes who want maximum attention, rapid improvement in specific areas, or preparation for tryouts and travel team seasons.",
  },
  {
    id: "group",
    title: "Group Training",
    shortDescription:
      "Small group sessions that combine skill development with competitive, game-like situations.",
    description:
      "Train alongside other motivated athletes in a small group setting. Sessions blend individual skill work with competitive drills, situational play, and the kind of pressure that builds real game performance.",
    audience: "Small groups of youth and teen athletes, similar skill levels",
    sessionDetails: [
      "Small group sizes for meaningful reps and coaching attention",
      "Competitive drill circuits and game-situation scenarios",
      "Skill development across ball handling, shooting, and defense",
      "Team-oriented competitive stamina and communication work",
    ],
    bestFor:
      "Athletes who thrive in competitive environments, siblings or teammates training together, or players looking for a more affordable entry point.",
  },
];

export const pricingNote =
  "Pricing is shared after a quick conversation — no surprise sticker shock. Reach out to discuss what works for your athlete.";
