import type React from "react"

interface SectionContainerProps {
  children: React.ReactNode
  title?: string
  description?: string
  background?: "light" | "white"
  className?: string
}

export function SectionContainer({
  children,
  title,
  description,
  background = "white",
  className = "",
}: SectionContainerProps) {
  return (
    <section className={`py-16 ${background === "light" ? "bg-gray-50" : "bg-white"} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-2xl font-semibold mb-3">{title}</h2>}
            {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
