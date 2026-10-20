import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServicesIndex from "@/components/ServicesIndex";
import { services } from "@/data/services";

export const metadata: Metadata = pageMeta({
  title: "Serviços",
  description:
    "Fisioterapia, Pilates, ortopedia, nutrição, psicologia, pediatria, cardiologia e outras especialidades no Centro de Saúde Fisiohaus.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nossos serviços"
        lead="Atendimento completo e integrado em saúde, com profissionais especializados para cuidar de você em todas as fases da vida."
      />
      <div className="container svc-layout">
        <ServicesIndex
          items={services.map(({ slug, title }) => ({ slug, title }))}
        />
        <div className="svc-list">
          {services.map((s) => (
            <Reveal
              as="article"
              className={`service${s.image ? "" : " service--noimg"}`}
              key={s.slug}
            >
              <div id={s.slug} className="service__anchor" />
              <div className="service__body">
                <h2>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.bullets && (
                  <>
                    {s.bulletsTitle && <h3>{s.bulletsTitle}</h3>}
                    <ul className="ticks">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}
                {s.pros && (
                  <ul className="pros">
                    {s.pros.map((p) => (
                      <li key={p.name}>
                        <strong>{p.name}</strong>
                        <span>{p.role}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link href="/contact" className="btn btn--primary btn--sm">
                  {s.cta ?? "Marcar consulta"}
                </Link>
              </div>
              {s.image && (
                <div className="service__media">
                  <Image
                    quality={70}
                    src={s.image}
                    alt={`${s.title} na Fisiohaus`}
                    fill
                    sizes="(max-width: 960px) 100vw, 360px"
                  />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
