'use client'
// app/scholarships/[slug]/ScholarshipDetailClient.tsx

import { useState } from 'react'
import Link from 'next/link'
import LogoIcon from '@/app/components/LogoIcon'

type Condition = {
  id: string
  order: number
  title_ar: string
  desc_ar?: string
}
type Document = {
  id: string
  order: number
  name_ar: string
  note_ar?: string
  icon: string
}
type TimelineEvent = {
  id: string
  order: number
  date_label: string
  title_ar: string
  desc_ar?: string
  is_past: boolean
}
type Scholarship = {
  id: string
  slug: string
  name_ar: string
  name_en: string
  country: string
  country_flag: string
  funding_type: 'FULL' | 'PARTIAL' | 'TUITION_ONLY'
  levels: string[]
  status: string
  description_ar: string
  benefits_ar: string[]
  conditions: Condition[]
  documents: Document[]
  timeline: TimelineEvent[]
  official_url?: string
  deadline?: string
  views: number
  applications: number
  image_url?: string // ✅ حقل الصورة
}

const FUND_LABEL: Record<string, string> = {
  FULL: 'تمويل كامل', PARTIAL: 'تمويل جزئي', TUITION_ONLY: 'رسوم دراسية',
}
const LVL_LABEL: Record<string, string> = {
  BACHELORS: 'بكالوريوس', MASTERS: 'ماجستير', PHD: 'دكتوراه', POSTDOC: 'ما بعد الدكتوراه',
}

function daysLeft(d?: string) {
  if (!d) return null
  const diff = new Date(d).getTime() - Date.now()
  return diff > 0 ? Math.ceil(diff / 86400000) : 0
}
function formatDate(d?: string) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #dde5f0', overflow: 'hidden', marginBottom: 18 }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid #eef2f7', fontSize: 14, fontWeight: 900, color: '#1B3A5C' }}>
        {title}
      </div>
      <div style={{ padding: 20 }}>{children}</div>
    </div>
  )
}

function SLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 800, color: '#8fa3b8', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10, marginTop: 18 }}>
      {children}
    </div>
  )
}

function btnStyle(bg: string): React.CSSProperties {
  return {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, width: '100%', padding: 12, borderRadius: 11,
    fontFamily: 'Cairo, sans-serif', fontSize: 13, fontWeight: 800,
    cursor: 'pointer', border: 'none', textDecoration: 'none',
    background: bg, color: '#fff', marginBottom: 9,
  }
}
function inpStyle(err: boolean): React.CSSProperties {
  return {
    width: '100%', padding: '9px 12px',
    border: `1.5px solid ${err ? '#e05555' : '#dde5f0'}`,
    borderRadius: 10, fontFamily: 'Cairo, sans-serif', fontSize: 13,
    color: '#0f2236', background: err ? '#fff5f5' : '#f4f7fb',
    outline: 'none', direction: 'rtl',
  }
}
function lblStyle(): React.CSSProperties {
  return { fontSize: 11, fontWeight: 800, color: '#1B3A5C', display: 'block', marginBottom: 5 }
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ScholarshipDetailClient({
  scholarship: s
}: {
  scholarship: Scholarship
}) {
  const [formOpen, setFormOpen] = useState(false)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<string[]>([])
  const [form, setForm] = useState({
    name: '', nationality: '', whatsapp: '', email: '',
    level: '', major: '', langCert: '', notes: '',
  })

  const days = daysLeft(s.deadline)
  const waText = encodeURIComponent(`السلام عليكم، أريد الاستفسار عن ${s.name_ar}`)
  const waLink = `https://wa.me/249123456789?text=${waText}`

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const required = ['name', 'nationality', 'whatsapp', 'email', 'level'] as const
    const missing = required.filter(k => !form[k])
    if (missing.length) { setErrors(missing); return }
    setErrors([])
    setFormState('loading')
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormState('success')
      const msg = encodeURIComponent(
        `📋 طلب جديد — ${s.name_ar}\n` +
        `الاسم: ${form.name}\nالجنسية: ${form.nationality}\n` +
        `الواتساب: ${form.whatsapp}\nالبريد: ${form.email}\n` +
        `المرحلة: ${form.level}` +
        (form.major ? `\nالتخصص: ${form.major}` : '') +
        (form.langCert ? `\nشهادة اللغة: ${form.langCert}` : '') +
        (form.notes ? `\nملاحظات: ${form.notes}` : '')
      )
      setTimeout(() => window.open(`https://wa.me/249123456789?text=${msg}`, '_blank'), 1400)
    } catch {
      setFormState('error')
    }
  }

  const inp = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))

  const isErr = (k: string) => errors.includes(k)

  const safeLevels = s.levels?.filter(l => LVL_LABEL[l]) || []
  const safeViews = s.views ?? 0
  const safeApplications = s.applications ?? 0

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>

      {/* ✅ RESPONSIVE STYLES */}
      <style>{`
        /* Navbar */
        .detail-nav {
          background: white;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #e8eef5;
          flex-wrap: wrap;
        }
        .detail-nav-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .detail-nav-links a {
          color: #4a6580;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
        }

        /* Breadcrumb */
        .detail-breadcrumb {
          background: #fff;
          border-bottom: 1px solid #dde5f0;
          padding: 11px 5%;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #8fa3b8;
          flex-wrap: wrap;
        }
        .detail-breadcrumb a {
          color: #8fa3b8;
          text-decoration: none;
        }
        .detail-breadcrumb .current {
          color: #0f2236;
          font-weight: 700;
        }

        /* Hero */
        .detail-hero {
          background: linear-gradient(135deg,#122845 0%,#1B3A5C 60%,#1a5c42 100%);
          padding: 44px 5% 0;
          overflow: hidden;
        }
        .detail-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .detail-hero-top {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
        }
        .detail-hero-flag {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          flex-shrink: 0;
        }
        .detail-hero-image {
          width: clamp(80px, 10vw, 120px);
          height: clamp(80px, 10vw, 120px);
          border-radius: 18px;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(255,255,255,.15);
          box-shadow: 0 8px 32px rgba(0,0,0,.2);
        }
        .detail-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .detail-hero-content { flex: 1; }
        .detail-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .detail-hero-tags span {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
        }

        /* Stats Bar */
        .detail-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,.08);
          margin: 0 -5%;
          padding: 0 5%;
        }
        .detail-stats-item {
          padding: 16px 0;
          text-align: center;
          border-left: 1px solid rgba(255,255,255,.07);
        }
        .detail-stats-item:last-child { border-left: none; }
        .detail-stats-num {
          font-size: 18px;
          font-weight: 900;
          color: #fff;
        }
        .detail-stats-label {
          font-size: 10px;
          color: rgba(255,255,255,.35);
          margin-top: 3px;
          font-weight: 600;
        }

        /* Main Grid */
        .detail-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px 5%;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 22px;
          align-items: start;
        }

        /* Sidebar CTA */
        .detail-cta {
          background: linear-gradient(145deg,#122845,#2a4f78);
          border-radius: 18px;
          padding: 22px;
          margin-bottom: 18px;
          border: 1px solid rgba(255,255,255,.06);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .detail-grid { grid-template-columns: 1fr 300px; gap: 18px; }
          .detail-hero-image {
            width: clamp(70px, 8vw, 90px);
            height: clamp(70px, 8vw, 90px);
          }
        }

        @media (max-width: 768px) {
          .detail-nav { height: auto; padding: 10px 5%; gap: 10px; }
          .detail-nav-links { gap: 12px; width: 100%; justify-content: center; }
          .detail-nav-links a { font-size: 12px; }
          
          .detail-hero-top { flex-direction: column; align-items: center; text-align: center; }
          .detail-hero-flag { width: 60px; height: 60px; font-size: 30px; }
          .detail-hero-image {
            width: clamp(60px, 8vw, 80px);
            height: clamp(60px, 8vw, 80px);
          }
          .detail-hero-content { text-align: center; }
          .detail-hero-tags { justify-content: center; }
          
          .detail-stats { grid-template-columns: repeat(2, 1fr); }
          .detail-stats-item:nth-child(2) { border-left: none; }
          .detail-stats-item:nth-child(3) { border-top: 1px solid rgba(255,255,255,.08); }
          .detail-stats-item:nth-child(4) { border-top: 1px solid rgba(255,255,255,.08); border-left: none; }
          
          .detail-grid { grid-template-columns: 1fr; padding: 20px 5%; }
        }

        @media (max-width: 480px) {
          .detail-hero { padding: 30px 5% 0; }
          .detail-hero-flag { width: 48px; height: 48px; font-size: 24px; }
          .detail-hero-image {
            width: 56px;
            height: 56px;
            border-radius: 14px;
          }
          .detail-hero-content h1 { font-size: 18px !important; }
          .detail-hero-tags span { font-size: 10px; padding: 3px 10px; }
          .detail-stats-num { font-size: 15px; }
          .detail-stats-label { font-size: 9px; }
          .detail-breadcrumb { font-size: 11px; padding: 8px 5%; }
          .detail-cta { padding: 16px; }
          .detail-grid { padding: 16px 5%; }
        }
      `}</style>

      {/* NAV */}
      <nav className="detail-nav">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <LogoIcon width={50} height={50} />
        </Link>
        <div className="detail-nav-links">
          {[['المنح', '/scholarships'], ['خدماتنا', '/services'], ['الأسئلة الشائعة', '/faq'], ['تواصل', '/contact']].map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div className="detail-breadcrumb">
        <Link href="/">الرئيسية</Link>
        <span>›</span>
        <Link href="/scholarships">المنح الدراسية</Link>
        <span>›</span>
        <span className="current">{s.name_ar}</span>
      </div>

      {/* HERO */}
      <div className="detail-hero">
        <div className="detail-hero-inner">
          <div className="detail-hero-top">
            
            {/* ✅ صورة المنحة (إذا وجدت) أو العلم */}
            {s.image_url ? (
              <div className="detail-hero-image">
                <img 
                  src={s.image_url} 
                  alt={s.name_ar}
                />
              </div>
            ) : (
              <div className="detail-hero-flag">{s.country_flag}</div>
            )}
            
            <div className="detail-hero-content">
              <div style={{ fontSize: 11, fontWeight: 800, color: '#3cc4a0', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                {s.country} · {FUND_LABEL[s.funding_type]} · {safeLevels.map(l => LVL_LABEL[l]).join(' و') || 'غير محدد'}
              </div>
              <h1 style={{ fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 900, color: '#fff', lineHeight: 1.35, marginBottom: 6 }}>
                {s.name_ar}
              </h1>
              <div style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', color: 'rgba(255,255,255,.4)', fontFamily: 'monospace', marginBottom: 14 }}>
                {s.name_en}
              </div>
              <div className="detail-hero-tags">
                {days !== null && days > 0 && (
                  <span style={{ background: 'rgba(39,174,96,.2)', color: '#4de889' }}>✅ مفتوحة الآن</span>
                )}
                {days === 0 && (
                  <span style={{ background: 'rgba(224,85,85,.2)', color: '#f87272' }}>🔴 أغلق التقديم</span>
                )}
                <span style={{ background: 'rgba(47,168,137,.2)', color: '#3cc4a0' }}>
                  {FUND_LABEL[s.funding_type]}
                </span>
                {safeLevels.map(l => (
                  <span key={l} style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.75)' }}>
                    {LVL_LABEL[l]}
                  </span>
                ))}
                {days !== null && days > 0 && days <= 90 && (
                  <span style={{ background: 'rgba(244,160,28,.18)', color: '#ffc84a' }}>
                    ⏳ ينتهي بعد {days} يوم
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="detail-stats">
            {[
              [safeViews.toLocaleString(), 'مشاهدة'],
              [safeApplications, 'تقديم عبر UniPath'],
              [days != null && days > 0 ? `${days} يوم` : '—', 'متبقي للتقديم'],
              [formatDate(s.deadline), 'آخر موعد'],
            ].map(([val, lbl]) => (
              <div key={String(lbl)} className="detail-stats-item">
                <div className="detail-stats-num">{val}</div>
                <div className="detail-stats-label">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="detail-grid">
        {/* CONTENT */}
        <div>
          <Card title="📋 عن المنحة">
            <SLabel>الوصف</SLabel>
            <p style={{ fontSize: 'clamp(13px, 1.2vw, 13.5px)', color: '#4a6580', lineHeight: 1.9 }}>
              {s.description_ar}
            </p>
            {s.benefits_ar?.length > 0 && (
              <>
                <SLabel>المزايا والمكرمات</SLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.benefits_ar.map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: 11, padding: '11px 14px', background: '#e6f7f3', borderRadius: 11, fontSize: 13, color: '#1B3A5C', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2FA889', flexShrink: 0, marginTop: 5 }} />
                      {b}
                    </div>
                  ))}
                </div>
              </>
            )}
          </Card>

          {s.conditions?.length > 0 && (
            <Card title="📜 شروط المنحة">
              <p style={{ fontSize: 'clamp(13px, 1.2vw, 13.5px)', color: '#4a6580', lineHeight: 1.9, marginBottom: 16 }}>
                يجب أن تنطبق عليك جميع الشروط التالية للتقديم:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.conditions.map(c => (
                  <div key={c.id} style={{ display: 'flex', gap: 12, padding: '13px 15px', background: '#f4f7fb', borderRadius: 11, borderRight: '3px solid #1B3A5C' }}>
                    <div style={{ width: 24, height: 24, borderRadius: 7, background: '#1B3A5C', color: '#fff', fontSize: 11, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.order}
                    </div>
                    <div>
                      <div style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 800, color: '#0f2236', lineHeight: 1.6 }}>{c.title_ar}</div>
                      {c.desc_ar && <div style={{ fontSize: 'clamp(10px, 1vw, 11px)', color: '#8fa3b8', marginTop: 2 }}>{c.desc_ar}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {s.documents?.length > 0 && (
            <Card title="📂 المستندات المطلوبة">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {s.documents.map(d => (
                  <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 13px', background: '#eef2f7', borderRadius: 10, fontSize: 'clamp(12px, 1.2vw, 12.5px)', fontWeight: 600, color: '#1B3A5C' }}>
                    <span style={{ fontSize: 15 }}>{d.icon}</span>
                    {d.name_ar}
                    {d.note_ar && (
                      <span style={{ fontSize: 'clamp(9px, 1vw, 10px)', color: '#8fa3b8', marginRight: 'auto', fontWeight: 400 }}>{d.note_ar}</span>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {s.timeline?.length > 0 && (
            <Card title="📅 المواعيد الزمنية">
              <div>
                {s.timeline.map((t, i) => (
                  <div key={t.id} style={{ display: 'flex', gap: 14, paddingBottom: i < s.timeline.length - 1 ? 18 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{
                        width: 12, height: 12, borderRadius: '50%',
                        background: t.is_past ? '#dde5f0' : '#2FA889',
                        border: '2px solid #fff',
                        boxShadow: `0 0 0 2px ${t.is_past ? '#dde5f0' : '#2FA889'}`,
                        flexShrink: 0,
                      }} />
                      {i < s.timeline.length - 1 && (
                        <div style={{ width: 1, flex: 1, background: '#dde5f0', marginTop: 4, minHeight: 24 }} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 'clamp(9px, 1vw, 10px)', fontWeight: 800, color: t.is_past ? '#8fa3b8' : '#2FA889', marginBottom: 3, fontFamily: 'monospace' }}>
                        {t.date_label}
                      </div>
                      <div style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 800, color: '#1B3A5C' }}>{t.title_ar}</div>
                      {t.desc_ar && <div style={{ fontSize: 'clamp(10px, 1vw, 11px)', color: '#8fa3b8', marginTop: 2 }}>{t.desc_ar}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* SIDEBAR */}
        <div>
          <div className="detail-cta">
            <div style={{ fontSize: 'clamp(15px, 1.5vw, 16px)', fontWeight: 900, color: '#fff', marginBottom: 4 }}>
              قدّم مع UniPath
            </div>
            <div style={{ fontSize: 'clamp(11px, 1.2vw, 12px)', color: 'rgba(255,255,255,.48)', marginBottom: 18, lineHeight: 1.7 }}>
              فريقنا يجهّز ملفك ويقدّم بأعلى جودة — تقديم + متابعة كاملة
            </div>

            {s.official_url && (
              <a href={s.official_url} target="_blank" rel="noopener noreferrer" style={btnStyle('#2FA889')}>
                🔗 الموقع الرسمي للمنحة ↗
              </a>
            )}

            <a href={waLink} target="_blank" rel="noopener noreferrer" style={btnStyle('#25D366')}>
              استفسر عبر واتساب
            </a>

            <button
              onClick={() => setFormOpen(o => !o)}
              style={{ ...btnStyle('rgba(255,255,255,.07)'), border: '1px solid rgba(255,255,255,.18)', color: 'rgba(255,255,255,.8)', fontSize: 'clamp(11px, 1.2vw, 12px)', padding: '10px 12px' }}
            >
              ✍️ سجّل بياناتك ونتواصل معك
            </button>
          </div>

          {formOpen && (
            <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #dde5f0', overflow: 'hidden', marginBottom: 18 }}>
              <div style={{ padding: '13px 16px', borderBottom: '1px solid #eef2f7', fontSize: 'clamp(12px, 1.2vw, 13px)', fontWeight: 900, color: '#1B3A5C', background: '#e6f7f3' }}>
                📝 سجّل اهتمامك — {s.name_ar}
              </div>
              <div style={{ padding: 'clamp(12px, 1.5vw, 16px)' }}>
                {formState === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                    <div style={{ fontSize: 'clamp(15px, 1.5vw, 16px)', fontWeight: 900, color: '#1B3A5C', marginBottom: 6 }}>تم استلام طلبك!</div>
                    <div style={{ fontSize: 'clamp(12px, 1.2vw, 13px)', color: '#8fa3b8', lineHeight: 1.8 }}>
                      سيتواصل معك فريق UniPath خلال 24 ساعة على واتساب.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                      <div>
                        <label style={lblStyle()}>الاسم الكامل <span style={{ color: '#e05555' }}>*</span></label>
                        <input value={form.name} onChange={inp('name')} placeholder="أحمد محمد علي" style={inpStyle(isErr('name'))} />
                      </div>
                      <div>
                        <label style={lblStyle()}>الجنسية <span style={{ color: '#e05555' }}>*</span></label>
                        <select value={form.nationality} onChange={inp('nationality')} style={inpStyle(isErr('nationality'))}>
                          <option value="">اختر...</option>
                          {['سوداني', 'مصري', 'سعودي', 'أردني', 'سوري', 'يمني', 'أخرى'].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                      <div>
                        <label style={lblStyle()}>رقم الواتساب <span style={{ color: '#e05555' }}>*</span></label>
                        <input value={form.whatsapp} onChange={inp('whatsapp')} placeholder="+249..." dir="ltr" style={inpStyle(isErr('whatsapp'))} />
                      </div>
                      <div>
                        <label style={lblStyle()}>البريد الإلكتروني <span style={{ color: '#e05555' }}>*</span></label>
                        <input type="email" value={form.email} onChange={inp('email')} placeholder="email@..." dir="ltr" style={inpStyle(isErr('email'))} />
                      </div>
                    </div>

                    <div style={{ marginBottom: 10 }}>
                      <label style={lblStyle()}>المرحلة الدراسية <span style={{ color: '#e05555' }}>*</span></label>
                      <select value={form.level} onChange={inp('level')} style={inpStyle(isErr('level'))}>
                        <option value="">اختر...</option>
                        {['طالب بكالوريوس — سنة أخيرة', 'خريج بكالوريوس', 'طالب ماجستير', 'خريج ماجستير', 'باحث / دكتوراه'].map(l => (
                          <option key={l}>{l}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ marginBottom: 10 }}>
                      <label style={lblStyle()}>التخصص <span style={{ fontSize: 10, color: '#8fa3b8' }}>(اختياري)</span></label>
                      <input value={form.major} onChange={inp('major')} placeholder="هندسة / طب / علوم حاسوب..." style={inpStyle(false)} />
                    </div>

                    <div style={{ marginBottom: 10 }}>
                      <label style={lblStyle()}>شهادة اللغة <span style={{ fontSize: 10, color: '#8fa3b8' }}>(اختياري)</span></label>
                      <select value={form.langCert} onChange={inp('langCert')} style={inpStyle(false)}>
                        <option value="">اختر...</option>
                        {['IELTS 6.0+', 'IELTS 6.5+', 'IELTS 7.0+', 'Goethe B1', 'Goethe B2', 'لا يوجد حتى الآن'].map(l => (
                          <option key={l}>{l}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ marginBottom: 10 }}>
                      <label style={lblStyle()}>ملاحظات <span style={{ fontSize: 10, color: '#8fa3b8' }}>(اختياري)</span></label>
                      <textarea value={form.notes} onChange={inp('notes')} rows={3} placeholder="هل قدّمت على منح من قبل؟..." style={{ ...inpStyle(false), resize: 'vertical' as const }} />
                    </div>

                    {errors.length > 0 && (
                      <div style={{ fontSize: 11, color: '#e05555', background: '#fce8e8', padding: '9px 12px', borderRadius: 9, marginBottom: 10, fontWeight: 600 }}>
                        ⚠️ الرجاء تعبئة جميع الحقول المطلوبة (*)
                      </div>
                    )}
                    {formState === 'error' && (
                      <div style={{ fontSize: 11, color: '#e05555', background: '#fce8e8', padding: '9px 12px', borderRadius: 9, marginBottom: 10, fontWeight: 600 }}>
                        حدث خطأ — يرجى المحاولة مرة أخرى أو التواصل عبر واتساب
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      style={{ ...btnStyle('#1B3A5C'), opacity: formState === 'loading' ? 0.7 : 1 }}
                    >
                      {formState === 'loading' ? 'جاري الإرسال...' : 'إرسال — سنتواصل معك خلال 24 ساعة'}
                    </button>

                    <div style={{ fontSize: 10, color: '#8fa3b8', textAlign: 'center', marginTop: 8, lineHeight: 1.7 }}>
                      🔒 بياناتك محمية ولن تُشارك مع أي جهة خارجية
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}

          <Card title="ℹ️ تفاصيل سريعة">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                ['الدولة', `${s.country_flag} ${s.country}`],
                ['المرحلة', safeLevels.map(l => LVL_LABEL[l]).join(' · ') || 'غير محدد'],
                ['التمويل', FUND_LABEL[s.funding_type]],
                ['آخر موعد', formatDate(s.deadline)],
              ].map(([lbl, val]) => (
                <div key={lbl} style={{ background: '#f4f7fb', borderRadius: 11, padding: '11px 13px' }}>
                  <div style={{ fontSize: 'clamp(9px, 1vw, 10px)', color: '#8fa3b8', fontWeight: 700, marginBottom: 4 }}>{lbl}</div>
                  <div style={{ fontSize: 'clamp(11px, 1.2vw, 12.5px)', fontWeight: 800, color: '#1B3A5C' }}>{val}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}