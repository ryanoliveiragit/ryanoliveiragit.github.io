import { useEffect, useState } from "react"

import { content, pick } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"

const LINKS = [
  { id: "experience", label: content.nav.experience },
  { id: "projects", label: content.nav.projects },
  { id: "education", label: content.nav.education },
  { id: "contact", label: content.nav.contact },
] as const

export function Nav() {
  const { lang } = useLanguage()
  const [active, setActive] = useState<string | null>(null)

  // Scroll-spy: a seção que cruza uma faixa a ~40% da altura da tela fica ativa.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    )
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -59% 0px", threshold: 0 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav
      aria-label={pick(content.a11y.mainNav, lang)}
      className="no-print sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-3">
        <a
          href="#top"
          className="shrink-0 font-mono text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
        >
          ryanvs
        </a>

        <ul className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto py-1 [scrollbar-width:none] max-sm:pr-8 max-sm:[mask-image:linear-gradient(to_right,black_calc(100%-2rem),transparent)] sm:justify-end [&::-webkit-scrollbar]:hidden">
          {LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id} className="shrink-0">
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "font-mono text-xs tracking-widest uppercase transition-colors hover:text-ink",
                    isActive
                      ? "text-ink underline decoration-accent decoration-2 underline-offset-8"
                      : "text-ink-soft"
                  )}
                >
                  {pick(link.label, lang)}
                </a>
              </li>
            )
          })}
        </ul>

        <LanguageToggle />
      </div>
    </nav>
  )
}
