# TekLight Research & Data Analysis

Responsive React + Vite frontend for the TekLight research topic and materials platform. Tailwind CSS is configured for utility-first styling; the current design's reusable CSS styles are retained so the Figma-inspired interface remains visually consistent while the UI can be migrated to Tailwind utilities incrementally.

## Requirements
- Node.js 20+ recommended
- npm

## Run locally on Ubuntu
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build
```bash
npm run build
```
The deployable static frontend is generated in `dist/`.

## Tailwind CSS
- `tailwind.config.js`: content paths and TekLight theme tokens
- `postcss.config.js`: Tailwind and Autoprefixer
- `src/styles/index.css`: Tailwind directives plus the existing responsive design styles

## Current scope
This is a frontend prototype. Authentication, database/API integration, Paystack payment verification, and secure paid-material downloads still need to be connected to the backend.


## Tailwind CSS troubleshooting

This project currently uses Tailwind CSS v3 directives and a combination of Tailwind configuration plus existing custom CSS classes. The Google Fonts import is placed before the Tailwind directives to ensure valid CSS import ordering.

If Tailwind utility classes are not generated, reinstall dependencies and restart Vite:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

After changing `tailwind.config.js` or `postcss.config.js`, stop and restart the development server.
