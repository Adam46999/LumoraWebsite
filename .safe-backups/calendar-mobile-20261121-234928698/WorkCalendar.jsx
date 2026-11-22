import React, { useEffect, useRef, useState } from "react";
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
function CalendarBody({ uid, close }) {
  const [rows,setRows] = useState([]), [ready,setReady] = useState(false);
  const [loadError,setLoadError] = useState(""), [retry,setRetry] = useState(0);
  const [date,setDate] = useState(today), [view,setView] = useState("اليوم");
  const [form,setForm] = useState(null), [checkout,setCheckout] = useState(null);
  const [msg,say] = useState(""), [busy,setBusy] = useState(false), [search,find] = useState("");
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
  function edit(r) {
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
      setDate(r.date); setView("اليوم"); find("");
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
  const people=new Map();
  for (const r of [...rows].sort((a,b)=>(a.updatedAt||0)-(b.updatedAt||0)))
    people.set(jobName(r),r);
  const week=shift(date,-local(date).getDay());
  const from=view==="الأسبوع" ? week : view==="الشهر" ? monthStart(date) : date;
  const until=view==="الأسبوع" ? shift(week,7) : view==="الشهر" ? monthStart(date,1) : shift(date,1);
  const period=rows.filter(r=>r.date>=from && r.date<until);
  const needle=clean(search).toLowerCase();
  const shown=needle ? rows.filter(r=>[jobName(r),r.phone,r.note,Object.keys(r.items).join(" ")]
    .join(" ").toLowerCase().includes(needle)).reverse() : period;
  const next=rows.find(r=>r.date===today() && r.status==="booked");
  function go(key) { setDate(key); setView("اليوم"); find(""); }
  function step(n) {
    setDate(view==="الشهر" ? monthStart(date,n) : shift(date,n*(view==="الأسبوع"?7:1)));
  }
  function card(r) {
    const active=r.status==="booked";
    return <article className="wc-card" key={r.id} data-next={next?.id===r.id}>
      <div className="wc-row"><strong dir="auto">{jobName(r)}</strong><bdi>{timeLabel(r)}</bdi></div>
      <small>{dateLabel(r.date)}{next?.id===r.id ? " · الزبون الجاي" : ""}
        {r.status==="done" ? " · تم الشغل" : r.status==="cancelled" ? " · ملغي" : ""}</small>
      <p>{[Object.entries(r.items).map(([type,q])=>q ? type+" × "+q : type).join("، "),
        r.price ? money(cents(r.price)) : ""].filter(Boolean).join(" · ")}</p>
      {r.note && <p>{r.note}</p>}
      <div className="wc-actions">
        {r.location ? <a className="wc-primary" href={r.location} target="_blank" rel="noreferrer">افتح بويز</a>
          : <small>الموقع بعده ناقص</small>}
        {r.phone && <><a href={"https://wa.me/"+r.phone.slice(1)} target="_blank" rel="noreferrer">واتساب</a>
          <a href={"tel:"+r.phone}>اتصال</a></>}
      </div>
      {active && <div className="wc-actions">
        <button disabled={!ready || busy || r.date>today()} onClick={()=>{
          setCheckout({r,price:r.price,paid:"",partial:false,method:"كاش",payDate:today()});
          say(""); dialog.current.scrollTop=0;
        }}>تم الشغل</button>
        <button disabled={!ready || busy} onClick={()=>edit(r)}>تعديل الموعد</button>
        <button disabled={!ready || busy} onClick={()=>cancel(r)}>إلغاء الموعد</button>
      </div>}
    </article>;
  }
  const field=(key,title,type="text",attrs={})=><Field title={title}>
    <input type={type} value={form[key]} onChange={e=>set(key,e.target.value)} {...attrs}/></Field>;
  const paySet=(k,v)=>setCheckout(f=>({...f,[k]:v}));
  return <dialog ref={dialog} className="wc" dir="rtl" aria-label="مواعيد الشغل"
    onCancel={e=>{e.preventDefault();leave();}}>
    <header className="wc-row"><h2>{form ? (form.rev ? "تعديل الموعد" : "موعد جديد") :
      checkout ? "إنهاء الزيارة" : "مواعيد الشغل"}</h2>
      <button disabled={busy} onClick={leave}>{form || checkout ? "رجوع" : "إغلاق"}</button></header>
    {loadError ? <p role="alert">{loadError} <button onClick={()=>setRetry(v=>v+1)}>إعادة المحاولة</button></p>
      : !ready && <p role="status">بانتظار الاتصال لعرض آخر التحديثات والحفظ.</p>}
    {form ? <form onSubmit={e=>{e.preventDefault();save();}}>
      <fieldset disabled={busy}>
      {!form.rev && people.size>0 && <Field title="زبون راجع؟">
        <select defaultValue="" onChange={e=>{
          const p=people.get(e.target.value);
          if (p) setForm(f=>({...f,town:p.town,number:p.number,phone:p.phone,location:p.location}));
        }}><option value="">اختار من الزباين السابقين</option>
        {[...people.keys()].sort().map(k=><option key={k}>{k}</option>)}</select></Field>}
      <div className="wc-grid">{field("town","البلد","text",{list:"wc-towns",required:true,dir:"auto",placeholder:"اختار أو اكتب أي بلد"})}
        {field("number","رقم الزبون بالبلد","text",{inputMode:"numeric",placeholder:"0",required:true})}</div>
      <datalist id="wc-towns">{[...new Set([...towns,...rows.map(r=>r.town)])].map(t=><option key={t}>{t}</option>)}</datalist>
      {field("date","يوم الزيارة","date",{required:true})}
      <div className="wc-grid">
        {field("start","الوصول من","time",{required:true})}
        {field("end","لغاية · اختياري","time")}
      </div>
      {field("price","السعر المتفق عليه ₪","text",{inputMode:"decimal"})}
      {field("location","موقع البيت · الصق رابط Waze","text",{dir:"ltr",placeholder:"https://www.waze.com/…"})}
      {field("phone","تلفون الزبون · اختياري","tel",{dir:"ltr"})}
      <details open={Object.keys(form.items).length>0 || undefined}><summary>نوع الشغل والكمية · اختياري</summary>
        {services.map(type=><div className="wc-service" key={type}><label>
          <input type="checkbox" checked={type in form.items} onChange={e=>{
            const items={...form.items};if(e.target.checked)items[type]="";else delete items[type];set("items",items);
          }}/> {type}</label>
          {type in form.items && <input aria-label={"كمية "+type} inputMode="numeric" placeholder="الكمية"
            value={form.items[type]} onChange={e=>set("items",{...form.items,[type]:e.target.value})}/>}</div>)}
      </details>
      {field("note","ملاحظة · اختياري")}
      <button className="wc-primary wc-wide" disabled={!ready || busy}>حفظ الموعد</button>
      </fieldset>
    </form> : checkout ? <form onSubmit={e=>{e.preventDefault();finish();}}>
      <fieldset disabled={busy}><h3 dir="auto">{jobName(checkout.r)}</h3>
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
      <button className="wc-primary wc-wide" disabled={!ready || busy}>تأكيد وتسجيل بالدفتر</button>
      </fieldset></form> : <>
      <button className="wc-primary wc-wide" disabled={!ready} onClick={()=>edit(blank(date))}>+ موعد جديد</button>
      <nav aria-label="طريقة عرض المواعيد">{["اليوم","الأسبوع","الشهر"].map(v=>
        <button key={v} aria-pressed={v===view} onClick={()=>{setView(v);find("");}}>{v}</button>)}</nav>
      <div className="wc-controls"><button onClick={()=>step(-1)} aria-label="الفترة السابقة">‹</button>
        <input type="date" aria-label="تاريخ الجدول" value={date} onChange={e=>{if(e.target.value)setDate(e.target.value);}}/>
        <button onClick={()=>step(1)} aria-label="الفترة التالية">›</button>
        <button onClick={()=>go(today())}>اليوم</button></div>
      <input className="wc-wide" type="search" placeholder="ابحث بالسجلّ كله عن زبون أو بلد" aria-label="بحث بالسجل"
        value={search} onChange={e=>find(e.target.value)}/>
      {needle || view==="اليوم" ? <>
        <h3>{needle ? "نتائج البحث" : dateLabel(date)}</h3>
        {shown.map(card)}{ready && !shown.length && <p>{needle?"ما لقينا موعد مطابق.":"ما في مواعيد بهاليوم."}</p>}
      </> : view==="الأسبوع" ? Array.from({length:7},(_,i)=>{
        const key=shift(from,i), jobs=period.filter(r=>r.date===key && r.status!=="cancelled");
        return <button className="wc-day" key={key} onClick={()=>go(key)}><strong>{dateLabel(key)}</strong>
          <span>{jobs.length ? jobs.map(r=>timeLabel(r)+" · "+jobName(r)).join(" | ") : "ما في مواعيد"}</span></button>;
      }) : <><h3>{local(date).toLocaleDateString("ar",{month:"long",year:"numeric"})}</h3>
        <div className="wc-month">{["أحد","إثن","ثلا","أرب","خمي","جمع","سبت"].map(d=><small key={d}>{d}</small>)}
        {Array.from({length:local(from).getDay()},(_,i)=><span key={"gap"+i}/>)}
        {Array.from({length:local(shift(until,-1)).getDate()},(_,i)=>{
          const key=shift(from,i), count=period.filter(r=>r.date===key && r.status!=="cancelled").length;
          return <button key={key} onClick={()=>go(key)} aria-label={dateLabel(key)+"، "+count+" مواعيد"}>
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
