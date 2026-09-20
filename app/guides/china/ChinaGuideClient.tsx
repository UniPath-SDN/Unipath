// app/guides/china/page.tsx
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  BookOpen,
  GraduationCap,
  Award,
  Globe,
  Home,
  ChevronLeft,
  CheckCircle,
  FileText,
  Building2,
  Gift,
  Users,
  Clock,
  Calendar,
  MapPin,
  CreditCard,
  Shield,
  AlertCircle,
  Laptop,
  Target,
  DollarSign,
  Landmark,
  Library,
  PenTool,
  MessageCircle,
  Lightbulb,
  Trophy,
  Heart,
  Briefcase,
  GitBranch,
  School,
  Activity,
  ClipboardList,
  ExternalLink,
  Sparkles,
  Flag,
  University,
  Search,
  BookMarked,
  GraduationCap as GradCap,
  ArrowDown,
  Link as LinkIcon,
  Mail,
  Phone,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Users as UsersIcon,
  Star,
  TrendingUp,
  ShieldCheck,
  Compass,
  FileCheck,
  BookOpenCheck,
  ListChecks,
  BadgeCheck,
  Award as AwardIcon,
  Globe as GlobeIcon,
  Home as HomeIcon,
  Building,
  Castle,
  Church,
  CircleDollarSign,
  Plane,
  Train,
  Bus,
  Car,
  Utensils,
  Coffee,
  ShoppingBag,
  Smartphone,
  CreditCard as CreditCardIcon,
  MessageCircle as MessageCircleIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  ChevronDown,
} from "lucide-react";

type AccordionData = {
  id: string;
  title: string;
  icon: ReactNode;
  badge?: string;
  content: ReactNode;
};

// ✅ مكون القائمة المنسدلة المحسّن مع التمرير التلقائي
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: `1.5px solid ${isOpen ? "#DE2910" : "#e8eef5"}`,
        overflow: "hidden",
        transition: "all .3s ease",
        boxShadow: isOpen ? "0 8px 30px rgba(222,41,16,.12)" : "none",
        marginBottom: 12,
        scrollMarginTop: 80,
      }}
    >
      {/* Header - Clickable */}
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontFamily: "Cairo, sans-serif",
          textAlign: "right",
          transition: "all .2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#f8fafc";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: isOpen ? "#fce8e8" : "#f0f4f8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isOpen ? "#DE2910" : "#4a6580",
              transition: "all .3s",
            }}
          >
            {item.icon}
          </div>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: isOpen ? "#1B3A5C" : "#4a6580",
              transition: "color .2s",
            }}
          >
            {item.title}
          </span>
          {item.badge && (
            <span
              style={{
                background: "#DE2910",
                color: "#fff",
                fontSize: "0.65rem",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 50,
                marginRight: 4,
              }}
            >
              {item.badge}
            </span>
          )}
        </div>
        <ChevronDown
          size={20}
          style={{
            color: isOpen ? "#DE2910" : "#8fa3b8",
            transition: "transform .3s ease, color .3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
          }}
        />
      </button>

      {/* Content - يظهر عند الفتح */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px 20px",
            borderTop: "1px solid #f0f4f8",
            paddingTop: 18,
            animation: "fadeIn .3s ease",
          }}
        >
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
  );
}

export default function ChinaGuidePage() {
  const [openId, setOpenId] = useState<string | null>("overview");
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(
    {},
  );
  const [timelineYear, setTimelineYear] = useState("2027");

  const toggleStep = (stepId: string) => {
    setCompletedSteps((current) => ({
      ...current,
      [stepId]: !current[stepId],
    }));
  };

  const toggleItem = (id: string) => {
    const newOpenId = openId === id ? null : id;
    setOpenId(newOpenId);

    // ✅ التمرير السلس عند الفتح (وليس الإغلاق)
    if (newOpenId) {
      setTimeout(() => {
        const element = document.getElementById(`accordion-${id}`);
        if (element) {
          const navbarHeight = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const accordionItems = [
    {
      id: "overview",
      title: "🇨🇳 نظرة عامة عن الدراسة في الصين",
      icon: <GlobeIcon size={20} />,
      badge: "محدث",
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            تُعد <strong>الصين</strong> واحدة من الوجهات الدراسية المهمة للطلاب
            الدوليين، ليس فقط بسبب تنوع الجامعات والتخصصات، ولكن أيضًا بسبب تعدد
            طرق القبول والتمويل المتاحة.
          </p>
          <p style={{ marginTop: 12 }}>
            توفر الصين برامج أكاديمية متنوعة بمستويات دراسية مختلفة وباللغتين
            الصينية والإنجليزية، مما يجعلها وجهة جاذبة للطلاب من جميع أنحاء
            العالم.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 12,
              marginTop: 16,
            }}
          >
            {[
              { label: "جامعة", value: "200+" },
              { label: "برنامج دراسي", value: "500+" },
              { label: "منحة CSC", value: "✅" },
              { label: "مدينة", value: "30+" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#f8fafc",
                  borderRadius: 10,
                  padding: "12px",
                  textAlign: "center",
                  border: "1px solid #e8eef5",
                }}
              >
                <div
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    color: "#DE2910",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#8fa3b8" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 16,
              padding: "14px 18px",
              background: "#fce8e8",
              borderRadius: 12,
              borderRight: "3px solid #DE2910",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "#7a2020" }}>
              <LightbulbIcon
                size={18}
                color="#DE2910"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>نصيحة:</strong> ابدأ التخطيط للدراسة في الصين قبل موسم
              التقديم بفترة كافية، فالإجراءات تحتاج وقتاً، خاصة فيما يتعلق بـ
              CSCA والمستندات.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "study-options",
      title: " طرق الدراسة في الصين",
      icon: <GraduationCap size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>هناك طريقان أساسيان للدراسة في الصين:</p>

          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Trophy size={18} color="#DE2910" />
            أولاً: الدراسة بمنحة
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                icon: <Award size={16} color="#2FA889" />,
                text: "🇨🇳 منحة الحكومة الصينية CSC",
              },
              {
                icon: <Building2 size={16} color="#2FA889" />,
                text: " منح حكومات المقاطعات والمدن",
              },
              {
                icon: <Library size={16} color="#2FA889" />,
                text: " منح الجامعات الصينية",
              },
              {
                icon: <Heart size={16} color="#2FA889" />,
                text: " منح وبرامج أخرى",
              },
            ].map((item) => (
              <li
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <DollarSign size={18} color="#FF9800" />
            ثانياً: الدراسة على النفقة الخاصة
          </h4>
          <div
            style={{
              padding: "12px 16px",
              background: "#fff3e0",
              borderRadius: 10,
              borderRight: "3px solid #FF9800",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "#7a4f00" }}>
              يمكنك التقديم كطالب Self-funded، وتتحمل تكاليف الدراسة والسكن
              والمعيشة حسب البرنامج. بعض الجامعات تقدم منحاً أو خصومات بعد
              القبول.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "csc-scholarship",
      title: "منحة الحكومة الصينية CSC",
      icon: <Award size={20} />,
      badge: "الأكثر مشاهدة",
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            <strong>CSC</strong> اختصار لـ{" "}
            <strong>China Scholarship Council</strong>، وهو الجهة المرتبطة
            بإدارة برامج منحة الحكومة الصينية تحت إشراف وزارة التعليم الصينية.
          </p>
          <p style={{ marginTop: 12 }}>
            من المهم التفريق بين <strong>CSC</strong> (الجهة/النظام) و
            <strong>Chinese Government Scholarship</strong> (المنحة نفسها
            وبرامجها المختلفة).
          </p>

          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Gift size={18} color="#DE2910" />
            ماذا يمكن أن تغطي منحة CSC؟
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 10,
              marginBottom: 12,
            }}
          >
            {[
              {
                icon: <GraduationCap size={16} color="#DE2910" />,
                text: "الرسوم الدراسية",
              },
              {
                icon: <Home size={16} color="#DE2910" />,
                text: "السكن الجامعي",
              },
              {
                icon: <DollarSign size={16} color="#DE2910" />,
                text: "بدل معيشة شهري",
              },
              {
                icon: <Shield size={16} color="#DE2910" />,
                text: "التأمين الطبي",
              },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  background: "#f8fafc",
                  borderRadius: 8,
                  padding: "10px 12px",
                  border: "1px solid #e8eef5",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {item.icon}
                <span style={{ fontSize: "0.85rem" }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: "12px 16px",
              background: "#fce8e8",
              borderRadius: 10,
              borderRight: "3px solid #DE2910",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a2020" }}>
              <AlertCircle
                size={18}
                color="#DE2910"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>ملاحظة:</strong> التغطية تختلف حسب البرنامج والفئة
              والجامعة. لا تفترض أن تذكرة الطيران مجانية في كل منح CSC.
            </p>
          </div>

          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ClipboardList size={18} color="#1B3A5C" />
            كيف يتم التقديم على CSC؟
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "اختيار برنامج المنحة المناسب",
              "اختيار الجامعة أو الجهة المستقبلة",
              "مراجعة شروط الجامعة والتخصص",
              "تجهيز المستندات",
              "إنشاء حساب في نظام التقديم",
              "تعبئة البيانات وإدخال Agency Number",
              "رفع المستندات",
              "مراجعة الطلب وإرساله قبل الموعد النهائي",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                <CheckCircle size={16} color="#2FA889" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              background: "#fff3e0",
              borderRadius: 10,
              borderRight: "3px solid #FF9800",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a4f00" }}>
              <AlertCircle
                size={18}
                color="#FF9800"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>تنبيه:</strong> لا يوجد موعد واحد لجميع برامج CSC. الموعد
              يعتمد على البرنامج والجامعة والجهة المستلمة.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "provincial-scholarships",
      title: "منح حكومات المقاطعات",
      icon: <Building2 size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            الصين ليست لديها منحة محلية واحدة فقط. هناك منح تقدمها حكومات
            المقاطعات أو المدن، وتختلف شروطها من مكان لآخر.
          </p>
          <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
            {[
              {
                icon: <Landmark size={16} color="#DE2910" />,
                text: "Beijing Government Scholarship",
              },
              {
                icon: <Landmark size={16} color="#DE2910" />,
                text: "Shanghai Government Scholarship",
              },
              {
                icon: <Landmark size={16} color="#DE2910" />,
                text: "Zhejiang Government Scholarship",
              },
              {
                icon: <Landmark size={16} color="#DE2910" />,
                text: "Jiangsu Government Scholarship",
              },
              {
                icon: <Landmark size={16} color="#DE2910" />,
                text: "Fujian Government Scholarship",
              },
              {
                icon: <Landmark size={16} color="#DE2910" />,
                text: "Hainan Provincial Government Scholarship",
              },
            ].map((item) => (
              <li
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              background: "#e3f2fd",
              borderRadius: 10,
              borderRight: "3px solid #2196F3",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#0d47a1" }}>
              <LightbulbIcon
                size={18}
                color="#2196F3"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>نصيحة:</strong> منح المقاطعات قد تكون فرصة ممتازة للطلاب
              الذين لا يحصلون على CSC، لكن يجب البحث عنها{" "}
              <strong>مقاطعة بمقاطعة وجامعة بجامعة</strong>.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "csca-exam",
      title: "امتحان CSCA",
      icon: <PenTool size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            <strong>CSCA – China Scholastic Competency Assessment</strong>
          </p>
          <p style={{ marginTop: 12 }}>
            هو اختبار موحد للطلاب الدوليين الراغبين في دراسة{" "}
            <strong>البكالوريوس في الصين</strong>. بدأ تطبيقه للمتقدمين
            للبكالوريوس اعتباراً من العام الأكاديمي <strong>2026/2027</strong>.
          </p>

          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <BookOpen size={18} color="#DE2910" />
            مواد CSCA
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 10,
            }}
          >
            {[
              {
                name: "Mathematics",
                duration: "60 دقيقة",
                questions: "48 سؤال",
              },
              { name: "Physics", duration: "60 دقيقة", questions: "48 سؤال" },
              { name: "Chemistry", duration: "60 دقيقة", questions: "48 سؤال" },
              {
                name: "Professional Chinese",
                duration: "90 دقيقة",
                questions: "80 سؤال",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#f8fafc",
                  borderRadius: 8,
                  padding: "12px 14px",
                  border: "1px solid #e8eef5",
                }}
              >
                <div style={{ fontWeight: 700, color: "#1B3A5C" }}>
                  {item.name}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#8fa3b8" }}>
                  {" "}
                  {item.duration}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#8fa3b8" }}>
                  {item.questions}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 16,
              padding: "12px 16px",
              background: "#fce8e8",
              borderRadius: 10,
              borderRight: "3px solid #DE2910",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a2020" }}>
              <AlertCircle
                size={18}
                color="#DE2910"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>تنبيه:</strong> ليس كل الطلاب يمتحنون كل المواد. المواد
              المطلوبة تعتمد على
              <strong>الجامعة + التخصص + نوع التقديم + لغة البرنامج</strong>.
            </p>
          </div>

          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Calendar size={18} color="#1B3A5C" />
            مواعيد CSCA
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["يناير", "مارس", "أبريل", "يونيو", "ديسمبر"].map((month) => (
              <li
                key={month}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                <CheckCircle size={16} color="#2FA889" />
                <span>{month}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              background: "#fff3e0",
              borderRadius: 10,
              borderRight: "3px solid #FF9800",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a4f00" }}>
              <DollarSign
                size={18}
                color="#FF9800"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>الرسوم:</strong> مادة واحدة (450 يوان) | مادتان أو أكثر
              (700 يوان)
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "language-requirements",
      title: "🇬🇧 متطلبات اللغة",
      icon: <Globe size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Globe size={18} color="#DE2910" />
            الدراسة باللغة الإنجليزية
          </h4>
          <p>قد تطلب الجامعة إثبات اللغة الإنجليزية مثل:</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["IELTS", "TOEFL", "Duolingo"].map((test) => (
              <li
                key={test}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                <CheckCircle size={16} color="#2FA889" />
                <span>{test}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              background: "#fce8e8",
              borderRadius: 10,
              borderRight: "3px solid #DE2910",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a2020" }}>
              <AlertCircle
                size={18}
                color="#DE2910"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>تنبيه:</strong> لا يوجد رقم IELTS واحد ينطبق على جميع
              الجامعات الصينية. الدرجة المطلوبة تختلف حسب البرنامج والجامعة.
            </p>
          </div>

          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <BookOpen size={18} color="#DE2910" />
            الدراسة باللغة الصينية
          </h4>
          <p>
            قد تحتاج إلى إثبات مستوى اللغة الصينية (HSK)، والمستوى المطلوب يختلف
            حسب الجامعة والتخصص والبرنامج.
          </p>
        </div>
      ),
    },
    {
      id: "documents",
      title: "المستندات المطلوبة",
      icon: <FileText size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "جواز سفر ساري المفعول",
              "صورة شخصية حديثة",
              "شهادة الثانوية للبكالوريوس (مترجمة ومعتمدة)",
              "كشف الدرجات (مترجم ومعتمد)",
              "شهادة البكالوريوس للماجستير",
              "شهادة الماجستير للدكتوراه",
              "شهادة اللغة (IELTS/TOEFL/HSK)",
              "نتيجة CSCA (للبكالوريوس عند الطلب)",
              "Study Plan / Personal Statement",
              "السيرة الذاتية (CV)",
              "خطابات توصية (عند الطلب)",
              "الفحص الطبي (Foreigner Physical Examination Form)",
              "شهادة السجل الجنائي (عند الطلب)",
              "إثبات القدرة المالية (عند الطلب)",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                <FileText size={16} color="#2FA889" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              background: "#e6f7f3",
              borderRadius: 10,
              borderRight: "3px solid #2FA889",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#0a5540" }}>
              <LightbulbIcon
                size={18}
                color="#2FA889"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>نصيحة:</strong> لا تجمع كل المستندات بشكل عشوائي. ابدأ
              بتحديد الجامعة والتخصص ثم راجع قائمة المستندات الرسمية.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "university-selection",
      title: " كيف تختار الجامعة؟",
      icon: <Building2 size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            لا تختار الجامعة فقط لأنها "تقبل معدل منخفض" أو "عندها منحة". استخدم
            هذه المعايير:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              marginTop: 12,
            }}
          >
            {[
              {
                icon: <GraduationCap size={18} color="#DE2910" />,
                title: "التخصص",
                desc: "هل الجامعة قوية في تخصصك؟",
              },
              {
                icon: <Globe size={18} color="#DE2910" />,
                title: "لغة الدراسة",
                desc: "English-taught أم Chinese-taught؟",
              },
              {
                icon: <CheckCircle size={18} color="#DE2910" />,
                title: "شروط القبول",
                desc: "هل ملفك يطابق الشروط؟",
              },
              {
                icon: <PenTool size={18} color="#DE2910" />,
                title: "CSCA",
                desc: "هل تطلبه؟ وما المواد المطلوبة؟",
              },
              {
                icon: <DollarSign size={18} color="#DE2910" />,
                title: "الرسوم",
                desc: "كم تكلفة الدراسة والسكن؟",
              },
              {
                icon: <Award size={18} color="#DE2910" />,
                title: "المنحة",
                desc: "ما نوعها؟ وماذا تغطي؟",
              },
              {
                icon: <MapPin size={18} color="#DE2910" />,
                title: "المدينة",
                desc: "هل تكاليف المعيشة مناسبة؟",
              },
              {
                icon: <Shield size={18} color="#DE2910" />,
                title: "الاعتماد",
                desc: "خصوصاً في الطب والتخصصات المهنية.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f8fafc",
                  borderRadius: 10,
                  padding: "12px 14px",
                  border: "1px solid #e8eef5",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  {item.icon}
                  <span style={{ fontWeight: 700, color: "#1B3A5C" }}>
                    {item.title}
                  </span>
                </div>
                <div style={{ fontSize: "0.8rem", color: "#8fa3b8" }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "study-plan",
      title: " خطة التقديم",
      icon: <Calendar size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            <strong>لا تنتظر فتح التقديم.</strong> ابدأ قبل الموسم بفترة كافية.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 12,
            }}
          >
            {[
              {
                phase: "مرحلة 1: التخطيط",
                items: [
                  "تحديد التخصص",
                  "تحديد لغة الدراسة",
                  "تحديد الميزانية",
                  "تحديد الجامعات",
                ],
              },
              {
                phase: "مرحلة 2: تجهيز المستندات",
                items: [
                  "جواز السفر",
                  "الشهادات",
                  "كشف الدرجات",
                  "الترجمة والتصديقات",
                ],
              },
              {
                phase: "مرحلة 3: اللغة",
                items: ["IELTS / TOEFL / Duolingo", "HSK للبرامج الصينية"],
              },
              {
                phase: "مرحلة 4: CSCA",
                items: [
                  "تحديد المواد",
                  "التسجيل",
                  "أداء الامتحان",
                  "الحصول على النتيجة",
                ],
              },
              {
                phase: "مرحلة 5: التقديم",
                items: ["الجامعة", "المنحة", "المستندات", "المتابعة"],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                style={{
                  background: "#f8fafc",
                  borderRadius: 10,
                  padding: "14px 18px",
                  border: "1px solid #e8eef5",
                }}
              >
                <div
                  style={{ fontWeight: 800, color: "#1B3A5C", marginBottom: 6 }}
                >
                  {phase.phase}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontSize: "0.85rem",
                    color: "#4a6580",
                  }}
                >
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "2px 0",
                      }}
                    >
                      <CheckCircle size={14} color="#2FA889" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "common-mistakes",
      title: " أخطاء شائعة يجب تجنبها",
      icon: <AlertCircle size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "التقديم على جامعة واحدة فقط",
              "اختيار الجامعة بناءً على ترتيبها فقط",
              "التقديم على تخصص لا يناسب المؤهل السابق",
              "افتراض أن IELTS 6 شرط لكل الجامعات",
              "افتراض أن كل طلاب الطب يمتحنون نفس مواد CSCA",
              "الاعتقاد أن 60% أو 70% تضمن القبول",
              "تجهيز المستندات بعد فتح التقديم",
              "استخدام معلومات قديمة عن المنح",
              "عدم التأكد من اعتماد البرنامج، خصوصاً الطب",
              "الاعتماد على اسم المنحة فقط دون معرفة التغطية الفعلية",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                <AlertCircle size={16} color="#DE2910" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "summary",
      title: "🇨🇳 الخلاصة",
      icon: <Target size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            الدراسة في الصين ليست مجرد "أقدم على منحة وخلاص". إنها عملية تبدأ
            من:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginTop: 12,
              padding: "16px 20px",
              background: "#f0f4f8",
              borderRadius: 12,
            }}
          >
            {[
              "اختيار التخصص",
              "اختيار الجامعة",
              "اختيار لغة الدراسة",
              "معرفة شروط القبول",
              "معرفة متطلبات CSCA",
              "تجهيز اللغة والمستندات",
              "اختيار نوع التمويل",
              "التقديم",
              "متابعة القبول والمنحة",
              "إجراءات التأشيرة والسفر",
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "4px 0",
                  borderBottom: index < 9 ? "1px solid #dde5f0" : "none",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "#DE2910",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.75rem",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </span>
                <span
                  style={{ fontWeight: index === 0 || index === 9 ? 700 : 400 }}
                >
                  {item}
                </span>
                {index < 9 && (
                  <span style={{ marginRight: "auto", color: "#DE2910" }}>
                    ⬇️
                  </span>
                )}
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 16,
              padding: "16px 20px",
              background: "#e6f7f3",
              borderRadius: 12,
              borderRight: "3px solid #2FA889",
            }}
          >
            <p style={{ fontSize: "0.95rem", color: "#0a5540" }}>
              <BookMarked
                size={18}
                color="#2FA889"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>أهم قاعدة:</strong> لا تعتمد على قائمة عامة لمتطلبات
              الصين. المتطلبات النهائية تعتمد على{" "}
              <strong>
                الجامعة + التخصص + لغة الدراسة + مستوى الدراسة + نوع المنحة
              </strong>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "resources",
      title: " المصادر الرسمية",
      icon: <ExternalLink size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              { name: "CSCA (الموقع الرسمي)", url: "https://csca.cn/" },
              {
                name: "Campus China (المنصة الرسمية)",
                url: "https://campuschina.org/",
              },
              {
                name: "وزارة التعليم الصينية (مصدر حكومي)",
                url: "https://en.moe.gov.cn/",
              },
              {
                name: "بوابة التأشيرات الصينية",
                url: "https://www.visaforchina.cn/",
              },
            ].map((item) => (
              <li
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                <Globe size={16} color="#2FA889" />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#2FA889",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              background: "#fff3e0",
              borderRadius: 10,
              borderRight: "3px solid #FF9800",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a4f00" }}>
              <MapPin
                size={18}
                color="#FF9800"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>نصيحة:</strong> عند اختيار الجامعة، استخدم موقع الجامعة
              الرسمي وصفحة <strong>International Students / Admissions</strong>{" "}
              الخاصة بالبرنامج.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "visa",
      title: "التأشيرة الصينية: X1 و X2",
      icon: <Plane size={20} />,
      badge: "إجراءات السفر",
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            نوع التأشيرة يعتمد أساسًا على <strong>مدة الدراسة</strong>. لا تبدأ
            طلب التأشيرة قبل استلام مستندات القبول والتأشيرة من الجامعة أو الجهة
            المانحة.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 12,
              marginTop: 14,
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e8eef5",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <h4
                style={{ color: "#1B3A5C", margin: "0 0 6px", fontWeight: 800 }}
              >
                تأشيرة X1
              </h4>
              <p style={{ fontSize: "0.85rem", margin: 0 }}>
                للدراسة التي تتجاوز 180 يومًا. بعد الوصول إلى الصين يجب عادةً
                تحويلها إلى <strong>تصريح إقامة دراسي</strong> خلال المدة
                المحددة من السلطات والجامعة؛ فهي ليست بديلًا عن الإقامة طويلة
                المدة.
              </p>
            </div>
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e8eef5",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <h4
                style={{ color: "#1B3A5C", margin: "0 0 6px", fontWeight: 800 }}
              >
                تأشيرة X2
              </h4>
              <p style={{ fontSize: "0.85rem", margin: 0 }}>
                للدراسة التي لا تتجاوز 180 يومًا. تكون مدتها وشروطها مرتبطة
                ببرنامج الدراسة، ولا ينبغي بدء دراسة طويلة بها بدل X1.
              </p>
            </div>
          </div>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 18,
              marginBottom: 8,
            }}
          >
            الوثائق الأساسية
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "جواز سفر أصلي ساري المفعول، مع صفحات فارغة وصلاحية مناسبة لمدة الرحلة والإقامة",
              "نموذج طلب التأشيرة الإلكتروني مطبوع وموقع حسب تعليمات مركز التأشيرات أو السفارة",
              "صورة شخصية حديثة بالمواصفات المطلوبة",
              "Admission Notice أو خطاب القبول الجامعي",
              "JW201 أو JW202 / مستند التأشيرة الدراسي الذي تصدره الجهة المختصة حسب نوع الدراسة والتمويل",
              "إثبات السكن أو عنوان الإقامة إذا طلبته السفارة أو مركز التأشيرات",
              "إثبات القدرة المالية أو خطاب المنحة، إذا كان مطلوبًا ولم تكن المنحة تغطي جميع المصاريف",
              "حجز موعد ورسوم المعالجة، وأي مستندات إضافية خاصة بجنسية المتقدم",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "6px 0",
                  borderBottom: "1px solid #f0f4f8",
                }}
              >
                <CheckCircle
                  size={16}
                  color="#2FA889"
                  style={{ marginTop: 6, flexShrink: 0 }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 18,
              marginBottom: 8,
            }}
          >
            خطوات استخراج التأشيرة
          </h4>
          <ol style={{ paddingRight: 22 }}>
            <li>
              تأكد من أن مدة البرنامج تحدد X1 أو X2، واطلب من الجامعة مستندات
              القبول والتأشيرة الرسمية.
            </li>
            <li>
              راجع موقع السفارة أو مركز التأشيرات الصيني في بلدك لمعرفة النموذج
              والموعد والرسوم ومتطلبات الصورة.
            </li>
            <li>
              جهز الأصول والنسخ، وتأكد من تطابق الاسم ورقم الجواز في كل
              المستندات.
            </li>
            <li>
              املأ الطلب كما هو في الجواز، ثم احجز الموعد إن كان التقديم الحضوري
              مطلوبًا.
            </li>
            <li>
              قدم الملف وأجب بوضوح عن مكان الدراسة والمدة والجامعة ومصدر
              التمويل.
            </li>
            <li>
              بعد صدور التأشيرة، افحص نوعها وعدد مرات الدخول وتاريخ الصلاحية قبل
              السفر.
            </li>
            <li>
              عند الوصول بتأشيرة X1، تواصل فورًا مع الجامعة لاستكمال الفحص أو
              التسجيل وتحويلها إلى تصريح إقامة دراسي ضمن الموعد القانوني.
            </li>
          </ol>
          <div
            style={{
              marginTop: 14,
              padding: "12px 16px",
              background: "#fce8e8",
              borderRadius: 10,
              borderRight: "3px solid #DE2910",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a2020", margin: 0 }}>
              <AlertCircle
                size={18}
                color="#DE2910"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>مهم:</strong> متطلبات السفارات والـJW201/JW202 والمدة
              القانونية قد تختلف حسب بلدك ونوع البرنامج. المرجع النهائي هو
              السفارة أو مركز التأشيرات والجامعة في سنة التقديم.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "application-letters",
      title: " قوالب Motivation Letter و Recommendation Letter",
      icon: <PenTool size={20} />,
      badge: "قوالب قابلة للتخصيص",
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            استخدم القوالب التالية كنقطة بداية، ثم خصصها للجامعة والتخصص
            والمنحة. لا تنسخ نصًا عامًا كما هو، ولا تذكر إنجازات لا تستطيع
            إثباتها.
          </p>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 16,
              marginBottom: 8,
            }}
          >
            قالب الرسالة الدافعة Motivation Letter
          </h4>
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e8eef5",
              borderRadius: 10,
              padding: 14,
              whiteSpace: "pre-line",
              fontSize: "0.86rem",
            }}
          >
            {`Dear CSC Scholarship Committee / Admissions Committee,

My name is [FULL NAME], a citizen of [COUNTRY], and I am applying for the [DEGREE LEVEL] program in [MAJOR] at [UNIVERSITY] for the [ACADEMIC YEAR] intake. I am applying for the Chinese Government Scholarship because [specific reason connected to China, the university, and the field].

My academic background in [PREVIOUS QUALIFICATION] from [INSTITUTION] has provided me with a foundation in [RELEVANT SUBJECTS]. During my studies, I achieved [specific academic result] and completed [project, research, competition, internship, or relevant course]. This experience confirmed my interest in [FIELD] and prepared me for the academic demands of this program.

The problem I want to understand or help solve is [specific problem in your country or field]. I chose [UNIVERSITY] because of [specific laboratory, course, faculty member, clinical training, curriculum, or research strength]. I understand that studying in China requires discipline, cultural openness, and the ability to adapt. I am prepared to study [Chinese/English], complete any required language or preparatory training, and comply with university and scholarship regulations.

If selected, my study plan is to [briefly explain your academic goals and the skills or research you will develop]. After graduation, I intend to return to [COUNTRY/REGION] and apply this knowledge through [career plan, public service, research, healthcare, education, or industry contribution]. I believe this plan supports the goals of the CSC scholarship by creating meaningful academic and professional exchange between China and my country.

I respectfully request your consideration of my application. I have attached the required documents and would be honored to study at [UNIVERSITY]. Thank you for your time and consideration.

Sincerely,
[FULL NAME]
[EMAIL] | [PHONE]
[DATE]`}
          </div>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 18,
              marginBottom: 8,
            }}
          >
            كيف تخصص الرسالة الدافعة؟
          </h4>
          <ul style={{ paddingRight: 22 }}>
            <li>
              اذكر اسم الجامعة والتخصص والمرحلة بدقة، ولا تستخدم اسم جامعة
              مختلفًا في نسخة أخرى.
            </li>
            <li>
              اربط سبب اختيار الصين ببرنامج محدد، وليس بعبارات عامة مثل «الصين
              دولة متقدمة» فقط.
            </li>
            <li>
              أثبت الجدارة بأمثلة: معدل، مشروع، تدريب، بحث، تطوع أو إنجاز قابل
              للتحقق.
            </li>
            <li>اجعل خطة العودة وخدمة بلدك واقعية ومتصلة بالتخصص.</li>
            <li>
              التزم بالطول الذي تحدده الجامعة، وراجع اللغة والتهجئة وتطابق
              التواريخ.
            </li>
          </ul>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 18,
              marginBottom: 8,
            }}
          >
            قالب رسالة التوصية Recommendation Letter
          </h4>
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e8eef5",
              borderRadius: 10,
              padding: 14,
              whiteSpace: "pre-line",
              fontSize: "0.86rem",
            }}
          >
            {`To the CSC Scholarship Committee / Admissions Committee,

I am pleased to recommend [APPLICANT FULL NAME] for the [DEGREE LEVEL] program in [MAJOR] at [UNIVERSITY]. I am [RECOMMENDER NAME], [TITLE/POSITION] at [INSTITUTION], and I taught/supervised [APPLICANT] in [COURSE, PROJECT, OR RESEARCH] during [PERIOD].

I have known [APPLICANT] for [DURATION]. During this time, [he/she/they] demonstrated [two or three qualities: academic ability, analytical thinking, research skills, responsibility, communication, leadership, or persistence]. In particular, [give one concrete example with a result, project, grade, or contribution].

Compared with other students at a similar level, [APPLICANT] is [strong evidence-based comparison, if the recommender can support it]. [He/She/They] is prepared for graduate/undergraduate study in an international environment because [specific evidence of independence, language ability, teamwork, or adaptability].

I believe that [APPLICANT] will benefit from and contribute to the academic community at [UNIVERSITY]. [His/Her/Their] proposed interest in [FIELD/RESEARCH TOPIC] is relevant to [academic or development need]. I strongly recommend [APPLICANT] for the Chinese Government Scholarship and the [PROGRAM NAME] without reservation.

Please contact me at [OFFICIAL EMAIL] or [PHONE] if further information is required.

Sincerely,
[RECOMMENDER NAME]
[TITLE, DEPARTMENT, INSTITUTION]
[OFFICIAL EMAIL]
[DATE]
[OFFICIAL SIGNATURE / STAMP, if required]`}
          </div>
          <div
            style={{
              marginTop: 14,
              padding: "12px 16px",
              background: "#e6f7f3",
              borderRadius: 10,
              borderRight: "3px solid #2FA889",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#0a5540", margin: 0 }}>
              <LightbulbIcon
                size={18}
                color="#2FA889"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>تنبيه:</strong> يجب أن تصدر التوصية من بريد رسمي إن اشترطت
              الجامعة ذلك، وأن تتضمن بيانات الموصي وتوقيعه أو ختم المؤسسة عند
              الطلب. لا تكتب الرسالة باسم الأستاذ ثم تطلب منه توقيع نص لا يعرفه.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "execution-guide",
      title: " الخريطة التنفيذية: من اختيار التخصص إلى السفر",
      icon: <ListChecks size={20} />,
      badge: "عملي",
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            لا يوجد طلب واحد اسمه «طلب الصين». أنت تنفذ مسارين متوازيين:{" "}
            <strong>مسار القبول الجامعي</strong> و
            <strong>مسار التمويل أو المنحة</strong>.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 12,
              marginTop: 14,
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e8eef5",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <h4
                style={{ color: "#1B3A5C", margin: "0 0 6px", fontWeight: 800 }}
              >
                مسار القبول
              </h4>
              <p style={{ fontSize: "0.85rem", margin: 0 }}>
                اختر البرنامج، راجع شروطه، جهز الملف، قدم للجامعة، ثم تابع طلب
                المقابلة أو المستندات الإضافية.
              </p>
            </div>
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e8eef5",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <h4
                style={{ color: "#1B3A5C", margin: "0 0 6px", fontWeight: 800 }}
              >
                مسار التمويل
              </h4>
              <p style={{ fontSize: "0.85rem", margin: 0 }}>
                حدد CSC أو منحة المقاطعة أو الجامعة، ثم قدم عبر الجهة الصحيحة
                وتحقق من التغطية الفعلية.
              </p>
            </div>
          </div>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 18,
              marginBottom: 8,
            }}
          >
            قائمة التنفيذ
          </h4>
          <ol style={{ paddingRight: 22, marginTop: 0 }}>
            <li>حدد المرحلة الدراسية والتخصص ولغة الدراسة والميزانية.</li>
            <li>أنشئ قائمة من 5 إلى 8 برامج، ولا تعتمد على جامعة واحدة.</li>
            <li>
              افتح صفحة البرنامج الرسمية وتحقق من المعدل والعمر واللغة وCSCA
              والموعد النهائي.
            </li>
            <li>
              تواصل مع القبول الدولي إذا كان شرط ما غير واضح، واحتفظ بالرد
              المكتوب.
            </li>
            <li>
              جهز ترجمة وتصديق المستندات، ثم ارفعها بالصيغة والحجم المطلوبين.
            </li>
            <li>
              قدم للجامعة، ثم قدم للمنحة باستخدام Agency Number الصحيح للجهة
              المستلمة.
            </li>
            <li>
              احتفظ برقم الطلب وتابع البريد والمنصة أسبوعيًا حتى صدور النتيجة.
            </li>
            <li>
              بعد القبول، راجع خطاب المنحة، واستلم Admission Notice ومستند
              التأشيرة، ثم ابدأ X1 أو X2 حسب مدة الدراسة.
            </li>
          </ol>
          <div
            style={{
              marginTop: 14,
              padding: "12px 16px",
              background: "#fff3e0",
              borderRadius: 10,
              borderRight: "3px solid #FF9800",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a4f00", margin: 0 }}>
              <AlertCircle
                size={18}
                color="#FF9800"
                style={{ display: "inline", marginRight: 8 }}
              />
              القبول لا يساوي المنحة، والمنحة لا تلغي بالضرورة كل المصاريف. اقرأ
              قرار التمويل بندًا بندًا.
            </p>
          </div>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#1B3A5C",
              marginTop: 18,
              marginBottom: 8,
            }}
          >
            الطب والتخصصات المهنية
          </h4>
          <p>
            قبل اختيار الطب أو طب الأسنان أو الصيدلة أو التمريض، تحقق من اعتماد
            الجامعة داخل الصين ومن اعتراف جهة الترخيص في بلدك، ومن لغة التدريب
            السريري وإمكانية مزاولة المهنة بعد التخرج. اعتماد الجامعة في الصين
            لا يضمن الاعتراف المهني في كل دولة.
          </p>
        </div>
      ),
    },
    {
      id: "interactive-timeline",
      title: " جدول زمني تفاعلي للتقديم",
      icon: <Calendar size={20} />,
      badge: "تفاعلي",
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            اختر سنة بداية الدراسة، ثم ضع علامة على كل مهمة بعد إنجازها.
            المواعيد تقريبية؛ الموعد النهائي الحقيقي هو الموجود في صفحة الجامعة
            والمنحة.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              margin: "14px 0",
            }}
          >
            <label
              htmlFor="timeline-year"
              style={{ fontWeight: 800, color: "#1B3A5C" }}
            >
              سنة بداية الدراسة:
            </label>
            <select
              id="timeline-year"
              value={timelineYear}
              onChange={(e) => setTimelineYear(e.target.value)}
              style={{
                border: "1px solid #cbd5e1",
                borderRadius: 8,
                padding: "8px 12px",
                fontFamily: "inherit",
                background: "#fff",
              }}
            >
              <option value="2027">2027/2028</option>
              <option value="2028">2028/2029</option>
              <option value="2029">2029/2030</option>
            </select>
          </div>
          {(() => {
            const timeline = [
              {
                id: "t1",
                phase: `قبل 12–15 شهرًا من بدء الدراسة (${Number(timelineYear) - 1})`,
                tasks: [
                  "تحديد المرحلة والتخصص ولغة الدراسة والميزانية",
                  "إنشاء قائمة الجامعات والبرامج والتحقق من الاعتماد",
                  "تحديد المنح المناسبة ومعرفة هل التقديم عبر السفارة أم الجامعة",
                ],
              },
              {
                id: "t2",
                phase: `قبل 9–12 شهرًا`,
                tasks: [
                  "استخراج أو تجديد جواز السفر",
                  "بدء IELTS/TOEFL أو HSK إن طلبه البرنامج",
                  "التواصل مع الجامعة بشأن المعدل واللغة وCSCA والموعد النهائي",
                ],
              },
              {
                id: "t3",
                phase: `قبل 6–9 أشهر`,
                tasks: [
                  "ترجمة وتصديق الشهادات وكشوف الدرجات",
                  "كتابة Study Plan أو Personal Statement وتجهيز السيرة الذاتية",
                  "طلب خطابات التوصية وتجهيز الفحص الطبي والسجل الجنائي عند الحاجة",
                ],
              },
              {
                id: "t4",
                phase: `قبل 4–7 أشهر`,
                tasks: [
                  "التسجيل في CSCA للمواد المطلوبة فقط",
                  "التقديم للجامعة والمنحة كلٌ عبر المنصة أو الجهة الصحيحة",
                  "حفظ أرقام الطلبات ونسخ كل الملفات والإيصالات",
                ],
              },
              {
                id: "t5",
                phase: `قبل 1–4 أشهر`,
                tasks: [
                  "الرد على أي طلب مستندات أو مقابلة",
                  "متابعة نتيجة القبول والمنحة عبر البريد والمنصة",
                  "مقارنة التكاليف الفعلية والتغطية قبل قبول العرض",
                ],
              },
              {
                id: "t6",
                phase: "بعد القبول",
                tasks: [
                  "استلام Admission Notice ومستند التأشيرة وقرار المنحة",
                  "التقديم على X1 للدراسة الطويلة أو X2 للدراسة القصيرة",
                  "ترتيب السفر والسكن والتأمين وتحويل X1 إلى تصريح إقامة بعد الوصول",
                ],
              },
            ];
            const allTasks = timeline.flatMap((phase) =>
              phase.tasks.map((_, index) => `${phase.id}-${index}`),
            );
            const completed = allTasks.filter(
              (id) => completedSteps[id],
            ).length;
            const progress = Math.round((completed / allTasks.length) * 100);
            return (
              <>
                <div
                  style={{
                    background: "#f0f4f8",
                    borderRadius: 10,
                    padding: 12,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: 800,
                      color: "#1B3A5C",
                    }}
                  >
                    <span>التقدم</span>
                    <span>{progress}%</span>
                  </div>
                  <div
                    style={{
                      height: 9,
                      background: "#dde5f0",
                      borderRadius: 99,
                      overflow: "hidden",
                      marginTop: 7,
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "#2FA889",
                        transition: "width .3s",
                      }}
                    />
                  </div>
                </div>
                {timeline.map((phase) => (
                  <div
                    key={phase.id}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e8eef5",
                      borderRadius: 10,
                      padding: "12px 14px",
                      marginBottom: 10,
                    }}
                  >
                    <h4
                      style={{
                        color: "#1B3A5C",
                        margin: "0 0 6px",
                        fontWeight: 800,
                      }}
                    >
                      {phase.phase}
                    </h4>
                    {phase.tasks.map((task, index) => {
                      const stepId = `${phase.id}-${index}`;
                      return (
                        <label
                          key={stepId}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            padding: "4px 0",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={Boolean(completedSteps[stepId])}
                            onChange={() => toggleStep(stepId)}
                            style={{ marginTop: 7, accentColor: "#2FA889" }}
                          />
                          <span
                            style={{
                              textDecoration: completedSteps[stepId]
                                ? "line-through"
                                : "none",
                              opacity: completedSteps[stepId] ? 0.65 : 1,
                            }}
                          >
                            {task}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                ))}
              </>
            );
          })()}
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              background: "#e3f2fd",
              borderRadius: 10,
              borderRight: "3px solid #2196F3",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#0d47a1", margin: 0 }}>
              <LightbulbIcon
                size={18}
                color="#2196F3"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>قاعدة الجدول:</strong> أنشئ موعدًا منفصلًا لكل جامعة ولكل
              منحة؛ فلا يوجد موعد صيني موحد لكل البرامج.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "faq",
      title: "❓ الأسئلة الشائعة",
      icon: <MessageCircle size={20} />,
      badge: "مهم",
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          {[
            {
              q: "هل القبول الجامعي يعني أنني حصلت على المنحة؟",
              a: "لا. القبول يثبت أن الجامعة وافقت على دراستك، أما المنحة فهي قرار تمويلي مستقل. قد تحصل على قبول بدون تمويل، أو تمويل مشروطًا بقبول الجامعة. لذلك تابع منصتي القبول والمنحة، ولا تفترض أن خطابًا واحدًا يغطي المسارين.",
            },
            {
              q: "هل يمكنني التقديم على أكثر من جامعة ومنحة؟",
              a: "نعم غالبًا، بل يفضل توزيع الطلبات على فرص مناسبة بدل الاعتماد على جامعة واحدة. افحص قواعد كل منحة؛ بعض الجهات تضع حدًا لعدد الاختيارات أو تطلب ترتيب الجامعات، ويجب عدم إرسال معلومات متناقضة بين الطلبات.",
            },
            {
              q: "هل كل الجامعات تطلب CSCA؟",
              a: "لا. المتطلب يعتمد على المرحلة والتخصص والجامعة واللغة ونوع التقديم وسنة القبول. لا تحجز كل المواد تلقائيًا؛ تحقق من صفحة البرنامج الرسمية لمعرفة المواد المطلوبة، والدرجة الدنيا، وموعد إرسال النتيجة.",
            },
            {
              q: "هل أحتاج إلى IELTS إذا كان البرنامج باللغة الإنجليزية؟",
              a: "ليس بالضرورة بنفس الدرجة أو بنفس الاختبار. بعض الجامعات تقبل IELTS أو TOEFL أو Duolingo، وبعضها يقبل خطابًا يثبت أن الدراسة السابقة كانت بالإنجليزية، وبعضها يطلب اختبارًا داخليًا. القرار النهائي للبرنامج، وليس لقاعدة عامة مثل IELTS 6.",
            },
            {
              q: "هل أحتاج إلى HSK في البرنامج الإنجليزي؟",
              a: "غالبًا لا يكون HSK شرطًا للقبول الأكاديمي في البرنامج الإنجليزي، لكنه قد يصبح مطلوبًا في التدريب السريري أو الحياة الجامعية أو بعض المنح. أما البرنامج الصيني فعادةً يحدد مستوى HSK بوضوح، وقد يشترط سنة لغة تحضيرية.",
            },
            {
              q: "ماذا يغطي CSC؟ وهل تشمل المنحة الطيران؟",
              a: "قد تشمل الرسوم الدراسية والسكن أو بدل السكن والبدل الشهري والتأمين الطبي، لكن التغطية تختلف حسب البرنامج والجامعة والفئة. تذكرة الطيران ليست مضمونة في كل الحالات، كما قد تبقى رسوم الفحص والتأشيرة والترجمة والمصاريف الأولى على الطالب.",
            },
            {
              q: "ماذا أفعل إذا كانت شهادتي النهائية لم تصدر بعد؟",
              a: "تحقق من سياسة الجامعة. بعض البرامج تقبل إفادة تخرج أو شهادة متوقعة مع التعهد بتقديم الأصل لاحقًا، بينما تشترط برامج أخرى الشهادة النهائية قبل الموعد النهائي. لا ترفع مستندًا غير صحيح؛ اشرح وضعك في رسالة رسمية للقبول.",
            },
            {
              q: "هل يمكنني الدراسة على النفقة الخاصة ثم الحصول على منحة؟",
              a: "قد تقدم بعض الجامعات خصمًا أو منحة داخلية بعد القبول أو بعد سنة دراسية، لكن ذلك ليس حقًا مضمونًا. اسأل الجامعة كتابةً عن شروط التحويل، وميزانيتك يجب أن تغطي الدراسة حتى لو لم تحصل على تمويل لاحقًا.",
            },
            {
              q: "هل شهادة الطب من الصين معترف بها في بلدي؟",
              a: "لا تفترض ذلك. افحص قائمة الجامعات المعترف بها لدى وزارة التعليم وهيئة الترخيص المهني في بلدك، وتحقق من لغة الدراسة والتدريب السريري وشروط امتحان مزاولة المهنة بعد التخرج. الاعتراف الأكاديمي لا يساوي تلقائيًا ترخيصًا مهنيًا.",
            },
            {
              q: "ماذا أفعل بعد وصول خطاب القبول؟",
              a: "راجع اسمك والتخصص والمدة والرسوم، وتأكد من وصول Admission Notice ومستند التأشيرة وقرار المنحة. بعد ذلك جهز طلب X1 للدراسة الطويلة أو X2 للقصيرة، واحمل النسخ الأصلية، وسجل في الجامعة، واستكمل تصريح الإقامة إذا دخلت بتأشيرة X1.",
            },
            {
              q: "كيف أعرف أن المعلومة صحيحة وحديثة؟",
              a: "اعتمد على صفحة البرنامج الرسمية، وموقع الجامعة، وCampus China أو موقع CSCA الرسمي، وموقع السفارة أو الجهة الحكومية. قارن تاريخ التحديث، واحفظ نسخة PDF أو لقطة من الشروط، ولا تعتمد على منشور أو رقم Agency Number قديم.",
            },
          ].map((faq, index) => (
            <details
              key={faq.q}
              style={{
                border: "1px solid #e8eef5",
                borderRadius: 10,
                marginBottom: 9,
                background: "#fff",
                padding: "0 14px",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 800,
                  color: "#1B3A5C",
                  padding: "12px 0",
                }}
              >
                {index + 1}. {faq.q}
              </summary>
              <p style={{ margin: "0 0 13px", fontSize: "0.88rem" }}>{faq.a}</p>
            </details>
          ))}
          <div
            style={{
              marginTop: 14,
              padding: "12px 16px",
              background: "#fce8e8",
              borderRadius: 10,
              borderRight: "3px solid #DE2910",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "#7a2020", margin: 0 }}>
              <AlertCircle
                size={18}
                color="#DE2910"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>تنبيه:</strong> هذه إجابات إرشادية؛ الشروط النهائية يحددها
              البرنامج والجامعة والمنحة في سنة التقديم.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "final-advice",
      title: "🇨🇳 كلمة أخيرة",
      icon: <MessageCircle size={20} />,
      content: (
        <div style={{ fontSize: "0.95rem", color: "#4a6580", lineHeight: 2 }}>
          <p>
            إذا كنت تفكر في الدراسة في الصين،{" "}
            <strong>لا تنتظر حتى يبدأ التقديم لتبدأ التجهيز.</strong>
          </p>
          <div
            style={{
              marginTop: 16,
              padding: "16px 20px",
              background: "#fce8e8",
              borderRadius: 12,
              borderRight: "3px solid #DE2910",
            }}
          >
            <p style={{ fontSize: "0.95rem", color: "#7a2020" }}>
              <TargetIcon
                size={18}
                color="#DE2910"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>خطوتك الآن:</strong>
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "0.9rem",
                color: "#7a2020",
              }}
            >
              {[
                "حدد تخصصك",
                "حدد الجامعات",
                "راجع الشروط",
                "جهز المستندات",
                "استعد للغة وCSCA",
                "قدم على أكثر من فرصة مناسبة",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 0",
                  }}
                >
                  <CheckCircle size={16} color="#DE2910" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              marginTop: 16,
              padding: "14px 18px",
              background: "#e6f7f3",
              borderRadius: 12,
              borderRight: "3px solid #2FA889",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "#0a5540" }}>
              <LightbulbIcon
                size={18}
                color="#2FA889"
                style={{ display: "inline", marginRight: 8 }}
              />
              <strong>تذكر:</strong> الصين ليست فرصة واحدة. هناك منح حكومية، منح
              جامعات، منح مقاطعات، وقبولات على النفقة الخاصة. وكلما بدأت مبكراً،
              كان أمامك وقت أكبر لاختيار الخيار الأنسب لملفك.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "Cairo, sans-serif",
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #DE2910 0%, #DE2910dd 50%, #122845 100%)",
          padding: "clamp(40px, 5vw, 60px) 5%",
        }}
        className="mt-16"
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link
            href="/guides"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "rgba(255,255,255,.6)",
              textDecoration: "none",
              fontSize: "0.9rem",
              marginBottom: 16,
            }}
          >
            <ChevronLeft size={16} />
            جميع الأدلة
          </Link>
          <div>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🇨🇳</div>
            <h1
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 4,
              }}
            >
              دليل الدراسة في الصين
            </h1>
            <p
              style={{
                fontSize: "clamp(14px, 1vw, 16px)",
                color: "rgba(255,255,255,.7)",
              }}
            >
              كل ما تحتاج معرفته عن الدراسة في الصين، المنح، القبول الجامعي
              وامتحان CSCA
            </p>
          </div>
        </div>
      </div>

      {/* ACCORDION */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "clamp(30px, 4vw, 50px) 5%",
        }}
      >
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
            />
          </div>
        ))}

        {/* CTA */}
        <div
          style={{
            marginTop: 40,
            background: "linear-gradient(135deg, #122845, #1B3A5C)",
            borderRadius: 18,
            padding: "clamp(24px, 3vw, 32px)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(18px, 1.5vw, 22px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            📚 هل تحتاج مساعدة إضافية حول الدراسة في الصين؟
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,.7)",
              marginBottom: 16,
            }}
          >
            فريقنا مستعد للإجابة على جميع استفساراتك حول الدراسة في الصين والمنح
            وامتحان CSCA
          </p>
          <a
            href="https://wa.me/201500276855"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#25D366",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: 50,
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "all .3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
