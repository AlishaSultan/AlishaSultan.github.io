import { useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { projects, profile } from "../data";

function TiltCard({ p, i }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    const px = mx / r.width - 0.5;
    const py = my / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-6px)`;
    el.style.setProperty("--mx", `${mx}px`);
    el.style.setProperty("--my", `${my}px`);
  };
  const onLeave = () => { ref.current.style.transform = ""; };

  const clickable = Boolean(p.url);
  const Tag = clickable ? motion.a : motion.article;
  const linkProps = clickable ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Tag
      ref={ref}
      className={`card ${clickable ? "card--link" : ""}`}
      {...linkProps}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
      style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }}
    >
      <span className="card__spotlight" aria-hidden />
      <div className="card__top">
        <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
        <span className="card__date">{p.date}</span>
      </div>
      <h3 className="card__title">{p.title}</h3>
      <p className="card__desc">{p.desc}</p>
      <div className="card__tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <span className={`card__cta ${clickable ? "" : "card__cta--muted"}`}>
        {p.cta || "View project"} {clickable && <span className="card__cta-arrow">↗</span>}
      </span>
    </Tag>
  );
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <SectionHead index="03" title="Selected Projects" />

      <div className="proj-grid">
        {projects.map((p, i) => <TiltCard key={p.title} p={p} i={i} />)}
        <Reveal className="card card--cta" as="article" delay={0.1}>
          <h3 className="card__title">More on GitHub</h3>
          <p className="card__desc">Side projects, experiments, and open-source packages.</p>
          <a className="btn btn--primary" href={profile.github} target="_blank" rel="noopener">Visit GitHub →</a>
        </Reveal>
      </div>
    </section>
  );
}
