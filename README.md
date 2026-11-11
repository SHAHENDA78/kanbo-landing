# Kanbo — SaaS Product Landing Page

A pixel-perfect, fully responsive landing page for **Kanbo**, a fictional
project-management SaaS. Built as Task 1 of the Arrowstack Frontend
Development Internship (Batch 2026).

**Live demo:** kanbo-landing.vercel.app


## Features

- Dark, dev-tool inspired design system (CSS variables for every color)
- Framer Motion animations: word-by-word hero reveal, scroll-triggered
  sections, scroll-linked timeline, animated pricing toggle, accordion FAQ
- Fully responsive: desktop, tablet and mobile
- Accessible: semantic HTML, keyboard navigation, focus states, ARIA labels
- Sections: Navbar, Hero, Logos, Features, How it works, Pricing,
  Testimonials, FAQ, CTA, Footer

## Tech Stack

- React 19 + Vite
- Framer Motion
- Plain CSS (one stylesheet per component)

## Getting Started

```bash
git clone https://github.com/SHAHENDA78/kanbo-landing.git
cd kanbo-landing
npm install
npm run dev
```

Open http://localhost:5173

## Project Structure
src/
├── components/ # JSX components, one per section
├── styles/ # global.css + one CSS file per component
├── App.jsx
└── main.jsx


## Design Decisions

- **One accent color** (neon pink) for actions, with a secondary blue for
  details, so the page has a clear visual hierarchy.
- **Scroll-triggered animations** (`whileInView`, `once: true`) instead of
  everything animating on load, to keep the page fast and calm.
- **CSS variables** in `global.css` make re-theming a one-line change.

## Limitations & Next Steps

- Content, logos and testimonials are fictional placeholders.
- The email form does not submit anywhere (no backend).
- Next: dark/light toggle, real screenshots, Lighthouse score optimization.

## Author

Shahenda Hesham Shaheen
