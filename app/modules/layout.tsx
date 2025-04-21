import type React from "react"
import type { Metadata } from "next"
import { StandardLayout } from "@/components/layouts/standard-layout"

export const metadata: Metadata = {
  title: "AgentForce - Módulos de Demostración",
  description: "Módulos de demostración interactivos para diferentes sectores industriales",
}

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StandardLayout
      title="Módulos de Demostración"
      description="Explore nuestros módulos interactivos para diferentes sectores"
    >
      {children}
    </StandardLayout>
  )
}
