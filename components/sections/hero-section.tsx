import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ActionProps {
  text: string
  href: string
}

interface HeroSectionProps {
  title: string
  description: string
  primaryAction: ActionProps
  secondaryAction?: ActionProps
}

export function HeroSection({ title, description, primaryAction, secondaryAction }: HeroSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src="/ntt-data-logo.png" alt="NTT DATA" className="h-12" />
          </div>

          <h1 className="text-4xl font-semibold mb-4">{title}</h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryAction.href}>
              <Button size="lg" className="group">
                {primaryAction.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button variant="outline" size="lg">
                  {secondaryAction.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
