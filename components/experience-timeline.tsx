"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Role = {
  company: string
  title: string
  period: string
  bullets: string[]
}

const ROLES: Role[] = [
  {
    company: "_______________________________________________________________________________________________________________________________________________________________",
    title: "About Me",
    period: "Feb 2023 — Feb 2024",
    bullets: [
      "Hello! I’m currently studying Software Engineering at Binus University, Bekasi. Since starting my programming journey here, I’ve been captivated by how technology can create endless opportunities. I work on both frontend and backend development, and I’m especially passionate about designing smooth user experiences and building systems that are reliable and scalable. I love learning new tools and taking on challenges that help me grow.",
    ],
  },
  {
    company: "Binus Bekasi Volleyball Club",
    title: "Vice PIC",
    period: "Feb 2023 — Feb 2024",
    bullets: [
      "Assisted the Main PIC in managing and coordinating club activities, and ensured operational continuity in the absence of the Main PIC.",
      "Supported the preparation and execution of training sessions, competitions, and community events to maintain member engagement.",
      "Contributed to team performance evaluation and supported the implementation of training and mentorship programs designed by the Main PIC.",
    ],
  },
  {
    company: "Flag Hoisting Troop Binus Bekasi",
    title: "Ceremonial Commander",
    period: "Jul 2025 — Jul 2025",
    bullets: [
      "Managed and coordinated the entire troop, ensuring effective training and member development.",
      "Fostered team spirit and motivation to enhance engagement and cohesion.",
      "Ensured troop readiness and maintained composure under high-pressure situations during the ceremony day.",
    ],
  },
  
]

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-timeline-item]")
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 id="experience-heading" className="text-pretty text-2xl font-semibold md:text-3xl">
          About & Leadership Experience
        </h2>
        <div ref={containerRef} className="relative mt-10 grid gap-8 md:mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[11px] top-0 hidden h-full w-px bg-border md:block"
          />
          {ROLES.map((role, idx) => (
            <article
              key={role.company + idx}
              data-timeline-item
              className="relative grid gap-3 rounded-lg border border-border p-5 md:grid-cols-[24px_1fr] md:gap-6 md:border-0 md:p-0"
            >
              <div className="hidden md:block">
                <div className="relative mt-1.5 size-[10px] rounded-full bg-primary md:ml-[7px]" />
              </div>
              <div>
                <header className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold md:text-lg">{role.title}</h3>
                  <span className="text-xs text-muted-foreground">{role.period}</span>
                </header>
                <p className="mt-1 text-sm text-muted-foreground">{role.company}</p>
                <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
