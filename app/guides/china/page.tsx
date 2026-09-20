import type { Metadata } from 'next'
import ChinaGuideClient from './ChinaGuideClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://unipathsdn.com' ),

  title: {
    default: 'الدراسة في الصين والمنح الصينية CSC | دليل شامل',
    template: '%s | دليل الدراسة في الصين',
  },

  description:
    'دليل شامل للدراسة في الصين يشمل القبول الجامعي، منحة CSC، امتحان CSCA، متطلبات اللغة، التأشيرة الصينية X1 وX2، المستندات وخطوات التقديم.',

  keywords: [
    'الدراسة في الصين',
    'منحة CSC',
    'المنحة الصينية',
    'الدراسة في الصين للعرب',
    'امتحان CSCA',
    'تأشيرة الصين X1',
    'تأشيرة الصين X2',
    'القبول الجامعي في الصين',
    'الجامعات الصينية',
  ],

  authors: [
    {
      name: 'اسم الموقع أو المؤسسة',
      url: 'https://unipathsdn.com',
    },
  ],

  creator: 'اسم الموقع أو المؤسسة',
  publisher: 'اسم الموقع أو المؤسسة',

  alternates: {
    canonical: 'https://unipathsdn.com/guides/china',
    languages: {
      ar: 'https://unipathsdn.com/guides/china',
      en: 'https://unipathsdn.com/en/guides/china',
    },
  },

  openGraph: {
    type: 'article',
    locale: 'ar_AR',
    url: 'https://unipathsdn.com/guides/china',
    siteName: 'UniPath',
    title: 'الدراسة في الصين والمنح الصينية CSC',
    description:
      'كل ما تحتاج معرفته عن القبول الجامعي، المنح، CSCA، التأشيرة الصينية والوثائق المطلوبة.',
    images: [
      {
        url: '/images/china-study-guide-og.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل الدراسة في الصين والمنح الصينية',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'الدراسة في الصين والمنح الصينية CSC',
    description:
      'دليل شامل للقبول والمنح وامتحان CSCA والتأشيرة الصينية.',
    images: ['/images/china-study-guide-og.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function ChinaGuidePage( ) {
  return <ChinaGuideClient />
}
