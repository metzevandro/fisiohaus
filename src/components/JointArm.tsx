"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/** Articulação do joelho: a flexão acompanha a rolagem e o ângulo é medido em tempo real. */
export default function JointArm() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const el = root.current;
        if (!el) return;
        const label = el.querySelector<SVGTextElement>(".joint-angle");
        const angle = { v: 0 };
        if (label) label.textContent = "0°";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 0.6,
          },
        });
        tl.to(".shin", { rotation: 80, svgOrigin: "100 100", ease: "none" }, 0)
          .fromTo(
            ".joint-arc",
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, ease: "none" },
            0,
          )
          .to(
            angle,
            {
              v: 80,
              ease: "none",
              onUpdate: () => {
                if (label) label.textContent = `${Math.round(angle.v)}°`;
              },
            },
            0,
          );
      });
    },
    { scope: root },
  );

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
