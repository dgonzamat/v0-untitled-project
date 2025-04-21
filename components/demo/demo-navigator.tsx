"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Building, CreditCard, FileText, Plane, Shield, ShoppingCart, Zap } from "lucide-react"

interface DemoOption {
  id: string
  title: string
  description: string
  path: string
  icon: React.ReactNode
  color: string
}

export function DemoNavigator() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)

  const demoOptions: DemoOption[] = [
    {
      id: "seguros",
      title: "Seguros",
      description: "Contratación de seguros para automóviles con verificación de identidad",
      path: "/seguros/demo",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "banking",
      title: "Banca",
      description: "Proceso bancario con verificación de identidad y firma digital",
      path: "/banking/demo",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "telecom",
      title: "Telecomunicaciones",
      description: "Venta B2B de soluciones de telecomunicaciones empresariales",
      path: "/telecom/demo",
      icon: <Building className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "retail",
      title: "Retail",
      description: "Negociación B2B entre cadena de supermercados y fabricante",
      path: "/retail/demo",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "airline",
      title: "Aerolínea",
      description: "Reserva de vuelos con verificación de identidad y pago",
      path: "/airline/demo",
      icon: <Plane className="h-6 w-6" />,
      color: "bg-sky-100 text-sky-700",
    },
    {
      id: "mineria",
      title: "Minería",
      description: "Gestión de contratistas mineros y verificación de cumplimiento",
      path: "/mineria/demo",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-700",
    },
    {
      id: "servicios-basicos",
      title: "Servicios Básicos",
      description: "Atención al cliente para servicios de electricidad y agua",
      path: "/servicios-basicos/demo",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: "modules",
      title: "Módulos",
      description: "Catálogo de módulos de demostración por sector",
      path: "/modules",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-700",
    },
  ]

  const navigateToDemo = (path: string, id: string) => {
    setLoading(id)
    // Usamos window.location para forzar una recarga completa y evitar problemas de navegación
    window.location.href = path
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">AgentForce Demos</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Seleccione una de las siguientes demostraciones para ver AgentForce en acción en diferentes industrias y casos
          de uso.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {demoOptions.map((demo) => (
          <Card key={demo.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className={`w-12 h-12 rounded-lg ${demo.color} flex items-center justify-center mb-2`}>
                {demo.icon}
              </div>
              <CardTitle>{demo.title}</CardTitle>
              <CardDescription>{demo.description}</CardDescription>
            </CardHeader>
            <CardFooter className="pt-2">
              <Button
                className="w-full"
                onClick={() => navigateToDemo(demo.path, demo.id)}
                disabled={loading === demo.id}
              >
                {loading === demo.id ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Cargando...
                  </span>
                ) : (
                  "Ver Demo"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
