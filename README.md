# Kupzed Portfolio

A recruiter-ready fullstack developer portfolio for Riza Fahdan Syahda. The site presents practical web application work across responsive UI, backend APIs, authentication, databases, deployment, and product-focused case studies.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-4-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Focus

- Clear fullstack positioning for recruiters and hiring managers.
- Featured case studies for Project Management System, CatatZ, and this portfolio.
- Project proof with role, project type, impact, key responsibilities, stack, and live/source links.
- Responsive single-page experience with dark/light theme support.
- Accessible project detail modal with keyboard escape handling and focus restoration.

## Tech Stack

- Framework: Next.js 16 App Router
- UI: React 19, TypeScript, Tailwind CSS 4
- Animation: Framer Motion
- Icons: Lucide React and React Icons
- Theme: next-themes
- Deployment target: Vercel

## Project Structure

```txt
src/app/
  layout.tsx       Metadata, fonts, and theme provider shell
  page.tsx         Single-page portfolio composition
src/components/
  layout/          Navbar and footer
  sections/        Hero, About, Skills, Projects, Contact
  ui/              Reusable UI pieces such as modal and photo card
src/lib/
  data.ts          Portfolio content, skills, projects, links
  motion.ts        Framer Motion variants and timing tokens
public/
  avatar/          Profile images
  projects/        Project thumbnails
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

## Customization

- Update personal copy, skills, project details, and links in `src/lib/data.ts`.
- Adjust section composition in `src/app/page.tsx`.
- Tune global theme tokens and shared utility classes in `src/app/globals.css`.
- Replace thumbnails in `public/projects/` and avatar assets in `public/avatar/`.

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
