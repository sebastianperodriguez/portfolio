# Portafolio â€” SebastiÃ¡n PÃ©rez RodrÃ­guez

[![CI](https://github.com/sebastianperodriguez/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/sebastianperodriguez/portfolio/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel&logoColor=white)](https://portfolio-sebas19.vercel.app)

Portafolio personal de **SebastiÃ¡n PÃ©rez RodrÃ­guez**, Full Stack Developer.
Sitio estÃ¡tico construido con React, showcasing proyectos reales de frontend,
backend e IA, con un CV descargable en formato Harvard.

ðŸŒ **Demo:** https://portfolio-sebas19.vercel.app
ðŸ“„ **CV:** https://portfolio-sebas19.vercel.app/cv

---

## Stack

| Capa | TecnologÃ­as |
|------|-------------|
| Framework | React 19, React Router 7 |
| Estilos | Tailwind CSS v4, variables CSS para theming |
| AnimaciÃ³n | Framer Motion |
| Build | Vite 8 |
| Calidad | Oxlint, Vitest, Testing Library |
| Deploy | Vercel |

## Funcionalidades

- **Modo claro y oscuro** con persistencia en `localStorage` y detecciÃ³n de preferencia del sistema.
- **CV en formato Harvard** en `/cv`, optimizado para impresiÃ³n y guardado como PDF (A4).
- **NavegaciÃ³n mÃ³vil** con menÃº desplegable, indicador de secciÃ³n activa y barra de progreso de lectura.
- **SEO completo**: Open Graph, Twitter Card, JSON-LD (`schema.org/Person`), `robots.txt` y `sitemap.xml`.
- **Accesible**: navegaciÃ³n por teclado, `aria-label`, foco visible y respeto a `prefers-reduced-motion`.
- **Responsive** con diseÃ±o mobile-first.

## Proyectos destacados

| Proyecto | DescripciÃ³n | Stack principal |
|----------|-------------|-----------------|
| [Arcoins Wallet](https://arcoinswallet.vercel.app/) | Billetera digital multi-moneda (COP/USD/EUR) con API REST, JWT y asistente de IA | React 19, TypeScript, Express 5, PostgreSQL |
| [Chat con Pedro Morales Pino](https://chat-pedro-morales-pino-pi-m3.vercel.app) | Chatbot conversacional sobre la tradiciÃ³n musical colombiana | JavaScript, Vite, Gemini API, Vercel Functions |
| [MateCode â€” Gestor de Tareas](https://gestor-de-tareas-pi-m4-ijvjqn9z6-sebas19.vercel.app/) | GestiÃ³n de tareas con autenticaciÃ³n federada y resÃºmenes por correo | React 19, TypeScript, Firebase, AWS SES |

## Estructura

```
src/
â”œâ”€â”€ components/     # Navbar, Hero, About, Projects, Skills, Contact, Footer, TechChip
â”œâ”€â”€ data/
â”‚   â””â”€â”€ content.js  # Todo el contenido del sitio en un solo lugar
â”œâ”€â”€ hooks/
â”‚   â””â”€â”€ useDarkMode.js
â”œâ”€â”€ pages/
â”‚   â””â”€â”€ CV.jsx      # CV en formato Harvard
â””â”€â”€ index.css       # Tokens de diseÃ±o, utilidades y estilos de impresiÃ³n
scripts/
â”œâ”€â”€ generate-og.mjs # Genera public/og-image.png (1200Ã—630)
â””â”€â”€ screenshot.mjs  # Capturas de verificaciÃ³n con Playwright
```

## Desarrollo local

```bash
npm install
npm run dev        # servidor de desarrollo
npm run lint       # oxlint
npm run build      # build de producciÃ³n
npm run preview    # previsualizar el build
npm run og         # regenerar la imagen Open Graph
```

## Despliegue

El proyecto se despliega en **Vercel** con detecciÃ³n automÃ¡tica de Vite
(`buildCommand: npm run build`, `outputDirectory: dist`). El archivo
`vercel.json` define las rewrites para el routing de la SPA, las cabeceras de
cache para los assets con hash y los headers de seguridad bÃ¡sicos.

Cada `push` a `main` dispara el workflow de CI (lint + build) y, con el repositorio
conectado en Vercel, un despliegue automÃ¡tico.

## Contacto

- Email: sebastianperodriguez@gmail.com
- LinkedIn: [sebastian-perez-rodriguez](https://www.linkedin.com/in/sebasti%C3%A1n-p%C3%A9rez-rodr%C3%ADguez-7a4292142/)
- GitHub: [@sebastianperodriguez](https://github.com/sebastianperodriguez)
