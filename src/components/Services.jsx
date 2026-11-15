import { useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Magnetic from "./Magnetic";
import { services } from "../data";

function PackageCard({ pkg, i }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    el.style.setProperty("--mx", `${mx}px`);
    el.style.setProperty("--my", `${my}px`);
    el.style.transform = `perspective(800px) rotateX(${-(my / r.height - 0.5) * 5}deg) rotateY(${(mx / r.width - 0.5) * 5}deg) translateY(-6px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <motion.article
      ref={ref}
      className={`card svc__card ${pkg.featured ? "svc__card--featured" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
      style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }}
    >
      <span className="card__spotlight" aria-hidden />
      <span className={`svc__badge ${pkg.featured ? "" : "svc__badge--hidden"}`} aria-hidden={!pkg.featured}>
        {pkg.featured ? "Most popular" : "-"}
      </span>
      <h3 className="svc__name">{pkg.name}</h3>
      <p className="svc__price">{pkg.price}</p>
      <p className="svc__best">{pkg.best}</p>
      <ul className="svc__list">
        {pkg.items.map((it) => <li key={it}>{it}</li>)}
      </ul>
    </motion.article>
  );
}

export default function Services() {
  const waHref = `https://wa.me/${services.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi Alisha, I saw your website page - can you make a free homepage preview for my business?"
  )}`;

  return (
    <section className="section svc" id="websites">
      <SectionHead index="04" title="Websites" />

      <div className="svc__intro">
        <Reveal>
          <p className="svc__eyebrow">{services.eyebrow}</p>
          <h3 className="svc__headline">{services.headline}</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="svc__pitch">{services.pitch}</p>
        </Reveal>
      </div>

      <div className="svc__steps">
        {services.steps.map(([n, title, text], i) => (
          <Reveal key={n} delay={i * 0.08} className="svc__step">
            <span className="svc__step-num">{n}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>

      <div className="svc__grid">
        {services.packages.map((pkg, i) => <PackageCard key={pkg.name} pkg={pkg} i={i} />)}
      </div>

      <Reveal delay={0.1}>
        <p className="svc__note">{services.priceNote}</p>
      </Reveal>

      <Reveal delay={0.15} className="svc__cta">
        <Magnetic>
          <a className="btn btn--primary" href={waHref} target="_blank" rel="noopener noreferrer">
            Get a free preview on WhatsApp
          </a>
        </Magnetic>
        <Magnetic>
          <a className="btn btn--ghost" href={`tel:${services.whatsapp}`}>
            Call {services.phoneDisplay}
          </a>
        </Magnetic>
      </Reveal>
    </section>
  );
}
