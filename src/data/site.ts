export const site = {
  name: "Fisiohaus",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fisiohaus.com",
  tagline: "Centro de Saúde em Estância Velha/RS",
  logo: "/images/logo.png",
  since: 1998,
  phones: [
    { label: "(51) 3561 0933", href: "tel:+555135610933" },
    { label: "(51) 99628 7291", href: "tel:+5551996287291" },
  ],
  whatsapp: {
    number: "5551996287291",
    message: "Olá! Gostaria de agendar uma consulta na Fisiohaus.",
  },
  email: "contato@fisiohaus.com",
  address: {
    street: "Rua Adolfo Mattes, 350",
    district: "Centro",
    city: "Estância Velha",
    state: "RS",
    zip: "93600-300",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Adolfo+Mattes+350+Estancia+Velha+RS",
  hours: [
    { label: "Segunda a sexta · manhã", value: "08:00 – 12:00" },
    { label: "Segunda a sexta · tarde", value: "13:00 – 19:00" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/fisiohaus/" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/fisiohaus?locale=pt_BR",
    },
  ],
};

export const nav = [
  { href: "/", label: "Início" },
  { href: "/services", label: "Serviços" },
  { href: "/convenios", label: "Convênios" },
  { href: "/missao", label: "Missão" },
  { href: "/valores", label: "Valores" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export const images = {
  clinic: "/images/clinica.jpg",
  aboutBanner: "/images/sobre-banner.jpg",
  contactBanner: "/images/contato-banner.jpg",
  convenios: "/images/convenios-banner.png",
  missao: "/images/missao-banner.jpg",
  valores: "/images/valores-banner.jpg",
  services: {
    fisioterapia: "/images/servicos/fisioterapia.jpg",
    pilates: "/images/servicos/pilates.jpg",
    ortopedia: "/images/servicos/ortopedia.jpg",
    nutricao: "/images/servicos/nutricao.jpeg",
    massoterapia: "/images/servicos/massoterapia.jpeg",
    pediatria: "/images/servicos/pediatria.jpeg",
    clinico: "/images/servicos/clinico-geral.jpg",
    palmilhas: "/images/servicos/palmilhas.jpg",
    quiropraxia: "/images/servicos/quiropraxia.jpeg",
    dryNeedling: "/images/servicos/dry-needling.jpeg",
    psicologia: "/images/servicos/psicologia.jpg",
    medicoFamilia: "/images/servicos/medico-familia.jpg",
    cardiologia: "/images/servicos/cardiologia.jpg",
  },
};

export const convenios = [
  "Bradesco",
  "Caixa",
  "CCG – Centro Clínico Gaúcho",
  "Centro Médico",
  "Postal Saúde",
  "Saúde Paz",
  "Unimed",
];

export const valores = [
  {
    term: "Ética",
    text: "Agir de acordo com as leis vigentes, as recomendações dos órgãos regulatórios e os princípios sociais da comunidade.",
  },
  {
    term: "Isonomia",
    text: "Atender a todas as pessoas de maneira igualitária, sem distinção de raça, gênero, posição, classe social ou qualquer outra característica pessoal.",
  },
  {
    term: "Igualdade",
    text: "Tratar e buscar tratamento igual para todos, sem menosprezo ou superioridade para consigo ou para com terceiros.",
  },
  {
    term: "Transparência",
    text: "Agir com clareza em toda a gestão do negócio, com processos visíveis a todos os envolvidos.",
  },
  {
    term: "Respeito",
    text: "Respeitar as opiniões de todos, vendo na diversidade um diferencial para o bem.",
  },
  {
    term: "Solidariedade",
    text: "Devolver à comunidade o bem que nos é oferecido, por meio de contribuições sociais que justificam a nossa existência.",
  },
];

/** Chips da home. `slug` aponta para a âncora em /services. Sem slug, leva ao contato. */
export const specialties = [
  { label: "Fisioterapias", slug: "fisioterapia" },
  { label: "Pilates", slug: "pilates" },
  { label: "Fisio domiciliar", slug: "fisioterapia" },
  { label: "Nutrição", slug: "nutricao" },
  { label: "Pediatria", slug: "pediatria" },
  { label: "Ortopedia", slug: "ortopedia" },
  { label: "Massagens", slug: "massoterapia" },
  { label: "Ozonioterapia" },
  { label: "Clínico geral", slug: "clinico-geral" },
  { label: "Psicologia", slug: "psicologia" },
  { label: "Acupuntura", slug: "acupuntura" },
  { label: "Médico de família", slug: "medico-da-familia" },
  { label: "Quiropraxia", slug: "quiropraxia" },
  { label: "Cardiologista", slug: "cardiologia" },
  { label: "Palmilhas ortopédicas", slug: "palmilhas" },
  { label: "Baropodometria", slug: "palmilhas" },
] as { label: string; slug?: string }[];
