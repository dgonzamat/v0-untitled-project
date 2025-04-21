"use client"

import { useState, useRef, useEffect } from "react"

export type MessageType = {
  sender: string
  text: string
  stage?: number
  visible?: boolean
  reasoning?: boolean
  typing?: boolean
  showSignaturePanel?: boolean
  awaitSignature?: boolean
  showIdentityPanel?: boolean
  requiresIdentity?: boolean
  showContractorPanel?: boolean
  showConsumptionPanel?: boolean
  showTarifaPanel?: boolean
}

type ConversationPlayerProps = {
  initialMessages: MessageType[]
  onStageChange?: (stage: number) => void
  stepDuration?: number
}

export function useConversationPlayer({ initialMessages, onStageChange, stepDuration = 6 }: ConversationPlayerProps) {
  const [messages, setMessages] = useState<MessageType[]>(
    initialMessages.map((msg) => ({
      ...msg,
      visible: false,
      reasoning: false,
      typing: false,
    })),
  )
  const [playing, setPlaying] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [stepTimer, setStepTimer] = useState(stepDuration)
  const [currentStage, setCurrentStage] = useState(1)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // Función para obtener los mensajes actuales
  const getCurrentMessages = () => messages

  // Función para actualizar los mensajes
  const updateMessages = (updatedMessages: MessageType[]) => {
    setMessages(updatedMessages)
  }

  // Función para iniciar/pausar la reproducción
  const togglePlay = () => {
    if (progress === 100) {
      reset()
      setTimeout(() => {
        setPlaying(true)
        setAutoPlay(true)
        setStepTimer(stepDuration)
      }, 100)
    } else {
      const newPlayingState = !playing
      setPlaying(newPlayingState)
      setAutoPlay(newPlayingState)
      if (newPlayingState) {
        setStepTimer(stepDuration)
      }
    }
  }

  // Función para reiniciar la demo
  const reset = () => {
    setProgress(0)
    setPlaying(false)
    setAutoPlay(false)
    setCurrentStep(1)
    setStepTimer(stepDuration)
    setCurrentStage(1)

    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    updateMessages(
      messages.map((msg) => ({
        ...msg,
        visible: false,
        reasoning: false,
        typing: false,
      })),
    )
  }

  // Efecto para el temporizador automático
  useEffect(() => {
    if (autoPlay) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      timerRef.current = setInterval(() => {
        setStepTimer((prev) => {
          if (prev <= 1) {
            // Avanzar al siguiente paso cuando el temporizador llega a 0
            const totalMessages = messages.length
            const nextProgress = Math.min(progress + 100 / totalMessages, 100)

            setProgress(nextProgress)

            // Si llegamos al final, detener el temporizador
            if (nextProgress >= 100) {
              if (timerRef.current) {
                clearInterval(timerRef.current)
                timerRef.current = null
              }
              setPlaying(false)
              setAutoPlay(false)
            }

            return stepDuration // Reiniciar el temporizador
          }
          return prev - 1
        })
      }, 1000)

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current)
          timerRef.current = null
        }
      }
    }
  }, [autoPlay, progress, messages.length, stepDuration])

  // Controlador de la animación de la conversación
  useEffect(() => {
    if (!playing && !autoPlay) return

    // Lógica para la animación de conversación
    const totalMessages = messages.length

    // Calcular qué mensaje mostrar basado en el progreso
    const messageIndex = Math.min(Math.floor(progress / (100 / totalMessages)), totalMessages - 1)

    if (messageIndex < totalMessages && progress < 100) {
      // Mostrar el mensaje actual
      const updatedMessages = [...messages]

      if (!updatedMessages[messageIndex].visible) {
        // Actualizar la etapa del proceso actual
        if (updatedMessages[messageIndex].stage) {
          const newStage = updatedMessages[messageIndex].stage || 1
          setCurrentStage(newStage)
          if (onStageChange) {
            onStageChange(newStage)
          }
        }

        // Si es un mensaje del bot, primero mostrar "Razonando..."
        if (updatedMessages[messageIndex].sender === "bot") {
          updatedMessages[messageIndex] = {
            ...updatedMessages[messageIndex],
            visible: true,
            reasoning: true,
            typing: false,
          }
          updateMessages(updatedMessages)

          // Después de un pequeño delay, mostrar el mensaje real
          setTimeout(() => {
            const completeMessage = [...updatedMessages]
            completeMessage[messageIndex] = {
              ...completeMessage[messageIndex],
              reasoning: false,
              typing: true,
            }
            updateMessages(completeMessage)

            // Programar cuando terminar de "escribir"
            const typingDuration = Math.min(completeMessage[messageIndex].text.length * 10, 1500)

            setTimeout(() => {
              const finishedTyping = [...completeMessage]
              finishedTyping[messageIndex] = {
                ...finishedTyping[messageIndex],
                typing: false,
              }
              updateMessages(finishedTyping)

              // Asegurar que el scroll se actualice después de que el mensaje esté completo
              setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
              }, 100)
            }, typingDuration)
          }, 800)
        } else {
          // Si es un mensaje del cliente, mostrarlo directamente
          updatedMessages[messageIndex] = {
            ...updatedMessages[messageIndex],
            visible: true,
            typing: true,
          }
          updateMessages(updatedMessages)

          // Programar cuando terminar de "escribir"
          const typingDuration = Math.min(updatedMessages[messageIndex].text.length * 10, 1000)

          setTimeout(() => {
            const finishedTyping = [...updatedMessages]
            finishedTyping[messageIndex] = {
              ...finishedTyping[messageIndex],
              typing: false,
            }
            updateMessages(finishedTyping)

            // Asegurar que el scroll se actualice después de que el mensaje esté completo
            setTimeout(() => {
              messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
            }, 100)
          }, typingDuration)
        }
      }
    }

    // Si llegamos al 100%, detenemos la reproducción
    if (progress >= 100) {
      setPlaying(false)
      setAutoPlay(false)
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [playing, autoPlay, progress, messages, onStageChange])

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return {
    messages,
    playing,
    autoPlay,
    progress,
    stepTimer,
    currentStage,
    messagesEndRef,
    getCurrentMessages,
    updateMessages,
    togglePlay,
    reset,
  }
}
