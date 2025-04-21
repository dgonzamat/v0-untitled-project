import type React from "react"
import { DemoHeader } from "@/components/demo/demo-header"

export default function AirlineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DemoHeader />
      {children}
    </div>
  )
}
