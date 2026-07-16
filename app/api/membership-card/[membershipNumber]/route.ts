import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'
import { generateMembershipCardPDF } from '@/lib/generateMembershipCardPDF'

const ADMIN_KEY = process.env.ADMIN_KEY ?? '19977991'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ membershipNumber: string }> }
) {
  try {
    const { membershipNumber } = await params
    const adminKey = req.nextUrl.searchParams.get('adminKey')

    let authorized = false
    if (adminKey === ADMIN_KEY) {
      authorized = true
    } else {
      const session = await getSession()
      if (session?.userId) {
        const sessionUser = await prisma.user.findUnique({
          where: { id: Number(session.userId) },
          select: { ischtMembershipNumber: true },
        })
        if (sessionUser?.ischtMembershipNumber === membershipNumber) authorized = true
      }
    }

    if (!authorized) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const user = await prisma.user.findUnique({ where: { ischtMembershipNumber: membershipNumber } })
    if (!user || !user.ischtMembershipNumber) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const pdfBytes = await generateMembershipCardPDF({
      firstName: user.firstName, lastName: user.lastName,
      membershipNumber: user.ischtMembershipNumber, createdAt: user.createdAt, photo: user.photo,
    })

    return new NextResponse(new Blob([new Uint8Array(pdfBytes)]), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="ISCHT-Membership-Card-${user.ischtMembershipNumber}.pdf"`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to generate membership card' }, { status: 500 })
  }
}
