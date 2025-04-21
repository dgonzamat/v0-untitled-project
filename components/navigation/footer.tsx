import Link from "next/link"

interface FooterProps {
  showSectorInfo?: boolean
}

export function Footer({ showSectorInfo = true }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/ntt-data-logo.png" alt="NTT DATA" className="h-8 mr-3 filter dark:brightness-0 dark:invert" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} NTT DATA. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              href="/demos"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Demos
            </Link>
            <Link
              href="/modules"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Módulos
            </Link>
            <Link
              href="/infographic"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Infografía
            </Link>
          </div>
        </div>

        {showSectorInfo && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-center">Sectores Industriales</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Link
                href="/seguros/demo"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Seguros
              </Link>
              <Link
                href="/banking/demo"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Banca
              </Link>
              <Link
                href="/telecom/demo"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Telecomunicaciones
              </Link>
              <Link
                href="/retail/demo"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Retail
              </Link>
              <Link
                href="/airline/demo"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Aerolíneas
              </Link>
              <Link
                href="/mineria/demo"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Minería
              </Link>
              <Link
                href="/servicios-basicos/demo"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Servicios Básicos
              </Link>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
