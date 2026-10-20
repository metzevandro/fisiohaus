"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const frames = new Set<number>();

    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const label = (el: HTMLElement, v: number) =>
      `${el.dataset.prefix ?? ""}${Math.round(v)}${el.dataset.suffix ?? ""}`;

    if (reduce) {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-in"));
      document
        .querySelectorAll("[data-play]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    counters.forEach((el) => (el.textContent = label(el, 0)));

    const runCount = (el: HTMLElement) => {
      const to = Number(el.dataset.count);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1800, 1);
        el.textContent = label(el, to * (1 - (1 - t) * (1 - t)));
        if (t < 1) frames.add(requestAnimationFrame(tick));
      };
      frames.add(requestAnimationFrame(tick));
    };

    const once = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.hasAttribute("data-count")) runCount(el);
          else el.classList.add("is-in");
          once.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document
      .querySelectorAll("[data-reveal],[data-count]")
      .forEach((el) => once.observe(el));

    const toggle = new IntersectionObserver((entries) => {
      for (const e of entries)
        e.target.classList.toggle("is-visible", e.isIntersecting);
    });
    document
      .querySelectorAll("[data-play]")
      .forEach((el) => toggle.observe(el));

    return () => {
      once.disconnect();
      toggle.disconnect();
      frames.forEach(cancelAnimationFrame);
    };
  }, [pathname]);

  return null;
}
