# infographic-next

Interactive scrapbook-style infographic for MLN131 built with Next.js 16 + React 19.

The product focuses on three learning sections:
- Section 1: drag/drop concept board for democracy origins and evolution.
- Section 2: drag/drop concept board for socialist democracy emergence and nature.
- Section 3: drag/drop comparison matrix with practical examples.

## Core Routes

| Route | Purpose |
| --- | --- |
| `/` | Home board with links to all sections |
| `/section/1` | Interactive board: "Dân chủ" |
| `/section/2` | Interactive board: "Dân chủ xã hội chủ nghĩa" |
| `/section/3` | Interactive comparison board + practical examples |
| `/api/exports/section/[id]` | Download static PNG export for a section |

## Main Features

1. Scrapbook visual system (paper, tape, pushpin, thread overlays) via `styles/scrapbook.css`.
2. dnd-kit drag/drop for all 3 sections with grouped and fixed drop-zone logic.
3. Zustand persisted store with migration sanitization in `stores/quiz-store.ts`.
4. Section-specific reset actions that clear only relevant progress.
5. Global loading gate that preloads Cloudinary images before rendering boards.
6. Ribbon celebration on completion and gated export buttons.
7. Static PNG export API backed by Cloudinary assets.

## Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js `16.1.6` (App Router) |
| UI | React `19.2.3`, Tailwind CSS v4, custom CSS |
| DnD | `@dnd-kit/core`, `@dnd-kit/sortable` |
| Animation | `framer-motion` |
| State | `zustand` + `persist` middleware |

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful scripts:

```bash
npm run lint
npm run build
npm run start
```

## Static Export Workflow

1. Upload static PNG exports to Cloudinary.
2. Update paths in `lib/cloudinary.ts` for:
   - `sectionExport1`
   - `sectionExport2`
   - `sectionExport3`
3. Users download via `/api/exports/section/[id]` through `ExportButton`.

Note: capture automation script was removed to keep production bundle and maintenance scope lean.

## Project Structure

```text
app/                 # App Router pages + API route
components/          # UI/layout/section components
lib/                 # Content and interactive data models
stores/              # Zustand stores
styles/              # Main scrapbook visual system
```

## Documentation

Detailed docs are in `docs/`:
- `docs/project-overview-pdr.md`
- `docs/codebase-summary.md`
- `docs/code-standards.md`
- `docs/system-architecture.md`
- `docs/project-roadmap.md`
- `docs/deployment-guide.md`
- `docs/design-guidelines.md`

## Current Gaps

- No automated unit/integration/e2e test suite in repo yet.
