"use client";
// app/HomeClient.tsx

import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import "./home.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import HeroVisual from "./components/HeroVisual";
import Stats from "./components/Stats";
import ScholarshipsSection from "./components/ScholarshipsSection";
import SelfFundedAdmission from "./components/SelfFundedAdmission";

import {
  Sparkles,
  GraduationCap,
  FileText,
  Handshake,
  Mail,
  Bell,
  Lock,
  CheckCircle,
  Shield,
  Library,
  Clock,
  Globe,
  Target,
  MessageCircle,
  Plane,
  BarChart3,
} from "lucide-react";

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
      <section className="hero mt-12">
        {/* ✅ شبكة الخلفية */}
        <div className="hero-grid "></div>

        <HeroSlider></HeroSlider>

        {/* ✅ المحتوى */}
        <div className="hero-content">
          <div className="hero-badge">
            موثوق من أكثر من 1,000 طالب حول العالم
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

        {/* ✅ البطاقات الجانبية */}
        <HeroVisual />

        {/* ====✅ البطاقات الجانبية ======*/}
      </section>

      {/* STATS */}
      <Stats />

      {/* SCHOLARSHIPS */}
      <ScholarshipsSection />
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
            {
              icon: <FileText size={28} color="#2FA889" />,
              title: "إعداد الوثائق",
              desc: "مساعدة احترافية في كتابة خطاب النية والسيرة الذاتية وخطابات التوصية وجميع وثائق التقديم.",
            },
            {
              icon: <Target size={28} color="#2FA889" />,
              title: "مطابقة المنح",
              desc: "نجد أفضل المنح المناسبة لملفك الأكاديمي وأهدافك باستخدام تقنيات ذكية.",
            },
            {
              icon: <Globe size={28} color="#2FA889" />,
              title: "تقديم الطلبات",
              desc: "دعم متكامل للتقديم المباشر على بوابات المنح مع متابعة الحالة باستمرار.",
            },
            {
              icon: <MessageCircle size={28} color="#2FA889" />,
              title: "تدريب المقابلات",
              desc: "جلسات تدريبية شخصية ومحاكاة للمقابلات لمساعدتك على الأداء بثقة.",
            },
            {
              icon: <Plane size={28} color="#2FA889" />,
              title: "دعم ما قبل السفر",
              desc: "إرشادات التأشيرة، نصائح السكن، والتوجيه الثقافي للحياة في الخارج.",
            },
            {
              icon: <BarChart3 size={28} color="#2FA889" />,
              title: "تتبع التقدم",
              desc: "تحديثات فورية على حالة طلبك عبر نظامنا وإشعارات واتساب المباشرة.",
            },
          ].map((service) => (
            <div key={service.title} className="srv-card">
              <div className="srv-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
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
              <Sparkles
                size={16}
                color="#3cc4a0"
                style={{ display: "inline", marginLeft: 6 }}
              />
              قريباً — خدمة جديدة
            </span>
            <h2>القبول الجامعي الخاص</h2>
            <p>
              لمن يريد الدراسة في الخارج على نفقته الخاصة — نساعدك في الحصول على
              قبول من جامعات معتمدة في رواندا وروسيا ودول أخرى، مع متابعة كاملة.
            </p>
            <div className="admission-features">
              {[
                {
                  icon: <GraduationCap size={22} color="#2FA889" />,
                  title: "جامعات شريكة معتمدة",
                  sub: "رواندا · روسيا · وجهات أخرى قيد الإضافة",
                },
                {
                  icon: <FileText size={22} color="#2FA889" />,
                  title: "تجهيز ملف القبول كاملاً",
                  sub: "SOP · CV · خطابات توصية · ترجمة وثائق",
                },
                {
                  icon: <Handshake size={22} color="#2FA889" />,
                  title: "متابعة حتى السفر",
                  sub: "تقديم + تأشيرة + تجهيز للمقابلة",
                },
              ].map((item) => (
                <div key={item.title} className="admission-feat">
                  <span className="feat-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="waitlist-box">
              <div className="waitlist-label">
                <Mail
                  size={18}
                  color="#0a5540"
                  style={{ display: "inline", marginLeft: 6 }}
                />
                سجّل اهتمامك — سنتواصل معك عند الإطلاق
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
                <button className="waitlist-btn">
                  أبلغني عند الإطلاق
                  <Bell
                    size={16}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                </button>
              </div>
              <div className="waitlist-note">
                <Lock
                  size={14}
                  color="#8fa3b8"
                  style={{ display: "inline", marginRight: 4 }}
                />
                بياناتك آمنة · لن نشاركها مع أي جهة
              </div>
            </div>
          </div>
          <div className="admission-visual">
            <div className="float-badge-adm badge-1-adm">
              <CheckCircle
                size={16}
                color="#2FA889"
                style={{ display: "inline", marginLeft: 4 }}
              />
              قبول معتمد
            </div>
            <div className="float-badge-adm badge-2-adm">
              <Shield
                size={16}
                color="#2196F3"
                style={{ display: "inline", marginLeft: 4 }}
              />
              دعم تأشيرة
            </div>
            <div className="float-badge-adm badge-3-adm">
              <Library
                size={16}
                color="#FF9800"
                style={{ display: "inline", marginLeft: 4 }}
              />
              جامعات معتمدة
            </div>
            <div className="admission-card">
              <div className="card-badge-adm">
                <Clock
                  size={14}
                  color="#fff"
                  style={{ display: "inline", marginLeft: 4 }}
                />
                قريباً
              </div>
              <div className="card-globe">
                <Globe size={40} color="#2FA889" />
              </div>
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
      {/* ✅ الدراسة على النفقة الخاصة */}
      <SelfFundedAdmission />

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
