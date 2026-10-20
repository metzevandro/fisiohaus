import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { images } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Missão",
  description:
    "A missão do Centro de Saúde Fisiohaus: atender com excelência parceiros e comunidade, dentro de princípios éticos e igualitários.",
  path: "/missao",
});

export default function MissaoPage() {
  return (
    <>
      <PageHero title="Missão" />
      <section className="section">
        <div className="container container--menor">
          <Reveal as="p" className="statement">
            O Centro de Saúde Fisiohaus entende por missão atender com
            excelência seus parceiros, bem como toda a comunidade, dentro dos
            princípios éticos e igualitários, buscando sempre a melhoria, a
            inovação e a valorização tanto dos processos como das pessoas neles
            envolvidas.
          </Reveal>
        </div>
      </section>
    </>
  );
}
