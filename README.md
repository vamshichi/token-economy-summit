# The Token Economy Summit & Expo 2027 — landing page

Next.js 15 (App Router) · TypeScript · Framer Motion · plain CSS

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- All copy lives in `lib/content.ts` (edit text/dates there; countdown target is `EVENT_DATE_ISO`).
- Sections: `components/Sections.tsx`, hero: `components/Hero.tsx`, styles: `app/globals.css`.
- Contact form is front-end only — wire `submit()` in `components/ContactForm.tsx` to your backend/CRM.
