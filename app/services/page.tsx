"use client";
// app/services/page.tsx

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// icons

import { Shield, Wallet, TriangleAlert, Check } from 'lucide-react'

//

const WA = "https://wa.me/201500276855";
const WA_MSG = encodeURIComponent(
    "السلام عليكم، أريد الاستفسار عن خدمات UniPath SDN",
);

const SERVICES = [
    {
        icon: "📝",
        name: "خطاب النية (SOP)",
        name_en: "Statement of Purpose",
        sdg: "15,000",
        usd: "$7",
        desc: "كتابة خطاب نية احترافي يعكس أهدافك الأكاديمية ويقنع لجنة القبول.",
    },
    {
        icon: "📄",
        name: "خطاب التوصية",
        name_en: "Recommendation Letter",
        sdg: "15,000",
        usd: "$7",
        desc: "صياغة خطاب توصية قوي من الأستاذ أو صاحب العمل بأسلوب أكاديمي.",
    },
    {
        icon: "🌐",
        name: "ترجمة المستندات",
        name_en: "Document Translation / page",
        sdg: "35,000",
        usd: "$10",
        desc: "ترجمة معتمدة للمستندات الرسمية — السعر لكل صفحة.",
    },
    {
        icon: "📋",
        name: "الخطة الدراسية",
        name_en: "Study Plan",
        sdg: "30,000",
        usd: "$10",
        desc: "إعداد خطة دراسية واضحة تُبيّن أهدافك وكيف ستستفيد من المنحة.",
    },
    {
        icon: "💼",
        name: "CV للمنح الدراسية",
        name_en: "Scholarship CV",
        sdg: "45,000",
        usd: "$15",
        desc: "CV أكاديمي مخصص للتقديم على المنح الدراسية الدولية.",
    },
    {
        icon: "👔",
        name: "CV للعمل",
        name_en: "Professional CV",
        sdg: "55,000",
        usd: "$18",
        desc: "CV احترافي مصمم للتقديم على فرص العمل والتطوير المهني.",
    },
];

const PACKAGES = [
    {
        name: "تقديم المنحة فقط",
        name_en: "Application Only",
        sdg: "75,000",
        usd: "$20",
        best: false,
        includes: ["تقديم المنحة كاملاً", "متابعة حتى الإرسال"],
    },
    {
        name: "تقديم + خطاب النية",
        name_en: "Application + SOP",
        sdg: "90,000",
        usd: "$27",
        best: false,
        includes: ["تقديم المنحة كاملاً", "خطاب النية (SOP)", "متابعة حتى الإرسال"],
    },
    {
        name: "تقديم + نية + 1 توصية",
        name_en: "Application + SOP + 1 Rec",
        sdg: "105,000",
        usd: "$34",
        best: false,
        includes: [
            "تقديم المنحة كاملاً",
            "خطاب النية (SOP)",
            "خطاب توصية واحد",
            "متابعة حتى الإرسال",
        ],
    },
    {
        name: "تقديم + نية + 2 توصية",
        name_en: "Application + SOP + 2 Rec",
        sdg: "120,000",
        usd: "$41",
        best: false,
        includes: [
            "تقديم المنحة كاملاً",
            "خطاب النية (SOP)",
            "خطابَي توصية",
            "متابعة حتى الإرسال",
        ],
    },
    {
        name: "الكامل + 1 توصية + CV",
        name_en: "Full + 1 Rec + CV",
        sdg: "140,000",
        usd: "$49",
        best: true,
        includes: [
            "تقديم المنحة كاملاً",
            "خطاب النية (SOP)",
            "خطاب توصية واحد",
            "CV للمنح",
            "متابعة حتى الإرسال",
        ],
    },
    {
        name: "الكامل + 2 توصية + CV",
        name_en: "Full + 2 Rec + CV",
        sdg: "155,000",
        usd: "$56",
        best: false,
        includes: [
            "تقديم المنحة كاملاً",
            "خطاب النية (SOP)",
            "خطابَي توصية",
            "CV للمنح",
            "متابعة حتى الإرسال",
        ],
    },
];
import Image from "next/image";

const PAYMENT_METHODS = [
    {
        icon: "/images/payment/bankak.svg", // ← SVG
        name: "تحويل بنكي",
        details: "أشرف آدم حسن\nرقم الحساب: 4739768",
        currency: "SDG",
    },
    {
        icon: "/images/payment/vodafone.svg", // ← SVG
        name: "Vodafone Cash",
        details: "محمود أحمد\n01080796150",
        currency: "EGP",
    },
    {
        icon: "/images/payment/binance.svg", // ← SVG
        name: "Binance Pay",
        details: `🆔 UID: 977467357\n👤 Username: @Unipath`,
        currency: "USD",
    },
    {
        icon: "/images/payment/paypal.svg", // ← SVG
        name: "PayPal",
        details: `📧 hoohaa1927@gmail.com\n👤 @seella99`,
        currency: "USD",
    },
];

export default function ServicesPage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');

        :root {
          --navy:#1B3A5C; --navy-dark:#122845; --navy-light:#2a4f78;
          --teal:#2FA889; --teal-light:#3cc4a0; --teal-pale:#e6f7f3;
          --gray-100:#f0f4f8; --gray-200:#e2eaf2;
          --gray-400:#8fa3b8; --gray-600:#4a6580; --text:#0f2236;
        }
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Cairo',sans-serif;direction:rtl;color:var(--text);overflow-x:hidden}

        @keyframes waFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        .srv-hero{background:var(--navy);padding:140px 60px 80px;position:relative;overflow:hidden;text-align:center}
        .srv-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:60px 60px}
        .srv-hero::after{content:'';position:absolute;top:-150px;right:-150px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(47,168,137,.12) 0%,transparent 70%)}
        .srv-hero>*{position:relative;z-index:1}
        .breadcrumb{display:flex;align-items:center;justify-content:center;gap:8px;font-size:.85rem;color:rgba(255,255,255,.45);margin-bottom:24px}
        .breadcrumb a{color:var(--teal-light);text-decoration:none}
        .srv-hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(47,168,137,.15);border:1px solid rgba(47,168,137,.4);color:var(--teal-light);padding:6px 18px;border-radius:50px;font-size:.88rem;font-weight:700;margin-bottom:24px}
        .srv-hero h1{font-size:clamp(2rem,4vw,3rem);font-weight:900;color:white;margin-bottom:16px;line-height:1.3}
        .srv-hero h1 span{color:var(--teal-light)}
        .srv-hero p{color:rgba(255,255,255,.65);font-size:1.05rem;max-width:560px;margin:0 auto 36px;line-height:2}

        .section{padding:88px 60px}
        .section-eyebrow{display:inline-block;font-size:.8rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-bottom:12px}
        .section-title{font-size:clamp(1.7rem,3vw,2.4rem);font-weight:900;color:var(--navy);line-height:1.3;margin-bottom:12px}
        .section-sub{color:var(--gray-600);font-size:1rem;line-height:1.9;max-width:560px}
        .section-header{margin-bottom:48px}
        .section-header.center{text-align:center}
        .section-header.center .section-sub{margin:0 auto}

        .srv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .srv-card{background:white;border:1.5px solid var(--gray-200);border-radius:20px;padding:28px 24px;transition:all .3s;position:relative;overflow:hidden}
        .srv-card::before{content:'';position:absolute;top:0;right:0;left:0;height:3px;background:linear-gradient(90deg,var(--navy),var(--teal));opacity:0;transition:opacity .3s}
        .srv-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(27,58,92,.1);border-color:var(--teal)}
        .srv-card:hover::before{opacity:1}
        .srv-card-icon{width:52px;height:52px;border-radius:14px;background:var(--teal-pale);display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:16px}
        .srv-card h3{font-size:1rem;font-weight:800;color:var(--navy);margin-bottom:4px}
        .name-en{font-size:.75rem;color:var(--gray-400);margin-bottom:12px;font-family:monospace}
        .srv-card p{font-size:.87rem;color:var(--gray-600);line-height:1.8;margin-bottom:20px}
        .srv-card-price{display:flex;align-items:center;justify-content:space-between;padding-top:16px;border-top:1px solid var(--gray-200)}
        .price-sdg{font-size:1.05rem;font-weight:900;color:var(--navy)}
        .price-sdg span{font-size:.72rem;font-weight:600;color:var(--gray-400);margin-right:2px}
        .price-usd {
  background: var(--teal-pale);
  color: var(--teal);
  font-size: 1rem;      /* ← كبرنا الحجم */
  font-weight: 900;     /* ← زيادة الوزن */
  padding: 6px 16px;    /* ← مسافة داخلية أكبر */
  border-radius: 50px;
}

        .pkg-section{background:var(--navy)}
        .pkg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .pkg-card{border-radius:20px;padding:28px 22px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);transition:all .3s;position:relative;display:flex;flex-direction:column}
        .pkg-card.best{border-color:var(--teal);background:rgba(47,168,137,.1)}
        .pkg-best-badge{position:absolute;top:-12px;right:50%;transform:translateX(50%);background:var(--teal);color:white;font-size:.72rem;font-weight:800;padding:4px 14px;border-radius:50px;white-space:nowrap}
        .pkg-card:hover{transform:translateY(-4px);border-color:var(--teal);background:rgba(47,168,137,.13)}
        .pkg-name{font-size:.95rem;font-weight:900;color:white;margin-bottom:3px}
        .pkg-name-en{font-size:.72rem;color:rgba(255,255,255,.35);margin-bottom:16px;font-family:monospace}
        .pkg-price-sdg{font-size:1.5rem;font-weight:900;color:white;line-height:1}
        .pkg-price-sdg span{font-size:.72rem;font-weight:600;color:rgba(255,255,255,.45);display:block;margin-top:2px}
        .pkg-price-usd {
  display: inline-block;
    background: rgba(47, 168, 137, .25); /* ← خلفية شفافة بيضاء */
  color: #ffffff;                        /* ← اللون أبيض */
  font-size: 1.1rem;                     /* ← تكبير الحجم */
  font-weight: 900;
  padding: 6px 18px;
  border-radius: 50px;
  margin: 10px 0 18px;
  border: 1px solid rgba(255, 255, 255, .2); /* ← حد خفيف */
  letter-spacing: 0.5px;
}
        .pkg-divider{height:1px;background:rgba(255,255,255,.1);margin-bottom:16px}
        .pkg-includes{flex:1;list-style:none}
        .pkg-includes li{display:flex;align-items:flex-start;gap:8px;font-size:.83rem;color:rgba(255,255,255,.7);margin-bottom:9px;line-height:1.5}
        .pkg-includes li::before{content:'✓';color:var(--teal);font-weight:900;flex-shrink:0;margin-top:1px}
        .pkg-cta{margin-top:20px;display:block;text-align:center;background:var(--teal);color:white;padding:10px;border-radius:12px;font-size:.88rem;font-weight:800;text-decoration:none;transition:background .2s;font-family:'Cairo',sans-serif}
        .pkg-card.best .pkg-cta{background:var(--teal-light)}
        .pkg-cta:hover{background:var(--teal-light)}

        .how-section{background:#f8fafb}
        .how-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;position:relative}
        .how-grid::before{content:'';position:absolute;top:40px;right:calc(12.5% + 20px);left:calc(12.5% + 20px);height:2px;background:linear-gradient(270deg,var(--teal),var(--navy));z-index:0}
        .how-step{text-align:center;position:relative;z-index:1;padding:0 12px}
        .how-num{width:56px;height:56px;border-radius:50%;background:var(--navy);color:white;font-size:1.4rem;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 0 0 8px white,0 0 0 10px var(--gray-200);transition:all .3s}
        .how-step:hover .how-num{background:var(--teal);box-shadow:0 0 0 8px white,0 0 0 10px rgba(47,168,137,.3)}
        .how-step h3{font-size:.95rem;font-weight:800;color:var(--navy);margin-bottom:8px}
        .how-step p{font-size:.84rem;color:var(--gray-600);line-height:1.9}

        .pay-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.pay-card {
  background: white;
  border: 1.5px solid var(--gray-200);
  border-radius: 18px;
  padding: 28px 20px 20px;  /* ← padding-top أكبر */
  text-align: center;
  transition: all .3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
}

.pay-card:hover {
  border-color: var(--teal);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(27, 58, 92, .08);
}

.pay-icon {
  width: 96px;
  height: 96px;
  margin: 0 auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 16px;
  padding: 14px;
  flex-shrink: 0;
  /* اختار واحدة من الاتنين: */
  margin-top: -10px;     /* ← يرفع الصورة */
  /* أو */
  /* margin-top: -15px; */ /* ← يرفع أكثر */
}

.payment-icon {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.pay-name {
  font-size: .95rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 8px;
}

.pay-details {
  font-size: .8rem;
  color: var(--gray-600);
  line-height: 1.8;
  margin-bottom: 10px;
  white-space: pre-line;
}

.pay-currency {
  display: inline-block;
  background: var(--teal-pale);
  color: var(--teal);
  font-size: 1.1rem;      /* ← من 0.72rem إلى 1.1rem */
  font-weight: 900;       /* ← من 800 إلى 900 */
  padding: 6px 18px;      /* ← زيادة المسافة الداخلية */
  border-radius: 50px;
  margin-top: 4px;        /* ← مسافة من الأعلى */
}

/* Policies Container */
.policies-container {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Policy Section */
.policy-section {
    background: #f8fafc;
    border: 1.5px solid #e8eef5;
    border-radius: 14px;
    padding: 20px 24px;
    transition: all 0.3s ease;
}

.policy-section:hover {
    border-color: var(--teal);
    box-shadow: 0 4px 16px rgba(47, 168, 137, 0.08);
}

.policy-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8eef5;
}

.policy-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.policy-list li {
    font-size: 0.88rem;
    color: #4a6580;
    line-height: 1.9;
    padding: 6px 0;
    border-bottom: 1px solid rgba(232, 238, 245, 0.5);
}

.policy-list li:last-child {
    border-bottom: none;
}

.policy-list li::before {
    content: '•';
    color: var(--teal);
    font-weight: 900;
    margin-left: 10px;
}

        .urgency-bar{background:linear-gradient(135deg,#1a3a2a,#0d2818);border-radius:16px;padding:18px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:0}
        .urgency-bar p{font-size:.9rem;color:rgba(255,255,255,.8);line-height:1.7}
        .urgency-bar p strong{color:var(--teal-light)}

        .cta-section{padding:100px 60px;text-align:center;position:relative;overflow:hidden;background:linear-gradient(135deg,var(--navy) 0%,var(--navy-light) 50%,#1e5c45 100%)}
        .cta-section::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:60px 60px}
        .cta-section>*{position:relative;z-index:1}
        .cta-section h2{font-size:clamp(1.8rem,3vw,2.6rem);font-weight:900;color:white;margin-bottom:14px}
        .cta-section p{color:rgba(255,255,255,.65);font-size:1rem;max-width:520px;margin:0 auto 36px;line-height:2}
        .cta-btns{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap}
        .btn-primary{background:var(--teal);color:white;padding:14px 36px;border-radius:50px;font-weight:800;font-size:.95rem;text-decoration:none;display:inline-flex;align-items:center;gap:8px;font-family:'Cairo',sans-serif;transition:all .25s;box-shadow:0 8px 24px rgba(47,168,137,.35)}
        .btn-primary:hover{background:var(--teal-light);transform:translateY(-2px)}
        .btn-outline-white{background:rgba(255,255,255,.08);color:white;border:1.5px solid rgba(255,255,255,.25);padding:14px 32px;border-radius:50px;font-weight:700;font-size:.95rem;text-decoration:none;display:inline-flex;align-items:center;gap:8px;font-family:'Cairo',sans-serif;transition:all .25s}
        .btn-outline-white:hover{background:rgba(255,255,255,.16);transform:translateY(-2px)}

        .wa-float{position:fixed;bottom:32px;left:32px;z-index:999;width:62px;height:62px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 8px 28px rgba(37,211,102,.45);animation:waFloat 3s ease-in-out infinite}
        .wa-float:hover{transform:scale(1.1)}

        @media(max-width:1024px){
          .srv-hero{padding:120px 30px 60px}
          .section{padding:64px 30px}
          .srv-grid{grid-template-columns:repeat(2,1fr)}
          .pkg-grid{grid-template-columns:repeat(2,1fr)}
          .how-grid{grid-template-columns:repeat(2,1fr)}
          .how-grid::before{display:none}
          .pay-grid{grid-template-columns:repeat(2,1fr)}
          .cta-section{padding:72px 30px}
        }
        @media(max-width:768px){
          .srv-hero{padding:110px 20px 52px}
          .section{padding:52px 20px}
          .srv-grid{grid-template-columns:1fr}
          .pkg-grid{grid-template-columns:1fr}
          .how-grid{grid-template-columns:1fr}
          .pay-grid{grid-template-columns:1fr 1fr}
          .cta-section{padding:60px 20px}
          .wa-float{bottom:20px;left:20px;width:54px;height:54px}
          .urgency-bar{flex-direction:column;text-align:center}
        }
      `}</style>

            <div style={{ fontFamily: "'Cairo', sans-serif", direction: "rtl" }}>
                <Navbar activePage="services" />

                {/* HERO */}
                <section className="srv-hero ">
                    <div className="breadcrumb">
                        <Link
                            href="/"
                            style={{ color: "var(--teal-light)", textDecoration: "none" }}
                        >
                            الرئيسية
                        </Link>
                        <span>›</span>
                        <span style={{ color: "rgba(255,255,255,.7)" }}>
                            خدماتنا وأسعارنا
                        </span>
                    </div>
                    <div className="srv-hero-eyebrow">✨ شفافية كاملة في الأسعار</div>
                    <h1>
                        خدماتنا <span>وأسعارنا</span>
                    </h1>
                    <p>
                        من تجهيز خطاب النية وخطابات التوصية، لحد ما نكمّل ملفك بالكامل ونرسل
                        التقديم بالطريقة الصحيحة، ونتابع معاك لحد ما تسافر بإذن الله 💙
                    </p>
                    <div className="cta-btns">
                        <a
                            href={`${WA}?text=${WA_MSG}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            استشارة مجانية
                        </a>
                        <Link href="/scholarships" className="btn-outline-white">
                            تصفح المنح →
                        </Link>
                    </div>
                </section>

                {/* INDIVIDUAL SERVICES */}
                <section className="section" style={{ background: "white" }}>
                    <div style={{ maxWidth: 1160, margin: "0 auto" }}>
                        <div className="section-header">
                            <span className="section-eyebrow">الخدمات الفردية</span>
                            <h2 className="section-title">كل خدمة بسعرها الواضح</h2>
                            <p className="section-sub">
                                اختر الخدمة اللي تحتاجها أو خذ باقة كاملة بسعر أوفر
                            </p>
                        </div>
                        <div className="srv-grid">
                            {SERVICES.map((s) => (
                                <div key={s.name} className="srv-card">
                                    <div className="srv-card-icon">{s.icon}</div>
                                    <h3>{s.name}</h3>
                                    <div className="name-en">{s.name_en}</div>
                                    <p>{s.desc}</p>
                                    <div className="srv-card-price">
                                        <div className="price-sdg">
                                            {s.sdg} <span>SDG</span>
                                        </div>
                                        <div className="price-usd">{s.usd}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PACKAGES */}
                <section className="section pkg-section">
                    <div style={{ maxWidth: 1160, margin: "0 auto" }}>
                        <div className="section-header center">
                            <span
                                className="section-eyebrow"
                                style={{ color: "var(--teal-light)" }}
                            >
                                باقات التقديم
                            </span>
                            <h2 className="section-title" style={{ color: "white" }}>
                                باقات جاهزة بسعر أوفر
                            </h2>
                            <p
                                className="section-sub"
                                style={{ color: "rgba(255,255,255,.55)", margin: "0 auto" }}
                            >
                                وفّر أكثر لما تختار باقة متكاملة — كل ما زادت الخدمات كان السعر
                                أفضل
                            </p>
                        </div>
                        <div className="pkg-grid">
                            {PACKAGES.map((pkg) => (
                                <div
                                    key={pkg.name}
                                    className={`pkg-card ${pkg.best ? "best" : ""}`}
                                >
                                    {pkg.best && (
                                        <div className="pkg-best-badge">⭐ الأكثر طلباً</div>
                                    )}
                                    <div className="pkg-name">{pkg.name}</div>
                                    <div className="pkg-name-en">{pkg.name_en}</div>
                                    <div className="pkg-price-sdg">
                                        {pkg.sdg}
                                        <span>SDG</span>
                                    </div>
                                    <div className="pkg-price-usd">{pkg.usd}</div>
                                    <div className="pkg-divider" />
                                    <ul className="pkg-includes">
                                        {pkg.includes.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href={`${WA}?text=${encodeURIComponent(
                                            `السلام عليكم، أريد الاشتراك في ${pkg.name} — ${pkg.sdg} SDG`,
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pkg-cta"
                                    >
                                        ابدأ الآن
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="section how-section">
                    <div style={{ maxWidth: 1160, margin: "0 auto" }}>
                        <div className="section-header center">
                            <span className="section-eyebrow">كيف نعمل</span>
                            <h2 className="section-title">رحلتك معنا في 4 خطوات</h2>
                            <p className="section-sub" style={{ margin: "0 auto" }}>
                                من أول رسالة لحد ما تسافر — نحن معاك في كل خطوة
                            </p>
                        </div>
                        <div className="how-grid">
                            {[
                                [
                                    "١",
                                    "تواصل معنا",
                                    "أرسل رسالة على واتساب أو مسنجر وأخبرنا عن المنحة اللي تريد التقديم عليها.",
                                ],
                                [
                                    "٢",
                                    "نراجع ملفك",
                                    "فريقنا يراجع وثائقك ويحدد ما تحتاجه من خدمات للتقديم الناجح.",
                                ],
                                [
                                    "٣",
                                    "نجهّز ملفك",
                                    "نكتب SOP والتوصيات والـ CV ونترجم الوثائق — كل شيء بجودة عالية.",
                                ],
                                [
                                    "٤",
                                    "نقدم ونتابع",
                                    "نقدم طلبك كاملاً ونتابع معاك خطوة بخطوة لحد ما يصلك قرار القبول.",
                                ],
                            ].map(([num, title, desc]) => (
                                <div key={num} className="how-step">
                                    <div className="how-num">{num}</div>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PAYMENT */}
                <section className="section" style={{ background: "white" }}>
                    <div style={{ maxWidth: 1160, margin: "0 auto" }}>

                        {/* PAYMENT */}
                        <section className="section" style={{ background: "white" }}>
                            <div style={{ maxWidth: 1160, margin: "0 auto" }}>
                                <div className="section-header center">
                                    <span className="section-eyebrow">طرق الدفع</span>
                                    <h2 className="section-title">ادفع بالطريقة اللي تناسبك</h2>
                                    <p className="section-sub" style={{ margin: "0 auto" }}>
                                        بعد الدفع أرسل إيصال التحويل على واتساب وسنبدأ معك فوراً
                                    </p>
                                </div>

                                <div className="pay-grid">
                                    {PAYMENT_METHODS.map((m) => (
                                        <div key={m.name} className="pay-card">
                                            <div className="pay-icon">
                                                <Image
                                                    src={m.icon}
                                                    alt={m.name}
                                                    width={80}
                                                    height={80}
                                                    className="payment-icon"
                                                />
                                            </div>
                                            <div className="pay-name">{m.name}</div>
                                            <div className="pay-details">{m.details}</div>
                                            <span className="pay-currency">{m.currency}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* ✅ POLICIES  */}
                                <div className="policies-container">
                                    {/* SERVICE POLICY */}
                                    <div className="policy-section">
                                        <div className="policy-header">
                                            <Shield size={28} color="#2196F3" strokeWidth={2.5} />
                                            <h3
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: 800,
                                                    color: "#1B3A5C",
                                                    margin: 0,
                                                }}
                                            >
                                                سياسة الخدمة
                                            </h3>
                                        </div>
                                        <ul className="policy-list">
                                            <li>
                                                نقوم أولاً بمراجعة أهلية الطالب وفرصه قبل بدء إجراءات
                                                التقديم.
                                            </li>
                                            <li>
                                                أتعابنا هي مقابل تجهيز الملف، كتابة المستندات،
                                                والتقديم والمتابعة، وليست ضمانًا للقبول.
                                            </li>
                                            <li>

                                                قرار القبول أو الرفض يعود للجامعة أو الجهة المانحة
                                                فقط.
                                            </li>
                                            <li>
                                                أي رسوم خاصة بالجامعة أو الجهة المانحة (إن وجدت) تكون
                                                على مسؤولية المتقدّم، وتُدفع مباشرةً للجهة المختصة، وهي
                                                منفصلة عن أتعاب المكتب.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* PAYMENT POLICY */}
                                    <div className="policy-section">
                                        <div className="policy-header">
                                            <Wallet size={28} color="#FF9800" strokeWidth={2.5} />
                                            <h3
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: 800,
                                                    color: "#1B3A5C",
                                                    margin: 0,
                                                }}
                                            >
                                                سياسة الدفع والاسترداد
                                            </h3>
                                        </div>
                                        <ul className="policy-list">
                                            <li>
                                                يلتزم العميل بتوفير جميع المستندات المطلوبة خلال
                                                الفترة المحددة من قبل المكتب.
                                            </li>
                                            <li>
                                                <TriangleAlert size={16} color="#e05555" style={{ display: 'inline', marginLeft: '6px' }} />
                                                <span style={{ fontWeight: 700, color: '#e05555' }}>تنبيه : </span> في حال تأخر العميل في إرسال المستندات، أو كانت
                                                المستندات غير مكتملة، أو قرر إيقاف التقديم قبل إرسال
                                                الطلب، فلا تُسترد رسوم الخدمة، لأنها مقابل العمل الذي تم
                                                إنجازه على الملف.
                                            </li>
                                            <li>
                                                في حال انتهاء فترة التقديم (Deadline) بسبب تأخر
                                                العميل في توفير المستندات أو الرد على طلبات المكتب،
                                                يتحمل العميل كامل المسؤولية، ولا يحق له المطالبة
                                                باسترداد أي رسوم.
                                            </li>
                                            <li>
                                                بعد إرسال طلب التقديم، تعتبر رسوم الخدمة غير قابلة
                                                للاسترداد، سواء تم قبول الطلب أو رفضه، لأن قرار القبول
                                                يعود للجامعة أو الجهة المانحة.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/* URGENCY */}
                <section
                    className="section"
                    style={{
                        background: "var(--navy)",
                        paddingTop: 40,
                        paddingBottom: 40,
                    }}
                >
                    <div style={{ maxWidth: 1160, margin: "0 auto" }}>
                        <div className="urgency-bar">
                            <p>
                                🕓 <strong>نشتغل بعدد محدود من الملفات يومياً</strong> — كل ما
                                بدأت بدري، كانت فرصتك أقوى ومكانك مضمون في الدورة الحالية.
                            </p>
                            <a
                                href={`${WA}?text=${WA_MSG}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: "#25D366",
                                    color: "white",
                                    padding: "11px 28px",
                                    borderRadius: 50,
                                    fontWeight: 800,
                                    fontSize: ".9rem",
                                    textDecoration: "none",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                    fontFamily: "'Cairo', sans-serif",
                                }}
                            >
                                احجز مكانك الآن
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <h2>لو جاهز تبدأ — نحن هنا 💙</h2>
                    <p>
                        تواصل معنا واحصل على استشارة مجانية — نساعدك تختار المنحة المناسبة
                        والباقة اللي تحتاجها بالضبط.
                    </p>
                    <div className="cta-btns">
                        <a
                            href={`${WA}?text=${WA_MSG}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            تواصل عبر واتساب
                        </a>
                        <Link href="/scholarships" className="btn-outline-white">
                            تصفح المنح →
                        </Link>
                    </div>
                </section>

                <Footer />

                {/* WA FLOAT */}
                <a
                    href={`${WA}?text=${WA_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-float"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </a>
            </div>
        </>
    );
}
