"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Avoid hydration mismatch
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" title="Toggle theme" disabled>
        <Sun className="size-4 opacity-50" aria-hidden="true" />
      </Button>
    )
  }

  const isDark = (theme ?? resolvedTheme) === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
