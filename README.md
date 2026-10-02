# jynx-xox.github.io

Personal portfolio of Kendeo "Ken" Gosti — Math–Computer Science @ UC San Diego.

Built with Next.js (static export), TypeScript, and Tailwind CSS. No animation
libraries — motion is handled with CSS transitions and a small
IntersectionObserver component.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All text, links, projects, experience, and skills live in
[`data/content.ts`](data/content.ts). Placeholders are marked `[PLACEHOLDER]`.
Add a project by copying one object in the `projects` array — the index row
and the detail page at `/projects/<slug>/` are generated automatically.

Add your resume PDF as `public/resume.pdf` (the links already point there).

## Deploy

Pushing to `main` builds and deploys via GitHub Actions. In the repo settings,
set **Pages → Source** to "GitHub Actions".