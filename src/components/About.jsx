import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { facts } from "../data";

const chips = ["Laravel", "PHP", "MySQL", "MongoDB", "REST APIs", "React", "Vue", "Python", "OpenAI API", "n8n"];

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionHead index="01" title="About" />

      <div className="about__grid">
        <Reveal className="about__text">
          <p>
            I'm a software engineer who builds <em>backend systems for fintech</em> — with
            production experience shipping core banking features on a live lending platform.
          </p>
          <p>
            My strengths are <em>REST API design</em>, query optimization across MySQL and MongoDB,
            and reliable cross-functional delivery. I also bring <em>LLM capabilities</em> into
            products and use prompt engineering and AI-assisted tooling to write cleaner code and
            ship faster.
          </p>
          <div className="about__chips">
            {chips.map((c) => <span key={c}>{c}</span>)}
          </div>
        </Reveal>

        <Reveal className="about__card" delay={0.15}>
          {facts.map(([k, v]) => (
            <div className="about__card-row" key={k}><span>{k}</span><strong>{v}</strong></div>
          ))}
          <div className="about__card-badge">Monthly Performer Award · 2025</div>
        </Reveal>
      </div>
    </section>
  );
}
