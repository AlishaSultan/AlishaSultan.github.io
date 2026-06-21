import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { profile } from "../data";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal className="contact__inner">
        <span className="section__index">05</span>
        <h2 className="contact__title">Let's build something<br /><span>worth shipping.</span></h2>
        <p className="contact__sub">
          Open to backend, fintech, and AI-augmented engineering roles. Drop a message — I usually reply fast.
        </p>
        <Magnetic strength={0.25}>
          <a href={`mailto:${profile.email}`} className="contact__mail">{profile.email}</a>
        </Magnetic>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
        </div>
      </Reveal>
    </section>
  );
}
