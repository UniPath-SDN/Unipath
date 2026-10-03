import type { Metadata } from 'next'
import EgyptGuideClient from './EgyptGuideClient'

export const metadata: Metadata = {
  title: 'الدراسة في مصر للطلاب السودانيين | دليل شامل',
  description:
    'دليل الدراسة في مصر للطلاب السودانيين: الجامعات، القبول، التكاليف، المنح، التأشيرة والإقامة.',
  alternates: {
    canonical: '/guides/egypt',
  },
  openGraph: {
    title: 'الدراسة في مصر للطلاب السودانيين | دليل شامل',
    description:
      'كل ما يحتاجه الطالب السوداني للدراسة في الجامعات المصرية.',
    url: 'https://www.unipathsdn.com/guides/egypt',
    type: 'article',
  },
}

export default function EgyptGuidePage( ) {
  return <EgyptGuideClient />
}
