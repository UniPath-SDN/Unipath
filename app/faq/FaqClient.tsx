'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Category = 'all' | 'guarantee' | 'admission' | 'services' | 'life'

type FaqItem = {
  id: string
  cat: Exclude<Category, 'all'>
  icon: string
  question: string
  answer: React.ReactNode
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-visa',
    cat: 'services',
    icon: '🌍',
    question: 'هل يمكن الحصول على عقد عمل أو فيزا من خلالكم؟',
    answer: (
      <div>
        <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2, marginBottom:14 }}>
          مؤسسة UniPath مختصة بالمنح الدراسية والدراسة على الحساب الشخصي — نقدم خدمة التقديم على الفرص والمنح المتاحة وفرص التطوع وبعض الكورسات والتقديم على الجامعات الخاصة والعديد من الخدمات التي تحتاجها أثناء التقديم على أي فرصة دراسية مثل خطاب النية وخطاب التوصية وغيرها.
        </p>
        <div style={{ display:'flex', alignItems:'flex-start', gap:10, padding:14, background:'#fef3e8', borderRadius:12, borderRight:'3px solid #f4a01c' }}>
          <span style={{ fontSize:'1.1rem', flexShrink:0 }}>⚠️</span>
          <span style={{ fontSize:'.88rem', color:'#7a4f00', lineHeight:1.8, fontWeight:600 }}>
            بإختصار: لسنا مكتب سفريات — وبالتالي لا نستطيع مساعدتك في الحصول على تأشيرة لدولة ما.
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'faq-guarantee',
    cat: 'guarantee',
    icon: '🔒',
    question: 'ما هو الضمان بعد الدفع؟',
    answer: (
      <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2 }}>
        يتم إرسال إيصال دفع إلكتروني في غضون ساعات من الدفع عبر البريد الإلكتروني أو رقم الواتساب. من بين الضمانات أيضاً المحادثة الكتابية الموجودة بينك كعميل وبين الشركة.
        <br/><br/>
        تواجدك هنا لا يعني إلا أنك تعتبرنا أهلاً للثقة — نقدر جداً ثقتك بنا ونتمنى أن نكون عند حسن الظن!
      </p>
    ),
  },
  {
    id: 'faq-admission',
    cat: 'admission',
    icon: '🎓',
    question: 'هل تضمنون القبول في المنحة؟',
    answer: (
      <div>
        <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2, marginBottom:14 }}>
          نحن لا نضمن القبول في المنحة — فهذا يعود لتقييم هيئة المنحة. لكن نقوّي ملفك ونشرف عليه ونساعدك خطوة بخطوة من خلال استشارات مقدَّمة من أشخاص تم قبولهم في منح عالمية مسبقاً.
        </p>
        <div style={{ display:'flex', alignItems:'flex-start', gap:10, padding:14, background:'#fce8e8', borderRadius:12, borderRight:'3px solid #e05555' }}>
          <span style={{ fontSize:'1.1rem', flexShrink:0 }}>⚠️</span>
          <span style={{ fontSize:'.88rem', color:'#7a2020', lineHeight:1.8, fontWeight:600 }}>
            تحذير: إذا أخبرتك أي شركة أنها تضمن القبول في منحة مجانية — فهذه الشركة ستحتال عليك!
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'faq-rate',
    cat: 'admission',
    icon: '📊',
    question: 'هل نسبة قبولي عالية؟',
    answer: (
      <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2 }}>
        هذا راجع لتقييم هيئة المنحة، كما أنه يعتمد على قوة المتقدمين في نفس الدورة والمنافسين معك على نفس المقعد.
        <br/><br/>
        ما نفعله هو تقديم أقوى ملف ممكن لرفع فرصك إلى أقصى حد — لكن القرار النهائي دائماً بيد لجنة التحكيم.
      </p>
    ),
  },
  {
    id: 'faq-refund',
    cat: 'guarantee',
    icon: '💸',
    question: 'هل يمكنني استرداد المال إذا لم أحصل على القبول؟',
    answer: (
      <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2 }}>
        لا — لأننا لا نضمن القبول، وأنت لا تدفع المال من أجل القبول بل لرفع نسبة قبولك من خلال الخدمات التي نقدمها.
        <br/><br/>
        الفريق يبذل جهداً ووقتاً حقيقياً في كل ملف بغض النظر عن نتيجة المنحة.
      </p>
    ),
  },
  {
    id: 'faq-paid',
    cat: 'services',
    icon: '💡',
    question: 'لماذا خدماتكم مدفوعة والمنح نفسها مجانية؟',
    answer: (
      <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2 }}>
        بالفعل، المنحة والتطوع نفسهما مجانيان وممولان بالكامل. لكن المبلغ الذي تدفعه هو مقابل تهيئتك وإعدادك بواسطة فريقنا — الفريق يأخذ من وقته ومجهوده للإشراف على طلباتك وتوجيهك خطوة بخطوة.
      </p>
    ),
  },
  {
    id: 'faq-salary',
    cat: 'life',
    icon: '💰',
    question: 'هل مرتب المنحة كافٍ للمعيشة؟',
    answer: (
      <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2 }}>
        يختلف المصروف الشخصي لكل طالب على حسب طبيعة شخصيته وقدرته على إدارة الأموال.
        <br/><br/>
        أكثر من 80% من الطلاب يكفيهم مرتب المنحة — والعدد المتبقي بسبب نمط حياتهم الشخصي قد لا يكفيهم. بإختصار: يعتمد على طبيعة إنفاقك.
      </p>
    ),
  },
  {
    id: 'faq-housing',
    cat: 'life',
    icon: '🏠',
    question: 'عدد الطلاب في الغرفة ومعلومات السكن والجامعة؟',
    answer: (
      <p style={{ fontSize:'.95rem', color:'#4a6580', lineHeight:2 }}>
        هذه المعلومات ستحصل عليها بالكامل عند القبول النهائي من هيئة المنحة مباشرةً — عدد زملاء الغرفة، الجامعة التي ستدرس فيها، وتفاصيل السكن كلها تُحدَّد لاحقاً بعد إعلان النتائج.
      </p>
    ),
  },
]

const CATS: { key: Category; label: string }[] = [
  { key: 'all',       label: 'الكل' },
  { key: 'guarantee', label: 'الضمانات والدفع' },
  { key: 'admission', label: 'القبول والنتائج' },
  { key: 'services',  label: 'خدماتنا' },
  { key: 'life',      label: 'الحياة بعد القبول' },
]

const WA     = 'https://wa.me/249123456789'
const WA_MSG = encodeURIComponent('السلام عليكم، عندي سؤال عن خدمات UniPath')

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-card ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="faq-head">
        <div className="faq-icon">{item.icon}</div>
        <div className="faq-question">{item.question}</div>
        <div className={`faq-arrow ${open ? 'rotated' : ''}`}>▾</div>
      </div>
      {open && (
        <div className="faq-body" onClick={e => e.stopPropagation()}>
          {item.answer}
        </div>
      )}
    </div>
  )
}

export default function FaqClient() {
  const [activeCat, setActiveCat] = useState<Category>('all')
  const filtered = FAQ_ITEMS.filter(f => activeCat === 'all' || f.cat === activeCat)

  return (
    <>
      <style>{`
        :root {
          --navy: #1B3A5C;
          --navy-dark: #122845;
          --teal: #2FA889;
          --teal-light: #3cc4a0;
          --teal-pale: #e6f7f3;
          --gray-200: #e2eaf2;
          --gray-400: #8fa3b8;
          --gray-600: #4a6580;
        }

        .faq-page { font-family:'Cairo',sans-serif; color:#0f2236; direction:rtl; }

        /* PAGE HERO */
        .faq-hero {
          background: var(--navy);
          padding: 140px 60px 80px;
          position: relative; overflow: hidden;
          text-align: center;
        }
        .faq-hero::before {
          content:''; position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size:60px 60px;
        }
        .faq-hero::after {
          content:''; position:absolute;
          top:-200px; left:-200px;
          width:600px; height:600px; border-radius:50%;
          background:radial-gradient(circle,rgba(47,168,137,.12) 0%,transparent 70%);
        }
        .faq-hero > * { position:relative; z-index:1; }
        .faq-hero .breadcrumb { font-size:.85rem; color:rgba(255,255,255,.5); margin-bottom:16px; display:flex; align-items:center; justify-content:center; gap:8px; }
        .faq-hero .breadcrumb a { color:#3cc4a0; text-decoration:none; }
        .faq-hero h1 { font-family:'Cairo',sans-serif; font-size:clamp(2rem,4vw,3rem); font-weight:900; color:white; margin-bottom:16px; }
        .faq-hero p { color:rgba(255,255,255,.7); font-size:1.05rem; max-width:560px; margin:0 auto 44px; line-height:2; }

        /* HERO STATS */
        .faq-hero-stats { display:flex; align-items:center; justify-content:center; gap:48px; }
        .faq-hero-stat-num { font-family:'Cairo',sans-serif; font-size:2rem; font-weight:900; color:white; }
        .faq-hero-stat-num span { color:#2FA889; }
        .faq-hero-stat-label { font-size:.85rem; color:rgba(255,255,255,.55); margin-top:4px; }

        /* NOTICE */
        .faq-notice {
          background: var(--teal-pale);
          border: 1.5px solid rgba(47,168,137,.25);
          border-radius: 18px;
          padding: 22px 26px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 40px;
        }
        .faq-notice-icon { font-size:1.6rem; flex-shrink:0; margin-top:2px; }
        .faq-notice strong { display:block; font-size:1rem; font-weight:800; color:#0a5540; margin-bottom:6px; font-family:'Cairo',sans-serif; }
        .faq-notice p { font-size:.9rem; color:#1a6b50; line-height:1.9; margin:0; }

        /* CATS */
        .faq-cats { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:40px; }
        .faq-cat-btn {
          padding:9px 22px; border-radius:50px; font-size:.9rem; font-weight:700;
          cursor:pointer; border:1.5px solid var(--gray-200); background:white;
          color:var(--gray-600); font-family:'Cairo',sans-serif; transition:all .2s;
        }
        .faq-cat-btn:hover { border-color:var(--teal); color:var(--teal); }
        .faq-cat-btn.active { background:var(--navy); color:white; border-color:var(--navy); }

        /* FAQ CARDS */
        .faq-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; margin-bottom:60px; }
        .faq-card {
          background:white; border-radius:18px; border:1.5px solid var(--gray-200);
          overflow:hidden; transition:all .25s; cursor:pointer;
        }
        .faq-card:hover { border-color:var(--gray-400); box-shadow:0 8px 30px rgba(27,58,92,.08); }
        .faq-card.open { border-color:var(--teal); box-shadow:0 12px 40px rgba(47,168,137,.12); }
        .faq-head { display:flex; align-items:center; gap:14px; padding:20px 22px; }
        .faq-icon { width:42px; height:42px; border-radius:12px; background:var(--teal-pale); display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0; }
        .faq-card.open .faq-icon { background:rgba(47,168,137,.2); }
        .faq-question { flex:1; font-size:.95rem; font-weight:700; color:var(--navy); line-height:1.6; text-align:right; }
        .faq-arrow { color:var(--gray-400); font-size:1rem; flex-shrink:0; transition:transform .25s, color .25s; }
        .faq-arrow.rotated { transform:rotate(180deg); color:var(--teal); }
        .faq-body { padding:0 22px 22px 22px; border-top:1px solid #f0f4f8; padding-top:18px; }

        /* CTA SECTION */
        .faq-cta {
          background: linear-gradient(135deg, var(--navy), #2a4f78);
          border-radius: 24px;
          padding: 52px 60px;
          text-align: center;
          position: relative; overflow: hidden;
          margin-bottom: 0;
        }
        .faq-cta::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size:60px 60px; }
        .faq-cta > * { position:relative; z-index:1; }
        .faq-cta h2 { font-family:'Cairo',sans-serif; font-size:clamp(1.6rem,3vw,2.2rem); font-weight:900; color:white; margin-bottom:12px; }
        .faq-cta p { color:rgba(255,255,255,.65); font-size:1rem; margin-bottom:32px; line-height:1.9; }
        .faq-cta-btns { display:flex; align-items:center; justify-content:center; gap:14px; flex-wrap:wrap; }
        .faq-btn-wa { background:#25D366; color:white; padding:14px 36px; border-radius:50px; font-weight:800; font-size:1rem; text-decoration:none; display:inline-flex; align-items:center; gap:10px; font-family:'Cairo',sans-serif; transition:all .2s; }
        .faq-btn-wa:hover { background:#22c55e; transform:translateY(-2px); }
        .faq-btn-outline { background:rgba(255,255,255,.08); color:white; border:1.5px solid rgba(255,255,255,.25); padding:14px 36px; border-radius:50px; font-weight:700; font-size:1rem; text-decoration:none; font-family:'Cairo',sans-serif; transition:all .2s; }
        .faq-btn-outline:hover { background:rgba(255,255,255,.16); transform:translateY(-2px); }

        /* WA FLOAT */
        .wa-float { position:fixed; bottom:32px; left:32px; z-index:999; width:62px; height:62px; border-radius:50%; background:#25D366; display:flex; align-items:center; justify-content:center; box-shadow:0 8px 28px rgba(37,211,102,.45); text-decoration:none; }
        .wa-float:hover { transform:scale(1.1); }

        @media(max-width:1024px){
          .faq-hero { padding:120px 30px 60px; }
          .faq-grid { grid-template-columns:1fr; }
          .faq-content { padding:40px 30px 60px; }
          .faq-cta { padding:40px 30px; }
        }
        @media(max-width:768px){
          .faq-hero { padding:110px 20px 50px; }
          .faq-hero-stats { gap:28px; }
          .faq-content { padding:30px 20px 50px; }
          .wa-float { bottom:20px; left:20px; width:54px; height:54px; }
        }
      `}</style>

      <div className="faq-page">
        <Navbar activePage="faq" />

        {/* HERO */}
        <section className="faq-hero">
          <div className="breadcrumb">
            <Link href="/" style={{ color:'#3cc4a0', textDecoration:'none' }}>الرئيسية</Link>
            <span>›</span>
            <span style={{ color:'rgba(255,255,255,.7)' }}>الأسئلة الشائعة</span>
          </div>
          <h1>الأسئلة الشائعة</h1>
          <p>إجابات واضحة وصادقة على كل ما يدور في بالك قبل التقديم — لأن ثقتك أهم شيء عندنا.</p>
          <div className="faq-hero-stats">
            {[
              ['', '8',      ' ', 'سؤال شائع'],
              ['', '24',     'h', 'وقت الرد'],
              ['', 'مجاناً', '' , 'الاستشارة الأولى'],
            ].map(([, num, suffix, label]) => (
              <div key={label} style={{ textAlign:'center' }}>
                <div className="faq-hero-stat-num">
                  <span>{num}</span>{suffix}
                </div>
                <div className="faq-hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <div className="faq-content" style={{ maxWidth:1100, margin:'0 auto', padding:'56px 60px 80px' }}>

          {/* NOTICE */}
          <div className="faq-notice">
            <div className="faq-notice-icon">ℹ️</div>
            <div>
              <strong>مؤسسة UniPath — من نحن بالضبط؟</strong>
              <p>
                نرحب بك في مؤسسة UniPath — مختصون في المنح الدراسية والدراسة على الحساب الشخصي. نقدم خدمات التقديم على الفرص والمنح وفرص التطوع والكورسات والجامعات الخاصة وخدمات الوثائق كخطاب النية وخطاب التوصية وغيرها.{' '}
                <strong style={{ color:'#0a5540' }}>لسنا مكتب سفريات</strong> ولا نساعد في استخراج التأشيرات.
              </p>
            </div>
          </div>

          {/* CATS */}
          <div className="faq-cats">
            {CATS.map(c => (
              <button
                key={c.key}
                className={`faq-cat-btn ${activeCat === c.key ? 'active' : ''}`}
                onClick={() => setActiveCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* FAQ GRID */}
          <div className="faq-grid">
            {filtered.map(item => (
              <FaqAccordion key={item.id} item={item} />
            ))}
          </div>

          {/* CTA */}
          <div className="faq-cta">
            <h2>لسّه عندك سؤال؟</h2>
            <p>فريقنا جاهز يجاوبك — استشارتك الأولى مجانية تماماً</p>
            <div className="faq-cta-btns">
              <a href={`${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="faq-btn-wa">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                تواصل عبر واتساب
              </a>
              <Link href="/scholarships" className="faq-btn-outline">
                تصفح المنح
              </Link>
            </div>
          </div>
        </div>

        <Footer />

        {/* WA FLOAT */}
        <a href={`${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="wa-float">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </>
  )
}