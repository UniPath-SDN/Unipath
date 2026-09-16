// lib/auth.ts
//
// كل الدوال هنا بتستخدم credentials:'include' عشان الكوكيز (access/refresh)
// تتبعت وتتقبل بين localhost:3000 (Next.js) و localhost:8000 (Django).

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export type LoginResult = {
  role: string;
  role_display: string;
  dashboard_url: string;
  name: string;
  is_manager: boolean;
};

export async function login(username: string, password: string): Promise<LoginResult> {
  const res = await fetch(`${API_URL}/api/auth/login/`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "بيانات الدخول غلط");
  }
  return data as LoginResult;
}

export async function logout(): Promise<void> {
  await fetch(`${API_URL}/api/auth/logout/`, {
    method: "POST",
    credentials: "include",
  });
}

export async function refreshAccessToken(): Promise<boolean> {
  const res = await fetch(`${API_URL}/api/auth/refresh/`, {
    method: "POST",
    credentials: "include",
  });
  return res.ok;
}

/**
 * Wrapper لأي API call محمي: لو رجع 401 (access token خلص) بيحاول يجدده
 * مرة واحدة بالـ refresh token، وبعدين يعيد الطلب الأصلي.
 */
export async function authFetch(path: string, options: RequestInit = {}) {
  const doFetch = () =>
    fetch(`${API_URL}${path}`, { ...options, credentials: "include" });

  let res = await doFetch();
  if (res.status === 401) {
    const refreshed = await refreshAccessToken();
    if (refreshed) res = await doFetch();
  }
  return res;
}
