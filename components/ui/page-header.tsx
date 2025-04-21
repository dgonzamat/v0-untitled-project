import type React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  align?: "left" | "center" | "right"
}

export function PageHeader({ title, description, children, className = "", align = "left" }: PageHeaderProps) {
  return (
    <div
      className={cn("py-6 md:py-10", align === "center" && "text-center", align === "right" && "text-right", className)}
    >
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h1>
      {description && <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
