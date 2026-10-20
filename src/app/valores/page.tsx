import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { images, valores } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Valores",
  description:
    "Ética, isonomia, igualdade, transparência, respeito e solidariedade: os valores que orientam a Fisiohaus.",
  path: "/valores",
});

export default function ValoresPage() {
  return (
    <>
      <PageHero
        title="Valores"
        lead="Todas as ações da Fisiohaus são pautadas por valores sem os quais não acreditamos que haja credibilidade nem êxito."
      />
      <section className="section">
        <div className="container">
          <Reveal as="dl" className="values" stagger>
            {valores.map((v) => (
              <div key={v.term} className="values__row">
                <dt>{v.term}</dt>
                <dd>{v.text}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
