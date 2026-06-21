import { motion, useScroll, useSpring } from "framer-motion";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Background />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Alisha Sultan · Built with React &amp; a little AI.</p>
        <a href="#hero" className="footer__top">Back to top ↑</a>
      </footer>
    </>
  );
}
