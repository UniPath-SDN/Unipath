'use client'
// app/cms/page.tsx  —  Scholarship CMS
//
// معدّلة عشان تتماشى مع نظام الـ auth:
// - كل الطلبات بتستخدم authFetch (بتبعت الكوكيز + تجدد الـ token تلقائي لو خلص)
// - لو الجلسة مش صالحة (401 حتى بعد محاولة التجديد) بترجع المستخدم لصفحة الدخول
// - الـ endpoints بقت تحت /api/ زي باقي الـ API (/api/scholarships/ مش /scholarships/)
// - الملف نقل من app/admin/cms/ لـ app/cms/ عشان يطابق المسار اللي middleware.ts بيحميه فعلاً

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { authFetch, logout } from '@/lib/auth'

// ── Types
type Scholarship = {
  id: string; slug: string
  name_ar: string; name_en: string
  country: string; country_flag: string
  funding_type: string; levels: string[]
  status: 'DRAFT' | 'PUBLISHED' | 'CLOSED'
  deadline?: string; views: number; applications: number
  description_ar: string; benefits_ar: string[]
  official_url?: string
  image_url?: string
  conditions:  { order: number; title_ar: string; desc_ar?: string }[]
  documents:   { order: number; name_ar: string;  note_ar?: string; icon: string }[]
  timeline:    { order: number; date_label: string; title_ar: string; desc_ar?: string; is_past: boolean }[]
  meta_title?: string; meta_desc?: string
}

type FormData = Omit<Scholarship, 'id' | 'slug' | 'views' | 'applications'>

const EMPTY_FORM: FormData = {
  name_ar: '', name_en: '', country: '', country_flag: '🌍',
  funding_type: 'FULL', levels: [], status: 'DRAFT',
  description_ar: '', benefits_ar: [''],
  official_url: '',
  image_url: '',
  conditions: [{ order: 1, title_ar: '', desc_ar: '' }],
  documents:  [{ order: 1, name_ar: '', note_ar: '', icon: '📄' }],
  timeline:   [{ order: 1, date_label: '', title_ar: '', desc_ar: '', is_past: false }],
  meta_title: '', meta_desc: '',
}

const STATUS_MAP = {
  DRAFT:     { label: 'مسودة',  bg: '#f0f4f8', color: '#4a6580' },
  PUBLISHED: { label: 'منشور', bg: '#d4f5e5', color: '#0a6640' },
  CLOSED:    { label: 'مغلق',  bg: '#fce8e8', color: '#a32d2d' },
}
const FUNDING_OPTIONS = [
  { val: 'FULL',         label: 'تمويل كامل' },
  { val: 'PARTIAL',      label: 'تمويل جزئي' },
  { val: 'TUITION_ONLY', label: 'رسوم دراسية فقط' },
]
const LEVEL_OPTIONS = [
  { val: 'BACHELORS', label: 'بكالوريوس' },
  { val: 'MASTERS',   label: 'ماجستير' },
  { val: 'PHD',       label: 'دكتوراه' },
  { val: 'POSTDOC',   label: 'ما بعد الدكتوراه' },
]

// ── Shared input style
const inp: React.CSSProperties = {
  width: '100%', padding: '9px 12px', border: '1.5px solid #dde5f0',
  borderRadius: 9, fontFamily: 'Cairo, sans-serif', fontSize: 13,
  color: '#0f2236', background: '#f8fafc', outline: 'none', direction: 'rtl',
  boxSizing: 'border-box',
}
const lbl: React.CSSProperties = {
  fontSize: 11, fontWeight: 800, color: '#1B3A5C', display: 'block', marginBottom: 5,
}

// ── Section wrapper
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#2FA889', letterSpacing: '.08em', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #eef2f7' }}>{title}</div>
      {children}
    </div>
  )
}

// ── Main CMS Component
export default function CMSPage() {
  const router = useRouter()
  const [me, setMe]                     = useState<{ name: string; role_display: string } | null>(null)
  const [scholarships, setScholarships] = useState<Scholarship[]>([])
  const [loading, setLoading]           = useState(true)
  const [modalOpen, setModalOpen]       = useState(false)
  const [editTarget, setEditTarget]     = useState<Scholarship | null>(null)
  const [form, setForm]                 = useState<FormData>(EMPTY_FORM)
  const [saving, setSaving]             = useState(false)
  const [deleteId, setDeleteId]         = useState<string | null>(null)
  const [search, setSearch]             = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('ALL')
  const [activeTab, setActiveTab]       = useState<'basic' | 'content' | 'seo'>('basic')
  const [toast, setToast]               = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  // ── Toast helper
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  // ── Who's logged in (نفس اللي بتستخدمه باقي الداشبوردات)
  useEffect(() => {
    authFetch('/api/auth/me/')
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(data => setMe({ name: data.name, role_display: data.role_display }))
      .catch(() => router.push('/admin-login'))
  }, [router])

  async function handleLogout() {
    await logout()
    router.push('/admin-login')
  }

  // ── Fetch scholarships
  const fetchAll = useCallback(async () => {
    setLoading(true)
    try {
      const res = await authFetch('/api/scholarships/')
      if (res.status === 401) {
        // الجلسة انتهت فعلاً حتى بعد محاولة التجديد التلقائي في authFetch
        router.push('/admin-login')
        return
      }
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setScholarships(data)
    } catch {
      showToast('فشل في تحميل المنح', 'error')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => { fetchAll() }, [fetchAll])

  // ── Open modal
  function openAdd() {
    setEditTarget(null)
    setForm(EMPTY_FORM)
    setActiveTab('basic')
    setModalOpen(true)
  }
  function openEdit(s: Scholarship) {
    setEditTarget(s)
    setForm({
      name_ar: s.name_ar, name_en: s.name_en,
      country: s.country, country_flag: s.country_flag,
      funding_type: s.funding_type, levels: s.levels,
      status: s.status, description_ar: s.description_ar,
      benefits_ar: s.benefits_ar.length ? s.benefits_ar : [''],
      official_url: s.official_url ?? '',
      image_url: s.image_url ?? '',
      conditions: s.conditions.length ? s.conditions : [{ order: 1, title_ar: '', desc_ar: '' }],
      documents:  s.documents.length  ? s.documents  : [{ order: 1, name_ar: '', note_ar: '', icon: '📄' }],
      timeline:   s.timeline.length   ? s.timeline   : [{ order: 1, date_label: '', title_ar: '', desc_ar: '', is_past: false }],
      meta_title: s.meta_title ?? '', meta_desc: s.meta_desc ?? '',
    })
    setActiveTab('basic')
    setModalOpen(true)
  }

  // ── Save
  async function handleSave() {
    if (!form.name_ar || !form.name_en || !form.country) {
      showToast('الرجاء تعبئة الحقول المطلوبة (*)', 'error')
      return
    }
    setSaving(true)
    try {
      const url    = editTarget ? `/api/scholarships/${editTarget.slug}/` : `/api/scholarships/`
      const method = editTarget ? 'PUT' : 'POST'
      const payload = {
        ...form,
        benefits_ar: form.benefits_ar.filter(b => b.trim()),
        conditions:  form.conditions.map((c, i) => ({ ...c, order: i + 1 })).filter(c => c.title_ar.trim()),
        documents:   form.documents.map((d, i)  => ({ ...d, order: i + 1 })).filter(d => d.name_ar.trim()),
        timeline:    form.timeline.map((t, i)   => ({ ...t, order: i + 1 })).filter(t => t.title_ar.trim()),
      }
      const res = await authFetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.status === 401) { router.push('/login'); return }
      if (res.ok) {
        setModalOpen(false)
        fetchAll()
        showToast(editTarget ? '✅ تم تعديل المنحة' : '✅ تم إضافة المنحة', 'success')
      } else {
        throw new Error('Save failed')
      }
    } catch {
      showToast('❌ فشل في الحفظ', 'error')
    } finally {
      setSaving(false)
    }
  }

  // ── Delete
  async function handleDelete() {
    if (!deleteId) return
    const s = scholarships.find(x => x.id === deleteId)
    if (!s) return
    try {
      const res = await authFetch(`/api/scholarships/${s.slug}/`, { method: 'DELETE' })
      if (res.status === 401) { router.push('/login'); return }
      if (res.ok) {
        setDeleteId(null)
        fetchAll()
        showToast('✅ تم حذف المنحة', 'success')
      } else {
        throw new Error('Delete failed')
      }
    } catch {
      showToast('❌ فشل في الحذف', 'error')
    }
  }

  // ── Toggle status
  async function toggleStatus(s: Scholarship) {
    const next = s.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED'
    try {
      const res = await authFetch(`/api/scholarships/${s.slug}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...s, status: next }),
      })
      if (res.status === 401) { router.push('/admin-login'); return }
      if (res.ok) {
        fetchAll()
        showToast(`✅ تم ${next === 'PUBLISHED' ? 'نشر' : 'إخفاء'} المنحة`, 'success')
      }
    } catch {
      showToast('❌ فشل في تغيير الحالة', 'error')
    }
  }

  // ── Filtered list
  const visible = scholarships.filter(s => {
    const matchSearch = s.name_ar.includes(search) || s.country.includes(search) || s.name_en.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'ALL' || s.status === statusFilter
    return matchSearch && matchStatus
  })

  // ── Form helpers
  const setF = (k: keyof FormData, v: any) => setForm(f => ({ ...f, [k]: v }))

  function listAdd(key: 'conditions' | 'documents' | 'timeline') {
    const defaults: any = {
      conditions: { order: 0, title_ar: '', desc_ar: '' },
      documents:  { order: 0, name_ar: '', note_ar: '', icon: '📄' },
      timeline:   { order: 0, date_label: '', title_ar: '', desc_ar: '', is_past: false },
    }
    setF(key, [...(form[key] as any[]), defaults[key]])
  }
  function listUpdate(key: 'conditions' | 'documents' | 'timeline', i: number, patch: object) {
    const arr = [...(form[key] as any[])]
    arr[i] = { ...arr[i], ...patch }
    setF(key, arr)
  }
  function listRemove(key: 'conditions' | 'documents' | 'timeline', i: number) {
    setF(key, (form[key] as any[]).filter((_, idx) => idx !== i))
  }

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>

      {/* ── TOAST ── */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: 30, right: 30, zIndex: 9999,
          padding: '14px 24px', borderRadius: 12,
          background: toast.type === 'success' ? '#0a6640' : '#a32d2d',
          color: '#fff', fontWeight: 700, fontSize: 14,
          boxShadow: '0 8px 30px rgba(0,0,0,.2)',
          animation: 'slideUp 0.3s ease',
          fontFamily: 'Cairo, sans-serif',
        }}>
          {toast.message}
        </div>
      )}

      {/* ── HEADER ── */}
      <div style={{ background: '#122845', padding: '0 5%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/hub" style={{ color: 'rgba(255,255,255,.5)', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>← Admin Hub</a>
          <span style={{ color: 'rgba(255,255,255,.2)' }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#fff' }}>🎓 Scholarship CMS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {me && (
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', fontWeight: 700 }}>
              {me.name} — {me.role_display}
            </span>
          )}
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 20px', background: '#2FA889', color: '#fff', border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 800, cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>
            + إضافة منحة
          </button>
          <button onClick={handleLogout} style={{ background: 'none', border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.6)', padding: '7px 14px', borderRadius: 9, fontSize: 11, fontWeight: 700, cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>
            خروج
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 5%' }}>

        {/* ── STATS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
          {[
            ['إجمالي المنح', scholarships.length, '#1B3A5C'],
            ['منشور',        scholarships.filter(s => s.status === 'PUBLISHED').length, '#0a6640'],
            ['مسودة',        scholarships.filter(s => s.status === 'DRAFT').length,     '#7a4f00'],
            ['مغلق',         scholarships.filter(s => s.status === 'CLOSED').length,    '#a32d2d'],
          ].map(([label, val, color]) => (
            <div key={String(label)} style={{ background: '#fff', borderRadius: 12, padding: '14px 16px', border: '1px solid #e8eef5' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#8fa3b8', marginBottom: 5 }}>{label}</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: color as string }}>{val}</div>
            </div>
          ))}
        </div>

        {/* ── FILTERS ── */}
        <div style={{ background: '#fff', borderRadius: 14, padding: '14px 18px', border: '1px solid #e8eef5', marginBottom: 18, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 بحث بالاسم أو الدولة..."
            style={{ ...inp, flex: 1, minWidth: 200, padding: '8px 12px' }}
          />
          <div style={{ display: 'flex', gap: 7 }}>
            {['ALL', 'PUBLISHED', 'DRAFT', 'CLOSED'].map(s => (
              <button key={s} onClick={() => setStatusFilter(s)} style={{
                padding: '7px 14px', borderRadius: 50, fontSize: 11, fontWeight: 700, cursor: 'pointer', border: 'none', fontFamily: 'Cairo, sans-serif',
                background: statusFilter === s ? '#1B3A5C' : '#f0f4f8',
                color:      statusFilter === s ? '#fff'    : '#4a6580',
              } as React.CSSProperties}>
                {s === 'ALL' ? 'الكل' : STATUS_MAP[s as keyof typeof STATUS_MAP]?.label ?? s}
              </button>
            ))}
          </div>
        </div>

        {/* ── TABLE ── */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e8eef5', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 48, textAlign: 'center', color: '#8fa3b8', fontSize: 14 }}>جاري التحميل...</div>
          ) : visible.length === 0 ? (
            <div style={{ padding: 48, textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#8fa3b8' }}>لا توجد منح — أضف منحة جديدة</div>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #eef2f7' }}>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'center' }}>الصورة</th>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'right' }}>المنحة</th>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'right' }}>الدولة</th>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'center' }}>الحالة</th>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'center' }}>آخر موعد</th>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'center' }}>👁️</th>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'center' }}>📋</th>
                    <th style={{ padding: '10px 12px', fontSize: 11, fontWeight: 800, color: '#8fa3b8', textAlign: 'center' }}>إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((s, i) => {
                    const st = STATUS_MAP[s.status]
                    return (
                      <tr key={s.id} style={{ borderBottom: i < visible.length - 1 ? '1px solid #f0f4f8' : 'none', transition: 'background .15s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = '#fafcff'}
                        onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = ''}
                      >
                        <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                          {s.image_url ? (
                            <img
                              src={s.image_url}
                              alt={s.name_ar}
                              style={{ width: 45, height: 45, borderRadius: 8, objectFit: 'cover' }}
                            />
                          ) : (
                            <div style={{ width: 45, height: 45, borderRadius: 8, background: '#f0f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, margin: '0 auto' }}>
                              {s.country_flag}
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '10px 12px' }}>
                          <div style={{ fontSize: 13, fontWeight: 800, color: '#1B3A5C' }}>{s.name_ar}</div>
                          <div style={{ fontSize: 10, color: '#8fa3b8', fontFamily: 'monospace' }}>{s.slug}</div>
                        </td>
                        <td style={{ padding: '10px 12px', fontSize: 13, color: '#4a6580' }}>
                          {s.country_flag} {s.country}
                        </td>
                        <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                          <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 50, background: st.bg, color: st.color }}>{st.label}</span>
                        </td>
                        <td style={{ padding: '10px 12px', fontSize: 12, color: '#4a6580', textAlign: 'center' }}>
                          {s.deadline ? new Date(s.deadline).toLocaleDateString('ar-EG', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                        </td>
                        <td style={{ padding: '10px 12px', fontSize: 13, fontWeight: 700, color: '#1B3A5C', textAlign: 'center' }}>{s.views.toLocaleString()}</td>
                        <td style={{ padding: '10px 12px', fontSize: 13, fontWeight: 700, color: '#2FA889', textAlign: 'center' }}>{s.applications}</td>
                        <td style={{ padding: '10px 12px' }}>
                          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                            <button onClick={() => openEdit(s)} style={{ padding: '4px 10px', background: '#f0f4f8', border: 'none', borderRadius: 6, fontSize: 10, fontWeight: 700, cursor: 'pointer', color: '#1B3A5C', fontFamily: 'Cairo, sans-serif' }}>تعديل</button>
                            <button onClick={() => toggleStatus(s)} style={{ padding: '4px 10px', background: s.status === 'PUBLISHED' ? '#fce8e8' : '#d4f5e5', border: 'none', borderRadius: 6, fontSize: 10, fontWeight: 700, cursor: 'pointer', color: s.status === 'PUBLISHED' ? '#a32d2d' : '#0a6640', fontFamily: 'Cairo, sans-serif' }}>
                              {s.status === 'PUBLISHED' ? 'إخفاء' : 'نشر'}
                            </button>
                            <a href={`/scholarships/${s.slug}`} target="_blank" rel="noopener noreferrer" style={{ padding: '4px 10px', background: '#e6f7f3', border: 'none', borderRadius: 6, fontSize: 10, fontWeight: 700, cursor: 'pointer', color: '#0a6640', textDecoration: 'none' }}>↗</a>
                            <button onClick={() => setDeleteId(s.id)} style={{ padding: '4px 10px', background: '#fce8e8', border: 'none', borderRadius: 6, fontSize: 10, fontWeight: 700, cursor: 'pointer', color: '#a32d2d', fontFamily: 'Cairo, sans-serif' }}>حذف</button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ══ ADD/EDIT MODAL ══ */}
      {modalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '24px 16px', overflowY: 'auto' }}>
          <div style={{ background: '#fff', borderRadius: 18, width: '100%', maxWidth: 720, padding: '24px', position: 'relative' }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h2 style={{ fontSize: 17, fontWeight: 900, color: '#1B3A5C', margin: 0 }}>
                {editTarget ? `تعديل — ${editTarget.name_ar}` : 'إضافة منحة جديدة'}
              </h2>
              <button onClick={() => setModalOpen(false)} style={{ width: 30, height: 30, borderRadius: '50%', border: 'none', background: '#f0f4f8', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 22, background: '#f0f4f8', borderRadius: 10, padding: 4 }}>
              {([['basic', 'المعلومات الأساسية'], ['content', 'المحتوى والشروط'], ['seo', 'SEO']] as const).map(([tab, label]) => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  flex: 1, padding: '8px 0', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all .2s', fontFamily: 'Cairo, sans-serif',
                  background: activeTab === tab ? '#fff' : 'transparent',
                  color:      activeTab === tab ? '#1B3A5C' : '#8fa3b8',
                  boxShadow:  activeTab === tab ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
                } as React.CSSProperties}>{label}</button>
              ))}
            </div>

            {/* ── TAB: BASIC ── */}
            {activeTab === 'basic' && (
              <div>
                <Section title="اسم المنحة">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <div>
                      <label style={lbl}>الاسم بالعربي <span style={{ color: '#e05555' }}>*</span></label>
                      <input value={form.name_ar} onChange={e => setF('name_ar', e.target.value)} placeholder="منحة DAAD الألمانية 2026" style={inp} />
                    </div>
                    <div>
                      <label style={lbl}>الاسم بالإنجليزي <span style={{ color: '#e05555' }}>*</span></label>
                      <input value={form.name_en} onChange={e => setF('name_en', e.target.value)} placeholder="DAAD Germany 2026" dir="ltr" style={inp} />
                    </div>
                  </div>
                </Section>

                <Section title="الدولة والتمويل">
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <div>
                      <label style={lbl}>العلم</label>
                      <input value={form.country_flag} onChange={e => setF('country_flag', e.target.value)} style={inp} />
                    </div>
                    <div>
                      <label style={lbl}>الدولة <span style={{ color: '#e05555' }}>*</span></label>
                      <input value={form.country} onChange={e => setF('country', e.target.value)} placeholder="ألمانيا" style={inp} />
                    </div>
                    <div>
                      <label style={lbl}>نوع التمويل</label>
                      <select value={form.funding_type} onChange={e => setF('funding_type', e.target.value)} style={inp}>
                        {FUNDING_OPTIONS.map(o => <option key={o.val} value={o.val}>{o.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={lbl}>المراحل الدراسية</label>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {LEVEL_OPTIONS.map(l => (
                          <label key={l.val} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: '#4a6580', cursor: 'pointer' }}>
                            <input type="checkbox" checked={form.levels.includes(l.val)}
                              onChange={e => setF('levels', e.target.checked ? [...form.levels, l.val] : form.levels.filter(x => x !== l.val))} />
                            {l.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label style={lbl}>الحالة</label>
                      <select value={form.status} onChange={e => setF('status', e.target.value as any)} style={inp}>
                        <option value="DRAFT">مسودة</option>
                        <option value="PUBLISHED">منشور</option>
                        <option value="CLOSED">مغلق</option>
                      </select>
                    </div>
                  </div>
                </Section>

                <Section title="صورة المنحة 🖼️">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'start' }}>
                    <div>
                      <label style={lbl}>رابط الصورة</label>
                      <input
                        value={form.image_url ?? ''}
                        onChange={e => setF('image_url', e.target.value)}
                        placeholder="https://images.unsplash.com/photo-..."
                        dir="ltr"
                        style={inp}
                      />
                      <div style={{ fontSize: 10, color: '#8fa3b8', marginTop: 6 }}>
                        💡 استخدم صور من Unsplash أو أي رابط صورة عام
                      </div>
                    </div>
                    {form.image_url && (
                      <div style={{ width: 80, height: 80, borderRadius: 8, overflow: 'hidden', flexShrink: 0, border: '1px solid #e8eef5' }}>
                        <img
                          src={form.image_url}
                          alt="معاينة الصورة"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => { (e.target as HTMLImageElement).src = '' }}
                        />
                      </div>
                    )}
                  </div>
                </Section>

                <Section title="روابط ومواعيد">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={lbl}>الموقع الرسمي للمنحة</label>
                      <input value={form.official_url ?? ''} onChange={e => setF('official_url', e.target.value)} placeholder="https://..." dir="ltr" style={inp} />
                    </div>
                    <div>
                      <label style={lbl}>آخر موعد للتقديم</label>
                      <input type="date" value={form.deadline ?? ''} onChange={e => setF('deadline' as any, e.target.value)} style={inp} dir="ltr" />
                    </div>
                  </div>
                </Section>
              </div>
            )}

            {/* ── TAB: CONTENT ── */}
            {activeTab === 'content' && (
              <div>
                <Section title="الوصف والمزايا">
                  <div style={{ marginBottom: 12 }}>
                    <label style={lbl}>وصف المنحة</label>
                    <textarea value={form.description_ar} onChange={e => setF('description_ar', e.target.value)} rows={4} style={{ ...inp, resize: 'vertical' }} placeholder="وصف تفصيلي عن المنحة..." />
                  </div>
                  <div>
                    <label style={lbl}>المزايا والمكرمات</label>
                    {form.benefits_ar.map((b, i) => (
                      <div key={i} style={{ display: 'flex', gap: 7, marginBottom: 7 }}>
                        <input value={b} onChange={e => { const a = [...form.benefits_ar]; a[i] = e.target.value; setF('benefits_ar', a) }} placeholder={`ميزة ${i + 1}`} style={{ ...inp, flex: 1 }} />
                        <button onClick={() => setF('benefits_ar', form.benefits_ar.filter((_, j) => j !== i))} style={{ width: 32, border: 'none', background: '#fce8e8', borderRadius: 7, cursor: 'pointer', color: '#a32d2d', fontWeight: 800 }}>×</button>
                      </div>
                    ))}
                    <button onClick={() => setF('benefits_ar', [...form.benefits_ar, ''])} style={{ fontSize: 12, fontWeight: 700, color: '#2FA889', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>+ إضافة ميزة</button>
                  </div>
                </Section>

                <Section title="شروط المنحة">
                  {form.conditions.map((c, i) => (
                    <div key={i} style={{ background: '#f8fafc', borderRadius: 10, padding: '12px 14px', marginBottom: 10, border: '1px solid #e8eef5' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, marginBottom: 7 }}>
                        <input value={c.title_ar} onChange={e => listUpdate('conditions', i, { title_ar: e.target.value })} placeholder={`الشرط ${i + 1}`} style={inp} />
                        <button onClick={() => listRemove('conditions', i)} style={{ width: 30, border: 'none', background: '#fce8e8', borderRadius: 7, cursor: 'pointer', color: '#a32d2d', fontWeight: 800 }}>×</button>
                      </div>
                      <input value={c.desc_ar ?? ''} onChange={e => listUpdate('conditions', i, { desc_ar: e.target.value })} placeholder="تفاصيل إضافية (اختياري)" style={{ ...inp, fontSize: 12 }} />
                    </div>
                  ))}
                  <button onClick={() => listAdd('conditions')} style={{ fontSize: 12, fontWeight: 700, color: '#2FA889', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>+ إضافة شرط</button>
                </Section>

                <Section title="المستندات المطلوبة">
                  {form.documents.map((d, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr auto', gap: 8, marginBottom: 8 }}>
                      <input value={d.icon} onChange={e => listUpdate('documents', i, { icon: e.target.value })} style={{ ...inp, textAlign: 'center', padding: '9px 4px' }} />
                      <input value={d.name_ar} onChange={e => listUpdate('documents', i, { name_ar: e.target.value })} placeholder="اسم المستند" style={inp} />
                      <input value={d.note_ar ?? ''} onChange={e => listUpdate('documents', i, { note_ar: e.target.value })} placeholder="ملاحظة (اختياري)" style={{ ...inp, fontSize: 12 }} />
                      <button onClick={() => listRemove('documents', i)} style={{ width: 30, border: 'none', background: '#fce8e8', borderRadius: 7, cursor: 'pointer', color: '#a32d2d', fontWeight: 800 }}>×</button>
                    </div>
                  ))}
                  <button onClick={() => listAdd('documents')} style={{ fontSize: 12, fontWeight: 700, color: '#2FA889', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>+ إضافة مستند</button>
                </Section>

                <Section title="الخط الزمني">
                  {form.timeline.map((t, i) => (
                    <div key={i} style={{ background: '#f8fafc', borderRadius: 10, padding: '12px 14px', marginBottom: 10, border: '1px solid #e8eef5' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr auto', gap: 8, marginBottom: 7 }}>
                        <input value={t.date_label} onChange={e => listUpdate('timeline', i, { date_label: e.target.value })} placeholder="31 مايو 2026" style={inp} />
                        <input value={t.title_ar} onChange={e => listUpdate('timeline', i, { title_ar: e.target.value })} placeholder="عنوان الحدث" style={inp} />
                        <button onClick={() => listRemove('timeline', i)} style={{ width: 30, border: 'none', background: '#fce8e8', borderRadius: 7, cursor: 'pointer', color: '#a32d2d', fontWeight: 800 }}>×</button>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8 }}>
                        <input value={t.desc_ar ?? ''} onChange={e => listUpdate('timeline', i, { desc_ar: e.target.value })} placeholder="تفاصيل (اختياري)" style={{ ...inp, fontSize: 12 }} />
                        <label style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, color: '#4a6580', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                          <input type="checkbox" checked={t.is_past} onChange={e => listUpdate('timeline', i, { is_past: e.target.checked })} />
                          مضى
                        </label>
                      </div>
                    </div>
                  ))}
                  <button onClick={() => listAdd('timeline')} style={{ fontSize: 12, fontWeight: 700, color: '#2FA889', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>+ إضافة حدث</button>
                </Section>
              </div>
            )}

            {/* ── TAB: SEO ── */}
            {activeTab === 'seo' && (
              <div>
                <Section title="بيانات SEO">
                  <div style={{ marginBottom: 12 }}>
                    <label style={lbl}>Meta Title</label>
                    <input value={form.meta_title ?? ''} onChange={e => setF('meta_title', e.target.value)} placeholder="منحة DAAD الألمانية 2026 | UniPath" style={inp} />
                    <div style={{ fontSize: 10, color: '#8fa3b8', marginTop: 4 }}>{(form.meta_title ?? '').length} / 60 حرف</div>
                  </div>
                  <div>
                    <label style={lbl}>Meta Description</label>
                    <textarea value={form.meta_desc ?? ''} onChange={e => setF('meta_desc', e.target.value)} rows={3} placeholder="وصف مختصر يظهر في نتائج البحث..." style={{ ...inp, resize: 'vertical' }} />
                    <div style={{ fontSize: 10, color: '#8fa3b8', marginTop: 4 }}>{(form.meta_desc ?? '').length} / 160 حرف</div>
                  </div>
                  <div style={{ marginTop: 14, padding: '12px 14px', background: '#f0f4f8', borderRadius: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#4a6580', marginBottom: 6 }}>معاينة Google</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#1a0dab', marginBottom: 2 }}>{form.meta_title || form.name_ar || 'عنوان المنحة'}</div>
                    <div style={{ fontSize: 11, color: '#006621', marginBottom: 4 }}>unipathsdn.com/scholarships/{form.name_en ? form.name_en.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : 'slug'}</div>
                    <div style={{ fontSize: 12, color: '#545454' }}>{form.meta_desc || form.description_ar?.slice(0, 160) || 'الوصف سيظهر هنا...'}</div>
                  </div>
                </Section>
              </div>
            )}

            {/* Footer */}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 24, paddingTop: 18, borderTop: '1px solid #eef2f7' }}>
              <button onClick={() => setModalOpen(false)} style={{ padding: '9px 22px', border: '1px solid #e8eef5', background: '#fff', borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: 'pointer', color: '#4a6580', fontFamily: 'Cairo, sans-serif' }}>إلغاء</button>
              <button onClick={handleSave} disabled={saving || !form.name_ar || !form.name_en || !form.country} style={{
                padding: '9px 28px', background: '#1B3A5C', color: '#fff', border: 'none',
                borderRadius: 9, fontSize: 13, fontWeight: 800, cursor: saving ? 'not-allowed' : 'pointer',
                opacity: (!form.name_ar || !form.name_en || !form.country) ? .5 : 1, fontFamily: 'Cairo, sans-serif',
              } as React.CSSProperties}>
                {saving ? 'جاري الحفظ...' : editTarget ? '💾 حفظ التعديلات' : '✅ إضافة المنحة'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ DELETE CONFIRM ══ */}
      {deleteId && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 28, maxWidth: 360, width: '90%', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
            <div style={{ fontSize: 16, fontWeight: 900, color: '#1B3A5C', marginBottom: 8 }}>تأكيد الحذف</div>
            <div style={{ fontSize: 13, color: '#8fa3b8', marginBottom: 24, lineHeight: 1.7 }}>هذا الإجراء لا يمكن التراجع عنه — ستُحذف المنحة وكل بياناتها.</div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button onClick={() => setDeleteId(null)} style={{ padding: '9px 24px', border: '1px solid #e8eef5', background: '#fff', borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>إلغاء</button>
              <button onClick={handleDelete} style={{ padding: '9px 24px', background: '#e05555', color: '#fff', border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 800, cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>نعم، احذف</button>
            </div>
          </div>
        </div>
      )}

      {/* ── STYLES ── */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  )
}
