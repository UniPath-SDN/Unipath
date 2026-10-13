// components/Services.tsx
// قسم الخدمات بكروت خلفيتها صور. لو الصورة مش موجودة، الكارت بيعرض تدرّج
// (gradient) بنفس الألوان، فمفيش كارت بيطلع فاضي أو مكسور.

import type { CSSProperties, ReactNode } from "react";
import {
  FileText,
  Target,
  Globe,
  MessageCircle,
  Plane,
  BarChart3,
} from "lucide-react";
import "./services.css";

type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
  image?: string; // مسار داخل public/services/ — اختياري
};

const ICON = { size: 26, color: "#55d6b2", strokeWidth: 2 } as const;

const SERVICES: Service[] = [
  {
    icon: <FileText {...ICON} />,
    title: "إعداد الوثائق",
    desc: "مساعدة احترافية في كتابة خطاب النية والسيرة الذاتية وخطابات التوصية وجميع وثائق التقديم.",
    image: "/services/documents.jpg",
  },
  {
    icon: <Target {...ICON} />,
    title: "مطابقة المنح",
    desc: "نجد أفضل المنح المناسبة لملفك الأكاديمي وأهدافك باستخدام تقنيات ذكية.",
    image: "/services/matching.jpg",
  },
  {
    icon: <Globe {...ICON} />,
    title: "تقديم الطلبات",
    desc: "دعم متكامل للتقديم المباشر على بوابات المنح مع متابعة الحالة باستمرار.",
    image: "/services/applying.jpg",
  },
  {
    icon: <MessageCircle {...ICON} />,
    title: "تدريب المقابلات",
    desc: "جلسات تدريبية شخصية ومحاكاة للمقابلات لمساعدتك على الأداء بثقة.",
    image: "/services/interview.jpg",
  },
  {
    icon: <Plane {...ICON} />,
    title: "دعم ما قبل السفر",
    desc: "إرشادات التأشيرة، نصائح السكن، والتوجيه الثقافي للحياة في الخارج.",
    image: "/services/travel.jpg",
  },
  {
    icon: <BarChart3 {...ICON} />,
    title: "تتبع التقدم",
    desc: "تحديثات فورية على حالة طلبك عبر نظامنا وإشعارات واتساب المباشرة.",
    image: "/services/tracking.jpg",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <span className="section-eyebrow">ما نقدمه</span>
        <h2>دعم متكامل للمنح الدراسية</h2>
        <p>
          من إعداد الوثائق حتى التقديم النهائي — نتولى كل تفاصيل رحلتك الدراسية.
        </p>
      </div>

      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="svc-card"
            style={
              s.image
                ? ({ "--svc-bg": `url(${s.image})` } as CSSProperties)
                : undefined
            }
          >
            <span className="svc-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="svc-body">
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
