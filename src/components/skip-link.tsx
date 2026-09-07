import { content, pick } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"

/** Atalho de teclado para pular a navegação (visível apenas com foco). */
export function SkipLink() {
  const { lang } = useLanguage()
  return (
    <a
      href="#content"
      className="sr-only font-mono text-xs tracking-widest uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
    >
      {pick(content.a11y.skipToContent, lang)}
    </a>
  )
}
