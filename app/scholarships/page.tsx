// app/scholarships/page.tsx
import type { Metadata } from 'next'
import ScholarshipsClient from './ScholarshipsClient'

export const metadata: Metadata = {
  title: 'المنح الدراسية | UniPath',
  description: 'استعرض أكثر من 300 منحة دراسية حول العالم',
}

// ✅ بيانات احتياطية في حالة فشل الـ API
const FALLBACK_SCHOLARSHIPS = [
  {
    id: '1',
    slug: 'daad-germany-2026',
    name_ar: 'منحة DAAD الألمانية 2026',
    name_en: 'DAAD Germany Scholarship 2026',
    country: 'ألمانيا',
    country_flag: '🇩🇪',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    deadline: '2026-03-31',
    views: 1247,
    applications: 89,
  },
  {
    id: '2',
    slug: 'chevening-uk-2026',
    name_ar: 'منحة Chevening البريطانية',
    name_en: 'Chevening UK Scholarship 2026',
    country: 'بريطانيا',
    country_flag: '🇬🇧',
    funding_type: 'FULL',
    levels: ['MASTERS'],
    deadline: '2026-11-05',
    views: 2341,
    applications: 156,
  },
  {
    id: '3',
    slug: 'turkey-burslari-2026',
    name_ar: 'منحة تركيا Bursları',
    name_en: 'Turkey Bursları 2026',
    country: 'تركيا',
    country_flag: '🇹🇷',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    deadline: '2026-02-20',
    views: 1543,
    applications: 203,
  },
  {
    id: '4',
    slug: 'fulbright-usa-2026',
    name_ar: 'منحة Fulbright الأمريكية',
    name_en: 'Fulbright USA 2026',
    country: 'أمريكا',
    country_flag: '🇺🇸',
    funding_type: 'FULL',
    levels: ['MASTERS', 'PHD'],
    deadline: '2026-10-15',
    views: 1876,
    applications: 112,
  },
  {
    id: '5',
    slug: 'erasmus-europe-2026',
    name_ar: 'منحة Erasmus+ الأوروبية',
    name_en: 'Erasmus+ Europe 2026',
    country: 'أوروبا',
    country_flag: '🇪🇺',
    funding_type: 'PARTIAL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    deadline: '2026-02-28',
    views: 956,
    applications: 67,
  },
  {
    id: '6',
    slug: 'australia-awards-2026',
    name_ar: 'منحة Australia Awards',
    name_en: 'Australia Awards 2026',
    country: 'أستراليا',
    country_flag: '🇦🇺',
    funding_type: 'FULL',
    levels: ['MASTERS', 'PHD'],
    deadline: '2026-07-30',
    views: 1123,
    applications: 78,
  },
  {
    id: '7',
    slug: 'csc-china-2026',
    name_ar: 'منحة الحكومة الصينية CSC',
    name_en: 'CSC China Scholarship 2026',
    country: 'الصين',
    country_flag: '🇨🇳',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    deadline: '2026-06-01',
    views: 987,
    applications: 134,
  },
  {
    id: '8',
    slug: 'japan-mext-2026',
    name_ar: 'منحة MEXT اليابانية',
    name_en: 'MEXT Japan Scholarship 2026',
    country: 'اليابان',
    country_flag: '🇯🇵',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    deadline: '2026-05-15',
    views: 876,
    applications: 95,
  },
]

async function getScholarships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/scholarships/`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return FALLBACK_SCHOLARSHIPS
    const data = await res.json()
    return data.length > 0 ? data : FALLBACK_SCHOLARSHIPS
  } catch {
    return FALLBACK_SCHOLARSHIPS
  }
}

export default async function ScholarshipsPage() {
  const scholarships = await getScholarships()
  return <ScholarshipsClient scholarships={scholarships} />
}