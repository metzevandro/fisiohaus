"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Anima os filhos diretos em sequência em vez do bloco inteiro. */
  stagger?: boolean;
  delay?: number;
};

export default function Reveal({
  as: Tag = "div",
  className,
  children,
  stagger = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const el = ref.current;
        if (!el) return;
        const targets = stagger ? Array.from(el.children) : el;
        gsap.from(targets, {
          y: 28,
          opacity: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.07 : 0,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
