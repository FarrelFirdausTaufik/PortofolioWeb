"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SKILLS = {
  Core: ["C", "Java", "HTML/CSS", "Phyton", "JavaScript"],
  VideoEditing: ["Adobe After Effect", "Adobe Premiere Pro", "DaVinci"],
  Data: ["SQL"],
  Design: ["Figma", "Canva", "Adobe Xd"],
  Tools: ["Git", "VS Code"],
  SoftSkills: ["Team Coordination", "Team Leadership", "Teamwork", "Problem-Solving"],
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-skill-card]",
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-border">
      <div ref={sectionRef} className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 id="skills-heading" className="text-pretty text-2xl font-semibold md:text-3xl">
          Skills & Technologies
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} data-skill-card className="rounded-lg border border-border p-5">
              <h3 className="text-sm font-semibold">{group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
