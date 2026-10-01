# ByteSpace

Landing page for **ByteSpace**, an online-course platform, built from a Figma design. It also has bonus **Login** and **Sign Up** pages and a custom 404 page.

**Live site:** _add the Vercel URL here after deploying_

## Pages

- `/` – Landing page
- `/login` – Sign in (bonus)
- `/signup` – Sign up (bonus)

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · react-hook-form + zod · Vitest + React Testing Library · Vercel

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev          # start the dev server at http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint
npm run typecheck    # type-check with tsc
npm run test         # run the tests
npm run format       # format with Prettier
```

## Notes

- The Figma design is desktop-only (1440px). Mobile and tablet layouts are my own adaptation of it.
- There's no backend. The auth and newsletter forms validate in the browser and simulate submission.
- Components are layered (`ui` → `course`/`marketing` → `layout` → `sections`), and page content lives in `src/data`.
