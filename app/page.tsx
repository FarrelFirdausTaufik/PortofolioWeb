import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ScrollProgress } from "@/components/scroll-progress"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { EducationAwards } from "@/components/education-awards"
import { ContactCTA } from "@/components/contact-cta"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Farrel Firdaus Taufik — Software Engineer & Video Editor",
  description:
    "Software Engineering student with a strong interest in Artificial Intelligence and Web Development. Experienced as an entry-level video editor, particularly in short movies and music videos.",
}

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <SiteHeader />
      <section
        id="about"
        className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center min-h-screen flex flex-col justify-center"
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

        <div className="mt-6 flex items-center justify-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
            <a
              href="https://www.linkedin.com/in/farrel-firdaus-taufik-026319385/"
              target="_blank"
              rel="noreferrer noopener"
              title="LinkedIn"
            >
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
            <a href="https://github.com/FarrelFirdausTaufik" target="_blank" rel="noreferrer noopener" title="GitHub">
              <Github className="size-5" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Send Email">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farrelt1307@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              title="Compose in Gmail"
            >
              <Mail className="size-5" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/FarrelFirdausTaufiksResume.pdf"
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
