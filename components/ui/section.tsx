import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
  contentClassName?: string
  fullWidth?: boolean
}

export function Section({
  children,
  title,
  description,
  className = "",
  contentClassName = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section className={cn("py-8 md:py-12", className)}>
      <div className={fullWidth ? "w-full" : "container mx-auto px-4"}>
        {(title || description) && (
          <div className="mb-6 md:mb-8 text-center">
            {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>}
            {description && <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>}
          </div>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  )
}
