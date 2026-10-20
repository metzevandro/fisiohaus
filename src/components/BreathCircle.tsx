"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/** Ciclo respiratório para a fisioterapia respiratória e o Pilates. */
export default function BreathCircle() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const label = root.current?.querySelector<HTMLElement>(".breath-label");
        const tl = gsap.timeline({ repeat: -1 });
        tl.call(
          () => {
            if (label) label.textContent = "Inspire";
          },
          [],
          0,
        )
          .to(
            ".b-ring",
            {
              scale: 1.35,
              svgOrigin: "100 100",
              duration: 4,
              ease: "sine.inOut",
              stagger: 0.15,
            },
            0,
          )
          .call(
            () => {
              if (label) label.textContent = "Expire";
            },
            [],
            4.5,
          )
          .to(
            ".b-ring",
            {
              scale: 1,
              svgOrigin: "100 100",
              duration: 4,
              ease: "sine.inOut",
              stagger: 0.15,
            },
            4.5,
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
        aria-label="Círculo que expande e contrai como a respiração"
      >
        <circle className="b-ring b-ring--3" cx="100" cy="100" r="78" />
        <circle className="b-ring b-ring--2" cx="100" cy="100" r="58" />
        <circle className="b-ring b-ring--1" cx="100" cy="100" r="38" />
      </svg>
      <p className="breath-label" aria-hidden="true">
        Respire
      </p>
    </div>
  );
}
