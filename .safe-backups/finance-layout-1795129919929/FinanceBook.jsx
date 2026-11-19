import React, { useEffect, useRef, useState } from "react";
import { collection, doc, onSnapshot, runTransaction } from "firebase/firestore";
import { auth, db } from "../../firebase";
import "./FinanceBook.css";

const wallets = ["الصندوق", "آدم", "أمير"];
const expenses = ["مواد تنظيف", "بنزين", "أكل", "شرب", "أدهم – تسويق", "أجرة عامل", "أخرى"];
const services = ["مقاعد", "فرشات", "موكيت", "سجاد", "أخرى"];
const kinds = { job: "شغل زبون", cost: "مصروف", draw: "استلام حصة", move: "نقل مصاري" };

const money = n => (n / 100).toLocaleString("he-IL", { maximumFractionDigits: 2 }) + " ₪";
const makeId = () => Array.from(crypto.getRandomValues(new Uint32Array(4))).join("-");
const isInvoice = r => r.kind === "job" || r.kind === "cost";

function numberText(value) {
  return String(value).trim()
    .replace(/[٠-٩]/g, c => String(c.charCodeAt(0) - 1632))
    .replace(/[۰-۹]/g, c => String(c.charCodeAt(0) - 1776))
    .replace(/[٫,]/g, ".");
}

function cents(value) {
  const s = numberText(value);
  if (!/^\d{1,8}(\.\d{1,2})?$/.test(s)) {
    throw Error("اكتب مبلغ صحيح، بحد أقصى خانتين بعد الفاصلة.");
  }
  const [whole, fraction = ""] = s.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}

function today() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jerusalem", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(new Date());
  const get = key => parts.find(p => p.type === key).value;
  return [get("year"), get("month"), get("day")].join("-");
}

function businessDate(date, min = "0001-01-01") {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < min || date > today()) {
    throw Error("افحص تاريخ العملية. تاريخ الدفعة لازم يكون من تاريخ القيد لليوم.");
  }
}

function remaining(row) {
  return row.total - row.payments.reduce((sum, p) => sum + (p.cancelled ? 0 : p.amount), 0);
}

function totals(rows, inPeriod) {
  const t = {
    receipts: 0, costs: 0, paidCosts: 0, billed: 0,
    draws: [0, 0], shares: [0, 0], cash: [0, 0, 0],
    categories: {}, paidCategories: {}
  };
  const daily = new Map();
  function profit(date, delta) {
    daily.set(date, (daily.get(date) || 0) + delta);
  }

  for (const r of rows) {
    if (r.cancelled) continue;
    if (inPeriod(r.date)) {
      if (r.kind === "job") t.billed += r.total;
      if (r.kind === "cost") {
        t.costs += r.total;
        t.categories[r.category] = (t.categories[r.category] || 0) + r.total;
        profit(r.date, -r.total);
      }
      if (r.kind === "draw" || r.kind === "move") {
        t.cash[r.wallet] -= r.total;
        if (r.kind === "draw") t.draws[r.to - 1] += r.total;
        else t.cash[r.to] += r.total;
      }
    }
    for (const p of r.payments) {
      if (p.cancelled || !inPeriod(p.date)) continue;
      if (r.kind === "job") {
        t.receipts += p.amount;
        t.cash[p.wallet] += p.amount;
        profit(p.date, p.amount);
      } else {
        t.paidCosts += p.amount;
        t.paidCategories[r.category] = (t.paidCategories[r.category] || 0) + p.amount;
        t.cash[p.wallet] -= p.amount;
      }
    }
  }
  for (const net of daily.values()) {
    const adam = Math.trunc(net / 2);
    t.shares[0] += adam;
    t.shares[1] += net - adam;
  }
  return t;
}

const input = "mt-1 min-h-11 w-full rounded-xl border bg-white px-3 text-base";
const btn = "min-h-11 rounded-xl border bg-white px-3 py-2 font-bold disabled:opacity-50";
const main = btn + " !bg-slate-900 text-white";
const line = () => ({ type: services[0], qty: "", unit: "قطعة" });

function blank(kind, date) {
  return {
    kind, date, id: makeId(), name: "", category: expenses[0],
    total: "", partial: false, paid: "", wallet: "0", to: "1", note: "", lines: [line()]
  };
}

function Field({ title, children }) {
  return <label className="block text-sm font-bold">{title}{children}</label>;
}

function Wallet({ value, onChange, partner = false }) {
  return <select className={input} value={value} onChange={e => onChange(e.target.value)}>
    {wallets.map((w, i) => (!partner || i > 0) && <option key={w} value={i}>{w}</option>)}
  </select>;
}

function newRow(f) {
  businessDate(f.date);
  const total = cents(f.total), wallet = Number(f.wallet), to = Number(f.to);
  if (!total) throw Error("المبلغ لازم يكون أكبر من صفر.");
  const job = f.kind === "job";
  const needsName = job || (f.kind === "cost" && ["أجرة عامل", "أخرى"].includes(f.category));
  if (needsName && !f.name.trim()) throw Error("اكتب اسم الزبون أو العامل أو وصف المصروف.");
  if (f.kind === "move" && wallet === to) throw Error("اختار مكانين مختلفين للنقل.");

  const paid = isInvoice(f) ? (f.partial ? cents(f.paid || "0") : total) : 0;
  if (paid > total) throw Error("الدفعة أكبر من المبلغ.");

  const lines = job ? f.lines.map(l => {
    const qty = numberText(l.qty);
    if (!/^\d{1,5}(\.\d{1,2})?$/.test(qty) || Number(qty) <= 0 ||
        (l.unit === "قطعة" && !Number.isInteger(Number(qty)))) {
      throw Error("افحص كمية كل خدمة. عدد القطع لازم يكون عدد صحيح.");
    }
    return { ...l, qty: Number(qty) };
  }) : [];

  return {
    kind: f.kind, date: f.date, total, wallet, to, name: f.name.trim(),
    note: f.note.trim(), category: f.kind === "cost" ? f.category : "", lines,
    payments: paid ? [{ id: f.id, date: f.date, wallet, amount: paid }] : [],
    rev: 1, cancelled: false
  };
}

export default function FinanceBook() {
  const dialog = useRef(null), lock = useRef(false);
  const [open, show] = useState(false), [rows, records] = useState([]);
  const [status, state] = useState("loading"), [retry, refresh] = useState(0);
  const [date, day] = useState(today), [view, tab] = useState("اليوم"), [search, find] = useState("");
  const [form, edit] = useState(null), [busy, working] = useState(false), [msg, say] = useState("");
  const uid = auth.currentUser?.uid;
  const ready = status === "ready";

  useEffect(() => {
    if (!open || !uid) return;
    state("loading");
    records([]);
    return onSnapshot(collection(db, "lumora_finance", uid, "entries"),
      { includeMetadataChanges: true },
      snap => {
        records(snap.docs.map(d => ({ ...d.data(), id: d.id })));
        state(snap.metadata.fromCache ? "offline" : "ready");
      },
      e => state(e.code === "permission-denied" ? "denied" : "error")
    );
  }, [open, uid, retry]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function close() {
    if (lock.current || (form && !window.confirm("ترك النموذج بدون حفظ؟"))) return;
    edit(null); say(""); show(false); dialog.current.close();
  }
  function set(key, value) { say(""); edit(old => ({ ...old, [key]: value })); }
  function start(f) { edit(f); say(""); dialog.current.scrollTop = 0; }

  async function save() {
    if (lock.current || !ready || !uid) return;
    lock.current = true; working(true); say("");
    try {
      const f = form;
      const ref = doc(db, "lumora_finance", uid, "entries", f.rowId || f.id);
      const creating = !f.rowId;
      const value = creating ? newRow(f) : null;

      await runTransaction(db, async tx => {
        const old = (await tx.get(ref)).data();
        if (old?.lastOp === f.id) return;

        if (creating) {
          if (old) throw Error("رقم العملية موجود. افتح نموذج جديد.");
          tx.set(ref, { ...value, lastOp: f.id });
          return;
        }

        if (!old || old.rev !== f.rev || old.cancelled) {
          throw Error("السجل تغيّر. ارجع وافتحه من جديد.");
        }
        const patch = { rev: old.rev + 1, lastOp: f.id };
        if (f.kind === "pay") {
          businessDate(f.date, old.date);
          const amount = cents(f.total);
          if (!amount || amount > remaining(old)) throw Error("الدفعة لازم تكون ضمن المبلغ الباقي.");
          patch.payments = [...old.payments, {
            id: f.id, date: f.date, amount, wallet: Number(f.wallet)
          }];
        } else {
          if (!f.note.trim()) throw Error("اكتب سبب التصحيح.");
          if (f.kind === "voidPay") {
            const target = old.payments.find(p => p.id === f.paymentId && !p.cancelled);
            if (!target) throw Error("الدفعة غير متاحة.");
            patch.payments = old.payments.map(p => p.id === target.id
              ? { ...p, cancelled: true, reason: f.note.trim() } : p);
          } else {
            if (old.payments.some(p => !p.cancelled && p.id !== f.rowId)) {
              throw Error("في دفعات لاحقة على القيد. راجعها وصحّحها أولاً.");
            }
            patch.cancelled = true;
            patch.reason = f.note.trim();
          }
        }
        tx.update(ref, patch);
      });
      if (!f.kind.startsWith("void")) {
        day(f.date); tab("اليوم"); find("");
      }
      edit(null); say("تم الحفظ."); dialog.current.scrollTop = 0;
    } catch (e) {
      say(e.code === "permission-denied" ? "ما في صلاحية للحفظ."
        : e.code ? "تعذّر الحفظ. افحص الاتصال وحاول مجددًا." : e.message);
    } finally { lock.current = false; working(false); }
  }

  const period = d => view === "الشهر" ? d.slice(0, 7) === date.slice(0, 7) : d === date;
  const summary = totals(rows, period), lifetime = totals(rows, () => true);
  const title = r => r.name || r.category ||
    (r.kind === "draw" ? wallets[r.to] : wallets[r.wallet] + " ← " + wallets[r.to]);
  const latest = r => r.payments.reduce((v, p) => p.date > v ? p.date : v, r.date);
  const visible = rows.filter(r => {
    const match = view === "المعلّق" ? !r.cancelled && isInvoice(r) && remaining(r) > 0
      : period(r.date) || r.payments.some(p => period(p.date));
    return match && [title(r), r.category, r.note, ...r.lines.map(l => l.type)]
      .join(" ").includes(search.trim());
  }).sort((a, b) => latest(b).localeCompare(latest(a)) || b.id.localeCompare(a.id));

  function action(r, kind, paymentId = "") {
    start({ ...blank(kind, today()), rowId: r.id, rev: r.rev, paymentId,
      name: title(r), total: String(remaining(r) / 100) });
  }
  function updateLine(index, key, value) {
    set("lines", form.lines.map((l, i) => i === index ? { ...l, [key]: value } : l));
  }
  const tile = (k, v) => <div key={k} className="fb-tile rounded-xl p-3">
    <small>{k}</small><bdi dir="ltr">{money(v)}</bdi></div>;

  const rules = 'match /lumora_finance/{owner}/entries/{entry} {\n'
    + '  allow read, create, update: if request.auth != null && request.auth.uid == owner && owner == "'
    + uid + '";\n}';

  return <>
    <button type="button" className={main + " w-full"} onClick={() => {
      show(true); dialog.current.showModal();
    }}>دفتر آدم وأمير</button>

    <dialog ref={dialog} dir="rtl" aria-label="دفتر آدم وأمير"
      onCancel={e => { e.preventDefault(); close(); }}
      className="finance-mobile-v2 fixed inset-0 m-0 h-[100dvh] max-h-[100dvh] w-full max-w-full overflow-y-auto overscroll-contain bg-white px-4 pb-6 pt-3 backdrop:bg-black/50 sm:m-auto sm:h-auto sm:max-h-[92dvh] sm:max-w-2xl sm:rounded-2xl sm:p-5">

      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">دفتر آدم وأمير</h2>
        <button className={btn} disabled={busy} onClick={close}>إغلاق</button>
      </header>

      {status !== "ready" && <div role="status">
        {status === "denied" ? "يلزم تفعيل صلاحية الدفتر." :
         status === "loading" ? "جارٍ تحميل الدفتر…" : "تعذّر تأكيد الاتصال."}
        {status !== "loading" && <button className={btn} onClick={() => refresh(n => n + 1)}>إعادة المحاولة</button>}
      </div>}

      {!form && msg && <p role="status" className="my-2 rounded-xl bg-slate-50 p-3 font-bold">{msg}</p>}

      {form ? <fieldset disabled={busy} className="space-y-3">
        <h3 className="font-bold">{kinds[form.kind] ||
          (form.kind === "pay" ? "تسجيل دفعة" : "تصحيح السجل")} · {form.name}</h3>

        {!form.kind.startsWith("void") && <>
          <Field title="تاريخ العملية"><input className={input} type="date" value={form.date}
            max={today()} onChange={e => set("date", e.target.value)} /></Field>

          {form.kind === "cost" && <fieldset>
            <legend className="mb-1 font-bold">على شو صرفت؟</legend>
            <div className="grid grid-cols-3 gap-1">{expenses.map(v =>
              <button key={v} type="button" aria-pressed={form.category === v}
                className={form.category === v ? main : btn}
                onClick={() => set("category", v)}>{v}</button>)}</div>
          </fieldset>}
          {["job", "cost"].includes(form.kind) && <Field title={form.kind === "job" ? "اسم الزبون" : "لِمين أو مقابل شو؟"}>
            <input className={input} value={form.name} onChange={e => set("name", e.target.value)} /></Field>}

          {form.kind === "job" && <div>
            {form.lines.map((l, i) => <div key={i} className="my-2 flex flex-wrap gap-1">
              <select aria-label="الخدمة" className={btn} value={l.type} onChange={e => updateLine(i, "type", e.target.value)}>
                {services.map(v => <option key={v}>{v}</option>)}</select>
              <input aria-label="الكمية" placeholder="الكمية" inputMode="decimal" className="w-20 rounded-xl border p-2"
                value={l.qty} onChange={e => updateLine(i, "qty", e.target.value)} />
              <select aria-label="الوحدة" className={btn} value={l.unit} onChange={e => updateLine(i, "unit", e.target.value)}>
                <option>قطعة</option><option>م²</option></select>
              {form.lines.length > 1 && <button className={btn}
                onClick={() => set("lines", form.lines.filter((_, j) => j !== i))}>إزالة</button>}
            </div>)}
            <button className={btn} onClick={() => set("lines", [...form.lines, line()])}>+ خدمة لنفس الزبون</button>
          </div>}

          <Field title="المبلغ ₪"><input className={input} inputMode="decimal" value={form.total}
            onChange={e => set("total", e.target.value)} /></Field>

          {isInvoice(form) && <>
            <label className="flex min-h-11 items-center gap-2"><input type="checkbox" checked={form.partial}
              onChange={e => set("partial", e.target.checked)} />دفع جزئي أو لسه ما اندفع</label>
            {form.partial && <Field title="المبلغ اللي اندفع فعليًا ₪"><input className={input}
              inputMode="decimal" placeholder="0" value={form.paid} onChange={e => set("paid", e.target.value)} /></Field>}
          </>}

          <Field title={form.kind === "job" ? "مين قبض؟" : form.kind === "pay" ? "من أي جيبة طلع المبلغ أو لأي جيبة دخل؟" : "من أي جيبة؟"}>
            <Wallet value={form.wallet} onChange={v => set("wallet", v)} /></Field>

          {["draw", "move"].includes(form.kind) && <Field title={form.kind === "draw" ? "مين استلم حصّته؟" : "لوين انتقلت؟"}>
            <Wallet partner={form.kind === "draw"} value={form.to} onChange={v => set("to", v)} /></Field>}
        </>}

        {form.kind !== "pay" && <Field title={form.kind.startsWith("void") ? "سبب التصحيح" : "ملاحظة اختيارية"}>
          <input className={input} value={form.note} onChange={e => set("note", e.target.value)} /></Field>}

        <div className="fb-save sticky bottom-0 z-10 border-t bg-white py-2 pb-[max(.5rem,env(safe-area-inset-bottom))]">
          {msg && <p role="alert" className="mb-2 text-sm font-bold text-red-700">{msg}</p>}
          <div className="flex gap-2">
          <button disabled={!ready || busy} className={main + " flex-1"} onClick={save}>
            {busy ? "جارٍ الحفظ…" : "حفظ العملية"}
          </button>
          <button className={btn} onClick={() => {
            if (window.confirm("ترك النموذج؟")) { edit(null); say(""); }
          }}>رجوع</button>
          </div>
        </div>
      </fieldset> : <>
        <div className="fb-actions grid grid-cols-2 gap-2">
          <button className={main} disabled={!ready}
            onClick={() => start(blank("job", today()))}>+ شغل زبون</button>
          <button className={btn} disabled={!ready}
            onClick={() => start(blank("cost", today()))}>+ مصروف</button>
        </div>

        <details className="my-2">
          <summary className="cursor-pointer py-2">استلام حصة أو نقل مصاري</summary>
          <div className="grid grid-cols-2 gap-2">
            {["draw","move"].map(k => <button key={k} className={btn} disabled={!ready}
              onClick={() => start(blank(k, today()))}>{kinds[k]}</button>)}
          </div>
        </details>

        <nav aria-label="فترة العرض" className="my-3 grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1">
          {["اليوم","الشهر","المعلّق"].map(v => <button key={v} aria-pressed={view === v}
            className={view === v ? main : btn}
            onClick={() => { tab(v); find(""); }}>{v}</button>)}
        </nav>

        {view !== "المعلّق" && <div className="mb-3 flex items-end gap-2">
          <label className="min-w-0 flex-1 text-sm font-bold">
            {view === "الشهر" ? "شهر المراجعة" : "تاريخ المراجعة"}
            <input className={input} type={view === "الشهر" ? "month" : "date"}
              value={view === "الشهر" ? date.slice(0,7) : date}
              onChange={e => {
                const v = e.target.value;
                if (v) day(view === "الشهر" ? v + "-01" : v);
              }} />
          </label>
          <button className={btn} onClick={() => day(today())}>
            {view === "الشهر" ? "هالشهر" : "اليوم"}
          </button>
        </div>}

        {view !== "المعلّق" && ready && <>
          <section aria-label="ملخص الفترة" className={"fb-net rounded-2xl p-4" + (summary.receipts < summary.costs ? " fb-loss" : "")}>
            <div>الصافي للتقسيم</div>
            <strong className="text-3xl tabular-nums">{money(summary.receipts - summary.costs)}</strong>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-600 pt-2">
              <span>حصة آدم <b>{money(summary.shares[0])}</b></span>
              <span>حصة أمير <b>{money(summary.shares[1])}</b></span>
            </div>
          </section>
          <div className="my-2 grid grid-cols-2 gap-2">
            {tile("قبض من الزباين", summary.receipts)}
            {tile("مصاريف مستحقّة", summary.costs)}
          </div>
          <details className="my-2">
            <summary className="cursor-pointer py-2">تفاصيل القبض والدفع والحصص</summary>
            <div className="grid grid-cols-2 gap-2">
              {tile("قيمة الشغل", summary.billed)}
              {tile("المدفوع للمصاريف", summary.paidCosts)}
              {tile("استلم آدم", summary.draws[0])}
              {tile("استلم أمير", summary.draws[1])}
            </div>
          </details>
          <details className="my-2"><summary className="py-2">المصاريف حسب الفئة</summary>
            {expenses.filter(k => summary.categories[k] || summary.paidCategories[k]).map(k =>
              <button key={k} className={btn + " my-1 w-full text-start"} onClick={() => find(k)}>
                {k} · مستحق {money(summary.categories[k] || 0)} · مدفوع {money(summary.paidCategories[k] || 0)}
              </button>)}
          </details>
        </>}

        {ready && <details className="my-2"><summary className="py-2">الأرصدة من بداية الدفتر لليوم</summary>
          {wallets.map((w, i) => tile("مصاري الشغل عند " + w, lifetime.cash[i]))}
          {["آدم", "أمير"].map((w, i) => tile("حصة " + w + " المتراكمة بعد الاستلام", lifetime.shares[i] - lifetime.draws[i]))}
          <small>الرصيد السالب بالجيبة يعني إنّ المدفوع منها أكبر من المقبوض المسجّل فيها.</small>
        </details>}

        {ready && view === "المعلّق" && <div className="mb-3 grid grid-cols-2 gap-2">
          {tile("باقي عند الزباين", rows.filter(r => !r.cancelled && r.kind === "job")
            .reduce((n, r) => n + remaining(r), 0))}
          {tile("باقي علينا", rows.filter(r => !r.cancelled && r.kind === "cost")
            .reduce((n, r) => n + remaining(r), 0))}
        </div>}
        <Field title="بحث بالاسم أو الفئة أو الملاحظة"><input className={input} value={search}
          onChange={e => find(e.target.value)} /></Field>
        {ready && !visible.length && <p className="py-3">ما في عمليات مطابقة.</p>}

        {visible.map(r => <details key={r.id} className="fb-record" data-kind={r.kind}>
          <summary>
            <span className="fb-kind">{kinds[r.kind]}</span>
            <span className="fb-arrow" aria-hidden="true">⌄</span>
            <strong className="fb-title">{title(r)}</strong>
            <bdi dir="ltr" className="fb-amount">{money(r.total)}</bdi>
            {r.cancelled ? <span className="fb-state void">ملغاة</span> :
              isInvoice(r) && (remaining(r) > 0 ?
                <span className="fb-state due">باقي <bdi dir="ltr">{money(remaining(r))}</bdi></span> :
                <span className="fb-state paid">مسدّد</span>)}
          </summary>
          <p>{r.date} · {r.category} {r.note}</p>
          {r.reason && <p>سبب الإلغاء: {r.reason}</p>}
          {r.lines.map((l, i) => <p key={i}>{l.type} · {l.qty} {l.unit}</p>)}
          {!isInvoice(r) && <p>من {wallets[r.wallet]} إلى {wallets[r.to]}</p>}
          {r.payments.map(p => <div className="my-2" key={p.id}>
            {p.date} · {money(p.amount)} · {wallets[p.wallet]} {p.cancelled ? "· ملغاة: " + p.reason : ""}
            {!r.cancelled && !p.cancelled && <button disabled={!ready} className={btn}
              onClick={() => action(r, "voidPay", p.id)}>تصحيح دفعة</button>}
          </div>)}
          {!r.cancelled && <div className="flex flex-wrap gap-2">
            {isInvoice(r) && remaining(r) > 0 && <button className={main} disabled={!ready}
              onClick={() => action(r, "pay")}>{r.kind === "job" ? "قبض من الزبون" : "دفع المصروف"}</button>}
            <button className={btn} disabled={!ready} onClick={() => action(r, "void")}>إلغاء قيد خاطئ</button>
          </div>}
        </details>)}

        <details className="mt-4"><summary>إعداد صلاحية الدفتر</summary>
          <button className={btn} onClick={async () => {
            try { await navigator.clipboard.writeText(rules); say("تم نسخ قاعدة الدفتر."); }
            catch { window.prompt("انسخ قاعدة المدير", rules); }
          }}>نسخ قاعدة المدير</button>
        </details>
      </>}
    </dialog>
  </>;
}