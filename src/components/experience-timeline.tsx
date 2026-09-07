import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Folder,
  Newspaper,
} from "lucide-react"

import {
  content,
  pick,
  tagText,
  type Experience,
  type Lang,
} from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pulse } from "@/components/ui/pulse"
import { SectionHeading } from "@/components/section-heading"
import { TimelineItem } from "@/components/timeline-item"

/** Quantos blocos (empresas) aparecem antes do "ver mais". */
const COLLAPSED_GROUPS = 3

/** Agrupa entradas consecutivas com o mesmo `group`. */
function groupExperiences(experiences: Experience[]): Experience[][] {
  const groups: Experience[][] = []
  for (const exp of experiences) {
    const last = groups[groups.length - 1]
    if (exp.group && last && last[0].group === exp.group) {
      last.push(exp)
    } else {
      groups.push([exp])
    }
  }
  return groups
}

const GROUPS = groupExperiences(content.experiences)

export function ExperienceTimeline() {
  const { lang } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  const hasMore = GROUPS.length > COLLAPSED_GROUPS
  const shown = expanded || !hasMore ? GROUPS : GROUPS.slice(0, COLLAPSED_GROUPS)
  // Próxima experiência aparece "espiada" sob um degradê, sinalizando que há mais.
  const peek = !expanded && hasMore ? GROUPS[COLLAPSED_GROUPS][0] : null
  const hiddenCount = content.experiences.length - shown.flat().length

  // Ao imprimir / salvar em PDF, mostra a timeline completa.
  useEffect(() => {
    const expand = () => setExpanded(true)
    window.addEventListener("beforeprint", expand)
    return () => window.removeEventListener("beforeprint", expand)
  }, [])

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="01" id="experience-title">
          {pick(content.sections.experience, lang)}
        </SectionHeading>

        <ol
          aria-label={pick(content.a11y.timeline, lang)}
          className="relative ml-1.5 border-l border-line"
        >
          {shown.map((group, i) =>
            group.length === 1 ? (
              <TimelineItem key={i}>
                <div className="pb-16 sm:pb-20">
                  <ExperienceBody exp={group[0]} lang={lang} showCompany />
                </div>
              </TimelineItem>
            ) : (
              <TimelineItem key={i}>
                <div className="pb-16 sm:pb-20">
                  <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-ink-soft uppercase">
                    <Folder aria-hidden className="size-3.5" />
                    {group[0].company}
                  </p>
                  <div className="mt-6 flex flex-col">
                    {group.map((exp, j) => {
                      const isLast = j === group.length - 1
                      return (
                        <div key={j} className="flex gap-3">
                          <span
                            aria-hidden
                            className="pt-1 font-mono text-xs text-ink-soft/50 select-none"
                          >
                            {isLast ? "└──" : "├──"}
                          </span>
                          <div className={isLast ? "" : "pb-12"}>
                            <ExperienceBody exp={exp} lang={lang} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </TimelineItem>
            )
          )}

          {peek && (
            <TimelineItem
              aria-hidden
              className="max-h-36 overflow-hidden select-none"
            >
              <div inert className="opacity-70">
                <ExperienceBody exp={peek} lang={lang} showCompany />
              </div>
              <div className="pointer-events-none absolute inset-0 -left-1 bg-[linear-gradient(to_bottom,transparent,var(--color-paper)_90%)]" />
            </TimelineItem>
          )}
        </ol>

        {hasMore && (
          <div className="no-print mt-8 flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="gap-1.5 font-mono text-xs tracking-widest uppercase"
            >
              {expanded ? (
                <>
                  {pick(content.actions.showLess, lang)}
                  <ChevronUp aria-hidden />
                </>
              ) : (
                <>
                  {pick(content.actions.showMore, lang)}
                  <span className="text-ink-soft">
                    · {hiddenCount} {pick(content.actions.moreCount, lang)}
                  </span>
                  <ChevronDown aria-hidden />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function ExperienceBody({
  exp,
  lang,
  showCompany = false,
}: {
  exp: Experience
  lang: Lang
  showCompany?: boolean
}) {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-base font-semibold tracking-tight">
          {pick(exp.role, lang)}
          {showCompany && (
            <span className="font-normal text-ink-soft"> — {exp.company}</span>
          )}
        </h3>
        {exp.current && <Pulse label={pick(content.a11y.currentRole, lang)} />}
        <span className="ml-auto font-mono text-xs whitespace-nowrap text-ink-soft">
          {pick(exp.period, lang)}
        </span>
      </div>

      {exp.progression && (
        <p className="mt-0.5 font-mono text-xs text-ink-soft">
          {pick(exp.progression, lang)}
        </p>
      )}

      <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
        {pick(exp.description, lang)}
      </p>

      {exp.link && (
        <a
          href={exp.link.href}
          target="_blank"
          rel="noreferrer"
          className="group/link mt-1 inline-flex w-fit items-center gap-1.5 font-mono text-xs text-accent underline-offset-4 hover:underline"
        >
          <Newspaper aria-hidden className="size-3.5" />
          {pick(exp.link.label, lang)}
          <ArrowUpRight
            aria-hidden
            className="size-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
          <span className="sr-only">{pick(content.a11y.opensNewTab, lang)}</span>
        </a>
      )}

      {exp.tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => {
            const text = tagText(tag, lang)
            return (
              <li key={text}>
                <Badge>{text}</Badge>
              </li>
            )
          })}
        </ul>
      )}
    </article>
  )
}
