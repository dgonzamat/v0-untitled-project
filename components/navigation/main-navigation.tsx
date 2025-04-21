"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Breadcrumb {
  label: string
  href: string
}

interface MainNavigationProps {
  title?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  showThemeToggle?: boolean
}

export function MainNavigation({ title, description, breadcrumbs, showThemeToggle = true }: MainNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/ntt-data-logo.png" alt="NTT DATA" className="h-8 mr-3 filter dark:brightness-0 dark:invert" />
              <span className="text-xl font-semibold">AgentForce</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Inicio
            </Link>
            <Link
              href="/demos"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/demos") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Demos
            </Link>
            <Link
              href="/modules"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/modules") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Módulos
            </Link>
            <Link
              href="/infographic"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/infographic") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Infografía
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Inicio
            </Link>
            <Link
              href="/demos"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/demos") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Demos
            </Link>
            <Link
              href="/modules"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/modules") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Módulos
            </Link>
            <Link
              href="/infographic"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/infographic") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"}`}
            >
              Infografía
            </Link>
          </div>
        )}

        {/* Breadcrumbs and Title */}
        {(title || breadcrumbs) && (
          <div className="py-4">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {title && <h1 className="text-2xl font-bold">{title}</h1>}
            {description && <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>}
          </div>
        )}
      </div>
    </header>
  )
}
