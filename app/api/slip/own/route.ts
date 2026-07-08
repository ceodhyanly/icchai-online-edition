import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'
import { generateSlipPDF } from '@/lib/generateSlipPDF'

export async function GET() {
  try {
    const session = await getSession()
    if (!session?.userId) {
      return NextResponse.json({ error: 'Please sign in to download your pass' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({ where: { id: Number(session.userId) } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    // Assign reg number if not already set
    let regNum = user.registrationNumber
    if (!regNum) {
      regNum = `ICCHAI-2026-${1000 + user.id}`
      await prisma.user.update({ where: { id: user.id }, data: { registrationNumber: regNum } })
    }

    const pdfBytes = await generateSlipPDF({
      firstName: user.firstName, lastName: user.lastName, email: user.email,
      institution: user.institution, country: user.country, role: user.role,
      attendance: user.attendance, registrationNumber: regNum, createdAt: user.createdAt,
    })

    return new NextResponse(new Blob([new Uint8Array(pdfBytes)]), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="ICCHAI-2026-Pass-${regNum}.pdf"`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}
