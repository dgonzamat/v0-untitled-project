import Link from "next/link"
import { StandardLayout } from "@/components/layouts/standard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DemosPage() {
  return (
    <StandardLayout
      title="Demos por Industria"
      description="Explora nuestras demos interactivas para diferentes sectores industriales"
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Demos", href: "/demos" },
      ]}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <Card key={sector.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <img src={sector.icon || "/placeholder.svg"} alt={sector.name} className="w-10 h-10" />
                  <CardTitle>{sector.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{sector.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={sector.demoUrl} className="w-full">
                  <Button variant="outline" className="w-full">
                    Ver Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </StandardLayout>
  )
}

// Data
const sectors = [
  {
    id: "seguros",
    name: "Seguros",
    description: "Soluciones para la industria de seguros, incluyendo cotización, emisión y gestión de pólizas.",
    icon: "/insurance-icon.png",
    demoUrl: "/seguros/demo",
  },
  {
    id: "banca",
    name: "Banca",
    description: "Soluciones para la industria bancaria, incluyendo onboarding, préstamos y servicios financieros.",
    icon: "/banking-icon.png",
    demoUrl: "/banking/demo",
  },
  {
    id: "telecom",
    name: "Telecomunicaciones",
    description: "Soluciones para la industria de telecomunicaciones, incluyendo atención al cliente y ventas.",
    icon: "/telecom-icon.png",
    demoUrl: "/telecom/demo",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Soluciones para la industria del retail, incluyendo asistencia en ventas y recomendaciones.",
    icon: "/retail-icon.png",
    demoUrl: "/retail/demo",
  },
  {
    id: "aerolineas",
    name: "Aerolíneas",
    description: "Soluciones para la industria de aerolíneas, incluyendo reservas y atención al cliente.",
    icon: "/airline-icon.png",
    demoUrl: "/airline/demo",
  },
  {
    id: "mineria",
    name: "Minería",
    description: "Soluciones para la industria minera, incluyendo gestión de contratistas y cumplimiento normativo.",
    icon: "/mining-icon.png",
    demoUrl: "/mineria/demo",
  },
  {
    id: "servicios",
    name: "Servicios Básicos",
    description: "Soluciones para empresas de servicios básicos, incluyendo atención al cliente y gestión de consumo.",
    icon: "/utility-icon.png",
    demoUrl: "/servicios-basicos/demo",
  },
]
