"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter sectors based on active category
  const filteredSectors =
    activeCategory === "all" ? sectors : sectors.filter((sector) => sector.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/ntt-data-logo.png" alt="NTT DATA" className="h-8" />
            <span className="ml-4 text-xl font-medium">AgentForce</span>
          </div>
        </div>
      </header>

      {/* Minimal Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Demos por Industria</h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Seleccione una industria para explorar la demo correspondiente
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${activeCategory === "all" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveCategory("financial")}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${activeCategory === "financial" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                Financieros
              </button>
              <button
                onClick={() => setActiveCategory("services")}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${activeCategory === "services" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                Servicios
              </button>
              <button
                onClick={() => setActiveCategory("industrial")}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${activeCategory === "industrial" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                Industriales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSectors.map((sector) => (
              <Link key={sector.id} href={sector.demoUrl} className="block group">
                <div className="p-6 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <img src={sector.icon || "/placeholder.svg"} alt="" className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{sector.name}</h3>
                      {sector.isNew && (
                        <span className="inline-block bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                          Nuevo
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 flex-grow">{sector.description}</p>

                  <div className="flex items-center text-sm text-primary font-medium">
                    Ver Demo
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} NTT DATA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

// Data
const sectors = [
  {
    id: "seguros",
    name: "Seguros",
    description: "Cotización, emisión y gestión de pólizas con IA.",
    icon: "/insurance-icon.png",
    demoUrl: "/seguros/demo",
    isNew: false,
    category: "financial",
  },
  {
    id: "banca",
    name: "Banca",
    description: "Onboarding, préstamos y servicios financieros.",
    icon: "/banking-icon.png",
    demoUrl: "/banking/demo",
    isNew: false,
    category: "financial",
  },
  {
    id: "telecom",
    name: "Telecomunicaciones",
    description: "Atención al cliente, soporte técnico y ventas.",
    icon: "/telecom-icon.png",
    demoUrl: "/telecom/demo",
    isNew: true,
    category: "services",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Asistencia en ventas y gestión de inventario.",
    icon: "/retail-icon.png",
    demoUrl: "/retail/demo",
    isNew: false,
    category: "services",
  },
  {
    id: "aerolineas",
    name: "Aerolíneas",
    description: "Reservas, gestión de viajes y atención al pasajero.",
    icon: "/airline-icon.png",
    demoUrl: "/airline/demo",
    isNew: false,
    category: "services",
  },
  {
    id: "mineria",
    name: "Minería",
    description: "Gestión de contratistas y cumplimiento normativo.",
    icon: "/mining-icon.png",
    demoUrl: "/mineria/demo",
    isNew: false,
    category: "industrial",
  },
  {
    id: "servicios",
    name: "Servicios Básicos",
    description: "Atención al cliente y gestión de consumo.",
    icon: "/utility-icon.png",
    demoUrl: "/servicios-basicos/demo",
    isNew: false,
    category: "industrial",
  },
]
