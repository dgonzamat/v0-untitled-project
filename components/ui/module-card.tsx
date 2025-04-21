import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ModuleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  sector: string
  isNew?: boolean
  className?: string
}

export function ModuleCard({ title, description, icon, sector, isNew, className }: ModuleCardProps) {
  return (
    <Card className={cn("h-full flex flex-col hover:shadow-md transition-shadow", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-1">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          {isNew && <Badge className="bg-green-500 hover:bg-green-600">Nuevo</Badge>}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 mt-auto">
        <div className="text-xs text-muted-foreground">Sector: {sector}</div>
      </CardContent>
    </Card>
  )
}
