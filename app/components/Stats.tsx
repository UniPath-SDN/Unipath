'use client'
// app/components/Stats.tsx

import { useState, useEffect } from 'react'

type Stat = {
  id: string
  prefix?: string
  value: string
  label: string
  description?: string
}

export default function Stats() {
  const [stats, setStats] = useState<Stat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats/`)
        if (!res.ok) throw new Error('Failed to fetch stats')
        const data = await res.json()
        setStats(data)
      } catch (error) {
        console.error('Error fetching stats:', error)
        // ✅ بيانات احتياطية في حالة الخطأ
        setStats([
          { id: 'students', prefix: '+', value: '1K', label: 'طالب تم مساعدتهم', description: 'حول العالم' },
          { id: 'countries', prefix: '+', value: '37', label: 'دولة ووجهة', description: 'دراسية' },
          { id: 'success', prefix: '', value: '65%', label: 'نسبة نجاح', description: 'الطلبات' },
          { id: 'partners', prefix: '+', value: '30', label: 'شراكات منح', description: 'نشطة' },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <section className="stats">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="stat-item" style={{ opacity: 0.5 }}>
            <div className="stat-num">---</div>
            <div className="stat-label">جاري التحميل...</div>
          </div>
        ))}
      </section>
    )
  }

  return (
    <section className="stats">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-item">
          <div className="stat-num">
            {stat.prefix}
            <span>{stat.value}</span>
          </div>
          <div className="stat-label">
            {stat.label}
            {stat.description && (
              <>
                <br />
                {stat.description}
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}