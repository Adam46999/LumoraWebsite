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
function arrivalDayLabel(key, baseDay) {
  const relative = key===baseDay ? "اليوم"
    : key===shift(baseDay,1) ? "بكرا"
    : key===shift(baseDay,2) ? "بعد بكرا" : "";
  const [year,month,day] = key.split("-");
  return <>{relative && <>{relative} · </>}<bdi dir="ltr">{day}/{month}/{year}</bdi></>;
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
function CalendarBody({ uid, close }) {
  const [rows,setRows] = useState([]), [ready,setReady] = useState(false);
  const [loadError,setLoadError] = useState(""), [retry,setRetry] = useState(0);
  const [date,setDate] = useState(today), [view,setView] = useState("اليوم");
  const [form,setForm] = useState(null), [checkout,setCheckout] = useState(null);
  const [msg,say] = useState(""), [busy,setBusy] = useState(false), [search,find] = useState("");
  const [searchOpen,setSearchOpen] = useState(false);
  const [customerQuery,setCustomerQuery] = useState("");
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
  function leave() {
    if (lock.current) return;
    if ((form || checkout) && !window.confirm("ترجع للجدول وتترك التعديلات؟")) return;
    if (form || checkout) { setForm(null); setCheckout(null); say(""); }
    else close();
  }
  function edit(r, focusLocation = false) {
    locationFocus.current = focusLocation;
    setCustomerQuery("");
    setForm({...r,items:{...r.items}}); say(""); dialog.current.scrollTop=0;
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
  const week=shift(date,-local(date).getDay());
  const from=view==="الأسبوع" ? week : view==="الشهر" ? monthStart(date) : date;
  const until=view==="الأسبوع" ? shift(week,7) : view==="الشهر" ? monthStart(date,1) : shift(date,1);
  const dayRows = byDate.get(date) || [];
  const needle = calendarSearchText(search);
  const historyResults = useMemo(() => needle
    ? rows.filter(r => calendarMatches(r,needle,true)).reverse()
    : [],[rows,needle]);
  const shown = needle ? historyResults : dayRows;
  const currentDay = today();
  const next = (byDate.get(currentDay) || []).find(r => r.status === "booked");
  const activeVisits = dayRows.filter(r => r.status === "booked");
  const finishedVisits = dayRows.filter(r => r.status !== "booked");
  function go(key) { setDate(key); setView("اليوم"); find(""); setSearchOpen(false); }
  function step(n) {
    setDate(view==="الشهر" ? monthStart(date,n) : shift(date,n*(view==="الأسبوع"?7:1)));
  }
  function card(r) {
    const active=r.status==="booked";
    const upcoming = next?.id === r.id;
    return <article className="wc-card" key={r.id} data-next={upcoming} data-status={r.status}>
      <div className="wc-card-meta">
        {upcoming && <span className="wc-next">الزبون الجاي</span>}
        {r.status==="done" && <span>تم الشغل</span>}
        {r.status==="cancelled" && <span>ملغي</span>}
        {needle && <span>{local(r.date).toLocaleDateString("ar",{
          day:"numeric",month:"long",year:"numeric"
        })}</span>}
      </div>
      <div className="wc-row wc-card-title">
        <strong><bdi dir="auto">{jobName(r)}</bdi></strong>
        <bdi className="wc-time" dir="ltr">{timeLabel(r)}</bdi>
      </div>
      {Object.keys(r.items || {}).length>0 && <ul className="wc-job-items" aria-label="الشغل المطلوب">
        {Object.entries(r.items).map(([type,q])=><li key={type}>
          {type}{q && <> × <bdi>{q}</bdi></>}
        </li>)}
      </ul>}
      {r.price && <div className="wc-card-price">
        <span>السعر المتفق عليه</span><strong><bdi dir="ltr">{money(cents(r.price))}</bdi></strong>
      </div>}
      {r.note && <p className="wc-card-note">{r.note}</p>}
      <div className="wc-actions wc-contact">
        {r.location ? <a className="wc-primary" href={r.location} target="_blank" rel="noreferrer">افتح بويز</a>
          : active ? <button className="wc-add-location" disabled={!ready || busy}
            onClick={()=>edit(r,true)}>أضف موقع ويز</button>
          : <small>الموقع بعده ناقص</small>}
        {r.phone && <><a href={"https://wa.me/"+r.phone.slice(1)} target="_blank" rel="noreferrer">واتساب</a>
          <a href={"tel:"+r.phone}>اتصال</a></>}
      </div>
      {active && <div className="wc-actions wc-work">
        <button disabled={!ready || busy || r.date>today()} onClick={()=>{
          setCheckout({r,price:r.price,paid:"",partial:false,method:"كاش",payDate:today()});
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
    </article>;
  }
  const field=(key,title,type="text",attrs={})=><Field title={title}>
    <input type={type} value={form[key]} onChange={e=>set(key,e.target.value)} {...attrs}/></Field>;
  const paySet=(k,v)=>setCheckout(f=>({...f,[k]:v}));
  return <dialog ref={dialog} className="wc" data-form={!!(form || checkout)} dir="rtl" aria-label="مواعيد الشغل"
    onCancel={e=>{e.preventDefault();leave();}}>
    <header className="wc-row"><h2>{form ? (form.rev ? "تعديل الموعد" : "موعد جديد") :
      checkout ? "إنهاء الزيارة" : "مواعيد الشغل"}</h2>
      <button disabled={busy} onClick={leave}>{form || checkout ? "رجوع" : "إغلاق"}</button></header>
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
      <div className="wc-submit"><button className="wc-primary wc-wide" disabled={!ready || busy}>
        {busy ? "جارٍ الحفظ…" : "حفظ الموعد"}</button></div>
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
      <div className="wc-submit"><button className="wc-primary wc-wide" disabled={!ready || busy}>
        {busy ? "جارٍ التسجيل…" : "تأكيد وتسجيل بالدفتر"}</button></div>
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
      <nav aria-label="طريقة عرض المواعيد">{["اليوم","الأسبوع","الشهر"].map(v=>
        <button key={v} aria-pressed={v===view} onClick={()=>{setView(v);find("");setSearchOpen(false);}}>{v==="اليوم" ? "يوم" : v}</button>)}</nav>
      {!needle && view==="اليوم" && <div className="wc-day-controls">
        <button type="button" aria-label="اليوم السابق" title="اليوم السابق"
          onClick={()=>step(-1)}><span aria-hidden="true">❯</span></button>
        <label className="wc-date-picker">
          <span aria-live="polite">{arrivalDayLabel(date,currentDay)}</span>
          <input type="date" aria-label="اختار تاريخ الموعد" value={date}
            onClick={e=>{
              try { e.currentTarget.showPicker?.(); } catch {}
            }}
            onChange={e=>{if(e.target.value)setDate(e.target.value);}}/>
        </label>
        <button type="button" aria-label="اليوم التالي" title="اليوم التالي"
          onClick={()=>step(1)}><span aria-hidden="true">❮</span></button>
      </div>}
      {!needle && view!=="اليوم" && <div className="wc-controls"><button onClick={()=>step(-1)} aria-label="الفترة السابقة">‹</button>
        <input type="date" aria-label="تاريخ الجدول" value={date} onChange={e=>{if(e.target.value)setDate(e.target.value);}}/>
        <button onClick={()=>step(1)} aria-label="الفترة التالية">›</button>
        {date !== currentDay && <button onClick={()=>go(currentDay)}>ارجع لليوم</button>}</div>}
      {searchOpen && <input autoFocus className="wc-wide wc-search" type="search"
        placeholder="اسم الزبون، البلد أو التلفون" aria-label="بحث بالسجل"
        value={search} onChange={e=>find(e.target.value)}/>} 
      {needle || view==="اليوم" ? <>
        {needle && <h3 className="wc-list-heading">نتائج البحث ({historyResults.length})</h3>}
        {!needle && date!==currentDay && <button type="button" className="wc-back-today"
          onClick={()=>go(currentDay)}>ارجع لليوم</button>}
        <div className={needle ? undefined : "wc-swipe-day"}
          onTouchStart={needle ? undefined : beginSwipe}
          onTouchEnd={needle ? undefined : finishSwipe}
          onTouchCancel={()=>{swipeStart.current=null;}}>
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
      </> : view==="الأسبوع" ? Array.from({length:7},(_,i)=>{
        const key=shift(from,i), jobs=(byDate.get(key) || []).filter(r=>r.status!=="cancelled");
        return <button className="wc-day" data-empty={!jobs.length} key={key} onClick={()=>go(key)}><strong>{dateLabel(key)}</strong>
          {jobs.length ? jobs.map(r=><span className="wc-week-job" key={r.id}>
            <bdi dir="ltr">{timeLabel(r)}</bdi><bdi dir="auto">{jobName(r)}</bdi>
          </span>) : <span>فاضي</span>}</button>;
      }) : <><h3>{local(date).toLocaleDateString("ar",{month:"long",year:"numeric"})}</h3>
        <div className="wc-month">{["أحد","إثن","ثلا","أرب","خمي","جمع","سبت"].map(d=><small key={d}>{d}</small>)}
        {Array.from({length:local(from).getDay()},(_,i)=><span key={"gap"+i}/>)}
        {Array.from({length:local(shift(until,-1)).getDate()},(_,i)=>{
          const key=shift(from,i), count=(byDate.get(key) || []).filter(r=>r.status!=="cancelled").length;
          return <button key={key} data-today={key===currentDay} onClick={()=>go(key)} aria-label={dateLabel(key)+"، "+count+" مواعيد"}>
            {i+1}{count>0 && <small>{count}</small>}</button>;
        })}</div></>}
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
