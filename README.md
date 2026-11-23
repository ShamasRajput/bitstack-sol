# Bitstack Solutions

The supplied agency design implemented with **Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lenis**. Public pages are React components with shared navigation and footer. Marketing pages, technical guides, and the first-party website case study are prerendered; project submissions run through a Next.js Route Handler.

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
    work/page.tsx              First-party project overview
    work/bitstack-website/     Inspectable website implementation case study
    resources/                Technical guides and their index
    about/page.tsx             Business identity and project contact
    contact/page.tsx           Guided project brief
    api/inquiries/route.ts     POST submission endpoint
    layout.tsx                 Shared shell and metadata
    template.tsx               Page entrance animation
    globals.css                Tailwind theme and preserved design styles
    robots.ts / sitemap.ts     Public crawler discovery routes
    social-image/route.tsx     Locally generated 1200×630 social image
  components/                 Navigation, footer, form, animations, JSON-LD
  lib/
    inquiry-schema.ts          Shared Zod validation and TypeScript types
    inquiries.ts               Request validation, rate limit, private storage
    site.ts / seo.ts           Public identity, canonical origin, and metadata
    resources.ts              Authored technical guide content
public/assets/bitstack.svg     Bitstack code-mark favicon
test/                         API and browser tests
```

Clean URLs replace the original `.html` URLs. Old page links permanently redirect and preserve query parameters.

## Styling and animation

Tailwind v4 is configured through `@tailwindcss/postcss`; theme colors are defined in `globals.css`. Detailed original layouts and illustrations are retained in the components layer so Tailwind utilities can override them. The form and shared shell use Tailwind utilities alongside these design styles.

Framer Motion handles scroll reveals, page entrances, form-step transitions, menu icons, service-option interactions, and the scroll progress indicator. Lenis provides smooth wheel scrolling, anchor support, and scroll reset on route changes. Reduced-motion preferences disable smooth scrolling and spatial transitions. Navigation uses Next.js `Link` for client navigation. Core content is visible without JavaScript; animations enhance content after rendering.

## Search metadata and public content

`SITE_URL` sets the public canonical origin and defaults to the existing Vercel address. Every public page has its own canonical URL, descriptive title, description, Open Graph URL/image, and Twitter card. The generated social image embeds the supplied logo without fetching an external asset. Robots and sitemap routes expose the public page list.

JSON-LD identifies Bitstack Solutions, Shamas Rajput, the website, individual pages, service details, breadcrumbs, and authored articles. Only approved identity information and implemented capabilities are represented. There are no invented ratings, client results, business address, or performance metrics. The Work section documents this website as a first-party implementation; the Resources section contains two original planning guides with primary technical references.

When changing domains, set `SITE_URL` to the new origin and rebuild/redeploy. Preview deployments should not replace the production canonical origin. These changes address metadata and content gaps; they do not guarantee a search rank, AI citation, or third-party detector score.

## Form API and storage

`POST /api/inquiries` accepts JSON with required `service`, `description`, `name`, and `email`; optional fields are `company`, `website`, `tools`, `budget`, and `timeline`. Client and server share the Zod schema. The server checks content type, origin, payload size, lengths, service selection, email, and website URL. Unknown fields are discarded.

Valid briefs save to **`.data/<reference>.json`**, with a UUID and timestamp. The UI displays success only after storage completes and supports copying or downloading the submitted brief. Connection failures preserve answers for retry. Stored files are outside `public/` and are never exposed by an API GET endpoint. Email notifications are not configured.

Copy `.env.example` to `.env.local` to customize:

| Variable | Default | Purpose |
| --- | --- | --- |
| `DATA_DIR` | `.data` | Private inquiry directory; use a persistent writable volume in production |
| `TRUST_PROXY` | `0` | Set to `1` only when your hosting proxy overwrites `X-Forwarded-For` |
| `SITE_URL` | `https://bitstack-sol.vercel.app` | Public origin for canonical URLs, structured data, social cards, and sitemap |

The in-memory limit is 10 attempts per 15 minutes per trusted IP. Without a trusted proxy, the server uses a single shared limit. Deploy behind HTTPS and use persistent storage with backups. Ephemeral/serverless filesystems need a database or external storage adapter before accepting real inquiries. For multiple app instances, use a shared rate limiter. Review submissions directly on the server and apply an appropriate retention policy.

## Checks

```powershell
npm run typecheck
npm test
npm run build
npm run test:browser
```

API tests isolate files in temporary directories. Browser tests use installed Google Chrome and a production build on port 3100, covering all routes at desktop/mobile widths, navigation, form validation, failure recovery, submission/reset, private paths, legacy redirects, and both normal and reduced motion. SEO checks verify per-page canonical links, query normalization, JSON-LD parsing, visible content without JavaScript, article length, sitemap coverage, robots, and PNG dimensions. Browser submissions are isolated in `.data/browser-tests/` when the test server starts automatically. Run tests against a dedicated server rather than your live site.

Add client projects only with verifiable details and permission. Google Fonts supplies the design fonts with system-font fallbacks. The published contact email is a direct alternative to the form and does not depend on submission storage being configured.
