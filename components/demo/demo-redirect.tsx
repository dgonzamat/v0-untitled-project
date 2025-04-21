"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface DemoRedirectProps {
  to: string
}

export function DemoRedirect({ to }: DemoRedirectProps) {
  const router = useRouter()

  useEffect(() => {
    // Usamos window.location para forzar una recarga completa
    window.location.href = to
  }, [to])

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Redirigiendo a la demo...</p>
      </div>
    </div>
  )
}
