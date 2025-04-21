import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ActionProps {
  text: string
  href: string
}

interface CtaSectionProps {
  title: string
  description: string
  primaryAction: ActionProps
  secondaryAction?: ActionProps
}

export function CtaSection({ title, description, primaryAction, secondaryAction }: CtaSectionProps) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>

          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{description}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryAction.href}>
              <Button variant="secondary" size="lg" className="group">
                {primaryAction.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
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
