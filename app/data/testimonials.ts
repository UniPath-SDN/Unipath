// data/testimonials.ts
//
// بيانات احتياطية (static) للشهادات. الموقع بيقرا من /api/testimonials/ لو متاح،
// وإلا بيعرض اللي هنا. اتركها فاضية لحد ما تجمع شهادات حقيقية - الكومبوننت
// بيخفي أي قسم فاضي تلقائياً، فمفيش داعي لبيانات تجريبية.
//
// قاعدة مهمة: أي عنصر لازم يكون consent_given: true (موافقة الطالب على النشر)،
// وإلا الكومبوننت مش هيعرضه حتى لو موجود هنا.

export type Story = {
  id: string
  name: string            // الاسم كما وافق الطالب على نشره (مثلاً: «أحمد ح.»)
  country_flag: string    // 🇩🇪
  destination: string     // «DAAD ألمانيا · هندسة»
  text: string
  photo_url?: string      // صورة الطالب (اختيارية)
  consent_given: boolean
}

export type Screenshot = {
  id: string
  image_url: string       // سكرين واتساب بعد تعتيم الأرقام والصور الشخصية
  caption?: string
  consent_given: boolean
}

export type Arrival = {
  id: string
  image_url: string
  student_name: string
  country_flag: string
  place: string           // «جامعة ميونخ التقنية» أو «مطار إسطنبول»
  consent_given: boolean
}

export type TestimonialsData = {
  stories: Story[]
  screenshots: Screenshot[]
  arrivals: Arrival[]
}

export const STATIC_TESTIMONIALS: TestimonialsData = {
  stories: [],
  screenshots: [],
  arrivals: [],
}

/* مثال على عنصر حقيقي (للتوضيح فقط - لا تنسخ نصوصاً غير حقيقية):
{
  id: 's1',
  name: 'الاسم المتفق عليه',
  country_flag: '🇩🇪',
  destination: 'اسم المنحة · التخصص',
  text: 'نص الطالب كما كتبه هو.',
  photo_url: '/testimonials/s1.jpg',
  consent_given: true,
}
*/
