import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { images, site } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Contato",
  description:
    "Fale com a Fisiohaus: telefones, e-mail, endereço e horário de atendimento em Estância Velha/RS.",
  path: "/contact",
});

export default function ContactPage() {
  const a = site.address;
  return (
    <>
      <PageHero
        title="Contato"
        lead="Agende sua consulta pelos nossos canais ou envie uma mensagem."
        image={images.contactBanner}
        imageAlt="Interior da Fisiohaus"
      />
      <section className="section">
        <div className="container split split--top">
          <Reveal className="contact-info" stagger>
            <div>
              <h2>Horário de atendimento</h2>
              <dl className="hours">
                {site.hours.map((h) => (
                  <div key={h.label}>
                    <dt>{h.label}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2>Telefones e e-mail</h2>
              <ul className="plain">
                {site.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href}>{p.label}</a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Endereço</h2>
              <address>
                {a.street} · {a.district}
                <br />
                {a.city}/{a.state} · CEP {a.zip}
              </address>
              <a
                className="text-link"
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no mapa
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="form-title">Envie uma mensagem</h2>
            <ContactForm idPrefix="contact" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
