export function EducationAwards() {
  const logos = [
    { name: "C", src: "/c.png" },
    { name: "Java", src: "/japa.png" },
    { name: "HTML", src: "/html.png" },
    { name: "CSS", src: "/css.png" },
    { name: "Python", src: "/py.png" },
    { name: "JavaScript", src: "/js.png" },
    { name: "Adobe After Effects", src: "/ae.png" },
    { name: "Adobe Premiere Pro", src: "/pr.png" },
    { name: "DaVinci Resolve", src: "/dvc.png" },
    { name: "SQL", src: "/mysql.png" },
    { name: "Figma", src: "/figma.png" },
    { name: "Adobe Media Encoder", src: "me.png" },
    { name: "Adobe XD", src: "/xd.png" },
    { name: "Git", src: "/git.png" },
    { name: "VS Code", src: "/vscode.png" },
  ]

  return (
    <section id="education" aria-labelledby="tools-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 id="tools-heading" className="text-pretty text-center text-2xl font-semibold md:text-3xl">
          Tools & Technologies
        </h2>

        <ul
          className="
            mt-8 grid grid-cols-3 gap-8 
            justify-items-center 
            sm:grid-cols-4 md:grid-cols-5
          "
        >
          {logos.map((item) => (
            <li key={item.name} className="group flex flex-col items-center text-center">
              <img
                src={item.src || "/placeholder.svg"}
                alt={`${item.name} logo`}
                className="
                  h-12 w-12 md:h-14 md:w-14 
                  transition-transform duration-200 ease-out
                  group-hover:scale-110
                "
                loading="lazy"
                decoding="async"
              />
              <span className="sr-only">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
