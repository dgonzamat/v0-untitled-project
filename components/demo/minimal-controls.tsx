"use client"

import { Button } from "@/components/ui/button"
import { Play, Pause, Minimize } from "lucide-react"
import { SpeedControl } from "@/components/demo/speed-control"

interface MinimalControlsProps {
  playing: boolean
  togglePlay: () => void
  toggleFullscreen: () => void
  visible: boolean
  playbackSpeed: number
  onSpeedChange: (speed: number) => void
}

export function MinimalControls({
  playing,
  togglePlay,
  toggleFullscreen,
  visible,
  playbackSpeed,
  onSpeedChange,
}: MinimalControlsProps) {
  if (!visible) return null

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <SpeedControl currentSpeed={playbackSpeed} onSpeedChange={onSpeedChange} />
      <Button
        variant={playing ? "destructive" : "default"}
        onClick={togglePlay}
        size="sm"
        className="rounded-full h-10 w-10 p-0 flex items-center justify-center"
      >
        {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <Button
        variant="default"
        onClick={toggleFullscreen}
        size="sm"
        className="rounded-full h-10 w-10 p-0 flex items-center justify-center"
      >
        <Minimize className="h-5 w-5" />
      </Button>
    </div>
  )
}
