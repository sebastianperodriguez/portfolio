import { motion } from "framer-motion";
import { personalInfo } from "../data/content";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div variants={item} className="relative mb-9">
          <div
            className="rounded-full border-2 p-1"
            style={{ borderColor: "var(--accent)" }}
          >
            <div className="h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32">
              <img
                src={personalInfo.photo}
                alt={`${personalInfo.name}, ${personalInfo.role}`}
                className="h-full w-full object-cover object-top"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <span
            className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-medium tracking-wide whitespace-nowrap"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border)",
              color: "var(--fg-muted)",
            }}
          >
            <span
              className="inline-block size-1.5 animate-pulse rounded-full"
              style={{ backgroundColor: "#4ade80" }}
              aria-hidden="true"
            />
            {personalInfo.availability}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-6 text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
        >
          {personalInfo.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-6 text-5xl leading-tight font-bold md:text-7xl"
          style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-xl text-lg md:text-xl"
          style={{ color: "var(--fg-muted)", fontFamily: "var(--font-body)" }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="btn-accent rounded-lg px-6 py-3 text-sm font-medium"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="btn-outline rounded-lg px-6 py-3 text-sm font-medium"
          >
            Contactarme
          </a>
          <a
            href={personalInfo.cvUrl}
            className="link-muted text-sm font-medium underline underline-offset-4"
          >
            Descargar CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
