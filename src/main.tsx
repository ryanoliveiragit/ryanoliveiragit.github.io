import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

const root = document.getElementById("root")!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// No build o HTML já vem pré-renderizado (scripts/prerender.mjs);
// em desenvolvimento o container está vazio.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
