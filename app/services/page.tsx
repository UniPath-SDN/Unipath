import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'خدمات التقديم على المنح الدراسية',
  description:
    'خدمات التقديم على المنح الدراسية والجامعات، وكتابة خطاب النية، وخطابات التوصية، وإعداد السيرة الذاتية والترجمة.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'خدمات التقديم على المنح الدراسية | UniPath',
    description:
      'جهّز ملفك الأكاديمي وقدّم على المنح والجامعات بخطوات واضحة ودعم متخصص.',
    url: 'https://www.unipathsdn.com/services',
    type: 'website',
  },
}

// 1. نقلنا بيانات الـ SEO هنا
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "UniPath SDN",
  "url": "https://www.unipathsdn.com/services",
  "description": "خدمات التقديم على المنح الدراسية والجامعات، كتابة خطاب النية وخطابات التوصية وإعداد السيرة الذاتية والترجمة.",
  "areaServed": ["السودان", "مصر", "العالم"],
  "serviceType": ["التقديم على المنح الدراسية", "كتابة خطاب النية", "خطابات التوصية", "إعداد السيرة الذاتية", "ترجمة المستندات"],
  "sameAs": ["https://wa.me/201500276855"]
};

export default function ServicesPage() {
  return (
    <>
      {/* 2. ضفنا الـ script هنا */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesClient />
    </>
  )
}