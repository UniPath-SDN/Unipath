import type { Metadata } from 'next'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة | UniPath',
  description: 'إجابات واضحة على كل ما يدور في بالك قبل التقديم',
}

export default function FaqPage() {
  return <FaqClient />
}