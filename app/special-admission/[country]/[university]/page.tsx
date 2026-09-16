// app/special-admission/[country]/[university]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { getCountryById, getUniversityById } from '../../data/countries'
import {
  ShieldCheck,
  ChevronLeft,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  CheckCircle,
  Award,
  FileText,
  Clock,
  Users,
  GraduationCap,
  MessageCircle,
} from 'lucide-react'

export default function UniversityPage() {
  const params = useParams()
  const countryId = params.country as string
  const universityId = params.university as string

  // ✅ جلب بيانات الدولة والجامعة
  const country = getCountryById(countryId)
  const university = getUniversityById(countryId, universityId)

  // ❌ إذا الدولة أو الجامعة غير موجودة
  if (!country || !university) {
    return (
      <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: 80 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1B3A5C' }}>
            ❌ الجامعة غير موجودة
          </h2>
          <Link href="/special-admission" style={{ color: '#2FA889', fontWeight: 700 }}>
            ← العودة للقبولات الخاصة
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />

      {/* ✅ BREADCRUMB */}
      <div style={{
        background: '#fff',
        padding: '14px 5%',
        borderBottom: '1px solid #e8eef5',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: '0.85rem',
        color: '#8fa3b8',
        flexWrap: 'wrap',
      }} className='mt-24'>
        <Link href="/" style={{ color: '#8fa3b8', textDecoration: 'none' }}>الرئيسية</Link>
        <span>›</span>
        <Link href="/special-admission" style={{ color: '#8fa3b8', textDecoration: 'none' }}>القبولات الخاصة</Link>
        <span>›</span>
        <Link href={`/special-admission/${country.id}`} style={{ color: '#8fa3b8', textDecoration: 'none' }}>
          {country.name_ar}
        </Link>
        <span>›</span>
        <span style={{ color: '#1B3A5C', fontWeight: 700 }}>
          {university.name_ar}
        </span>
      </div>

      {/* ✅ HERO - جامعة */}
      <div style={{
        background: 'linear-gradient(135deg, #1b5e20 0%, #2E7D32 50%, #4CAF50 100%)',
        padding: 'clamp(40px, 5vw, 60px) 5%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,.08) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 24,
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: 'clamp(80px, 10vw, 120px)',
              height: 'clamp(80px, 10vw, 120px)',
              borderRadius: 18,
              overflow: 'hidden',
              flexShrink: 0,
              border: '3px solid rgba(255,255,255,.2)',
            }}>
              <img
                src={university.image_url}
                alt={university.name_ar}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,.15)',
                border: '1px solid rgba(255,255,255,.2)',
                color: '#a5d6a7',
                padding: '4px 14px',
                borderRadius: 50,
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: 10,
              }}>
                <ShieldCheck size={14} />
                قبول مضمون 100%
              </div>
              <h1 style={{
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.3,
                marginBottom: 4,
              }}>
                {university.name_ar}
              </h1>
              <div style={{
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                color: 'rgba(255,255,255,.7)',
                marginBottom: 8,
              }}>
                {university.name_en}
              </div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,.8)',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPin size={16} /> {university.city}, {country.name_ar}
                </span>
                {university.ranking && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Award size={16} /> {university.ranking}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 60px) 5%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 'clamp(24px, 3vw, 40px)',
        }}>

          {/* ✅ MAIN CONTENT */}
          <div>
            {/* ✅ الوصف */}
            <div style={{
              background: '#fff',
              borderRadius: 18,
              padding: 'clamp(20px, 2.5vw, 28px)',
              border: '1px solid #e8eef5',
              marginBottom: 24,
            }}>
              <h2 style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                fontWeight: 900,
                color: '#1B3A5C',
                marginBottom: 12,
              }}>
                📖 عن الجامعة
              </h2>
              <p style={{
                fontSize: 'clamp(14px, 1vw, 15px)',
                color: '#4a6580',
                lineHeight: 2,
              }}>
                {university.description_ar}
              </p>
            </div>

            {/* ✅ البرامج الدراسية */}
            <div style={{
              background: '#fff',
              borderRadius: 18,
              padding: 'clamp(20px, 2.5vw, 28px)',
              border: '1px solid #e8eef5',
              marginBottom: 24,
            }}>
              <h2 style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                fontWeight: 900,
                color: '#1B3A5C',
                marginBottom: 12,
              }}>
                🎓 البرامج الدراسية
              </h2>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
              }}>
                {university.programs.map((p, i) => (
                  <span key={i} style={{
                    padding: '6px 16px',
                    borderRadius: 50,
                    background: '#e6f7f3',
                    color: '#0a5540',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}>
                    {p}
                  </span>
                ))}
              </div>
              <div style={{
                marginTop: 16,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#8fa3b8', fontWeight: 600 }}>
                    المدة الدراسية
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1B3A5C' }}>
                    {university.duration}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#8fa3b8', fontWeight: 600 }}>
                    الرسوم الدراسية
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1B3A5C' }}>
                    {university.tuition_fee}
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ المزايا */}
            {university.benefits_ar && university.benefits_ar.length > 0 && (
              <div style={{
                background: '#fff',
                borderRadius: 18,
                padding: 'clamp(20px, 2.5vw, 28px)',
                border: '1px solid #e8eef5',
                marginBottom: 24,
              }}>
                <h2 style={{
                  fontSize: 'clamp(18px, 1.5vw, 22px)',
                  fontWeight: 900,
                  color: '#1B3A5C',
                  marginBottom: 12,
                }}>
                  ✨ المزايا
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {university.benefits_ar.map((b, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '8px 0',
                      fontSize: '0.95rem',
                      color: '#4a6580',
                      borderBottom: i < university.benefits_ar.length - 1 ? '1px solid #f0f4f8' : 'none',
                    }}>
                      <CheckCircle size={18} color="#2FA889" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ✅ المستندات المطلوبة */}
            <div style={{
              background: '#fff',
              borderRadius: 18,
              padding: 'clamp(20px, 2.5vw, 28px)',
              border: '1px solid #e8eef5',
              marginBottom: 24,
            }}>
              <h2 style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                fontWeight: 900,
                color: '#1B3A5C',
                marginBottom: 12,
              }}>
                📂 المستندات المطلوبة
              </h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {university.documents.map((d, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 0',
                    fontSize: '0.9rem',
                    color: '#4a6580',
                    borderBottom: i < university.documents.length - 1 ? '1px solid #f0f4f8' : 'none',
                  }}>
                    <FileText size={18} color="#2FA889" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ شروط القبول */}
            <div style={{
              background: '#fff',
              borderRadius: 18,
              padding: 'clamp(20px, 2.5vw, 28px)',
              border: '1px solid #e8eef5',
            }}>
              <h2 style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                fontWeight: 900,
                color: '#1B3A5C',
                marginBottom: 12,
              }}>
                ✅ شروط القبول
              </h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {university.requirements.map((r, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 0',
                    fontSize: '0.9rem',
                    color: '#4a6580',
                    borderBottom: i < university.requirements.length - 1 ? '1px solid #f0f4f8' : 'none',
                  }}>
                    <CheckCircle size={18} color="#2FA889" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ SIDEBAR */}
          <div>
            {/* ✅ CTA CARD */}
            <div style={{
              background: 'linear-gradient(145deg, #1b5e20, #2E7D32)',
              borderRadius: 18,
              padding: 24,
              marginBottom: 18,
              border: '1px solid rgba(255,255,255,.1)',
              position: 'sticky',
              top: 80,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 12,
              }}>
                <ShieldCheck size={28} color="#a5d6a7" />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: '#fff' }}>
                    قبول مضمون 100%
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.7)' }}>
                    أو استرداد كامل المبلغ
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,.08)',
                borderRadius: 12,
                padding: '14px 16px',
                marginBottom: 16,
              }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,.6)' }}>
                  رسوم التقديم
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>
                  {university.application_fee || 'يحدد لاحقاً'}
                </div>
                {university.deadline && (
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,.5)', marginTop: 4 }}>
                    🗓️ آخر موعد: {new Date(university.deadline).toLocaleDateString('ar-EG')}
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/249123456789?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن القبول الخاص في ${university.name_ar}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  width: '100%',
                  padding: '12px',
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontFamily: 'Cairo, sans-serif',
                  transition: 'all .3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <MessageCircle size={18} />
                استفسر الآن
              </a>

              <div style={{
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,.4)',
                textAlign: 'center',
                marginTop: 10,
              }}>
                🔒 بياناتك آمنة وسنرد خلال 24 ساعة
              </div>
            </div>

            {/* ✅ BACK BUTTON */}
            <Link
              href={`/special-admission/${country.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                padding: '10px',
                background: '#fff',
                borderRadius: 12,
                border: '1px solid #e8eef5',
                color: '#4a6580',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                transition: 'all .3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2FA889'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e8eef5'
              }}
            >
              <ChevronLeft size={18} />
              العودة لجامعات {country.name_ar}
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}