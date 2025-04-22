"use client"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"

interface SpeedControlProps {
  currentSpeed: number
  onSpeedChange: (speed: number) => void
  className?: string
}

export function SpeedControl({ currentSpeed, onSpeedChange, className = "" }: SpeedControlProps) {
  const speeds = [1, 1.5, 2, 2.5]
  const [localSpeed, setLocalSpeed] = useState(currentSpeed)

  // Sincronizar el estado local con las props
  useEffect(() => {
    setLocalSpeed(currentSpeed)
  }, [currentSpeed])

  const handleSpeedChange = (speed: number) => {
    setLocalSpeed(speed)
    onSpeedChange(speed)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center gap-1 bg-white bg-opacity-90 hover:bg-opacity-100 ${className}`}
          aria-label={`Velocidad actual: ${localSpeed}x`}
        >
          <span>{localSpeed}x</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        {speeds.map((speed) => (
          <DropdownMenuItem
            key={speed}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleSpeedChange(speed)}
          >
            <span>{speed}x</span>
            {localSpeed === speed && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
