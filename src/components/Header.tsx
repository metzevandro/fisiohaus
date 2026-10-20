"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let scrolled = false;
    const onScroll = () => {
      const next = window.scrollY > 12;
      if (next !== scrolled) {
        scrolled = next;
        el.classList.toggle("is-scrolled", next);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header ref={root} className="site-header">
      <div className="container site-header__bar">
        <Link
          href="/#home"
          className="brand"
          aria-label="Fisiohaus — página inicial"
        >
          <Image
            src={site.logo}
            alt="Fisiohaus"
            width={166}
            height={46}
            priority
            style={{ height: "auto" }}
          />
        </Link>

        <nav className="desktop-nav" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn--primary btn--sm desktop-cta">
          Agendar consulta
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-label="Principal (móvel)"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        {!open && (
          <Link href="/contact" className="btn btn--primary">
            Agendar consulta
          </Link>
        )}
      </nav>
    </header>
  );
}
