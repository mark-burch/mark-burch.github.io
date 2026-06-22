# mark-burch.github.io

Source for my personal site and blog — coding, software engineering in the age of AI, and the politics around it. Built with [Next.js](https://nextjs.org/) (static export) and deployed to GitHub Pages.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build

```bash
pnpm build        # static site to ./out
pnpm serve        # preview the production build locally
```

Blog posts are MDX files in [`content/blog`](content/blog). Pushing to `main` triggers the Pages deploy defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
