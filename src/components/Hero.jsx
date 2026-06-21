import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
import { profile, stats } from "../data";
import Magnetic from "./Magnetic";

function Typed() {
  const [text, setText] = useState("");
  const state = useRef({ r: 0, c: 0, deleting: false });

  useEffect(() => {
    let timer;
    const tick = () => {
      const s = state.current;
      const word = profile.roles[s.r];
      setText(word.slice(0, s.c));
      let delay = 70;
      if (!s.deleting && s.c < word.length) s.c++;
      else if (!s.deleting && s.c === word.length) { s.deleting = true; delay = 1500; }
      else if (s.deleting && s.c > 0) { s.c--; delay = 35; }
      else { s.deleting = false; s.r = (s.r + 1) % profile.roles.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <span>
      {text}
      <motion.span className="caret" animate={{ opacity: [1, 1, 0, 0] }} transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}>_</motion.span>
    </span>
  );
}

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref} className="stat__num">{val}+</span>;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="hero" id="hero">
      <motion.div variants={container} initial="hidden" animate="show" style={{ y, opacity }}>
        <motion.h1 className="hero__name" variants={item}>
          Alisha <span className="grad">Sultan</span>
        </motion.h1>

        <motion.div className="hero__role" variants={item}>
          <span className="hero__prompt">&gt;</span> <Typed />
        </motion.div>

        <motion.p className="hero__desc" variants={item}>
          Software Engineer with production experience in <strong>fintech backend</strong> development —
          building core banking features, REST APIs, and <strong>AI-augmented</strong> tooling that ships
          faster and reads cleaner.
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <Magnetic><a href="#projects" className="btn btn--primary">View my work →</a></Magnetic>
          <Magnetic><a href={profile.resume} target="_blank" rel="noopener" className="btn btn--ghost">Download CV ↓</a></Magnetic>
        </motion.div>

        <motion.div className="hero__stats" variants={item}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <Counter to={s.num} />
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about" className="hero__scroll" aria-label="Scroll down"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
      >
        <span className="mouse"><span className="wheel" /></span>
      </motion.a>
    </section>
  );
}
