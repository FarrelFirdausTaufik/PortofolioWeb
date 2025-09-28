import { NextResponse } from "next/server"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

export async function GET() {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([612, 792]) // Letter size
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  const drawText = (text: string, x: number, y: number, size = 12, bold = false, color = rgb(0, 0, 0)) => {
    page.drawText(text, {
      x,
      y,
      size,
      font: bold ? fontBold : font,
      color,
    })
  }

  // Header
  drawText("Your Name", 72, 742, 20, true)
  drawText("Senior Software Engineer • Frontend / Full‑stack", 72, 720, 12)
  drawText("you@example.com • yourwebsite.com • City, Country", 72, 702, 11)

  // Summary
  drawText("Summary", 72, 670, 14, true)
  drawText("Engineer focused on fast, accessible interfaces and reliable full‑stack systems.", 72, 652)
  drawText("Track record of shipping measurable impact and improving developer experience.", 72, 636)

  // Experience
  drawText("Experience", 72, 606, 14, true)
  drawText("Senior Software Engineer — Company A (2023 — Present)", 72, 586, 12, true)
  drawText("• Improved Core Web Vitals to green; +12% conversion via experiments.", 90, 568)
  drawText("Frontend Engineer — Company B (2020 — 2023)", 72, 544, 12, true)
  drawText("• Built accessible UI components; mentored juniors; refined code reviews.", 90, 526)

  // Skills
  drawText("Skills", 72, 496, 14, true)
  drawText("TypeScript, React, Next.js, Node.js, Tailwind, Testing, CI/CD, Postgres, GraphQL", 72, 478)

  // Education
  drawText("Education", 72, 448, 14, true)
  drawText("B.S. in Computer Science — University (2016 — 2020)", 72, 430)

  const pdfBytes = await pdfDoc.save()

  return new NextResponse(pdfBytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="cv.pdf"',
      "Cache-Control": "no-store",
    },
  })
}
