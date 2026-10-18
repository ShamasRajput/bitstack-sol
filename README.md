# Bitstack Solutions

The supplied agency design implemented with **Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lenis**. All eight pages are React components with shared navigation and footer. Marketing pages are prerendered; project submissions run through a Next.js Route Handler.

## Development

Requires Node.js 22+ and npm.

```powershell
npm install
npm run dev
```

Open **http://localhost:3000**. Next.js refreshes the page when you edit source files.

## Production

```powershell
npm run build
npm start
```

This project requires a Next.js Node server because it accepts form submissions. Static export and opening HTML files directly are not supported.

## Project structure

```text
src/
  app/
    page.tsx                   Home
    services/page.tsx          Services overview
    automation/page.tsx        AI automation
    web-development/page.tsx   Web development
    integrations/page.tsx      Systems integration
    work/page.tsx              Concept portfolio
    about/page.tsx             Agency approach
    contact/page.tsx           Guided project brief
    api/inquiries/route.ts     POST submission endpoint
    layout.tsx                 Shared shell and metadata
    template.tsx               Page entrance animation
    globals.css                Tailwind theme and preserved design styles
  components/                 Navigation, footer, form, animations, terminal
  lib/
    inquiry-schema.ts          Shared Zod validation and TypeScript types
    inquiries.ts               Request validation, rate limit, private storage
public/assets/bitstack.svg     Bitstack code-mark favicon
test/                         API and browser tests
```

Clean URLs replace the original `.html` URLs. Old page links permanently redirect and preserve query parameters.

## Styling and animation

Tailwind v4 is configured through `@tailwindcss/postcss`; theme colors are defined in `globals.css`. Detailed original layouts and illustrations are retained in the components layer so Tailwind utilities can override them. The form and shared shell use Tailwind utilities alongside these design styles.

Framer Motion handles scroll reveals, page entrances, form-step transitions, menu icons, service-option interactions, and the scroll progress indicator. Lenis provides smooth wheel scrolling, anchor support, and scroll reset on route changes. Reduced-motion preferences disable smooth scrolling and spatial transitions. Navigation uses Next.js `Link` for client navigation. The terminal effect uses React state and cleans up its timer.

## Form API and storage

`POST /api/inquiries` accepts JSON with required `service`, `description`, `name`, and `email`; optional fields are `company`, `website`, `tools`, `budget`, and `timeline`. Client and server share the Zod schema. The server checks content type, origin, payload size, lengths, service selection, email, and website URL. Unknown fields are discarded.

Valid briefs save to **`.data/<reference>.json`**, with a UUID and timestamp. The UI displays success only after storage completes and supports copying or downloading the submitted brief. Connection failures preserve answers for retry. Stored files are outside `public/` and are never exposed by an API GET endpoint. Email notifications are not configured.

Copy `.env.example` to `.env.local` to customize:

| Variable | Default | Purpose |
| --- | --- | --- |
| `DATA_DIR` | `.data` | Private inquiry directory; use a persistent writable volume in production |
| `TRUST_PROXY` | `0` | Set to `1` only when your hosting proxy overwrites `X-Forwarded-For` |

The in-memory limit is 10 attempts per 15 minutes per trusted IP. Without a trusted proxy, the server uses a single shared limit. Deploy behind HTTPS and use persistent storage with backups. Ephemeral/serverless filesystems need a database or external storage adapter before accepting real inquiries. For multiple app instances, use a shared rate limiter. Review submissions directly on the server and apply an appropriate retention policy.

## Checks

```powershell
npm run typecheck
npm test
npm run build
npm run test:browser
```

API tests isolate files in temporary directories. Browser tests use installed Google Chrome and a production build on port 3100, covering all routes at desktop/mobile widths, navigation, form validation, failure recovery, submission/reset, private paths, legacy redirects, and both normal and reduced motion. Browser submissions are isolated in `.data/browser-tests/` when the test server starts automatically. Run tests against a dedicated server rather than your live site.

The portfolio retains clearly labelled concept examples. Add verified client projects and real team information when available. Google Fonts supplies the design fonts with system-font fallbacks.
