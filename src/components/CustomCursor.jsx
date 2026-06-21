import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const hoverIn = () => ringRef.current?.classList.add("hover");
    const hoverOut = () => ringRef.current?.classList.remove("hover");
    const down = () => ringRef.current?.classList.add("down");
    const up = () => ringRef.current?.classList.remove("down");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.querySelectorAll("a, button, [data-magnetic], .card").forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden />
      <div className="cursor-ring" ref={ringRef} aria-hidden />
    </>
  );
}
