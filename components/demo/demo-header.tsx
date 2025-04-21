"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Home, Menu, X } from "lucide-react"

export function DemoHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const demoLinks = [
    { name: "Seguros", path: "/seguros/demo" },
    { name: "Banca", path: "/banking/demo" },
    { name: "Telecomunicaciones", path: "/telecom/demo" },
    { name: "Retail", path: "/retail/demo" },
    { name: "Aerolíneas", path: "/airline/demo" },
    { name: "Minería", path: "/mineria/demo" },
    { name: "Servicios Básicos", path: "/servicios-basicos/demo" },
  ]

  return (
    <header className="bg-white shadow-sm py-2 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </Button>
          </Link>
          <Link href="/demos">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              <span>Todas las Demos</span>
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {demoLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <Button variant={pathname === link.path ? "secondary" : "ghost"} size="sm" className="text-sm">
                {link.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <nav className="flex flex-col p-4 gap-2">
            {demoLinks.map((link) => (
              <Link key={link.path} href={link.path} onClick={() => setMenuOpen(false)}>
                <Button
                  variant={pathname === link.path ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
