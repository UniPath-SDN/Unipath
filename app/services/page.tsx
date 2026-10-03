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

export default function ServicesPage( ) {
  return <ServicesClient />
}
