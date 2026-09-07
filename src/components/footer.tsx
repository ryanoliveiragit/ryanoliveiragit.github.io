import { ArrowUp } from "lucide-react"

import { content, pick } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { site } from "@/site.config"

const YEAR = new Date().getFullYear()

/** Rodapé enxuto: copyright de um lado, links do outro. */
export function Footer() {
  const { lang } = useLanguage()
  const link = "transition-colors hover:text-ink"

  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col-reverse items-center justify-between gap-4 font-mono text-[11px] tracking-widest text-ink-soft uppercase sm:flex-row">
        <p>
          © <span suppressHydrationWarning>{YEAR}</span> {site.handle}
        </p>

        <ul className="no-print flex items-center gap-5">
          <li>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className={link}>
              LinkedIn
            </a>
          </li>
          {site.github && (
            <li>
              <a href={site.github} target="_blank" rel="noreferrer" className={link}>
                GitHub
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${site.email}`} className={link}>
              {pick(content.contact.email, lang)}
            </a>
          </li>
          <li>
            <a href="#top" className={`inline-flex items-center gap-1 ${link}`}>
              {pick(content.actions.backToTop, lang)}
              <ArrowUp aria-hidden className="size-3" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
