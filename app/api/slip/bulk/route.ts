import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { generateSlipPDF } from '@/lib/generateSlipPDF'
import JSZip from 'jszip'

const ADMIN_KEY = process.env.ADMIN_KEY ?? '19977991'

async function getOrAssignRegNum(user: { id: number; registrationNumber: string | null }) {
  if (user.registrationNumber) return user.registrationNumber
  const regNum = `ICCHAI-2026-${1000 + user.id}`
  await prisma.user.update({ where: { id: user.id }, data: { registrationNumber: regNum } })
  return regNum
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || body.adminKey !== ADMIN_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let users
    if (body.all === true) {
      users = await prisma.user.findMany({ orderBy: { id: 'asc' } })
    } else if (Array.isArray(body.userIds) && body.userIds.length > 0) {
      users = await prisma.user.findMany({
        where: { id: { in: body.userIds.map(Number) } },
        orderBy: { id: 'asc' },
      })
    } else if (Array.isArray(body.regNumbers) && body.regNumbers.length > 0) {
      users = await prisma.user.findMany({
        where: { registrationNumber: { in: body.regNumbers } },
        orderBy: { id: 'asc' },
      })
    } else {
      return NextResponse.json({ error: 'Provide userIds, regNumbers, or all:true' }, { status: 400 })
    }

    if (users.length === 0) {
      return NextResponse.json({ error: 'No registrants found' }, { status: 404 })
    }

    const zip = new JSZip()
    await Promise.all(
      users.map(async (user) => {
        const regNum = await getOrAssignRegNum(user)
        const pdfBytes = await generateSlipPDF({
          firstName: user.firstName, lastName: user.lastName, email: user.email,
          institution: user.institution, country: user.country, role: user.role,
          attendance: user.attendance, registrationNumber: regNum, createdAt: user.createdAt,
        })
        zip.file(`${regNum}-${user.firstName}-${user.lastName}.pdf`, pdfBytes)
      })
    )

    const zipBytes = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
    const filename = body.all
      ? 'ICCHAI-2026-All-Registration-Passes.zip'
      : `ICCHAI-2026-Selected-${users.length}-Passes.zip`

    return new NextResponse(zipBytes, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to generate ZIP' }, { status: 500 })
  }
}
