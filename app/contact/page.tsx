// app/contact/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,

} from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormState('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setFormState('idle'), 5000)
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar />

      {/* ✅ HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #122845 0%, #1B3A5C 50%, #1a5c42 100%)',
        padding: 'clamp(50px, 6vw, 80px) 5%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }} className='mt-16'>
        <div style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,168,137,.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(60,196,160,.08) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(47,168,137,.15)',
            border: '1px solid rgba(47,168,137,.4)',
            color: '#3cc4a0',
            padding: '6px 20px',
            borderRadius: 50,
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: 20,
          }}>
            تواصل معنا
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.3,
            marginBottom: 16,
          }}>
            نحن هنا <span style={{ color: '#3cc4a0' }}>لنساعدك</span>
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.1vw, 17px)',
            color: 'rgba(255,255,255,.7)',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 2,
          }}>
            لديك سؤال أو استفسار؟ فريق UniPath جاهز للإجابة على كل ما يدور في بالك.
            تواصل معنا الآن وسنرد عليك في أقرب وقت.
          </p>
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 5vw, 60px) 5%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(30px, 4vw, 50px)',
        }} className="contact-grid">

          {/* ✅ INFO SIDE */}
          <div>
            <h2 style={{
              fontSize: 'clamp(22px, 2vw, 28px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: 12,
            }}>
              معلومات التواصل
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1vw, 15px)',
              color: '#8fa3b8',
              lineHeight: 1.9,
              marginBottom: 32,
            }}>
              تواصل معنا عبر أي من القنوات التالية، وسنرد عليك خلال 24 ساعة.
            </p>

            {/* ✅ Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }} className="contact-cards">
              {[
                { icon: <MessageCircle size={22} color="#25D366" />, label: 'واتساب', value: '+249 123 456 789', link: 'https://wa.me/249123456789', color: '#25D366' },
                { icon: <Mail size={22} color="#2FA889" />, label: 'البريد الإلكتروني', value: 'unipathsdn@gmail.com', link: 'mailto:unipathsdn@gmail.com', color: '#2FA889' },
                { icon: <Phone size={22} color="#1B3A5C" />, label: 'الهاتف', value: '+249 123 456 789', link: 'tel:+249123456789', color: '#1B3A5C' },
                { icon: <MapPin size={22} color="#FF9800" />, label: 'العنوان', value: 'الخرطوم، السودان', link: '#', color: '#FF9800' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target={item.label === 'العنوان' ? undefined : '_blank'}
                  rel={item.label === 'العنوان' ? undefined : 'noopener noreferrer'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    background: '#fff',
                    borderRadius: 14,
                    padding: 'clamp(12px, 1.5vw, 16px) clamp(14px, 2vw, 20px)',
                    border: '1px solid #e8eef5',
                    textDecoration: 'none',
                    transition: 'all .3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color
                    e.currentTarget.style.boxShadow = `0 4px 16px ${item.color}20`
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e8eef5'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${item.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#8fa3b8', fontWeight: 600 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1B3A5C' }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* ✅ SOCIAL */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#1B3A5C',
                marginBottom: 12,
              }}>
                تابعنا على وسائل التواصل
              </h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="contact-social">
                {[
                  { icon: <FaFacebook size={22} />, link: 'https://www.facebook.com/UniPath', color: '#1877F2' },
                  { icon: <FaInstagram size={22} />, link: 'https://www.instagram.com/unipa1h', color: '#E4405F' },
                  { icon: <FaLinkedin size={22} />, link: 'https://www.linkedin.com/company/115796527/', color: '#0A66C2' },
                ].map((social) => (
                  <a
                    key={social.link}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: '#fff',
                      border: '1px solid #e8eef5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: social.color,
                      transition: 'all .3s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `0 8px 24px ${social.color}40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff'
                      e.currentTarget.style.color = social.color
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ✅ WORKING HOURS */}
            <div style={{
              marginTop: 32,
              background: '#e6f7f3',
              borderRadius: 14,
              padding: 'clamp(14px, 1.5vw, 16px) clamp(16px, 2vw, 20px)',
              border: '1px solid rgba(47,168,137,.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Clock size={20} color="#2FA889" />
                <span style={{ fontWeight: 800, color: '#0a5540' }}>
                  أوقات العمل
                </span>
              </div>
              <div style={{ fontSize: 'clamp(0.8rem, 1vw, 0.85rem)', color: '#1a6b50', marginTop: 6, lineHeight: 1.9 }}>
                <div>🟢 السبت - الخميس: 9:00 صباحاً - 9:00 مساءً</div>
                <div>🔴 الجمعة: إجازة</div>
              </div>
            </div>
          </div>

          {/* ✅ FORM SIDE */}
          <div>
            <div style={{
              background: '#fff',
              borderRadius: 18,
              padding: 'clamp(20px, 3vw, 36px)',
              border: '1px solid #e8eef5',
            }}>
              <h3 style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                fontWeight: 900,
                color: '#1B3A5C',
                marginBottom: 6,
              }}>
                أرسل لنا رسالة
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: '#8fa3b8',
                marginBottom: 24,
              }}>
                سنرد عليك خلال 24 ساعة
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="contact-form-grid">
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#1B3A5C',
                      marginBottom: 4,
                    }}>
                      الاسم الكامل <span style={{ color: '#e05555' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="أحمد محمد علي"
                      required
                      style={{
                        width: '100%',
                        padding: 'clamp(8px, 1vw, 10px) clamp(10px, 1.2vw, 14px)',
                        borderRadius: 10,
                        border: '1.5px solid #dde5f0',
                        fontSize: 'clamp(0.85rem, 1vw, 0.9rem)',
                        outline: 'none',
                        fontFamily: 'Cairo, sans-serif',
                        transition: 'border-color .2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2FA889'}
                      onBlur={(e) => e.target.style.borderColor = '#dde5f0'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#1B3A5C',
                      marginBottom: 4,
                    }}>
                      البريد الإلكتروني <span style={{ color: '#e05555' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ahmed@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: 'clamp(8px, 1vw, 10px) clamp(10px, 1.2vw, 14px)',
                        borderRadius: 10,
                        border: '1.5px solid #dde5f0',
                        fontSize: 'clamp(0.85rem, 1vw, 0.9rem)',
                        outline: 'none',
                        fontFamily: 'Cairo, sans-serif',
                        transition: 'border-color .2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2FA889'}
                      onBlur={(e) => e.target.style.borderColor = '#dde5f0'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="contact-form-grid">
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#1B3A5C',
                      marginBottom: 4,
                    }}>
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+249 123 456 789"
                      style={{
                        width: '100%',
                        padding: 'clamp(8px, 1vw, 10px) clamp(10px, 1.2vw, 14px)',
                        borderRadius: 10,
                        border: '1.5px solid #dde5f0',
                        fontSize: 'clamp(0.85rem, 1vw, 0.9rem)',
                        outline: 'none',
                        fontFamily: 'Cairo, sans-serif',
                        transition: 'border-color .2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2FA889'}
                      onBlur={(e) => e.target.style.borderColor = '#dde5f0'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#1B3A5C',
                      marginBottom: 4,
                    }}>
                      الموضوع
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: 'clamp(8px, 1vw, 10px) clamp(10px, 1.2vw, 14px)',
                        borderRadius: 10,
                        border: '1.5px solid #dde5f0',
                        fontSize: 'clamp(0.85rem, 1vw, 0.9rem)',
                        outline: 'none',
                        fontFamily: 'Cairo, sans-serif',
                        background: '#fff',
                        transition: 'border-color .2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2FA889'}
                      onBlur={(e) => e.target.style.borderColor = '#dde5f0'}
                    >
                      <option value="">اختر موضوع...</option>
                      <option value="استفسار عن منحة">استفسار عن منحة</option>
                      <option value="القبولات الخاصة">القبولات الخاصة</option>
                      <option value="خدمات التقديم">خدمات التقديم</option>
                      <option value="استشارة أكاديمية">استشارة أكاديمية</option>
                      <option value="شكوى أو اقتراح">شكوى أو اقتراح</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#1B3A5C',
                    marginBottom: 4,
                  }}>
                    الرسالة <span style={{ color: '#e05555' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={4}
                    required
                    style={{
                      width: '100%',
                      padding: 'clamp(8px, 1vw, 10px) clamp(10px, 1.2vw, 14px)',
                      borderRadius: 10,
                      border: '1.5px solid #dde5f0',
                      fontSize: 'clamp(0.85rem, 1vw, 0.9rem)',
                      outline: 'none',
                      fontFamily: 'Cairo, sans-serif',
                      resize: 'vertical',
                      transition: 'border-color .2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2FA889'}
                    onBlur={(e) => e.target.style.borderColor = '#dde5f0'}
                  />
                </div>

                {formState === 'success' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#e8f5e9',
                    color: '#1b5e20',
                    padding: '12px 16px',
                    borderRadius: 10,
                    marginBottom: 16,
                  }}>
                    <CheckCircle size={20} color="#4CAF50" />
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                      تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    </span>
                  </div>
                )}

                {formState === 'error' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#fce8e8',
                    color: '#7a2020',
                    padding: '12px 16px',
                    borderRadius: 10,
                    marginBottom: 16,
                  }}>
                    <AlertCircle size={20} color="#e05555" />
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                      حدث خطأ، يرجى المحاولة مرة أخرى.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 1.5vw, 14px)',
                    background: formState === 'loading' ? '#8fa3b8' : 'linear-gradient(135deg, #2FA889, #3cc4a0)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 12,
                    fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                    fontWeight: 800,
                    cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
                    fontFamily: 'Cairo, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    transition: 'all .3s',
                  }}
                  onMouseEnter={(e) => {
                    if (formState !== 'loading') {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(47,168,137,.3)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (formState !== 'loading') {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  {formState === 'loading' ? (
                    <>⏳ جاري الإرسال...</>
                  ) : (
                    <>
                      <Send size={18} />
                      إرسال الرسالة
                    </>
                  )}
                </button>

                <p style={{
                  fontSize: '0.75rem',
                  color: '#8fa3b8',
                  textAlign: 'center',
                  marginTop: 12,
                }}>
                  🔒 بياناتك آمنة ولن تُشارك مع أي طرف ثالث
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CTA BANNER */}
      <div style={{
        background: 'linear-gradient(135deg, #122845 0%, #1B3A5C 50%, #1a5c42 100%)',
        padding: 'clamp(32px, 4vw, 48px) 5%',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h3 style={{
            fontSize: 'clamp(20px, 2vw, 26px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: 8,
          }}>
            🎯 جاهز تبدأ رحلتك الأكاديمية؟
          </h3>
          <p style={{
            fontSize: 'clamp(14px, 1vw, 16px)',
            color: 'rgba(255,255,255,.65)',
            lineHeight: 1.8,
            marginBottom: 20,
          }}>
            احصل على استشارتك المجانية الآن
          </p>
          <a
            href="https://wa.me/249123456789?text=السلام%20عليكم،%20أريد%20استشارة%20مجانية"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#25D366',
              color: '#fff',
              padding: 'clamp(12px, 1.5vw, 14px) clamp(24px, 3vw, 40px)',
              borderRadius: 50,
              fontWeight: 800,
              fontSize: 'clamp(0.9rem, 1vw, 1rem)',
              textDecoration: 'none',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <MessageCircle size={20} />
            استشارة مجانية
          </a>
        </div>
      </div>

      <Footer />

      {/* ✅ RESPONSIVE STYLES - تعمل 100% */}
      <style>{`
        /* ✅ جميع الأجهزة */
        @media (max-width: 1024px) {
          .contact-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
          }
          .contact-cards {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
          }
          .contact-social {
            display: flex !important;
            gap: 10px !important;
            flex-wrap: wrap !important;
          }
          .contact-form-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
        }

        @media (max-width: 768px) {
          .contact-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          .contact-form-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
          }
          .contact-cards {
            gap: 10px !important;
          }
          .contact-social {
            justify-content: flex-start !important;
          }
          .contact-social a {
            width: 44px !important;
            height: 44px !important;
          }
          .contact-social a svg {
            width: 18px !important;
            height: 18px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-grid {
            gap: 24px !important;
          }
          .contact-social a {
            width: 40px !important;
            height: 40px !important;
          }
          .contact-social a svg {
            width: 16px !important;
            height: 16px !important;
          }
          .contact-cards a {
            padding: 10px 14px !important;
          }
          .contact-cards a svg {
            width: 18px !important;
            height: 18px !important;
          }
          .contact-cards a div:first-child {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </div>
  )
}