import { motion } from "framer-motion";
import { aboutText, aboutImage, personalInfo } from "../data/content";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <div className="mx-auto grid max-w-5xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="mb-3 text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Sobre mí
          </p>
          <h2
            className="mb-8 text-3xl font-semibold md:text-4xl"
            style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
          >
            Conóceme
          </h2>

          <div className="space-y-4">
            {aboutText.map((paragraph, i) => (
              <p
                key={i}
                className="leading-[1.75]"
                style={{ color: "var(--fg-muted)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p
            className="mt-8 flex items-center gap-2 text-sm"
            style={{ color: "var(--fg-muted)" }}
          >
            <span
              className="inline-block size-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden="true"
            />
            {personalInfo.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[1.75rem] border"
              style={{ borderColor: "var(--accent)", opacity: 0.4 }}
              aria-hidden="true"
            />
            <div
              className="overflow-hidden rounded-2xl shadow-xl"
              style={{ boxShadow: "0 24px 48px -20px rgba(0,0,0,0.35)" }}
            >
              <img
                src={aboutImage}
                alt={`${personalInfo.name}, ${personalInfo.role}`}
                className="h-80 w-64 object-cover object-top sm:h-96 sm:w-72"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
