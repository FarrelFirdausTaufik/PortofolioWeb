"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors",
        scrolled && "border-border",
      )}
      role="banner"
    >
      <a href="#about" className="sr-only">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div aria-hidden="true" className="size-6 rounded-sm bg-primary" title="" />
          <span className="text-sm font-medium tracking-wide">Farrel Firdaus Taufik</span>
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a href="#experience" className="opacity-80 transition-opacity hover:opacity-100">
                About & Leadership Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="opacity-80 transition-opacity hover:opacity-100">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="opacity-80 transition-opacity hover:opacity-100">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="opacity-80 transition-opacity hover:opacity-100">
                Tools
              </a>
            </li>
            <li>
              <a href="#contact" className="opacity-80 transition-opacity hover:opacity-100">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />

          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
            <a
              href="https://www.linkedin.com/in/farrel-firdaus-taufik-026319385"
              target="_blank"
              rel="noreferrer noopener"
              title="LinkedIn"
            >
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
            <a href="https://github.com/FarrelFirdausTaufik" target="_blank" rel="noreferrer noopener" title="GitHub">
              <Github className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Send Email">
            <a href="mailto:you@example.com" title="Email">
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </Button>

          {/* existing Download CV button */}
          <a
            href="/api/cv"
            download
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
