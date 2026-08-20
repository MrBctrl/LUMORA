# LUMORA — Flagship Website

Houses, apartments, buildings and land, plus the moving and upkeep services that come after
you sign. Built for NEXCRAFT Creative Studio's LUMORA flagship, following the locked Brand
Identity (warm neutrals, soft gold accent, charcoal contrast; "light reveals home" logo
philosophy) and the NEXCRAFT AI Creation Workflow.

## Stack
- React 19 + Vite
- react-router-dom (BrowserRouter)
- Plain CSS (design tokens in `src/index.css`, layout in `src/App.css`)
- Fully responsive: desktop / tablet / mobile
- Scroll-reveal via IntersectionObserver, respects `prefers-reduced-motion`

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Pages
- `/` — the main landing page: hero, divisions, home services, category browser, philosophy,
  process, testimonials, contact
- `/listings/house`, `/listings/apartment`, `/listings/building`, `/listings/land` — a
  catalog page per category, with its own top bar (jump between categories), a filter bar
  (e.g. Single Room / 2 Bedroom / 3 Bedroom for houses, Half Plot / Full Plot for land), and
  a card grid. Clicking a card opens a detail panel with image, price, location and a short
  description, with an X in the top right to close it.

## Structure
```
src/
  components/       Nav, Hero, Divisions, Services, Properties (category browser),
                     Philosophy, Process, Testimonials, CTA, Footer,
                     ListingsPage, ListingModal
  hooks/            useReveal.js — scroll-reveal hook
  data.js           Home page content: divisions, services, process, testimonials
  listingsData.js   Catalog data for houses / apartments / buildings / land
  index.css         Design tokens + base styles
  App.css           Section-level layout & responsive rules
```

## Deployment note
Routing uses `react-router-dom` with `BrowserRouter`. If you deploy to a static host, add an
SPA fallback so a direct hit or refresh on something like `/listings/house` still serves
`index.html`. Vercel and Netlify do this automatically for Vite projects; GitHub Pages needs
a small 404.html redirect trick.

## Content status
Listings, prices, and descriptions in `src/listingsData.js` and `src/data.js` are placeholder
content grounded in the locked LUMORA brand strategy, not real inventory. Swap them for actual
listings, pricing and contact details before launch. The contact form confirms client-side
only for now, wire it to your form handler or CRM before going live.
