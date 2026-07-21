// app/api/scholarships/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/scholarships
// يرجع كل المنح المنشورة مع فلترة اختيارية
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const country   = searchParams.get('country')
  const level     = searchParams.get('level')
  const funding   = searchParams.get('funding')

  const scholarships = await prisma.scholarship.findMany({
    where: {
      status: 'PUBLISHED',
      ...(country  && { country }),
      ...(level    && { levels: { has: level as any } }),
      ...(funding  && { fundingType: funding as any }),
    },
    select: {
      id: true, slug: true, nameAr: true, nameEn: true,
      country: true, countryFlag: true,
      fundingType: true, levels: true,
      deadline: true, views: true, applications: true,
    },
    orderBy: { deadline: 'asc' },
  })

  return NextResponse.json(scholarships)
}

// POST /api/scholarships  (Admin only — protected by middleware)
export async function POST(request: Request) {
  const body = await request.json()

  // توليد slug تلقائي من الاسم الإنجليزي
  const slug = body.nameEn
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

  const scholarship = await prisma.scholarship.create({
    data: {
      ...body,
      slug,
      conditions: { create: body.conditions ?? [] },
      documents:  { create: body.documents  ?? [] },
      timeline:   { create: body.timeline   ?? [] },
    },
    include: { conditions: true, documents: true, timeline: true },
  })

  return NextResponse.json(scholarship, { status: 201 })
}
