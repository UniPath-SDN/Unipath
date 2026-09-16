import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  // ✅ العنوان الأساسي
  title: {
    default: 'UniPath | منصة المنح الدراسية',
    template: '%s | UniPath',
  },

  // ✅ الوصف
  description: 'منصة UniPath — مختصون في المنح الدراسية والتقديم على الجامعات العالمية، فرص التطوع، الكورسات، القبولات الخاصة، وخدمات الوثائق الأكاديمية.',

  // ✅ الكلمات المفتاحية
  keywords: [
    'منح دراسية',
    'المنح الدراسية',
    'UniPath',
    'التقديم على المنح',
    'القبولات الخاصة',
    'دراسة في الخارج',
    'خطاب النية',
    'خطاب التوصية',
    'سيرة ذاتية',
  ],

  // ✅ معلومات الموقع
  metadataBase: new URL('https://unipathsdn.com'),

  // ✅ Open Graph (للسوشيال ميديا)
  openGraph: {
    title: 'UniPath | منصة المنح الدراسية',
    description: 'منصة متكاملة لإدارة المنح الدراسية والتقديم على الجامعات العالمية',
    url: 'https://unipathsdn.com',
    siteName: 'UniPath',
    locale: 'ar_SA',
    type: 'website',
  },

  // ✅ Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'UniPath | منصة المنح الدراسية',
    description: 'منصة متكاملة لإدارة المنح الدراسية',
  },

  // ✅ للتحكم في الفهرسة
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ✅ أيقونة الموقع
  icons: {
    icon: './public/logo.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" >
      <body>{children}</body>
    </html>
  )
}