import type { Metadata } from 'next'
import ScholarshipsClient from './ScholarshipsClient'

export const metadata: Metadata = {
  title: 'المنح الدراسية | UniPath',
  description: 'استعرض أكثر من 300 منحة دراسية حول العالم',
}

async function getScholarships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/scholarships/`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function ScholarshipsPage() {
  const scholarships = await getScholarships()
  return <ScholarshipsClient scholarships={scholarships} />
}