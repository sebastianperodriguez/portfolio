import { Link } from "react-router-dom";
import { personalInfo, projects, skills, cvData } from "../data/content";

const INK = "#16161c";
const MUTED = "#4a4a52";
const SOFT = "#6b6b73";
const RULE = "#16161c";

function Section({ title, children }) {
  return (
    <section className="mt-3.5">
      <h2
        className="text-[10.5px] font-bold tracking-[0.2em] uppercase"
        style={{ color: INK }}
      >
        {title}
      </h2>
      <div className="mt-1.5 h-px w-full" style={{ backgroundColor: RULE }} />
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export default function CV() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#efeee9" }}>
      <div
        className="no-print sticky top-0 z-10 border-b"
        style={{
          backgroundColor: "rgba(250,250,248,0.9)",
          borderColor: "#e2e0da",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto flex max-w-[210mm] items-center justify-between px-6 py-3">
          <Link
            to="/"
            className="text-sm font-medium"
            style={{ color: "#6b6b73" }}
          >
            ← Volver al portafolio
          </Link>
          <button
            onClick={() => window.print()}
            className="rounded-lg px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: "#c9a96e", color: "#1a1a2e" }}
          >
            Guardar como PDF
          </button>
        </div>
      </div>

      <article
        className="cv-page mx-auto my-8 px-10 py-12"
        style={{
          backgroundColor: "#ffffff",
          color: INK,
          maxWidth: "210mm",
          boxShadow: "0 18px 48px -24px rgba(0,0,0,0.35)",
        }}
      >
        <header className="text-center">
          <h1
            className="text-[26px] leading-tight font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: INK }}
          >
            {personalInfo.name}
          </h1>
          <p
            className="mt-1.5 text-[12px] font-medium tracking-[0.22em] uppercase"
            style={{ color: SOFT }}
          >
            {personalInfo.role}
          </p>

          <div
            className="mx-auto mt-3 h-px w-16"
            style={{ backgroundColor: "#c9a96e" }}
            aria-hidden="true"
          />

          <p className="mt-3 text-[11px] leading-relaxed" style={{ color: MUTED }}>
            <a href={`mailto:${personalInfo.email}`} style={{ color: MUTED }}>
              {personalInfo.email}
            </a>
            {"  ·  "}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: MUTED }}
            >
              {personalInfo.linkedinLabel}
            </a>
            {"  ·  "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: MUTED }}
            >
              {personalInfo.githubLabel}
            </a>
          </p>
        </header>

        <Section title="Perfil">
          <p className="text-[11px] leading-[1.5]" style={{ color: MUTED }}>
            {cvData.summary}
          </p>
        </Section>

        <Section title="Educación">
          {cvData.education.map((item) => (
            <div key={item.title} className="mb-2.5 last:mb-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[12.5px] font-semibold" style={{ color: INK }}>
                  {item.title}
                </h3>
                <span
                  className="shrink-0 text-[10.5px]"
                  style={{ color: SOFT }}
                >
                  {item.period}
                </span>
              </div>
              <p className="text-[11px] italic" style={{ color: MUTED }}>
                {item.institution}
              </p>
              <p
                className="mt-0.5 text-[11px] leading-[1.5]"
                style={{ color: MUTED }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Experiencia y proyectos">
          {projects.map((project) => (
            <div key={project.id} className="mb-2.5 last:mb-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[12.5px] font-semibold" style={{ color: INK }}>
                  {project.title}
                </h3>
                <span className="shrink-0 text-[10.5px]" style={{ color: SOFT }}>
                  {project.context}
                </span>
              </div>

              <p
                className="mt-0.5 text-[11px] leading-[1.5]"
                style={{ color: MUTED }}
              >
                {project.summary}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Technical skills">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-[11px] font-semibold" style={{ color: INK }}>
                  {category}
                </h3>
                <p
                  className="mt-0.5 text-[10.5px] leading-[1.45]"
                  style={{ color: MUTED }}
                >
                  {items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Idiomas">
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {cvData.languages.map((language) => (
              <li key={language.name} className="text-[11px]" style={{ color: MUTED }}>
                <span className="font-semibold" style={{ color: INK }}>
                  {language.name}
                </span>{" "}
                — {language.level}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Intereses">
          <ul className="space-y-0.5">
            {cvData.interests.map((interest) => (
              <li key={interest} className="text-[11px] leading-[1.5]" style={{ color: MUTED }}>
                {interest}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
}
