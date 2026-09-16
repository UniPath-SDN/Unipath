'use client'

import { useState } from 'react'
import Link from 'next/link'
import './navbar.css'
import LogoIcon from '@/app/components/LogoIcon'

const WA     = 'https://wa.me/249123456789'
const WA_MSG = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات UniPath')

export default function Navbar({ activePage = '' }: { activePage?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <LogoIcon width={62} height={62} />

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link href="/" className={activePage === 'scholarships' ? 'active' : ''}>الرئيسية</Link></li>
        <li><Link href="/scholarships" className={activePage === 'scholarships' ? 'active' : ''}>المنح الدراسية</Link></li>
        <li><Link href="/services"     className={activePage === 'services'     ? 'active' : ''}>خدماتنا</Link></li>
        <li><Link href="/self-funded"  className={activePage === 'self-funded'  ? 'active' : ''}> دراسة في الخارج</Link></li>
        <li><Link href="/guides"       className={activePage === 'guides'       ? 'active' : ''}> دليل الطالب</Link></li>
        <li><Link href="/#how"                                                                  >كيف نعمل</Link></li>
        <li><Link href="/#stories"                                                              >قصص النجاح</Link></li>
        <li><Link href="/faq"          className={activePage === 'faq'          ? 'active' : ''}>الأسئلة الشائعة</Link></li>
        <li>
          <a href={`${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
            ابدأ الآن
          </a>
        </li>
      </ul>

      <button className="nav-menu-btn" onClick={() => setMenuOpen(o => !o)}>☰</button>
    </nav>
  )
}