"use client"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface SpeedControlProps {
  currentSpeed: number
  onSpeedChange: (speed: number) => void
  className?: string
}

export function SpeedControl({ currentSpeed, onSpeedChange, className = "" }: SpeedControlProps) {
  const speeds = [1, 1.5, 2, 2.5]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center gap-1 bg-white bg-opacity-90 hover:bg-opacity-100 ${className}`}
        >
          <span>{currentSpeed}x</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        {speeds.map((speed) => (
          <DropdownMenuItem
            key={speed}
            className="flex items-center justify-between"
            onClick={() => onSpeedChange(speed)}
          >
            <span>{speed}x</span>
            {currentSpeed === speed && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
