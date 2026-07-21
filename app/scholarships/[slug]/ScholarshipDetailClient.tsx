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

export default function ScholarshipDetailClient({ scholarship: s }: { scholarship: Scholarship }) {
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, scholarship_slug: s.slug }),
      })
      if (!res.ok) throw new Error()
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

  // معالجة آمنة للمستويات
  const safeLevels = s.levels?.filter(l => LVL_LABEL[l]) || []
  const safeViews = s.views ?? 0
  const safeApplications = s.applications ?? 0

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: 'white', padding: '0 5%', display: 'flex', alignItems: 'center', height: 60, position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <LogoIcon width={62} height={62} />

        </Link>
        <div style={{ display: 'flex', gap: 24, marginRight: 'auto' }}>
          {[['المنح', '/scholarships'], ['خدماتنا', '/services'], ['الأسئلة الشائعة', '/faq'], ['تواصل', '/contact']].map(([label, href]) => (
            <Link key={href} href={href} style={{ color: '#1B3A5C', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ background: '#fff', borderBottom: '1px solid #dde5f0', padding: '11px 5%', display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: '#8fa3b8' }}>
        <Link href="/" style={{ color: '#8fa3b8', textDecoration: 'none' }}>الرئيسية</Link>
        <span>›</span>
        <Link href="/scholarships" style={{ color: '#8fa3b8', textDecoration: 'none' }}>المنح الدراسية</Link>
        <span>›</span>
        <span style={{ color: '#0f2236', fontWeight: 700 }}>{s.name_ar}</span>
      </div>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#122845 0%,#1B3A5C 60%,#1a5c42 100%)', padding: '44px 5% 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 24 }}>
            <div style={{ width: 72, height: 72, borderRadius: 18, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, flexShrink: 0 }}>
              {s.country_flag}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#3cc4a0', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                {s.country} · {FUND_LABEL[s.funding_type]} · {safeLevels.map(l => LVL_LABEL[l]).join(' و') || 'غير محدد'}
              </div>
              <h1 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 900, color: '#fff', lineHeight: 1.35, marginBottom: 6 }}>{s.name_ar}</h1>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', fontFamily: 'monospace', marginBottom: 14 }}>{s.name_en}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {days !== null && days > 0 && (
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 50, background: 'rgba(39,174,96,.2)', color: '#4de889' }}>✅ مفتوحة الآن</span>
                )}
                {days === 0 && (
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 50, background: 'rgba(224,85,85,.2)', color: '#f87272' }}>🔴 أغلق التقديم</span>
                )}
                <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 50, background: 'rgba(47,168,137,.2)', color: '#3cc4a0' }}>
                  {FUND_LABEL[s.funding_type]}
                </span>
                {safeLevels.map(l => (
                  <span key={l} style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 50, background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.75)' }}>
                    {LVL_LABEL[l]}
                  </span>
                ))}
                {days !== null && days > 0 && days <= 90 && (
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 50, background: 'rgba(244,160,28,.18)', color: '#ffc84a' }}>
                    ⏳ ينتهي بعد {days} يوم
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stats bar - التعديل هنا */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,.08)', margin: '0 -5%', padding: '0 5%' }}>
            {[
              [safeViews.toLocaleString(), 'مشاهدة'],
              [safeApplications, 'تقديم عبر UniPath'],
              [days != null && days > 0 ? `${days} يوم` : '—', 'متبقي للتقديم'],
              [formatDate(s.deadline), 'آخر موعد'],
            ].map(([val, lbl]) => (
              <div key={String(lbl)} style={{ padding: '16px 0', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,.07)' }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#fff' }}>{val}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', marginTop: 3, fontWeight: 600 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 5%', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 22, alignItems: 'start' }}>

        {/* CONTENT */}
        <div>

          {/* عن المنحة */}
          <Card title="📋 عن المنحة">
            <SLabel>الوصف</SLabel>
            <p style={{ fontSize: 13.5, color: '#4a6580', lineHeight: 1.9 }}>{s.description_ar}</p>
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

          {/* شروط المنحة */}
          {s.conditions?.length > 0 && (
            <Card title="📜 شروط المنحة">
              <p style={{ fontSize: 13.5, color: '#4a6580', lineHeight: 1.9, marginBottom: 16 }}>
                يجب أن تنطبق عليك جميع الشروط التالية للتقديم:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.conditions.map(c => (
                  <div key={c.id} style={{ display: 'flex', gap: 12, padding: '13px 15px', background: '#f4f7fb', borderRadius: 11, borderRight: '3px solid #1B3A5C' }}>
                    <div style={{ width: 24, height: 24, borderRadius: 7, background: '#1B3A5C', color: '#fff', fontSize: 11, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.order}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0f2236', lineHeight: 1.6 }}>{c.title_ar}</div>
                      {c.desc_ar && <div style={{ fontSize: 11, color: '#8fa3b8', marginTop: 2 }}>{c.desc_ar}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* المستندات */}
          {s.documents?.length > 0 && (
            <Card title="📂 المستندات المطلوبة">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {s.documents.map(d => (
                  <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 13px', background: '#eef2f7', borderRadius: 10, fontSize: 12.5, fontWeight: 600, color: '#1B3A5C' }}>
                    <span style={{ fontSize: 15 }}>{d.icon}</span>
                    {d.name_ar}
                    {d.note_ar && (
                      <span style={{ fontSize: 10, color: '#8fa3b8', marginRight: 'auto', fontWeight: 400 }}>{d.note_ar}</span>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* الخط الزمني */}
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
                      <div style={{ fontSize: 10, fontWeight: 800, color: t.is_past ? '#8fa3b8' : '#2FA889', marginBottom: 3, fontFamily: 'monospace' }}>
                        {t.date_label}
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#1B3A5C' }}>{t.title_ar}</div>
                      {t.desc_ar && <div style={{ fontSize: 11, color: '#8fa3b8', marginTop: 2 }}>{t.desc_ar}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

        </div>

        {/* SIDEBAR */}
        <div>

          {/* CTA Card */}
          <div style={{ background: 'linear-gradient(145deg,#122845,#2a4f78)', borderRadius: 18, padding: 22, marginBottom: 18, border: '1px solid rgba(255,255,255,.06)' }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: '#fff', marginBottom: 4 }}>قدّم مع UniPath</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.48)', marginBottom: 18, lineHeight: 1.7 }}>
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
              style={{ ...btnStyle('rgba(255,255,255,.07)'), border: '1px solid rgba(255,255,255,.18)', color: 'rgba(255,255,255,.8)', fontSize: 12, padding: '10px 12px' }}
            >
              ✍️ سجّل بياناتك ونتواصل معك
            </button>
          </div>

          {/* FORM */}
          {formOpen && (
            <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #dde5f0', overflow: 'hidden', marginBottom: 18 }}>
              <div style={{ padding: '13px 16px', borderBottom: '1px solid #eef2f7', fontSize: 13, fontWeight: 900, color: '#1B3A5C', background: '#e6f7f3' }}>
                📝 سجّل اهتمامك — {s.name_ar}
              </div>
              <div style={{ padding: 16 }}>
                {formState === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: '#1B3A5C', marginBottom: 6 }}>تم استلام طلبك!</div>
                    <div style={{ fontSize: 13, color: '#8fa3b8', lineHeight: 1.8 }}>
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

          {/* Info Grid */}
          <Card title="ℹ️ تفاصيل سريعة">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                ['الدولة', `${s.country_flag} ${s.country}`],
                ['المرحلة', safeLevels.map(l => LVL_LABEL[l]).join(' · ') || 'غير محدد'],
                ['التمويل', FUND_LABEL[s.funding_type]],
                ['آخر موعد', formatDate(s.deadline)],
              ].map(([lbl, val]) => (
                <div key={lbl} style={{ background: '#f4f7fb', borderRadius: 11, padding: '11px 13px' }}>
                  <div style={{ fontSize: 10, color: '#8fa3b8', fontWeight: 700, marginBottom: 4 }}>{lbl}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: '#1B3A5C' }}>{val}</div>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}