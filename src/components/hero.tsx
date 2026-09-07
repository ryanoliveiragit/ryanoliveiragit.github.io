import { ArrowDown, Mail, MapPin } from "lucide-react"

import { content, pick } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { site } from "@/site.config"
import { Button } from "@/components/ui/button"
import { Pulse } from "@/components/ui/pulse"
import { Highlight } from "@/components/highlight"
import { LinkedinIcon } from "@/components/icons"

/**
 * Hero: nome, cargo, proposta de valor em uma frase, resumo curto,
 * disponibilidade/localização e ações principais.
 */
export function Hero() {
  const { lang } = useLanguage()
  const h = content.hero

  return (
    <header className="px-6 pt-16 pb-10 sm:pt-28 sm:pb-16">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-7">
        <div className="animate-fade-up">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-2 text-base text-ink-soft sm:text-lg">
            {pick(h.headline, lang)}
          </p>
        </div>

        <p className="max-w-2xl animate-fade-up text-lg leading-snug font-medium tracking-tight [animation-delay:80ms] sm:text-2xl">
          <Highlight text={pick(h.tagline, lang)} />
        </p>

        <p className="max-w-xl animate-fade-up text-sm leading-relaxed text-ink-soft [animation-delay:160ms] sm:text-[15px]">
          {pick(h.summary, lang)}
        </p>

        <ul className="flex animate-fade-up flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-ink-soft [animation-delay:240ms]">
          <li className="flex items-center gap-2">
            <Pulse label={pick(h.availability, lang)} />
            {pick(h.availability, lang)}
          </li>
          <li className="flex items-center gap-1.5">
            <MapPin aria-hidden className="size-3.5" />
            {pick(h.location, lang)}
          </li>
        </ul>

        <div className="flex animate-fade-up flex-wrap gap-3 [animation-delay:320ms]">
          <Button size="sm" asChild>
            <a
              href="#contact"
              className="gap-1.5 font-mono text-xs tracking-widest uppercase"
            >
              {pick(h.cta, lang)}
              <ArrowDown aria-hidden />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="gap-1.5 font-mono text-xs tracking-widest uppercase"
            >
              <LinkedinIcon />
              LinkedIn
              <span className="sr-only">{pick(content.a11y.opensNewTab, lang)}</span>
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href={`mailto:${site.email}`}
              className="gap-1.5 font-mono text-xs tracking-widest uppercase"
            >
              <Mail aria-hidden />
              {pick(content.contact.email, lang)}
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
