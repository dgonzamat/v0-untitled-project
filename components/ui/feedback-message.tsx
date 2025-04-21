"use client"

import { CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

type FeedbackType = "success" | "error" | "warning" | "info"

interface FeedbackMessageProps {
  type: FeedbackType
  message: string
  className?: string
  withIcon?: boolean
  onDismiss?: () => void
}

// Mapeo de tipos a configuraciones visuales
const feedbackConfig = {
  success: {
    icon: CheckCircle,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-800",
    iconColor: "text-green-600",
  },
  error: {
    icon: AlertCircle,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-800",
    iconColor: "text-red-600",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    iconColor: "text-amber-600",
  },
  info: {
    icon: Info,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-800",
    iconColor: "text-blue-600",
  },
}

export function FeedbackMessage({ type, message, className, withIcon = true, onDismiss }: FeedbackMessageProps) {
  const config = feedbackConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "p-3 rounded-lg border flex items-start",
        config.bgColor,
        config.borderColor,
        config.textColor,
        className,
      )}
      role="alert"
    >
      {withIcon && <Icon className={cn("h-5 w-5 mr-2 flex-shrink-0 mt-0.5", config.iconColor)} />}
      <div className="flex-1">{message}</div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-2 opacity-70 hover:opacity-100 focus:outline-none"
          aria-label="Cerrar"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>
      )}
    </div>
  )
}
