"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

export default function Counter({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const state = { v: 0 };
        el.textContent = `${prefix}0${suffix}`;
        gsap.to(state, {
          v: to,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(state.v)}${suffix}`;
          },
        });
      });
    },
    { scope: ref },
  );

  return <span ref={ref}>{`${prefix}${to}${suffix}`}</span>;
}
