# About

> [!note] Based on tutorial by Aleksander Tidemann
> [link](https://aleksati.net/posts/how-to-use-p5js-with-nextjs-in-2024)

This is a template project made up of [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with added and configured [p5.js](https://www.npmjs.com/package/p5).

# Getting Started

First, bootstrap your project:

```bash
npx create-next-app@latest nextjs-p5 --use-pnpm --example "https://github.com/alexlipovka/starter-nextjs-p5js.git"
```

Start dev server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# General Info

## Libraries installed

This template contains the following libraries:
- `p5` → `pnpm add p5@latest`
- `p5Types` → `pnpm add -D @types/p5`

## Files

- `/src/app/sketches/*.ts` — that's where sketches go
- `/src/types/global.d.ts` — type definitions are here
- `/src/P5jsContainer.tsx` — Basic React Component for p5
  - Import sketch `import { mySketch } from "./sketches/mysketch";`
  - Call `<P5jsContainer sketch={mySketch} />`
