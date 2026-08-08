'use client'
// app/components/HeroVisual.tsx

import { useState, useEffect } from 'react'

// ✅ بيانات وهمية للمنح الحالية
const MOCK_SCHOLARSHIPS = [
  {
    id: 1,
    country: '🇩🇪',
    name: 'منحة DAAD الألمانية',
    field: 'هندسة',
    funding: 'تمويل كامل',
    deadline: '31 مارس',
    progress: 72,
  },
  {
    id: 2,
    country: '🇬🇧',
    name: 'منحة Chevening',
    field: 'علوم سياسية',
    funding: 'تمويل كامل',
    deadline: '5 نوفمبر',
    progress: 45,
  },
  {
    id: 3,
    country: '🇺🇸',
    name: 'منحة Fulbright',
    field: 'علوم حاسوب',
    funding: 'تمويل كامل',
    deadline: '15 أكتوبر',
    progress: 90,
  },
]

// ✅ بيانات وهمية للإشعارات العائمة
const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    icon: '✅',
    title: 'تم التحقق من الوثائق',
    time: 'للتو',
    type: 'green',
  },
  {
    id: 2,
    icon: '🎓',
    title: 'تم القبول!',
    name: 'أحمد · Chevening UK',
    type: 'blue',
  },
]

export default function HeroVisual() {
  const [currentScholarship, setCurrentScholarship] = useState(MOCK_SCHOLARSHIPS[0])
  const [notifications] = useState(MOCK_NOTIFICATIONS)

  // ✅ تغيير البطاقة كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScholarship(prev => {
        const currentIndex = MOCK_SCHOLARSHIPS.findIndex(s => s.id === prev.id)
        const nextIndex = (currentIndex + 1) % MOCK_SCHOLARSHIPS.length
        return MOCK_SCHOLARSHIPS[nextIndex]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-visual">
      <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
        
        {/* ✅ البطاقة الرئيسية */}
        <div className="hero-card-main">
          <div className="card-label">الطلب الحالي</div>
          <div className="card-title-h">
            {currentScholarship.country} {currentScholarship.name}
          </div>
          <div className="card-sub">
            {currentScholarship.field} · {currentScholarship.funding} · الموعد: {currentScholarship.deadline}
          </div>
          <div className="progress-label">
            <span>تقدم الطلب</span>
            <span>{currentScholarship.progress}%</span>
          </div>
          <div className="progress-bg">
            <div className="progress-fill" style={{ width: `${currentScholarship.progress}%` }} />
          </div>
        </div>

        {/* ✅ الإشعارات العائمة */}
        {notifications.map((notif, index) => (
          <div 
            key={notif.id}
            className={`float-badge-hero b${index + 1}`}
            style={{ animationDelay: `${index * 2}s` }}
          >
            <div className={`badge-icon ${notif.type}`}>
              {notif.icon}
            </div>
            <div>
              <div style={{ fontSize: ".8rem", fontWeight: 800, color: "#1B3A5C" }}>
                {notif.title}
              </div>
              <div style={{ fontSize: ".72rem", color: notif.type === 'green' ? "#8fa3b8" : "#2FA889" }}>
                {notif.time || notif.name}
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}