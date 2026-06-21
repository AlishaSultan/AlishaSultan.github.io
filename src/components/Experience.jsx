import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionHead index="02" title="Experience" />

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal className="tl" key={job.company} delay={i * 0.05} as="article">
            <div className="tl__dot" />
            <div className="tl__when">{job.when}</div>
            <div className="tl__body">
              <h3>{job.role} <span>· {job.company}</span></h3>
              <p className="tl__place">{job.place}</p>
              <ul>{job.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
              <div className="tl__tags">{job.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
