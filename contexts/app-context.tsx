"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark" | "system"
type Sector = "seguros" | "banca" | "telecom" | "retail" | "mineria" | "servicios-basicos" | "airline" | "default"

interface SectorConfig {
  name: string
  themeClass: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  icon: React.ReactNode
}

interface AppContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  sector: Sector
  setSector: (sector: Sector) => void
  getSectorConfig: (sectorId?: Sector) => SectorConfig
  isFullscreen: boolean
  toggleFullscreen: (elementRef?: React.RefObject<HTMLElement>) => void
}

const defaultSectorConfig: Record<Sector, SectorConfig> = {
  seguros: {
    name: "Seguros",
    themeClass: "seguros-theme",
    primaryColor: "blue",
    secondaryColor: "sky",
    accentColor: "indigo",
    icon: null,
  },
  banca: {
    name: "Banca",
    themeClass: "banca-theme",
    primaryColor: "green",
    secondaryColor: "emerald",
    accentColor: "teal",
    icon: null,
  },
  telecom: {
    name: "Telecomunicaciones",
    themeClass: "telecom-theme",
    primaryColor: "purple",
    secondaryColor: "violet",
    accentColor: "fuchsia",
    icon: null,
  },
  retail: {
    name: "Retail",
    themeClass: "retail-theme",
    primaryColor: "orange",
    secondaryColor: "amber",
    accentColor: "yellow",
    icon: null,
  },
  mineria: {
    name: "Minería",
    themeClass: "mineria-theme",
    primaryColor: "yellow",
    secondaryColor: "amber",
    accentColor: "orange",
    icon: null,
  },
  "servicios-basicos": {
    name: "Servicios Básicos",
    themeClass: "servicios-basicos-theme",
    primaryColor: "teal",
    secondaryColor: "cyan",
    accentColor: "sky",
    icon: null,
  },
  airline: {
    name: "Aerolíneas",
    themeClass: "airline-theme",
    primaryColor: "red",
    secondaryColor: "rose",
    accentColor: "pink",
    icon: null,
  },
  default: {
    name: "General",
    themeClass: "",
    primaryColor: "blue",
    secondaryColor: "sky",
    accentColor: "indigo",
    icon: null,
  },
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [sector, setSector] = useState<Sector>("default")
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Aplicar tema y clase de sector al documento
  useEffect(() => {
    // Aplicar tema (claro/oscuro)
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      document.documentElement.classList.toggle("dark", systemTheme === "dark")
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark")
    }

    // Aplicar clase de tema de sector
    const sectorConfig = defaultSectorConfig[sector]

    // Eliminar todas las clases de tema de sector anteriores
    Object.values(defaultSectorConfig).forEach((config) => {
      if (config.themeClass) {
        document.documentElement.classList.remove(config.themeClass)
      }
    })

    // Añadir la clase de tema del sector actual
    if (sectorConfig.themeClass) {
      document.documentElement.classList.add(sectorConfig.themeClass)
    }
  }, [theme, sector])

  // Detectar cambios en el estado de pantalla completa
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = (elementRef?: React.RefObject<HTMLElement>) => {
    if (!document.fullscreenElement) {
      const element = elementRef?.current || document.documentElement
      element.requestFullscreen().catch((err) => {
        console.error(`Error al intentar entrar en modo pantalla completa: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  const getSectorConfig = (sectorId?: Sector) => {
    return defaultSectorConfig[sectorId || sector]
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        sector,
        setSector,
        getSectorConfig,
        isFullscreen,
        toggleFullscreen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider")
  }
  return context
}
