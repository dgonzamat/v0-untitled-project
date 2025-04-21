import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AppProvider } from "@/contexts/app-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AgentForce Demo Center",
  description: "Centro de demostraciones de AgentForce para diferentes sectores",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AppProvider>{children}</AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
