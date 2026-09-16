// app/scholarships/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ScholarshipDetailClient from './ScholarshipDetailClient'

type Props = { params: { slug: string } }

// ✅ بيانات احتياطية في حالة فشل الـ API
const FALLBACK_SCHOLARSHIPS: Record<string, any> = {
  'daad-germany-2026': {
    id: '1',
    slug: 'daad-germany-2026',
    name_ar: 'منحة DAAD الألمانية 2026',
    name_en: 'DAAD Germany Scholarship 2026',
    country: 'ألمانيا',
    country_flag: '🇩🇪',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    status: 'PUBLISHED',
    description_ar: 'منحة DAAD هي واحدة من أشهر المنح الدراسية في العالم، تقدمها الحكومة الألمانية للطلاب الدوليين من جميع التخصصات. تغطي المنحة جميع تكاليف الدراسة والمعيشة في ألمانيا لمدة تصل إلى 4 سنوات.',
    benefits_ar: [
      'تغطية كاملة للرسوم الدراسية',
      'بدل معيشة شهري 934 يورو',
      'تأمين صحي شامل',
      'تذاكر سفر سنوية',
      'دورات لغة ألمانية مجانية',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'الحصول على شهادة البكالوريوس بمعدل لا يقل عن جيد جداً', desc_ar: 'تقدير 3.0 أو أعلى حسب النظام الألماني' },
      { id: 'c2', order: 2, title_ar: 'إجادة اللغة الإنجليزية (IELTS 6.5 أو TOEFL 90)', desc_ar: 'أو إجادة اللغة الألمانية بمستوى B2' },
      { id: 'c3', order: 3, title_ar: 'خبرة عملية لا تقل عن سنتين في مجال التخصص', desc_ar: 'يفضل خبرة في مجال البحث العلمي' },
      { id: 'c4', order: 4, title_ar: 'خطابي توصية من أساتذة جامعيين', desc_ar: 'يفضل من أساتذة في نفس التخصص' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية (CV)', note_ar: 'بصيغة Europass', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية (SOP)', note_ar: 'حد أقصى 1000 كلمة', icon: '📝' },
      { id: 'd3', order: 3, name_ar: 'خطابي توصية', note_ar: 'من أساتذة أو مشرفين', icon: '📋' },
      { id: 'd4', order: 4, name_ar: 'شهادة اللغة', note_ar: 'IELTS أو TOEFL', icon: '🌐' },
      { id: 'd5', order: 5, name_ar: 'كشف الدرجات', note_ar: 'مترجم ومعتمد', icon: '📊' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '1 يناير 2026', title_ar: 'بدء التقديم', desc_ar: 'فتح باب التقديم للمنحة', is_past: false },
      { id: 't2', order: 2, date_label: '31 مارس 2026', title_ar: 'آخر موعد للتقديم', desc_ar: 'يجب إرسال الملفات كاملة', is_past: false },
      { id: 't3', order: 3, date_label: '15 مايو 2026', title_ar: 'إعلان المقابلات', desc_ar: 'سيتم إرسال الدعوات للمقابلة', is_past: false },
      { id: 't4', order: 4, date_label: '1 يوليو 2026', title_ar: 'إعلان النتائج النهائية', desc_ar: 'سيتم إرسال القبول للطلاب المختارين', is_past: false },
    ],
    official_url: 'https://www.daad.de/en/',
    deadline: '2026-03-31',
    views: 1247,
    applications: 89,
    image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
  'chevening-uk-2026': {
    id: '2',
    slug: 'chevening-uk-2026',
    name_ar: 'منحة Chevening البريطانية',
    name_en: 'Chevening UK Scholarship 2026',
    country: 'بريطانيا',
    country_flag: '🇬🇧',
    funding_type: 'FULL',
    levels: ['MASTERS'],
    status: 'PUBLISHED',
    description_ar: 'منحة Chevening هي برنامج المنح الدراسية الرائد في المملكة المتحدة، تهدف إلى تطوير القيادة المستقبلية.',
    benefits_ar: [
      'تغطية الرسوم الدراسية كاملة',
      'بدل معيشة شهري',
      'تذاكر سفر ذهاب وعودة',
      'تأمين صحي',
      'برامج تطوير قيادية',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'خبرة عمل سنتين على الأقل', desc_ar: 'خبرة مهنية أو تطوعية' },
      { id: 'c2', order: 2, title_ar: 'شهادة جامعية بدرجة جيد على الأقل', desc_ar: 'من جامعة معترف بها' },
      { id: 'c3', order: 3, title_ar: 'إجادة اللغة الإنجليزية', desc_ar: 'IELTS 6.5 أو أعلى' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية (CV)', note_ar: '', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية (SOP)', note_ar: 'يشرح أسباب التقديم', icon: '📝' },
      { id: 'd3', order: 3, name_ar: 'خطابي توصية', note_ar: 'من مشرفين أو أساتذة', icon: '📋' },
      { id: 'd4', order: 4, name_ar: 'شهادة اللغة', note_ar: 'IELTS أو TOEFL', icon: '🌐' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '1 أغسطس 2026', title_ar: 'بدء التقديم', is_past: false },
      { id: 't2', order: 2, date_label: '5 نوفمبر 2026', title_ar: 'آخر موعد للتقديم', is_past: false },
      { id: 't3', order: 3, date_label: 'فبراير 2027', title_ar: 'إعلان النتائج', is_past: false },
    ],
    official_url: 'https://www.chevening.org/',
    deadline: '2026-11-05',
    views: 2341,
    applications: 156,
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
  'turkey-burslari-2026': {
    id: '3',
    slug: 'turkey-burslari-2026',
    name_ar: 'منحة تركيا Bursları',
    name_en: 'Turkey Bursları 2026',
    country: 'تركيا',
    country_flag: '🇹🇷',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    status: 'PUBLISHED',
    description_ar: 'منحة تركيا Bursları هي برنامج منح حكومي تركي يغطي جميع التخصصات للطلاب الدوليين.',
    benefits_ar: [
      'تغطية الرسوم الدراسية',
      'بدل معيشة شهري 800 ليرة تركية',
      'سكن جامعي مجاني',
      'تأمين صحي',
      'دورات لغة تركية',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'شهادة ثانوية للبكالوريوس أو بكالوريوس للدراسات العليا', desc_ar: 'بتقدير لا يقل عن 70%' },
      { id: 'c2', order: 2, title_ar: 'إجادة اللغة الإنجليزية أو التركية', desc_ar: 'TOEFL أو IELTS أو TÖMER' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية', note_ar: '', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية', note_ar: '', icon: '📝' },
      { id: 'd3', order: 3, name_ar: 'شهادات دراسية', note_ar: 'مترجمة', icon: '📜' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '10 يناير 2026', title_ar: 'بدء التقديم', is_past: false },
      { id: 't2', order: 2, date_label: '20 فبراير 2026', title_ar: 'آخر موعد', is_past: false },
    ],
    official_url: 'https://www.turkiyeburslari.gov.tr/',
    deadline: '2026-02-20',
    views: 1543,
    applications: 203,
    image_url: 'https://images.unsplash.com/photo-1527838832700-5052e1d6e7c8?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
  'fulbright-usa-2026': {
    id: '4',
    slug: 'fulbright-usa-2026',
    name_ar: 'منحة Fulbright الأمريكية',
    name_en: 'Fulbright USA 2026',
    country: 'أمريكا',
    country_flag: '🇺🇸',
    funding_type: 'FULL',
    levels: ['MASTERS', 'PHD'],
    status: 'PUBLISHED',
    description_ar: 'برنامج فولبرايت هو برنامج تبادل أكاديمي رائد تموله الحكومة الأمريكية للطلاب والباحثين الدوليين.',
    benefits_ar: [
      'تغطية الرسوم الدراسية',
      'بدل معيشة شهري',
      'تذاكر سفر',
      'تأمين صحي',
      'دعم بحثي',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'شهادة جامعية', desc_ar: 'تقدير ممتاز' },
      { id: 'c2', order: 2, title_ar: 'إجادة اللغة الإنجليزية', desc_ar: 'TOEFL 90+ أو IELTS 7+' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية', note_ar: '', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية', note_ar: '', icon: '📝' },
      { id: 'd3', order: 3, name_ar: 'خطابات توصية', note_ar: 'ثلاثة خطابات', icon: '📋' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '1 مارس 2026', title_ar: 'بدء التقديم', is_past: false },
      { id: 't2', order: 2, date_label: '15 أكتوبر 2026', title_ar: 'آخر موعد', is_past: false },
    ],
    official_url: 'https://foreign.fulbrightonline.org/',
    deadline: '2026-10-15',
    views: 1876,
    applications: 112,
    image_url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
  'erasmus-europe-2026': {
    id: '5',
    slug: 'erasmus-europe-2026',
    name_ar: 'منحة Erasmus+ الأوروبية',
    name_en: 'Erasmus+ Europe 2026',
    country: 'أوروبا',
    country_flag: '🇪🇺',
    funding_type: 'PARTIAL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    status: 'PUBLISHED',
    description_ar: 'برنامج Erasmus+ هو برنامج الاتحاد الأوروبي للتعليم والتدريب والشباب والرياضة.',
    benefits_ar: [
      'مساعدة مالية شهرية',
      'تغطية جزئية للرسوم',
      'فرصة الدراسة في عدة دول',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'طالب مسجل في جامعة', desc_ar: 'في إحدى الدول المشاركة' },
      { id: 'c2', order: 2, title_ar: 'إجادة اللغة', desc_ar: 'حسب متطلبات الجامعة المضيفة' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية', note_ar: '', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية', note_ar: '', icon: '📝' },
      { id: 'd3', order: 3, name_ar: 'كشف الدرجات', note_ar: '', icon: '📊' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '1 يناير 2026', title_ar: 'بدء التقديم', is_past: false },
      { id: 't2', order: 2, date_label: '28 فبراير 2026', title_ar: 'آخر موعد', is_past: false },
    ],
    official_url: 'https://erasmus-plus.ec.europa.eu/',
    deadline: '2026-02-28',
    views: 956,
    applications: 67,
    image_url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
  'australia-awards-2026': {
    id: '6',
    slug: 'australia-awards-2026',
    name_ar: 'منحة Australia Awards',
    name_en: 'Australia Awards 2026',
    country: 'أستراليا',
    country_flag: '🇦🇺',
    funding_type: 'FULL',
    levels: ['MASTERS', 'PHD'],
    status: 'PUBLISHED',
    description_ar: 'منحة Australia Awards هي برنامج منح دراسية ممول من الحكومة الأسترالية لطلاب الدول النامية.',
    benefits_ar: [
      'تغطية الرسوم الدراسية',
      'بدل معيشة',
      'تذاكر سفر',
      'تأمين صحي',
      'دعم أكاديمي',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'شهادة جامعية', desc_ar: 'تقدير جيد' },
      { id: 'c2', order: 2, title_ar: 'خبرة عمل', desc_ar: 'سنتين على الأقل' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية', note_ar: '', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية', note_ar: '', icon: '📝' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '1 فبراير 2026', title_ar: 'بدء التقديم', is_past: false },
      { id: 't2', order: 2, date_label: '30 يوليو 2026', title_ar: 'آخر موعد', is_past: false },
    ],
    official_url: 'https://www.dfat.gov.au/people-to-people/australia-awards',
    deadline: '2026-07-30',
    views: 1123,
    applications: 78,
    image_url: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
  'csc-china-2026': {
    id: '7',
    slug: 'csc-china-2026',
    name_ar: 'منحة الحكومة الصينية CSC',
    name_en: 'CSC China Scholarship 2026',
    country: 'الصين',
    country_flag: '🇨🇳',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    status: 'PUBLISHED',
    description_ar: 'منحة الحكومة الصينية CSC هي برنامج منح دراسية ممول من الحكومة الصينية للطلاب الدوليين.',
    benefits_ar: [
      'تغطية الرسوم الدراسية',
      'سكن جامعي مجاني',
      'بدل معيشة شهري',
      'تأمين صحي',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'شهادة جامعية', desc_ar: 'تقدير جيد' },
      { id: 'c2', order: 2, title_ar: 'إجادة اللغة', desc_ar: 'HSK أو IELTS' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية', note_ar: '', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية', note_ar: '', icon: '📝' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '1 أبريل 2026', title_ar: 'بدء التقديم', is_past: false },
      { id: 't2', order: 2, date_label: '1 يونيو 2026', title_ar: 'آخر موعد', is_past: false },
    ],
    official_url: 'https://www.campuschina.org/',
    deadline: '2026-06-01',
    views: 987,
    applications: 134,
    image_url: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
  'japan-mext-2026': {
    id: '8',
    slug: 'japan-mext-2026',
    name_ar: 'منحة MEXT اليابانية',
    name_en: 'MEXT Japan Scholarship 2026',
    country: 'اليابان',
    country_flag: '🇯🇵',
    funding_type: 'FULL',
    levels: ['BACHELORS', 'MASTERS', 'PHD'],
    status: 'PUBLISHED',
    description_ar: 'منحة MEXT هي برنامج منح دراسية ممول من الحكومة اليابانية للطلاب الدوليين.',
    benefits_ar: [
      'تغطية الرسوم الدراسية',
      'بدل معيشة شهري 117,000 ين',
      'تذاكر سفر',
      'تأمين صحي',
    ],
    conditions: [
      { id: 'c1', order: 1, title_ar: 'شهادة جامعية', desc_ar: 'تقدير جيد' },
      { id: 'c2', order: 2, title_ar: 'إجادة اللغة', desc_ar: 'اليابانية أو الإنجليزية' },
    ],
    documents: [
      { id: 'd1', order: 1, name_ar: 'السيرة الذاتية', note_ar: '', icon: '📄' },
      { id: 'd2', order: 2, name_ar: 'خطاب النية', note_ar: '', icon: '📝' },
    ],
    timeline: [
      { id: 't1', order: 1, date_label: '1 أبريل 2026', title_ar: 'بدء التقديم', is_past: false },
      { id: 't2', order: 2, date_label: '15 مايو 2026', title_ar: 'آخر موعد', is_past: false },
    ],
    official_url: 'https://www.studyinjapan.go.jp/en/',
    deadline: '2026-05-15',
    views: 876,
    applications: 95,
    image_url: 'https://images.unsplash.com/photo-1542051841857-5f90085f0c56?w=400&h=300&fit=crop', // ✅ صورة المنحة
  },
}

async function getScholarship(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/scholarships/${slug}/`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) {
      // ✅ إذا فشل الـ API، استخدم البيانات الوهمية
      return FALLBACK_SCHOLARSHIPS[slug] || null
    }
    return res.json()
  } catch {
    // ✅ في حالة خطأ، استخدم البيانات الوهمية
    return FALLBACK_SCHOLARSHIPS[slug] || null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = await getScholarship(params.slug)
  if (!s) return { title: 'منحة غير موجودة' }
  return {
    title: `${s.name_ar} | UniPath`,
    description: s.description_ar?.slice(0, 160),
  }
}

export default async function ScholarshipDetailPage({ params }: Props) {
  const scholarship = await getScholarship(params.slug)
  
  if (!scholarship) notFound()
  
  return <ScholarshipDetailClient scholarship={scholarship} />
}