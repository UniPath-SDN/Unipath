// app/services/services-data.ts
// مصدر واحد للأسعار والباقات — عدّل الأرقام من هنا فقط، وكل حاجة (الكروت، الباقات،
// المسار الموجّه) بتتحدث لوحدها.
// آخر تحديث: 18 أكتوبر 2026 (قائمة الأسعار الجديدة)

export type Currency = "SDG" | "USD";

export const PRICES: Record<
  Currency,
  { app: number; sop: number; rec: number; cvs: number; cvw: number; plan: number; tr: number }
> = {
  SDG: { app: 95000, sop: 30000, rec: 30000, cvs: 60000, cvw: 75000, plan: 65000, tr: 50000 },
  USD: { app: 20, sop: 7, rec: 7, cvs: 15, cvw: 18, plan: 10, tr: 10 },
};
// ⚠️ راجع: الخطة الدراسية 65,000 SDG مقابل $10 (نسبة 6,500) أعلى بكثير من باقي الخدمات (4,000–5,000).

const group = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const fmtPrice = (n: number, c: Currency) =>
  c === "SDG" ? `${group(n)} SDG` : `$${group(n)}`;

// ───────── الباقات الجاهزة (أسعارها من قائمتك، مش محسوبة) ─────────
export type Combo = { sop: number; rec: number; cvs: number };

export type Preset = {
  id: string;
  name: string;
  name_en: string;
  combo: Combo;
  price: Record<Currency, number>;
  best: boolean;
  includes: string[];
};

export const PRESETS: Preset[] = [
  {
    id: "app",
    name: "تقديم المنحة فقط",
    name_en: "Application Only",
    combo: { sop: 0, rec: 0, cvs: 0 },
    price: { SDG: 95000, USD: 20 },
    best: false,
    includes: ["تقديم المنحة كاملاً", "متابعة حتى الإرسال"],
  },
  {
    id: "app-sop",
    name: "تقديم + خطاب النية",
    name_en: "Application + SOP",
    combo: { sop: 1, rec: 0, cvs: 0 },
    price: { SDG: 125000, USD: 27 },
    best: false,
    includes: ["تقديم المنحة كاملاً", "خطاب النية (SOP)", "متابعة حتى الإرسال"],
  },
  {
    id: "app-sop-rec1",
    name: "تقديم + نية + 1 توصية",
    name_en: "Application + SOP + 1 Rec",
    combo: { sop: 1, rec: 1, cvs: 0 },
    price: { SDG: 155000, USD: 34 },
    best: false,
    includes: ["تقديم المنحة كاملاً", "خطاب النية (SOP)", "خطاب توصية واحد", "متابعة حتى الإرسال"],
  },
  {
    id: "app-sop-rec2",
    name: "تقديم + نية + 2 توصية",
    name_en: "Application + SOP + 2 Rec",
    combo: { sop: 1, rec: 2, cvs: 0 },
    price: { SDG: 180000, USD: 41 }, // افترضنا أن الرقم المنفصل في قائمتك يخص هذه الباقة
    best: false,
    includes: ["تقديم المنحة كاملاً", "خطاب النية (SOP)", "خطابَي توصية", "متابعة حتى الإرسال"],
  },
  {
    id: "full-rec1",
    name: "الكامل + 1 توصية + CV",
    name_en: "Full + 1 Rec + CV",
    combo: { sop: 1, rec: 1, cvs: 1 },
    price: { SDG: 195000, USD: 49 },
    best: true,
    includes: ["تقديم المنحة كاملاً", "خطاب النية (SOP)", "خطاب توصية واحد", "CV للمنح", "متابعة حتى الإرسال"],
  },
  {
    id: "full-rec2",
    name: "الكامل + 2 توصية + CV",
    name_en: "Full + 2 Rec + CV",
    combo: { sop: 1, rec: 2, cvs: 1 },
    price: { SDG: 225000, USD: 56 },
    best: false,
    includes: ["تقديم المنحة كاملاً", "خطاب النية (SOP)", "خطابَي توصية", "CV للمنح", "متابعة حتى الإرسال"],
  },
];

// ───────── الحساب (بيستخدمه المسار الموجّه) ─────────
export type Selection = { sop: number; rec: number; cvs: number; cvw: number; plan: number; tr: number };
export const emptySelection = (): Selection => ({ sop: 0, rec: 0, cvs: 0, cvw: 0, plan: 0, tr: 0 });

export function listPrice(path: "apply" | "docs", sel: Selection, c: Currency): number {
  const p = PRICES[c];
  let sum = sel.sop * p.sop + sel.rec * p.rec + sel.cvs * p.cvs + sel.cvw * p.cvw + sel.plan * p.plan + sel.tr * p.tr;
  if (path === "apply") sum += p.app;
  return sum;
}

export function findPreset(sel: Selection): Preset | undefined {
  if (sel.cvw || sel.plan || sel.tr) return undefined;
  return PRESETS.find((x) => x.combo.sop === sel.sop && x.combo.rec === sel.rec && x.combo.cvs === sel.cvs);
}

/** السعر النهائي: لو الاختيار = باقة جاهزة بنستخدم سعر الباقة، وإلا مجموع الخدمات. */
export function quote(path: "apply" | "docs", sel: Selection, c: Currency) {
  const list = listPrice(path, sel, c);
  const preset = path === "apply" ? findPreset(sel) : undefined;
  const total = preset ? preset.price[c] : list;
  return { list, total, saving: list - total, preset };
}

// ───────── بيانات العرض (نفس الشكل القديم، فالصفحة ما تتغير) ─────────
export type Service = {
  icon: string;
  name: string;
  name_en: string;
  sdg: string;
  usd: string;
  desc: string;
};

const sdg = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const usd = (n: number) => `$${n}`;

export const SERVICES: Service[] = [
  {
    icon: "📝",
    name: "خطاب النية (SOP)",
    name_en: "Statement of Purpose",
    sdg: sdg(PRICES.SDG.sop),
    usd: usd(PRICES.USD.sop),
    desc: "كتابة خطاب نية احترافي يعكس أهدافك الأكاديمية ويقنع لجنة القبول.",
  },
  {
    icon: "📄",
    name: "خطاب التوصية",
    name_en: "Recommendation Letter",
    sdg: sdg(PRICES.SDG.rec),
    usd: usd(PRICES.USD.rec),
    desc: "صياغة خطاب توصية قوي من الأستاذ أو صاحب العمل بأسلوب أكاديمي.",
  },
  {
    icon: "🌐",
    name: "ترجمة المستندات",
    name_en: "Document Translation / page",
    sdg: sdg(PRICES.SDG.tr),
    usd: usd(PRICES.USD.tr),
    desc: "ترجمة احترافية للمستندات الرسمية والأكاديمية — السعر لكل صفحة.",
  },
  {
    icon: "📋",
    name: "الخطة الدراسية أو البحثية",
    name_en: "Study / Research Plan",
    sdg: sdg(PRICES.SDG.plan),
    usd: usd(PRICES.USD.plan),
    desc: "إعداد خطة دراسية أو بحثية واضحة تُبيّن أهدافك وكيف ستستفيد من المنحة.",
  },
  {
    icon: "💼",
    name: "CV للمنح الدراسية",
    name_en: "Scholarship CV",
    sdg: sdg(PRICES.SDG.cvs),
    usd: usd(PRICES.USD.cvs),
    desc: "CV أكاديمي مخصص للتقديم على المنح الدراسية الدولية.",
  },
  {
    icon: "👔",
    name: "CV للعمل",
    name_en: "Professional CV",
    sdg: sdg(PRICES.SDG.cvw),
    usd: usd(PRICES.USD.cvw),
    desc: "CV احترافي مصمم للتقديم على فرص العمل والتطوير المهني.",
  },
];

export type Package = {
  name: string;
  name_en: string;
  sdg: string;
  usd: string;
  best: boolean;
  includes: string[];
  /** التوفير الفعلي مقارنة بشراء الخدمات منفصلة (0 = لا يوجد توفير) */
  saving_sdg: number;
  saving_usd: number;
};

export const PACKAGES: Package[] = PRESETS.map((p) => ({
  name: p.name,
  name_en: p.name_en,
  sdg: sdg(p.price.SDG),
  usd: usd(p.price.USD),
  best: p.best,
  includes: p.includes,
  saving_sdg: listPrice("apply", { ...emptySelection(), ...p.combo }, "SDG") - p.price.SDG,
  saving_usd: listPrice("apply", { ...emptySelection(), ...p.combo }, "USD") - p.price.USD,
}));
