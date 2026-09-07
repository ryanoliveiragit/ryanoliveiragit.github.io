import type { LiHTMLAttributes, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface TimelineItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

/**
 * Item da timeline lateral: o trilho é a borda contínua da <ol>
 * (esquerda) e cada entrada fica à direita, com um marcador
 * sobre a linha.
 */
export function TimelineItem({ children, className, ...props }: TimelineItemProps) {
  return (
    <li className={cn("relative pl-7 sm:pl-9", className)} {...props}>
      <span
        aria-hidden
        className="absolute top-2 -left-[3.5px] inline-flex size-[7px] rounded-full bg-ink"
      />
      {children}
    </li>
  )
}
