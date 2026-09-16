// app/guides/page.tsx
'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BookOpen, Globe, GraduationCap, Users, Award, FileText, ChevronLeft } from 'lucide-react'

const GUIDES = [
  {
    id: 'egypt',
    name: 'مصر',
    flag: '🇪🇬',
    image: '/images/egypt-guide.jpg',
    description: 'دليل شامل للدراسة في الجامعات المصرية، نظام التعليم، المنح، والتأشيرات.',
    articles: 12,
    universities: '50+',
    color: '#1B3A5C',
  },
  {
    id: 'china',
    name: 'الصين',
    flag: '🇨🇳',
    image: '/images/china-guide.jpg',
    description: 'دليل شامل للدراسة في الصين، منحة CSC، الجامعات الصينية، والحياة الطلابية.',
    articles: 8,
    universities: '40+',
    color: '#DE2910',
  },
  {
    id: 'malaysia',
    name: 'ماليزيا',
    flag: '🇲🇾',
    image: '/images/malaysia-guide.jpg',
    description: 'دليل شامل للدراسة في ماليزيا، نظام التعليم، الجامعات، والتأشيرات.',
    articles: 6,
    universities: '30+',
    color: '#012169',
  },
  {
    id: 'turkey',
    name: 'تركيا',
    flag: '🇹🇷',
    image: '/images/turkey-guide.jpg',
    description: 'دليل شامل للدراسة في تركيا، الجامعات التركية، المنح، والحياة الطلابية.',
    articles: 7,
    universities: '35+',
    color: '#E30A17',
  },
]

export default function GuidesPage() {
  return (
    <div dir="rtl" style={{background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar activePage="guides" />

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #122845 0%, #1B3A5C 50%, #1a5c42 100%)',
        padding: 'clamp(60px, 8vw, 100px) 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }} className='mt-16'>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(47,168,137,.15)',
            border: '1px solid rgba(47,168,137,.4)',
            color: '#3cc4a0',
            padding: '6px 20px',
            borderRadius: 50,
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: 20,
          }}>
             أدلة الطالب
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            دليلك الشامل <span style={{ color: '#3cc4a0' }}>للدراسة في الخارج</span>
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 1.2vw, 18px)',
            color: 'rgba(255,255,255,.7)',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 2,
          }}>
            كل ما تحتاج معرفته عن الدراسة في أفضل الوجهات العالمية — من الجامعات والتأشيرات إلى المنح والحياة الطلابية.
          </p>
        </div>
      </div>

      {/* GUIDES GRID */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 60px) 5%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {GUIDES.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#fff',
                borderRadius: 18,
                border: '1px solid #e8eef5',
                overflow: 'hidden',
                transition: 'all .3s',
                cursor: 'pointer',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(27,58,92,.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  height: 140,
                  background: `linear-gradient(135deg, ${guide.color}dd, ${guide.color})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 56,
                  position: 'relative',
                }}>
                  <span>{guide.flag}</span>
                </div>
                <div style={{ padding: '20px 22px 22px' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#1B3A5C',
                    marginBottom: 4,
                  }}>
                    {guide.name}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#4a6580',
                    lineHeight: 1.7,
                    marginBottom: 12,
                  }}>
                    {guide.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    fontSize: '0.8rem',
                    color: '#8fa3b8',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <FileText size={14} />
                      {guide.articles} مقال
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <GraduationCap size={14} />
                      {guide.universities}
                    </span>
                  </div>
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