# Portafolio — Sebastián Pérez Rodríguez

[![CI](https://github.com/sebastianperodriguez/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/sebastianperodriguez/portfolio/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel&logoColor=white)](https://sebastianperodriguez.vercel.app)

Portafolio personal de **Sebastián Pérez Rodríguez**, Full Stack Developer.
Sitio estático construido con React, showcasing proyectos reales de frontend,
backend e IA, con un CV descargable en formato Harvard.

🌐 **Demo:** https://sebastianperodriguez.vercel.app
📄 **CV:** https://sebastianperodriguez.vercel.app/cv

---

## Stack

| Capa | Tecnologías |
|------|-------------|
| Framework | React 19, React Router 7 |
| Estilos | Tailwind CSS v4, variables CSS para theming |
| Animación | Framer Motion |
| Build | Vite 8 |
| Calidad | Oxlint, Vitest, Testing Library |
| Deploy | Vercel |

## Funcionalidades

- **Modo claro y oscuro** con persistencia en `localStorage` y detección de preferencia del sistema.
- **CV en formato Harvard** en `/cv`, optimizado para impresión y guardado como PDF (A4).
- **Navegación móvil** con menú desplegable, indicador de sección activa y barra de progreso de lectura.
- **SEO completo**: Open Graph, Twitter Card, JSON-LD (`schema.org/Person`), `robots.txt` y `sitemap.xml`.
- **Accesible**: navegación por teclado, `aria-label`, foco visible y respeto a `prefers-reduced-motion`.
- **Responsive** con diseño mobile-first.

## Proyectos destacados

| Proyecto | Descripción | Stack principal |
|----------|-------------|-----------------|
| [Arcoins Wallet](https://arcoinswallet.vercel.app/) | Billetera digital multi-moneda (COP/USD/EUR) con API REST, JWT y asistente de IA | React 19, TypeScript, Express 5, PostgreSQL |
| [Chat con Pedro Morales Pino](https://chat-pedro-morales-pino-pi-m3.vercel.app) | Chatbot conversacional sobre la tradición musical colombiana | JavaScript, Vite, Gemini API, Vercel Functions |
| [MateCode — Gestor de Tareas](https://gestor-de-tareas-pi-m4-ijvjqn9z6-sebas19.vercel.app/) | Gestión de tareas con autenticación federada y resúmenes por correo | React 19, TypeScript, Firebase, AWS SES |

## Estructura

```
src/
├── components/     # Navbar, Hero, About, Projects, Skills, Contact, Footer, TechChip
├── data/
│   └── content.js  # Todo el contenido del sitio en un solo lugar
├── hooks/
│   └── useDarkMode.js
├── pages/
│   └── CV.jsx      # CV en formato Harvard
└── index.css       # Tokens de diseño, utilidades y estilos de impresión
scripts/
├── generate-og.mjs # Genera public/og-image.png (1200×630)
└── screenshot.mjs  # Capturas de verificación con Playwright
```

## Desarrollo local

```bash
npm install
npm run dev        # servidor de desarrollo
npm run lint       # oxlint
npm run build      # build de producción
npm run preview    # previsualizar el build
npm run og         # regenerar la imagen Open Graph
```

## Despliegue

El proyecto se despliega en **Vercel** con detección automática de Vite
(`buildCommand: npm run build`, `outputDirectory: dist`). El archivo
`vercel.json` define las rewrites para el routing de la SPA, las cabeceras de
cache para los assets con hash y los headers de seguridad básicos.

Cada `push` a `main` dispara el workflow de CI (lint + build) y, con el repositorio
conectado en Vercel, un despliegue automático.

## Contacto

- Email: sebastianperodriguez@gmail.com
- LinkedIn: [sebastian-perez-rodriguez](https://www.linkedin.com/in/sebasti%C3%A1n-p%C3%A9rez-rodr%C3%ADguez-7a4292142/)
- GitHub: [@sebastianperodriguez](https://github.com/sebastianperodriguez)
