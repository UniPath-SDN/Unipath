# تعديلات ServicesClient.tsx (ست تعديلات، كلها بحث واستبدال)

الترتيب النهائي للصفحة بعد التعديل:
Hero ← **المسار الموجّه (جديد)** ← كروت الخدمات ← الباقات ← كيف نعمل ← الدفع والسياسات ← الأسئلة الشائعة ← CTA

---

## 1) الاستيراد
بعد سطر `import Footer from "../components/Footer";` أضف:

```tsx
import ServiceWizard from "./ServiceWizard";
import { SERVICES, PACKAGES } from "./services-data";
```

## 2) احذف المصفوفتين القديمتين
احذف كامل `const SERVICES = [ ... ];` وكامل `const PACKAGES = [ ... ];`
(من `const SERVICES = [` لحد نهاية `PACKAGES` قبل `const PAYMENT_METHODS`).
خليك على `PAYMENT_METHODS` و`WA` و`WA_MSG` كما هي.

## 3) ضع المسار الموجّه بعد الـ Hero
بعد `</section>` الخاص بالـ HERO، وقبل التعليق `{/* INDIVIDUAL SERVICES */}`:

```tsx
<ServiceWizard wa={WA} />
```

## 4) صياغة قسم الخدمات (إزالة عبارة «أوفر»)
```tsx
// قديم
اختر الخدمة اللي تحتاجها أو خذ باقة كاملة بسعر أوفر
// جديد
اختر الخدمة اللي تحتاجها أو ابدأ بباقة جاهزة
```

## 5) قسم الباقات: عبارات دقيقة + شارة توفير حقيقية
```tsx
// قديم
باقات جاهزة بسعر أوفر
// جديد
باقات جاهزة بسعر واضح

// قديم
وفّر أكثر لما تختار باقة متكاملة — كل ما زادت الخدمات كان السعر أفضل
// جديد
اختر باقة جاهزة وابدأ فوراً — الأسعار مكتوبة بوضوح وبدون مفاجآت
```

وفي كرت الباقة، بعد السطر `<div className="pkg-price-usd">{pkg.usd}</div>` أضف:

```tsx
{pkg.saving_sdg > 0 && (
  <div className="pkg-save">
    وفّر {pkg.saving_sdg.toLocaleString("en-US")} SDG مقارنة بشراء الخدمات منفصلة
  </div>
)}
```

وفي وسم `<style>` الكبير أضف هذه القاعدة (جنب `.pkg-price-usd`):

```css
.pkg-save{display:block;margin:-8px 0 16px;font-size:.78rem;font-weight:800;color:var(--teal-light)}
```

> الشارة بتظهر بس حيث التوفير حقيقي (حالياً 3 باقات بالجنيه فقط). لو قررت خصماً على باقات
> أخرى، عدّل سعرها في `services-data.ts` وتظهر الشارة تلقائياً.

## 6) صحّح الـ canonical (فيه أربع w)
```tsx
// قديم
<link rel="canonical" href="https://wwww.unipathsdn.com/services" />
// جديد
<link rel="canonical" href="https://www.unipathsdn.com/services" />
```

---

## ملاحظات
- كروت الخدمات والباقات و«كيف نعمل» والدفع والسياسات والأسئلة تبقى كما هي (محتوى مهم للـ SEO).
- الأسعار كلها في مكان واحد: `services-data.ts`. غيّر هناك وكل شيء يتحدث (الكروت، الباقات، المسار الموجّه).
- راجع سعر «الخطة الدراسية» (65,000 SDG مقابل $10) قبل النشر، نسبته للدولار أعلى بكثير من باقي الخدمات.
- المسار الموجّه ما يخزّن أي بيانات ولا يرسل شيئاً: الزائر بيضغط زر واتساب ويرسل بنفسه.
