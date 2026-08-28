# Architecture Overview — Hello World

## Shape

Static frontend only. No backend, no database, no persistence, no server API.

## Stack

| Area | Choice | Reason | Rejected alternative |
|---|---|---|---|
| Frontend | Next.js 15 App Router + TypeScript | Matches repository default and static UI needs | Plain HTML would work but breaks team story/component workflow |
| Styling | Tailwind v3 plus CSS design tokens in `app/globals.css` | Keeps story CSS token-based and CI-checkable | Component-local hardcoded values drift from approved design |
| Backend | None | SRS says browser-only greeting update and no stored data | Go service would be dead weight |
| Database | None | No data leaves browser | PostgreSQL would add migrations and runtime dependency with no use |
| Runtime | `docker compose up` from repo root | Existing compose boots static frontend container | Custom scripts would bypass container parity |

## Repository layout

```text
code/
  frontend/
    app/layout.tsx        # app shell and metadata
    app/page.tsx          # composition root; stories add imports and elements here
    app/globals.css       # shared tokens, base styles, reusable utilities
    components/           # story components, PascalCase filenames
    lib/mock/             # browser-only mock data when needed by stories
docs/
  general/SRS.md
  architecture/overview.md
```

`code/backend/` intentionally absent for this project shape. CI skips backend when `code/backend/go.mod` does not exist.

## Frontend conventions

- App Router Server Components by default.
- Component files that use state, events, effects, refs, or browser APIs must start with literal first line `"use client"`.
- Every React component file uses `export default function ComponentName()`.
- Story component file names use PascalCase from story title.
- `app/page.tsx` stays thin: imports grouped at top, JSX only composes story children.
- Shared visual values live in `app/globals.css` tokens. CSS modules use `var(--token)` and no fallbacks.
- Token categories present: colour, spacing, typography size/weight/tracking/line-height, radius, shadow, motion.
- No navigation, footer, extra sections, API calls, or persistence unless SRS changes.

## Environment variables

Frontend reads no runtime env vars now. `code/frontend/.env.example` is still tracked for service contract clarity.

| Service | Key | Required | Purpose |
|---|---|---|---|
| frontend | none | no | Static page has no external configuration |

## Run and verify

From repository root:

```bash
docker compose up --build
```

Local frontend workflow:

```bash
cd code/frontend
npm ci
npm run lint
npm run build
npm test --if-present
npm run start
```

CI gate in `.github/workflows/ci.yml` runs frontend install, lint, build, optional tests, and CSS token checks on pull requests.

## Decisions and risks

| Decision | Why | Tradeoff |
|---|---|---|
| Skip backend and DB | Requirement is static browser-only greeting | Future persistence needs new architecture task |
| Keep `page.tsx` empty of product markup | First story owns Hello World UI | Scaffold looks blank until story mounts component |
| Define full token set now | Story authors cannot edit globals later | Some tokens may be unused until story lands |
| No new dependencies beyond Next/Tailwind/ESLint stack | Static page needs no client state library | Hand-written browser state is enough |

## Rollout notes

No migrations, compatibility constraints, or secrets. First feature PR mounts Hello World component into `app/page.tsx` and implements browser-only heading update.
