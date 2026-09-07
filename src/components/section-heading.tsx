import type { ReactNode } from "react"

interface SectionHeadingProps {
  /** Numeração da seção, ex.: "01". */
  index: string
  /** id do <h2>, referenciado por aria-labelledby na <section>. */
  id: string
  children: ReactNode
}

/** Cabeçalho padrão das seções: número em destaque, título em mono e linha. */
export function SectionHeading({ index, id, children }: SectionHeadingProps) {
  return (
    <div className="mb-14 flex items-baseline gap-4">
      <span aria-hidden className="font-mono text-xs text-accent">
        {index}
      </span>
      <h2
        id={id}
        className="font-mono text-sm tracking-widest text-ink-soft uppercase"
      >
        {children}
      </h2>
      <div aria-hidden className="h-px min-w-6 flex-1 bg-line" />
    </div>
  )
}
