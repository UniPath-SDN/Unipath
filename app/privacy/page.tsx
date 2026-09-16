// app/privacy/page.tsx
'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Check } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />
      
      <div style={{ maxWidth: 900, margin: '70px auto 0 ', padding: '40px 5% 80px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 900, color: '#1B3A5C', marginBottom: 8 }}>
          سياسة الخصوصية
        </h1>
        <p style={{ color: '#8fa3b8', marginBottom: 32 }}>
          آخر تحديث: {new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div style={{ background: '#fff', borderRadius: 18, padding: '32px 36px', border: '1px solid #e8eef5' }}>
          
          {/* 1. مقدمة */}
          <Section title="1. مقدمة">
            <p>
              في UniPath، نحن ملتزمون بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية عند زيارة موقعنا الإلكتروني أو استخدام خدماتنا.
            </p>
          </Section>

          {/* 2. المعلومات التي نجمعها */}
          <Section title="2. المعلومات التي نجمعها">
            <ul className="policy-list">
              <li><Check size={16} color="#2FA889" /> <strong>المعلومات التي تقدمها طواعية:</strong> الاسم، رقم الهاتف، البريد الإلكتروني، المستوى الدراسي، الجنسية، التخصص، وشهادة اللغة (عند ملء نموذج التواصل).</li>
              <li><Check size={16} color="#2FA889" /> <strong>بيانات الاستخدام:</strong> عنوان IP، نوع المتصفح، الجهاز، الصفحات التي تزورها، الوقت الذي تقضيه على الموقع.</li>
              <li><Check size={16} color="#2FA889" /> <strong>ملفات تعريف الارتباط (Cookies):</strong> نستخدم Cookies لتحسين تجربتك وتحليل أداء الموقع.</li>
            </ul>
          </Section>

          {/* 3. كيف نستخدم معلوماتك */}
          <Section title="3. كيف نستخدم معلوماتك">
            <ul className="policy-list">
              <li><Check size={16} color="#2FA889" /> لتقديم خدماتنا والرد على استفساراتك.</li>
              <li><Check size={16} color="#2FA889" /> لتحسين محتوى الموقع وتجربة المستخدم.</li>
              <li><Check size={16} color="#2FA889" /> للتواصل معك بشأن الخدمات التي تهمك.</li>
              <li><Check size={16} color="#2FA889" /> لإرسال تحديثات حول المنح والخدمات الجديدة (بموافقتك).</li>
            </ul>
          </Section>

          {/* 4. مشاركة المعلومات */}
          <Section title="4. مشاركة المعلومات مع أطراف ثالثة">
            <p>
              <strong>لا نبيع أو نؤجر معلوماتك الشخصية لأي طرف ثالث.</strong>
            </p>
            <p>
              قد نشارك معلوماتك مع مقدمي الخدمات (مثل منصات البريد الإلكتروني، وأدوات التحليل) لمساعدتنا في تشغيل الموقع وتقديم الخدمات، وهم ملزمون بحماية بياناتك.
            </p>
          </Section>

          {/* 5. أمان البيانات */}
          <Section title="5. أمان البيانات">
            <p>
              نتخذ إجراءات أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به، أو التعديل، أو الإفصاح، أو الإتلاف. ومع ذلك، لا يمكن ضمان أمان 100% لأي نقل بيانات عبر الإنترنت.
            </p>
          </Section>

          {/* 6. حقوقك */}
          <Section title="6. حقوقك">
            <ul className="policy-list">
              <li><Check size={16} color="#2FA889" /> الحق في الوصول إلى بياناتك الشخصية.</li>
              <li><Check size={16} color="#2FA889" /> الحق في طلب تصحيح أو تحديث بياناتك.</li>
              <li><Check size={16} color="#2FA889" /> الحق في طلب حذف بياناتك.</li>
              <li><Check size={16} color="#2FA889" /> الحق في الاعتراض على معالجة بياناتك.</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              للتواصل بخصوص حقوقك، أرسل بريداً إلكترونياً إلى: <a href="mailto:unipathsdn@gmail.com" style={{ color: '#2FA889', fontWeight: 700 }}>unipathsdn@gmail.com</a>
            </p>
          </Section>

          {/* 7. ملفات تعريف الارتباط */}
          <Section title="7. ملفات تعريف الارتباط (Cookies)">
            <p>
              نستخدم ملفات تعريف الارتباط لتحسين أداء الموقع وفهم سلوك الزوار. يمكنك التحكم في إعدادات Cookies من خلال متصفحك.
            </p>
          </Section>

          {/* 8. تحديثات السياسة */}
          <Section title="8. تحديثات سياسة الخصوصية">
            <p>
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإعلامك بأي تغييرات جوهرية من خلال نشر السياسة الجديدة على هذه الصفحة.
            </p>
          </Section>

          {/* 9. الاتصال بنا */}
          <Section title="9. الاتصال بنا">
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر:
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