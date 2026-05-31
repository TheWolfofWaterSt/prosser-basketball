import { Award, Building2, GraduationCap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Credential {
  icon: LucideIcon;
  title: string;
  organization: string;
}

export const credentials: Credential[] = [
  {
    icon: GraduationCap,
    title: "Assistant Varsity Coach",
    organization: "Eau Claire Memorial HS — Boys Basketball",
  },
  {
    icon: Trophy,
    title: "Head Coach, 14U Boys",
    organization: "Wisconsin Playmakers",
  },
  {
    icon: Building2,
    title: "Owner & Operator",
    organization: "Prosser Basketball LLC / Playmakers Academy",
  },
  {
    icon: Award,
    title: "Lifelong Student & Coach",
    organization: "Of the game of basketball",
  },
];

export const philosophyQuotes = [
  {
    quote:
      "Skills without understanding don't win games. I develop basketball thinkers — athletes who know why they're making every move.",
    attribution: "Rayce Prosser",
  },
  {
    quote:
      "The best players aren't just physically gifted. They see the game differently. That's what we build here.",
    attribution: "Rayce Prosser",
  },
];

export const aboutBio =
  "Rayce Prosser has been around basketball his entire life — as a player, a student of the game, and now as a coach embedded in the Eau Claire community. He serves as an assistant varsity coach at Eau Claire Memorial High School and head coach of a 14U boys travel team with Wisconsin Playmakers. Through Playmakers Academy, Rayce brings that same level of commitment and detail to every athlete he trains.";

export const aboutIntro =
  "Rayce isn't an outsider dropping in for sessions. He lives and breathes Eau Claire basketball — coaching at Memorial, leading a Playmakers travel team, and training the next generation of players through his own program.";
