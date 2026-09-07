/**
 * Configuração global do site — usada pelo `index.html` (via plugin do Vite),
 * pelo JSON-LD, pelo sitemap/robots e pelos componentes.
 *
 * ✏️ Preencha `url` com o endereço final publicado (sem barra no fim),
 * ex.: "https://ryanvs.dev". Enquanto estiver vazio, as tags que dependem
 * de URL absoluta (canonical, og:url, og:image, sitemap) são omitidas.
 */
export const site = {
  url: "https://ryanoliveiragit.github.io",
  name: "Ryan Oliveira",
  handle: "ryanvs",
  /** E-mail público de contato (aparece na seção de contato). */
  email: "ryanoliveirasp@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryanoliveira-dev/",
  /** Perfil do GitHub — deixe vazio para ocultar o link. */
  github: "https://github.com/ryanoliveiragit",
  /** Número no formato internacional, só dígitos (55 + DDD + número). */
  whatsapp: "5511945319510",
  /** Cores de fundo dos temas, usadas em meta theme-color. */
  themeColor: { light: "#fafaf8", dark: "#131312" },
  ogImage: "/og.png",
} as const
