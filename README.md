# ryanvs — portfólio de Ryan Oliveira

Site pessoal minimalista (React 19 + TypeScript + Vite 8 + Tailwind CSS 4),
bilíngue (pt-BR / en), com tema claro/escuro seguindo o sistema e HTML
pré-renderizado para SEO.

## Scripts

| comando            | o que faz                                                              |
| ------------------ | ---------------------------------------------------------------------- |
| `npm run dev`      | servidor de desenvolvimento                                            |
| `npm run build`    | type-check, build de produção e pré-renderização de `dist/index.html`  |
| `npm run preview`  | serve a pasta `dist`                                                   |
| `npm run lint`     | oxlint                                                                 |
| `npm run build:og` | regenera `public/og.png` e `public/apple-touch-icon.png` (Chrome headless) |

## Onde editar

- **Textos, experiências, projetos, formação** → `src/i18n/content.ts`
  (cada campo tem `pt` e `en`; use `[[palavra]]` para destacar com a cor de accent).
- **URL do site, e-mail, LinkedIn, GitHub, WhatsApp** → `src/site.config.ts`.
  Preencha `url` com o endereço publicado para ativar canonical, `og:url`,
  `og:image` e `sitemap.xml`.
- **Cores e fontes** (Space Grotesk + Space Mono) → tokens em `src/index.css` (`--color-accent` é a cor
  única de destaque usada em toda a página).

## SEO

`vite.config.ts` injeta título, description, Open Graph, Twitter Card e
JSON-LD (schema.org/Person) a partir de `site.config.ts` + `content.ts`, e
gera `robots.txt` / `sitemap.xml` no build. `scripts/prerender.mjs` grava o
HTML renderizado em `dist/index.html`, então o conteúdo é indexável sem JS.
