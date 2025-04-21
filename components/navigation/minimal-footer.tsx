import Link from "next/link"

export function MinimalFooter() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/ntt-data-logo.png" alt="NTT DATA" className="h-6 mr-3" />
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} NTT DATA. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-sm text-gray-500 hover:text-primary">
              Inicio
            </Link>
            <Link href="/demos" className="text-sm text-gray-500 hover:text-primary">
              Demos
            </Link>
            <Link href="/modules" className="text-sm text-gray-500 hover:text-primary">
              Módulos
            </Link>
            <Link href="/infographic" className="text-sm text-gray-500 hover:text-primary">
              Infografía
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
