import { ArrowUpRight } from "lucide-react"

import { content, pick, tagText } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"

/** Projetos pessoais no ar — lista minimalista com stack de cada um. */
export function Projects() {
  const { lang } = useLanguage()

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="02" id="projects-title">
          {pick(content.sections.projects, lang)}
        </SectionHeading>

        <p className="-mt-8 mb-10 max-w-md text-sm leading-relaxed text-ink-soft">
          {pick(content.projectsNote, lang)}
        </p>

        <ul className="border-t border-line">
          {content.projects.map((project) => (
            <li
              key={project.title}
              className="grid gap-3 border-b border-line py-7 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-8"
            >
              <h3 className="text-base font-semibold tracking-tight">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  {project.title}
                  <ArrowUpRight
                    aria-hidden
                    className="size-3.5 text-ink-soft transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                  <span className="sr-only">
                    {pick(content.a11y.opensNewTab, lang)}
                  </span>
                </a>
              </h3>
              <div className="flex flex-col gap-3">
                <p className="max-w-lg text-sm leading-relaxed text-ink-soft">
                  {pick(project.description, lang)}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => {
                    const text = tagText(tag, lang)
                    return (
                      <li key={text}>
                        <Badge>{text}</Badge>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
