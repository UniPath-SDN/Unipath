import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'UniPath — منصة المنح الدراسية',
  description: 'ابحث عن منحتك وقدّم مع فريق UniPath',
  alternates: {
    canonical: '/',
  },
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

export default async function HomePage() {
  const scholarships = await getScholarships()
  return <HomeClient scholarships={scholarships} />
}