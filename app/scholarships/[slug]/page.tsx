import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ScholarshipDetailClient from './ScholarshipDetailClient'

type Props = { params: { slug: string } }

async function getScholarship(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/scholarships/${slug}/`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = await getScholarship(params.slug)
  if (!s) return { title: 'منحة غير موجودة' }
  return {
    title: `${s.name_ar} | UniPath`,
    description: s.description_ar?.slice(0, 160),
  }
}

export default async function ScholarshipDetailPage({ params }: Props) {
  const scholarship = await getScholarship(params.slug)
  if (!scholarship) notFound()
  return <ScholarshipDetailClient scholarship={scholarship} />
}