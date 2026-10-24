import { Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CV from "./pages/CV";

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar isDark={isDark} toggle={toggle} />
              <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MotionConfig>
  );
}

export default App;
