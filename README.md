# Amayra Enterprises — React + Vite Clone

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/components/layout` — Navbar, Footer, Layout wrapper
- `src/components/ui` — Reusable UI (PageHeader, CookieConsent)
- `src/components/sections` — Home page sections (Hero, MissionVision, Commitment, Services, CTA)
- `src/pages` — Route-level pages
- `src/pages/solutions` — Solutions dropdown sub-pages
- `src/routes/AppRoutes.jsx` — All route definitions
- `src/data/navLinks.js` — Single source of truth for nav menu (edit here to add/remove links)

## Notes

- Tailwind CSS is already configured (`tailwind.config.js`, `postcss.config.js`).
- Brand color is set in `tailwind.config.js` under `colors.brand` — change `#37a5ed` to rebrand.
- Contact form in `ContactUs.jsx` currently only shows a success message on submit — hook it up
  to your backend or a service like Formspree/EmailJS to actually send messages.
- Add real images by dropping files into `src/assets/images` and importing them in the relevant
  section component.
