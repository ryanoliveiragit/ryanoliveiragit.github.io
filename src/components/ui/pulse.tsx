/** Ponto pulsante na cor de destaque — "ativo agora" (cargo atual, disponibilidade). */
export function Pulse({ label }: { label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className="relative flex size-2 shrink-0"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
      <span className="relative inline-flex size-2 rounded-full bg-accent" />
    </span>
  )
}
