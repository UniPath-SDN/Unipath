// components/guides/GuideAccordion.tsx
'use client'

import { useState } from 'react'
import { ChevronDown, CheckCircle, FileText, Award, Globe, GraduationCap, BookOpen, Home } from 'lucide-react'

type AccordionItem = {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function GuideAccordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            style={{
              background: '#fff',
              borderRadius: 16,
              border: `1.5px solid ${isOpen ? '#2FA889' : '#e8eef5'}`,
              overflow: 'hidden',
              transition: 'all .3s',
              boxShadow: isOpen ? '0 8px 30px rgba(47,168,137,.1)' : 'none',
            }}
          >
            {/* HEADER */}
            <button
              onClick={() => toggle(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '16px 20px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Cairo, sans-serif',
                textAlign: 'right',
                transition: 'all .2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: isOpen ? '#e6f7f3' : '#f0f4f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isOpen ? '#2FA889' : '#4a6580',
                  transition: 'all .3s',
                }}>
                  {item.icon}
                </div>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: isOpen ? '#1B3A5C' : '#4a6580',
                  transition: 'color .2s',
                }}>
                  {item.title}
                </span>
              </div>
              <ChevronDown
                size={20}
                style={{
                  color: '#8fa3b8',
                  transition: 'transform .3s',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                }}
              />
            </button>

            {/* CONTENT */}
            {isOpen && (
              <div style={{
                padding: '0 20px 20px 20px',
                borderTop: '1px solid #f0f4f8',
                paddingTop: 18,
              }}>
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}