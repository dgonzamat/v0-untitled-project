import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface IndustryCardProps {
  title: string
  description: string
  icon: string
  href: string
  isNew?: boolean
}

export function IndustryCard({ title, description, icon, href, isNew }: IndustryCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="p-6 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <img src={icon || "/placeholder.svg"} alt="" className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{title}</h3>
            {isNew && <Badge className="bg-green-500 text-white mt-1">Nuevo</Badge>}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex items-center text-sm text-primary font-medium">
          Ver Demo
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
