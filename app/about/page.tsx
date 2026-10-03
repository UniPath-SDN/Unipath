import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'من نحن',
  description:
    'تعرّف على منصة UniPath وخدماتها في المنح الدراسية والقبول الجامعي.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
