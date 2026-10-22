"use client";
// app/services/ServicesClient.tsx

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceWizard from "./ServiceWizard";
import { SERVICES, PACKAGES } from "./services-data";
import "./services.css";

// icons
import { Shield, Wallet, TriangleAlert, Check, Copy } from "lucide-react";

// ============ Constants ============
const WA = "https://wa.me/201500276855";
const WA_MSG = encodeURIComponent(
  "السلام عليكم، أريد الاستفسار عن خدمات UniPath SDN",
);


const PAYMENT_METHODS = [
  {
    icon: "/images/payment/bankak.svg",
    name: "تحويل بنكي",
    details: "أكرم آدم حسن\nرقم الحساب: 3464440",
    rawDetails: "3464440",
    currency: "SDG",
  },
  {
    icon: "/images/payment/vodafone.svg",
    name: "Vodafone Cash",
    details: "محمود أحمد\n01080796150",
    rawDetails: "01080796150",
    currency: "EGP",
  },
  {
    icon: "/images/payment/binance.svg",
    name: "Binance Pay",
    details: `🆔 UID: 977467357\n👤 Username: @Unipath`,
    rawDetails: "977467357",
    currency: "USD",
  },
  {
    icon: "/images/payment/paypal.svg",
    name: "PayPal",
    details: `📧 hoohaa1927@gmail.com\n👤 @seella99`,
    rawDetails: "hoohaa1927@gmail.com",
    currency: "USD",
  },
];

// ============ Component ============
export default function ServicesPage() {
  const [copied, setCopied] = useState<string | null>(null);

  function copyToClipboard(text: string, key: string) {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  const faqData = [
    { question: "ما الخدمات التي تقدمونها للطلاب الراغبين في الدراسة بالخارج؟", answer: "نقدم مراجعة الأهلية، وكتابة خطاب النية، وإعداد خطابات التوصية والسيرة الذاتية للمنح أو العمل، وترجمة المستندات، وتجهيز طلبات المنح والجامعات ومتابعتها حتى صدور النتيجة." },
    { question: "هل تضمنون الحصول على المنحة أو القبول الجامعي؟", answer: "لا. نساعدك في تجهيز ملف قوي وتقديم الطلب بطريقة صحيحة، لكن قرار القبول أو الرفض يعود إلى الجامعة أو الجهة المانحة وحدها، ولا تمثل رسوم الخدمة ضماناً للقبول." },
    { question: "كم تستغرق كتابة خطاب النية أو إعداد السيرة الذاتية؟", answer: "تختلف المدة حسب طبيعة الملف والموعد النهائي وعدد المستندات. نحدد الجدول الزمني بعد مراجعة معلوماتك، لذلك يُفضّل التواصل معنا مبكراً قبل إغلاق باب التقديم." },
    { question: "هل تقدمون خدمات التقديم على المنح للطلاب السودانيين؟", answer: "نعم، نساعد الطلاب السودانيين والطلاب من مختلف الدول في تجهيز ملفات المنح الدراسية والقبول الجامعي وفق متطلبات كل فرصة." },
    { question: "ما المستندات المطلوبة لبدء مراجعة الملف؟", answer: "عادةً نحتاج إلى السيرة الذاتية أو المعلومات الدراسية، الشهادات وكشف الدرجات، الخبرات والإنجازات، وبيانات المنحة أو الجامعة المستهدفة. نرسل لك قائمة مخصصة بعد التواصل الأول." },
    { question: "هل رسوم التقديم قابلة للاسترداد؟", answer: "تُدفع الرسوم مقابل العمل المنجز على الملف. لا تُسترد الرسوم عند تأخر العميل في إرسال المستندات أو توقفه عن التقديم أو بعد إرسال الطلب، كما أن رسوم الجامعة أو الجهة المانحة منفصلة عن أتعاب المكتب." }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "UniPath SDN",
    "url": "https://www.unipathsdn.com/services",
    "description": "خدمات التقديم على المنح الدراسية والجامعات، كتابة خطاب النية وخطابات التوصية وإعداد السيرة الذاتية والترجمة.",
    "areaServed": ["السودان", "مصر", "العالم"],
    "serviceType": ["التقديم على المنح الدراسية", "كتابة خطاب النية", "خطابات التوصية", "إعداد السيرة الذاتية", "ترجمة المستندات"],
    "sameAs": ["https://wa.me/201500276855"]
  };

  return (
    <>
     
 

      <div style={{ fontFamily: "'Cairo', sans-serif", direction: "rtl" }}>
        <Navbar activePage="services" />

        {/* HERO */}
        <section className="srv-hero">
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
            تعرف على أسعار خدمات UniPath للتقديم على المنح الدراسية والقبول الجامعي.
            تشمل الخدمات كتابة خطاب النية، وخطابات التوصية، وإعداد السيرة الذاتية،
            وترجمة المستندات، وباقات التقديم الكاملة.
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
              تصفح المنح الدراسية →
            </Link>
          </div>
        </section>
        <ServiceWizard wa={WA} />
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

                  {/* ⬇️⬇️ هنا بالضبط ⬇️⬇️ */}
                  {pkg.saving_sdg > 0 && (
                    <div className="pkg-save">
                      وفّر {String(pkg.saving_sdg).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} SDG مقارنة بشراء الخدمات منفصلة
                    </div>
                  )}
                  {/* ⬆️⬆️ هنا بالضبط ⬆️⬆️ */}

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
                من أول استشارة حتى إرسال الطلب ومتابعته — نحن معك في كل خطوة
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
                  <div className="pay-card-content">
                    <div className="pay-name">{m.name}</div>
                    <div className="pay-details">{m.details}</div>
                    <div className="pay-footer">
                      <span className="pay-currency">{m.currency}</span>
                      <button
                        type="button"
                        className={`copy-btn ${copied === m.name ? "copied" : ""}`}
                        onClick={() => copyToClipboard(m.rawDetails, m.name)}
                        aria-label="نسخ البيانات"
                      >
                        {copied === m.name ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* POLICIES */}
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
                    أتعابنا هي مقابل تجهيز الملف، كتابة المستندات، والتقديم
                    والمتابعة، وليست ضمانًا للقبول.
                  </li>
                  <li>
                    قرار القبول أو الرفض يعود للجامعة أو الجهة المانحة فقط.
                  </li>
                  <li>
                    أي رسوم خاصة بالجامعة أو الجهة المانحة (إن وجدت) تكون على
                    مسؤولية المتقدّم، وتُدفع مباشرةً للجهة المختصة، وهي منفصلة عن
                    أتعاب المكتب.
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
                    يلتزم العميل بتوفير جميع المستندات المطلوبة خلال الفترة
                    المحددة من قبل المكتب.
                  </li>
                  <li>
                    <TriangleAlert
                      size={16}
                      color="#e05555"
                      style={{ display: "inline", marginLeft: "6px" }}
                    />
                    <span style={{ fontWeight: 700, color: "#e05555" }}>
                      تنبيه :{" "}
                    </span>
                    في حال تأخر العميل في إرسال المستندات، أو كانت المستندات غير
                    مكتملة، أو قرر إيقاف التقديم قبل إرسال الطلب، فلا تُسترد رسوم
                    الخدمة، لأنها مقابل العمل الذي تم إنجازه على الملف.
                  </li>
                  <li>
                    في حال انتهاء فترة التقديم (Deadline) بسبب تأخر العميل في
                    توفير المستندات أو الرد على طلبات المكتب، يتحمل العميل كامل
                    المسؤولية، ولا يحق له المطالبة باسترداد أي رسوم.
                  </li>
                  <li>
                    بعد إرسال طلب التقديم، تعتبر رسوم الخدمة غير قابلة للاسترداد،
                    سواء تم قبول الطلب أو رفضه، لأن قرار القبول يعود للجامعة أو
                    الجهة المانحة.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section" aria-labelledby="faq-title">
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="section-header center">
              <span className="section-eyebrow">الأسئلة الشائعة</span>
              <h2 id="faq-title" className="section-title">أسئلة شائعة عن التقديم على المنح الدراسية</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>
                إجابات واضحة عن خدماتنا، المستندات المطلوبة، المدة، والرسوم قبل بدء العمل على ملفك.
              </p>
            </div>
            <div className="faq-list">
              {faqData.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
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
              تصفح المنح الدراسية →
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
