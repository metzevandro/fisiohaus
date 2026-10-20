"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const D =
  "M0 100 H64 L76 86 L88 100 H112 L122 114 L138 18 L154 170 L166 100 H196 L210 88 L224 100 H300";

const LEN = 100;
const DASH = 28;
const GAP = 120;
const CYCLE = DASH + GAP;

export default function PulseLine() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const live = root.current?.querySelector<SVGPathElement>(".pulse-live");
      if (!live) return;

      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap.set(live, {
          attr: { "stroke-dasharray": `${DASH} ${GAP}` },
          strokeDashoffset: DASH,
        });

        gsap.to(live, {
          strokeDashoffset: -LEN,
          duration: 2.6,
          ease: "none",
          repeat: -1,
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(live, { attr: { "stroke-dasharray": "none" }, opacity: 0 });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="motion-art">
      <svg
        viewBox="0 0 300 200"
        role="img"
        aria-label="Linha de batimento cardíaco em movimento"
      >
        <path className="pulse-base" d={D} pathLength={LEN} />
        <path className="pulse-live" d={D} pathLength={LEN} />
      </svg>
    </div>
  );
}
