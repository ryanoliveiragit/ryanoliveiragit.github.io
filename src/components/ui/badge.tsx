import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2 py-0.5 font-mono text-[11px] tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-line bg-transparent text-ink-soft",
        solid: "border-ink bg-ink text-paper",
        /** Destaque padrão da página (status, selos). */
        accent: "border-accent/40 bg-accent/5 text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
