import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

type SlipUser = {
  firstName: string
  lastName: string
  email: string
  institution?: string | null
  country?: string | null
  role?: string | null
  attendance: string
  registrationNumber: string
  createdAt: Date
}

function attLabel(a: string) {
  if (a === 'both') return 'Both Days  (October 22 & 23, 2026)'
  if (a === 'day1') return 'Day 1 Only  (October 22, 2026)'
  if (a === 'day2') return 'Day 2 Only  (October 23, 2026)'
  return a
}

export async function generateSlipPDF(user: SlipUser): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  const page = doc.addPage([595.28, 841.89])
  const { width, height } = page.getSize()

  const bold = await doc.embedFont(StandardFonts.HelveticaBold)
  const regular = await doc.embedFont(StandardFonts.Helvetica)

  const darkBg  = rgb(0.086, 0.016, 0.039)
  const red     = rgb(0.643, 0.110, 0.188)
  const white   = rgb(1, 1, 1)
  const offWh   = rgb(0.975, 0.965, 0.955)
  const muted   = rgb(0.55, 0.48, 0.45)
  const dark    = rgb(0.08, 0.04, 0.03)
  const border  = rgb(0.87, 0.83, 0.80)

  // ── Header ──────────────────────────────────────────────────────────────
  page.drawRectangle({ x: 0, y: height - 128, width, height: 128, color: darkBg })
  page.drawRectangle({ x: 0, y: height - 131, width, height: 3, color: red })

  page.drawText('ICCHAI', { x: 40, y: height - 54, font: bold, size: 42, color: white })
  page.drawText('2026', { x: 182, y: height - 54, font: bold, size: 42, color: red })

  page.drawText('International Conference on Contemplative HealthTech and AI', {
    x: 40, y: height - 80, font: regular, size: 9.5, color: rgb(0.78, 0.68, 0.60),
  })
  page.drawText('October 22–23, 2026  ·  Fully Online  ·  Free Event', {
    x: 40, y: height - 96, font: regular, size: 8.5, color: rgb(0.58, 0.50, 0.44),
  })
  page.drawText('icchai.com  ·  ceodhyanly@gmail.com', {
    x: 40, y: height - 112, font: regular, size: 8, color: rgb(0.46, 0.38, 0.35),
  })

  // ── REGISTRATION PASS badge ──────────────────────────────────────────────
  page.drawRectangle({ x: 40, y: height - 172, width: 194, height: 26, color: red })
  page.drawText('REGISTRATION PASS', {
    x: 50, y: height - 163, font: bold, size: 9, color: white,
  })
  page.drawText('✓ CONFIRMED', {
    x: 248, y: height - 163, font: bold, size: 9, color: red,
  })

  // ── Attendee name ────────────────────────────────────────────────────────
  page.drawText(`${user.firstName} ${user.lastName}`, {
    x: 40, y: height - 216, font: bold, size: 30, color: dark,
  })

  page.drawLine({
    start: { x: 40, y: height - 235 }, end: { x: width - 40, y: height - 235 },
    thickness: 0.8, color: border,
  })

  // ── Detail rows ──────────────────────────────────────────────────────────
  const rows: [string, string][] = [
    ['EMAIL',             user.email],
    ['INSTITUTION',       user.institution || 'Not specified'],
    ['COUNTRY',           user.country     || 'Not specified'],
    ['PROFESSIONAL ROLE', user.role        || 'Not specified'],
    ['ATTENDANCE',        attLabel(user.attendance)],
  ]

  let y = height - 270
  for (const [label, value] of rows) {
    page.drawText(label, { x: 40,  y, font: bold,    size: 7.5,  color: muted })
    page.drawText(value, { x: 190, y, font: regular, size: 11.5, color: dark  })
    y -= 34
  }

  // ── Registration number box ──────────────────────────────────────────────
  const boxY = height - 498
  page.drawRectangle({ x: 40, y: boxY, width: width - 80, height: 86,
    color: offWh, borderColor: border, borderWidth: 1 })
  page.drawRectangle({ x: 40, y: boxY + 83, width: width - 80, height: 3, color: red })

  page.drawText('REGISTRATION NUMBER', {
    x: 56, y: boxY + 62, font: bold, size: 8, color: muted,
  })
  page.drawText(user.registrationNumber, {
    x: 56, y: boxY + 22, font: bold, size: 32, color: red,
  })

  // ── Registered date ──────────────────────────────────────────────────────
  const regDate = user.createdAt.toLocaleDateString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
  page.drawText(`Registered on ${regDate}`, {
    x: 40, y: boxY - 26, font: regular, size: 9.5, color: muted,
  })

  // ── Congratulations ──────────────────────────────────────────────────────
  page.drawText('Congratulations! Your seat is confirmed at ICCHAI 2026.', {
    x: 40, y: boxY - 58, font: bold, size: 13, color: dark,
  })
  page.drawText('Please keep this pass for your records.', {
    x: 40, y: boxY - 78, font: regular, size: 9.5, color: muted,
  })
  page.drawText('The online session link will be emailed to you before the event begins.', {
    x: 40, y: boxY - 96, font: regular, size: 9.5, color: muted,
  })
  page.drawText('You are now subscribed to ICCHAI updates and newsletter.', {
    x: 40, y: boxY - 114, font: regular, size: 9.5, color: muted,
  })

  // ── Gold accent line ─────────────────────────────────────────────────────
  page.drawLine({
    start: { x: 40, y: 92 }, end: { x: width - 40, y: 92 },
    thickness: 1, color: rgb(0.776, 0.573, 0.196),
  })

  // ── Footer ───────────────────────────────────────────────────────────────
  page.drawRectangle({ x: 0, y: 0, width, height: 90, color: darkBg })
  page.drawRectangle({ x: 0, y: 90, width, height: 2, color: red })

  page.drawText('YogaXBiofeedback Pvt Ltd (Dhyanly)  ×  The India Center, University of Central Florida', {
    x: 40, y: 66, font: bold, size: 8.5, color: rgb(0.72, 0.62, 0.56),
  })
  page.drawText('In partnership with Notre Dame of Maryland University – School of Integrative Health', {
    x: 40, y: 49, font: regular, size: 8, color: rgb(0.54, 0.46, 0.42),
  })
  page.drawText('This is an automatically generated confirmation. No payment required – ICCHAI 2026 is free to attend.', {
    x: 40, y: 14, font: regular, size: 7.5, color: rgb(0.42, 0.35, 0.32),
  })

  return await doc.save()
}
