import Arcoins_Wallet from "../assets/Arcoins_Wallet.png";
import Chat_Pino from "../assets/Chat_Pino.png";
import Gestor_Tareas from "../assets/Gestor_Tareas.png";
import Perfil from "../assets/Perfil_optimizada.jpg";

export const aboutImage = Perfil;

export const personalInfo = {
  name: "Sebastián Pérez Rodríguez",
  role: "Full Stack Developer",
  tagline: "Construyo interfaces elegantes, limpias y funcionales.",
  email: "sebastianperodriguez@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/sebasti%C3%A1n-p%C3%A9rez-rodr%C3%ADguez-7a4292142/",
  github: "https://github.com/sebastianperodriguez",
  linkedinLabel: "linkedin.com/in/sebastian-perez-rodriguez",
  githubLabel: "github.com/sebastianperodriguez",
  portfolioUrl: "https://www.sebasperez.dev",
  portfolioLabel: "sebasperez.dev",
  photo: Perfil,
  location: "Medellín, Colombia",
  availability: "Disponible para nuevas oportunidades",
  cvUrl: "/cv",
};

export const aboutText = [
  "Soy desarrollador Full Stack y músico profesional me mueve el ciclo completo de un producto: modelar la base de datos, diseñar la API, construir la interfaz y dejarla desplegada, testeada y documentada.",
  "Trabajo con React en el frontend y Node.js con Express y PostgreSQL en el backend, y me siento cómodo moviéndome entre ambos lados sin quedarme solo en la UI.",
  "Me importa la calidad del código: testing automatizado con Vitest y Supertest, linting con Oxlint, y APIs documentadas con OpenAPI y Swagger.",
  "Fuera del bootcamp construí un servidor MCP (Model Context Protocol) que expone la API de GitHub como herramientas para asistentes de IA, y una API REST con PostgreSQL documentada con OpenAPI. Este portafolio está hecho con React, Vite, Tailwind CSS y Framer Motion.",
];

export const projects = [
  {
    id: 1,
    title: "Chat con Pedro Morales Pino",
    context: "Proyecto Integrador · Henry · Módulo 3",
    description:
      "SPA que permite conversar con Pedro Morales Pino, compositor y bandolista colombiano considerado el padre de la música colombiana. El personaje responde con su biografía real, el bambuco, el pasillo y la bandola andina, siempre en un español latinoamericano natural.",
    summary:
      "Chatbot con Google Gemini sobre la vida y obra de Pedro Morales Pino, compositor colombiano. Serverless Function en Vercel con la clave de API protegida y tests unitarios del router SPA.",
    technologies: [
      "JavaScript",
      "Vite",
      "Vercel Functions",
      "Google Gemini API",
      "Vitest",
    ],
    highlights: [
      "Serverless Function en Vercel: la clave de Gemini nunca llega al cliente, solo el endpoint.",
      "System prompt construido sobre la biografía real del compositor para un personaje verosímil, no una respuesta genérica.",
      "Router SPA propio sobre History API, con tests unitarios de lógica de navegación y render.",
    ],
    image: Chat_Pino,
    demo: "https://chat-pedro-morales-pino-pi-m3.vercel.app",
    repo: "https://github.com/sebastianperodriguez/Chat-Pedro-Morales-Pino-PI-M3",
  },
  {
    id: 2,
    title: "Arcoins Wallet",
    context: "Proyecto Final · Full Stack · Equipo de 4",
    description:
      "Billetera digital que gestiona saldos en COP, USD y EUR: registro e inicio de sesión, compra, venta e intercambio de monedas con tasas en vivo, depósitos, pagos a comercios, historial filtrable, asistente de IA y calculadora de presupuesto de viaje.",
    summary:
      "Billetera digital multi-moneda (COP/USD/EUR) construida por un equipo de 4: API REST en Express y PostgreSQL documentada con Swagger y desplegada en Railway, autenticación JWT, asistente de IA y pruebas automatizadas en backend y frontend.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "React Router 7",
      "TanStack Query",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "JWT",
      "Google Gemini API",
      "Swagger",
      "Vitest",
      "Vercel",
      "Railway",
    ],
    highlights: [
      "API REST en Express 5 y PostgreSQL con documentación Swagger, desplegada en Railway.",
      "Autenticación JWT con bcrypt, middleware de autorización y tasas de cambio con respaldo en base de datos.",
      "Tests con Vitest y Supertest en el backend, y Vitest, Testing Library y MSW en el frontend.",
    ],
    image: Arcoins_Wallet,
    demo: "https://arcoinswallet.vercel.app/",
    repo: "https://github.com/Arco-Tech-Consulting/Arcoins_Wallet",
    docs: "https://arcoinswallet-production.up.railway.app/api-docs",
    featured: true,
  },
  {
    id: 3,
    title: "MateCode — Gestor de Tareas",
    context: "Proyecto Integrador · Henry · Módulo 4",
    description:
      "Aplicación web para la gestión de tareas diarias: autenticación con correo y Google, persistencia en Cloud Firestore filtrada por usuario y envío automatizado de resúmenes por correo mediante AWS SES. Interfaz responsiva con diseño glassmorphism y rutas protegidas.",
    summary:
      "Gestor de tareas con autenticación federada (correo y Google), persistencia en Cloud Firestore por usuario, resúmenes por correo automatizados con AWS SES y tests de componentes con Testing Library.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router 7",
      "Firebase Auth",
      "Cloud Firestore",
      "AWS SES",
      "Vitest",
      "React Testing Library",
      "Vercel",
    ],
    highlights: [
      "Autenticación con Firebase (correo y Google) y rutas privadas protegidas por contexto de autenticación.",
      "Persistencia en Cloud Firestore con filtrado por usuario y función serverless para el resumen por correo.",
      "Tests unitarios y de componentes con Vitest, Testing Library y mocks de los servicios externos.",
    ],
    image: Gestor_Tareas,
    demo: "https://gestor-de-tareas-pi-m4-ijvjqn9z6-sebas19.vercel.app/",
    repo: "https://github.com/sebastianperodriguez/Gestor-de-tareas-PI-M4",
  },
];

export const skills = {
  Lenguajes: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  Frontend: [
    "React",
    "React Router",
    "TanStack Query",
    "Tailwind CSS",
    "Vite",
    "Framer Motion",
    "Responsive Design",
  ],
  Backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "PostgreSQL",
    "JWT",
    "Firebase Auth",
    "OpenAPI / Swagger",
  ],
  "Testing & Calidad": [
    "Vitest",
    "Supertest",
    "React Testing Library",
    "MSW",
    "Oxlint",
  ],
  "Cloud & Herramientas": [
    "Vercel",
    "Railway",
    "AWS (SES)",
    "Git",
    "GitHub",
    "GitHub Actions",
    "npm",
  ],
  "IA & Automatización": [
    "Google Gemini API",
    "MCP (Model Context Protocol)",
    "Octokit",
    "Zod",
  ],
};

export const techGroups = {
  frontend: { label: "Frontend", color: "#c9a96e" },
  backend: { label: "Backend", color: "#5b8d8a" },
  data: { label: "Datos", color: "#6b7fa3" },
  testing: { label: "Testing", color: "#8a7fb5" },
  tooling: { label: "Tooling", color: "#b07d62" },
  ai: { label: "IA", color: "#c07a8f" },
  other: { label: "Otros", color: "#9a9a8c" },
};

export const techMeta = {
  JavaScript: "other",
  TypeScript: "other",
  HTML5: "other",
  CSS3: "other",
  SQL: "data",
  React: "frontend",
  "React Router": "frontend",
  "TanStack Query": "frontend",
  "Tailwind CSS": "frontend",
  "Tailwind CSS v4": "frontend",
  Vite: "tooling",
  "Framer Motion": "frontend",
  "Responsive Design": "frontend",
  "Node.js": "backend",
  Express: "backend",
  "Express 5": "backend",
  "REST APIs": "backend",
  PostgreSQL: "data",
  JWT: "backend",
  "Firebase Auth": "backend",
  "Cloud Firestore": "data",
  "OpenAPI / Swagger": "backend",
  Swagger: "backend",
  Vitest: "testing",
  Supertest: "testing",
  "React Testing Library": "testing",
  MSW: "testing",
  Oxlint: "testing",
  Vercel: "tooling",
  Railway: "tooling",
  "AWS (SES)": "tooling",
  "AWS SES": "tooling",
  "Vercel Functions": "tooling",
  Git: "tooling",
  GitHub: "tooling",
  "GitHub Actions": "tooling",
  npm: "tooling",
  "Google Gemini API": "ai",
  "MCP (Model Context Protocol)": "ai",
  Octokit: "ai",
  Zod: "ai",
};

export const cvData = {
  summary:
    "Full Stack Developer con proyectos desplegados y testeados en producción: billetera digital multi-moneda, chatbot con IA y gestor de tareas. Construyo productos completos: base de datos, API, interfaz y despliegue. Antes de programar, más de 8 años de docencia musical.",
  education: [
    {
      title: "Full Stack Development",
      institution: "Henry",
      period: "2025 — 2026",
      detail:
        "Carrera de Full Stack Development. Proyecto integrador por módulos: HTML/CSS/JS, Node.js + Express + PostgreSQL, React + IA, React + Firebase + AWS y TypeScript + MCP.",
    },
    {
      title: "Licenciatura en Música",
      institution: "Universidad de Antioquia",
      period: "2022 — Actualidad (en curso)",
      detail: "Formación en teoría musical, armonía, composición y pedagogía musical.",
    },
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Básico" },
  ],
  interests: [
    "Música — compositor y docente de música con ocho años de experiencia docente",
  ],
};
