import { Github, Linkedin, Mail } from "lucide-react"

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-card min-h-[70vh] flex items-center justify-center"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
        <h2 id="contact-heading" className="text-pretty text-2xl font-semibold md:text-3xl">
          Let’s work together
        </h2>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Feel free to reach out if you have an opportunity matching my skills and interests, or just want to connect.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=farrelt1307@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Compose email in Gmail"
            title="Compose in Gmail"
          >
            <Mail className="mr-2 size-4" aria-hidden="true" />
            Get In Touch
          </a>
          <a
            href="https://github.com/FarrelFirdausTaufik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="GitHub"
          >
            <Github className="text-foreground" size={20} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/farrel-firdaus-taufik-026319385"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="LinkedIn"
          >
            <Linkedin className="text-foreground" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
