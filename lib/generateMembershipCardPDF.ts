import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

type MemberUser = {
  firstName: string
  lastName: string
  membershipNumber: string
  createdAt: Date
  photo?: string | null // raw base64 JPEG, no data: prefix
}

// CR80 card proportions (standard ID-card size), landscape
export async function generateMembershipCardPDF(user: MemberUser): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  const page = doc.addPage([242, 153])
  const { width, height } = page.getSize()

  const bold = await doc.embedFont(StandardFonts.HelveticaBold)
  const regular = await doc.embedFont(StandardFonts.Helvetica)

  const darkBg = rgb(0.086, 0.016, 0.039)
  const gold   = rgb(0.776, 0.573, 0.196)
  const red    = rgb(0.643, 0.110, 0.188)
  const white  = rgb(1, 1, 1)
  const muted  = rgb(0.72, 0.65, 0.60)

  page.drawRectangle({ x: 0, y: 0, width, height, color: darkBg })
  page.drawRectangle({ x: 0, y: height - 4, width, height: 4, color: gold })
  page.drawRectangle({ x: 0, y: 0, width, height: 4, color: gold })

  page.drawText('ISCHT', { x: 14, y: height - 24, font: bold, size: 17, color: white })
  page.drawText('FOUNDING MEMBER', { x: 14, y: height - 38, font: bold, size: 6.5, color: gold })
  page.drawText('International Society for', { x: 14, y: height - 52, font: regular, size: 6, color: muted })
  page.drawText('Contemplative HealthTech', { x: 14, y: height - 61, font: regular, size: 6, color: muted })

  // Photo box (contain-fit, top-right)
  const boxW = 54, boxH = 62
  const boxX = width - 14 - boxW, boxY = height - 18 - boxH
  page.drawRectangle({ x: boxX - 2, y: boxY - 2, width: boxW + 4, height: boxH + 4, color: white })
  if (user.photo) {
    try {
      const photoImg = await doc.embedJpg(Buffer.from(user.photo, 'base64'))
      const scale = Math.min(boxW / photoImg.width, boxH / photoImg.height)
      const drawW = photoImg.width * scale, drawH = photoImg.height * scale
      page.drawImage(photoImg, {
        x: boxX + (boxW - drawW) / 2, y: boxY + (boxH - drawH) / 2, width: drawW, height: drawH,
      })
    } catch {
      // Malformed photo — card still generates without it
    }
  }

  page.drawLine({ start: { x: 14, y: height - 72 }, end: { x: width - 14, y: height - 72 }, thickness: 0.6, color: rgb(0.3, 0.25, 0.22) })

  page.drawText(`${user.firstName} ${user.lastName}`, { x: 14, y: height - 90, font: bold, size: 13, color: white })

  page.drawText('PROVISIONAL MEMBERSHIP ID', { x: 14, y: height - 111, font: bold, size: 6, color: muted })
  page.drawText(user.membershipNumber, { x: 14, y: height - 124, font: bold, size: 13, color: gold })

  const issued = user.createdAt.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
  page.drawText(`Founding cohort · ${issued}`, { x: 14, y: 15, font: regular, size: 6, color: muted })
  page.drawText('icchai.com', { x: width - 14 - regular.widthOfTextAtSize('icchai.com', 6), y: 15, font: regular, size: 6, color: red })
  page.drawText('Provisional — not a legal ID. Full ISCHT registration opens post-conference.', { x: 14, y: 6, font: regular, size: 4.5, color: rgb(0.5, 0.44, 0.4) })

  return await doc.save()
}
