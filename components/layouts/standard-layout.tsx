import type React from "react"
import { MainNavigation } from "../navigation/main-navigation"
import { Footer } from "../navigation/footer"

interface Breadcrumb {
  label: string
  href: string
}

interface StandardLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  showThemeToggle?: boolean
  showSectorInfo?: boolean
  className?: string
}

export function StandardLayout({
  children,
  title,
  description,
  breadcrumbs,
  showThemeToggle = true,
  showSectorInfo = true,
  className = "",
}: StandardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        showThemeToggle={showThemeToggle}
      />

      <main className={`flex-1 ${className}`}>{children}</main>

      <Footer showSectorInfo={showSectorInfo} />
    </div>
  )
}
