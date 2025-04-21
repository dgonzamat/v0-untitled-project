"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MinimalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/ntt-data-logo.png" alt="NTT DATA" className="h-8 mr-3" />
            <span className="text-xl font-medium">AgentForce</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-primary text-sm">
              Inicio
            </Link>
            <Link href="/demos" className="text-gray-900 hover:text-primary text-sm">
              Demos
            </Link>
            <Link href="/modules" className="text-gray-900 hover:text-primary text-sm">
              Módulos
            </Link>
            <Link href="/infographic" className="text-gray-900 hover:text-primary text-sm">
              Infografía
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <Link href="/" className="block text-gray-900 hover:text-primary">
              Inicio
            </Link>
            <Link href="/demos" className="block text-gray-900 hover:text-primary">
              Demos
            </Link>
            <Link href="/modules" className="block text-gray-900 hover:text-primary">
              Módulos
            </Link>
            <Link href="/infographic" className="block text-gray-900 hover:text-primary">
              Infografía
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
