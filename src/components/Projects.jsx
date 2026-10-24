import { motion } from "framer-motion";
import { projects } from "../data/content";
import TechChip from "./TechChip";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group flex h-full flex-col overflow-hidden rounded-2xl border"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="project-media relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-sm" style={{ color: "var(--fg-muted)" }}>
            [Preview]
          </span>
        )}

        {project.featured && (
          <span
            className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--color-primary)",
            }}
          >
            Destacado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.context && (
          <p
            className="mb-2 text-[10px] font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            {project.context}
          </p>
        )}

        <h3
          className="mb-3 text-lg font-semibold"
          style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h3>

        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
        >
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mb-5 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2.5 text-xs leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                <span
                  className="mt-1.5 h-px w-3 shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm font-medium"
            >
              Demo →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-muted text-sm font-medium"
            >
              Código →
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="link-muted text-sm font-medium"
            >
              Docs →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p
            className="mb-3 text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Proyectos
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
          >
            Mis trabajos
          </h2>
          <p
            className="mx-auto mt-5 max-w-lg text-sm leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            Tres proyectos integradores donde cada uno resolvió un problema real
            de punta a punta: datos, API, interfaz y despliegue.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
