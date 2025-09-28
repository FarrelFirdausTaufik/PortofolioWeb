"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)
    if (!barRef.current) return

    const tween = gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      transformOrigin: "0 0",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: true,
        onUpdate: (self) => {
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${self.progress})`
          }
        },
      },
    })

    return () => {
      tween?.scrollTrigger?.kill()
      tween?.kill()
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
      <div ref={barRef} className="h-full w-full scale-x-0 bg-primary" style={{ transformOrigin: "0 0" }} />
    </div>
  )
}
