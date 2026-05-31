# Prosser Basketball LLC

Production website for **Prosser Basketball LLC** / **Playmakers Academy** — youth and teen basketball skills training in the Eau Claire, WI area.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and update when you have a custom domain:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Contact Form

The contact form validates input client-side, logs the submission to the browser console, and opens the user's email client with a pre-filled message to `prosserbasketball8@gmail.com`. When you're ready for serverless form handling, wire up Formspree, Netlify Forms, or similar.

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy — no environment variables required for initial launch
4. Optionally set `NEXT_PUBLIC_SITE_URL` to your Vercel URL for canonical URLs and sitemap

## Pages

- `/` — Home
- `/about` — Meet Coach Rayce
- `/services` — Individual & group training
- `/contact` — Inquiry form and direct contact info
