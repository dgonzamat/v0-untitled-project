"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

// Tipos para los estados de interacción
export type InteractionState = "idle" | "loading" | "success" | "error" | "warning" | "info"
export type FeedbackType = "toast" | "inline" | "modal" | "none"

interface UIContextProps {
  // Estado global de carga
  isLoading: boolean
  setLoading: (loading: boolean) => void

  // Estado de interacción para componentes
  getInteractionState: (componentId: string) => InteractionState
  setInteractionState: (componentId: string, state: InteractionState) => void

  // Sistema de feedback unificado
  showFeedback: (message: string, type: "success" | "error" | "warning" | "info", method?: FeedbackType) => void

  // Tema y configuración de estilo
  theme: {
    current: string
    setTheme: (theme: string) => void
    getTokenValue: (tokenName: string) => string
  }

  // Gestión de modal/dialogs
  modal: {
    isOpen: boolean
    content: ReactNode | null
    openModal: (content: ReactNode) => void
    closeModal: () => void
  }
}

const UIContext = createContext<UIContextProps | undefined>(undefined)

export function UIProvider({ children }: { children: ReactNode }) {
  // Estado global de carga
  const [isLoading, setIsLoading] = useState(false)

  // Estados de interacción de componentes
  const [interactionStates, setInteractionStates] = useState<Record<string, InteractionState>>({})

  // Estado de tema
  const [currentTheme, setCurrentTheme] = useState("default")

  // Estado de modal
  const [modalState, setModalState] = useState({ isOpen: false, content: null as ReactNode | null })

  // Gestores de carga
  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading)
  }, [])

  // Gestores de estado de interacción
  const getInteractionState = useCallback(
    (componentId: string): InteractionState => {
      return interactionStates[componentId] || "idle"
    },
    [interactionStates],
  )

  const setInteractionState = useCallback((componentId: string, state: InteractionState) => {
    setInteractionStates((prev) => ({
      ...prev,
      [componentId]: state,
    }))
  }, [])

  // Sistema de feedback
  const showFeedback = useCallback(
    (message: string, type: "success" | "error" | "warning" | "info", method: FeedbackType = "toast") => {
      // Implementación simplificada - en una versión real, esto conectaría con un sistema de notificaciones
      console.log(`[${type}][${method}] ${message}`)

      // Aquí iría la lógica para mostrar el feedback según el método seleccionado
    },
    [],
  )

  // Gestión de tema
  const getTokenValue = useCallback((tokenName: string): string => {
    // Versión simplificada - en una implementación real, esto consultaría un mapa de tokens de diseño
    return `var(--${tokenName})`
  }, [])

  // Gestión de modales
  const openModal = useCallback((content: ReactNode) => {
    setModalState({ isOpen: true, content })
  }, [])

  const closeModal = useCallback(() => {
    setModalState({ isOpen: false, content: null })
  }, [])

  const value = {
    isLoading,
    setLoading,
    getInteractionState,
    setInteractionState,
    showFeedback,
    theme: {
      current: currentTheme,
      setTheme: setCurrentTheme,
      getTokenValue,
    },
    modal: {
      isOpen: modalState.isOpen,
      content: modalState.content,
      openModal,
      closeModal,
    },
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error("useUI debe ser usado dentro de un UIProvider")
  }
  return context
}
