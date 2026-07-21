"use client";
// app/HomeClient.tsx

import { useState, useEffect } from "react";
import Link from "next/link";
import './home.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type Scholarship = {
  id: string;
  slug: string;
  name_ar: string;
  country: string;
  country_flag: string;
  funding_type: string;
  levels: string[];
  deadline?: string;
  status: string;
};

const WA = "https://wa.me/201500276855";
const WA_MSG = encodeURIComponent(
  "السلام عليكم، أريد الاستفسار عن خدمات UniPath",
);

export default function HomeClient({
  scholarships,
}: {
  scholarships: Scholarship[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const shown = scholarships
    .filter((s) => s.status === "PUBLISHED")
    .slice(0, 5);

  const GRAD = ["g1", "g2", "g3", "g4", "g5", "g6"];

  return (
    <>
      

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge">
            موثوق من أكثر من 2,000 طالب حول العالم
          </div>
          <h1>
            طريقك نحو
            <br />
            <em>تعليم عالمي</em>
            <br />
            يبدأ من هنا
          </h1>
          <p>
            يونيباث يربطك بأفضل فرص المنح الدراسية في العالم — ونرشدك في كل خطوة
            من التقديم حتى القبول.
          </p>
          <div className="hero-actions">
            <a href="/scholarships" className="btn-primary">
              استعرض المنح
            </a>
            <a
              href={`${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-hero"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل عبر واتساب
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
            <div className="hero-card-main">
              <div className="card-label">الطلب الحالي</div>
              <div className="card-title-h">🇩🇪 منحة DAAD الألمانية</div>
              <div className="card-sub">
                هندسة · تمويل كامل · الموعد: 31 مارس
              </div>
              <div className="progress-label">
                <span>تقدم الطلب</span>
                <span>72%</span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill"></div>
              </div>
            </div>
            <div className="float-badge-hero b1">
              <div className="badge-icon green">✅</div>
              <div>
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 800,
                    color: "#1B3A5C",
                  }}
                >
                  تم التحقق من الوثائق
                </div>
                <div style={{ fontSize: ".72rem", color: "#8fa3b8" }}>للتو</div>
              </div>
            </div>
            <div className="float-badge-hero b2">
              <div className="badge-icon blue">🎓</div>
              <div>
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 800,
                    color: "#1B3A5C",
                  }}
                >
                  تم القبول!
                </div>
                <div style={{ fontSize: ".72rem", color: "#2FA889" }}>
                  أحمد · Chevening UK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        {[
          ["+", "2K", "طالب تم مساعدتهم\nحول العالم"],
          ["+", "50", "دولة ووجهة\nدراسية"],
          ["", "95%", "نسبة نجاح\nالطلبات"],
          ["+", "300", "شراكات منح\nنشطة"],
        ].map(([prefix, num, label], i) => (
          <div key={i} className="stat-item">
            <div className="stat-num">
              {prefix}
              <span>{num}</span>
            </div>
            <div className="stat-label">
              {label.split("\n").map((l, j) => (
                <span key={j}>
                  {l}
                  {j === 0 ? <br /> : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SCHOLARSHIPS */}
      <section className="scholarships" id="scholarships">
        <div className="scholarships-header-row">
          <div className="section-header">
            <span className="section-eyebrow">الفرص المتاحة</span>
            <h2>أبرز المنح المتاحة الآن</h2>
            <p>
              استعرض المنح الممولة بالكامل والجزئية حول العالم، يتم تحديثها بشكل
              مستمر من فريقنا.
            </p>
          </div>
          <a href="/scholarships" className="btn-outline">
            عرض كل المنح ←
          </a>
        </div>
        <div className="sch-grid">
          {shown.length > 0
            ? shown.map((s, i) => (
                <a
                  key={s.id}
                  href={`/scholarships/${s.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="sch-card">
                    <div className={`sch-img ${GRAD[i % GRAD.length]}`}>
                      {s.country_flag}
                      <div className="sch-badge open">مفتوح</div>
                    </div>
                    <div className="sch-body">
                      <div className="sch-country">{s.country}</div>
                      <div className="sch-name">{s.name_ar}</div>
                      <div className="sch-tags">
                        <span className="sch-tag">
                          {s.funding_type === "FULL"
                            ? "تمويل كامل"
                            : s.funding_type === "PARTIAL"
                            ? "تمويل جزئي"
                            : "رسوم دراسية"}
                        </span>
                        {s.levels.slice(0, 2).map((l) => (
                          <span key={l} className="sch-tag">
                            {l === "MASTERS"
                              ? "ماجستير"
                              : l === "PHD"
                              ? "دكتوراه"
                              : l === "BACHELORS"
                              ? "بكالوريوس"
                              : l}
                          </span>
                        ))}
                      </div>
                      <div className="sch-foot">
                        <span className="sch-dead">
                          {s.deadline
                            ? `الموعد: ${new Date(
                                s.deadline,
                              ).toLocaleDateString("ar-EG", {
                                day: "numeric",
                                month: "long",
                              })}`
                            : "—"}
                        </span>
                        <a href={`/scholarships/${s.slug}`}>قدّم الآن</a>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            : // Placeholder cards when no data yet
              [
                {
                  flag: "🇩🇪",
                  country: "ألمانيا",
                  name: "منحة DAAD للتبادل الأكاديمي الألماني",
                  tags: ["تمويل كامل", "ماجستير", "دكتوراه"],
                  dead: "31 مارس",
                  g: "g1",
                },
                {
                  flag: "🇬🇧",
                  country: "المملكة المتحدة",
                  name: "منحة Chevening الحكومية البريطانية",
                  tags: ["تمويل كامل", "ماجستير", "قيادة"],
                  dead: "15 أبريل",
                  g: "g2",
                },
                {
                  flag: "🇹🇷",
                  country: "تركيا",
                  name: "منحة تركيا بورصلاري الحكومية",
                  tags: ["تمويل كامل", "بكالوريوس", "ماجستير"],
                  dead: "20 مايو",
                  g: "g3",
                },
                {
                  flag: "🇨🇳",
                  country: "الصين",
                  name: "منحة الحكومة الصينية CSC",
                  tags: ["تمويل كامل", "جميع المراحل"],
                  dead: "1 يونيو",
                  g: "g4",
                },
                {
                  flag: "🇦🇺",
                  country: "أستراليا",
                  name: "منحة Australia Awards الدراسية",
                  tags: ["تمويل كامل", "ماجستير", "دكتوراه"],
                  dead: "30 يوليو",
                  g: "g5",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="sch-card"
                  onClick={() => (window.location.href = "/scholarships")}
                >
                  <div className={`sch-img ${s.g}`}>
                    {s.flag}
                    <div className="sch-badge open">مفتوح</div>
                  </div>
                  <div className="sch-body">
                    <div className="sch-country">{s.country}</div>
                    <div className="sch-name">{s.name}</div>
                    <div className="sch-tags">
                      {s.tags.map((t) => (
                        <span key={t} className="sch-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="sch-foot">
                      <span className="sch-dead">الموعد: {s.dead}</span>
                      <a href="/scholarships">قدّم الآن</a>
                    </div>
                  </div>
                </div>
              ))}
          <div
            className="sch-card"
            style={{
              border: "2px dashed var(--teal)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 260,
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/scholarships")}
          >
            <div style={{ fontSize: "2.8rem", marginBottom: 14 }}>🔍</div>
            <div
              style={{
                fontWeight: 800,
                color: "var(--navy)",
                fontSize: "1.05rem",
                marginBottom: 8,
                fontFamily: "Cairo,sans-serif",
              }}
            >
              استعرض كل المنح
            </div>
            <div style={{ fontSize: ".85rem", color: "var(--gray-400)" }}>
              أكثر من 300 فرصة متاحة
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-header">
          <span className="section-eyebrow">ما نقدمه</span>
          <h2>دعم متكامل للمنح الدراسية</h2>
          <p>
            من إعداد الوثائق حتى التقديم النهائي — نتولى كل تفاصيل رحلتك
            الدراسية.
          </p>
        </div>
        <div className="srv-grid">
          {[
            [
              "📄",
              "إعداد الوثائق",
              "مساعدة احترافية في كتابة خطاب النية والسيرة الذاتية وخطابات التوصية وجميع وثائق التقديم.",
            ],
            [
              "🎯",
              "مطابقة المنح",
              "نجد أفضل المنح المناسبة لملفك الأكاديمي وأهدافك باستخدام تقنيات ذكية.",
            ],
            [
              "🌐",
              "تقديم الطلبات",
              "دعم متكامل للتقديم المباشر على بوابات المنح مع متابعة الحالة باستمرار.",
            ],
            [
              "💬",
              "تدريب المقابلات",
              "جلسات تدريبية شخصية ومحاكاة للمقابلات لمساعدتك على الأداء بثقة.",
            ],
            [
              "✈️",
              "دعم ما قبل السفر",
              "إرشادات التأشيرة، نصائح السكن، والتوجيه الثقافي للحياة في الخارج.",
            ],
            [
              "📊",
              "تتبع التقدم",
              "تحديثات فورية على حالة طلبك عبر نظامنا وإشعارات واتساب المباشرة.",
            ],
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="srv-card">
              <div className="srv-icon">{icon}</div>
              <h3>{title as string}</h3>
              <p>{desc as string}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="section-header">
          <span className="section-eyebrow">الخطوات</span>
          <h2>كيف يعمل يونيباث؟</h2>
          <p>عملية بسيطة ومنظمة مصممة لتعظيم فرص نجاحك في الحصول على المنحة.</p>
        </div>
        <div className="steps-wrap">
          {[
            [
              "١",
              "أرسل استفسارك",
              'تصفح المنح وتواصل معنا عبر واتساب أو زر "ابدأ الآن" للبدء في رحلتك.',
            ],
            [
              "٢",
              "التسجيل والمطابقة",
              "يسجل فريقنا بياناتك ويطابق ملفك مع أفضل المنح المناسبة لك.",
            ],
            [
              "٣",
              "الوثائق والإعداد",
              "مسؤولك المخصص يرشدك في جمع الوثائق وكتابة SOP وكل مستلزمات التقديم.",
            ],
            [
              "٤",
              "التقديم والنجاح",
              "نقدم طلبك كاملاً ونبقيك على اطلاع بكل خطوة حتى تصلك رسالة القبول.",
            ],
          ].map(([num, title, desc]) => (
            <div key={num as string} className="step">
              <div className="step-num">{num}</div>
              <h3>{title as string}</h3>
              <p>{desc as string}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section className="stories" id="stories">
        <div className="section-header">
          <span className="section-eyebrow">شهادات الطلاب</span>
          <h2>طلاب حققوا أحلامهم</h2>
          <p>قصص حقيقية من طلاب حققوا أحلامهم بدعم يونيباث.</p>
        </div>
        <div className="stories-grid">
          {[
            {
              av: "av1",
              init: "أ",
              name: "أحمد حسن",
              dest: "🇩🇪 DAAD ألمانيا · هندسة",
              text: "يونيباث جعل عملية التقديم على منحة DAAD سلسة تماماً. مسؤولي كان متاحاً دائماً على واتساب وأرشدني في كل وثيقة. الآن أدرس في ميونخ!",
            },
            {
              av: "av2",
              init: "س",
              name: "سارة الراشدي",
              dest: "🇬🇧 Chevening UK · إدارة أعمال",
              text: "لم أكن أعرف كيف أكتب SOP جيداً. حوّل فريق يونيباث طلبي بالكامل. تم قبولي في Chevening من أول محاولة. أنصح به بشدة!",
            },
            {
              av: "av3",
              init: "م",
              name: "محمد فاروق",
              dest: "🇹🇷 تركيا بورصلاري · طب",
              text: "وجد لي يونيباث منحة ممولة بالكامل لم أكن أعلم بوجودها. محترفون وسريعون ويهتمون فعلاً بنجاح الطلاب.",
            },
          ].map((s) => (
            <div key={s.name} className="story-card">
              <div className="stars">★★★★★</div>
              <p className="story-text">{s.text}</p>
              <div className="author">
                <div className={`avatar ${s.av}`}>{s.init}</div>
                <div>
                  <div className="author-name">{s.name}</div>
                  <div className="author-dest">{s.dest}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELF-FUNDED ADMISSION */}
      <section className="admission-section">
        <div className="admission-inner">
          <div className="admission-text">
            <span
              className="section-eyebrow"
              style={{ color: "var(--teal-light)" }}
            >
              ✨ قريباً — خدمة جديدة
            </span>
            <h2>القبول الجامعي الخاص</h2>
            <p>
              لمن يريد الدراسة في الخارج على نفقته الخاصة — نساعدك في الحصول على
              قبول من جامعات معتمدة في رواندا وروسيا ودول أخرى، مع متابعة كاملة.
            </p>
            <div className="admission-features">
              {[
                [
                  "🎓",
                  "جامعات شريكة معتمدة",
                  "رواندا · روسيا · وجهات أخرى قيد الإضافة",
                ],
                [
                  "📋",
                  "تجهيز ملف القبول كاملاً",
                  "SOP · CV · خطابات توصية · ترجمة وثائق",
                ],
                ["🤝", "متابعة حتى السفر", "تقديم + تأشيرة + تجهيز للمقابلة"],
              ].map(([icon, title, sub]) => (
                <div key={title as string} className="admission-feat">
                  <span className="feat-icon">{icon}</span>
                  <div>
                    <strong>{title as string}</strong>
                    <span>{sub as string}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="waitlist-box">
              <div className="waitlist-label">
                📩 سجّل اهتمامك — سنتواصل معك عند الإطلاق
              </div>
              <div className="waitlist-form">
                <input
                  type="text"
                  placeholder="اسمك الكريم"
                  className="waitlist-input"
                />
                <input
                  type="tel"
                  placeholder="رقم واتساب"
                  className="waitlist-input"
                  dir="ltr"
                />
                <button className="waitlist-btn">أبلغني عند الإطلاق 🔔</button>
              </div>
              <div className="waitlist-note">
                🔒 بياناتك آمنة · لن نشاركها مع أي جهة
              </div>
            </div>
          </div>
          <div className="admission-visual">
            <div className="float-badge-adm badge-1-adm">✅ قبول معتمد</div>
            <div className="float-badge-adm badge-2-adm">🛂 دعم تأشيرة</div>
            <div className="float-badge-adm badge-3-adm">📚 جامعات معتمدة</div>
            <div className="admission-card">
              <div className="card-badge-adm">قريباً</div>
              <div className="card-globe">🌍</div>
              <div className="card-title-adm">القبول الخاص</div>
              <div className="card-subtitle-adm">Self-Funded Admission</div>
              <div className="card-divider"></div>
              <div className="card-destinations">
                {[
                  {
                    flag: "🇷🇼",
                    name: "رواندا",
                    note: "شراكات نشطة",
                    status: "متاح",
                    active: true,
                  },
                  {
                    flag: "🇷🇺",
                    name: "روسيا",
                    note: "قيد الإعداد",
                    status: "قريباً",
                    active: false,
                  },
                  {
                    flag: "🌐",
                    name: "وجهات أخرى",
                    note: "يتم الإضافة تدريجياً",
                    status: "قريباً",
                    active: false,
                  },
                ].map((d) => (
                  <div key={d.name} className="card-dest">
                    <span className="dest-flag">{d.flag}</span>
                    <div>
                      <div className="dest-name">{d.name}</div>
                      <div className="dest-note">{d.note}</div>
                    </div>
                    <span
                      className={`dest-status ${d.active ? "active" : "soon"}`}
                    >
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="card-waitlist-count">
                <span className="count-num">+47</span>
                <span className="count-txt">طالب سجّل اهتمامه بالفعل</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>هل أنت مستعد لبدء رحلتك؟</h2>
        <p>
          انضم إلى آلاف الطلاب الذين وثقوا بيونيباث لمرافقتهم نحو منحتهم
          الدراسية المثالية. ابدأ اليوم — الاستفسار مجاني.
        </p>
        <div className="cta-actions">
          <a
            href={`${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1.05rem", padding: "18px 44px" }}
          >
            ابدأ الآن — مجاناً
          </a>
          <a
            href={`${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-cta"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تواصل عبر واتساب
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* WA FLOAT */}
      <a
        href={`${WA}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        title="تواصل عبر واتساب"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
