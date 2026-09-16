'use client'
// app/components/ScholarshipsSection.tsx

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Scholarship = {
  id: string
  slug: string
  name_ar: string
  country: string
  country_flag: string
  funding_type: 'FULL' | 'PARTIAL' | 'TUITION_ONLY'
  levels: string[]
  deadline?: string
  image_url?: string  // ← حقل الصورة
}

const GRAD = ['g1', 'g2', 'g3', 'g4', 'g5']

const FALLBACK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'fallback-1',
    slug: 'daad-germany',
    country_flag: '🇩🇪',
    country: 'ألمانيا',
    name_ar: 'منحة DAAD للتبادل الأكاديمي الألماني',
    funding_type: 'FULL',
    levels: ['MASTERS', 'PHD'],
    deadline: '2026-03-31',
    image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&h=200&fit=crop',
  },
  {
    id: 'fallback-2',
    slug: 'chevening-uk',
    country_flag: '🇬🇧',
    country: 'المملكة المتحدة',
    name_ar: 'منحة Chevening الحكومية البريطانية',
    funding_type: 'FULL',
    levels: ['MASTERS'],
    deadline: '2026-04-15',
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop',
  },
  {
    id: 'fallback-3',
    slug: 'turkey-burslari',
    country_flag: '🇹🇷',
    country: 'تركيا',
    name_ar: 'منحة تركيا بورصلاري الحكومية',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS'],
    deadline: '2026-05-20',
    image_url: 'https://images.unsplash.com/photo-1527838832700-5052e1d6e7c8?w=400&h=200&fit=crop',
  },
  {
    id: 'fallback-4',
    slug: 'csc-china',
    country_flag: '🇨🇳',
    country: 'الصين',
    name_ar: 'منحة الحكومة الصينية CSC',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    deadline: '2026-06-01',
    image_url: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=200&fit=crop',
  },
  {
    id: 'fallback-5',
    slug: 'australia-awards',
    country_flag: '🇦🇺',
    country: 'أستراليا',
    name_ar: 'منحة Australia Awards الدراسية',
    funding_type: 'FULL',
    levels: ['MASTERS', 'PHD'],
    deadline: '2026-07-30',
    image_url: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=200&fit=crop',
  },
]

export default function ScholarshipsSection() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchScholarships() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scholarships/?limit=5`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setScholarships(data.length > 0 ? data : FALLBACK_SCHOLARSHIPS)
      } catch (error) {
        console.error('Error fetching scholarships:', error)
        setScholarships(FALLBACK_SCHOLARSHIPS)
      } finally {
        setLoading(false)
      }
    }

    fetchScholarships()
  }, [])

  const shown = scholarships.slice(0, 5)

  function formatDate(d?: string) {
    if (!d) return '—'
    return new Date(d).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long' })
  }

  function getLevelLabel(level: string) {
    const map: Record<string, string> = {
      BACHELORS: 'بكالوريوس',
      MASTERS: 'ماجستير',
      PHD: 'دكتوراه',
      POSTDOC: 'ما بعد الدكتوراه',
    }
    return map[level] || level
  }

  function getFundingLabel(type: string) {
    const map: Record<string, string> = {
      FULL: 'تمويل كامل',
      PARTIAL: 'تمويل جزئي',
      TUITION_ONLY: 'رسوم دراسية',
    }
    return map[type] || type
  }

  if (loading) {
    return (
      <section className="scholarships" id="scholarships">
        <div className="scholarships-header-row">
          <div className="section-header">
            <span className="section-eyebrow">الفرص المتاحة</span>
            <h2>أبرز المنح المتاحة الآن</h2>
            <p>جاري تحميل المنح...</p>
          </div>
        </div>
        <div className="sch-grid">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="sch-card" style={{ opacity: 0.5 }}>
              <div className="sch-img" style={{ height: 160, background: '#e8eef5' }} />
              <div className="sch-body">
                <div style={{ height: 20, background: '#e8eef5', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 14, width: '60%', background: '#e8eef5', borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="scholarships" id="scholarships">
      <div className="scholarships-header-row">
        <div className="section-header">
          <span className="section-eyebrow">الفرص المتاحة</span>
          <h2>أبرز المنح المتاحة الآن</h2>
          <p>
            استعرض المنح الممولة بالكامل والجزئية حول العالم، يتم تحديثها بشكل
            مستمر من فريقنا.
          </p>
        </div>
        <Link href="/scholarships" className="btn-outline">
          عرض كل المنح ←
        </Link>
      </div>

      <div className="sch-grid">
        {shown.map((s, i) => (
          <Link
            key={s.id}
            href={`/scholarships/${s.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="sch-card">
              <div className={`sch-img ${GRAD[i % GRAD.length]}`} style={{ position: 'relative', overflow: 'hidden' }}>
                {/* ✅ الصورة */}
                {s.image_url ? (
                  <img
                    src={s.image_url}
                    alt={s.name_ar}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                ) : (
                  <span style={{ fontSize: '2.4rem', position: 'relative', zIndex: 1 }}>
                    {s.country_flag}
                  </span>
                )}
                <div className="sch-badge open" style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
                  مفتوح
                </div>
              </div>
              <div className="sch-body">
                <div className="sch-country">{s.country}</div>
                <div className="sch-name">{s.name_ar}</div>
                <div className="sch-tags">
                  <span className="sch-tag">{getFundingLabel(s.funding_type)}</span>
                  {s.levels?.slice(0, 2).map((l) => (
                    <span key={l} className="sch-tag">
                      {getLevelLabel(l)}
                    </span>
                  ))}
                </div>
                <div className="sch-foot">
                  <span className="sch-dead">
                    {s.deadline ? `الموعد: ${formatDate(s.deadline)}` : '—'}
                  </span>
                  <span className="sch-apply">قدّم الآن</span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* ✅ بطاقة "استعرض كل المنح" */}
        <Link
          href="/scholarships"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="sch-card"
            style={{
              border: '2px dashed var(--teal)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 260,
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: '2.8rem', marginBottom: 14 }}>🔍</div>
            <div
              style={{
                fontWeight: 800,
                color: 'var(--navy)',
                fontSize: '1.05rem',
                marginBottom: 8,
                fontFamily: 'Cairo,sans-serif',
              }}
            >
              استعرض كل المنح
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--gray-400)' }}>
              أكثر من 300 فرصة متاحة
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}