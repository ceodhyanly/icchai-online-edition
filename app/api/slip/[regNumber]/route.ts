import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'
import { generateSlipPDF } from '@/lib/generateSlipPDF'

const ADMIN_KEY = process.env.ADMIN_KEY ?? '19977991'

async function ensureRegNumber(user: { id: number; registrationNumber: string | null }) {
  if (user.registrationNumber) return user.registrationNumber
  const regNum = `ICCH-AI-2026-${1000 + user.id}`
  await prisma.user.update({ where: { id: user.id }, data: { registrationNumber: regNum } })
  return regNum
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ regNumber: string }> }
) {
  try {
    const { regNumber } = await params
    const adminKey = req.nextUrl.searchParams.get('adminKey')

    let authorized = false
    if (adminKey === ADMIN_KEY) {
      authorized = true
    } else {
      const session = await getSession()
      if (session?.userId) {
        const sessionUser = await prisma.user.findUnique({
          where: { id: Number(session.userId) },
          select: { registrationNumber: true },
        })
        if (sessionUser?.registrationNumber === regNumber) authorized = true
      }
    }

    if (!authorized) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const user = await prisma.user.findUnique({ where: { registrationNumber: regNumber } })
    if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const regNum = await ensureRegNumber(user)
    const pdfBytes = await generateSlipPDF({
      firstName: user.firstName, lastName: user.lastName, email: user.email,
      institution: user.institution, country: user.country, role: user.role,
      attendance: user.attendance, registrationNumber: regNum, createdAt: user.createdAt,
      photo: user.photo,
    })

    return new NextResponse(new Blob([new Uint8Array(pdfBytes)]), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="ICCH-AI-2026-Pass-${regNum}.pdf"`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}
