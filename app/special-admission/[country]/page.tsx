// app/special-admission/[country]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { COUNTRIES_DATA, getCountryById } from '../data/countries'
import { ShieldCheck, ChevronLeft, MapPin, Calendar, DollarSign, BookOpen, CheckCircle } from 'lucide-react'

export default function CountryPage() {
  const params = useParams()
  const countryId = params.country as string
  
  // ✅ جلب بيانات الدولة
  const country = getCountryById(countryId)

  // ❌ إذا الدولة غير موجودة
  if (!country) {
    return (
      <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: 80 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1B3A5C' }}>
            ❌ الدولة غير موجودة
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

      {/* ✅ HERO - بيانات الدولة */}
      <div style={{
        background: 'linear-gradient(135deg, #1b5e20 0%, #2E7D32 50%, #4CAF50 100%)',
        padding: 'clamp(50px, 6vw, 80px) 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }} className='mt-16'>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            fontSize: 64,
            marginBottom: 12,
          }}>
            {country.flag}
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.3,
            marginBottom: 12,
          }}>
            {country.name_ar}
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 1.2vw, 18px)',
            color: 'rgba(255,255,255,.85)',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 2,
          }}>
            {country.description_ar}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 30,
            marginTop: 20,
            flexWrap: 'wrap',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#a5d6a7' }}>
                {country.universities.length}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
                جامعات متاحة
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#a5d6a7' }}>
                ✅
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
                قبول مضمون
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 60px) 5%' }}>
        
        {/* ✅ متطلبات الدولة */}
        <div style={{
          background: '#fff',
          borderRadius: 18,
          padding: 'clamp(24px, 3vw, 36px)',
          border: '1px solid #e8eef5',
          marginBottom: 32,
        }}>
          <h2 style={{
            fontSize: 'clamp(20px, 1.8vw, 24px)',
            fontWeight: 900,
            color: '#1B3A5C',
            marginBottom: 12,
          }}>
            📋 متطلبات القبول في {country.name_ar}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 800, color: '#1B3A5C', marginBottom: 8 }}>
                المستندات المطلوبة
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {country.requirements.map((req, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 0',
                    fontSize: '0.9rem',
                    color: '#4a6580',
                    borderBottom: '1px solid #f0f4f8',
                  }}>
                    <CheckCircle size={16} color="#2FA889" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 800, color: '#1B3A5C', marginBottom: 8 }}>
                معلومات إضافية
              </h4>
              <div style={{ fontSize: '0.9rem', color: '#4a6580', lineHeight: 2 }}>
                <div><strong>💰 تكاليف المعيشة:</strong> {country.cost_of_living}</div>
                <div><strong>🪪 معلومات التأشيرة:</strong> {country.visa_info}</div>
                <div><strong>💱 العملة:</strong> {country.currency}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ قائمة الجامعات */}
        <h2 style={{
          fontSize: 'clamp(20px, 1.8vw, 24px)',
          fontWeight: 900,
          color: '#1B3A5C',
          marginBottom: 20,
        }}>
          🎓 جامعات {country.name_ar}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {country.universities.map((uni) => (
            <Link
              key={uni.id}
              href={`/special-admission/${country.id}/${uni.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#fff',
                borderRadius: 16,
                border: '1px solid #e8eef5',
                overflow: 'hidden',
                transition: 'all .3s',
                cursor: 'pointer',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,58,92,.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  height: 140,
                  background: `url(${uni.image_url}) center/cover`,
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: 'rgba(76, 175, 80, 0.9)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: 50,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}>
                    ✅ قبول مضمون
                  </div>
                </div>
                <div style={{ padding: '16px 18px 18px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.8rem',
                    color: '#8fa3b8',
                    marginBottom: 4,
                  }}>
                    <MapPin size={14} />
                    {uni.city}
                  </div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#1B3A5C',
                    marginBottom: 4,
                  }}>
                    {uni.name_ar}
                  </h3>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#8fa3b8',
                    marginBottom: 8,
                  }}>
                    {uni.name_en}
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 12,
                  }}>
                    {uni.programs.slice(0, 3).map((p, i) => (
                      <span key={i} style={{
                        fontSize: '0.7rem',
                        padding: '2px 10px',
                        borderRadius: 50,
                        background: '#f0f4f8',
                        color: '#4a6580',
                      }}>
                        {p}
                      </span>
                    ))}
                    {uni.programs.length > 3 && (
                      <span style={{
                        fontSize: '0.7rem',
                        padding: '2px 10px',
                        borderRadius: 50,
                        background: '#f0f4f8',
                        color: '#8fa3b8',
                      }}>
                        +{uni.programs.length - 3}
                      </span>
                    )}
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 12,
                    borderTop: '1px solid #f0f4f8',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: '#8fa3b8' }}>الرسوم الدراسية</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1B3A5C' }}>
                        {uni.tuition_fee}
                      </div>
                    </div>
                    <div style={{
                      background: '#2FA889',
                      color: '#fff',
                      padding: '4px 14px',
                      borderRadius: 50,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}>
                      تفاصيل ←
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ CTA */}
        <div style={{
          marginTop: 40,
          background: 'linear-gradient(135deg, #1b5e20, #4CAF50)',
          borderRadius: 18,
          padding: 'clamp(24px, 3vw, 36px)',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontSize: 'clamp(18px, 1.8vw, 22px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: 8,
          }}>
            🎯 جاهز تبدأ رحلتك الدراسية في {country.name_ar}؟
          </h3>
          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,.8)',
            marginBottom: 16,
          }}>
            احصل على قبول مضمون واستشارة مجانية
          </p>
          <Link
            href={`https://wa.me/201500276855?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن القبولات الخاصة في ${country.name_ar}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#25D366',
              color: '#fff',
              padding: '12px 32px',
              borderRadius: 50,
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
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
            تواصل الآن
          </Link>
        </div>

        {/* ✅ BACK BUTTON */}
        <div style={{ marginTop: 24 }}>
          <Link
            href="/special-admission"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#4a6580',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.9rem',
            }}
          >
            <ChevronLeft size={18} />
            العودة لجميع الدول
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}