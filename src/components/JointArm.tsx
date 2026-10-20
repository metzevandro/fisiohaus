"use client";

import { useEffect, useRef } from "react";

export default function JointArm() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const shin = el.querySelector<SVGGElement>(".shin");
    const arc = el.querySelector<SVGPathElement>(".joint-arc");
    const label = el.querySelector<SVGTextElement>(".joint-angle");
    if (!shin || !arc || !label) return;

    let current = 0;
    let target = 0;
    let raf = 0;
    let near = false;

    const apply = () => {
      shin.setAttribute("transform", `rotate(${80 * current} 100 100)`);
      arc.style.strokeDashoffset = String(1 - current);
      label.textContent = `${Math.round(80 * current)}°`;
    };

    const measure = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (0.8 * vh - r.top) / (0.5 * vh + r.height);
      target = Math.min(1, Math.max(0, p));
    };

    const loop = () => {
      current += (target - current) * 0.15;
      if (Math.abs(target - current) < 0.001) current = target;
      apply();
      raf = current === target ? 0 : requestAnimationFrame(loop);
    };
    const kick = () => {
      if (!near) return;
      measure();
      if (!raf) raf = requestAnimationFrame(loop);
    };

    arc.style.strokeDashoffset = "1";
    label.textContent = "0°";
    shin.setAttribute("transform", "rotate(0 100 100)");

    const io = new IntersectionObserver(
      ([e]) => {
        near = e.isIntersecting;
        kick();
      },
      { rootMargin: "20% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={root} className="motion-art">
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label="Flexão de joelho sendo medida em graus"
      >
        <rect
          className="limb limb--fixed"
          x="88"
          y="12"
          width="24"
          height="92"
          rx="12"
        />
        <g className="shin">
          <rect className="limb" x="88" y="96" width="24" height="88" rx="12" />
        </g>
        <path
          className="joint-arc"
          d="M100 150 A50 50 0 0 1 50.8 108.7"
          pathLength={1}
          strokeDasharray="1"
        />
        <circle className="joint-dot" cx="100" cy="100" r="13" />
        <text className="joint-angle" x="132" y="124">
          80°
        </text>
      </svg>
    </div>
  );
}
