'use client'
// components/Testimonials.tsx
//
// يستبدل قسم #stories الحالي. ثلاثة أقسام داخلية، وكل قسم بيختفي لو مفيش فيه
// عناصر موافَق على نشرها:
//   1) شهادات الطلاب (بطاقات)      2) سكرينات واتساب (مع تكبير)
//   3) «وصلوا وجهتهم» (شبكة صور)
//
// المصدر: GET {NEXT_PUBLIC_API_URL}/api/testimonials/  (endpoint عام للقراءة فقط)
// ولو فشل أو مش متاح، بيرجع لـ data/testimonials.ts.

import { useCallback, useEffect, useState } from 'react'
import './testimonials.css'
import {
  STATIC_TESTIMONIALS,
  type TestimonialsData,
} from '../data/testimonials'

const API = process.env.NEXT_PUBLIC_API_URL

type LightboxState = { src: string; alt: string } | null

function onlyConsented<T extends { consent_given: boolean }>(items?: T[]): T[] {
  return (items ?? []).filter((i) => i.consent_given === true)
}

export default function Testimonials() {
  const [data, setData] = useState<TestimonialsData>(STATIC_TESTIMONIALS)
  const [lightbox, setLightbox] = useState<LightboxState>(null)

  // ── جلب البيانات من الـ API (إن وُجد)
  useEffect(() => {
    if (!API) return
    const ctrl = new AbortController()
    fetch(`${API}/api/testimonials/`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: Partial<TestimonialsData>) =>
        setData({
          stories: d.stories ?? [],
          screenshots: d.screenshots ?? [],
          arrivals: d.arrivals ?? [],
        })
      )
      .catch(() => {
        /* نكمل بالبيانات الاحتياطية */
      })
    return () => ctrl.abort()
  }, [])

  // ── Lightbox: إغلاق بـ Esc + منع تمرير الصفحة
  const closeLightbox = useCallback(() => setLightbox(null), [])
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeLightbox()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox, closeLightbox])

  const stories = onlyConsented(data.stories)
  const screenshots = onlyConsented(data.screenshots)
  const arrivals = onlyConsented(data.arrivals)

  // لا شهادات حقيقية بعد = لا قسم (أفضل من محتوى وهمي)
  if (!stories.length && !screenshots.length && !arrivals.length) return null

  return (
    <section className="stories" id="stories">
      <div className="section-header">
        <span className="section-eyebrow">شهادات الطلاب</span>
        <h2>طلاب حققوا أحلامهم</h2>
        <p>قصص حقيقية من طلاب حققوا أحلامهم بدعم يونيباث.</p>
      </div>

      {/* 1) بطاقات الشهادات */}
      {stories.length > 0 && (
        <div className="stories-grid">
          {stories.map((s, i) => (
            <div key={s.id} className="story-card">
              <div className="stars" aria-label="تقييم 5 من 5">★★★★★</div>
              <p className="story-text">{s.text}</p>
              <div className="author">
                <div className={`avatar av${(i % 3) + 1} ${s.photo_url ? 'has-photo' : ''}`}>
                  {s.photo_url ? (
                    <img src={s.photo_url} alt={s.name} loading="lazy" />
                  ) : (
                    s.name.trim().charAt(0)
                  )}
                </div>
                <div>
                  <div className="author-name">{s.name}</div>
                  <div className="author-dest">
                    {s.country_flag} {s.destination}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2) سكرينات واتساب */}
      {screenshots.length > 0 && (
        <div className="tm-block">
          <h3 className="tm-block-title">رسائل من طلابنا</h3>
          <div className="tm-shots">
            {screenshots.map((s) => (
              <button
                key={s.id}
                type="button"
                className="tm-shot"
                onClick={() =>
                  setLightbox({ src: s.image_url, alt: s.caption || 'رسالة من أحد طلابنا' })
                }
                aria-label="تكبير الصورة"
              >
                <img src={s.image_url} alt={s.caption || 'رسالة من أحد طلابنا'} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3) وصلوا وجهتهم */}
      {arrivals.length > 0 && (
        <div className="tm-block">
          <h3 className="tm-block-title">وصلوا وجهتهم</h3>
          <div className="tm-arrivals">
            {arrivals.map((a) => (
              <figure key={a.id} className="tm-arrival">
                <img
                  src={a.image_url}
                  alt={`${a.student_name} في ${a.place}`}
                  loading="lazy"
                />
                <figcaption>
                  <strong>{a.student_name}</strong>
                  <span>
                    {a.country_flag} {a.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="tm-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={closeLightbox}
        >
          <button type="button" className="tm-lightbox-close" onClick={closeLightbox} aria-label="إغلاق">
            ×
          </button>
          <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
