import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.5 }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav__logo">AS<span>.</span></a>
      <nav className={`nav__links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>
        ))}
      </nav>
      <div className="nav__actions">
        <a href={profile.resume} target="_blank" rel="noopener" className="nav__resume">Resume ↓</a>
        <a href="#contact" className="nav__cta">Let's talk</a>
      </div>
      <button className="nav__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>
    </header>
  );
}
