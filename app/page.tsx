import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ScrollProgress } from "@/components/scroll-progress"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { EducationAwards } from "@/components/education-awards"
import { ContactCTA } from "@/components/contact-cta"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Your Name — Interactive CV",
  description:
    "Senior Software Engineer focused on performant frontends, delightful UX, and robust full‑stack systems.",
}

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <SiteHeader />
      <section
        id="about"
        className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center"
        aria-labelledby="intro-heading"
      >
        <h1 id="intro-heading" className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
          Farrel Firdaus Taufik
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          Software Engineer • Binus University
        </p>
        <p className="mt-6 text-pretty leading-relaxed">
          I'm a passionate about building modern, reliable web applications. I combine solid technical fundamentals, clean design practices, and a drive for continuous learning to deliver impactful digital solutions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              target="_blank"
              rel="noreferrer noopener"
              download
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Download CV as PDF"
            >
              <Download className="mr-2 size-4" aria-hidden="true" />
            Download CV
          </a>
          <a
            href="#projects"
              className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View My Works
          </a>
        </div>
      </section>

      <ExperienceTimeline />

      <Skills />

      <Projects />

      <EducationAwards />

      <ContactCTA />
    </main>
  )
}
