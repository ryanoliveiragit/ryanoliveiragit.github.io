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
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Idioma padrão do site (também é o idioma do HTML pré-renderizado). */
export const DEFAULT_LANG: Lang = "en"
export const LANGS: Lang[] = ["en", "pt", "ru"]

const STORAGE_KEY = "ryanvs:lang"
const HTML_LANG: Record<Lang, string> = { en: "en", pt: "pt-BR", ru: "ru" }

const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang)

/** Só a preferência salva muda o idioma; sem ela, fica o padrão (inglês). */
function savedLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    /* storage indisponível */
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Começa no padrão para casar com o HTML pré-renderizado; ajusta após montar.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  useEffect(() => {
    const saved = savedLang()
    if (saved !== DEFAULT_LANG) setLangState(saved)
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

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
