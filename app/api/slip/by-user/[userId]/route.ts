import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { generateSlipPDF } from '@/lib/generateSlipPDF'

const ADMIN_KEY = process.env.ADMIN_KEY ?? '19977991'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const adminKey = req.nextUrl.searchParams.get('adminKey')
    if (adminKey !== ADMIN_KEY) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { userId } = await params
    const id = parseInt(userId, 10)
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 })

    const user = await prisma.user.findUnique({ where: { id } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    // Assign reg number on-demand if missing
    let regNum = user.registrationNumber
    if (!regNum) {
      regNum = `ICCHAI-2026-${1000 + user.id}`
      await prisma.user.update({ where: { id: user.id }, data: { registrationNumber: regNum } })
    }

    const pdfBytes = await generateSlipPDF({
      firstName: user.firstName, lastName: user.lastName, email: user.email,
      institution: user.institution, country: user.country, role: user.role,
      attendance: user.attendance, registrationNumber: regNum, createdAt: user.createdAt,
      photo: user.photo,
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
