import React, { useEffect, useMemo, useRef, useState } from "react";
import { collection, doc, onSnapshot, runTransaction } from "firebase/firestore";
import { auth, db } from "../../firebase";
import "./WorkCalendar.css";

const services = ["كنب", "فرشات", "كراسي سفرة", "موكيت", "سجاد", "برادي"];
const towns = ["נצרת", "חיפה", "עכו", "כפר קאסם", "עין מאהל", "נוף הגליל", "מוקייבלה", "סולם"];
const fmt = new Intl.NumberFormat("he-IL", { maximumFractionDigits: 2 });
const money = amount => fmt.format(amount / 100) + " ₪";
const digits = text => String(text).replace(/[٠-٩]/g, c => c.charCodeAt(0) - 1632)
  .replace(/[۰-۹]/g, c => c.charCodeAt(0) - 1776);
const dayKey = d => [d.getFullYear(), String(d.getMonth()+1).padStart(2,"0"),
  String(d.getDate()).padStart(2,"0")].join("-");
function today() {
  const parts = new Intl.DateTimeFormat("en", { timeZone: "Asia/Jerusalem",
    year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  return ["year","month","day"].map(k => parts.find(p => p.type === k).value).join("-");
}
const local = key => new Date(key + "T12:00:00");
function shift(key, days) {
  const d = local(key);
  d.setDate(d.getDate() + days);
  return dayKey(d);
}
function monthStart(key, offset = 0) {
  const d = local(key);
  return dayKey(new Date(d.getFullYear(), d.getMonth() + offset, 1, 12));
}
const dateLabel = key => local(key).toLocaleDateString("ar", {
  weekday: "long", day: "numeric", month: "long" });
const clean = s => s.trim().replace(/\s+/g," ");
const jobName = r => r.town + " " + r.number;
const timeLabel = r => r.start + (r.end ? " – " + r.end : "");
const phoneNumber = value => digits(value).replace(/[\s()\-]/g,"").replace(/^00/,"+")
  .replace(/^0(?=\d)/,"+972");
function waze(value) {
  if (!value.trim()) return "";
  const links = value.match(/https:\/\/[^\s<>"']+/gi) || [];
  for (const link of links) {
    try {
      const u = new URL(link);
      if (!u.username && !u.password && !u.port &&
          ["waze.com","www.waze.com","ul.waze.com"].includes(u.hostname)) return u.href;
    } catch {}
  }
  throw Error("الصق رابط المكان من Waze عبر Send ثم Copy link.");
}
function cents(text) {
  const s = digits(text).trim().replace(/[٫,]/g,".");
  if (!/^\d{1,8}(\.\d{1,2})?$/.test(s)) throw Error("افحص المبلغ بالشيكل.");
  const [a,b=""] = s.split(".");
  return Number(a)*100 + Number(b.padEnd(2,"0"));
}
function blank(date) {
  return { id: crypto.randomUUID(), rev: 0, date, town:"", number:"", start:"",
    end:"", duration:"", price:"", phone:"", location:"", note:"", items:{}, status:"booked" };
}
function validate(f) {
  const town = clean(f.town), number = digits(f.number).trim();
  if (!town || !/^\d{1,8}$/.test(number)) throw Error("اكتب البلد ورقم الزبون، حتى لو الرقم 0.");
  if (!f.date || !f.start || (f.end && f.end <= f.start))
    throw Error("افحص اليوم ووقت الوصول ونهاية الفترة.");
  const phone = phoneNumber(f.phone);
  if (phone && !/^\+[1-9]\d{7,14}$/.test(phone)) throw Error("افحص رقم التلفون.");
  const duration = digits(f.duration).trim();
  if (duration && (!/^\d{1,4}$/.test(duration) || Number(duration) < 1))
    throw Error("اكتب مدّة الشغل بالدقايق.");
  const items = {};
  for (const [type,raw] of Object.entries(f.items)) {
    const qty = digits(raw).trim();
    if (qty && (!/^\d{1,5}$/.test(qty) || Number(qty) < 1)) throw Error("افحص كمية " + type);
    items[type] = qty;
  }
  const price = f.price.trim() ? String(cents(f.price)/100) : "";
  return { ...f, town, number, phone, price, duration, items, note:f.note.trim(), location:waze(f.location) };
}
function Field({ title, children }) {
  return <label className="wc-field"><span>{title}</span>{children}</label>;
}
function calendarSearchText(value) {
  return digits(value || "").normalize("NFKC").trim().toLowerCase().replace(/\s+/g," ");
}
function calendarMatches(row,query,history = false) {
  if (!query) return true;
  const text = [jobName(row), history ? row.note : "",
    history ? Object.keys(row.items || {}).join(" ") : ""].join(" ");
  if (calendarSearchText(text).includes(query)) return true;
  if (!/^[+\d\s()-]+$/.test(query)) return false;
  const fragment = query.replace(/\D/g,"");
  if (!fragment) return false;
  const phone = digits(row.phone || "").replace(/\D/g,"");
  const localPhone = phone.startsWith("972") ? "0"+phone.slice(3) : phone;
  return phone.includes(fragment) || localPhone.includes(fragment);
}
function QuickContactIcon({kind}) {
  if (kind==="waze") return <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect width="32" height="32" rx="8" fill="#33CCFF"/>
    <path d="M5.5 19c3 .2 3.2-1.4 3.2-4.2a9.1 9.1 0 1 1 9.1 9.1h-3.6c-4.5 0-7.3-1.7-8.7-4.9Z"
      fill="white" stroke="#18212B" strokeWidth="1.7" strokeLinejoin="round"/>
    <g fill="#18212B"><circle cx="13" cy="23.6" r="2.4"/><circle cx="22" cy="23.6" r="2.4"/>
      <circle cx="15" cy="13" r="1.1"/><circle cx="21.7" cy="13" r="1.1"/></g>
    <path d="M15.3 16.2q2.9 3.2 5.9 0" fill="none" stroke="#18212B"
      strokeWidth="1.5" strokeLinecap="round"/>
  </svg>;

  const receiver = <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z"/>;
  if (kind==="whatsapp") return <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect width="32" height="32" rx="8" fill="#25D366"/>
    <path d="M6.1 26.2l1.5-5.1a10.1 10.1 0 1 1 3.7 3.7z"
      fill="none" stroke="white" strokeWidth="1.9" strokeLinejoin="round"/>
    <g transform="translate(8.7 8) scale(.61)" color="white">{receiver}</g>
  </svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect width="32" height="32" rx="8" fill="#27883F"/>
    <g transform="translate(4 4)" color="white">{receiver}</g>
  </svg>;
}
function CalendarBody({ uid, close }) {
  const [rows,setRows] = useState([]), [ready,setReady] = useState(false);
  const [loadError,setLoadError] = useState(""), [retry,setRetry] = useState(0);
  const [date,setDate] = useState(today), [view,setView] = useState("اليوم");
  const [form,setForm] = useState(null), [checkout,setCheckout] = useState(null);
  const [msg,say] = useState(""), [busy,setBusy] = useState(false), [search,find] = useState("");
  const [searchOpen,setSearchOpen] = useState(false);
  const [returnDay,setReturnDay] = useState(null);
  const focusAfterReturn = useRef(null);
  const focusDayHeader = useRef(false);
  const [customerQuery,setCustomerQuery] = useState("");
  const [cardsOpen,setCardsOpen] = useState(false);
  const [cardExceptions,setCardExceptions] = useState(() => new Set());

  function chooseCardMode(open) {
    setCardsOpen(open);
    setCardExceptions(new Set());
  }
  function toggleCard(id) {
    setCardExceptions(previous => {
      const updated = new Set(previous);
      if (updated.has(id)) updated.delete(id);
      else updated.add(id);
      return updated;
    });
  }
  const swipeStart = useRef(null);
  function beginSwipe(e) {
    swipeStart.current = null;
    if (e.touches.length!==1 || e.target.closest("button,a,input,select,textarea,summary,label")) return;
    const t=e.touches[0];
    swipeStart.current={x:t.clientX,y:t.clientY};
  }
  function finishSwipe(e) {
    const start=swipeStart.current;
    swipeStart.current=null;
    if (!start || e.touches.length || !e.changedTouches.length) return;
    const t=e.changedTouches[0], dx=t.clientX-start.x, dy=t.clientY-start.y;
    if (Math.abs(dx)<60 || Math.abs(dx)<Math.abs(dy)*1.7) return;
    setDate(key=>shift(key,dx>0 ? 1 : -1));
  }
  const initialDraft = useRef("");
  const locationFocus = useRef(false);
  const locationInput = useRef(null);
  useEffect(() => {
    if (form && locationFocus.current && locationInput.current) {
      locationFocus.current = false;
      locationInput.current.focus();
      locationInput.current.scrollIntoView({block:"center"});
    }
  },[form]);
  const lock = useRef(false), dialog = useRef(null);
  useEffect(() => {
    const el = dialog.current;
    el.showModal();
    return () => el.close();
  }, []);
  useEffect(() => {
    setReady(false); setLoadError("");
    return onSnapshot(collection(db,"lumora_calendar",uid,"appointments"),
      { includeMetadataChanges:true }, snap => {
        setRows(snap.docs.map(d => ({...d.data(),id:d.id})).sort((a,b) =>
          (a.date+a.start).localeCompare(b.date+b.start) || jobName(a).localeCompare(jobName(b))));
        setReady(!snap.metadata.fromCache);
      }, e => {
        setReady(false);
        setLoadError(e.code === "permission-denied" ? "المواعيد بحاجة لصلاحية Firebase."
          : "تعذّر تحميل المواعيد.");
      });
  }, [uid,retry]);
  useEffect(() => {
    if (view==="الشهر" && focusAfterReturn.current) {
      const key=focusAfterReturn.current;
      focusAfterReturn.current=null;
      const dayButton=dialog.current?.querySelector('[data-calendar-date="'+key+'"]');
      if (dayButton) {
        dayButton.focus({preventScroll:true});
        dayButton.scrollIntoView({block:"nearest"});
      }
    } else if (view==="اليوم" && focusDayHeader.current) {
      focusDayHeader.current=false;
      if (dialog.current) {
        dialog.current.scrollTop=0;
        dialog.current.querySelector("header button")?.focus({preventScroll:true});
      }
    }
  },[view,date]);

  function openDayFromMonth(key) {
    setReturnDay(key);
    focusDayHeader.current=true;
    go(key);
  }

  function leave() {
    if (lock.current) return;
    const draft=form || checkout;
    if (draft && JSON.stringify(draft)!==initialDraft.current &&
        !window.confirm("ترجع للجدول وتترك التعديلات؟")) return;
    if (form || checkout) { setForm(null); setCheckout(null); say(""); }
    else if (view==="اليوم" && returnDay) {
      focusAfterReturn.current=returnDay;
      setDate(returnDay);
      setView("الشهر");
      setReturnDay(null);
      setSearchOpen(false);
      find("");
      say("");
    } else close();
  }
  function edit(r, focusLocation = false) {
    locationFocus.current = focusLocation;
    setCustomerQuery("");
    const draft={...r,items:{...r.items}};
    initialDraft.current=JSON.stringify(draft);
    setForm(draft); say(""); dialog.current.scrollTop=0;
  }
  function set(key,val) { setForm(f => ({...f,[key]:val})); say(""); }
  async function act(fn, success) {
    if (lock.current || !ready) return;
    lock.current=true; setBusy(true); say("");
    try { await fn(); setForm(null); setCheckout(null); say(success); }
    catch(e) { say(e.code ? "تعذّر الحفظ. افحص الاتصال والصلاحية وجرّب كمان مرة." : e.message); }
    finally { lock.current=false; setBusy(false); }
  }
  const refFor = id => doc(db,"lumora_calendar",uid,"appointments",id);
  function check(old,r) {
    if (!old || old.rev !== r.rev || old.status !== "booked")
      throw Error("الموعد تغيّر من الجهاز الثاني. ارجع للجدول وافتحه من جديد.");
  }
  function save() {
    act(async () => {
      const r = validate(form);
      const ref = refFor(r.id);
      await runTransaction(db,async tx => {
        const old = (await tx.get(ref)).data();
        if (r.rev) check(old,r);
        else if (old) throw Error("الموعد محفوظ. ارجع للجدول.");
        tx.set(ref,{...r,rev:r.rev+1,updatedAt:Date.now()});
      });
      setDate(r.date); setView("اليوم"); find(""); setSearchOpen(false);
    },"تم حفظ الموعد.");
  }
  function cancel(r) {
    if (!window.confirm("تأكيد إلغاء موعد " + jobName(r) + "؟ رح يضل ظاهر بالسجل.")) return;
    act(async () => {
      const ref=refFor(r.id);
      await runTransaction(db,async tx => {
        check((await tx.get(ref)).data(),r);
        tx.update(ref,{status:"cancelled",rev:r.rev+1,updatedAt:Date.now()});
      });
    },"تم إلغاء الموعد.");
  }
  function finish() {
    act(async () => {
      const {r,price,paid,method,partial,payDate}=checkout;
      const total=cents(price), amount=partial ? cents(paid || "0") : total;
      if (!total || amount>total) throw Error("افحص السعر والمبلغ المقبوض.");
      if (r.date>today() || (amount && (!payDate || payDate<r.date || payDate>today())))
        throw Error("تاريخ القبض لازم يكون بين يوم الشغل واليوم.");
      const ref=refFor(r.id), entryId="visit-"+r.id;
      const entry=doc(db,"lumora_finance",uid,"entries",entryId);
      await runTransaction(db,async tx => {
        const old=(await tx.get(ref)).data(), existing=(await tx.get(entry)).exists();
        if (old?.status==="done" && old.entryId===entryId && existing) return;
        check(old,r);
        if (existing) throw Error("في قيد مالي مرتبط بالموعد. راجع الدفتر.");
        const detail=Object.entries(r.items).map(([type,q]) => [type,q].filter(Boolean).join(" × ")).join("، ");
        tx.set(entry,{kind:"job",date:r.date,total,wallet:0,to:1,name:jobName(r),
          note:[detail,amount ? "القبض: "+method : "بانتظار القبض",r.note].filter(Boolean).join(" · "),
          category:"",lines:Object.entries(r.items).filter(([,q])=>q).map(([type,q])=>({type,qty:Number(q),unit:"قطعة"})),
          payments:amount ? [{id:entryId,date:payDate,wallet:0,amount,method}] : [],
          rev:1,cancelled:false,lastOp:entryId,appointmentId:r.id});
        tx.update(ref,{status:"done",entryId,price:String(total/100),rev:r.rev+1,updatedAt:Date.now()});
      });
    },"تم إنهاء الزيارة وتسجيل الشغل بالدفتر المالي.");
  }
  const {people,byDate} = useMemo(() => {
    const people = new Map(), byDate = new Map();
    for (const r of rows) {
      const name = jobName(r);
      const previous = people.get(name);
      if (!previous || (r.updatedAt || 0) >= (previous.updatedAt || 0)) people.set(name,r);
      if (!byDate.has(r.date)) byDate.set(r.date,[]);
      byDate.get(r.date).push(r);
    }
    return {people,byDate};
  },[rows]);
  const customerNames = useMemo(() => [...people.keys()].sort(),[people]);
  const customerNeedle = calendarSearchText(customerQuery);
  const customerMatches = useMemo(() => customerNeedle
    ? customerNames.filter(name => calendarMatches(people.get(name),customerNeedle))
    : [],[customerNames,people,customerNeedle]);
  const from=monthStart(date);
  const until=monthStart(date,1);
  const dayRows = byDate.get(date) || [];
  const needle = calendarSearchText(search);
  const historyResults = useMemo(() => needle
    ? rows.filter(r => calendarMatches(r,needle,true)).reverse()
    : [],[rows,needle]);
  const shown = needle ? historyResults : dayRows;
  const editingRow = form?.rev ? form : checkout?.r;
  const latestRow = editingRow ? rows.find(row=>row.id===editingRow.id) : null;
  const outdated = !!(ready && editingRow && (!latestRow ||
    latestRow.rev!==editingRow.rev || latestRow.status!=="booked"));

  function reloadVisit() {
    if (lock.current || !ready) return;
    const draft=form || checkout;
    if (draft && JSON.stringify(draft)!==initialDraft.current &&
        !window.confirm("تحميل التحديث وترك التغييرات اللي كتبتها هون؟")) return;
    if (!latestRow || latestRow.status!=="booked") {
      setForm(null); setCheckout(null);
      say(latestRow?.status==="done" ? "الزيارة منتهية ومسجّلة بالدفتر."
        : latestRow?.status==="cancelled" ? "الموعد انلغى." : "الموعد لم يعد متاحًا.");
    } else if (form) {
      edit(latestRow);
    } else {
      const fresh={r:latestRow,price:latestRow.price,paid:"",partial:false,method:"كاش",payDate:today()};
      initialDraft.current=JSON.stringify(fresh);
      setCheckout(fresh); say("");
    }
  }
  const currentDay = today();
  const next = (byDate.get(currentDay) || []).find(r => r.status === "booked");
  const activeVisits = dayRows.filter(r => r.status === "booked");
  const finishedVisits = dayRows.filter(r => r.status !== "booked");
  function go(key) { setDate(key); setView("اليوم"); find(""); setSearchOpen(false); }
  function step(n) {
    setDate(view==="الشهر" ? monthStart(date,n) : shift(date,n));
  }
  function card(r) {
    const active=r.status==="booked";
    const upcoming = next?.id === r.id;
    const expanded = cardExceptions.has(r.id) ? !cardsOpen : cardsOpen;
    const panelId = "wc-appointment-details-" + r.id;
    return <article className="wc-card" key={r.id} data-next={upcoming} data-status={r.status}>
      <div className="wc-card-top">
      <button type="button" className="wc-card-toggle"
        aria-expanded={expanded} aria-controls={panelId}
        onClick={()=>toggleCard(r.id)}>
      <span className="wc-card-meta">
        {upcoming && <span className="wc-next">الزبون الجاي</span>}
        {r.status==="done" && <span>تم الشغل</span>}
        {r.status==="cancelled" && <span>ملغي</span>}
        {needle && <span>{local(r.date).toLocaleDateString("ar",{
          day:"numeric",month:"long",year:"numeric"
        })}</span>}
      </span>
      <span className="wc-card-headline">
        <strong><bdi dir="auto">{jobName(r)}</bdi></strong>
        <bdi className="wc-time" dir="ltr">{timeLabel(r)}</bdi>
        <svg className="wc-fold-chevron" aria-hidden="true" viewBox="0 0 20 20"
          width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      </button>
      <div className="wc-actions wc-contact wc-quick-contact" role="group" aria-label={"تواصل وملاحة · "+jobName(r)}>
        {r.location ? <a className="wc-primary wc-icon-link" aria-label={"افتح موقع "+jobName(r)+" بويز"} title="ويز" href={r.location} target="_blank" rel="noreferrer"><QuickContactIcon kind="waze"/></a>
          : active ? <button className="wc-add-location" disabled={!ready || busy}
            onClick={()=>edit(r,true)}>أضف موقع ويز</button>
          : <small>الموقع بعده ناقص</small>}
        {r.phone && <><a className="wc-icon-link" aria-label={"واتساب "+jobName(r)} title="واتساب" href={"https://wa.me/"+r.phone.slice(1)} target="_blank" rel="noreferrer"><QuickContactIcon kind="whatsapp"/></a>
          <a className="wc-icon-link" aria-label={"اتصال بـ "+jobName(r)} title="اتصال" href={"tel:"+r.phone}><QuickContactIcon kind="phone"/></a></>}
      </div>
      </div>
      <div id={panelId} className="wc-card-body" hidden={!expanded}>
      {Object.keys(r.items || {}).length>0 && <ul className="wc-job-items" aria-label="الشغل المطلوب">
        {Object.entries(r.items).map(([type,q])=><li key={type}>
          {type}{q && <> × <bdi>{q}</bdi></>}
        </li>)}
      </ul>}
      {r.price && <div className="wc-card-price">
        <span>السعر المتفق عليه</span><strong><bdi dir="ltr">{money(cents(r.price))}</bdi></strong>
      </div>}
      {r.note && <p className="wc-card-note">{r.note}</p>}
      {active && <div className="wc-actions wc-work">
        <button disabled={!ready || busy || r.date>today()} onClick={()=>{
          const draft={r,price:r.price,paid:"",partial:false,method:"كاش",payDate:today()};
          initialDraft.current=JSON.stringify(draft);
          setCheckout(draft);
          say(""); dialog.current.scrollTop=0;
        }}>تم الشغل</button>
        <details className="wc-manage">
          <summary>إدارة الموعد</summary>
          <div>
            <button disabled={!ready || busy} onClick={()=>edit(r)}>تعديل الموعد</button>
            <button className="wc-cancel" disabled={!ready || busy} onClick={()=>cancel(r)}>إلغاء الموعد</button>
          </div>
        </details>
      </div>}
      </div>
    </article>;
  }
  const field=(key,title,type="text",attrs={})=><Field title={title}>
    <input type={type} value={form[key]} onChange={e=>set(key,e.target.value)} {...attrs}/></Field>;
  const paySet=(k,v)=>setCheckout(f=>({...f,[k]:v}));
  return <dialog ref={dialog} className="wc" data-form={!!(form || checkout)} dir="rtl" aria-label="مواعيد الشغل"
    onCancel={e=>{e.preventDefault();leave();}}>
    <header className="wc-row"><h2>{form ? (form.rev ? "تعديل الموعد" : "موعد جديد") :
      checkout ? "إنهاء الزيارة" : "مواعيد الشغل"}</h2>
      <button disabled={busy} onClick={leave}>{form || checkout ? "رجوع" : view==="اليوم" && returnDay ? "رجوع للتقويم" : "إغلاق"}</button></header>
    {loadError ? <p role="alert">{loadError} <button onClick={()=>setRetry(v=>v+1)}>إعادة المحاولة</button></p>
      : !ready && <p role="status">بانتظار الاتصال لعرض آخر التحديثات والحفظ.</p>}
    {form ? <form onSubmit={e=>{e.preventDefault();save();}}>
      <fieldset className="wc-form-scroll" disabled={busy}>
      <section className="wc-booking-section" aria-label="الزبون">
        <h3>الزبون</h3>
      {!form.rev && people.size>0 && <div className="wc-customer-picker">
        <Field title="زبون راجع؟">
          <input type="search" value={customerQuery} placeholder="ابحث بالبلد، رقم الزبون أو التلفون"
            onChange={e=>setCustomerQuery(e.target.value)} />
        </Field>
        {customerNeedle && <div className="wc-customer-results">
          {customerMatches.slice(0,6).map(name=>{
            const p=people.get(name);
            return <button type="button" key={name} onClick={()=>{
              setForm(f=>({...f,town:p.town,number:p.number,phone:p.phone || "",location:p.location || ""}));
              setCustomerQuery(""); say("");
            }}><bdi dir="auto">{name}</bdi><bdi dir="ltr">{p.phone}</bdi></button>;
          })}
          {customerMatches.length>6 && <small>في نتائج إضافية. اكتب كمان حرف أو رقم.</small>}
          {!customerMatches.length && <small>ما لقينا زبون مطابق. فيك تسجّله بخانات البلد والرقم تحت.</small>}
        </div>}
      </div>}
      <div className="wc-grid">{field("town","البلد","text",{list:"wc-towns",required:true,dir:"auto",placeholder:"اختار أو اكتب أي بلد"})}
        {field("number","رقم الزبون بالبلد","text",{inputMode:"numeric",placeholder:"0",required:true})}</div>
      <datalist id="wc-towns">{[...new Set([...towns,...rows.map(r=>r.town)])].map(t=><option key={t}>{t}</option>)}</datalist>
      </section>
      <section className="wc-booking-section" aria-label="الموعد والسعر">
        <h3>الموعد والسعر</h3>
      {field("date","يوم الزيارة","date",{required:true})}
      <div className="wc-grid">
        {field("start","الوصول من","time",{required:true})}
        {field("end","لغاية · اختياري","time")}
      </div>
      {field("price","السعر المتفق عليه ₪","text",{inputMode:"decimal"})}
      </section>
      <section className="wc-booking-section" aria-label="الموقع والتواصل">
        <h3>الموقع والتواصل</h3>
      {field("location","موقع البيت · رابط ويز","text",{dir:"ltr",ref:locationInput,placeholder:"https://www.waze.com/…"})}
      {field("phone","تلفون الزبون · اختياري","tel",{dir:"ltr"})}
      </section>
      <section className="wc-booking-section" aria-label="تفاصيل الشغل">
        <h3>تفاصيل الشغل</h3>
      <details open={Object.keys(form.items).length>0 || undefined}><summary>نوع الشغل والكمية · اختياري</summary>
        {services.map(type=><div className="wc-service" key={type}><label>
          <input type="checkbox" checked={type in form.items} onChange={e=>{
            const items={...form.items};if(e.target.checked)items[type]="";else delete items[type];set("items",items);
          }}/> {type}</label>
          {type in form.items && <input aria-label={"كمية "+type} inputMode="numeric" placeholder="الكمية"
            value={form.items[type]} onChange={e=>set("items",{...form.items,[type]:e.target.value})}/>}</div>)}
      </details>
      {field("note","ملاحظة · اختياري")}
      </section>
      </fieldset>
      <div className="wc-submit">
        {outdated && !busy && <div className="wc-stale" role="status">
          <span>الموعد تغيّر من وقت ما فتحته.</span>
          <button type="button" onClick={reloadVisit}>تحميل آخر نسخة</button>
        </div>}
        <button className="wc-primary wc-wide" disabled={!ready || busy || outdated}>
        {busy ? "جارٍ الحفظ…" : loadError ? "تعذّر الاتصال بالسجل" : !ready ? "بانتظار الاتصال…" : "حفظ الموعد"}</button></div>
    </form> : checkout ? <form onSubmit={e=>{e.preventDefault();finish();}}>
      <fieldset className="wc-form-scroll" disabled={busy}><h3 dir="auto">{jobName(checkout.r)}</h3>
      <Field title="سعر الشغلة النهائي ₪"><input required inputMode="decimal" value={checkout.price}
        onChange={e=>paySet("price",e.target.value)}/></Field>
      <Field title="طريقة القبض"><select value={checkout.method} onChange={e=>paySet("method",e.target.value)}>
        <option>كاش</option><option>تحويل</option></select></Field>
      <label><input type="checkbox" checked={checkout.partial} onChange={e=>paySet("partial",e.target.checked)}/>
        قبضنا جزء أو لسه ما قبضنا</label>
      {checkout.partial && <Field title="المبلغ المقبوض ₪"><input inputMode="decimal" placeholder="0"
        value={checkout.paid} onChange={e=>paySet("paid",e.target.value)}/></Field>}
      <Field title="يوم القبض"><input type="date" min={checkout.r.date} max={today()} value={checkout.payDate}
        onChange={e=>paySet("payDate",e.target.value)}/></Field>
      </fieldset>
      <div className="wc-submit">
        {outdated && !busy && <div className="wc-stale" role="status">
          <span>الموعد تغيّر من وقت ما فتحته.</span>
          <button type="button" onClick={reloadVisit}>تحميل آخر نسخة</button>
        </div>}
        <button className="wc-primary wc-wide" disabled={!ready || busy || outdated}>
        {busy ? "جارٍ التسجيل…" : loadError ? "تعذّر الاتصال بالسجل" : !ready ? "بانتظار الاتصال…" : "تأكيد وتسجيل بالدفتر"}</button></div>
      </form> : <>
      <div className="wc-tools">
        <button className="wc-primary" disabled={!ready} onClick={()=>edit(blank(date))}>+ موعد جديد</button>
        <button type="button" className="wc-search-toggle"
          aria-label={searchOpen ? "إغلاق البحث" : "بحث بالسجل"}
          title={searchOpen ? "إغلاق البحث" : "بحث بالسجل"}
          aria-expanded={searchOpen} onClick={()=>{
          setSearchOpen(!searchOpen); find("");
        }}><svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {searchOpen ? <path d="m6 6 12 12M18 6 6 18"/> :
            <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>}
        </svg></button>
      </div>
      <nav aria-label="طريقة عرض المواعيد">{["اليوم","الشهر"].map(v=>
        <button key={v} aria-pressed={v===view} onClick={()=>{if (v!==view) setReturnDay(null); setView(v);find("");setSearchOpen(false);}}>{v==="اليوم" ? "يوم" : v}</button>)}</nav>
      {!needle && <>
        <div className="wc-period-nav" dir="rtl">
          <button type="button" className="wc-period-prev"
            aria-label={view==="الشهر" ? "الشهر السابق" : "اليوم السابق"}
            onClick={()=>step(-1)}>السابق</button>

          <label className="wc-period-date" data-current={
            view==="الشهر" ? date.slice(0,7)===currentDay.slice(0,7) : date===currentDay
          }>
            <span className="wc-period-caption" aria-live="polite" aria-atomic="true">
              {view==="الشهر" ? <>
                {date.slice(0,7)===currentDay.slice(0,7) && <small>هالشهر</small>}
                <strong>{local(date).toLocaleDateString("ar",{month:"long",year:"numeric"})}</strong>
              </> : <>
                {date===currentDay ? <small>اليوم</small>
                  : date===shift(currentDay,1) ? <small>بكرا</small>
                  : date===shift(currentDay,2) ? <small>بعد بكرا</small> : null}
                <strong><bdi dir="ltr">{date.split("-").reverse().join("/")}</bdi></strong>
              </>}
            </span>
            <input type="date" value={date} aria-label="اختار تاريخ من التقويم"
              onClick={e=>{try { e.currentTarget.showPicker?.(); } catch {}}}
              onChange={e=>{if(e.target.value)setDate(e.target.value);}}/>
          </label>

          <button type="button" className="wc-period-next"
            aria-label={view==="الشهر" ? "الشهر التالي" : "اليوم التالي"}
            onClick={()=>step(1)}>التالي</button>
        </div>
        {(view==="الشهر" ? date.slice(0,7)!==currentDay.slice(0,7) : date!==currentDay) &&
          <button type="button" className="wc-period-reset" onClick={()=>setDate(currentDay)}>
            {view==="الشهر" ? "ارجع لهالشهر" : "ارجع لليوم"}
          </button>}
      </>}
      {searchOpen && <input autoFocus className="wc-wide wc-search" type="search"
        placeholder="اسم الزبون، البلد أو التلفون" aria-label="بحث بالسجل"
        value={search} onChange={e=>find(e.target.value)}/>} 
      {needle || view==="اليوم" ? <>
        {needle && <h3 className="wc-list-heading">نتائج البحث ({historyResults.length})</h3>}
        
        <div className={needle ? undefined : "wc-swipe-day"}
          onTouchStart={needle ? undefined : beginSwipe}
          onTouchEnd={needle ? undefined : finishSwipe}
          onTouchCancel={()=>{swipeStart.current=null;}}>
        {shown.length>0 && <div className="wc-card-options" role="group" aria-label="عرض المواعيد">
          <span>عرض المواعيد</span>
          <div>
            <button type="button" aria-pressed={!cardsOpen} onClick={()=>chooseCardMode(false)}>
              مضغوطة
            </button>
            <button type="button" aria-pressed={cardsOpen} onClick={()=>chooseCardMode(true)}>
              مفتوحة
            </button>
          </div>
        </div>}
        {needle ? historyResults.map(card) : <>
          {activeVisits.length>0 && <p className="wc-count">مواعيد متبقّية · {activeVisits.length}</p>}
          {activeVisits.map(card)}
          {finishedVisits.length>0 && <details className="wc-history-fold" key={date}
            open={activeVisits.length===0 || undefined}>
            <summary>الزيارات المنتهية والملغاة · {finishedVisits.length}</summary>
            {finishedVisits.map(card)}
          </details>}
        </>}{ready && !shown.length && <div className="wc-empty" role="status">
          <strong>{needle ? "ما لقينا موعد مطابق" : "هاليوم فاضي"}</strong>
          {needle && <button type="button" onClick={()=>find("")}>مسح البحث</button>}
          {!needle && <button type="button" onClick={()=>edit(blank(date))}>أضف أول موعد لهاليوم</button>}
        </div>}
        </div>
      </> : <>
        <section className="wc-month-panel" aria-label="تقويم الشهر">
          <div className="wc-month wc-month-readable" dir="rtl">
            {["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"].map(name=>
              <span className="wc-weekday-name" key={name}>{name}</span>
            )}
            {Array.from({length:local(from).getDay()},(_,i)=>
              <span aria-hidden="true" key={"gap"+i}/>
            )}
            {Array.from({length:local(shift(until,-1)).getDate()},(_,i)=>{
              const key = shift(from,i);
              const count = (byDate.get(key) || []).filter(r=>r.status!=="cancelled").length;
              const isToday = key===currentDay;
              return <button type="button" className="wc-month-date" key={key}
                data-booked={count>0} data-today={isToday}
                aria-current={isToday ? "date" : undefined}
                aria-label={[isToday ? "اليوم" : "",dateLabel(key),
                  count ? "عدد المواعيد " + count : "ما في مواعيد"].filter(Boolean).join("، ")}
                data-calendar-date={key} onClick={()=>openDayFromMonth(key)}>
                <span className="wc-date-number">{i+1}</span>
                <span className="wc-date-count-slot" aria-hidden="true">
                  {count>0 && <span className="wc-date-count">{count}</span>}
                </span>
              </button>;
            })}
          </div>
          <div className="wc-month-key" aria-hidden="true">
            <span><i className="wc-key-today"/>اليوم</span>
            <span><i className="wc-key-count">٢</i>عدد المواعيد</span>
          </div>
        </section></>}
    </>}
    {msg && <p className="wc-msg" role="status">{msg}</p>}
  </dialog>;
}
export default function WorkCalendar() {
  const [open,show]=useState(false);
  const uid=auth.currentUser?.uid;
  return <><button type="button" className="wc-launch" onClick={()=>show(true)}>مواعيد الشغل</button>
    {open && uid && <CalendarBody key={uid} uid={uid} close={()=>show(false)}/>}</>;
}
