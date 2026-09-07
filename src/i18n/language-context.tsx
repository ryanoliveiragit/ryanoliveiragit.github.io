import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { content, pick, type Lang } from "@/i18n/content"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "ryanvs:lang"
const HTML_LANG: Record<Lang, string> = { pt: "pt-BR", en: "en" }

/** Preferência salva > idioma do navegador (pt-* → pt, resto → en). */
function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "pt" || saved === "en") return saved
  } catch {
    /* storage indisponível */
  }
  const nav = (navigator.language || "").toLowerCase()
  return nav.startsWith("pt") ? "pt" : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Começa em "pt" para casar com o HTML pré-renderizado; ajusta após montar.
  const [lang, setLangState] = useState<Lang>("pt")

  useEffect(() => {
    setLangState(detectLang())
  }, [])

  // Mantém <html lang>, <title> e description coerentes com o idioma ativo.
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang]
    document.title = pick(content.seo.title, lang)
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", pick(content.seo.description, lang))
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* storage indisponível */
    }
  }, [])

  const toggle = useCallback(
    () => setLang(lang === "pt" ? "en" : "pt"),
    [lang, setLang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
