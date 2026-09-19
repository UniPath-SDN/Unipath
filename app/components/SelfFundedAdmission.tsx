// components/SelfFundedAdmission.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import './SelfFundedAdmission.css' 
import {
  ShieldCheck,
  ChevronLeft,
  GraduationCap,
  Globe,
  Users,
  CheckCircle,
  Target,
  BookOpen,
  MapPin,
  Calendar,
  Clock,
  Award,
  MessageCircle,
  Building2,
  FileText,
  Plane,
  Home,
} from 'lucide-react'

// ✅ بيانات الدراسة على النفقة الخاصة
const SELF_FUNDED_DATA = [
  {
    id: 'egypt',
    name_ar: 'مصر',
    name_en: 'Egypt',
    flag: '🇪🇬',
    image: 'https://images.unsplash.com/photo-1548126033-3b182e6f2e9c?w=400&h=300&fit=crop',
    description: 'وجهة دراسية رائدة للطلاب السودانيين مع خصم 70% في الجامعات الحكومية.',
    universities: [
      { name: 'جامعة القاهرة', programs: ['طب', 'هندسة', 'قانون'], fees: '$2,500 - $4,000' },
      { name: 'جامعة عين شمس', programs: ['طب', 'صيدلة', 'هندسة'], fees: '$2,000 - $3,500' },
      { name: 'جامعة الإسكندرية', programs: ['طب', 'علوم', 'آداب'], fees: '$2,000 - $3,000' },
    ],
    features: ['خصم 70% للطلاب السودانيين', 'جامعات حكومية مرموقة', 'تكاليف معيشة منخفضة'],
    slug: 'egypt',
  },
  {
    id: 'turkey',
    name_ar: 'تركيا',
    name_en: 'Turkey',
    flag: '🇹🇷',
    image: 'https://images.unsplash.com/photo-1527838832700-5052e1d6e7c8?w=400&h=300&fit=crop',
    description: 'جامعات تركية مرموقة بتكاليف دراسية مناسبة وبيئة تعليمية متطورة.',
    universities: [
      { name: 'جامعة اسطنبول التقنية', programs: ['هندسة', 'عمارة', 'علوم حاسوب'], fees: '$2,500 - $4,000' },
      { name: 'جامعة أنقرة', programs: ['طب', 'قانون', 'اقتصاد'], fees: '$2,000 - $3,500' },
      { name: 'جامعة الشرق الأوسط التقنية', programs: ['هندسة', 'علوم', 'إدارة'], fees: '$2,500 - $4,500' },
    ],
    features: ['تأشيرة سهلة', 'تكاليف معيشة مناسبة', 'شهادات معترف بها دولياً'],
    slug: 'turkey',
  },
  {
    id: 'malaysia',
    name_ar: 'ماليزيا',
    name_en: 'Malaysia',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1518684076987-2e6b2a80b3d6?w=400&h=300&fit=crop',
    description: 'بيئة تعليمية عالمية بجودة بريطانية وتكاليف معيشة مناسبة.',
    universities: [
      { name: 'جامعة مالايا', programs: ['طب', 'هندسة', 'اقتصاد'], fees: '$3,000 - $5,000' },
      { name: 'جامعة بوترا ماليزيا', programs: ['زراعة', 'علوم', 'إدارة'], fees: '$2,500 - $4,000' },
    ],
    features: ['دراسة باللغة الإنجليزية', 'بيئة آمنة', 'شهادات معترف بها عالمياً'],
    slug: 'malaysia',
  },
  {
    id: 'russia',
    name_ar: 'روسيا',
    name_en: 'Russia',
    flag: '🇷🇺',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90085f0c56?w=400&h=300&fit=crop',
    description: 'جامعات روسية عريقة بتكاليف دراسية مناسبة وتخصصات طبية وهندسية متميزة.',
    universities: [
      { name: 'جامعة موسكو الحكومية', programs: ['طب', 'هندسة', 'فيزياء'], fees: '$4,000 - $6,000' },
      { name: 'جامعة سانت بطرسبرغ', programs: ['طب', 'قانون', 'علوم'], fees: '$3,500 - $5,500' },
    ],
    features: ['رسوم دراسية منخفضة', 'تعليم طبي متميز', 'شهادات معترف بها'],
    slug: 'russia',
  },
  {
    id: 'rwanda',
    name_ar: 'رواندا',
    name_en: 'Rwanda',
    flag: '🇷🇼',
    image: 'https://images.unsplash.com/photo-1560508182-cbb7f70d5104?w=400&h=300&fit=crop',
    description: 'وجهة دراسية ناشئة في أفريقيا ببيئة آمنة وتكاليف معقولة.',
    universities: [
      { name: 'جامعة رواندا', programs: ['طب', 'هندسة', 'علوم'], fees: '$2,000 - $3,500' },
    ],
    features: ['بيئة آمنة', 'تكاليف معيشة منخفضة', 'جامعات معترف بها'],
    slug: 'rwanda',
  },
]

export default function SelfFundedAdmission() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? SELF_FUNDED_DATA : SELF_FUNDED_DATA.slice(0, 3)

  return (
    <section className="self-funded-section" id="self-funded">
      <div className="self-funded-container">

        {/* ✅ HEADER */}
        <div className="section-header">
          <span className="section-eyebrow">🎓 دراسة على النفقة الخاصة</span>
          <h2>ادرس في أفضل الجامعات حول العالم</h2>
          <p>
            نقدم لك خيارات دراسية متنوعة في جامعات مرموقة حول العالم.
            نساعدك في الحصول على قبولك وتجهيز جميع المستندات والمتابعة حتى وصولك.
          </p>
        </div>

        {/* ✅ STATS */}
        <div className="self-funded-stats">
          <div className="stat-item">
            <div className="stat-number">{SELF_FUNDED_DATA.length}</div>
            <div className="stat-label">دولة متاحة</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">
              {SELF_FUNDED_DATA.reduce((acc, c) => acc + c.universities.length, 0)}
            </div>
            <div className="stat-label">جامعة شريكة</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">ضمان القبول</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24h</div>
            <div className="stat-label">دعم مستمر</div>
          </div>
        </div>

        {/* ✅ GRID */}
        <div className="self-funded-grid">
          {displayed.map((country) => (
            <Link
              key={country.id}
              href={`/self-funded/${country.slug}`}
              className="self-funded-card-link"
            >
              <div className="self-funded-card">
                <div className="self-funded-card-image" style={{ backgroundImage: `url(${country.image})` }}>
                  <div className="self-funded-card-flag">{country.flag}</div>
                  <div className="self-funded-card-overlay">
                    <span className="self-funded-card-count">
                      {country.universities.length} جامعة
                    </span>
                  </div>
                </div>
                <div className="self-funded-card-body">
                  <h3>{country.name_ar}</h3>
                  <p className="self-funded-card-desc">{country.description}</p>
                  <div className="self-funded-card-features">
                    {country.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="self-funded-card-feature">
                        <CheckCircle size={14} color="#2FA889" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="self-funded-card-footer">
                    <span className="self-funded-card-cta">
                      استعرض الجامعات <ChevronLeft size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ VIEW ALL */}
        {SELF_FUNDED_DATA.length > 3 && (
          <div className="self-funded-view-all">
            <button
              className="self-funded-view-all-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'عرض أقل' : `عرض كل الدول (${SELF_FUNDED_DATA.length})`}
              <ChevronLeft size={18} className={showAll ? 'rotated' : ''} />
            </button>
          </div>
        )}

        {/* ✅ SERVICES */}
        <div className="self-funded-services">
          <h3>📋 ماذا تشمل خدمتنا؟</h3>
          <div className="self-funded-services-grid">
            {[
              { icon: <FileText size={24} color="#2FA889" />, title: 'تجهيز الملف', desc: 'كتابة SOP، CV، خطابات التوصية وترجمة المستندات' },
              { icon: <Building2 size={24} color="#2FA889" />, title: 'التقديم للجامعات', desc: 'تقديم طلبك للجامعات المختارة ومتابعة القبول' },
              { icon: <Plane size={24} color="#2FA889" />, title: 'دعم التأشيرة', desc: 'مساعدتك في إجراءات التأشيرة والإقامة' },
              { icon: <Home size={24} color="#2FA889" />, title: 'ترتيب السكن', desc: 'مساعدتك في العثور على سكن مناسب' },
            ].map((service) => (
              <div key={service.title} className="self-funded-service">
                <div className="self-funded-service-icon">{service.icon}</div>
                <div>
                  <div className="self-funded-service-title">{service.title}</div>
                  <div className="self-funded-service-desc">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ CTA BANNER */}
        <div className="self-funded-cta-banner">
          <div className="self-funded-cta-content">
            <div className="self-funded-cta-icon">
              <Target size={32} color="#fff" />
            </div>
            <div>
              <h3>🎯 جاهز تبدأ رحلتك الدراسية؟</h3>
              <p>احصل على استشارتك المجانية الآن</p>
            </div>
            <a
              href="https://wa.me/201500276855?text=السلام%20عليكم،%20أريد%20الاستفسار%20عن%20الدراسة%20على%20النفقة%20الخاصة"
              target="_blank"
              rel="noopener noreferrer"
              className="self-funded-cta-btn"
            >
              <MessageCircle size={18} />
              استشارة مجانية
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}