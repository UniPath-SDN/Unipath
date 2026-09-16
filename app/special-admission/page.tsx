// app/special-admission/page.tsx
'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { COUNTRIES_DATA } from './data/countries'
import { ShieldCheck, ChevronLeft } from 'lucide-react'

export default function SpecialAdmissionPage() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #1b5e20 0%, #2E7D32 50%, #4CAF50 100%)',
        padding: 'clamp(50px, 6vw, 80px) 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }} className='mt-16'>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,.15)',
            border: '1px solid rgba(255,255,255,.3)',
            color: '#fff',
            padding: '6px 20px',
            borderRadius: 50,
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: 20,
          }}>
            🎯 قبول مضمون 100%
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.3,
            marginBottom: 16,
          }}>
            القبولات <span style={{ color: '#a5d6a7' }}>الخاصة</span>
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.1vw, 17px)',
            color: 'rgba(255,255,255,.85)',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 2,
          }}>
            اختر وجهتك الدراسية واحصل على قبول مضمون في أفضل الجامعات.
            نضمن لك القبول أو استرداد كامل المبلغ.
          </p>
        </div>
      </div>

      {/* COUNTRIES GRID */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 60px) 5%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {COUNTRIES_DATA.map((country) => (
            <Link
              key={country.id}
              href={`/special-admission/${country.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#fff',
                borderRadius: 18,
                border: '1px solid #e8eef5',
                overflow: 'hidden',
                transition: 'all .3s',
                cursor: 'pointer',
                height: '100%',
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
                <div style={{
                  height: 160,
                  background: `url(${country.image_url}) center/cover`,
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px 16px',
                    background: 'linear-gradient(transparent, rgba(0,0,0,.7))',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                    <span style={{ fontSize: 32 }}>{country.flag}</span>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>
                        {country.name_ar}
                      </div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
                        {country.universities.length} جامعة
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '16px 20px 20px' }}>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#4a6580',
                    lineHeight: 1.8,
                    marginBottom: 14,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {country.description_ar}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: '#2FA889',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}>
                    <ShieldCheck size={16} />
                    <span>قبول مضمون</span>
                    <ChevronLeft size={16} style={{ marginRight: 'auto' }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}