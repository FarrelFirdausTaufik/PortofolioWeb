"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Edit } from "lucide-react"

type Project = {
  name: string
  role: string
  impact: string[]
  link?: string
  image: string
  github?: string
  editUrl?: string
}

const PROJECTS: Project[] = [
  {
    name: "Brewora Coffee",
    role: "HTML/CSS · JavaScript",
    impact: [
      "Implemented backend features to enhance functionality.",
      "Integrated order systems, including payment gateways and related services.",
      "Optimized overall system performance for better efficiency and scalability.",
    ],
    github: "https://github.com/FarrelFirdausTaufik/Group-Project_Brewora-Coffee",
    editUrl: "https://your-link.com/alpha-edit",
    image: "/kopi.gif",
  },
  {
    name: "Kidneys Detector",
    role: "HTML5 · JSON · Phyton",
    impact: [
      "Developed an AI-powered application for early detection of kidney disease from medical images.",
      "Implemented machine learning techniques in image analysis systems.",
      "Delivered a fast and efficient solution for early disease detection.",
    ],
    github: "https://github.com/FarrelFirdausTaufik/Group-Project_Kidneys-Detector",
    editUrl: "https://your-link.com/design-system-notion",
    image: "/kiney.gif",
  },
  {
    name: "VS Travel",
    role: "HTML/CSS · JavaScript",
    impact: [
      "Built responsive travel website with interactive UI and form validation",
      "Developed mobile-first design with JavaScript animations and user feedback",
      "Created complete travel booking system with multi-page navigation",
    ],
    github: "https://github.com/FarrelFirdausTaufik/VS-Travel",
    editUrl: "https://your-link.com/analytics-docs",
    image: "/trepel.gif",
  },
  {
    name: "Video Editing",
    role: "Typograph · Transition",
    impact: [
      "Created and integrated 3D camera effects.",
      "Synchronized animated text with music tracks.",
      "Applied time remapping techniques to enhance motion and pacing.",
    ],
    github: "https://github.com/FarrelFirdausTaufik/Typography_everythingUAre",
    editUrl: "https://your-link.com/mobile-edit",
    image: "/mv.gif",
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-project]",
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.08,
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
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border transition-colors duration-300 hover:bg-accent/5">
      <div ref={sectionRef} className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 id="projects-heading" className="text-pretty text-2xl font-semibold md:text-3xl">
          Project Highlights
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.name} data-project className="group flex flex-col rounded-lg border border-border p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/20 hover:bg-accent/5">
              <div className="aspect-video w-full overflow-hidden rounded-md border border-border">
                <Image
                  alt={`Preview of ${p.name}`}
                  src={p.image || "/placeholder.svg"}
                  width={1200}
                  height={630}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <header className="mt-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </header>
              <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">
                {p.impact.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {(p.github || p.editUrl) && (
                <div className="mt-4 flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${p.name} on GitHub`}
                      title="GitHub"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Github className="h-5 w-5" aria-hidden="true" />
                    </a>
                  )}
                  {p.editUrl && (
                    <a
                      href={p.editUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open custom link for ${p.name}`}
                      title="Edit / Custom link"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Edit className="h-5 w-5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}