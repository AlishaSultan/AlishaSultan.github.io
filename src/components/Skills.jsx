import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { skills, certs } from "../data";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionHead index="04" title="Technical Skills" />

      <div className="skills__grid">
        {skills.map((s, i) => (
          <Reveal className="skillset" key={s.group} delay={i * 0.06}>
            <h4>{s.group}</h4>
            <div className="skillset__chips">{s.items.map((it) => <span key={it}>{it}</span>)}</div>
          </Reveal>
        ))}
      </div>

      <Reveal className="certs" delay={0.1}>
        <h4 className="certs__head">Achievements & Certifications</h4>
        <div className="certs__list">
          {certs.map((c) => {
            const inner = (
              <>
                <span className="cert__year">{c.year}</span>
                <span className="cert__text">{c.text}</span>
                {c.links ? (
                  <span className="cert__links">
                    {c.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="cert__badge">{l.label}</a>
                    ))}
                  </span>
                ) : c.url ? (
                  <span className="cert__arrow">↗</span>
                ) : null}
              </>
            );
            return c.url && !c.links ? (
              <a className="cert cert--link" key={c.text} href={c.url} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <div className="cert" key={c.text}>{inner}</div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
