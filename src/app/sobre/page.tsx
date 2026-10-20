import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { images } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Sobre",
  description:
    "Desde 1998 a Fisiohaus cuida da saúde de Estância Velha e região. Conheça a nossa trajetória.",
  path: "/sobre",
});

const timeline = [
  {
    year: "1998",
    text: "A Fisiohaus nasce como clínica de fisioterapia. O atendimento diferenciado conquista rapidamente a confiança da comunidade e o reconhecimento regional.",
  },
  {
    year: "Ao longo dos anos",
    text: "Muitos profissionais fazem parte da trajetória, ampliando a rede de parcerias com empresas e entidades locais. Hoje atendemos os principais convênios do país e temos orgulho das premiações e reconhecimentos conquistados.",
  },
  {
    year: "2013",
    text: "Evoluímos para o Centro de Saúde Fisiohaus, reunindo uma equipe multiprofissional e ampliando as especialidades, em busca constante de um cuidado integral.",
  },
  {
    year: "Hoje",
    text: "O estúdio de Pilates, com equipamentos modernos e profissionais especializados, é um dos nossos grandes diferenciais: aulas personalizadas, da reabilitação ao condicionamento físico. Participamos de campanhas solidárias e apoiamos projetos comunitários.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Um pouco sobre a Fisiohaus"
        image={images.aboutBanner}
        imageAlt="Estrutura do Centro de Saúde Fisiohaus"
      />
      <section className="section">
        <div className="container container--narrow">
          <Reveal as="ol" className="timeline" stagger>
            {timeline.map((t) => (
              <li key={t.year}>
                <h2>{t.year}</h2>
                <p>{t.text}</p>
              </li>
            ))}
          </Reveal>
          <Reveal as="p" className="statement statement--sm">
            Fisiohaus: mais do que cuidar da sua saúde, nossa missão é evoluir
            com você, todos os dias.
          </Reveal>
        </div>
      </section>
    </>
  );
}
