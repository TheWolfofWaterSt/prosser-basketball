import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://prosser-basketball.vercel.app",
  ),
  title: `${SITE.program} | Basketball Training ${SITE.location.region}`,
  description:
    "Elite youth and teen basketball skills training in Eau Claire, WI. Individual and group sessions focused on physical skill development and basketball IQ.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary font-body antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-16 rounded-sm bg-accent px-4 py-2 font-display text-sm font-bold uppercase text-bg-primary opacity-0 transition-all focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-text-primary"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <NavBar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
