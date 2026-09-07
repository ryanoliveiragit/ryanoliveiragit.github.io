import path from "path"
import { mkdir, writeFile } from "node:fs/promises"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, type HtmlTagDescriptor, type Plugin } from "vite"

import { site } from "./src/site.config.ts"
import { content, tagText } from "./src/i18n/content.ts"

/**
 * Injeta as tags de SEO no index.html a partir de uma única fonte
 * (site.config.ts + content.ts) e gera robots.txt / sitemap.xml no build.
 */
function seo(): Plugin {
  const url = site.url.replace(/\/$/, "")
  const title = content.seo.title.en
  const description = content.seo.description.en
  let outDir = "dist"
  let isSsr = false

  const knowsAbout = content.skills.flatMap((g) =>
    g.items.map((i) => tagText(i, "en"))
  )
  const keywords = [
    site.name,
    site.handle,
    "software engineer",
    "generalist software engineer",
    "full stack developer",
    "front-end developer",
    "back-end developer",
    "portfolio",
    "engenheiro de software",
    "desenvolvedor full stack",
    "portfólio",
    ...knowsAbout.slice(0, 12),
  ].join(", ")

  const person = {
    "@type": "Person",
    "@id": url ? `${url}/#person` : "#person",
    name: site.name,
    alternateName: site.handle,
    jobTitle: content.hero.headline.en,
    description,
    email: `mailto:${site.email}`,
    ...(url ? { url: `${url}/`, image: `${url}${site.ogImage}` } : {}),
    address: { "@type": "PostalAddress", addressCountry: "BR" },
    worksFor: { "@type": "Organization", name: "Nevus Digital" },
    sameAs: [site.linkedin, site.github].filter(Boolean),
    knowsAbout,
    knowsLanguage: content.languages.map((l) => l.code),
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        name: `${site.name} · ${site.handle}`,
        ...(url ? { url: `${url}/` } : {}),
        inLanguage: ["en", "pt-BR", "ru"],
        about: { "@id": person["@id"] },
      },
    ],
  }

  return {
    name: "seo-meta",
    configResolved(config) {
      outDir = config.build.outDir
      isSsr = Boolean(config.build.ssr)
    },
    transformIndexHtml() {
      const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({
        tag: "meta",
        attrs,
        injectTo: "head",
      })
      const tags: HtmlTagDescriptor[] = [
        { tag: "title", children: title, injectTo: "head" },
        meta({ name: "description", content: description }),
        meta({ name: "author", content: site.name }),
        meta({ name: "keywords", content: keywords }),
        meta({ name: "robots", content: "index, follow, max-image-preview:large" }),
        meta({ property: "og:type", content: "profile" }),
        meta({ property: "og:site_name", content: site.handle }),
        meta({ property: "og:title", content: title }),
        meta({ property: "og:description", content: description }),
        meta({ property: "og:locale", content: "en_US" }),
        meta({ property: "og:locale:alternate", content: "pt_BR" }),
        meta({ property: "og:locale:alternate", content: "ru_RU" }),
        meta({ name: "twitter:card", content: url ? "summary_large_image" : "summary" }),
        meta({ name: "twitter:title", content: title }),
        meta({ name: "twitter:description", content: description }),
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(jsonLd),
          injectTo: "head",
        },
      ]
      if (url) {
        tags.push(
          { tag: "link", attrs: { rel: "canonical", href: `${url}/` }, injectTo: "head" },
          meta({ property: "og:url", content: `${url}/` }),
          meta({ property: "og:image", content: `${url}${site.ogImage}` }),
          meta({ property: "og:image:width", content: "1200" }),
          meta({ property: "og:image:height", content: "630" }),
          meta({ property: "og:image:alt", content: `${site.name} — ${content.hero.headline.en}` }),
          meta({ name: "twitter:image", content: `${url}${site.ogImage}` })
        )
      }
      return tags
    },
    async closeBundle() {
      if (isSsr) return
      await mkdir(outDir, { recursive: true })
      const robots = ["User-agent: *", "Allow: /"]
      if (url) {
        robots.push("", `Sitemap: ${url}/sitemap.xml`)
        const today = new Date().toISOString().slice(0, 10)
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
        await writeFile(path.join(outDir, "sitemap.xml"), sitemap)
      }
      await writeFile(path.join(outDir, "robots.txt"), robots.join("\n") + "\n")
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
