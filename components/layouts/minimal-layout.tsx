import type React from "react"
import { MinimalHeader } from "@/components/navigation/minimal-header"
import { MinimalFooter } from "@/components/navigation/minimal-footer"

interface MinimalLayoutProps {
  children: React.ReactNode
}

export function MinimalLayout({ children }: MinimalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MinimalHeader />
      <main className="flex-1">{children}</main>
      <MinimalFooter />
    </div>
  )
}
