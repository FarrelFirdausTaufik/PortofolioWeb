"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

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
          <Image
            src="/Logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="size-6 rounded-sm object-contain"
            priority
          />
          <span className="text-sm font-medium tracking-wide">Farrel F Taufik</span>
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a href="#experience" className="opacity-80 transition-opacity hover:opacity-100">
                About & Leadership
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

          {/* Download CV button */}
          <a
            href="/FarrelFirdausTaufiksResume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            download
            className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Download CV"
          >
            <Download className="mr-1.5 size-4" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
