import Link from 'next/link'
import './footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const WA     = 'https://wa.me/201500276855'
const WA_MSG = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات UniPath')

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ fontSize:'1.6rem', fontWeight:900, marginBottom:16 }}>
            <span style={{ color:'white' }}>Uni</span>
            <span style={{ color:'#3cc4a0' }}>P</span>
            <span style={{ color:'white' }}>ath</span>
          </div>
          <p>نمكّن الطلاب في جميع أنحاء العالم من الوصول إلى فرص المنح الدراسية المميزة بتوجيه متخصص ودعم متكامل.</p>
          <div className="footer-social">
            <a 
              href="https://www.facebook.com/UniPath" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="فيسبوك"
            >
              <FaFacebook size={24} color="white" />
            </a>
            <a 
              href="https://www.instagram.com/unipa1h" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="إنستغرام"
            >
              <FaInstagram size={24} color="white" />
            </a>
            <a 
              href="https://www.linkedin.com/company/115796527/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="لينكد إن"
            >
              <FaLinkedin size={24} color="white" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>المنح</h4>
          <ul>
            <li><Link href="/scholarships">ألمانيا</Link></li>
            <li><Link href="/scholarships">المملكة المتحدة</Link></li>
            <li><Link href="/scholarships">تركيا</Link></li>
            <li><Link href="/scholarships">الصين</Link></li>
            <li><Link href="/scholarships">أستراليا</Link></li>
            <li><Link href="/scholarships">عرض الكل</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>الخدمات</h4>
          <ul>
            <li><Link href="/services">إعداد الوثائق</Link></li>
            <li><Link href="/services">مساعدة التقديم</Link></li>
            <li><Link href="/services">تدريب المقابلات</Link></li>
            <li><Link href="/services">دعم التأشيرة</Link></li>
            <li><Link href="/services">الباقات والأسعار</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>الشركة</h4>
          <ul>
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/success-stories">قصص النجاح</Link></li>
            <li><Link href="/faq">الأسئلة الشائعة</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
            <li>
              <a href={`${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer">
                واتساب
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 UniPath. جميع الحقوق محفوظة.</span>
        <span>
          <Link href="/privacy">سياسة الخصوصية</Link>
          {' · '}
          <Link href="/terms">شروط الخدمة</Link>
        </span>
      </div>
    </footer>
  )
}