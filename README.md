# CA Drive Prep Coach

Interactive study guide for the **California Class C driver’s knowledge test**.

This is an **independent study tool** — not the official DMV test and not affiliated with the California DMV. Questions are **original practice items** written to test the same knowledge as the official handbook (not copyrighted DMV exam questions).

## Features (MVP)

- **Full practice tests** — 46 questions, 38 to pass
- **Study mode** — immediate feedback + explanations after each question
- **Exam simulation** — feedback only at the end
- **Custom timer** — optional timed mode with presets or custom minutes
- **Forward-only flow** — review after finishing
- **Topic quizzes** — study by handbook section (weighted toward high-miss areas)
- **Progress dashboard** — accuracy, weak topics, recent sessions (localStorage)
- **Reference** — cheat sheets + SVG traffic sign guide
- **Dark mode** — toggle in the header
- **Mobile-first** UI with official-feel styling

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Client-side only for MVP (no backend, no accounts)

## Requirements

- Node.js 18+ (20+ recommended)
- npm

## Run locally

```bash
cd ca-drive-prep-coach
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Share / deploy

The app is static-friendly (no server data layer). Deploy the project to any Node host that supports Next.js, for example:

### Vercel

1. Push this folder to a GitHub/GitLab/Bitbucket repo
2. Import the repo in [Vercel](https://vercel.com)
3. Framework preset: **Next.js** (defaults are fine)
4. Deploy — share the generated URL

### Other hosts

Any platform that runs `next build` + `next start` (or supports Next.js output) works. No environment variables are required for the MVP.

## Project structure

```
src/
  app/                 # Routes (dashboard, practice, topics, reference)
  components/          # UI, quiz engine, signs, providers
  data/
    questions/         # Expandable question bank by topic
    reference.ts       # Cheat sheets + sign metadata
  lib/                 # Types, constants, quiz helpers, localStorage
```

## Expand the question bank

Add questions in `src/data/questions/<topic>.ts` using the `q()` helper:

```ts
q("rules-of-the-road", {
  id: "rr-100",
  prompt: "...",
  options: ["A", "B", "C", "D"],
  correctIndex: 0,
  explanation: "...",
  difficulty: "high-miss", // optional
  signId: "stop",          // optional SVG key
  tags: ["right-of-way"],
});
```

Then ensure the file is imported in `src/data/questions/index.ts`.

## Scoring

| Setting | Value |
|--------|--------|
| Questions per full test | 46 |
| Passing score | 38 correct (~83%) |
| Progress storage | Browser `localStorage` |

## Disclaimer

Always verify rules, limits, and procedures with the **current official California Driver Handbook** and DMV resources before your exam. Laws and handbook details can change.
