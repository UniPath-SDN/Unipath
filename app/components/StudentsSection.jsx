import Image from "next/image";
import { MotionCard, MotionGrid } from "./MotionGrid";

const students = [
  {
    id: "student-1",
    name: "أحمد",
    country: "ألمانيا",
    university: "جامعة ميونخ",
    scholarship: "منحة DAAD",
    image: "/images/students/ahmed-germany.webp",
    alt: "أحمد في الحرم الجامعي بألمانيا",
  },
  {
    id: "student-2",
    name: "سارة",
    country: "المملكة المتحدة",
    university: "جامعة مانشستر",
    scholarship: "منحة Chevening",
    image: "/images/students/sara-uk.webp",
    alt: "سارة أمام جامعتها في المملكة المتحدة",
  },
];

export default function StudentsSection() {
  return (
    <section
      className="content-section students-section"
      id="students"
      dir="rtl"
    >
      <header className="section-header">
        <span className="section-eyebrow">طلابنا حول العالم</span>
        <h2>رحلات دراسية بدأت بخطوة</h2>
        <p>صور وقصص طلاب شاركونا تجاربهم، بموافقتهم.</p>
      </header>

      <MotionGrid className="students-grid">
        {students.map((student) => (
          <MotionCard className="student-card" key={student.id}>
            <div className="student-image-wrap">
              <Image
                src={student.image}
                alt={student.alt}
                width={900}
                height={700}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="student-image"
              />
            </div>

            <div className="student-card-content">
              <span className="student-country">{student.country}</span>
              <h3>{student.name}</h3>
              <p>{student.university}</p>
              <span className="student-scholarship">
                {student.scholarship}
              </span>
            </div>
          </MotionCard>
        ))}
      </MotionGrid>
    </section>
  );
}
