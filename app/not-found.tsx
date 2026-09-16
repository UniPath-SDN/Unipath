// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      textAlign: 'center',
      padding: 20,
      background: '#f4f7fb',
      fontFamily: 'Cairo, sans-serif',
    }}>
      <div style={{ fontSize: 80, marginBottom: 20 }}>🔍</div>
      <h1 style={{ fontSize: 32, fontWeight: 900, color: '#1B3A5C', marginBottom: 12 }}>
        الصفحة غير متوفرة حالياً
      </h1>
      <p style={{ fontSize: 16, color: '#8fa3b8', marginBottom: 30 }}>
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم حذفها
      </p>
      <Link 
        href="/" 
        style={{
          background: '#2FA889',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: 50,
          textDecoration: 'none',
          fontWeight: 700,
        }}
      >
        ← العودة للصفحة الرئيسية
      </Link>
    </div>
  )
}