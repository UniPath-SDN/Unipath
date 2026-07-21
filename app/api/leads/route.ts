// app/api/leads/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/leads
// يحفظ بيانات الفورم من صفحة تفاصيل المنحة
export async function POST(request: Request) {
  const body = await request.json()

  const { name, nationality, whatsapp, email, level, major, langCert, notes, scholarshipSlug } = body

  // validation بسيط
  if (!name || !nationality || !whatsapp || !email || !level) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // ابحث عن الـ scholarship id من الـ slug
  let scholarshipId: string | undefined
  if (scholarshipSlug) {
    const s = await prisma.scholarship.findUnique({
      where: { slug: scholarshipSlug },
      select: { id: true },
    })
    scholarshipId = s?.id
  }

  const lead = await prisma.lead.create({
    data: { name, nationality, whatsapp, email, level, major, langCert, notes, scholarshipId },
  })

  // زيادة عداد التقديمات
  if (scholarshipId) {
    prisma.scholarship.update({
      where: { id: scholarshipId },
      data: { applications: { increment: 1 } },
    }).catch(() => {})
  }

  return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
}

// GET /api/leads  (Admin / CRM — protected)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const scholarshipId = searchParams.get('scholarshipId')
  const status        = searchParams.get('status')

  const leads = await prisma.lead.findMany({
    where: {
      ...(scholarshipId && { scholarshipId }),
      ...(status        && { status: status as any }),
    },
    include: { scholarship: { select: { nameAr: true, slug: true } } },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(leads)
}
