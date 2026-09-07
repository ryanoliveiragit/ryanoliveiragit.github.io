import { content, pick } from "@/i18n/content"
import { useLanguage } from "@/i18n/language-context"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label={pick(content.a11y.language, lang)}
      className="flex shrink-0 items-center gap-0.5 border border-line p-0.5"
    >
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          lang={l === "pt" ? "pt-BR" : "en"}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "px-2 py-0.5 font-mono text-[11px] tracking-widest uppercase transition-colors",
            lang === l ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
