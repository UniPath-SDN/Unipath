// app/study-in-egypt/page.tsx
'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { EGYPT_DATA } from '/data/egypt'
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  ShieldCheck, 
  ChevronLeft,
  Building2,
  Landmark,
  School,
  Globe,
  ScrollText,
  FileText,
  Passport,
  Scale,
} from 'lucide-react'

export default function StudyInEgyptPage() {
  const data = EGYPT_DATA

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />

      {/* ✅ HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1B3A5C 50%, #1a5c42 100%)',
        padding: 'clamp(60px, 8vw, 100px) 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }} className='mt-16'>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <span style={{ fontSize: 64, display: 'block', marginBottom: 12 }}>{data.flag}</span>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            {data.overview.title}
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 1.2vw, 18px)',
            color: 'rgba(255,255,255,.7)',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 2,
          }}>
            {data.overview.description}
          </p>
        </div>
      </div>

      {/* ✅ STATS */}
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '30px 5%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 16,
        marginTop: -24,
      }}>
        {[
          { value: data.overview.stats.universities, label: 'جامعة', icon: <Building2 size={24} color="#2FA889" /> },
          { value: data.overview.stats.students, label: 'طالب سوداني', icon: <Users size={24} color="#2FA889" /> },
          { value: data.overview.stats.programs, label: 'برنامج دراسي', icon: <BookOpen size={24} color="#2FA889" /> },
          { value: data.overview.stats.discount, label: 'خصم للطلاب', icon: <ShieldCheck size={24} color="#2FA889" /> },
        ].map((stat, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: 14,
            padding: '16px 20px',
            textAlign: 'center',
            border: '1px solid #e8eef5',
            boxShadow: '0 4px 20px rgba(0,0,0,.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 4 }}>
              {stat.icon}
              <div style={{ fontSize: 'clamp(22px, 2vw, 28px)', fontWeight: 900, color: '#1B3A5C' }}>
                {stat.value}
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#8fa3b8', fontWeight: 600 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ SECTIONS GRID */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(30px, 4vw, 50px) 5%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {[
            { icon: <Landmark size={28} color="#1B3A5C" />, title: 'أنواع المؤسسات', desc: 'جامعات حكومية، خاصة، أهلية، أجنبية', href: '/study-in-egypt/universities' },
            { icon: <Award size={28} color="#2FA889" />, title: 'المنح والتخفيضات', desc: 'خصم 70%، منح كاملة، بروتوكولات خاصة', href: '/study-in-egypt/scholarships' },
            { icon: <GraduationCap size={28} color="#1B3A5C" />, title: 'نظام الساعات المعتمدة', desc: 'دليل GPA، التقديرات، النجاح', href: '/study-in-egypt/academics/credit-hours' },
            { icon: <ScrollText size={28} color="#2FA889" />, title: 'الدراسات العليا', desc: 'ماجستير، دكتوراه، متطلبات', href: '/study-in-egypt/academics/postgraduate' },
            { icon: <FileText size={28} color="#1B3A5C" />, title: 'معادلة الشهادات', desc: 'إجراءات المجلس الأعلى للجامعات', href: '/study-in-egypt/academics/equivalence' },
            { icon: <Passport size={28} color="#2FA889" />, title: 'التأشيرات والإقامة', desc: 'دليل كامل لإجراءات الدخول والإقامة', href: '/study-in-egypt/visa' },
            { icon: <Scale size={28} color="#1B3A5C" />, title: 'حقوق وواجبات الطالب', desc: 'ما لك وما عليك في رحلتك الدراسية', href: '/study-in-egypt/rights' },
            { icon: <School size={28} color="#2FA889" />, title: 'دليل الامتياز الطبي', desc: 'فترة التدريب الإكلينيكي للكليات الطبية', href: '/study-in-egypt/academics/internship' },
          ].map((item) => (
            <Link key={item.title} href={item.href} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff',
                borderRadius: 16,
                padding: '24px 20px',
                border: '1px solid #e8eef5',
                transition: 'all .3s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,58,92,.1)'
                e.currentTarget.style.borderColor = '#2FA889'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e8eef5'
              }}
              >
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: '#e6f7f3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 12,
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: '#1B3A5C',
                  marginBottom: 4,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#8fa3b8',
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {item.desc}
                </p>
                <div style={{
                  marginTop: 12,
                  color: '#2FA889',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}>
                  اقرأ المزيد <ChevronLeft size={16} />
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