import { NextResponse } from "next/server"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

export const dynamic = "force-dynamic"

export async function GET() {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([612, 792]) // Letter size
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  function sanitizeText(input: string) {
    // Normalize to NFKD and strip combining diacritics so accented chars degrade gracefully
    const s = input.normalize("NFKD").replace(/\p{M}/gu, "")

    return (
      s
        // Normalize various Unicode spaces to regular space
        .replace(/[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, " ")
        // Remove zero-width and BOM
        .replace(/[\u200B\u200C\u200D\uFEFF]/g, "")
        // Dashes and minus variants → hyphen
        .replace(/[\u2010-\u2015]/g, "-")
        .replace(/\u2212/g, "-")
        // Hyphen bullet → hyphen
        .replace(/\u2043/g, "-")
        // Bullets and middle dot → asterisk
        .replace(/[\u00B7\u2022]/g, "*")
        // Ellipsis → three dots
        .replace(/\u2026/g, "...")
        // Curly quotes → straight quotes
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        // Trademark (™) → TM
        .replace(/\u2122/g, "TM")
        // Final fallback: replace any non–Latin-1 byte with '?'
        .replace(/[^\x00-\xFF]/g, "?")
    )
  }

  const drawText = (text: string, x: number, y: number, size = 12, bold = false, color = rgb(0, 0, 0)) => {
    const safe = sanitizeText(text)
    page.drawText(safe, {
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
  const ab = pdfBytes.buffer.slice(pdfBytes.byteOffset, pdfBytes.byteOffset + pdfBytes.byteLength)

  return new NextResponse(ab, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="cv.pdf"',
      "Content-Length": String(pdfBytes.byteLength),
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  })
}
