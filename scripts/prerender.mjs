/**
 * Pré-renderiza o App para HTML estático dentro de dist/index.html.
 * Assim o conteúdo (nome, cargo, experiências…) fica indexável por
 * buscadores e visível mesmo antes do JavaScript carregar.
 *
 * Executado automaticamente após `vite build` (ver package.json).
 */
import { readFile, rm, writeFile } from "node:fs/promises"
import { pathToFileURL } from "node:url"
import path from "node:path"
import { build } from "vite"

const root = process.cwd()
const ssrOut = path.join(root, "dist-ssr")

await build({
  configFile: path.join(root, "vite.config.ts"),
  logLevel: "warn",
  build: {
    ssr: "src/entry-server.tsx",
    outDir: ssrOut,
    emptyOutDir: true,
  },
})

try {
  const { render } = await import(
    pathToFileURL(path.join(ssrOut, "entry-server.js")).href
  )
  const indexPath = path.join(root, "dist", "index.html")
  const html = await readFile(indexPath, "utf8")
  const marker = '<div id="root"></div>'
  if (!html.includes(marker)) throw new Error("marcador #root não encontrado")
  await writeFile(indexPath, html.replace(marker, `<div id="root">${render()}</div>`))
  console.log("✓ dist/index.html pré-renderizado")
} finally {
  await rm(ssrOut, { recursive: true, force: true })
}
