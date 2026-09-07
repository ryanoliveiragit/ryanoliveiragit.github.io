/**
 * Gera public/og.png (1200×630, preview em redes/LinkedIn) e
 * public/apple-touch-icon.png (180×180) a partir de HTML, usando o
 * Chrome/Chromium headless instalado na máquina.
 *
 *   npm run build:og
 *
 * Defina CHROME_PATH se o binário não for encontrado automaticamente.
 */
import { execFileSync, execSync } from "node:child_process"
import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir, homedir } from "node:os"
import path from "node:path"

const root = process.cwd()
const svgFavicon = path.join(root, "public", "favicon.svg")

function findChrome() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH
  for (const bin of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]) {
    try {
      return execSync(`command -v ${bin}`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim()
    } catch { /* tenta o próximo */ }
  }
  const pw = path.join(homedir(), ".cache", "ms-playwright")
  if (existsSync(pw)) {
    for (const dir of readdirSync(pw).filter((d) => d.startsWith("chromium-")).sort().reverse()) {
      const bin = path.join(pw, dir, "chrome-linux64", "chrome")
      if (existsSync(bin)) return bin
    }
  }
  throw new Error("Chrome/Chromium não encontrado. Defina CHROME_PATH.")
}

const chrome = findChrome()
const work = mkdtempSync(path.join(tmpdir(), "portfolio-img-"))

function shoot(html, width, height, out) {
  const file = path.join(work, path.basename(out) + ".html")
  writeFileSync(file, html)
  execFileSync(chrome, [
    "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
    "--force-device-scale-factor=1", "--virtual-time-budget=10000",
    `--window-size=${width},${height}`, `--screenshot=${out}`, `file://${file}`,
  ], { stdio: "ignore" })
  console.log(`✓ ${path.relative(root, out)}`)
}

const og = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=Space+Mono:wght@400;700&display=block">
<style>
  html,body{margin:0;width:1200px;height:630px;background:#fafaf8;color:#161616;font-family:"Space Grotesk",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  .wrap{position:relative;box-sizing:border-box;width:1200px;height:630px;padding:76px 88px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}
  .mono{font-family:"Space Mono",monospace;letter-spacing:.18em;text-transform:uppercase;font-size:18px;color:#555550}
  .kicker{display:flex;align-items:center;gap:14px}
  .dot{width:10px;height:10px;border-radius:50%;background:#c2410c}
  h1{margin:0;font-size:92px;line-height:1;font-weight:600;letter-spacing:-.035em}
  h2{margin:18px 0 0;font-size:30px;max-width:900px;line-height:1.2;font-weight:500;color:#555550}
  .stack{display:flex;gap:12px}
  .chip{font-family:"Space Mono",monospace;font-size:18px;letter-spacing:.06em;padding:8px 14px;border:1.5px solid #e6e6e0;color:#555550}
  .chip.accent{border-color:#c2410c;color:#c2410c}
  .bar{position:absolute;left:0;top:0;bottom:0;width:14px;background:#c2410c}
  .logo{position:absolute;right:88px;top:76px;width:96px;border-radius:22px}
</style></head><body><div class="wrap">
  <div class="bar"></div>
  <img class="logo" src="file://${svgFavicon}" alt="">
  <div>
    <div class="kicker mono"><span class="dot"></span>ryanvs · aberto a novas oportunidades</div>
    <h1 style="margin-top:38px">Ryan Oliveira</h1>
    <h2>Engenheiro de Software · front-end, back-end, IA e o que o projeto precisar</h2>
  </div>
  <div class="stack">
    <span class="chip accent">Front-end</span><span class="chip accent">Back-end</span><span class="chip accent">IA</span>
    <span class="chip">Produto</span><span class="chip">UI/UX</span><span class="chip">Automação</span>
  </div>
</div></body></html>`

const icon = `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;width:180px;height:180px;background:#fafaf8}
  body{display:grid;place-items:center}img{width:124px;height:124px}
</style></head><body><img src="file://${svgFavicon}" alt=""></body></html>`

try {
  shoot(og, 1200, 630, path.join(root, "public", "og.png"))
  shoot(icon, 180, 180, path.join(root, "public", "apple-touch-icon.png"))
} finally {
  rmSync(work, { recursive: true, force: true })
}
