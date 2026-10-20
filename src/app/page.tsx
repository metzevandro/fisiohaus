import Link from "next/link";
import Image from "next/image";
import SpineHero from "@/components/SpineHero";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import JointArm from "@/components/JointArm";
import BreathCircle from "@/components/BreathCircle";
import PulseLine from "@/components/PulseLine";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import { images, specialties, convenios, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1>Fisiohaus sempre com você!</h1>
            <p className="hero__lead">
              Cuidar de você é a nossa especialidade.
            </p>
            <p className="hero__text">
              Mais do que um centro de saúde, somos um espaço onde atenção,
              acolhimento e excelência se unem para promover bem-estar e
              qualidade de vida, para você e toda a sua família.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Agendar consulta
              </Link>
              <Link href="/services" className="btn btn--ghost">
                Conhecer os serviços
              </Link>
            </div>
          </div>
          <div className="spine-stage">
            <SpineHero />
          </div>
        </div>
      </section>

      <section className="stats" aria-label="A Fisiohaus em números">
        <div className="container stats__grid">
          <div>
            <p className="stat__n">
              <Counter to={27} prefix="+" />
            </p>
            <p className="stat__l">anos cuidando de Estância Velha e região</p>
          </div>
          <div>
            <p className="stat__n">
              <Counter to={specialties.length} />
            </p>
            <p className="stat__l">especialidades no mesmo endereço</p>
          </div>
          <div>
            <p className="stat__n">
              <Counter to={convenios.length} />
            </p>
            <p className="stat__l">convênios atendidos</p>
          </div>
          <div>
            <p className="stat__n">
              <Counter to={50} suffix="%" />
            </p>
            <p className="stat__l">
              de desconto na fisioterapia para pacientes do SUS
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split__text">
            <h2>Conheça um pouco da Fisiohaus</h2>
            <p>
              Há mais de 27 anos, a Fisiohaus é referência em saúde e cuidado em
              Estância Velha e região. Com compromisso contínuo com a qualidade
              e a inovação, oferecemos serviços atualizados e focados no
              bem-estar de cada paciente.
            </p>
            <p>
              Nosso propósito vai além do atendimento clínico: por meio de
              parcerias com entidades locais, promovemos a integração social e
              ações que fortalecem a comunidade, como campanhas de prevenção,
              apoio e conscientização.
            </p>
            <Link href="/sobre" className="text-link">
              Ler nossa história
            </Link>
          </Reveal>
          <Reveal className="media" delay={0.1}>
            <Image
              src={images.clinic}
              alt="Recepção do Centro de Saúde Fisiohaus"
              fill
              sizes="(max-width: 860px) 100vw, 560px"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--mist" id="movimento">
        <div className="container">
          <Reveal className="section__head">
            <h2>Do movimento ao bem-estar</h2>
            <p>
              Cada especialidade cuida de uma parte da sua saúde. Juntas, cuidam
              de você inteiro.
            </p>
          </Reveal>
          <div className="motion-grid">
            <div className="motion-item">
              <JointArm />
              <h3>Reabilitação</h3>
              <p>
                Ganho de amplitude e função em fisioterapia, ortopedia e
                quiropraxia.
              </p>
            </div>
            <div className="motion-item">
              <BreathCircle />
              <h3>Respiração e postura</h3>
              <p>
                Fisioterapia respiratória para todas as idades e Pilates para o
                corpo e a mente.
              </p>
            </div>
            <div className="motion-item">
              <PulseLine />
              <h3>Prevenção</h3>
              <p>
                Cardiologia, clínico geral e médico de família acompanhando cada
                fase da vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <h2>Especialidades</h2>
            <p>
              Toque em uma especialidade para ver quem atende e como funciona.
            </p>
          </Reveal>
          <Reveal as="ul" className="chips" stagger>
            {specialties.map((s) => (
              <li key={s.label}>
                <Link
                  className="chip"
                  href={s.slug ? `/services#${s.slug}` : "/contact"}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <Reviews />

      <section className="section section--ink">
        <div className="container split split--top">
          <Reveal className="split__text">
            <h2>Sugestões e dúvidas</h2>
            <p>
              Escreva para a recepção. Se preferir, ligue para{" "}
              {site.phones[0].label} ou {site.phones[1].label}.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm idPrefix="home" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
