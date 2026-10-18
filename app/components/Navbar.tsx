'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MessageCircle } from 'lucide-react'
import './navbar.css'
import LogoIcon from '@/app/components/LogoIcon'

const WA     = 'https://wa.me/201500276855'
const WA_MSG = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات UniPath')

type NavItem = { key: string; label: string; href: string }

const ITEMS: NavItem[] = [
  { key: 'home',         label: 'الرئيسية',         href: '/' },
  { key: 'scholarships', label: 'المنح الدراسية',   href: '/scholarships' },
  { key: 'services',     label: 'الخدمات والأسعار', href: '/services' },
  { key: 'self-funded',  label: 'دراسة في الخارج',  href: '/self-funded' },
  { key: 'guides',       label: 'دليل الطالب',      href: '/guides' },
  { key: 'how',          label: 'كيف نعمل',         href: '/#how' },
  { key: 'stories',      label: 'قصص النجاح',       href: '/#stories' },
  { key: 'faq',          label: 'الأسئلة الشائعة',  href: '/faq' },
]

export default function Navbar({ activePage = '' }: { activePage?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // ── ظل + تصغير بسيط بعد النزول في الصفحة
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── إغلاق القائمة بزر Esc
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen, closeMenu])

  // الرابط النشط: لو مررت activePage بيتقدّم، وإلا بنحدده من المسار تلقائياً.
  // روابط الأقسام (#how, #stories) ما بتكون "نشطة" أبداً.
  const isActive = (item: NavItem) => {
    if (item.href.includes('#')) return false
    if (activePage) return activePage === item.key
    return item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
  }

  return (
    <>
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`} aria-label="التنقل الرئيسي">
        <LogoIcon width={scrolled ? 50 : 62} height={scrolled ? 50 : 62} />

        <ul id="nav-links" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {ITEMS.map((item) => {
            const active = isActive(item)
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={active ? 'active' : ''}
                  aria-current={active ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li>
            <a
              href={`${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              onClick={closeMenu}
            >
              <MessageCircle size={18} aria-hidden="true" />
              ابدأ الآن
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="nav-menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* الـ overlay خارج الـ nav عمداً: الـ backdrop-filter على الـ nav بيخلّيه
          containing block لأي عنصر fixed جواه، فالـ overlay كان هيتقص بحجم الـ nav */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />}
    </>
  )
}
