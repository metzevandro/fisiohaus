import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { convenios, images } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Convênios",
  description:
    "Convênios atendidos pela Fisiohaus, atendimento particular, pacotes para empresas e desconto na fisioterapia para pacientes do SUS.",
  path: "/convenios",
});

export default function ConveniosPage() {
  return (
    <>
      <PageHero
        title="Convênios"
        lead="Atendemos os principais convênios e também oferecemos condições especiais no atendimento particular."
      />
      <section className="section">
        <div className="container split split--top">
          <Reveal className="split__text">
            <h2>Convênios aceitos</h2>
            <ul className="big-list">
              {convenios.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="split__text" delay={0.1}>
            <h2>Particular</h2>
            <p>
              Confira nossos pacotes de desconto para empresas da região e o
              pacote social.
            </p>
            <p className="callout">
              Desconto de 50% na fisioterapia para pacientes da rede SUS.
              Consulte os horários disponíveis.
            </p>
            <p>Atendemos também a domicílio.</p>
            <Link href="/contact" className="btn btn--primary">
              Informe-se pelos nossos canais
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
