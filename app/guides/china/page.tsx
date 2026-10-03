import type { Metadata } from 'next'
import ChinaGuideClient from './ChinaGuideClient'

const siteUrl = 'https://www.unipathsdn.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ),

  title: {
    default: 'الدراسة في الصين والمنح الصينية CSC | دليل شامل',
    template: '%s | UniPath',
  },

  description:
    'دليل شامل للدراسة في الصين للطلاب السودانيين والعرب، ويشمل القبول الجامعي، منحة CSC، امتحان CSCA، متطلبات اللغة، التأشيرة الصينية X1 وX2، المستندات وخطوات التقديم.',

  keywords: [
    'الدراسة في الصين',
    'منحة CSC',
    'المنحة الصينية',
    'الدراسة في الصين للسودانيين',
    'الدراسة في الصين للعرب',
    'امتحان CSCA',
    'تأشيرة الصين X1',
    'تأشيرة الصين X2',
    'القبول الجامعي في الصين',
    'الجامعات الصينية',
  ],

  authors: [
    {
      name: 'UniPath',
      url: siteUrl,
    },
  ],

  creator: 'UniPath',
  publisher: 'UniPath',

  alternates: {
    canonical: '/guides/china',
  },

  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    url: `${siteUrl}/guides/china`,
    siteName: 'UniPath',
    title: 'الدراسة في الصين والمنح الصينية CSC | دليل شامل',
    description:
      'كل ما تحتاج معرفته عن القبول الجامعي في الصين، المنح الصينية، منحة CSC، امتحان CSCA، التأشيرة والوثائق المطلوبة.',
    images: [
      {
        url: '/images/china-study-guide-og.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل الدراسة في الصين والمنح الصينية CSC',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'الدراسة في الصين والمنح الصينية CSC | دليل شامل',
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

export default function ChinaGuidePage() {
  return <ChinaGuideClient />
}
