'use client'
// app/scholarships/ScholarshipsClient.tsx

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FUND_LABEL: Record<string, string> = {
  FULL: 'تمويل كامل',
  PARTIAL: 'تمويل جزئي',
  TUITION_ONLY: 'رسوم دراسية',
}

const LVL_LABEL: Record<string, string> = {
  BACHELORS: 'بكالوريوس',
  MASTERS: 'ماجستير',
  PHD: 'دكتوراه',
  POSTDOC: 'ما بعد الدكتوراه',
}

function formatDate(d?: string) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })
}

type Scholarship = {
  id: string
  slug: string
  name_ar: string
  name_en: string
  country: string
  country_flag: string
  funding_type: string
  levels: string[]
  deadline?: string
  views: number
  applications: number
}

export default function ScholarshipsClient({ 
  scholarships = []  // ← قيمة افتراضية
}: { 
  scholarships: Scholarship[] 
}) {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  // ✅ فلترة المنح
  const filtered = scholarships.filter(s =>
    s.name_ar.includes(search) ||
    s.country.includes(search) ||
    s.name_en.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar activePage="scholarships" />

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#122845 0%,#1B3A5C 60%,#1a5c42 100%)', padding: '60px 5% 40px'}}  className='mt-20'>
        <h1 style={{ fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 900, color: '#fff', marginBottom: 8 }}>
          استعرض المنح المتوفرة
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.65)', maxWidth: 560 }}>
          اختر المنحة المناسبة لك واكتشف تفاصيلها الكاملة
        </p>
      </div>

      {/* SEARCH */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 5% 0' }}>
        <input
          type="text"
          placeholder="🔍 ابحث عن منحة..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 18px',
            borderRadius: 14,
            border: '1px solid #e8eef5',
            fontSize: 14,
            fontFamily: 'Cairo, sans-serif',
            background: '#fff',
            outline: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,.04)',
          }}
        />
      </div>

      {/* GRID */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 5% 60px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#8fa3b8' }}>جاري التحميل...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📭</div>
            <div style={{ fontSize: 16, color: '#8fa3b8' }}>لا توجد منح متوفرة حالياً</div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {filtered.map((s) => (
              <Link
                key={s.id}
                href={`/scholarships/${s.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: '#fff',
                  borderRadius: 18,
                  border: '1px solid #e8eef5',
                  padding: 24,
                  transition: 'all .3s',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(27,58,92,.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 32 }}>{s.country_flag}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#1B3A5C' }}>{s.country}</div>
                      <div style={{ fontSize: 11, color: '#8fa3b8' }}>
                        {FUND_LABEL[s.funding_type] || s.funding_type}
                      </div>
                    </div>
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f2236', marginBottom: 6 }}>
                    {s.name_ar}
                  </h3>
                  <div style={{ fontSize: 12, color: '#8fa3b8', fontFamily: 'monospace', marginBottom: 12 }}>
                    {s.name_en}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {s.levels?.map(l => (
                      <span key={l} style={{
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '2px 10px',
                        borderRadius: 50,
                        background: '#f0f4f8',
                        color: '#4a6580',
                      }}>
                        {LVL_LABEL[l] || l}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid #eef2f7' }}>
                    <div style={{ fontSize: 12, color: '#8fa3b8' }}>
                      🗓️ {formatDate(s.deadline)}
                    </div>
                    <div style={{ fontSize: 12, color: '#2FA889', fontWeight: 600 }}>
                      {s.applications} تقديم
                    </div>
                  </div>

                  <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, color: '#8fa3b8' }}>
                      👁️ {s.views?.toLocaleString() || 0}
                    </span>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#fff',
                      background: '#2FA889',
                      padding: '4px 14px',
                      borderRadius: 50,
                    }}>
                      تفاصيل ←
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}