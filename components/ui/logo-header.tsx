import Link from "next/link"

interface LogoHeaderProps {
  showTagline?: boolean
  className?: string
}

export function LogoHeader({ showTagline = true, className = "" }: LogoHeaderProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Link href="/" className="flex items-center">
        <img src="/ntt-data-logo.png" alt="NTT DATA" className="h-10 mr-4 filter dark:brightness-0 dark:invert" />
      </Link>
      {showTagline && (
        <div className="hidden md:block border-l border-gray-300 pl-4">
          <p className="text-sm font-medium">Soluciones de IA para la Industria</p>
        </div>
      )}
    </div>
  )
}
