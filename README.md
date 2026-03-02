# infographic-next

Interactive scrapbook-style infographic for MLN131 built with Next.js 16 + React 19.

The product focuses on three learning sections:
- Section 1: drag/drop concept board for democracy origins and evolution.
- Section 2: drag/drop concept board for socialist democracy emergence and nature.
- Section 3: structured comparison and practical examples (non drag/drop).

## Core Routes

| Route | Purpose |
| --- | --- |
| `/` | Home board with links to all sections |
| `/section/1` | Interactive board: "Dân chủ" |
| `/section/2` | Interactive board: "Dân chủ xã hội chủ nghĩa" |
| `/section/3` | Comparison board + flashcards |
| `/api/exports/section/[id]` | Download static PNG export for a section |

## Main Features

1. Scrapbook visual system (paper, tape, pushpin, thread overlays) via `styles/scrapbook.css`.
2. dnd-kit drag/drop for Section 1 and Section 2 with grouped drop-zone logic.
3. Zustand persisted store with migration sanitization in `stores/quiz-store.ts`.
4. Section-specific reset actions that clear only relevant progress.
5. Ribbon celebration on completion and gated export buttons.
6. Static PNG export API backed by Cloudinary assets.

## Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js `16.1.6` (App Router) |
| UI | React `19.2.3`, Tailwind CSS v4, custom CSS |
| DnD | `@dnd-kit/core`, `@dnd-kit/sortable` |
| Animation | `framer-motion` |
| State | `zustand` + `persist` middleware |
| Capture tooling | Playwright (`scripts/capture-section-static-png.mjs`) |

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
npm run capture:sections
```

## Static Export Workflow

1. Generate section screenshots:

```bash
npm run capture:sections
```

2. Upload generated PNG files from `artifacts/section-export/` to Cloudinary.
3. Update `lib/section-static-export-assets.ts` with `cloudinaryUrl` and `ready`.
4. Users download via `/api/exports/section/[id]` through `ExportButton`.

Optional capture env vars:
- `CAPTURE_BASE_URL` (default: `http://127.0.0.1:3000`)
- `CAPTURE_OUTPUT_DIR` (default: `artifacts/section-export`)

## Project Structure

```text
app/                 # App Router pages + API route
components/          # UI/layout/section components
lib/                 # Content and interactive data models
stores/              # Zustand stores
styles/              # Main scrapbook visual system
scripts/             # Utilities (static PNG capture)
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
- Section 3 export asset is configured as `ready: false` in `lib/section-static-export-assets.ts`.
