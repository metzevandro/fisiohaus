"use client";

import { useEffect, useState } from "react";

export default function ServicesIndex({
  items,
}: {
  items: { slug: string; title: string }[];
}) {
  const [active, setActive] = useState(items[0]?.slug);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.slug))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="svc-index" aria-label="Lista de serviços">
      <ul>
        {items.map((i) => (
          <li key={i.slug}>
            <a
              href={`#${i.slug}`}
              className={active === i.slug ? "is-active" : undefined}
              aria-current={active === i.slug ? "true" : undefined}
            >
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
