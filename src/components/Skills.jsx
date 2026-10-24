import { motion } from "framer-motion";
import { skills } from "../data/content";
import TechChip from "./TechChip";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
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
            Habilidades
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
          >
            Mi stack
          </h2>
          <p
            className="mx-auto mt-5 max-w-lg text-sm leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            Herramientas que uso a diario en el navegador, en el servidor y en
            la tubería de despliegue.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span
                  className="h-4 w-px shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                  aria-hidden="true"
                />
                <h3
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                >
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <TechChip key={skill} label={skill} size="md" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
