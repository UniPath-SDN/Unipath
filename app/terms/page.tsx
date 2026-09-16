// app/terms/page.tsx
'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Check } from 'lucide-react'

export default function TermsPage() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />
      
      <div style={{ maxWidth: 900, margin: '70px  auto 0 ', padding: '40px 5% 80px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 900, color: '#1B3A5C', marginBottom: 8 }}>
          شروط الخدمة
        </h1>
        <p style={{ color: '#8fa3b8', marginBottom: 32 }}>
          آخر تحديث: {new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div style={{ background: '#fff', borderRadius: 18, padding: '32px 36px', border: '1px solid #e8eef5' }}>
          
          {/* 1. الموافقة على الشروط */}
          <Section title="1. الموافقة على الشروط">
            <p>
              باستخدامك لموقع UniPath، فإنك توافق على الالتزام بهذه الشروط وسياسة الخصوصية. إذا كنت لا توافق، يرجى التوقف عن استخدام الموقع.
            </p>
          </Section>

          {/* 2. وصف الخدمات */}
          <Section title="2. وصف الخدمات">
            <p>
              تقدم UniPath الخدمات التالية:
            </p>
            <ul className="policy-list">
              <li><Check size={16} color="#2FA889" /> عرض المنح الدراسية المتاحة حول العالم.</li>
              <li><Check size={16} color="#2FA889" /> خدمات التقديم على المنح (تحضير الوثائق، كتابة خطابات النية، التوصيات).</li>
              <li><Check size={16} color="#2FA889" /> <strong>القبولات الخاصة:</strong> خدمة مضمونة 100% للقبول في الجامعات المتعاقد معها.</li>
              <li><Check size={16} color="#2FA889" /> استشارات أكاديمية ودعم طوال فترة التقديم.</li>
            </ul>
          </Section>

          {/* 3. القبولات الخاصة - ضمان 100% */}
          <Section title="3. القبولات الخاصة — ضمان 100%">
            <div style={{ background: '#e8f5e9', padding: '16px 20px', borderRadius: 12, borderRight: '4px solid #4CAF50', marginBottom: 12 }}>
              <p style={{ fontSize: 'clamp(14px, 1vw, 15px)', color: '#1b5e20', fontWeight: 700, margin: 0 }}>
                 نقدم خدمة القبولات الخاصة في الجامعات المتفق عليها مع ضمان قبول 100%.
              </p>
            </div>
            <ul className="policy-list">
              <li><Check size={16} color="#4CAF50" /> <strong>ضمان 100%:</strong> في حال عدم حصول العميل على القبول، يتم استرداد كامل المبلغ.</li>
              <li><Check size={16} color="#4CAF50" /> السعر يشمل: رسوم التقديم، رسوم القبول، وتكاليف الخدمة المكتبية.</li>
              <li><Check size={16} color="#4CAF50" /> رسوم الجامعة (إن وجدت) تُدفع مباشرة للجامعة، وهي منفصلة عن أتعاب المكتب.</li>
              <li><Check size={16} color="#4CAF50" /> يجب على العميل توفير جميع المستندات المطلوبة خلال المهلة المحددة.</li>
            </ul>
          </Section>

          {/* 4. المنح الدراسية - بدون ضمان */}
          <Section title="4. المنح الدراسية — بدون ضمان قبول">
            <div style={{ background: '#fff3e0', padding: '16px 20px', borderRadius: 12, borderRight: '4px solid #FF9800', marginBottom: 12 }}>
              <p style={{ fontSize: 'clamp(14px, 1vw, 15px)', color: '#7a4f00', fontWeight: 700, margin: 0 }}>
                ⚠️ خدمات التقديم على المنح الدراسية لا تحمل ضماناً بالقبول.
              </p>
            </div>
            <ul className="policy-list">
              <li><Check size={16} color="#FF9800" /> أتعابنا هي مقابل تجهيز الملف، كتابة المستندات، والتقديم والمتابعة.</li>
              <li><Check size={16} color="#FF9800" /> قرار القبول أو الرفض يعود للجامعة أو الجهة المانحة فقط.</li>
              <li><Check size={16} color="#FF9800" /> الرسوم غير قابلة للاسترداد بعد بدء العمل على الملف.</li>
            </ul>
          </Section>

          {/* 5. سياسة الدفع والاسترداد */}
          <Section title="5. سياسة الدفع والاسترداد">
            <ul className="policy-list">
              <li><Check size={16} color="#2FA889" /> يلتزم العميل بتوفير جميع المستندات المطلوبة خلال الفترة المحددة.</li>
              <li><Check size={16} color="#2FA889" /> في حال تأخر العميل في إرسال المستندات أو كانت غير مكتملة، لا تُسترد رسوم الخدمة.</li>
              <li><Check size={16} color="#2FA889" /> في حال انتهاء فترة التقديم بسبب تأخر العميل، يتحمل العميل كامل المسؤولية.</li>
              <li><Check size={16} color="#2FA889" /> بعد إرسال طلب التقديم، تعتبر رسوم الخدمة غير قابلة للاسترداد.</li>
              <li><Check size={16} color="#2FA889" /> <strong>استثناء:</strong> القبولات الخاصة قابلة للاسترداد (ضمان 100%).</li>
            </ul>
          </Section>

          {/* 6. حقوق الملكية الفكرية */}
          <Section title="6. حقوق الملكية الفكرية">
            <p>
              جميع المحتويات المعروضة على موقع UniPath (نصوص، تصاميم، شعارات، صور) هي ملك لـ UniPath أو مرخصة لنا. لا يجوز نسخها أو إعادة استخدامها أو توزيعها دون إذن كتابي مسبق.
            </p>
          </Section>

          {/* 7. روابط الطرف الثالث */}
          <Section title="7. روابط الطرف الثالث">
            <p>
              قد يحتوي موقعنا على روابط لمواقع خارجية (مثل المواقع الرسمية للجامعات أو الجهات المانحة). نحن غير مسؤولين عن محتوى أو سياسات هذه المواقع.
            </p>
          </Section>

          {/* 8. إخلاء المسؤولية */}
          <Section title="8. إخلاء المسؤولية">
            <p>
              نقدم الموقع والخدمات "كما هي" وبدون أي ضمانات. نحن لسنا مسؤولين عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع أو الخدمات.
            </p>
          </Section>

          {/* 9. تعديل الشروط */}
          <Section title="9. تعديل الشروط">
            <p>
              نحتفظ بالحق في تحديث هذه الشروط في أي وقت. ننصحك بمراجعتها بشكل دوري. التغييرات تصبح نافذة فور نشرها على هذه الصفحة.
            </p>
          </Section>

          {/* 10. الاتصال بنا */}
          <Section title="10. الاتصال بنا">
            <p>
              إذا كان لديك أي استفسار حول شروط الخدمة، يمكنك التواصل معنا عبر:
            </p>
            <ul className="policy-list">
              <li><Check size={16} color="#2FA889" /> البريد الإلكتروني: <a href="mailto:unipathsdn@gmail.com" style={{ color: '#2FA889', fontWeight: 700 }}>unipathsdn@gmail.com</a></li>
              <li><Check size={16} color="#2FA889" /> واتساب: <a href="https://wa.me/249123456789" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700 }}>249123456789</a></li>
            </ul>
          </Section>

        </div>
      </div>
      
      <Footer />
    </div>
  )
}

// Section component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', fontWeight: 800, color: '#1B3A5C', marginBottom: 12 }}>
        {title}
      </h2>
      <div style={{ fontSize: 'clamp(14px, 1vw, 15px)', color: '#4a6580', lineHeight: 1.9 }}>
        {children}
      </div>
    </div>
  )
}