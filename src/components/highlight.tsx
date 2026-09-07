/**
 * Renderiza trechos marcados com [[ ]] na cor de destaque.
 * Ex.: "front-end em [[React]]" → "React" em accent.
 */
export function Highlight({ text }: { text: string }) {
  const parts = text.split(/\[\[(.+?)\]\]/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-accent">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  )
}
