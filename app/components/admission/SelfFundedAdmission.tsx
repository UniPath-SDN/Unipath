"use client";
// components/admission/SelfFundedAdmission.tsx

import { useState } from "react";
import Link from "next/link";
import "./self-funded.css";
import {
  Target,
  MessageCircle,
  CheckCircle,
  ChevronLeft,
  GraduationCap,
  Globe,
  Users,
  Building2,
  FileText,
  Plane,
  Home,
  ShieldCheck,
  MapPin,
  Calendar,
  Clock,
  Award,
  BookOpen,
  AlertCircle,
} from "lucide-react";

// ✅ بيانات الدول للدراسة على النفقة الخاصة
const COUNTRIES = [
  {
    id: "egypt",
    name: "مصر",
    flag: "🇪🇬",
    image:
      "https://images.unsplash.com/photo-1548126033-3b182e6f2e9c?w=400&h=300&fit=crop",
    universities: [
      {
        name: "جامعة القاهرة",
        programs: ["طب", "هندسة", "قانون", "صيدلة"],
        fees: "$2,500 - $4,000",
      },
      {
        name: "جامعة عين شمس",
        programs: ["طب", "هندسة", "علوم", "آداب"],
        fees: "$2,000 - $3,500",
      },
      {
        name: "جامعة الإسكندرية",
        programs: ["طب", "هندسة", "علوم", "تجارة"],
        fees: "$2,000 - $3,000",
      },
    ],
    description:
      "وجهة دراسية رائدة للطلاب السودانيين مع خصم 70% في الجامعات الحكومية.",
    features: [
      "خصم 70% للطلاب السودانيين",
      "جامعات حكومية مرموقة",
      "تكاليف معيشة منخفضة",
      "شهادات معترف بها دولياً",
    ],
    total_universities: 3,
  },
  {
    id: "turkey",
    name: "تركيا",
    flag: "🇹🇷",
    image:
      "https://images.unsplash.com/photo-1527838832700-5052e1d6e7c8?w=400&h=300&fit=crop",
    universities: [
      {
        name: "جامعة اسطنبول التقنية",
        programs: ["هندسة", "عمارة", "علوم حاسوب"],
        fees: "$2,500 - $4,000",
      },
      {
        name: "جامعة أنقرة",
        programs: ["طب", "قانون", "اقتصاد", "علوم سياسية"],
        fees: "$2,000 - $3,500",
      },
      {
        name: "جامعة الشرق الأوسط التقنية",
        programs: ["هندسة", "علوم", "إدارة"],
        fees: "$2,500 - $4,500",
      },
    ],
    description:
      "جامعات تركية مرموقة بتكاليف دراسية مناسبة وبيئة تعليمية متطورة.",
    features: [
      "تأشيرة سهلة للطلاب",
      "تكاليف معيشة مناسبة",
      "شهادات معترف بها دولياً",
      "تنوع ثقافي",
    ],
    total_universities: 3,
  },
  {
    id: "malaysia",
    name: "ماليزيا",
    flag: "🇲🇾",
    image:
      "https://images.unsplash.com/photo-1518684076987-2e6b2a80b3d6?w=400&h=300&fit=crop",
    universities: [
      {
        name: "جامعة مالايا",
        programs: ["طب", "هندسة", "اقتصاد", "علوم"],
        fees: "$3,000 - $5,000",
      },
      {
        name: "جامعة بوترا ماليزيا",
        programs: ["زراعة", "علوم", "إدارة", "هندسة"],
        fees: "$2,500 - $4,000",
      },
    ],
    description: "بيئة تعليمية عالمية بجودة بريطانية وتكاليف معيشة مناسبة.",
    features: [
      "دراسة باللغة الإنجليزية",
      "بيئة آمنة ومستقرة",
      "شهادات معترف بها عالمياً",
      "تنوع ثقافي",
    ],
    total_universities: 2,
  },
  {
    id: "russia",
    name: "روسيا",
    flag: "🇷🇺",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90085f0c56?w=400&h=300&fit=crop",
    universities: [
      {
        name: "جامعة موسكو الحكومية",
        programs: ["طب", "هندسة", "فيزياء", "كيمياء"],
        fees: "$4,000 - $6,000",
      },
      {
        name: "جامعة سانت بطرسبرغ",
        programs: ["طب", "قانون", "علوم", "هندسة"],
        fees: "$3,500 - $5,500",
      },
    ],
    description:
      "جامعات روسية عريقة بتكاليف دراسية مناسبة وتخصصات طبية وهندسية متميزة.",
    features: [
      "رسوم دراسية منخفضة",
      "تعليم طبي متميز",
      "شهادات معترف بها",
      "ثقافة غنية",
    ],
    total_universities: 2,
  },
  {
    id: "rwanda",
    name: "رواندا",
    flag: "🇷🇼",
    image:
      "https://images.unsplash.com/photo-1560508182-cbb7f70d5104?w=400&h=300&fit=crop",
    universities: [
      {
        name: "جامعة رواندا",
        programs: ["طب", "هندسة", "علوم", "إدارة"],
        fees: "$2,000 - $3,500",
      },
    ],
    description: "وجهة دراسية ناشئة في أفريقيا ببيئة آمنة وتكاليف معقولة.",
    features: [
      "بيئة آمنة ومستقرة",
      "تكاليف معيشة منخفضة",
      "جامعات معترف بها",
      "فرص نمو",
    ],
    total_universities: 1,
  },
];

export default function SelfFundedAdmission() {
  const [showAll, setShowAll] = useState(false);

  const data = COUNTRIES;
  const displayed = showAll ? data : data.slice(0, 4);

  return (
    <section className="admission-section" id="admission">
      <div className="admission-container">
        {/* HEADER */}
        <div className="section-header">
          <span className="section-eyebrow">🎓 الدراسة في الخارج</span>
          <h2>ادرس على النفقة الخاصة</h2>
          <p>
            نقدم لك خيارات دراسية متنوعة في جامعات مرموقة حول العالم، مع دعم
            كامل من فريقنا حتى حصولك على القبول.
          </p>
        </div>

        {/* ✅ GUARANTEE NOTICE */}
        <div className="admission-guarantee-notice">
          <ShieldCheck size={22} color="#2FA889" />
          <div>
            <strong>ضمان القبول 100%</strong>
            <span>
              عند اكتمال جميع مستنداتك وفق متطلبات الجامعة، نضمن لك الحصول على
              القبول.
            </span>
          </div>
        </div>

        {/* STATS */}
        <div className="admission-stats">
          <div className="stat-item">
            <div className="stat-number">{COUNTRIES.length}</div>
            <div className="stat-label">دولة متاحة</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">
              {COUNTRIES.reduce((acc, c) => acc + c.universities.length, 0)}
            </div>
            <div className="stat-label">جامعة شريكة</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">ضمان القبول*</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">استشارات مجانية</div>
          </div>
        </div>

        {/* STATS FOOTNOTE */}
        <div className="admission-stats-note">
          <AlertCircle size={14} color="#8fa3b8" />
          <span>
            * ضمان القبول مشروط باكتمال جميع المستندات المطلوبة حسب متطلبات
            الجامعة.
          </span>
        </div>

        {/* GRID */}
        <div className="admission-grid">
          {displayed.map((item) => (
            <Link
              key={item.id}
              href={`/admission/${item.id}`}
              className="admission-card-link"
            >
              <div className="admission-card">
                <div
                  className="admission-card-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="admission-card-flag">{item.flag}</div>
                  <div className="admission-card-overlay">
                    <span className="admission-card-count">
                      {item.total_universities} جامعة
                    </span>
                  </div>
                </div>
                <div className="admission-card-body">
                  <h3>{item.name}</h3>
                  <p className="admission-card-desc">{item.description}</p>
                  <div className="admission-card-features">
                    {item.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="admission-card-feature">
                        <CheckCircle size={14} color="#2FA889" />
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="admission-card-footer">
                    <span className="admission-card-universities">
                      {item.universities.map((u) => u.name).join("، ")}
                    </span>
                    <span className="admission-card-cta">تفاصيل ←</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* VIEW ALL */}
        {COUNTRIES.length > 4 && (
          <div className="admission-view-all">
            <button
              className="admission-view-all-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "عرض أقل" : `عرض الكل (${COUNTRIES.length})`}
              <ChevronLeft size={18} className={showAll ? "rotated" : ""} />
            </button>
          </div>
        )}

        {/* SERVICES */}
        <div className="admission-services">
          <h3>📋 ماذا تشمل خدمتنا؟</h3>
          <div className="admission-services-grid">
            {[
              {
                icon: <FileText size={24} color="#2FA889" />,
                title: "تجهيز الملف",
                desc: "كتابة SOP، CV، خطابات التوصية وترجمة المستندات",
              },
              {
                icon: <Building2 size={24} color="#2FA889" />,
                title: "التقديم للجامعات",
                desc: "تقديم طلبك للجامعات المختارة ومتابعة القبول",
              },
              {
                icon: <Plane size={24} color="#2FA889" />,
                title: "دعم التأشيرة",
                desc: "مساعدتك في إجراءات التأشيرة والإقامة",
              },
              {
                icon: <Home size={24} color="#2FA889" />,
                title: "ترتيب السكن",
                desc: "مساعدتك في العثور على سكن مناسب",
              },
            ].map((service) => (
              <div key={service.title} className="admission-service">
                <div className="admission-service-icon">{service.icon}</div>
                <div>
                  <div className="admission-service-title">{service.title}</div>
                  <div className="admission-service-desc">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="admission-cta">
          <div className="admission-cta-content">
            <div className="admission-cta-icon">
              <Target size={28} color="#fff" />
            </div>
            <div>
              <h3>🎯 جاهز تبدأ رحلتك الدراسية؟</h3>
              <p>احصل على استشارتك المجانية الآن</p>
            </div>
            <a
              href="https://wa.me/201500276855?text=السلام%20عليكم،%20أريد%20الاستفسار%20عن%20الدراسة%20في%20الخارج"
              target="_blank"
              rel="noopener noreferrer"
              className="admission-cta-btn"
            >
              <MessageCircle size={18} />
              استشارة مجانية
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
