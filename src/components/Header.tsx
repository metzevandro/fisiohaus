"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";
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

  useGSAP(
    () => {
      ScrollTrigger.create({
        start: "top -12",
        end: 99999,
        toggleClass: { targets: root.current, className: "is-scrolled" },
      });
    },
    { scope: root },
  );

  useGSAP(
    () => {
      if (!open) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(".mobile-nav a", {
          x: -28,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
        });
      });
    },
    { scope: root, dependencies: [open] },
  );

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
