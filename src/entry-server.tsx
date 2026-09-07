import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import App from "./App.tsx"

/** Usado por scripts/prerender.mjs para gerar HTML estático no build. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
