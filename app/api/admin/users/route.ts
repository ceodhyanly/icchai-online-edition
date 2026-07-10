import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

const ADMIN_KEY = process.env.ADMIN_KEY ?? '19977991'

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || body.adminKey !== ADMIN_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!Array.isArray(body.userIds) || body.userIds.length === 0) {
      return NextResponse.json({ error: 'Provide userIds' }, { status: 400 })
    }

    const ids = body.userIds
      .map((id: unknown) => Number(id))
      .filter((id: number) => Number.isInteger(id))

    if (ids.length === 0) {
      return NextResponse.json({ error: 'No valid userIds provided' }, { status: 400 })
    }

    const result = await prisma.user.deleteMany({ where: { id: { in: ids } } })

    return NextResponse.json({ deleted: result.count })
  } catch {
    return NextResponse.json({ error: 'Failed to delete registrants' }, { status: 500 })
  }
}
