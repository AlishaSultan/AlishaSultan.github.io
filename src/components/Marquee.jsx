const ITEMS = [
  "Laravel", "PHP", "MySQL", "MongoDB", "REST APIs", "React", "Vue.js",
  "Python", "OpenAI API", "Prompt Engineering", "LLM Integration", "n8n",
  "Git", "Linux", "Postman", "RAG", "Vector DB",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t} <i className="marquee__star">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
