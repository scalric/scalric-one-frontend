# scalric-one-web

Frontend for Scalric One. Next.js (App Router, JavaScript), same setup as `scalric-website`.
Calls the backend through `/api/*`, which Next proxies to `scalric-one-api`.

## Setup

Requires Node 20+.

```bash
npm install
cp .env.example .env.local   # API_ORIGIN defaults to http://127.0.0.1:3002
npm run dev
```

Open http://127.0.0.1:3000. Start `../scalric-one-api` too so `/api/v1/health` works.

## Scripts

- `npm run dev` - dev server
- `npm run build` / `npm start` - production build and run

## Layout

- `src/app/` - pages (App Router)
- `next.config.mjs` - proxies `/api/*` to the backend
