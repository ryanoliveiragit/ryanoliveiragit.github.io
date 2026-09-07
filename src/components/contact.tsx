import { Mail } from "lucide-react"

import { content, pick } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { site } from "@/site.config"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons"

export function Contact() {
  const { lang } = useLanguage()
  const newTab = pick(content.a11y.opensNewTab, lang)
  const linkClass = "gap-1.5 font-mono text-xs tracking-widest uppercase"

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="04" id="contact-title">
          {pick(content.sections.contact, lang)}
        </SectionHeading>

        <div className="flex flex-col items-start gap-8">
          <p className="text-[clamp(2.5rem,8vw,5rem)] leading-none font-semibold tracking-tighter">
            {pick(content.contact.heading, lang)}
          </p>

          <div className="flex flex-col gap-3">
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              {pick(content.contact.blurb, lang)}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="w-fit font-mono text-sm text-accent underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="sm" asChild>
              <a href={`mailto:${site.email}`} className={linkClass}>
                <Mail aria-hidden />
                {pick(content.contact.email, lang)}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                <WhatsappIcon />
                {content.contact.whatsapp}
                <span className="sr-only">{newTab}</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                <LinkedinIcon />
                {content.contact.linkedin}
                <span className="sr-only">{newTab}</span>
              </a>
            </Button>
            {site.github && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  <GithubIcon />
                  {content.contact.github}
                  <span className="sr-only">{newTab}</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
