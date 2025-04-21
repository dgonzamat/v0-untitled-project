"use client"

import { useCallback, useState } from "react"

type StateId = string
type ComponentState = Record<string, any>
type GlobalUIState = Record<StateId, ComponentState>

/**
 * Hook para gestionar estado UI consistente en toda la aplicación
 */
export function useUIState() {
  const [uiState, setUIState] = useState<GlobalUIState>({})

  /**
   * Actualiza el estado de un componente específico
   */
  const updateComponentState = useCallback((componentId: StateId, newState: Partial<ComponentState>) => {
    setUIState((prevState) => ({
      ...prevState,
      [componentId]: {
        ...(prevState[componentId] || {}),
        ...newState,
      },
    }))
  }, [])

  /**
   * Obtiene el estado actual de un componente
   */
  const getComponentState = useCallback(
    (componentId: StateId): ComponentState => {
      return uiState[componentId] || {}
    },
    [uiState],
  )

  /**
   * Reinicia el estado de un componente específico
   */
  const resetComponentState = useCallback((componentId: StateId) => {
    setUIState((prevState) => {
      const newState = { ...prevState }
      delete newState[componentId]
      return newState
    })
  }, [])

  /**
   * Reinicia todos los estados
   */
  const resetAllState = useCallback(() => {
    setUIState({})
  }, [])

  return {
    updateComponentState,
    getComponentState,
    resetComponentState,
    resetAllState,
    uiState,
  }
}
