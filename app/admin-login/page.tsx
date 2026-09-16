// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  Shield,
  FileText,
  DollarSign,
  Clock,
  LogIn,
  Loader2,
} from "lucide-react";
import styles from "./login.module.css"; // ← استيراد الـ CSS Module

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!username.trim() || password.length < 6) {
      setError("تأكد من اسم المستخدم وكلمة المرور (6 أحرف على الأقل).");
      return;
    }

    setLoading(true);
    try {
      const data = await login(username.trim(), password);
      router.push(data.dashboard_url);
    } catch (err: any) {
      setError(err.message || "حدث خطأ، حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles["wrap-outer"]}>
      <div className={styles.wrap}>
        {/* LEFT PANEL */}
        <div className={styles.left}>
          <div className={styles.brand}>
            <div className={styles["brand-ic"]}>
              <GraduationCap size={28} strokeWidth={2} />
            </div>
            <div>
              <div className={styles["brand-name"]}>
                Uni<span>Path</span>
              </div>
              <div className={styles["brand-sub"]}>
                نظام إدارة المنح الدراسية المتكامل
              </div>
            </div>
          </div>

          <div className={styles["panel-body"]}>
            <h2>
              منصة احترافية<br />
              لإدارة المنح
            </h2>
            <p>
              نظام متكامل يربط الطلاب بأفضل فرص المنح، مع إدارة كاملة للعمليات
              والمدفوعات والتقارير.
            </p>
            <div className={styles.feat}>
              <div className={styles["feat-item"]}>
                <div className={styles["feat-ic"]}>
                  <Shield size={16} strokeWidth={2} />
                </div>
                نظام صلاحيات متقدم
              </div>
              <div className={styles["feat-item"]}>
                <div className={styles["feat-ic"]}>
                  <FileText size={16} strokeWidth={2} />
                </div>
                سجل تدقيق شامل
              </div>
              <div className={styles["feat-item"]}>
                <div className={styles["feat-ic"]}>
                  <DollarSign size={16} strokeWidth={2} />
                </div>
                دعم عملات متعددة
              </div>
              <div className={styles["feat-item"]}>
                <div className={styles["feat-ic"]}>
                  <Clock size={16} strokeWidth={2} />
                </div>
                جلسات آمنة ومحددة زمنياً
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className={styles.right}>
          <div className={styles["form-title"]}>تسجيل الدخول</div>
          <div className={styles["form-sub"]}>
            أدخل بياناتك للوصول إلى لوحة التحكم
          </div>

          {error && <div className={styles["top-err"]}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>اسم المستخدم</label>
              <div className={styles["inp-wrap"]}>
                <input
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="أدخل اسم المستخدم"
                />
                <span className={styles["inp-ic"]}>
                  <Mail size={18} strokeWidth={1.5} />
                </span>
              </div>
            </div>

            <div className={styles.field}>
              <label>كلمة المرور</label>
              <div className={`${styles["inp-wrap"]} ${styles["inp-wrap-has-toggle"]}`}>
                <input
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                />
                <span className={styles["inp-ic"]}>
                  <Lock size={18} strokeWidth={1.5} />
                </span>
                <button
                  type="button"
                  className={styles["eye-btn"]}
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`${styles["login-btn"]} ${loading ? styles.loading : ""}`}
              disabled={loading}
            >
              <span>{loading ? "جاري التحقق..." : "دخول"}</span>
              {loading ? (
                <Loader2 size={18} className={styles.spin} />
              ) : (
                <LogIn size={18} />
              )}
            </button>
          </form>

          <div className={styles["sec-note"]}>
            <span className={styles["sec-note-icon"]}>🔒</span>
            <span>
              جميع بياناتك مشفرة وآمنة. تنتهي الجلسة تلقائياً بعد 30 دقيقة من
              عدم النشاط.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}