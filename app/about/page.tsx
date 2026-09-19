// app/about/page.tsx
'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Users,
  Award,
  Globe,
  BookOpen,
  Shield,
  TrendingUp,
  Heart,
  Target,
  FileText,
  Languages,
  ClipboardList,
  MessageCircle,
  CheckCircle,
  GraduationCap,
  Sparkles,
  PenTool,
  RefreshCw,
  Lightbulb,
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />

      {/* ✅ HERO */}
      <div className='mt-14' style={{
        background: 'linear-gradient(135deg, #122845 0%, #1B3A5C 50%, #1a5c42 100%)',
        padding: 'clamp(60px, 8vw, 100px) 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,168,137,.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(60,196,160,.08) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(47,168,137,.15)',
            border: '1px solid rgba(47,168,137,.4)',
            color: '#3cc4a0',
            padding: '6px 20px',
            borderRadius: 50,
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: 20,
          }}>
            من نحن
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.3,
            marginBottom: 16,
          }}>
            نصنع <span style={{ color: '#3cc4a0' }}>المستقبل</span> الأكاديمي
            <br />
            <span style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 400, color: 'rgba(255,255,255,.6)' }}>
              معاً نحو تعليم عالمي
            </span>
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 1.2vw, 18px)',
            color: 'rgba(255,255,255,.7)',
            maxWidth: 640,
            margin: '0 auto 32px',
            lineHeight: 2,
          }}>
            UniPath هي منصة رائدة في مجال المنح الدراسية والخدمات الأكاديمية،
            نؤمن بأن التعليم هو المفتاح الحقيقي لتغيير حياة الأفراد والمجتمعات.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/201500276855?text=${encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات UniPath')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#fff',
                padding: '12px 32px',
                borderRadius: 50,
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all .3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              تواصل معنا
            </a>
            <Link
              href="/scholarships"
              style={{
                background: 'rgba(255,255,255,.08)',
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,.25)',
                padding: '12px 32px',
                borderRadius: 50,
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all .3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,.16)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              استعرض المنح
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ OUR VALUES */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 70px) 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: '#2FA889',
            marginBottom: 8,
          }}>
            قيمنا
          </span>
          <h2 style={{
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            fontWeight: 900,
            color: '#1B3A5C',
            marginBottom: 12,
          }}>
            ما الذي نؤمن به؟
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.1vw, 17px)', color: '#8fa3b8', maxWidth: 560, margin: '0 auto' }}>
            مبادئنا هي البوصلة التي توجه كل خطوة نقدمها في رحلتنا معك.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
        }}>
          {[
            { icon: <Users size={32} color="#2FA889" />, title: 'الطالب أولاً', desc: 'نضع احتياجات الطالب في قلب كل قرار نتخذه.' },
            { icon: <Award size={32} color="#2FA889" />, title: 'الجودة والتميز', desc: 'نقدم خدمات عالية الجودة وفق أعلى المعايير الأكاديمية.' },
            { icon: <Globe size={32} color="#2FA889" />, title: 'الانفتاح العالمي', desc: 'نربط الطلاب بفرص دراسية في أفضل الجامعات حول العالم.' },
            { icon: <Shield size={32} color="#2FA889" />, title: 'الشفافية', desc: 'نعمل بوضوح ونوضح لك كل خطوة في رحلتك الأكاديمية.' },
            { icon: <TrendingUp size={32} color="#2FA889" />, title: 'التطوير المستمر', desc: 'نتعلم ونتطور دائماً لنقدم لك الأفضل.' },
            { icon: <Heart size={32} color="#2FA889" />, title: 'الشغف', desc: 'نؤمن بأن التعليم هو الطريق لتغيير الحياة.' },
          ].map((item) => (
            <div key={item.title} style={{
              background: '#fff',
              borderRadius: 16,
              padding: '24px 20px',
              textAlign: 'center',
              border: '1px solid #e8eef5',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,58,92,.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#e6f7f3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginBottom: 6 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#8fa3b8', lineHeight: 1.8 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ OUR STORY / WHY US */}
      <div style={{ background: '#fff', borderTop: '1px solid #e8eef5', borderBottom: '1px solid #e8eef5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 70px) 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: '#2FA889',
              marginBottom: 8,
            }}>
              قصتنا
            </span>
            <h2 style={{
              fontSize: 'clamp(22px, 2vw, 28px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: 16,
            }}>
              لماذا UniPath؟
            </h2>
            <p style={{ fontSize: 'clamp(15px, 1.1vw, 16px)', color: '#4a6580', lineHeight: 2, marginBottom: 16 }}>
              انطلقت UniPath من رؤية واضحة: <strong>تذليل العقبات أمام الطلاب الراغبين في الدراسة بالخارج</strong>.
              ندرك أن عملية التقديم على المنح والجامعات قد تكون معقدة ومربكة، لذا قررنا أن نكون الشريك الموثوق الذي يرافقك
              من البداية وحتى النهاية.
            </p>
            <p style={{ fontSize: 'clamp(15px, 1.1vw, 16px)', color: '#4a6580', lineHeight: 2 }}>
              فريقنا مكوّن من خبراء أكاديميين ومستشارين ذوي خبرة في المنح الدولية، يجمعهم شغف واحد:
              <strong> تمكين الطلاب من تحقيق أحلامهم الأكاديمية.</strong>
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            alignContent: 'start',
          }}>
            {[
              { num: '3+', label: 'سنوات من الخبرة', icon: <Sparkles size={20} color="#2FA889" /> },
              { num: '37', label: 'دولة حول العالم', icon: <Globe size={20} color="#2FA889" /> },
              { num: '1K+', label: 'طالب استفاد من خدماتنا', icon: <Users size={20} color="#2FA889" /> },
              { num: '100%', label: 'ضمان القبول للقبولات الخاصة', icon: <CheckCircle size={20} color="#2FA889" /> },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: '#f8fafc',
                borderRadius: 12,
                padding: '20px 16px',
                textAlign: 'center',
                border: '1px solid #e8eef5',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 4 }}>
                  {stat.icon}
                  <div style={{ fontSize: 'clamp(24px, 2vw, 32px)', fontWeight: 900, color: '#2FA889' }}>
                    {stat.num}
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8fa3b8', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ SERVICES WE OFFER */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 70px) 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: '#2FA889',
            marginBottom: 8,
          }}>
            خدماتنا
          </span>
          <h2 style={{
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            fontWeight: 900,
            color: '#1B3A5C',
            marginBottom: 12,
          }}>
            ماذا نقدم لك؟
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {[
            { icon: <Target size={24} color="#2FA889" />, title: 'القبولات الخاصة', desc: 'خدمة مضمونة 100% للقبول في الجامعات المتعاقد معها.' },
            { icon: <GraduationCap size={24} color="#2FA889" />, title: 'المنح الدراسية', desc: 'مساعدتك في التقديم على أفضل المنح العالمية خطوة بخطوة.' },
            { icon: <FileText size={24} color="#2FA889" />, title: 'إعداد المستندات', desc: 'كتابة خطابات النية، التوصيات، السير الذاتية بجودة احترافية.' },
            { icon: <Languages size={24} color="#2FA889" />, title: 'ترجمة معتمدة', desc: 'ترجمة المستندات الرسمية للغات المطلوبة.' },
            { icon: <MessageCircle size={24} color="#2FA889" />, title: 'استشارات أكاديمية', desc: 'إرشادك لاختيار الجامعة والتخصص المناسب لمسيرتك.' },
            { icon: <ClipboardList size={24} color="#2FA889" />, title: 'متابعة التقديم', desc: 'متابعة طلبك مع الجهات المانحة حتى تصل إلى النتيجة.' },
          ].map((service) => (
            <div key={service.title} style={{
              background: '#fff',
              borderRadius: 14,
              padding: '20px 22px',
              border: '1px solid #e8eef5',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#2FA889'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(47,168,137,.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e8eef5'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: '#e6f7f3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12,
              }}>
                {service.icon}
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginBottom: 4 }}>
                {service.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#8fa3b8', lineHeight: 1.8 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #122845 0%, #1B3A5C 50%, #1a5c42 100%)',
        padding: 'clamp(40px, 5vw, 64px) 5%',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: 12,
          }}>
            جاهز تبدأ رحلتك الأكاديمية؟
          </h2>
          <p style={{
            fontSize: 'clamp(15px, 1.1vw, 17px)',
            color: 'rgba(255,255,255,.65)',
            lineHeight: 2,
            marginBottom: 28,
          }}>
            تواصل معنا اليوم، و دعنا نساعدك في تحقيق حلمك الدراسي.
          </p>
          <a
            href={`https://wa.me/201500276855?text=${encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات UniPath')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: '#fff',
              padding: '14px 40px',
              borderRadius: 50,
              fontWeight: 800,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            تواصل الآن
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}