import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SECTION_IDS = ["about", "projects", "skills", "contact"];

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export default function Navbar({ isDark, toggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const links = [
    { label: "Sobre mí", href: "#about", id: "about" },
    { label: "Proyectos", href: "#projects", id: "projects" },
    { label: "Habilidades", href: "#skills", id: "skills" },
    { label: "Contacto", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="no-print fixed top-0 right-0 left-0 z-50"
      style={{
        backgroundColor: isDark
          ? "rgba(18, 18, 24, 0.85)"
          : "rgba(250, 250, 248, 0.85)",
        borderBottom: "1px solid var(--border)",
      }}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-md"
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold tracking-tight"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--color-primary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            SP
          </span>
          <span
            className="hidden text-sm font-semibold tracking-tight sm:block"
            style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
          >
            Sebastián Pérez
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-muted text-sm font-medium"
                style={{
                  color: active === link.id ? "var(--accent)" : "var(--fg-muted)",
                }}
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/cv" className="link-muted text-sm font-medium">
              CV
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/cv"
            className="btn-outline hidden rounded-lg px-4 py-2 text-sm font-medium md:inline-flex"
          >
            Ver CV
          </Link>

          <button
            onClick={toggle}
            className="rounded-lg p-2 transition-colors duration-200"
            style={{ color: "var(--fg-muted)" }}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg p-2 transition-colors duration-200 md:hidden"
            style={{ color: "var(--fg-muted)" }}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t md:hidden"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border)",
            }}
          >
            <ul className="flex flex-col px-6 py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-medium"
                    style={{ color: "var(--fg)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/cv"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Descargar CV
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left"
        style={{ scaleX: progress, backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />
    </motion.nav>
  );
}
