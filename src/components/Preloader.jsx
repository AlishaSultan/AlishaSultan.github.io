import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const controls = setInterval(() => {
      setCount((c) => {
        const next = c + Math.floor(Math.random() * 9) + 3;
        if (next >= 100) { clearInterval(controls); return 100; }
        return next;
      });
    }, 90);
    const t = setTimeout(() => { setDone(true); document.body.style.overflow = ""; }, 1900);
    return () => { clearInterval(controls); clearTimeout(t); document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="preloader__name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Alisha <span>Sultan</span>
          </motion.div>
          <div className="preloader__bar"><motion.span style={{ width: `${count}%` }} /></div>
          <div className="preloader__count">{count}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
