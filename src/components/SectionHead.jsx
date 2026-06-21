import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};
const letter = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function SectionHead({ index, title }) {
  return (
    <div className="section__head">
      <motion.span
        className="section__index"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {index}
      </motion.span>
      <motion.h2
        className="section__title"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        aria-label={title}
      >
        {title.split("").map((ch, i) => (
          <span className="letter-mask" key={i}>
            <motion.span className="letter" variants={letter}>
              {ch === " " ? " " : ch}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
