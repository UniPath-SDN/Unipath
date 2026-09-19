'use client'

import styles from './faq.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Globe,
  Lock,
  Info,
  AlertTriangle,
  TrendingUp,
  GraduationCap,
  ClipboardList,
  BarChart3,
  DollarSign,
  Lightbulb,
  Wallet,
  Home,
  Target,
  Scale,
  ShieldCheck,
  Clock,
  MessageCircle,
  ChevronDown,
  AlertCircle,
  CheckCircle,
  XCircle,
  PenTool,
  RefreshCw,
  ClipboardCheck,
  Eye,
  Heart,
  BookOpen,
  Users,
  Edit,
  Mic,
  FileText,
  Star,
  MessageSquare,
  Languages,
  FileCheck,
  Swords,
  Bus,
  Book,
  MapPin,
  Mail,
  Clipboard,
} from 'lucide-react'

type Category = 'all' | 'guarantee' | 'admission' | 'services' | 'life' | 'special'

type FaqItem = {
  id: string
  cat: Exclude<Category, 'all'>
  icon: React.ReactNode
  question: string
  answer: React.ReactNode
}

const FAQ_ITEMS: FaqItem[] = [
  // 1. القبولات الخاصة
  {
    id: 'faq-special-admission',
    cat: 'special',
    icon: <Target size={22} color="#2FA889" />,
    question: 'ما هي القبولات الخاصة؟ وهل هي مضمونة 100%؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          <strong>القبولات الخاصة</strong> هي خدمة حصرية نقدمها بالتعاون مع جامعات معينة حول العالم، حيث نضمن لك <strong>قبولاً 100%</strong> في هذه الجامعات. هذه الخدمة تختلف تماماً عن خدمات التقديم على المنح الدراسية العادية، لأنها تعتمد على اتفاقيات مباشرة مع الجامعات.
        </p>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          من خلال هذه الخدمة، نوفر لك قناة مضمونة للقبول في جامعات مرموقة في مختلف التخصصات، مع توفير الدعم الكامل طوال العملية.
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: 14, background: '#e8f5e9', borderRadius: 12, borderRight: '3px solid #4CAF50' }}>
          <CheckCircle size={20} color="#4CAF50" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontSize: '.88rem', color: '#1b5e20', lineHeight: 1.8, fontWeight: 600 }}>
            <strong>ضمان 100%:</strong> في حال عدم حصولك على القبول في الجامعة المتفق عليها، نعيد لك كامل المبلغ المدفوع دون أي خصومات.
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: 14, background: '#fff3e0', borderRadius: 12, borderRight: '3px solid #FF9800', marginTop: 12 }}>
          <AlertCircle size={20} color="#FF9800" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontSize: '.88rem', color: '#7a4f00', lineHeight: 1.8, fontWeight: 600 }}>
            <strong>ملاحظة مهمة:</strong> السعر يشمل: رسوم التقديم، رسوم القبول، وتكاليف الخدمة المكتبية. رسوم الجامعة نفسها (إن وجدت) تُدفع مباشرة للجامعة، وهي منفصلة عن أتعابنا.
          </span>
        </div>
      </div>
    ),
  },
  // 2. الفرق بين المنح والقبولات الخاصة
  {
  id: 'faq-difference',
  cat: 'special',
  icon: <Scale size={22} color="#2FA889" />,
  question: 'ما الفرق بين التقديم على المنح والقبولات الخاصة؟',
  answer: (
    <div>
      <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
        هذا سؤال مهم جداً، لأن كثير من الطلاب يخلطون بين الخدمتين. إليك الفرق بالتفصيل:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 14 }}>
        {/* المنح الدراسية */}
        <div style={{ background: '#f8fafc', borderRadius: 12, padding: 18, border: '1px solid #e8eef5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, color: '#1B3A5C', marginBottom: 10 }}>
            <GraduationCap size={20} color="#1B3A5C" />
            <span>المنح الدراسية</span>
          </div>

          <ul style={{ fontSize: '.85rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 0, margin: 0, listStyle: 'none' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <XCircle size={16} color="#e05555" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>لا يوجد ضمان قبول</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <XCircle size={16} color="#e05555" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>الرسوم غير قابلة للاسترداد</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <Users size={16} color="#8fa3b8" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>القرار يعود للجهة المانحة</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <Swords size={16} color="#8fa3b8" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>عملية تنافسية مع آلاف الطلاب</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <FileText size={16} color="#8fa3b8" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>نقدم الدعم في تجهيز الملف فقط</span>
            </li>
          </ul>
        </div>

        {/* القبولات الخاصة */}
        <div style={{ background: '#e8f5e9', borderRadius: 12, padding: 18, border: '1px solid #4CAF50' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, color: '#1b5e20', marginBottom: 10 }}>
            <Target size={20} color="#4CAF50" />
            <span>القبولات الخاصة</span>
          </div>

          <ul style={{ fontSize: '.85rem', color: '#1b5e20', lineHeight: 2.2, paddingRight: 0, margin: 0, listStyle: 'none' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <CheckCircle size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>ضمان قبول 100%</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <DollarSign size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>استرداد كامل في حال الرفض</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <ShieldCheck size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>القرار مضمون من الجامعة</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <Clock size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>عملية سريعة ومباشرة</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <Eye size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: 4 }} />
              <span>إشراف كامل من فريقنا</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ background: '#e3f2fd', borderRadius: 12, padding: 14, borderRight: '3px solid #2196F3' }}>
        <span style={{ fontSize: '.88rem', color: '#0d47a1', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <Lightbulb size={16} color="#0d47a1" style={{ flexShrink: 0, marginTop: 3 }} />
          <span>
            <strong>الخلاصة:</strong> إذا كنت تبحث عن فرصة غير مضمونة ولكن مجانية، المنح هي خيارك. أما إذا كنت تريد ضماناً أكاديمياً مؤكداً وتستطيع الاستثمار في مستقبلك، فالقبولات الخاصة هي الحل الأمثل.
          </span>
        </span>
      </div>
    </div>
  ),
},
  // 3. الضمانات
  {
    id: 'faq-guarantee',
    cat: 'guarantee',
    icon: <ShieldCheck size={22} color="#2FA889" />,
    question: 'ما هي الضمانات التي تقدمونها لعملائكم؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          نقدم نوعين من الضمانات حسب الخدمة التي تختارها. نؤمن بالشفافية التامة، لذلك نوضح لك بالتفصيل ما يمكنك توقعه من كل خدمة:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: '#e8f5e9', borderRadius: 12, padding: 16, borderRight: '4px solid #4CAF50' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <CheckCircle size={18} color="#4CAF50" />
              <span style={{ fontWeight: 800, color: '#1b5e20' }}>القبولات الخاصة:</span>
            </div>
            <span style={{ fontSize: '.9rem', color: '#1b5e20' }}>
              ضمان قبول 100% في الجامعة المتعاقد معها. في حال عدم حصولك على القبول، نعيد لك كامل المبلغ المدفوع دون أي استثناءات. هذا الضمان مكتوب في العقد المبرم معك.
            </span>
          </div>
          <div style={{ background: '#fff3e0', borderRadius: 12, padding: 16, borderRight: '4px solid #FF9800' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <AlertCircle size={18} color="#FF9800" />
              <span style={{ fontWeight: 800, color: '#7a4f00' }}>خدمات المنح:</span>
            </div>
            <span style={{ fontSize: '.9rem', color: '#7a4f00' }}>
              لا يوجد ضمان قبول، لأن القرار يعود للجهة المانحة. لكننا نضمن جودة العمل والمتابعة المستمرة، ونقدم لك أفضل استشارة ممكنة بناءً على خبرتنا. في حال رغبت في إلغاء الخدمة بعد بدء العمل، لا يتم استرداد المبلغ لأن الجهد قد بُذل بالفعل.
            </span>
          </div>
        </div>
        <div style={{ background: '#e6f7f3', borderRadius: 12, padding: 14, borderRight: '3px solid #2FA889', marginTop: 12 }}>
          <span style={{ fontSize: '.88rem', color: '#0a5540', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <Lock size={16} color="#0a5540" style={{ flexShrink: 0, marginTop: 3 }} />
            <span>
              <strong>ضمان إضافي:</strong> جميع تعاملاتنا المالية موثقة وإيصالات الدفع تُرسل إليك فور استلام المبلغ. يمكنك التواصل معنا في أي وقت للاستفسار عن حالة طلبك.
            </span>
          </span>
        </div>
      </div>
    ),
  },
  // 4. التأشيرة
  {
    id: 'faq-visa',
    cat: 'services',
    icon: <Globe size={22} color="#2FA889" />,
    question: 'هل يمكن الحصول على عقد عمل أو فيزا من خلالكم؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          مؤسسة UniPath هي مؤسسة متخصصة بالمنح الدراسية والدراسة على الحساب الشخصي. نقدم مجموعة من الخدمات المتنوعة التي تشمل:
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Globe size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>التقديم على المنح الدراسية المتاحة حول العالم</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Heart size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>التقديم على فرص التطوع الدولية</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <BookOpen size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>التقديم على الكورسات والبرامج التدريبية</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Target size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>التقديم على الجامعات الخاصة (القبولات الخاصة)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <FileText size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>كتابة خطابات النية (SOP)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <MessageSquare size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>كتابة خطابات التوصية</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Languages size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>ترجمة المستندات الأكاديمية</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <FileCheck size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>تجهيز السيرة الذاتية (CV) الاحترافية</span>
          </li>
        </ul>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          نحن نركز على تقديم خدمات أكاديمية وتعليمية تساعدك في تحقيق أهدافك الدراسية.
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: 14, background: '#fef3e8', borderRadius: 12, borderRight: '3px solid #f4a01c' }}>
          <AlertCircle size={20} color="#f4a01c" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontSize: '.88rem', color: '#7a4f00', lineHeight: 1.8, fontWeight: 600 }}>
            <strong>تنبيه مهم:</strong> لسنا مكتب سفريات ولا نقدم خدمات توظيف. وبالتالي لا نستطيع مساعدتك في الحصول على تأشيرة لأي دولة، أو توفير فرص عمل. خدماتنا تنحصر في الجانب الأكاديمي والتعليمي فقط.
          </span>
        </div>
      </div>
    ),
  },
  // 5. القبول في المنح
  {
    id: 'faq-admission',
    cat: 'admission',
    icon: <GraduationCap size={22} color="#2FA889" />,
    question: 'هل تضمنون القبول في المنحة؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          <strong>لا، لا نضمن القبول في المنحة.</strong> هذا أمر مهم يجب أن يكون واضحاً لكل طالب. القبول في المنح الدراسية يعود بالكامل لتقييم لجنة المنحة، وهي تقوم بمراجعة آلاف الطلبات واختيار الأفضل وفقاً لمعاييرها.
        </p>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          لكن ما نستطيع تقديمه لك هو:
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <FileText size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>تقوية ملفك الأكاديمي بشكل احترافي</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Eye size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>الإشراف على كل خطوة في عملية التقديم</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Users size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>تقديم استشارات من أشخاص تم قبولهم في منح عالمية</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Edit size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>مراجعة وثائقك وتعديلها حسب متطلبات كل منحة</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Mic size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>تدريبك على المقابلات الشخصية</span>
          </li>
        </ul>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          نحن نزيد فرصك بشكل كبير، لكن القرار النهائي دائماً بيد لجنة التحكيم.
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: 14, background: '#fce8e8', borderRadius: 12, borderRight: '3px solid #e05555' }}>
          <XCircle size={20} color="#e05555" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontSize: '.88rem', color: '#7a2020', lineHeight: 1.8, fontWeight: 600 }}>
            <strong>تحذير:</strong> إذا أخبرتك أي شركة أنها تضمن القبول في منحة مجانية بنسبة 100% — فهذه الشركة تحاول الاحتيال عليك! المنح المجانية تنافسية بطبيعتها، ولا يمكن لأي طرف خارجي ضمان القبول فيها.
          </span>
        </div>
      </div>
    ),
  },
  // 6. نسبة القبول
  {
    id: 'faq-rate',
    cat: 'admission',
    icon: <BarChart3 size={22} color="#2FA889" />,
    question: 'هل نسبة قبولي عالية؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          هذا سؤال لا يمكن الإجابة عليه بشكل دقيق، لأن نسبة القبول تعتمد على عدة عوامل متغيرة:
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Star size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>قوة ملفك الأكاديمي (المعدل، الخبرات، الأنشطة)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Users size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>عدد المتقدمين في نفس الدورة</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Swords size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>قوة المنافسين معك على نفس المقعد</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Target size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>مدى توافق تخصصك مع أهداف المنحة</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <FileText size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>جودة خطابات التوصية والنية</span>
          </li>
        </ul>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          ما نفعله نحن هو تقديم أقوى ملف ممكن لك، لرفع فرصك إلى أقصى حد ممكن. نضمن لك أن ملفك سيكون من بين الأفضل، لكن القرار النهائي يعود للجنة المنحة.
        </p>
        <div style={{ background: '#e6f7f3', borderRadius: 12, padding: 14, borderRight: '3px solid #2FA889' }}>
          <span style={{ fontSize: '.88rem', color: '#0a5540', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <TrendingUp size={16} color="#0a5540" style={{ flexShrink: 0, marginTop: 3 }} />
            <span>
              <strong>ملاحظة:</strong> من خلال خبرتنا، الطلاب الذين يلتزمون بتوجيهاتنا ويرسلون مستنداتهم كاملة وفي الوقت المحدد، تكون فرصهم أعلى بكثير من غيرهم.
            </span>
          </span>
        </div>
      </div>
    ),
  },
  // 7. الاسترداد
  {
    id: 'faq-refund',
    cat: 'guarantee',
    icon: <DollarSign size={22} color="#2FA889" />,
    question: 'هل يمكنني استرداد المال إذا لم أحصل على القبول؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          هذا يعتمد بشكل كامل على <strong>نوع الخدمة</strong> التي اخترتها. إليك التفاصيل:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: '#e8f5e9', borderRadius: 12, padding: 16, borderRight: '4px solid #4CAF50' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <CheckCircle size={18} color="#4CAF50" />
              <span style={{ fontWeight: 800, color: '#1b5e20' }}>القبولات الخاصة:</span>
            </div>
            <p style={{ fontSize: '.9rem', color: '#1b5e20', margin: 0 }}>
              <strong>نعم، نعيد لك كامل المبلغ</strong> في حال عدم حصولك على القبول في الجامعة المتفق عليها. هذا مكفول بعقد رسمي، ولا توجد أي خصومات أو استثناءات.
            </p>
          </div>
          <div style={{ background: '#fce8e8', borderRadius: 12, padding: 16, borderRight: '4px solid #e05555' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <XCircle size={18} color="#e05555" />
              <span style={{ fontWeight: 800, color: '#7a2020' }}>خدمات المنح:</span>
            </div>
            <p style={{ fontSize: '.9rem', color: '#7a2020', margin: 0 }}>
              <strong>لا، المبلغ غير قابل للاسترداد.</strong> لأننا لا نضمن القبول، وأنت لا تدفع المال من أجل القبول، بل من أجل الجهد والوقت الذي نستثمره في ملفك. فريقنا يبذل جهداً حقيقياً في كل ملف، بغض النظر عن النتيجة النهائية.
            </p>
          </div>
        </div>
        <div style={{ background: '#fff3e0', borderRadius: 12, padding: 14, borderRight: '3px solid #FF9800', marginTop: 14 }}>
          <span style={{ fontSize: '.88rem', color: '#7a4f00', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <AlertTriangle size={16} color="#7a4f00" style={{ flexShrink: 0, marginTop: 3 }} />
            <span>
              <strong>استثناء:</strong> إذا تأخر العميل في إرسال المستندات أو كانت غير مكتملة أو قرر الانسحاب بعد بدء العمل، لا يتم استرداد المبلغ في كلا الخدمتين، لأن الجهد قد بُذل بالفعل.
            </span>
          </span>
        </div>
      </div>
    ),
  },
  // 8. لماذا مدفوعة؟
  {
    id: 'faq-paid',
    cat: 'services',
    icon: <Lightbulb size={22} color="#2FA889" />,
    question: 'لماذا خدماتكم مدفوعة والمنح نفسها مجانية؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          هذا سؤال يطرحه الكثير من الطلاب، والإجابة بسيطة وواضحة:
        </p>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          <strong>المنحة نفسها مجانية وممولة بالكامل</strong> من قبل الحكومة أو المؤسسة المانحة. لكن <strong>خدماتنا</strong> التي نقدمها لك هي مقابل:
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Clock size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>وقت وجهد فريقنا في دراسة ملفك</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <PenTool size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>خبرتنا في كتابة المستندات الأكاديمية</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <RefreshCw size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>متابعتنا المستمرة لطلبك مع الجهة المانحة</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Lightbulb size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>استشاراتنا المبنية على خبرة سنوات</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <ClipboardCheck size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>إشرافنا الكامل على كل خطوة</span>
          </li>
        </ul>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          باختصار، أنت لا تدفع ثمن المنحة، بل تدفع ثمن <strong>الخبرة والجهد والوقت</strong> الذي نستثمره فيك لضمان أن ملفك يصل بالشكل الصحيح وبجودة عالية.
        </p>
        <div style={{ background: '#e6f7f3', borderRadius: 12, padding: 14, borderRight: '3px solid #2FA889' }}>
          <span style={{ fontSize: '.88rem', color: '#0a5540', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <Lightbulb size={16} color="#0a5540" style={{ flexShrink: 0, marginTop: 3 }} />
            <span>
              <strong>تذكر:</strong> المنحة المجانية قد تكون فرصة العمر، لكن الاستثمار في ملفك الاحترافي يزيد فرصك في الحصول عليها بشكل كبير. خدماتنا هي استثمار في مستقبلك.
            </span>
          </span>
        </div>
      </div>
    ),
  },
  // 9. مرتب المنحة
  {
    id: 'faq-salary',
    cat: 'life',
    icon: <Wallet size={22} color="#2FA889" />,
    question: 'هل مرتب المنحة كافٍ للمعيشة في الخارج؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          هذا سؤال مهم جداً، والإجابة تعتمد على عدة عوامل. بشكل عام، <strong>مرتب المنحة يكفي لتغطية احتياجاتك الأساسية</strong> في معظم الحالات، لكن هناك عوامل تؤثر:
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Globe size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>الدولة التي ستدرس فيها (بعض الدول أغلى من غيرها)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Home size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>نوع السكن الذي تختاره (سكن جامعي أو خاص)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Heart size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>نمط حياتك الشخصي وعادات الإنفاق</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Bus size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>استخدام وسائل النقل العامة أو الخاصة</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
            <Book size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>تكاليف الكتب والمواد الدراسية الإضافية</span>
          </li>
        </ul>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          <strong>من خبرتنا:</strong>
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14 }}>
          <li>أكثر من <strong>80% من الطلاب</strong> يكفيهم مرتب المنحة لتغطية جميع احتياجاتهم الأساسية.</li>
          <li>النسبة المتبقية (20%) لا يكفيهم ذلك بسبب نمط حياتهم الشخصي أو اختياراتهم المالية.</li>
        </ul>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          باختصار: <strong>يعتمد على طبيعة إنفاقك وإدارتك للميزانية الشخصية.</strong> معظم الطلاب يتمكنون من العيش بشكل مريح ضمن ميزانية المنحة.
        </p>
        <div style={{ background: '#e3f2fd', borderRadius: 12, padding: 14, borderRight: '3px solid #2196F3' }}>
          <span style={{ fontSize: '.88rem', color: '#0d47a1', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <Lightbulb size={16} color="#0d47a1" style={{ flexShrink: 0, marginTop: 3 }} />
            <span>
              <strong>نصيحة:</strong> ننصحك بالبحث عن تكاليف المعيشة في الدولة التي تستهدفها قبل التقديم، حتى تكون على دراية كاملة بما يمكنك توقعه.
            </span>
          </span>
        </div>
      </div>
    ),
  },
  // 10. السكن
  {
    id: 'faq-housing',
    cat: 'life',
    icon: <Home size={22} color="#2FA889" />,
    question: 'عدد الطلاب في الغرفة ومعلومات السكن والجامعة؟',
    answer: (
      <div>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          هذه التفاصيل الدقيقة تحصل عليها <strong>فقط بعد القبول النهائي</strong> من هيئة المنحة أو الجامعة. لكننا نوضح لك ما يمكن توقعه:
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
            <Users size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span><strong>عدد زملاء الغرفة:</strong> يختلف حسب الجامعة ونوع السكن. في السكن الجامعي، عادةً يكون 2-4 طلاب في الغرفة. في السكن الخاص، يمكن أن تكون غرفة فردية.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
            <MapPin size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span><strong>الجامعة:</strong> يتم تحديدها من قبل هيئة المنحة بناءً على تخصصك واختياراتك.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
            <Home size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span><strong>تفاصيل السكن:</strong> تشمل المرافق، القرب من الجامعة، الخدمات المتوفرة.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
            <DollarSign size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span><strong>التكاليف:</strong> بعض المنح توفر سكن مجاني، وبعضها يمنحك بدل سكن تغطي به نفقاتك.</span>
          </li>
        </ul>
        <p style={{ fontSize: '.95rem', color: '#4a6580', lineHeight: 2, marginBottom: 14 }}>
          <strong>متى تحصل على هذه المعلومات؟</strong>
        </p>
        <ul style={{ fontSize: '.9rem', color: '#4a6580', lineHeight: 2.2, paddingRight: 20, marginBottom: 14, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
            <Mail size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>بعد إعلان النتائج النهائية، ترسل لك هيئة المنحة حزمة ترحيبية تحتوي على كل التفاصيل.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
            <Clipboard size={18} color="#2FA889" style={{ flexShrink: 0, marginTop: 4 }} />
            <span>تتضمن الحزمة: اسم الجامعة، تفاصيل السكن، عدد الطلاب في الغرفة، مواعيد البدء، وغيرها.</span>
          </li>
        </ul>
        <div style={{ background: '#e6f7f3', borderRadius: 12, padding: 14, borderRight: '3px solid #2FA889' }}>
          <span style={{ fontSize: '.88rem', color: '#0a5540', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <MessageCircle size={16} color="#0a5540" style={{ flexShrink: 0, marginTop: 3 }} />
            <span>
              <strong>نصيحة:</strong> حتى تحصل على هذه المعلومات، ننصحك بالتواصل مع طلاب سابقين في نفس المنحة، فهم يقدمون لك صورة واقعية عن السكن والحياة هناك.
            </span>
          </span>
        </div>
      </div>
    ),
  },
]

const CATS: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'الكل', icon: null },
  { key: 'special', label: 'القبولات الخاصة', icon: <Target size={18} color="#2FA889" /> },
  { key: 'guarantee', label: 'الضمانات والدفع', icon: <ShieldCheck size={18} color="#2FA889" /> },
  { key: 'admission', label: 'القبول والنتائج', icon: <GraduationCap size={18} color="#2FA889" /> },
  { key: 'services', label: 'خدماتنا', icon: <ClipboardList size={18} color="#2FA889" /> },
  { key: 'life', label: 'الحياة بعد القبول', icon: <Home size={18} color="#2FA889" /> },
]

const WA = 'https://wa.me/201500276855'
const WA_MSG = encodeURIComponent('السلام عليكم، عندي سؤال عن خدمات UniPath')

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className={styles.head}>
        <div className={styles.icon}>{item.icon}</div>
        <div className={styles.question}>{item.question}</div>
        <div className={`${styles.arrow} ${open ? styles.arrowRotated : ''}`}>
          <ChevronDown size={18} />
        </div>
      </div>
      {open && (
        <div className={styles.body} onClick={(e) => e.stopPropagation()}>
          {item.answer}
        </div>
      )}
    </div>
  )
}

export default function FaqClient() {
  const [activeCat, setActiveCat] = useState<Category>('all')
  const filtered = FAQ_ITEMS.filter(
    (f) => activeCat === 'all' || f.cat === activeCat
  )

  return (
    <div className={styles.faqPage}>
      <Navbar activePage="faq" />

      {/* HERO */}
      <section className={styles.faqHero}>
        <div className={styles.breadcrumb}>
          <Link href="/" style={{ color: '#3cc4a0', textDecoration: 'none' }}>
            الرئيسية
          </Link>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,.7)' }}>الأسئلة الشائعة</span>
        </div>
        <h1 className={styles.heroTitle}>الأسئلة الشائعة</h1>
        <p className={styles.heroText}>
          إجابات واضحة وصادقة على كل ما يدور في بالك قبل التقديم — لأن ثقتك أهم شيء عندنا.
        </p>
        <div className={styles.heroStats}>
          <div style={{ textAlign: 'center' }}>
            <div className={styles.statNum}>
              <span>{FAQ_ITEMS.length}</span>
            </div>
            <div className={styles.statLabel}>سؤال شائع</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className={styles.statNum}>
              <span>24</span>h
            </div>
            <div className={styles.statLabel}>وقت الرد</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className={styles.statNum}>
              <span>مجاناً</span>
            </div>
            <div className={styles.statLabel}>الاستشارة الأولى</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* NOTICE */}
        <div className={styles.notice}>
          <div className={styles.noticeIcon}>
            <Info size={24} color="#0a5540" />
          </div>
          <div>
            <strong>مؤسسة UniPath — من نحن بالضبط؟</strong>
            <p>
              نرحب بك في مؤسسة UniPath — مختصون في المنح الدراسية والدراسة على الحساب الشخصي. نقدم خدمات التقديم على الفرص والمنح وفرص التطوع والكورسات والجامعات الخاصة وخدمات الوثائق كخطاب النية وخطاب التوصية وغيرها.{' '}
              <strong style={{ color: '#0a5540' }}>لسنا مكتب سفريات</strong> ولا نساعد في استخراج التأشيرات.
            </p>
          </div>
        </div>

        {/* CATS */}
        <div className={styles.cats}>
          {CATS.map((c) => (
            <button
              key={c.key}
              className={`${styles.catBtn} ${activeCat === c.key ? styles.catActive : ''}`}
              onClick={() => setActiveCat(c.key)}
            >
              {c.icon && c.icon}
              {c.label}
            </button>
          ))}
        </div>

        {/* FAQ GRID */}
        <div className={styles.grid}>
          {filtered.map((item) => (
            <FaqAccordion key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>لسّه عندك سؤال؟</h2>
          <p className={styles.ctaText}>
            فريقنا جاهز يجاوبك — استشارتك الأولى مجانية تماماً
          </p>
          <div className={styles.ctaBtns}>
            <a
              href={`${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWa}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل عبر واتساب
            </a>
            <Link href="/scholarships" className={styles.btnOutline}>
              تصفح المنح
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      {/* WA FLOAT */}
      <a
        href={`${WA}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waFloat}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}