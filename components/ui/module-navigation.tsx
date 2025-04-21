import Link from "next/link"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ModuleNavigationProps {
  sector?: string
  module?: string
  prevModule?: {
    name: string
    href: string
  }
  nextModule?: {
    name: string
    href: string
  }
  showHome?: boolean
}

export function ModuleNavigation({ sector, module, prevModule, nextModule, showHome = true }: ModuleNavigationProps) {
  return (
    <div className="flex items-center justify-between py-4 border-t mt-8">
      <div className="flex items-center gap-2">
        {prevModule && (
          <Link href={prevModule.href}>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              <span>{prevModule.name}</span>
            </Button>
          </Link>
        )}

        {showHome && (
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </Button>
          </Link>
        )}

        {sector && (
          <Badge variant="outline" className="hidden sm:flex">
            {sector}
          </Badge>
        )}

        {module && (
          <Badge variant="outline" className="hidden sm:flex">
            {module}
          </Badge>
        )}
      </div>

      {nextModule && (
        <Link href={nextModule.href}>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <span>{nextModule.name}</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  )
}
