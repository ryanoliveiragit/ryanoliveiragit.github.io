import { content, pick } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"

/** Formação acadêmica em lista compacta. */
export function Education() {
  const { lang } = useLanguage()

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="03" id="education-title">
          {pick(content.sections.education, lang)}
        </SectionHeading>

        <ul className="border-t border-line">
          {content.education.map((item) => (
            <li
              key={item.institution}
              className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3 className="text-sm font-medium tracking-tight">
                  {item.institution}
                  <span className="text-ink-soft"> — {pick(item.course, lang)}</span>
                </h3>
                {item.status && (
                  <Badge variant="accent">{pick(item.status, lang)}</Badge>
                )}
              </div>
              <span className="font-mono text-xs whitespace-nowrap text-ink-soft">
                {pick(item.period, lang)}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 mb-4 font-mono text-xs tracking-widest text-ink-soft uppercase">
          {pick(content.sections.languages, lang)}
        </h3>
        <ul className="border-t border-line">
          {content.languages.map((item) => (
            <li
              key={item.code}
              className="flex items-baseline justify-between gap-6 border-b border-line py-4"
            >
              <span className="text-sm font-medium tracking-tight">
                {pick(item.name, lang)}
              </span>
              <span className="font-mono text-xs whitespace-nowrap text-ink-soft">
                {pick(item.level, lang)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
