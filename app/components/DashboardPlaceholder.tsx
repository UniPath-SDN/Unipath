// components/DashboardPlaceholder.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authFetch, logout } from "@/lib/auth";

type Me = {
  name: string;
  role_display: string;
  dashboard_url: string;
};

export default function DashboardPlaceholder({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  const router = useRouter();
  const [me, setMe] = useState<Me | null>(null);

 /* useEffect(() => {
    authFetch("/api/auth/me/")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setMe)
      .catch(() => router.push("/admin-login"));
  }, [router]);

  async function handleLogout() {
    await logout();
    router.push("/admin-login");
  }
*/
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        background: "#0a1e3a",
        color: "white",
        fontFamily: "Cairo, sans-serif",
        direction: "rtl",
        textAlign: "center",
        padding: 24,
      }}
    >
      <h1 style={{ color: "#00b894" }}>{title}</h1>
      <p style={{ color: "#94a3b8", maxWidth: 420, lineHeight: 1.8 }}>{note}</p>
      {me && (
        <p style={{ fontSize: ".8rem", color: "#64748b" }}>
          مسجل دخول كـ: {me.name} — {me.role_display}
        </p>
      )}
      <button
       // onClick={handleLogout}
        style={{
          marginTop: 16,
          background: "none",
          border: "1px solid #334155",
          color: "#00b894",
          padding: "8px 20px",
          borderRadius: 10,
          cursor: "pointer",
          fontFamily: "Cairo, sans-serif",
        }}
      >
        تسجيل الخروج
      </button>
    </div>
  );
}
