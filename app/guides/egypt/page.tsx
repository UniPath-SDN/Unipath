// app/guides/egypt/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  BookOpen,
  GraduationCap,
  Award,
  Globe,
  Target,
  Train,
  Bus,
  Car,
  Utensils,
  Landmark,
  Mosque,
  Briefcase,
  Coffee,
  ShoppingBag,
  Smartphone,
  MessageCircle,
  FolderOpen,
  Flag,
  BarChart3,
  IdCard,
  Handshake,
  Home,
  ChevronLeft,
  CheckCircle,
  FileText,
  Building2,
  Users,
  Clock,
  Calendar,
  MapPin,
  CreditCard,
  Shield,
  AlertCircle,
  ClipboardList,
  Laptop,
  DollarSign,
  ExternalLink,
  Lightbulb,
  ChevronDown,
} from 'lucide-react'

//  مكون القائمة المنسدلة المحسّن مع التمرير التلقائي
function AccordionItem({ 
  item, 
  isOpen, 
  onToggle,
  index 
}: { 
  item: any
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div 
      style={{
        background: '#fff',
        borderRadius: 16,
        border: `1.5px solid ${isOpen ? '#2FA889' : '#e8eef5'}`,
        overflow: 'hidden',
        transition: 'all .3s ease',
        boxShadow: isOpen ? '0 8px 30px rgba(47,168,137,.12)' : 'none',
        marginBottom: 12,
        scrollMarginTop: 80,
      }}
    >
      {/* Header - Clickable */}
      <button
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '16px 20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Cairo, sans-serif',
          textAlign: 'right',
          transition: 'all .2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f8fafc'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: isOpen ? '#e6f7f3' : '#f0f4f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isOpen ? '#2FA889' : '#4a6580',
            transition: 'all .3s',
          }}>
            {item.icon}
          </div>
          <span style={{
            fontSize: '1rem',
            fontWeight: 800,
            color: isOpen ? '#1B3A5C' : '#4a6580',
            transition: 'color .2s',
          }}>
            {item.title}
          </span>
          {item.badge && (
            <span style={{
              background: '#2FA889',
              color: '#fff',
              fontSize: '0.65rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: 50,
              marginRight: 4,
            }}>
              {item.badge}
            </span>
          )}
        </div>
        <ChevronDown
          size={20}
          style={{
            color: isOpen ? '#2FA889' : '#8fa3b8',
            transition: 'transform .3s ease, color .3s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          }}
        />
      </button>

      {/* Content - يظهر عند الفتح */}
      {isOpen && (
        <div style={{
          padding: '0 20px 20px 20px',
          borderTop: '1px solid #f0f4f8',
          paddingTop: 18,
          animation: 'fadeIn .3s ease',
        }}>
          {item.content}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default function EgyptGuidePage() {
  const [openId, setOpenId] = useState<string | null>('overview')

  const toggleItem = (id: string) => {
    const newOpenId = openId === id ? null : id
    setOpenId(newOpenId)

    // التمرير السلس عند الفتح (وليس الإغلاق)
    if (newOpenId) {
      setTimeout(() => {
        const element = document.getElementById(`accordion-${id}`)
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - navbarHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }, 100)
    }
  }

  const accordionItems = [
    {
      id: 'overview',
      title: '🇪🇬 نظرة عامة عن الدراسة في مصر',
      icon: <BookOpen size={20} />,
      badge: 'محدث',
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            تُعد <strong>جمهورية مصر العربية</strong> وجهة دراسية رائدة ومتميزة للطلاب السودانيين،
            حيث تجمع بين <strong>جودة التعليم العالي</strong> والتكاليف المناسبة، مع وجود
            <strong>مجتمع طلابي سوداني كبير</strong> يدعم بعضه البعض ويشكل شبكة دعم قوية للوافدين الجدد.
          </p>
          <p style={{ marginTop: 12 }}>
            تتميز مصر بموقعها الجغرافي القريب من السودان، وتشابه الثقافات، وسهولة التواصل باللغة العربية،
            مما يجعلها الخيار الأول للعديد من الطلاب السودانيين الراغبين في مواصلة تعليمهم العالي.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 12,
            marginTop: 16,
          }}>
            {[
              { label: 'جامعة حكومية', value: '50+' },
              { label: 'طالب سوداني', value: '20,000+' },
              { label: 'برنامج دراسي', value: '300+' },
              { label: 'خصم للطلاب', value: '70%' },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: '#f8fafc',
                borderRadius: 10,
                padding: '12px',
                textAlign: 'center',
                border: '1px solid #e8eef5',
              }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2FA889' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#8fa3b8' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 16,
            padding: '14px 18px',
            background: '#e6f7f3',
            borderRadius: 12,
            borderRight: '3px solid #2FA889',
          }}>
            <p style={{ fontSize: '0.9rem', color: '#0a5540' }}>
              💡 <strong>نصيحة:</strong> ابدأ في التجهيز للدراسة في مصر قبل الموعد بفترة كافية،
              فالإجراءات تحتاج وقتاً، خاصة فيما يتعلق بتوثيق المستندات واستخراج التأشيرة.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'education-system',
      title: 'نظام التعليم العالي في مصر',
      icon: <BookOpen size={20} />,
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            يتميز قطاع التعليم العالي في جمهورية مصر العربية بالتنوع والثراء، مما يتيح للطالب السوداني
            خيارات أكاديمية متعددة تلبي مختلف التخصصات والاهتمامات. تخضع جميع المؤسسات التعليمية
            لإشراف <strong>وزارة التعليم العالي والبحث العلمي</strong>، مما يضمن جودة التعليم ومطابقته
            للمعايير العالمية.
          </p>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Building2 size={18} color="#1B3A5C" />
            أنواع المؤسسات التعليمية:
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: <Landmark size={18} color="#2FA889" />, text: 'الجامعات الحكومية: عريقة، مرموقة، وذات تصنيف عالمي مرتفع' },
              { icon: <Mosque size={18} color="#2FA889" />, text: 'جامعة الأزهر: أعرق مؤسسة إسلامية، تتميز بقبول مستقل ومنح مجانية' },
              { icon: <Building2 size={18} color="#2FA889" />, text: 'الجامعات الأهلية: غير هادفة للربح، تقدم تعيماً نوعياً بمعايير عالمية' },
              { icon: <Briefcase size={18} color="#2FA889" />, text: 'الجامعات الخاصة: مؤسسات استثمارية، تتميز بكثافة طلابية أقل وتقنيات حديثة' },
              { icon: <Globe size={18} color="#2FA889" />, text: 'الجامعات الدولية: فروع لجامعات أجنبية، تمنح شهادات دولية معتمدة' },
            ].map((item) => (
              <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f4f8' }}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'government-universities',
      title: 'الجامعات الحكومية',
      icon: <GraduationCap size={20} />,
      badge: 'الأكثر مشاهدة',
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            تضم مصر شبكة واسعة من الجامعات الحكومية التي تخضع لإشراف وزارة التعليم العالي والبحث العلمي.
            تتميز هذه الجامعات بعراقتها وتصنيفها العالمي المرتفع، وتضم مستشفيات تعليمية ضخمة ومعامل بحثية متطورة.
          </p>
          <p style={{ marginTop: 12 }}>
            تُعتبر الجامعات الحكومية المصرية من أفضل الخيارات للطلاب السودانيين، خاصة مع توفر
            <strong>خصم 70%</strong> على الرسوم الدراسية، مما يجعلها خياراً اقتصادياً متميزاً.
          </p>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8 }}>
             أبرز الجامعات الحكومية:
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { name: 'جامعة القاهرة', specialty: 'التخصصات: الطب، الهندسة، الحقوق، العلوم، الآداب' },
              { name: 'جامعة عين شمس', specialty: 'التخصصات: الطب، الهندسة، الصيدلة، العلوم، الآداب' },
              { name: 'جامعة الإسكندرية', specialty: 'التخصصات: الطب، الهندسة، العلوم، التجارة' },
              { name: 'جامعة أسيوط', specialty: 'التخصصات: الطب، الهندسة، العلوم، الزراعة' },
              { name: 'جامعة المنصورة', specialty: 'التخصصات: الطب، الهندسة، العلوم، الحقوق' },
            ].map((uni) => (
              <li key={uni.name} style={{ padding: '8px 0', borderBottom: '1px solid #f0f4f8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={16} color="#2FA889" />
                  <span style={{ fontWeight: 700, color: '#1B3A5C' }}>{uni.name}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#8fa3b8', marginRight: 26 }}>{uni.specialty}</div>
              </li>
            ))}
          </ul>
          <div style={{
            background: '#e8f5e9',
            borderRadius: 12,
            padding: '16px 20px',
            borderRight: '4px solid #4CAF50',
            marginTop: 16,
          }}>
            <p style={{ fontWeight: 700, color: '#1b5e20', fontSize: '1.05rem' }}>
              خصم 70% للطلاب السودانيين
            </p>
            <p style={{ fontSize: '0.95rem', color: '#2e7d32' }}>
              يتمتع الطالب السوداني بخصم (70%) من الرسوم الدراسية المقررة للوافدين،
              بحيث يسدد الطالب <strong>(30%) فقط</strong> من الرسوم السنوية.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 8,
              marginTop: 12,
              fontSize: '0.85rem',
              color: '#1b5e20',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CreditCard size={16} color="#1b5e20" />
                <span>رسوم القيد الجامعي: <strong>$1,500</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FileText size={16} color="#1b5e20" />
                <span>رسوم التنسيق للوافدين: <strong>$170</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Shield size={16} color="#1b5e20" />
                <span>رسوم تأمين طبي: <strong>$100</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Users size={16} color="#1b5e20" />
                <span>رسوم اشتراك نادي الوافدين: <strong>$150</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Clock size={16} color="#1b5e20" />
                <span>رسوم حداثة المؤهل: <strong>$300</strong></span>
              </div>
            </div>
            <div style={{
              marginTop: 8,
              padding: '8px 12px',
              background: '#fff3e0',
              borderRadius: 8,
              borderRight: '3px solid #FF9800',
              fontSize: '0.8rem',
              color: '#7a4f00',
            }}>
              <Clock size={14} color="#FF9800" style={{ display: 'inline', marginLeft: 6 }} />
              <strong>ملاحظة:</strong> رسوم حداثة المؤهل تُدفع عن كل سنة تأخير بين تاريخ التخرج وسنة التقديم
            </div>
          </div>
          <div style={{
            background: '#fff3e0',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #FF9800',
            marginTop: 12,
          }}>
            <p style={{ fontWeight: 700, color: '#7a4f00' }}>
              آلية التقديم للجامعات الحكومية
            </p>
            <p style={{ fontSize: '0.9rem', color: '#7a4f00', marginTop: 4 }}>
              يتم التقديم حصرياً عبر منصة <strong>ادرس في مصر</strong>، وهي المنصة الرسمية
              للتقديم للوافدين في الجامعات المصرية.
              <br />
              <a href="https://admission.study-in-egypt.gov.eg" target="_blank" rel="noopener noreferrer" style={{ color: '#2FA889', fontWeight: 700 }}>
                admission.study-in-egypt.gov.eg
              </a>
            </p>
          </div>
          <div style={{
            marginTop: 12,
            padding: '12px 16px',
            background: '#fce8e8',
            borderRadius: 10,
            borderRight: '3px solid #e05555',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#7a2020', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <AlertCircle size={18} color="#e05555" style={{ flexShrink: 0, marginTop: 2 }} />
              <span>
                <strong>تنبيه مهم:</strong> لا تقم بسداد رسوم القيد الجامعي الكبيرة (مصروفات القيد والدراسة)
                إلا بعد التأكد من صدور التأشيرة والموافقة الأمنية، حيث أن هذه الرسوم غير مستردة في الغالب.
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'azhar',
      title: 'جامعة الأزهر الشريف',
      icon: <BookOpen size={20} />,
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            تُعد <strong>جامعة الأزهر الشريف</strong> أقدم وأعرق مؤسسة إسلامية تعليمية في العالم،
            حيث تأسست منذ أكثر من ألف عام. تضم الجامعة كليات علمية مرموقة مثل الطب والهندسة والصيدلة،
            بالإضافة إلى الكليات الأدبية والشرعية.
          </p>
          <p style={{ marginTop: 12 }}>
            تتميز جامعة الأزهر بنظام قبول <strong>مستقل ومختلف</strong> عن باقي الجامعات المصرية،
            وتقدم عدداً من <strong>المنح المجانية بالكامل</strong> للطلاب السودانيين بالتعاون مع
            وزارة التعليم العالي السودانية والمستشارية الثقافية.
          </p>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8 }}>
            <ClipboardList size={18} style={{ display: 'inline', marginLeft: 6 }} />
            شروط وقواعد القبول في الأزهر:
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: <ClipboardList size={18} color="#2FA889" />, text: 'نظام القبول مستقل عن باقي الجامعات المصرية' },
              { icon: <GraduationCap size={18} color="#2FA889" />, text: 'منح مجانية بالكامل للطلاب السودانيين' },
              { icon: <Laptop size={18} color="#2FA889" />, text: 'التقديم عبر بوابة الأزهر الإلكترونية للطلاب الوافدين' },
              { icon: <FileText size={18} color="#2FA889" />, text: 'يتطلب التقديم الإلكتروني تسليم الملف الورقي شخصياً' },
              { icon: <Calendar size={18} color="#2FA889" />, text: 'مواعيد التقديم: يوليو - أغسطس من كل عام' },
            ].map((item) => (
              <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f4f8' }}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div style={{
            background: '#e3f2fd',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #2196F3',
            marginTop: 12,
          }}>
            <p style={{ fontWeight: 700, color: '#0d47a1', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Globe size={18} color="#0d47a1" />
              رابط التقديم لجامعة الأزهر:
            </p>
            <a href="https://international.azu.edu.eg/regestration" target="_blank" rel="noopener noreferrer" style={{ color: '#2FA889', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
              <ExternalLink size={16} />
              international.azu.edu.eg/regestration
            </a>
            <p style={{ fontSize: '0.85rem', color: '#0d47a1', marginTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <DollarSign size={16} color="#0d47a1" />
              رسوم التقديم الإلكتروني: <strong>1,855 جنيهاً مصرياً</strong>
            </p>
          </div>
          <div style={{
            marginTop: 12,
            padding: '14px 18px',
            background: '#fff3e0',
            borderRadius: 12,
            borderRight: '4px solid #FF9800',
          }}>
            <p style={{ fontWeight: 700, color: '#7a4f00', display: 'flex', alignItems: 'center', gap: 8 }}>
              <DollarSign size={18} color="#7a4f00" />
              الرسوم الدراسية للطلاب الوافدين:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#7a4f00' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #f0e6d6' }}>
                <span>رسوم القيد (مرة واحدة)</span>
                <span><strong>$1,500</strong></span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #f0e6d6' }}>
                <span>الرسوم الدراسية — الكليات العلمية</span>
                <span><strong>$1,800 / سنة</strong></span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span>الرسوم الدراسية — الكليات الأدبية</span>
                <span><strong>$1,200 / سنة</strong></span>
              </li>
            </ul>
          </div>
          <div style={{
            marginTop: 12,
            padding: '12px 16px',
            background: '#fce8e8',
            borderRadius: 10,
            borderRight: '3px solid #e05555',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#7a2020', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <AlertCircle size={18} color="#e05555" style={{ flexShrink: 0, marginTop: 2 }} />
              <span>
                <strong>تنبيه هام:</strong> التقديم الإلكتروني وحده دون تسليم الملف الورقي لا يُعتد به،
                ويُعتبر كأن الطالب لم يتقدم. يجب تسليم الملف شخصياً لإدارة الطلاب الوافدين بالجامعة.
              </span>
            </p>
          </div>
          <div style={{
            marginTop: 12,
            padding: '12px 16px',
            background: '#fce8e8',
            borderRadius: 10,
            borderRight: '3px solid #e05555',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#7a2020', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <AlertCircle size={18} color="#e05555" style={{ flexShrink: 0, marginTop: 2 }} />
              <span>
                <strong>تنبيه آخر:</strong> لا توفر جامعة الأزهر موافقات أمنية للطلاب الوافدين
                كما هو متبع في الجامعات المصرية الأخرى؛ لذا يرجى مراعاة ذلك في إجراءات إقامتكم.
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'private-universities',
      title: 'الجامعات الخاصة والأهلية',
      icon: <Building2 size={20} />,
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            <strong>الجامعات الأهلية</strong> هي مؤسسات تعليمية غير هادفة للربح، تُدار تحت إشراف
            وزارة التعليم العالي والمجلس الأعلى للجامعات. أُنشئت هذه الجامعات وفق أعلى المعايير
            الأكاديمية والتكنولوجية العالمية.
          </p>
          <p style={{ marginTop: 12 }}>
            <strong>الجامعات الخاصة</strong> هي مؤسسات تعليمية استثمارية تعمل تحت الإشراف المباشر
            لمجلس الجامعات الخاصة والأهلية، وتقدم برامج تعليمية متنوعة تتوافق مع معايير الجودة.
          </p>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8 }}>
            <GraduationCap size={18} style={{ display: 'inline', marginLeft: 6 }} />
            أبرز الجامعات الخاصة:
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { name: 'جامعة 6 أكتوبر', specialty: 'تخصصات متنوعة: طب، هندسة، صيدلة، إدارة أعمال' },
              { name: 'جامعة مصر للعلوم والتكنولوجيا (MUST)', specialty: 'تخصصات: طب، هندسة، صيدلة، علوم الحاسوب' },
              { name: 'الجامعة الحديثة (MTI)', specialty: 'تخصصات: هندسة، صيدلة، إدارة أعمال، علوم الحاسوب' },
              { name: 'جامعة المستقبل', specialty: 'تخصصات: طب، هندسة، صيدلة، اقتصاد، إدارة أعمال' },
            ].map((uni) => (
              <li key={uni.name} style={{ padding: '8px 0', borderBottom: '1px solid #f0f4f8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={16} color="#2FA889" />
                  <span style={{ fontWeight: 700, color: '#1B3A5C' }}>{uni.name}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#8fa3b8', marginRight: 26 }}>{uni.specialty}</div>
              </li>
            ))}
          </ul>
          <div style={{
            background: '#e8f5e9',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #4CAF50',
            marginTop: 12,
          }}>
            <p style={{ fontWeight: 700, color: '#1b5e20', display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle size={18} color="#4CAF50" />
              استثناء هام: جامعة السويدي للتكنولوجيا
            </p>
            <p style={{ fontSize: '0.9rem', color: '#2e7d32' }}>
              نجحت المستشارية الثقافية في عقد تفاهمات حصرية مع جامعة السويدي للتكنولوجيا،
              حيث تقضي هذه الاتفاقيات بـ <strong>معاملة الطالب السوداني معاملة الطالب المصري</strong>
              من حيث سداد الرسوم الدراسية بالعملة المحلية (الجنيه المصري).
            </p>
          </div>
          <div style={{
            marginTop: 12,
            padding: '14px 18px',
            background: '#fff3e0',
            borderRadius: 12,
            borderRight: '4px solid #FF9800',
          }}>
            <p style={{ fontWeight: 700, color: '#7a4f00', display: 'flex', alignItems: 'center', gap: 8 }}>
              <ClipboardList size={18} color="#7a4f00" />
              آلية التقديم للجامعات الخاصة والأهلية
            </p>
            <p style={{ fontSize: '0.9rem', color: '#7a4f00' }}>
              يتم التقديم للطلاب الوافدين عبر منصة <strong>ادرس في مصر</strong>،
              مع إمكانية التواصل المباشر مع الجامعة للحصول على المعلومات الأكاديمية والمالية التفصيلية.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'scholarships',
      title: 'المنح والتخفيضات الدراسية',
      icon: <Award size={20} />,
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            انطلاقاً من دورها في تخفيف الأعباء عن كاهل الأسر السودانية، سعت المستشارية الثقافية
            إلى تأمين حزمة من المنح والاتفاقيات التي تمنح الطالب السوداني امتيازات مالية لا تتوفر لغيره.
          </p>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8 }}>
            <Target size={18} style={{ display: 'inline', marginLeft: 6 }} />
            المنح الحكومية العامة (الإعفاء التلقائي)
          </h4>
          <div style={{
            background: '#e8f5e9',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #4CAF50',
            marginBottom: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#4CAF50' }}>70%</span>
              <div>
                <p style={{ fontWeight: 700, color: '#1b5e20' }}>منحة تخفيض الرسوم (70%)</p>
                <p style={{ fontSize: '0.9rem', color: '#2e7d32' }}>
                  حق أصيل لكل طالب سوداني في الجامعات الحكومية المصرية. يتم سداد 30% فقط من المصروفات المقررة بالدولار.
                </p>
              </div>
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8 }}>
            <Flag size={18} style={{ display: 'inline', marginLeft: 6 }} />
            المنحة المصرية (EGYAID)
          </h4>
          <div style={{
            background: '#e3f2fd',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #2196F3',
            marginBottom: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#2196F3' }}>100%</span>
              <div>
                <p style={{ fontWeight: 700, color: '#0d47a1' }}>المنحة المصرية (EGYAID)</p>
                <p style={{ fontSize: '0.9rem', color: '#0d47a1' }}>
                  إعفاء كامل (100%) من الرسوم الدراسية للمتفوقين. التقديم عبر منصة (ادرس في مصر) في المواعيد المعلنة.
                </p>
              </div>
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8 }}>
            <BookOpen size={18} style={{ display: 'inline', marginLeft: 6 }} />
            منح الأزهر الشريف
          </h4>
          <div style={{
            background: '#fff3e0',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #FF9800',
            marginBottom: 12,
          }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                <CheckCircle size={16} color="#FF9800" />
                <span>مقاعد منح شاغرة يعلن عنها الأزهر سنوياً للطلاب الوافدين</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                <CheckCircle size={16} color="#FF9800" />
                <span>منح مكرمة شيخ الأزهر للطلاب السودانيين عبر وزارة التعليم العالي السودانية</span>
              </li>
            </ul>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8 }}>
            <Handshake size={18} style={{ display: 'inline', marginLeft: 6 }} />
            بروتوكولات خاصة
          </h4>
          <div style={{
            background: '#f3e5f5',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #9C27B0',
            marginBottom: 12,
          }}>
            <p style={{ fontWeight: 700, color: '#4a148c' }}>معهد الجيزة العالي</p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#4a148c' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                <CheckCircle size={16} color="#9C27B0" />
                <span>تخصصات: الهندسة المدنية، المعمارية، الاتصالات والإلكترونيات</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                <CheckCircle size={16} color="#9C27B0" />
                <span>معاملة الطالب السوداني معاملة الطالب المصري في الرسوم والمصروفات الدراسية</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                <CheckCircle size={16} color="#9C27B0" />
                <span>منح دراسية حسب النسبة: 95% فأكثر (منحة كاملة 100%)، 90-95% (تخفيض 50%)</span>
              </li>
            </ul>
          </div>

          <div style={{
            background: '#e8f5e9',
            borderRadius: 12,
            padding: '14px 18px',
            borderRight: '4px solid #4CAF50',
          }}>
            <p style={{ fontWeight: 700, color: '#1b5e20' }}>مؤسسة السويدي التعليمية</p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#1b5e20' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                <CheckCircle size={16} color="#4CAF50" />
                <span>معاملة الطالب السوداني أسوة بالطالب المصري في الرسوم الدراسية</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                <CheckCircle size={16} color="#4CAF50" />
                <span>منح تميز ومواهب تتراوح من 10% إلى 90% من الرسوم الدراسية</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'admission-guide',
      title: 'دليل القبول والتسجيل',
      icon: <FileText size={20} />,
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <BarChart3 size={18} color="#1B3A5C" />
            الحد الأدنى للقبول في الجامعات الحكومية 2026
          </h4>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: 16 }}>
              <thead>
                <tr style={{ background: '#f0f4f8' }}>
                  <th style={{ padding: '8px 12px', textAlign: 'right', borderBottom: '2px solid #e8eef5' }}>التخصص</th>
                  <th style={{ padding: '8px 12px', textAlign: 'center', borderBottom: '2px solid #e8eef5' }}>جامعات القاهرة، عين شمس، الإسكندرية، أسيوط، المنصورة</th>
                  <th style={{ padding: '8px 12px', textAlign: 'center', borderBottom: '2px solid #e8eef5' }}>باقي الجامعات الحكومية</th>
                  <th style={{ padding: '8px 12px', textAlign: 'center', borderBottom: '2px solid #e8eef5' }}>جامعات خاصة/أهلية</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { specialty: 'الطب البشري', top: '75%', other: '70%', private: '55%' },
                  { specialty: 'طب الأسنان / الصيدلة', top: '70%', other: '65%', private: '55%' },
                  { specialty: 'العلاج الطبيعي / الطب البيطري', top: '65%', other: '60%', private: '55%' },
                  { specialty: 'الهندسة / التخطيط العمراني', top: '65%', other: '60%', private: '55%' },
                  { specialty: 'الحاسبات / الذكاء الاصطناعي', top: '65%', other: '60%', private: '55%' },
                  { specialty: 'الزراعة / العلوم', top: '65%', other: '60%', private: '55%' },
                  { specialty: 'الإعلام', top: '65%', other: '65%', private: '55%' },
                  { specialty: 'السياسة والاقتصاد', top: '70%', other: '70%', private: '55%' },
                  { specialty: 'الفنون / التربية / الآداب / التجارة / الحقوق', top: '50%', other: '50%', private: '55%' },
                ].map((row) => (
                  <tr key={row.specialty} style={{ borderBottom: '1px solid #f0f4f8' }}>
                    <td style={{ padding: '6px 12px', fontWeight: 600, color: '#1B3A5C' }}>{row.specialty}</td>
                    <td style={{ padding: '6px 12px', textAlign: 'center', fontWeight: 700, color: '#2FA889' }}>{row.top}</td>
                    <td style={{ padding: '6px 12px', textAlign: 'center', fontWeight: 700, color: '#2196F3' }}>{row.other}</td>
                    <td style={{ padding: '6px 12px', textAlign: 'center', fontWeight: 700, color: '#FF9800' }}>{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <FolderOpen size={18} color="#1B3A5C" />
            المستندات المطلوبة للتقديم
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'أصل شهادة الثانوية العامة (السودانية) موثقة ومعتمدة',
              'أصل شهادة الميلاد',
              'صورة من جواز السفر ساري المفعول (لا تقل صلاحيته عن 6 أشهر)',
              'عدد (4) صور شخصية حديثة بخلفية بيضاء',
              'الرقم الوطني أو شهادة الميلاد الأصلية',
              'خطاب عدم ممانعة من المستشارية الثقافية بالسفارة',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f4f8' }}>
                <FileText size={16} color="#2FA889" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <ClipboardList size={18} color="#1B3A5C" />
            خطوات التسجيل على منصة (ادرس في مصر)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { step: '١', title: 'إنشاء الحساب', desc: 'اضغط على "تسجيل دخول" ثم اختر "إنشاء حساب جديد". أدخل بريدك الإلكتروني ورقم هاتفك لاستقبال كود التفعيل.' },
              { step: '٢', title: 'إدخال البيانات الشخصية', desc: 'اكتب اسمك باللغة الإنجليزية مطابقاً تماماً لجواز السفر (أي خطأ هنا يعطل إصدار التأشيرة لاحقاً).' },
              { step: '٣', title: 'اختيار الدرجة العلمية', desc: 'اختر "درجة جامعية" (لطلاب البكالوريوس) أو "دراسات عليا" (للماجستير والدكتوراه)، ثم حدد نوع الشهادة "ثانوية سودانية".' },
              { step: '٤', title: 'ترتيب الرغبات', desc: 'هذه أهم خطوة. رتب الرغبات بعناية حسب الأولوية والتوزيع الجغرافي الذي تفضله.' },
              { step: '٥', title: 'رفع المستندات', desc: 'قم برفع الملفات في الخانات المخصصة لها. تأكد أن الصور واضحة وليست مقلوبة أو مشوشة.' },
              { step: '٦', title: 'سداد الرسوم', desc: 'يمكن الدفع إلكترونياً (Visa/Mastercard) أو عبر الإيداع البنكي في بنك مصر/الأهلي. احتفظ بصورة إيصال الدفع.' },
            ].map((item) => (
              <div key={item.step} style={{
                display: 'flex',
                gap: 14,
                padding: '12px 16px',
                background: '#f8fafc',
                borderRadius: 10,
                border: '1px solid #e8eef5',
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#2FA889',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}>
                  {item.step}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1B3A5C' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#4a6580' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 12,
            padding: '12px 16px',
            background: '#e6f7f3',
            borderRadius: 10,
            borderRight: '3px solid #2FA889',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#0a5540', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Lightbulb size={18} color="#2FA889" />
              <span>
                <strong>نصيحة:</strong> بعد إرسال الطلب، يتغير الوضع إلى «تحت المراجعة».
                تابع حسابك يومياً وقم بطباعة "إفادة الترشيح المبدئي" فور صدورها.
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'visa-residence',
      title: 'التأشيرات والإقامة',
      icon: <Globe size={20} />,
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            تُعد إجراءات التأشيرة والإقامة من أهم الخطوات التي يجب على الطالب الوافد الانتباه إليها.
            إليك دليل كامل ومبسط للإجراءات:
          </p>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <IdCard size={18} color="#1B3A5C" />
            تأشيرة الدخول
          </h4>
          <p>
            يُعد حصولك على <strong>إخطار القبول</strong> عبر منصة (ادرس في مصر) بمثابة موافقة رسمية
            لبدء إجراءات دخولك. للحصول على التأشيرة، يُرجى اتباع أحد المسارين التاليين:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            marginTop: 12,
          }}>
            <div style={{
              padding: '14px 16px',
              background: '#e3f2fd',
              borderRadius: 12,
              borderRight: '3px solid #2196F3',
            }}>
              <p style={{ fontWeight: 700, color: '#0d47a1', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Laptop size={18} color="#0d47a1" />
                المسار الأول: التقديم الإلكتروني المباشر
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: '#0d47a1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#2196F3" />
                  التقدم عبر الرابط المتاح على الصفحة الرسمية
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#2196F3" />
                  سداد رسوم (19 دولاراً أمريكياً)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#2196F3" />
                  متابعة الموافقة عبر الصفحة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#2196F3" />
                  حجز الطيران عن طريق شركة مصر للطيران فقط
                </li>
              </ul>
            </div>
            <div style={{
              padding: '14px 16px',
              background: '#fff3e0',
              borderRadius: 12,
              borderRight: '3px solid #FF9800',
            }}>
              <p style={{ fontWeight: 700, color: '#7a4f00', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Building2 size={18} color="#7a4f00" />
                المسار الثاني: التقديم عبر السفارات
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: '#7a4f00' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#FF9800" />
                  طباعة إفادة "إخطار القبول"
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#FF9800" />
                  تجهيز جواز السفر (6 أشهر) وصور شخصية
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#FF9800" />
                  تسليم الأوراق للسفارة المصرية
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                  <CheckCircle size={14} color="#FF9800" />
                  إصدار التأشيرة على وجه السرعة
                </li>
              </ul>
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <FileText size={18} color="#1B3A5C" />
            الإقامة الدراسية (بعد الوصول)
          </h4>
          <p>
            تعتبر الإقامة الدراسية هي الضمان القانوني الوحيد لاستمرار وجودك في مصر بشكل شرعي.
            يجب اتباع التسلسل الزمني الصحيح:
          </p>
          <div style={{
            marginTop: 12,
            padding: '14px 18px',
            background: '#fce8e8',
            borderRadius: 12,
            borderRight: '3px solid #e05555',
          }}>
            <p style={{ fontWeight: 700, color: '#7a2020', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertCircle size={18} color="#e05555" />
              <span> نصيحة ذهبية: لا تقم بسداد الرسوم الجامعية الكبيرة (مصروفات القيد والدراسة) إلا بعد التأكد من صدور التأشيرة والموافقة الأمنية، حيث أن هذه الرسوم غير مستردة في الغالب.</span>
            </p>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 12 }}>
            {[
              { step: '١', text: 'استخراج إثبات القيد من شؤون الطلاب بالجامعة (مختوم بختم "شعار الجمهورية")' },
              { step: '٢', text: 'التوجه لمجمع الجوازات (العباسية) وتقديم طلب الإقامة' },
              { step: '٣', text: 'سداد الرسوم واستلام إيصال التقديم (يحميك قانونياً داخل مصر)' },
              { step: '٤', text: 'استلام كارت الإقامة الذكي في الموعد المحدد' },
            ].map((item) => (
              <li key={item.step} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '8px 0', borderBottom: '1px solid #f0f4f8' }}>
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: '#2FA889',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.75rem',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  {item.step}
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <FolderOpen size={18} color="#1B3A5C" />
            المستندات المطلوبة للإقامة
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'أصل جواز السفر (سارٍ لمدة لا تقل عن 6 أشهر) + صور ضوئية',
              'أصل شهادة القيد الجامعي المختومة والحديثة (مختومة بالنسر)',
              'عدد (4) صور شخصية حديثة بخلفية بيضاء',
              'إيصال سداد الرسوم الإدارية المقررة من مصلحة الجوازات',
              'إثبات محل السكن (عقد إيجار موثق أو إفادة سكن من المدينة الجامعية)',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f4f8' }}>
                <FileText size={16} color="#2FA889" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: 16,
            padding: '14px 18px',
            background: '#e6f7f3',
            borderRadius: 12,
            borderRight: '3px solid #2FA889',
          }}>
            <p style={{ fontSize: '0.9rem', color: '#0a5540', display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertCircle size={18} color="#2FA889" />
              <strong>تنبيهات قانونية هامة:</strong>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: '#0a5540' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                <CheckCircle size={14} color="#2FA889" />
                يجب البدء في إجراءات الإقامة فور وصولك وعدم الانتظار حتى انتهاء مدة تأشيرة الدخول
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                <CheckCircle size={14} color="#2FA889" />
                الإقامة الدراسية تمنح لمدة عام واحد، ويجب البدء في التجديد قبل شهر على الأقل
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                <CheckCircle size={14} color="#2FA889" />
                إقامتك هي «للدراسة» فقط؛ ممارسة أي عمل تجاري أو مهني دون تصريح يعرضك للمساءلة
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                <CheckCircle size={14} color="#2FA889" />
                في حال تغيير محل السكن أو الجامعة، يجب إخطار مصلحة الجوازات خلال 48 ساعة
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'student-life',
      title: ' الحياة الطلابية في مصر',
      icon: <Home size={20} />,
      content: (
        <div style={{ fontSize: '0.95rem', color: '#4a6580', lineHeight: 2 }}>
          <p>
            تتميز الحياة الطلابية في مصر بالتنوع والثراء، حيث يجتمع طلاب من مختلف الجنسيات
            والثقافات في بيئة أكاديمية محفزة. إليك نظرة شاملة على جوانب الحياة المختلفة:
          </p>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Home size={18} color="#1B3A5C" />
            السكن
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: <Building2 size={16} color="#2FA889" />, text: 'السكن الجامعي: متوفر في معظم الجامعات بأسعار مخفضة للطلاب' },
              { icon: <Home size={16} color="#2FA889" />, text: 'السكن الخاص: شقق مفروشة للإيجار بأسعار تبدأ من 2,000 جنيه مصري شهرياً' },
              { icon: <Users size={16} color="#2FA889" />, text: 'السكن المشترك: خيار اقتصادي، حيث يتشارك الطلاب في الشقة' },
            ].map((item) => (
              <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f4f8' }}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div style={{
            marginTop: 12,
            padding: '12px 16px',
            background: '#fff3e0',
            borderRadius: 10,
            borderRight: '3px solid #FF9800',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#7a4f00', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Lightbulb size={18} color="#FF9800" />
              <span>
                <strong>نصيحة:</strong> يُفضل البحث عن السكن في المناطق القريبة من الجامعة
                لتوفير وقت ومواصلات، والتأكد من توفر وسائل الأمان والخدمات الأساسية.
              </span>
            </p>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <DollarSign size={18} color="#1B3A5C" />
            تكاليف المعيشة
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 12,
          }}>
            {[
              { title: 'السكن', desc: '2,000 - 5,000 جنيه / شهر' },
              { title: 'الطعام', desc: '1,500 - 3,000 جنيه / شهر' },
              { title: 'المواصلات', desc: '500 - 1,000 جنيه / شهر' },
              { title: 'المصروفات الشخصية', desc: '1,000 - 2,000 جنيه / شهر' },
            ].map((item) => (
              <div key={item.title} style={{
                background: '#f8fafc',
                borderRadius: 10,
                padding: '12px 14px',
                border: '1px solid #e8eef5',
              }}>
                <div style={{ fontWeight: 700, color: '#1B3A5C' }}>{item.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#8fa3b8' }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Train size={18} color="#1B3A5C" />
            المواصلات
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: <Train size={16} color="#2FA889" />, text: 'مترو الأنفاق: شبكة واسعة تغطي القاهرة الكبرى، ويوجد اشتراك مخفض للطلاب' },
              { icon: <Bus size={16} color="#2FA889" />, text: 'الأتوبيسات: وسيلة نقل اقتصادية تغطي جميع المناطق' },
              { icon: <Car size={16} color="#2FA889" />, text: 'التاكسي والتطبيقات: متوفرة بأسعار مختلفة (Uber, Careem)' },
            ].map((item) => (
              <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f4f8' }}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Utensils size={18} color="#1B3A5C" />
            الطعام
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: <Utensils size={16} color="#2FA889" />, text: 'مطاعم جامعية: وجبات بأسعار منخفضة داخل الحرم الجامعي' },
              { icon: <Coffee size={16} color="#2FA889" />, text: 'مطاعم عربية: مطاعم تقدم أطباقاً عربية وسودانية في مختلف المناطق' },
              { icon: <ShoppingBag size={16} color="#2FA889" />, text: 'أسواق ومحلات: توفر منتجات غذائية بأسعار تنافسية' },
            ].map((item) => (
              <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f4f8' }}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginTop: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Target size={18} color="#1B3A5C" />
            نصائح للطلاب الجدد
          </h4>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            {[
              { icon: <Smartphone size={16} color="#2FA889" />, text: 'احرص على التواصل مع الجالية السودانية في مصر للحصول على الدعم والمشورة' },
              { icon: <FileText size={16} color="#2FA889" />, text: 'احتفظ بنسخ من جميع مستنداتك (الشهادات، جواز السفر، الإقامة)' },
              { icon: <CreditCard size={16} color="#2FA889" />, text: 'افتح حساباً بنكياً في أحد البنوك المصرية لتسهيل التعاملات المالية' },
              { icon: <BookOpen size={16} color="#2FA889" />, text: 'استفد من المكتبات الجامعية والمراكز البحثية المتوفرة' },
              { icon: <Users size={16} color="#2FA889" />, text: 'شارك في الأنشطة الطلابية والثقافية للتعرف على ثقافة مصر' },
              { icon: <MessageCircle size={16} color="#2FA889" />, text: 'استخدم تطبيقات التواصل الاجتماعي للتواصل مع زملائك ومتابعة أخبار الجامعة' },
            ].map((tip) => (
              <div key={tip.text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 14px',
                background: '#f8fafc',
                borderRadius: 8,
                border: '1px solid #e8eef5',
                fontSize: '0.9rem',
                color: '#4a6580',
              }}>
                {tip.icon}
                <span>{tip.text}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 16,
            padding: '14px 18px',
            background: '#e6f7f3',
            borderRadius: 12,
            borderRight: '3px solid #2FA889',
          }}>
            <p style={{ fontSize: '0.9rem', color: '#0a5540', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Lightbulb size={18} color="#2FA889" />
              <span>
                <strong>كلمة أخيرة:</strong> الدراسة في مصر تجربة غنية ومميزة،
                استمتع بكل لحظة فيها، وكن دائماً على تواصل مع زملائك وأساتذتك،
                فالشبكة العلاقاتية التي تبنيها خلال سنوات الدراسة ستكون من أهم أصولك المستقبلية.
              </span>
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #122845 0%, #1B3A5C 50%, #1a5c42 100%)',
        padding: 'clamp(40px, 5vw, 60px) 5%',
      }} className='mt-16'>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/guides" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: 'rgba(255,255,255,.6)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            marginBottom: 16,
          }}>
            <ChevronLeft size={16} />
            جميع الأدلة
          </Link>
          <div>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🇪🇬</div>
            <h1 style={{
              fontSize: 'clamp(28px, 3vw, 38px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 4,
            }}>
              دليل الدراسة في مصر
            </h1>
            <p style={{
              fontSize: 'clamp(14px, 1vw, 16px)',
              color: 'rgba(255,255,255,.7)',
            }}>
              دليل شامل للطلاب السودانيين الراغبين في الدراسة في الجامعات المصرية
            </p>
          </div>
        </div>
      </div>

      {/* ACCORDION */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(30px, 4vw, 50px) 5%' }}>
        {accordionItems.map((item) => (
          <div
            key={item.id}
            id={`accordion-${item.id}`}
            style={{
              scrollMarginTop: 80,
            }}
          >
            <AccordionItem
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleItem(item.id)}
              index={accordionItems.indexOf(item)}
            />
          </div>
        ))}

        {/* CTA */}
        <div style={{
          marginTop: 40,
          background: 'linear-gradient(135deg, #122845, #1B3A5C)',
          borderRadius: 18,
          padding: 'clamp(24px, 3vw, 32px)',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontSize: 'clamp(18px, 1.5vw, 22px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: 8,
          }}>
            📚 هل تحتاج مساعدة إضافية؟
          </h3>
          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,.7)',
            marginBottom: 16,
          }}>
            فريقنا مستعد للإجابة على جميع استفساراتك حول الدراسة في مصر
          </p>
          <a
            href="https://wa.me/249123456789"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#25D366',
              color: '#fff',
              padding: '12px 32px',
              borderRadius: 50,
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}