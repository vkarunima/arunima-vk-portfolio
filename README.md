# Arunima V K | Portfolio

A one-page portfolio for an AI / ML engineer, built with Next.js (App Router) and Tailwind CSS. The design uses an object-detection motif: corner brackets frame each project and the hero box draws itself on load. Light and dark modes are supported, and the layout is responsive.

## Tech stack
Next.js 14, React 18, Tailwind CSS 3. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Use `npm run build && npm start` for a production build.

## Customize
- All content (profile, projects, experience, skills, education) is in `data/portfolio.js`.
- Add your GitHub URL to `profile.github`; the link appears automatically.
- The Video Anomaly Detection project has only the details from the resume. Add `problem`, `tech`, `role` and `outcome` fields to show them.
- Colors are CSS variables in `app/globals.css`; fonts are in `tailwind.config.js`.
- Deploy to Vercel by importing the repository.

## Structure
```
app/         layout, page, global styles
components/  Nav, Hero, Section, Projects, Experience, Skills, Education, Contact, ThemeToggle
data/        portfolio.js (all content)
```
