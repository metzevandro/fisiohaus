import { images } from "./site";

export type Pro = { name: string; role: string };

export type Service = {
  slug: string;
  title: string;
  paragraphs: string[];
  bulletsTitle?: string;
  bullets?: string[];
  pros?: Pro[];
  image?: string;
  cta?: string;
};

const img = images.services;

export const services: Service[] = [
  {
    slug: "fisioterapia",
    title: "Fisioterapia",
    paragraphs: [
      "Cuidando dos seus movimentos, aliviando dores e promovendo qualidade de vida por meio da fisioterapia especializada.",
      "Precisa de fisioterapia domiciliar? Fale com a nossa equipe.",
    ],
    bulletsTitle: "Áreas de atuação",
    bullets: [
      "Neurofuncional",
      "Respiratória (todas as idades)",
      "Alterações da coluna",
      "Tratamento do sistema urinário",
      "Tratamento pré e pós-operatório",
      "Oncofuncional",
      "Reumatologia",
    ],
    pros: [
      {
        name: "Beate Dietrich Jung",
        role: "Fisioterapeuta responsável · CREFITO 130.038-F",
      },
    ],
    image: img.fisioterapia,
  },
  {
    slug: "pilates",
    title: "Pilates",
    paragraphs: [
      "O Pilates na Fisiohaus é conduzido por profissionais qualificados, com foco em reabilitação, fortalecimento muscular, melhora da postura e bem-estar geral.",
      "Em um ambiente seguro e acolhedor, os exercícios são adaptados às necessidades de cada aluno, equilibrando corpo e mente para uma vida mais ativa e saudável.",
    ],
    bulletsTitle: "O que você ganha",
    bullets: [
      "Força",
      "Tonificação",
      "Postura",
      "Mobilidade",
      "Flexibilidade",
      "Benefícios para mente e corpo",
    ],
    image: img.pilates,
    cta: "Marcar aula experimental gratuita",
  },
  {
    slug: "ortopedia",
    title: "Ortopedia",
    paragraphs: [
      "Atendimento ortopédico com cuidado individualizado, voltado ao diagnóstico, à prevenção e ao tratamento de lesões e disfunções do sistema musculoesquelético, com suporte integrado de outras especialidades quando necessário.",
      "O Dr. Fábio representou o Vale dos Sinos no AAOS (American Academy of Orthopaedic Surgeons) Annual Meeting 2016, em Orlando (EUA), com resultados de pesquisa sobre o joelho realizada na Universidade de Pittsburgh.",
    ],
    pros: [
      {
        name: "Dr. Fábio Vicente Arilla",
        role: "Ortopedista e traumatologista, especialista em cirurgia do joelho · CRM 39600-RS",
      },
    ],
    image: img.ortopedia,
  },
  {
    slug: "nutricao",
    title: "Nutrição",
    paragraphs: [
      "Nibea Machado é formada pela Feevale, com pós-graduação em Nutrição para a prática esportiva. É especializada em hipertrofia, performance e emagrecimento.",
      "Deborah Teixeira atende com foco em nutrição aplicada às doenças, alimentação saudável e reabilitação nutricional pós-COVID, em consultas individuais ou para toda a família.",
    ],
    pros: [
      { name: "Nibea Machado", role: "Nutricionista · CRN-2 nº 10726P" },
      { name: "Deborah Teixeira", role: "Nutricionista · CRN-2 nº 10096P" },
    ],
    image: img.nutricao,
  },
  {
    slug: "massoterapia",
    title: "Massoterapia",
    paragraphs: [
      "Dê um tempo para você. Relaxe e recarregue as energias com uma massagem revigorante, feita pela massoterapeuta Débora.",
    ],
    bulletsTitle: "Tipos de massagem",
    bullets: [
      "Massagem relaxante",
      "Massagem estética",
      "Massagem para alívio das dores",
    ],
    image: img.massoterapia,
  },
  {
    slug: "pediatria",
    title: "Pediatria",
    paragraphs: [
      "Levar a criança ao pediatra com frequência é mais do que conferir peso e altura: as consultas acompanham o desenvolvimento físico, emocional e cognitivo, previnem doenças e garantem um crescimento saudável e seguro.",
      "Com grande atuação na rede de saúde municipal, o Dr. Oscar Netto atende crianças e pré-adolescentes no Centro de Saúde Fisiohaus.",
    ],
    bulletsTitle: "Em cada consulta",
    bullets: [
      "Vacinas em dia",
      "Orientações sobre alimentação",
      "Avaliação do desenvolvimento",
      "Prevenção de problemas futuros",
    ],
    pros: [{ name: "Dr. Oscar Cardoso Netto", role: "Pediatra · CRM 15846" }],
    image: img.pediatria,
  },
  {
    slug: "clinico-geral",
    title: "Clínico geral",
    paragraphs: [
      "O clínico geral cuida da saúde de forma abrangente: da prevenção e do diagnóstico inicial ao tratamento e ao acompanhamento de longo prazo.",
      "Ele realiza exames de rotina, orienta hábitos de vida saudáveis e rastreia fatores de risco para evitar doenças. Somos um Centro de Saúde para acolher você e ajudar a cuidar mais de si.",
    ],
    image: img.clinico,
  },
  {
    slug: "palmilhas",
    title: "Palmilhas ortopédicas e baropodometria",
    paragraphs: [
      "A baropodometria é um exame que avalia complicações em pés, pernas, joelhos e quadris. A análise mostra o tipo de pisada, as zonas de pressão, a distribuição de carga e o formato do pé, ajudando a detectar lesões nas articulações da parte inferior do corpo.",
      "O jeito de caminhar influencia a postura e pode prevenir lesões futuras. Faça o exame e descubra como anda o seu caminhar.",
    ],
    pros: [{ name: "Ben-hur Damian", role: "Fisioterapeuta · CREFITO 115359" }],
    image: img.palmilhas,
  },
  {
    slug: "quiropraxia",
    title: "Quiropraxia em fisioterapia",
    paragraphs: [
      "Abordagem que relaciona a estrutura do corpo, principalmente a coluna vertebral, ao funcionamento do sistema nervoso. Envolve a manipulação manual de ossos, articulações e músculos para melhorar a saúde e aliviar dores.",
    ],
    bulletsTitle: "Pode ajudar em",
    bullets: [
      "Dores nos ombros",
      "Dores no pescoço",
      "Dores de cabeça",
      "Dores nas costas",
      "Hérnia de disco e dor ciática",
      "Tensão muscular",
      "Articulações do ombro, cotovelo, joelho e tornozelo",
      "Correção de postura",
      "Lesões ou acidentes variados",
      "Fibromialgia",
      "Dor lombar",
    ],
    pros: [{ name: "Ben-hur Damian", role: "Fisioterapeuta · CREFITO 115359" }],
    image: img.quiropraxia,
  },
  {
    slug: "dry-needling",
    title: "Dry needling",
    paragraphs: [
      "O dry needling, ou agulhamento seco, é uma técnica moderna e baseada em evidências usada por fisioterapeutas para tratar pontos-gatilho musculares: áreas tensas e dolorosas que causam dor irradiada, limitação de movimento e desconforto crônico.",
      "Com agulhas finas e estéreis, o procedimento relaxa as fibras tensionadas, melhora a circulação local e alivia a dor. É indicado para dores musculares, tendinites, tensões cervicais e lombalgias, entre outras disfunções musculoesqueléticas.",
    ],
    pros: [{ name: "Ben-hur Damian", role: "Fisioterapeuta · CREFITO 115359" }],
    image: img.dryNeedling,
  },
  {
    slug: "acupuntura",
    title: "Acupuntura e laseracupuntura",
    paragraphs: [
      "Prática milenar da Medicina Tradicional Chinesa que restabelece a saúde pelo estímulo de pontos do corpo. Pode ser feita com agulhas finas, laser (sem agulhas), ventosas, moxabustão e auriculoterapia.",
      "Indicada para dor em geral, enxaquecas, distúrbios do sono, ansiedade, asma, controle do estresse e outras condições reconhecidas pela OMS. Atende crianças, adolescentes e adultos, e a fitoterapia também é oferecida quando necessária.",
    ],
    pros: [
      {
        name: "Dr. Airton Kleinowski",
        role: "Fisioterapeuta, pós-graduado em acupuntura, mestre pela PUCRS e professor · CREFITO 14.252-F",
      },
    ],
  },
  {
    slug: "psicologia",
    title: "Psicologia",
    paragraphs: [
      "Não é preciso ter um transtorno mental para procurar um psicólogo. Dificuldades no trabalho, na família, na universidade ou nos relacionamentos, ou simplesmente o desejo de se conhecer melhor, são motivos suficientes para começar um acompanhamento.",
    ],
    bulletsTitle: "Áreas de atendimento",
    bullets: [
      "Psicoterapia de adultos",
      "Psicoterapia de crianças e adolescentes",
      "Avaliação psicológica",
      "Atendimento domiciliar",
      "Palestras",
    ],
    pros: [{ name: "Bárbara Belotto", role: "Psicóloga · CRP 07/26872" }],
    image: img.psicologia,
  },
  {
    slug: "medico-da-familia",
    title: "Médico da família",
    paragraphs: [
      "Cuidado completo para toda a família. Com o médico de família, você recebe atenção personalizada, acompanhamento contínuo e prevenção de doenças.",
      "Não é apenas tratar sintomas: é cuidar do bem-estar, orientar hábitos saudáveis e acompanhar cada fase da vida.",
    ],
    image: img.medicoFamilia,
  },
  {
    slug: "cardiologia",
    title: "Cardiologia",
    paragraphs: [
      "Muitas doenças cardíacas são silenciosas, mas com acompanhamento médico é possível prevenir e tratar antes que se tornem graves. Na Fisiohaus você conta com o Dr. Luciano Annerl, cardiologista experiente.",
    ],
    bulletsTitle: "Benefícios da consulta",
    bullets: [
      "Prevenção de doenças cardíacas",
      "Controle da pressão arterial e do colesterol",
      "Orientação para hábitos de vida mais saudáveis",
      "Diagnóstico precoce de alterações",
      "Acompanhamento personalizado",
    ],
    pros: [{ name: "Dr. Luciano Annerl", role: "Cardiologista" }],
    image: img.cardiologia,
  },
];
