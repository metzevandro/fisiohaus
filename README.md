# Fisiohaus — Next.js + React + GSAP

Recriação do site https://www.fisiohaus.com/ (originalmente feito em Wix).

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Rotas (mesmos caminhos do site original, preservando SEO)

| Rota                          | Conteúdo                                                           |
| ----------------------------- | ------------------------------------------------------------------ |
| `/`                           | Hero, números, apresentação, animações, especialidades, formulário |
| `/services`                   | 14 serviços com índice lateral, profissionais e registros          |
| `/convenios`                  | Convênios, particular, desconto SUS                                |
| `/missao`                     | Missão                                                             |
| `/valores`                    | Os 6 valores                                                       |
| `/sobre`                      | Linha do tempo (1998 → hoje)                                       |
| `/contact`                    | Horários, telefones, endereço e formulário                         |
| `/api/contact`                | Recebe o formulário (valida e responde)                            |
| `/sitemap.xml`, `/robots.txt` | Gerados automaticamente                                            |

## Estrutura

```
src/
  app/            páginas (App Router), layout, globals.css
  components/     Header, Footer, PageHero, Reveal, Counter,
                  SpineHero, JointArm, BreathCircle, PulseLine, ContactForm
  data/           site.ts (contatos, imagens, convênios, valores) e services.ts
  lib/gsap.ts     registro do GSAP + ScrollTrigger + useGSAP
```

Para trocar textos, telefones, horários ou serviços, edite só `src/data/`.

## Animações GSAP

- **SpineHero** (home): a coluna começa curvada e se alinha com elastic; depois "respira".
- **JointArm**: flexão de joelho ligada à rolagem (ScrollTrigger scrub), com ângulo em graus.
- **BreathCircle**: ciclo inspire/expire (fisioterapia respiratória e Pilates).
- **PulseLine**: linha de batimento cardíaco (cardiologia).
- **Counter**: números que contam ao entrar na tela.
- **Reveal / PageHero**: entradas suaves e revelação das imagens.
- Todas respeitam `prefers-reduced-motion` (via `gsap.matchMedia`).

## Avaliações do Google

A seção na home (`src/components/Reviews.tsx`) lê as avaliações da Places API (New).
Configure `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID` (veja `.env.example`); o cache é de 24h
e a API retorna no máximo 5 avaliações. Sem as variáveis, usa `src/data/reviews.ts`
(cole ali avaliações reais). Sem foto, o avatar é escolhido de `public/images/avatars/`.

## WhatsApp e SEO

- Botão flutuante: `src/components/WhatsAppButton.tsx` (número em `site.whatsapp`), presente em todas as páginas via layout.
- SEO por rota: `pageMeta()` em `src/lib/seo.ts` (title, description, canonical, robots, Open Graph); `robots.ts`, `sitemap.ts`; 404 com `noindex`.
