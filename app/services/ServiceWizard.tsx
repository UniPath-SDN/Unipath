"use client";
// app/services/ServiceWizard.tsx
// مسار موجّه من 3 خطوات: وضعك ← احتياجك ← باقتك. السعر ظاهر طول الوقت.

import { useEffect, useMemo, useRef, useState } from "react";
import { Send, FileText, Compass, Check, Plus, Minus, Pencil, RotateCcw, MessageCircle } from "lucide-react";
import "./service-wizard.css";
import {
  PRICES,
  emptySelection,
  fmtPrice,
  quote,
  type Currency,
  type Selection,
} from "./services-data";

type Path = "apply" | "docs" | "unsure";
type Step = 1 | 2 | 3;
type ItemKey = keyof Selection;

const ITEMS: Record<ItemKey, { label: string; kind: "toggle" | "count"; hint?: string }> = {
  sop: { label: "خطاب النية (SOP)", kind: "toggle" },
  rec: { label: "خطابات التوصية", kind: "count", hint: "سعر الخطاب الواحد" },
  cvs: { label: "CV للمنح", kind: "toggle" },
  cvw: { label: "CV للعمل", kind: "toggle" },
  plan: { label: "الخطة الدراسية أو البحثية", kind: "toggle" },
  tr: { label: "ترجمة المستندات", kind: "count", hint: "سعر الصفحة الواحدة" },
};

const PATH_ITEMS: Record<"apply" | "docs", ItemKey[]> = {
  apply: ["sop", "rec", "cvs"],
  docs: ["sop", "rec", "cvs", "cvw", "plan", "tr"],
};

const maxFor = (path: "apply" | "docs", k: ItemKey) =>
  k === "rec" ? (path === "apply" ? 2 : 3) : k === "tr" ? 20 : 1;

const UNSURE_MSG = "السلام عليكم، لا أعرف المنحة المناسبة لي وأريد استشارة مجانية.";

function summaryLines(path: "apply" | "docs", sel: Selection): string[] {
  const L: string[] = [];
  if (path === "apply") L.push("التقديم للمنحة (مع المتابعة)");
  if (sel.sop) L.push("خطاب النية (SOP)");
  if (sel.rec) L.push(`خطابات التوصية × ${sel.rec}`);
  if (sel.cvs) L.push("CV للمنح");
  if (sel.cvw) L.push("CV للعمل");
  if (sel.plan) L.push("الخطة الدراسية أو البحثية");
  if (sel.tr) L.push(`ترجمة × ${sel.tr} صفحة`);
  return L;
}

export default function ServiceWizard({ wa }: { wa: string }) {
  const [path, setPath] = useState<Path | null>(null);
  const [step, setStep] = useState<Step>(1);
  const [cur, setCur] = useState<Currency>("SDG");
  const [sel, setSel] = useState<Selection>(emptySelection());
  const [error, setError] = useState(false);

  // نحرّك التركيز لبداية الخطوة عند التنقل (للقارئات الصوتية ولوحة المفاتيح)
  const bodyRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    bodyRef.current?.focus({ preventScroll: true });
  }, [step, path]);

  const q = useMemo(
    () => (path === "apply" || path === "docs" ? quote(path, sel, cur) : null),
    [path, sel, cur]
  );

  function choose(p: Path) {
    setPath(p);
    setSel(emptySelection());
    setError(false);
    setStep(p === "unsure" ? 3 : 2);
  }
  function toggle(k: ItemKey) {
    setSel((s) => ({ ...s, [k]: s[k] ? 0 : 1 }));
    setError(false);
  }
  function change(k: ItemKey, d: number) {
    if (path !== "apply" && path !== "docs") return;
    const mx = maxFor(path, k);
    setSel((s) => ({ ...s, [k]: Math.max(0, Math.min(mx, s[k] + d)) }));
    setError(false);
  }
  function next() {
    if (path === "docs" && !Object.values(sel).some(Boolean)) {
      setError(true);
      return;
    }
    setStep(3);
  }
  function back() {
    setStep(path === "unsure" ? 1 : step === 3 ? 2 : 1);
  }
  function reset() {
    setPath(null);
    setStep(1);
    setSel(emptySelection());
    setError(false);
  }

  const stepLabels = ["وضعك", "احتياجك", "باقتك"];

  // رسالة الواتساب + الرابط (بتتبني بس في الخطوة 3)
  let waHref = `${wa}?text=${encodeURIComponent(UNSURE_MSG)}`;
  let lines: string[] = [];
  let message = UNSURE_MSG;
  if ((path === "apply" || path === "docs") && q) {
    lines = summaryLines(path, sel);
    message = [
      `السلام عليكم، ${path === "apply" ? "أريد الاشتراك في:" : "أحتاج الخدمات التالية:"}`,
      ...lines.map((l) => `- ${l}`),
      q.preset ? `(باقة: ${q.preset.name})` : "",
      `الإجمالي: ${fmtPrice(q.total, cur)}`,
    ]
      .filter(Boolean)
      .join("\n");
    waHref = `${wa}?text=${encodeURIComponent(message)}`;
  }

  return (
    <section className="wz-section" id="wizard" aria-labelledby="wz-title">
      <div className="wz-card">
        <div className="wz-head">
          <div>
            <h2 id="wz-title" className="wz-title">ابنِ باقتك في ثلاث خطوات</h2>
            <p className="wz-sub">اعرف السعر قبل ما تتواصل معنا، بدون أي التزام</p>
          </div>
          <div className="wz-cur" role="group" aria-label="العملة">
            {(["SDG", "USD"] as Currency[]).map((c) => (
              <button key={c} type="button" aria-pressed={cur === c} onClick={() => setCur(c)}>
                {c === "SDG" ? "جنيه سوداني" : "دولار"}
              </button>
            ))}
          </div>
        </div>

        <ol className="wz-steps" aria-label="خطوات المسار">
          {stepLabels.map((l, i) => (
            <li key={l} aria-current={step === i + 1 ? "step" : undefined} className={step > i + 1 ? "done" : ""}>
              {i + 1}. {l}
            </li>
          ))}
        </ol>

        <div ref={bodyRef} tabIndex={-1} className="wz-body">
          {/* ───── الخطوة 1: وضعك ───── */}
          {step === 1 && (
            <>
              <h3 className="wz-q">وين أنت في رحلتك؟</h3>
              <p className="wz-hint">اختر الأقرب لحالتك</p>
              <div className="wz-opts">
                <button type="button" className="wz-opt" onClick={() => choose("apply")}>
                  <span className="wz-opt-ic"><Send size={22} aria-hidden="true" /></span>
                  <span>
                    <b>أعرف المنحة وأريد من يقدّم لي</b>
                    <small>نتولى التقديم والمتابعة، وتضيف الوثائق اللي تحتاجها</small>
                  </span>
                </button>
                <button type="button" className="wz-opt" onClick={() => choose("docs")}>
                  <span className="wz-opt-ic"><FileText size={22} aria-hidden="true" /></span>
                  <span>
                    <b>أقدّم بنفسي وأحتاج وثائق فقط</b>
                    <small>خطاب نية، توصيات، CV، ترجمة</small>
                  </span>
                </button>
                <button type="button" className="wz-opt" onClick={() => choose("unsure")}>
                  <span className="wz-opt-ic"><Compass size={22} aria-hidden="true" /></span>
                  <span>
                    <b>لا أعرف المنحة المناسبة لي</b>
                    <small>نبدأ باستشارة مجانية</small>
                  </span>
                </button>
              </div>
            </>
          )}

          {/* ───── الخطوة 2: احتياجك ───── */}
          {step === 2 && (path === "apply" || path === "docs") && q && (
            <>
              <h3 className="wz-q">{path === "apply" ? "ما الذي ينقصك قبل التقديم؟" : "اختر الخدمات التي تحتاجها"}</h3>
              <p className="wz-hint">{path === "apply" ? "التقديم والمتابعة مشمولان دائماً" : "أضف ما تحتاجه فقط"}</p>

              <div className="wz-rows">
                {PATH_ITEMS[path].map((k) => {
                  const it = ITEMS[k];
                  const v = sel[k];
                  return (
                    <div className="wz-row" key={k}>
                      <div className="wz-row-info">
                        <div className="wz-row-name">{it.label}</div>
                        {it.hint && <div className="wz-row-hint">{it.hint}</div>}
                      </div>
                      <div className="wz-row-price">{fmtPrice(PRICES[cur][k], cur)}</div>
                      {it.kind === "toggle" ? (
                        <button
                          type="button"
                          className={`wz-tg ${v ? "on" : ""}`}
                          aria-pressed={!!v}
                          aria-label={it.label}
                          onClick={() => toggle(k)}
                        >
                          {v ? <Check size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                        </button>
                      ) : (
                        <div className="wz-stp">
                          <button type="button" aria-label={`إنقاص ${it.label}`} onClick={() => change(k, -1)}>
                            <Minus size={16} aria-hidden="true" />
                          </button>
                          <span aria-live="polite">{v}</span>
                          <button type="button" aria-label={`زيادة ${it.label}`} onClick={() => change(k, 1)}>
                            <Plus size={16} aria-hidden="true" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {error && <div className="wz-err" role="alert">اختر خدمة واحدة على الأقل</div>}

              <div className="wz-bar">
                <div aria-live="polite">
                  <div className="wz-lbl">الإجمالي الحالي</div>
                  <div className="wz-total">{fmtPrice(q.total, cur)}</div>
                </div>
                <div className="wz-actions">
                  <button type="button" className="wz-btn ghost" onClick={back}>رجوع</button>
                  <button type="button" className="wz-btn primary" onClick={next}>عرض باقتي</button>
                </div>
              </div>
            </>
          )}

          {/* ───── الخطوة 3: باقتك ───── */}
          {step === 3 && path === "unsure" && (
            <>
              <div className="wz-result">
                <div className="wz-lbl">خطوتك الأولى</div>
                <h3 className="wz-q" style={{ marginTop: 4 }}>استشارة مجانية لتحديد المنحة</h3>
                <p className="wz-hint" style={{ marginBottom: 0 }}>
                  بعد ما نحدد المنحة المناسبة، نرشح لك الباقة بسعر واضح.
                </p>
              </div>
              <div className="wz-msgbox">
                <div className="wz-lbl">رسالة الواتساب الجاهزة</div>
                <div className="wz-msg">{message}</div>
              </div>
              <div className="wz-actions">
                <a className="wz-btn wa" href={waHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} aria-hidden="true" /> ابدأ على واتساب
                </a>
                <button type="button" className="wz-btn ghost" onClick={back}>رجوع</button>
              </div>
            </>
          )}

          {step === 3 && (path === "apply" || path === "docs") && q && (
            <>
              <div className="wz-result" aria-live="polite">
                <div className="wz-lbl">
                  {path === "apply" ? (q.preset ? `باقتك: ${q.preset.name}` : "باقة مخصصة") : "الخدمات المختارة"}
                </div>
                <div className="wz-total big">{fmtPrice(q.total, cur)}</div>
                {q.saving > 0 && (
                  <div className="wz-save">وفّرت {fmtPrice(q.saving, cur)} مقارنة بشراء الخدمات منفصلة</div>
                )}
                <ul className="wz-list">
                  {lines.map((l) => (
                    <li key={l}><Check size={15} aria-hidden="true" /> {l}</li>
                  ))}
                </ul>
              </div>
              <div className="wz-msgbox">
                <div className="wz-lbl">رسالة الواتساب الجاهزة</div>
                <div className="wz-msg">{message}</div>
              </div>
              <div className="wz-actions">
                <a className="wz-btn wa" href={waHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} aria-hidden="true" /> أرسل الطلب على واتساب
                </a>
                <button type="button" className="wz-btn ghost" onClick={back}>
                  <Pencil size={15} aria-hidden="true" /> تعديل
                </button>
                <button type="button" className="wz-btn ghost" onClick={reset}>
                  <RotateCcw size={15} aria-hidden="true" /> ابدأ من جديد
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
