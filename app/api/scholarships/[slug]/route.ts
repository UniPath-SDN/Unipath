// app/api/scholarships/[slug]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

type Params = { params: { slug: string } }

// GET /api/scholarships/daad-germany-2026
export async function GET(_req: Request, { params }: Params) {
  const scholarship = await prisma.scholarship.findUnique({
    where: { slug: params.slug, status: 'PUBLISHED' },
    include: {
      conditions: { orderBy: { order: 'asc' } },
      documents:  { orderBy: { order: 'asc' } },
      timeline:   { orderBy: { order: 'asc' } },
    },
  })

  if (!scholarship) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  // زيادة عداد المشاهدات بشكل async (لا تأخر الـ response)
  prisma.scholarship.update({
    where: { id: scholarship.id },
    data: { views: { increment: 1 } },
  }).catch(() => {})

  return NextResponse.json(scholarship)
}

// PUT /api/scholarships/[slug]  (Admin only)
export async function PUT(request: Request, { params }: Params) {
  const body = await request.json()

  // حذف الـ nested relations القديمة وإعادة إنشاؤها
  const scholarship = await prisma.scholarship.update({
    where: { slug: params.slug },
    data: {
      ...body,
      conditions: {
        deleteMany: {},
        create: body.conditions ?? [],
      },
      documents: {
        deleteMany: {},
        create: body.documents ?? [],
      },
      timeline: {
        deleteMany: {},
        create: body.timeline ?? [],
      },
    },
    include: { conditions: true, documents: true, timeline: true },
  })

  // Revalidate الصفحة العامة بعد التعديل (ISR)
  revalidatePath(`/scholarships/${params.slug}`)
  revalidatePath('/scholarships')

  return NextResponse.json(scholarship)
}

// DELETE /api/scholarships/[slug]  (Admin only)
export async function DELETE(_req: Request, { params }: Params) {
  await prisma.scholarship.delete({ where: { slug: params.slug } })
  revalidatePath('/scholarships')
  return NextResponse.json({ success: true })
}
