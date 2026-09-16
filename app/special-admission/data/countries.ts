// app/special-admission/data/countries.ts

export type University = {
  id: string
  name_ar: string
  name_en: string
  country: string
  country_flag: string
  city: string
  ranking?: string
  programs: string[]
  tuition_fee: string
  duration: string
  requirements: string[]
  documents: string[]
  image_url: string
  description_ar: string
  benefits_ar: string[]
  deadline?: string
  application_fee?: string
  scholarship_available?: boolean
}

export type CountryData = {
  id: string
  name_ar: string
  name_en: string
  flag: string
  image_url: string
  description_ar: string
  universities: University[]
  requirements: string[]
  visa_info: string
  cost_of_living: string
  currency: string
}

// ✅ بيانات الدول والجامعات
export const COUNTRIES_DATA: CountryData[] = [
  {
    id: 'turkey',
    name_ar: 'تركيا',
    name_en: 'Turkey',
    flag: '🇹🇷',
    image_url: 'https://images.unsplash.com/photo-1527838832700-5052e1d6e7c8?w=600&h=300&fit=crop',
    description_ar: 'تُعد تركيا وجهة دراسية مميزة تجمع بين جودة التعليم العالي وتكاليف المعيشة المناسبة. تتميز الجامعات التركية بتنوع برامجها وتقديمها لتعليم عصري ومعترف به دولياً.',
    requirements: [
      'شهادة ثانوية عامة بمعدل لا يقل عن 70%',
      'شهادة لغة تركية (TÖMER) أو إنجليزية (TOEFL/IELTS)',
      'جواز سفر ساري المفعول',
      'صور شخصية',
      'كشف درجات',
    ],
    visa_info: 'تأشيرة الطالب التركية تصدر لمدة سنة قابلة للتجديد، وتتطلب كشف حساب بنكي يثبت القدرة المالية.',
    cost_of_living: '250-400 دولار شهرياً (تشمل السكن والطعام والمواصلات)',
    currency: 'ليرة تركية (TRY)',
    universities: [
      {
        id: 'istanbul-technical',
        name_ar: 'جامعة اسطنبول التقنية',
        name_en: 'Istanbul Technical University',
        country: 'تركيا',
        country_flag: '🇹🇷',
        city: 'اسطنبول',
        ranking: 'التصنيف العالمي: 551-600',
        programs: ['هندسة مدنية', 'هندسة ميكانيكية', 'هندسة كهربائية', 'عمارة', 'علوم حاسوب'],
        tuition_fee: '2,500 - 4,000 دولار سنوياً',
        duration: '4 سنوات (بكالوريوس)',
        requirements: [
          'شهادة ثانوية بمعدل 75% فما فوق',
          'شهادة لغة (TÖMER B2 أو IELTS 6.0)',
          'اختبار قبول (YÖS)',
        ],
        documents: [
          'شهادة الثانوية مترجمة ومعتمدة',
          'كشف درجات مترجم ومعتمد',
          'شهادة لغة',
          'جواز سفر',
          'صور شخصية',
        ],
        image_url: 'https://images.unsplash.com/photo-1527838832700-5052e1d6e7c8?w=400&h=200&fit=crop',
        description_ar: 'جامعة اسطنبول التقنية من أعرق الجامعات التركية وأكثرها تميزاً في المجالات الهندسية والتقنية.',
        benefits_ar: [
          'قبول مضمون 100%',
          'تخفيض 30% على الرسوم الدراسية',
          'مساعدة في إجراءات السكن',
          'دعم لغوي',
        ],
        deadline: '2026-08-31',
        application_fee: '100 دولار',
        scholarship_available: true,
      },
      {
        id: 'ankara-university',
        name_ar: 'جامعة أنقرة',
        name_en: 'Ankara University',
        country: 'تركيا',
        country_flag: '🇹🇷',
        city: 'أنقرة',
        ranking: 'التصنيف العالمي: 801-1000',
        programs: ['طب', 'علوم سياسية', 'قانون', 'اقتصاد', 'إدارة أعمال'],
        tuition_fee: '2,000 - 3,500 دولار سنوياً',
        duration: '4-6 سنوات (حسب التخصص)',
        requirements: [
          'شهادة ثانوية بمعدل 70% فما فوق',
          'شهادة لغة (TÖMER B2)',
          'اختبار قبول (YÖS)',
        ],
        documents: [
          'شهادة الثانوية مترجمة ومعتمدة',
          'كشف درجات مترجم ومعتمد',
          'شهادة لغة',
          'جواز سفر',
          'صور شخصية',
        ],
        image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
        description_ar: 'جامعة أنقرة من أعرق الجامعات التركية، تشتهر بكليات الطب والعلوم السياسية والقانون.',
        benefits_ar: [
          'قبول مضمون 100%',
          'تخفيض 25% على الرسوم الدراسية',
          'مساعدة في إجراءات السكن',
        ],
        deadline: '2026-09-15',
        application_fee: '75 دولار',
        scholarship_available: true,
      },
    ],
  },
  {
    id: 'malaysia',
    name_ar: 'ماليزيا',
    name_en: 'Malaysia',
    flag: '🇲🇾',
    image_url: 'https://images.unsplash.com/photo-1518684076987-2e6b2a80b3d6?w=600&h=300&fit=crop',
    description_ar: 'ماليزيا وجهة تعليمية عالمية بامتياز، تجمع بين جودة التعليم البريطاني وتكاليف المعيشة المناسبة في بيئة آمنة ومتنوعة ثقافياً.',
    requirements: [
      'شهادة ثانوية عامة بمعدل لا يقل عن 65%',
      'شهادة لغة إنجليزية (IELTS 5.5 أو TOEFL 70)',
      'جواز سفر ساري المفعول',
      'صور شخصية',
      'كشف درجات',
    ],
    visa_info: 'تأشيرة الطالب الماليزية تصدر لمدة سنة قابلة للتجديد، وتتطلب كشف حساب بنكي يثبت القدرة المالية.',
    cost_of_living: '300-500 دولار شهرياً',
    currency: 'رينغيت ماليزي (MYR)',
    universities: [
      {
        id: 'um-malaya',
        name_ar: 'جامعة مالايا',
        name_en: 'University of Malaya',
        country: 'ماليزيا',
        country_flag: '🇲🇾',
        city: 'كوالالمبور',
        ranking: 'التصنيف العالمي: 65',
        programs: ['طب', 'هندسة', 'علوم حاسوب', 'اقتصاد', 'قانون'],
        tuition_fee: '3,000 - 5,000 دولار سنوياً',
        duration: '4 سنوات (بكالوريوس)',
        requirements: [
          'شهادة ثانوية بمعدل 75% فما فوق',
          'شهادة لغة (IELTS 6.0 أو TOEFL 80)',
        ],
        documents: [
          'شهادة الثانوية مترجمة ومعتمدة',
          'كشف درجات مترجم ومعتمد',
          'شهادة لغة',
          'جواز سفر',
          'صور شخصية',
        ],
        image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
        description_ar: 'جامعة مالايا من أعرق الجامعات الماليزية وأكثرها تميزاً، تصنف ضمن أفضل 100 جامعة عالمياً.',
        benefits_ar: [
          'قبول مضمون 100%',
          'تخفيض 20% على الرسوم الدراسية',
          'مساعدة في إجراءات السكن',
          'دعم أكاديمي',
        ],
        deadline: '2026-07-31',
        application_fee: '150 دولار',
        scholarship_available: true,
      },
    ],
  },
  // ✅ أضف المزيد من الدول حسب الحاجة
]

// ✅ دوال مساعدة
export function getCountryById(id: string) {
  return COUNTRIES_DATA.find(c => c.id === id)
}

export function getUniversityById(countryId: string, universityId: string) {
  const country = getCountryById(countryId)
  if (!country) return null
  return country.universities.find(u => u.id === universityId) || null
}

export function getAllUniversities() {
  return COUNTRIES_DATA.flatMap(c => 
    c.universities.map(u => ({ ...u, country_id: c.id }))
  )
}