// app/hub/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authFetch, logout } from "@/lib/auth";

export default function HubPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    authFetch("/api/auth/me/")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setName(data.name))
      .catch(() => router.push("/admin-login"));
  }, [router]);

  async function handleLogout() {
    await logout();
    router.push("/admin-login");
  }

  const cards = [
    { href: "/crm/cs-manager", title: "CRM Dashboard", desc: "إدارة الطلاب · الفريق · الفواتير" },
    { href: "/cms", title: "Scholarship CMS", desc: "إدارة المنح · SEO · التصنيفات" },
    { href: "/cashbox", title: "Smart Cashbox", desc: "الصناديق · الإيرادات" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a1e3a",
        color: "white",
        fontFamily: "Cairo, sans-serif",
        direction: "rtl",
        padding: 24,
      }}
    >
      <h1 style={{ marginBottom: 4 }}>مرحباً، {name || "..."}</h1>
      <p style={{ color: "#94a3b8", marginBottom: 32 }}>اختر النظام الذي تريد الدخول إليه</p>

      <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            style={{
              display: "block",
              background: "rgba(0,184,148,0.12)",
              border: "1px solid rgba(0,184,148,0.35)",
              borderRadius: 14,
              padding: 18,
              color: "white",
              textDecoration: "none",
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: 4 }}>{c.title}</div>
            <div style={{ fontSize: ".8rem", color: "#94a3b8" }}>{c.desc}</div>
          </Link>
        ))}
      </div>

      <button
        onClick={handleLogout}
        style={{
          marginTop: 28,
          background: "none",
          border: "none",
          color: "#64748b",
          cursor: "pointer",
          fontFamily: "Cairo, sans-serif",
        }}
      >
        تسجيل الخروج
      </button>
    </div>
  );
}
