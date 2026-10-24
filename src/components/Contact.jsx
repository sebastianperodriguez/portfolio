import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-3 text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Contacto
          </p>
          <h2
            className="mb-6 text-3xl font-semibold md:text-4xl"
            style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
          >
            Trabajemos juntos
          </h2>
          <p
            className="mx-auto mb-12 max-w-lg text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            ¿Tienes un proyecto en mente o quieres conversar? Estoy disponible
            para nuevas oportunidades y colaboraciones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-accent rounded-lg px-8 py-3.5 text-sm font-medium"
          >
            Enviar email
          </a>

          <Link
            to="/cv"
            className="btn-outline rounded-lg px-8 py-3.5 text-sm font-medium"
          >
            Ver mi CV
          </Link>

          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline rounded-lg px-8 py-3.5 text-sm font-medium"
            >
              LinkedIn
            </a>
          )}

          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline rounded-lg px-8 py-3.5 text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-sm"
          style={{ color: "var(--fg-muted)" }}
        >
          {personalInfo.email}
        </motion.p>
      </div>
    </section>
  );
}
