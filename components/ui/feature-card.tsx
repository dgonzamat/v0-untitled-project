import type React from "react"
import { Shield, Zap, BarChart, Users, CheckCircle, Check } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  benefits?: string[]
}

export function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  // Map string icon names to actual components
  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="h-5 w-5" />,
    Zap: <Zap className="h-5 w-5" />,
    BarChart: <BarChart className="h-5 w-5" />,
    Users: <Users className="h-5 w-5" />,
    CheckCircle: <CheckCircle className="h-5 w-5" />,
  }

  const IconComponent = iconMap[icon] || <Shield className="h-5 w-5" />

  return (
    <div className="p-6 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {IconComponent}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {benefits && benefits.length > 0 && (
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
