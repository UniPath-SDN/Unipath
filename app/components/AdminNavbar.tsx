'use client'
// components/AdminNavbar.tsx

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function AdminNavbar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_name')
    router.push('/admin-login')
  }

  return (
    <nav style={{
      background: '#122845',
      padding: '0 5%',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <Link href="/admin" style={{ color: '#fff', fontSize: 16, fontWeight: 900, textDecoration: 'none' }}>
          🎓 UniPath <span style={{ color: '#3cc4a0' }}>Admin</span>
        </Link>
        <div style={{ display: 'flex', gap: 16 }}>
          <Link href="/admin/cms" style={{
            color: pathname === '/admin/cms' ? '#3cc4a0' : 'rgba(255,255,255,.6)',
            fontSize: 13,
            fontWeight: 700,
            textDecoration: 'none',
          }}>
            📝 CMS
          </Link>
          <Link href="/admin/crm" style={{
            color: pathname === '/admin/crm' ? '#3cc4a0' : 'rgba(255,255,255,.6)',
            fontSize: 13,
            fontWeight: 700,
            textDecoration: 'none',
          }}>
            👥 CRM
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ color: 'rgba(255,255,255,.5)', fontSize: 12 }}>
          {localStorage.getItem('admin_name') || 'Admin'}
        </span>
        <button
          onClick={handleLogout}
          style={{
            background: 'rgba(255,255,255,.1)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,.15)',
            padding: '6px 18px',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'Cairo, sans-serif',
          }}
        >
          تسجيل خروج
        </button>
      </div>
    </nav>
  )
}