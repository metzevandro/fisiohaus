# Fisiohaus — Next.js + React

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
  components/     Header, Footer, PageHero, Reveal, Counter, Motion,
                  SpineHero, JointArm, BreathCircle, PulseLine, ContactForm
  data/           site.ts (contatos, imagens, convênios, valores) e services.ts
  lib/            reviews.ts (Google Places) e seo.ts (metadata por rota)
```

Para trocar textos, telefones, horários ou serviços, edite só `src/data/`.

## Animações (CSS + um observador, sem GSAP)

Feitas assim para zerar o bloqueio da thread principal (Lighthouse/TBT).
`src/components/Motion.tsx` é o único script: um IntersectionObserver que cuida de
`[data-reveal]` (entrada ao rolar), `[data-count]` (contadores) e `[data-play]`
(pausa animações decorativas fora da tela). O resto é CSS em `globals.css`.

- **SpineHero** (home): a coluna começa curvada e se alinha com easing elástico (`linear()`); depois "respira".
- **JointArm**: flexão de joelho ligada à rolagem, com ângulo em graus (único com JS próprio).
- **BreathCircle**: ciclo inspire/expire (fisioterapia respiratória e Pilates).
- **PulseLine**: linha de batimento cardíaco (cardiologia).
- **Counter**: números que contam ao entrar na tela (valor final já vem no HTML).
- **Reveal / PageHero**: entradas suaves e revelação das imagens.
- Todas respeitam `prefers-reduced-motion`.

## Performance

- Fontes via `next/font/local` (pré-carregadas), fotos do Google via `next/image` (WebP/AVIF, cache de 30 dias, ver `next.config.ts`).
- `browserslist` moderno no `package.json` reduz polyfills.

## Avaliações do Google

A seção na home (`src/components/Reviews.tsx`) lê as avaliações da Places API (New).
Configure `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID` (veja `.env.example`); o cache é de ~6 meses (ajuste em `src/lib/reviews.ts`)
e a API retorna no máximo 5 avaliações. Sem as variáveis, usa `src/data/reviews.ts`
(cole ali avaliações reais). Sem foto, o avatar é escolhido de `public/images/avatars/`.

## WhatsApp e SEO

- Botão flutuante: `src/components/WhatsAppButton.tsx` (número em `site.whatsapp`), presente em todas as páginas via layout.
- SEO por rota: `pageMeta()` em `src/lib/seo.ts` (title, description, canonical, robots, Open Graph); `robots.ts`, `sitemap.ts`; 404 com `noindex`.

## Formulário de contato

`/api/contact` (`src/app/api/contact/route.ts`) envia o e-mail pela API do Resend.
Variáveis: `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` (veja `.env.example`).
Sem `RESEND_API_KEY` a rota responde 503 e o formulário mostra a mensagem de erro (não finge sucesso).
