"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const N = 9;
const TOP = 56;
const STEP = 52;
const cy = (i: number) => TOP + i * STEP;
const width = (i: number) => 44 + i * 5;

/** Postura "caída": a coluna começa curvada e se alinha ao longo da animação. */
const slouchX = (i: number) => Math.sin((i / (N - 1)) * Math.PI) * 58;
const slouchRot = (i: number) => -Math.cos((i / (N - 1)) * Math.PI) * 22;

export default function SpineHero() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const verts = gsap.utils.toArray<SVGGElement>(".vert");
        gsap.set(verts, { svgOrigin: (i: number) => `150 ${cy(i)}` });

        const tl = gsap.timeline({ delay: 0.35 });
        tl.fromTo(
          ".plumb",
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" },
          0,
        ).fromTo(
          verts,
          {
            x: (i: number) => slouchX(i),
            rotation: (i: number) => slouchRot(i),
          },
          {
            x: 0,
            rotation: 0,
            duration: 1.7,
            ease: "elastic.out(1, 0.55)",
            stagger: 0.07,
          },
          0.25,
        );

        // Respiração suave depois de alinhada
        gsap.to(".spine", {
          scaleY: 1.014,
          svgOrigin: "150 280",
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2.4,
        });
      });
    },
    { scope: root },
  );

  return (
    <svg
      ref={root}
      className="spine-svg"
      viewBox="0 0 300 540"
      role="img"
      aria-label="Ilustração de uma coluna vertebral se alinhando"
    >
      <line
        className="plumb"
        x1="150"
        y1="8"
        x2="150"
        y2="532"
        pathLength={1}
        strokeDasharray="1"
      />
      <g className="spine">
        {Array.from({ length: N }, (_, i) => {
          const w = width(i);
          const y = cy(i);
          return (
            <g className="vert" key={i}>
              <rect
                x={150 - w / 2}
                y={y - 16}
                width={w}
                height={32}
                rx={14}
                className="vert-body"
                style={{ opacity: 0.45 + i * 0.07 }}
              />
              <rect
                x={150 + w / 2 - 6}
                y={y - 5}
                width={18}
                height={10}
                rx={5}
                className="vert-process"
              />
              <ellipse
                cx={150}
                cy={y + 26}
                rx={w / 2 - 10}
                ry={4}
                className="vert-disc"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
