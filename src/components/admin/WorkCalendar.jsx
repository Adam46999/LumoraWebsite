import { createPortal } from "react-dom";
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
function MissingContactIcon({kind}) {
  return <span className={"wc-missing-icon wc-missing-"+kind} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {kind==="location" ? <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/>
        <circle cx="12" cy="10" r="2.3"/>
      </> : <path d="m7 3 3 4-2 2c1.4 2.9 3.1 4.6 6 6l2-2 4 3c.4.3.5.8.3 1.3l-1 2.3c-.3.7-1 1.1-1.8 1C10 19.7 4.3 14 3.4 6.5c-.1-.8.3-1.5 1-1.8l2-1c.2-.1.4-.1.6-.1Z"/>}
    </svg>
    <span className="wc-plus-mark">+</span>
  </span>;
}
const wheelHours=Array.from({length:24},(_,i)=>String(i).padStart(2,"0"));
const wheelMinutes=["00","30"];
const wheelStep=40;

function TimeWheel({label,values,wheelRef,index,onIndex}) {
  function choose(i) {
    const n=Math.max(0,Math.min(values.length-1,i));
    wheelRef.current.scrollTop=n*wheelStep;
    onIndex(n);
  }
  return <div className="wc-wheel-column">
    <span>{label}</span>
    <div className="wc-wheel-frame">
      <div className="wc-wheel-scroll" ref={wheelRef} role="spinbutton"
        tabIndex={0} aria-label={label} aria-valuemin={Number(values[0])}
        aria-valuemax={Number(values[values.length-1])} aria-valuenow={Number(values[index])}
        aria-valuetext={values[index]}
        onKeyDown={e=>{
          if(!["ArrowUp","ArrowDown","Home","End"].includes(e.key)) return;
          e.preventDefault();
          choose(e.key==="Home"?0:e.key==="End"?values.length-1:index+(e.key==="ArrowDown"?1:-1));
        }}
        onScroll={e=>onIndex(Math.max(0,Math.min(values.length-1,
          Math.round(e.currentTarget.scrollTop/wheelStep))))}>
        {values.map((v,i)=><div key={v} aria-hidden="true" data-selected={i===index}
          onClick={()=>choose(i)}>{v}</div>)}
      </div>
    </div>
  </div>;
}

function HalfHourField({title,value,placeholder,onPick,buttonRef,optional=false,after=""}) {
  const popup=useRef(null), hours=useRef(null), minutes=useRef(null);
  const [h,setH]=useState(0),[m,setM]=useState(0),[error,setError]=useState("");
  function open() {
    const now=new Date();
    const seed=value || after || (String(now.getHours()).padStart(2,"0")+":00");
    let slot=Number(seed.slice(0,2))*2+(Number(seed.slice(3,5))>=30?1:0);
    if(!value && after) slot=Math.min(47,slot+1);
    const hi=Math.floor(slot/2),mi=slot%2;
    setH(hi);setM(mi);setError("");
    popup.current.showModal();
    hours.current.scrollTop=hi*wheelStep;
    minutes.current.scrollTop=mi*wheelStep;
  }
  function confirm() {
    const hi=Math.min(23,Math.max(0,Math.round(hours.current.scrollTop/wheelStep)));
    const mi=Math.min(1,Math.max(0,Math.round(minutes.current.scrollTop/wheelStep)));
    const time=wheelHours[hi]+":"+wheelMinutes[mi];
    if(after && time<=after){setError("وقت النهاية لازم يكون بعد وقت الوصول.");return;}
    popup.current.close();onPick(time);
  }
  return <div className="wc-book-picker wc-book-picker-time">
    <span className="wc-picker-label">{title}</span>
    <button type="button" ref={buttonRef} className="wc-picker-box wc-clock-trigger"
      data-filled={!!value} aria-haspopup="dialog" aria-label={title+"، "+(value||placeholder)} onClick={open}>
      <span className="wc-picker-value">{value?<bdi dir="ltr">{value}</bdi>:placeholder}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
      </svg>
    </button>
    <dialog ref={popup} className="wc-hour-dialog" aria-label={title}
      onCancel={e=>{e.preventDefault();e.stopPropagation();popup.current.close();}}
      onClick={e=>{
        if(e.target!==e.currentTarget)return;
        const b=e.currentTarget.getBoundingClientRect();
        if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)popup.current.close();
      }}>
      <div className="wc-wheel-title">
        <strong>{title}</strong>
        <bdi dir="ltr" className="wc-wheel-preview">{wheelHours[h]}:{wheelMinutes[m]}</bdi>
      </div>
      <div className="wc-wheel-pair" dir="rtl">
        <TimeWheel label="الساعة" values={wheelHours} wheelRef={hours} index={h}
          onIndex={i=>{setH(i);setError("");}}/>
        <TimeWheel label="الدقائق" values={wheelMinutes} wheelRef={minutes} index={m}
          onIndex={i=>{setM(i);setError("");}}/>
      </div>
      {error && <p role="alert">{error}</p>}
      <div className="wc-wheel-actions">
        <button type="button" className="wc-primary" onClick={confirm}>تم</button>
        <button type="button" onClick={()=>popup.current.close()}>إلغاء</button>
      </div>
      {optional && value && <button type="button" className="wc-hour-clear"
        onClick={()=>{popup.current.close();onPick("");}}>مسح وقت النهاية</button>}
    </dialog>
  </div>;
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
function BookingTown({value, names, onChange}) {
  const [manual,setManual] = useState(false);
  const other = manual || (!!value && !names.includes(value));
  return <div className="wc-town-field">
    <Field title="البلد">
      <select required value={other ? "__other__" : value} onChange={e=>{
        const custom = e.target.value === "__other__";
        setManual(custom);
        onChange(custom ? "" : e.target.value);
      }}>
        <option value="" disabled>اختار البلد</option>
        {names.map(name=><option key={name} value={name}>{name}</option>)}
        <option value="__other__">بلد ثانية…</option>
      </select>
    </Field>
    {other && <Field title="اسم البلد">
      <input type="text" required dir="auto" autoFocus={manual}
        value={value} placeholder="اكتب اسم البلد" onChange={e=>onChange(e.target.value)}/>
      <small className="wc-town-hint">لهالموعد بس</small>
    </Field>}
  </div>;
}

function CalendarTownSettings({uid,names,available,onClose}) {
  const modal = useRef(null);
  const saving = useRef(false);
  const input = useRef(null);
  const [editing,setEditing] = useState(null);
  const [value,setValue] = useState("");
  const [pending,setPending] = useState(false);
  const [adding,setAdding] = useState(false);
  const [failed,setFailed] = useState(false);
  const addButton = useRef(null);
  const editButtons = useRef(new Map());

  useEffect(()=>{
    if (adding || editing !== null) {
      const field=input.current;
      if (!field) return;
      field.focus({preventScroll:true});
      field.select();
      field.closest("form")?.scrollIntoView({block:"nearest"});
    }
  },[adding,editing]);

  function focusAction(name) {
    requestAnimationFrame(()=>{
      (editButtons.current.get(name) || addButton.current)?.focus({preventScroll:true});
    });
  }

  const inEditor = adding || editing !== null;
  const backdropStart = useRef(false);

  function stopEdit() {
    if (saving.current) return;
    const changed = clean(value) !== (editing ?? "");
    if (changed && !window.confirm("ترجع لقائمة البلاد وتترك التغيير بدون حفظ؟")) return;
    setAdding(false);
    setEditing(null);
    setValue("");
    setFeedback("");
    setFailed(false);
    focusAction(editing);
  }

  const [feedback,setFeedback] = useState("");
  useEffect(()=>{
    const node = modal.current;
    const opener = document.activeElement;
    node.showModal();
    return ()=>{
      node.close();
      if (opener instanceof HTMLElement && opener.isConnected)
        opener.focus({preventScroll:true});
    };
  },[]);

  function leaveTownSheet() {
    if (saving.current) return;
    if (inEditor) stopEdit();
    else onClose();
  }

  function outsideSheet(event) {
    if (event.target !== event.currentTarget) return false;
    const box = event.currentTarget.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right ||
      event.clientY < box.top || event.clientY > box.bottom;
  }

  async function apply(action,oldName) {
    if (saving.current || !available) return;
    const nextName = clean(value);
    if (action !== "remove" && (!nextName || nextName === "__other__")) {
      setFailed(true); setFeedback("اكتب اسم بلد صالح."); input.current?.focus(); return;
    }
    if (action === "remove" && !window.confirm("تشيل " + oldName + " من خيارات الحجز؟ المواعيد القديمة بتضل محفوظة.")) return;
    saving.current = true;
    setPending(true); setFailed(false);
    setFeedback("");
    try {
      const ref = doc(db,"lumora_calendar",uid,"settings","towns");
      await runTransaction(db,async tx=>{
        const snapshot = await tx.get(ref);
        const list = snapshot.exists() ? snapshot.data().names : towns;
        if (!Array.isArray(list)) throw Error("تعذّر قراءة قائمة البلاد.");
        if (oldName !== null && !list.includes(oldName))
          throw Error("القائمة تغيّرت من جهاز ثاني. اختار البلد من جديد.");
        if (action !== "remove" && list.some(name=>name !== oldName && clean(name) === nextName))
          throw Error("هالبلد موجودة بالقائمة.");
        const updated = action === "remove" ? list.filter(name=>name !== oldName) :
          action === "rename" ? list.map(name=>name === oldName ? nextName : name) :
          [...list,nextName];
        tx.set(ref,{names:updated});
      });
      setAdding(false); setEditing(null); setValue("");
      focusAction(action === "remove" ? null : nextName);
      setFeedback(action === "remove" ? "انشالت البلد من الخيارات." :
        action === "rename" ? "تم تعديل اسم البلد." : "انضافت البلد للخيارات.");
    } catch (e) {
      setFailed(true); setFeedback(e.code ? "تعذّر حفظ إعدادات البلاد. افحص الاتصال وصلاحية الإعدادات." : e.message);
    } finally { saving.current=false; setPending(false); }
  }

  function editor(name) {
    const isNew = name === null;
    return <form className="wc-town-editor" onSubmit={e=>{
      e.preventDefault();
      apply(isNew ? "add" : "rename",name);
    }}>
      <label htmlFor="wc-town-edit-input">{isNew ? "اسم البلد الجديدة" : "تعديل اسم البلد"}</label>
      <input id="wc-town-edit-input" ref={input} type="text" dir="auto" required
        value={value} disabled={pending} onChange={e=>setValue(e.target.value)}
        placeholder="اكتب اسم البلد" enterKeyHint="done"/>
      <div className="wc-town-edit-actions">
        <button className="wc-town-save" type="submit"
          disabled={!available || pending || !value.trim()}>
          {pending ? "جارٍ الحفظ…" : isNew ? "إضافة" : "حفظ"}
        </button>
        <button type="button" disabled={pending} onClick={stopEdit}>إلغاء</button>
        {!isNew && <button type="button" className="wc-town-delete"
          disabled={!available || pending} onClick={()=>apply("remove",name)}>إزالة من الخيارات</button>}
      </div>
    </form>;
  }

  return <dialog ref={modal} className="wc-town-settings wc-town-sheet" dir="rtl"
    aria-labelledby="wc-settings-title"
    onCancel={e=>{e.preventDefault(); leaveTownSheet();}}
    onPointerDown={e=>{backdropStart.current=outsideSheet(e);}}
    onPointerCancel={()=>{backdropStart.current=false;}}
    onClick={e=>{
      const dismiss = backdropStart.current && outsideSheet(e);
      backdropStart.current=false;
      if (dismiss) leaveTownSheet();
    }}>
    <header>
      <h2 id="wc-settings-title">إعدادات المواعيد</h2>
      <button type="button" className="wc-town-close" disabled={pending}
        aria-label={inEditor ? "رجوع لقائمة البلاد" : "إغلاق إعدادات المواعيد"}
        onClick={leaveTownSheet}>{inEditor ? "رجوع" : "إغلاق"}</button>
    </header>

    <div className="wc-town-list-heading">
      <h3>بلاد الحجز <small>{names.length}</small></h3>
      {!adding && editing === null && <button type="button" ref={addButton}
        className="wc-town-add" disabled={!available} onClick={()=>{
          setValue(""); setFeedback(""); setFailed(false); setAdding(true);
        }}>+ إضافة بلد</button>}
    </div>

    {adding && editor(null)}
    {!available && <p role="status">بانتظار الاتصال بإعدادات البلاد.</p>}
    <p className="wc-town-feedback" role="status" data-error={failed}>{feedback}</p>

    <ul className="wc-town-list">{names.map(name=><li key={name}>
      {editing === name ? editor(name) : <>
        <bdi dir="auto">{name}</bdi>
        <button type="button" className="wc-town-pencil"
          ref={node=>{if(node) editButtons.current.set(name,node); else editButtons.current.delete(name);}}
          title={"تعديل "+name} aria-label={"تعديل "+name}
          disabled={!available || pending || adding || editing !== null}
          onClick={()=>{setValue(name);setFeedback("");setFailed(false);setEditing(name);}}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"
            fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
            <path d="m15 5 4 4M4 20l4-1 12-12a2.8 2.8 0 0 0-4-4L4 15z"/>
          </svg>
        </button>
      </>}
    </li>)}</ul>
    {editing !== null && !names.includes(editing) && <div role="status">
      تغيّرت هالبلد من جهاز ثاني.
      <button type="button" disabled={pending} onClick={stopEdit}>رجوع للقائمة</button>
    </div>}
    {!names.length && !adding && available && <p>القائمة فاضية. فيك تضيف أول بلد.</p>}
  </dialog>;
}

function CalendarBody({ uid, close, embedded=false, leaveGuard, schedulePosition, actionHost }) {
  const Surface=embedded ? "section" : "dialog";
  // lumora-draggable-fab-toast-v1
  const fabMove=useRef(null);
  const fabIgnoreClick=useRef(false);
  const [fabPosition,setFabPosition]=useState(()=>{
    try {
      const saved=JSON.parse(localStorage.getItem("lumora-calendar-fab-v1"));
      return Number.isFinite(saved?.x)&&Number.isFinite(saved?.y)
        ? saved : null;
    } catch { return null; }
  });

  const clampFab=(x,y)=>({
    x:Math.max(10,Math.min(x,window.innerWidth-74)),
    y:Math.max(85,Math.min(y,window.innerHeight-154))
  });

  useEffect(()=>{
    if(!fabPosition) return;
    const resize=()=>setFabPosition(p=>{
      if(!p) return p;
      const n=clampFab(p.x,p.y);
      return p.x===n.x&&p.y===n.y ? p : n;
    });
    window.addEventListener("resize",resize);
    resize();
    return ()=>window.removeEventListener("resize",resize);
  },[]);

  function fabPointerDown(e) {
    if(e.button!==0 || actionMenuOpen ||
       !e.target.closest('[aria-haspopup="true"]')) return;
    const button=e.target.closest('[aria-haspopup="true"]');
    const rect=button.getBoundingClientRect();
    fabMove.current={
      pointerId:e.pointerId,
      startX:e.clientX,startY:e.clientY,
      x:rect.left,y:rect.top,
      moved:false
    };
    fabIgnoreClick.current=false;
    try {e.currentTarget.setPointerCapture(e.pointerId);} catch {}
  }
  function fabPointerMove(e) {
    const s=fabMove.current;
    if(!s || s.pointerId!==e.pointerId) return;
    const dx=e.clientX-s.startX,dy=e.clientY-s.startY;
    if(!s.moved && Math.hypot(dx,dy)<9) return;
    s.moved=true;
    fabIgnoreClick.current=true;
    setFabPosition(clampFab(s.x+dx,s.y+dy));
  }
  function fabPointerEnd(e) {
    const s=fabMove.current;
    if(!s || s.pointerId!==e.pointerId) return;
    fabMove.current=null;
    if(!s.moved) return;
    const pos=clampFab(
      s.x+e.clientX-s.startX,
      s.y+e.clientY-s.startY
    );
    setFabPosition(pos);
    try {localStorage.setItem("lumora-calendar-fab-v1",
      JSON.stringify(pos));} catch {}
    setActionMenuOpen(false);
  }

  const [bookingTowns,setBookingTowns] = useState(towns);
  const [townsReady,setTownsReady] = useState(false);
  const [settingsOpen,setSettingsOpen] = useState(false);
  const [rows,setRows] = useState([]), [ready,setReady] = useState(false);
  const [loadError,setLoadError] = useState(""), [retry,setRetry] = useState(0);
  useEffect(()=>{
    setTownsReady(false);
    return onSnapshot(doc(db,"lumora_calendar",uid,"settings","towns"),
      {includeMetadataChanges:true}, snap=>{
        const list = snap.exists() ? snap.data().names : towns;
        const valid = Array.isArray(list) && list.every(name=>typeof name==="string" && name.trim());
        if (valid) setBookingTowns(list);
        setTownsReady(valid && !snap.metadata.fromCache);
      },()=>setTownsReady(false));
  },[uid,retry]);

  const [date,setDate] = useState(()=>schedulePosition?.current?.date || today());
  const [view,setView] = useState(()=>"الشهر");
  React.useLayoutEffect(()=>{
    if (schedulePosition) schedulePosition.current={date,view,pickerOrigin:pickerOrigin.current};
  },[schedulePosition,date,view]);
  const [form,setForm] = useState(null), [checkout,setCheckout] = useState(null);
  // lumora-dedicated-postpone-v2
  const [postpone,setPostpone] = useState(null);
  const [postponeMonth,setPostponeMonth] = useState(null);
  const [msg,say] = useState(""), [busy,setBusy] = useState(false), [search,find] = useState("");
  const [searchOpen,setSearchOpen] = useState(false);

  useEffect(()=>{
    if(msg?.kind!=="postponed" || !msg.id ||
       view!=="اليوم" || date!==msg.date) return;

    const frame=requestAnimationFrame(()=>{
      const cards=dialog.current?.querySelectorAll(
        ".wc-card[data-postponed='true']"
      );
      const card=cards?.[0];
      if(!card) return;

      const rect=card.getBoundingClientRect();
      const topLimit=130;
      const bottomLimit=window.innerHeight-105;

      if(rect.top>bottomLimit || rect.bottom<topLimit) {
        card.scrollIntoView({
          behavior:window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block:"nearest"
        });
      }
    });

    return ()=>cancelAnimationFrame(frame);
  },[msg,date,view,rows]);

  const [actionMenuOpen,setActionMenuOpen] = useState(false);
  const [section,setSection] = useState("appointments");
  const [historyFilter,setHistoryFilter] = useState("all");
  const inHistory = section === "history";

  function selectSection(value) {
    if (value === section) return;
    setSection(value);
    setSearchOpen(false);
    find("");
    say("");
  }

  const pickerOrigin=useRef(schedulePosition?.current?.pickerOrigin || null);
  const [returnDay,setReturnDay] = useState(null);
  const focusAfterReturn = useRef(null);
  const focusDayHeader = useRef(false);
  const [customerQuery,setCustomerQuery] = useState("");
  const [contactOpen,setContactOpen] = useState(false);
  const [jobOpen,setJobOpen] = useState(false);
  const cardsOpen = false;
  const [cardExceptions,setCardExceptions] = useState(() => new Set());

  function setGroupExpanded(group,open) {
    setCardExceptions(previous=>{
      const updated=new Set(previous);
      for (const row of group) {
        if (open===cardsOpen) updated.delete(row.id);
        else updated.add(row.id);
      }
      return updated;
    });
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
  const contactFocus = useRef(null);
  const arrivalInput = useRef(null);
  const locationInput = useRef(null);
  const phoneInput = useRef(null);
  React.useLayoutEffect(() => {
    if (!form || !contactFocus.current) return;
    const input = contactFocus.current==="phone" ? phoneInput.current : locationInput.current;
    contactFocus.current=null;
    if (input) {
      input.focus({preventScroll:true});
      input.scrollIntoView({block:"center"});
    }
  },[form]);
  const lock = useRef(false), dialog = useRef(null);
  useEffect(() => {
    if (embedded) return;
    const el=dialog.current;
    el.showModal();
    return ()=>el.close();
  },[embedded]);
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

  React.useLayoutEffect(()=>{
    if (!leaveGuard) return;
    leaveGuard.current=()=>{
      if (lock.current) return false;
      const draft=form || checkout || postpone;
      return !draft || JSON.stringify(draft)===initialDraft.current ||
        window.confirm("تترك التغييرات وتنتقل من المواعيد؟");
    };
    return ()=>{leaveGuard.current=null;};
  },[leaveGuard,form,checkout]);
  function leave() {
    if (lock.current) return;
    const draft=form || checkout;
    if (draft && JSON.stringify(draft)!==initialDraft.current &&
        !window.confirm("ترجع للجدول وتترك التعديلات؟")) return;
    if (form || checkout) { setForm(null); setCheckout(null); say(""); }
    else if (!inHistory && view==="اليوم" && returnDay) {
      focusAfterReturn.current=returnDay;
      setDate(returnDay);
      setView("الشهر");
      setReturnDay(null);
      setSearchOpen(false);
      find("");
      say("");
    } else close();
  }

  function beginPostpone(r) {
    if (!ready || busy || r.status !== "booked") return;

    setPostpone({
      original:r,
      date:r.date,
      start:r.start
    });

    setPostponeMonth(monthStart(r.date));
    setSearchOpen(false);
    say("");
    dialog.current?.scrollTo?.({top:0});
  }

  function savePostpone() {
    if (!postpone || busy || !ready) return;

    act(async()=>{
      const p=postpone;
      const old=p.original;

      if (!/^\d{4}-\d{2}-\d{2}$/.test(p.date) ||
          dayKey(local(p.date))!==p.date)
        throw Error("اختار تاريخ صحيح.");

      if (!/^([01]\d|2[0-3]):(00|30)$/.test(p.start || ""))
        throw Error("اختار ساعة صحيحة من العجلة.");

      if (p.date<today())
        throw Error("ما بنقدر نأجّل لتاريخ فات.");

      if (p.date===old.date && p.start===old.start)
        throw Error("اختار موعد مختلف عن القديم.");

      const minutes=t=>{
        const [h,m]=t.split(":").map(Number);
        return h*60+m;
      };

      if (p.date===today()) {
        const nowParts=new Intl.DateTimeFormat("en-GB",{
          timeZone:"Asia/Jerusalem",
          hour:"2-digit",minute:"2-digit",hourCycle:"h23"
        }).formatToParts(new Date());

        const value=k=>Number(nowParts.find(x=>x.type===k).value);
        const currentMinute=value("hour")*60+value("minute");

        if (minutes(p.start)<=currentMinute)
          throw Error("اختار ساعة لسه ما مرقت.");
      }

      const oldDuration=old.end
        ? minutes(old.end)-minutes(old.start) : 0;

      if (oldDuration<0)
        throw Error("وقت نهاية الموعد القديم غير صحيح.");

      const finishMinute=minutes(p.start)+oldDuration;

      if (finishMinute>=1440)
        throw Error("نهاية الموعد بتتجاوز نهاية اليوم.");

      const newEnd=old.end
        ? String(Math.floor(finishMinute/60)).padStart(2,"0")+
          ":"+String(finishMinute%60).padStart(2,"0")
        : "";

      const candidateEnd=newEnd
        ? minutes(newEnd) : minutes(p.start)+30;

      const conflict=rows.some(r=>{
        if (r.id===old.id || r.status!=="booked" ||
            r.date!==p.date) return false;

        const start=minutes(r.start);
        const end=r.end ? minutes(r.end) : start+30;

        return minutes(p.start)<end && start<candidateEnd;
      });

      if (conflict)
        throw Error("في دور ثاني بنفس الوقت. اختار وقت غيره.");

      await runTransaction(db,async tx=>{
        const ref=refFor(old.id);
        const latest=(await tx.get(ref)).data();

        check(latest,old);

        const history=Array.isArray(latest.reschedules)
          ? latest.reschedules : [];

        tx.update(ref,{
          date:p.date,
          start:p.start,
          end:newEnd,
          reschedules:[...history,{
            fromDate:latest.date,
            fromStart:latest.start,
            fromEnd:latest.end || "",
            toDate:p.date,
            toStart:p.start,
            toEnd:newEnd,
            at:Date.now()
          }],
          rev:latest.rev+1,
          updatedAt:Date.now()
        });
      });

      setCardExceptions(previous=>{
        const next=new Set(previous);
        next.add(old.id);
        return next;
      });

      setPostpone(null);
      setPostponeMonth(null);
      setDate(p.date);
      setView("اليوم");
      setSection("appointments");

      return {
        kind:"postponed",
        id:old.id,
        name:jobName(old),
        date:p.date,
        time:p.start
      };
    });
  }

  function edit(r, focusField = null) {
    setContactOpen(Boolean(focusField || r.phone || r.location));
    setJobOpen(Boolean(r.note || Object.keys(r.items || {}).length));
    contactFocus.current = focusField;
    setCustomerQuery("");
    const draft={...r,items:{...r.items}};
    initialDraft.current=JSON.stringify(draft);
    setForm(draft); say(""); dialog.current.scrollTop=0;
  }
  function set(key,val) { setForm(f => ({...f,[key]:val})); say(""); }
  async function act(fn, success) {
    if (lock.current || !ready) return;
    lock.current=true; setBusy(true); say("");
    try { const notice=await fn(); setForm(null); setCheckout(null); say(notice ?? success); }
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
      setSection("appointments"); setDate(r.date); setView("اليوم"); find(""); setSearchOpen(false);
      return {kind:"saved",edited:!!r.rev,name:jobName(r),date:r.date,time:timeLabel(r)};
    });
  }
  function deleteCancelledAppointment(r) {
    const details = jobName(r) + " · " + r.date.split("-").reverse().join("/") + " · " + timeLabel(r);
    if (!window.confirm("حذف الموعد نهائيًا؟\n" + details +
      "\nرح ينحذف من السجل وما بتقدر تسترجعه.")) return;

    act(async () => {
      const ref = refFor(r.id);
      await runTransaction(db, async tx => {
        const snapshot = await tx.get(ref);
        if (!snapshot.exists()) throw Error("الموعد انحذف من قبل.");
        const current = snapshot.data();
        if (current.status !== "cancelled" || current.rev !== r.rev)
          throw Error("حالة الموعد تغيّرت. راجع الموعد قبل الحذف.");
        tx.delete(ref);
      });
    }, "تم حذف موعد " + details + " نهائيًا.");
  }

  function restoreAppointment(r) {
    const details = jobName(r)+" · "+r.date.split("-").reverse().join("/")+" · "+timeLabel(r);
    const question = r.date<today()
      ? "تاريخ الموعد فات. ترجّعه بنفس تاريخه الأصلي؟"
      : "ترجّع الموعد للجدول بنفس التاريخ والساعة؟";
    if (!window.confirm(question+"\n"+details)) return;

    act(async()=>{
      const ref=refFor(r.id);
      await runTransaction(db,async tx=>{
        const old=(await tx.get(ref)).data();
        if (!old || old.status!=="cancelled" || old.rev!==r.rev)
          throw Error("الموعد تغيّر. راجع حالته بالجدول.");
        tx.update(ref,{status:"booked",rev:old.rev+1,updatedAt:Date.now()});
      });
      go(r.date);
    },"تم استرجاع موعد "+details);
  }

  function cancel(r) {
    if (!window.confirm("تأكيد إلغاء موعد " + jobName(r) + "؟ رح يضل ظاهر بالسجل.")) return;
    act(async () => {
      const ref=refFor(r.id);
      await runTransaction(db,async tx => {
        check((await tx.get(ref)).data(),r);
        tx.update(ref,{status:"cancelled",rev:r.rev+1,updatedAt:Date.now()});
      });
    } ,{kind:"cancelled",name:jobName(r),date:r.date,time:timeLabel(r)});
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
    },"تم إنهاء الموعد وحفظ قيد الشغل والقبض في دفتر الحسابات.");
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
  const searchResults = useMemo(() => {
    if (!inHistory && !needle) return [];
    const matches = rows.filter(r => {
      if (inHistory) {
        if (r.status !== "done" && r.status !== "cancelled") return false;
        if (historyFilter !== "all" && r.status !== historyFilter) return false;
      } else if (r.status !== "booked") return false;
      return !needle || calendarMatches(r, needle, true);
    });
    return inHistory ? matches.reverse() : matches;
  }, [rows, needle, inHistory, historyFilter]);
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
  const groupRows = inHistory || needle ? searchResults : activeVisits;
  const groupOpen = groupRows.length>0 && groupRows.every(r=>cardExceptions.has(r.id));

  function groupLabel() {
    const n=groupRows.length;
    if (needle) return "نتائج البحث ("+n+")";
    if (inHistory) return "الزيارات ("+n+")";
    const count=n===1 ? "موعد" : n===2 ? "موعدان" :
      n+" "+(n>=3 && n<=10 ? "مواعيد" : "موعد");
    if (date<currentDay) return count+" بحاجة لمراجعة";
    if (date===currentDay) return n===2 ? "باقي موعدين" : "باقي "+count;
    if (n===1) return "موعد واحد مجدول";
    if (n===2) return "موعدان مجدولان";
    return count;
  }
  function go(key) { setSection("appointments"); setDate(key); setView("اليوم"); find(""); setSearchOpen(false); }
  function browseCalendarMonth() {
    pickerOrigin.current=date;
    setReturnDay(null);
    find("");setSearchOpen(false);say("");setView("الشهر");
  }
  function closeCalendarMonth() {
    go(pickerOrigin.current || date);
    pickerOrigin.current=null;
  }
  function card(r) {
    const active=r.status==="booked";
    const upcoming = next?.id === r.id;
    const expanded = cardExceptions.has(r.id) ? !cardsOpen : cardsOpen;
    const panelId = "wc-appointment-details-" + r.id;
    return <article className="wc-card" key={r.id} data-next={upcoming} data-status={r.status}
      data-postponed={msg?.kind==="postponed" && msg.id===r.id}>
      <div className="wc-card-top">
      <button type="button" className="wc-card-toggle"
        aria-expanded={expanded} aria-controls={panelId}
        onClick={()=>toggleCard(r.id)}>
      {(upcoming || !active || needle) && <span className="wc-visit-meta">
        {upcoming && <span className="wc-visit-next">الجاي</span>}
        {r.status==="done" && <span className="wc-visit-done">تمّ الشغل</span>}
        {r.status==="cancelled" && <span className="wc-visit-cancelled">ملغي</span>}
        {(inHistory || needle) && <time dateTime={r.date}>
          {local(r.date).toLocaleDateString("ar",{day:"numeric",month:"short",year:"numeric"})}
        </time>}
      </span>}
      <span className="wc-visit-line" dir="rtl">
        <bdi className="wc-visit-time" dir="ltr">{timeLabel(r)}</bdi>
        <strong className="wc-visit-client"><bdi dir="auto">{jobName(r)}</bdi></strong>
        <svg className="wc-fold-chevron" aria-hidden="true" viewBox="0 0 20 20"
          width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      </button>
      {(active || (expanded && r.status==="done" && (r.location || r.phone))) && <div className="wc-actions wc-contact wc-quick-contact" role="group" aria-label={"تواصل وملاحة · "+jobName(r)}>
        {r.location ? <a className="wc-primary wc-icon-link" aria-label={"افتح موقع "+jobName(r)+" بويز"} title="ويز" href={r.location} target="_blank" rel="noreferrer"><QuickContactIcon kind="waze"/></a>
          : active ? <button className="wc-add-location" disabled={!ready || busy}
            title="أضف موقع ويز" aria-label={"أضف موقع ويز لـ "+jobName(r)}
            onClick={()=>edit(r,"location")}><MissingContactIcon kind="location"/></button>
          : null}
        {r.phone && <><a className="wc-icon-link" aria-label={"واتساب "+jobName(r)} title="واتساب" href={"https://wa.me/"+r.phone.slice(1)} target="_blank" rel="noreferrer"><QuickContactIcon kind="whatsapp"/></a>
          <a className="wc-icon-link" aria-label={"اتصال بـ "+jobName(r)} title="اتصال" href={"tel:"+r.phone}><QuickContactIcon kind="phone"/></a></>}
        {!r.phone && active && <button type="button" className="wc-add-phone"
          disabled={!ready || busy} aria-label={"أضف تلفون لـ "+jobName(r)}
          title="أضف تلفون" onClick={()=>edit(r,"phone")}><MissingContactIcon kind="phone"/></button>}
      </div>}
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
      {r.status==="cancelled" && <div className="wc-cancelled-actions" dir="rtl">
        <button type="button" className="wc-restore-action" disabled={!ready || busy}
          onClick={()=>restoreAppointment(r)}>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="m14 4 5 5-5 5M19 9h-8a6 6 0 0 0 0 12"/>
          </svg>
          <span>استرجاع الموعد</span>
        </button>
        <button type="button" className="wc-delete-action" disabled={!ready || busy}
          onClick={()=>deleteCancelledAppointment(r)}>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 6h18M9 6V4h6v2M6 6l1 14h10l1-14M10 10v6m4-6v6"/>
          </svg>
          <span>حذف نهائي</span>
        </button>
      </div>}
      {active && <div className="wc-actions wc-work">
        <button disabled={!ready || busy || r.date>today()} onClick={()=>{
          const draft={r,price:r.price,paid:"",partial:false,method:"كاش",payDate:today()};
          initialDraft.current=JSON.stringify(draft);
          setCheckout(draft);
          say(""); dialog.current.scrollTop=0;
        }}>تم الشغل</button>
        {/* lumora-appointment-actions-icons-v1 */}
<details className="wc-manage">
          <summary>إدارة الموعد</summary>
          <div className="wc-manage-choice-grid">
            <button type="button" disabled={!ready || busy}
    onClick={()=>beginPostpone(r)} data-action="postpone"><span className="wc-manage-choice-icon"><svg aria-hidden="true" viewBox="0 0 24 24"
      width="21" height="21" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="3"/>
      <path d="M7 3v4m10-4v4M3 10h18"/>
      <circle cx="15.5" cy="16" r="3.5" fill="currentColor"
        stroke="none" opacity=".12"/>
      <path d="M15.5 13.5v2.5l1.5 1"/>
    </svg></span><span className="wc-manage-choice-label">تأجيل الموعد</span></button>
<button disabled={!ready || busy} onClick={()=>edit(r)} data-action="edit"><span className="wc-manage-choice-icon"><svg aria-hidden="true" viewBox="0 0 24 24"
      width="21" height="21" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16 4a2.2 2.2 0 0 1 3.1 3.1L9 17.2 5 18l.8-4L16 4Z"/>
      <path d="m14.5 5.5 4 4"/>
    </svg></span><span className="wc-manage-choice-label">تعديل الموعد</span></button>
            <button className="wc-cancel" disabled={!ready || busy} onClick={()=>cancel(r)} data-action="cancel"><span className="wc-manage-choice-icon"><svg aria-hidden="true" viewBox="0 0 24 24"
      width="21" height="21" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M10 3h4l1 4H9l1-4Z"/>
      <path d="m6 7 1 13h10l1-13M10 11v5m4-5v5"/>
    </svg></span><span className="wc-manage-choice-label">إلغاء الموعد</span></button>
          </div>
        </details>
      </div>}
      </div>
    </article>;
  }
  const field=(key,title,type="text",attrs={})=><Field title={title}>
    <input type={type} value={form[key]} onChange={e=>set(key,e.target.value)} {...attrs}/></Field>;
  function bookingPicker(key,title,type,placeholder,attrs={}) {
    const value=form[key] || "";
    const display=type==="date" && value
      ? local(value).toLocaleDateString("ar",{weekday:"long",day:"numeric",month:"long",year:"numeric"})
      : value;
    return <label className={"wc-book-picker wc-book-picker-"+type}>
      <span className="wc-picker-label">{title}</span>
      <span className="wc-picker-box" data-filled={!!value}>
        <span aria-hidden="true" className="wc-picker-value">
          {type==="time" && value ? <bdi dir="ltr">{value}</bdi> : display || placeholder}
        </span>
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          {type==="date" ? <>
            <rect x="3" y="5" width="18" height="16" rx="3"/>
            <path d="M7 3v4m10-4v4M3 10h18"/>
          </> : <>
            <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
          </>}
        </svg>
        <input type={type} aria-label={title} value={value}
          onChange={e=>set(key,e.target.value)}
          onClick={e=>{try { e.currentTarget.showPicker?.(); } catch {}}}
          {...attrs}/>
      </span>
    </label>;
  }
  const paySet=(k,v)=>setCheckout(f=>({...f,[k]:v}));
  const calendarTopActions=<div className="wc-top-actions">
    <button type="button" className="wc-settings-launch" title="إعدادات المواعيد"
      aria-label="إعدادات المواعيد" onClick={()=>setSettingsOpen(true)}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 7h7m4 0h5M4 17h2m4 0h10"/>
        <circle cx="13" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>
      </svg>
    </button>
    
  </div>;
  return <Surface ref={dialog} className="wc" data-embedded={embedded} data-form={!!(form || checkout || postpone)} dir="rtl" aria-label="مواعيد الشغل"
    onCancel={e=>{e.preventDefault();leave();}}>
    {(!embedded || form || checkout || postpone || (!inHistory && view==="اليوم" && returnDay)) && <header data-admin-step="" className="wc-row"><h2>{postpone ? "تأجيل موعد" : form ? (form.rev ? "تعديل الموعد" : "موعد جديد") :
      checkout ? "إنهاء الزيارة" : embedded && !inHistory && returnDay ? "مواعيد اليوم المختار" : "مواعيد الشغل"}</h2>
      {(!embedded || form || checkout || (!inHistory && view==="اليوم" && returnDay)) && <button disabled={busy} onClick={()=>{if(postpone){setPostpone(null);setPostponeMonth(null);say("");}else leave();}}>{form || checkout || postpone ? "رجوع" : !inHistory && view==="اليوم" && returnDay ? "رجوع للتقويم" : "إغلاق"}</button>}</header>}
    {loadError ? <p role="alert">{loadError} <button onClick={()=>setRetry(v=>v+1)}>إعادة المحاولة</button></p>
      : !ready && <p role="status">بانتظار الاتصال لعرض آخر التحديثات والحفظ.</p>}
    
{postpone ? <section className="wc-postpone-v2" dir="rtl">
  <div className="wc-postpone-info">
    <strong>تأجيل موعد <bdi dir="auto">{jobName(postpone.original)}</bdi></strong>
    <span>الموعد القديم: {dateLabel(postpone.original.date)}،
      الساعة <bdi dir="ltr">{postpone.original.start}</bdi></span>
  </div>

  <h3>اختر اليوم الجديد</h3>

  <div className="wc-postpone-month-nav">
    <button type="button"
      onClick={()=>setPostponeMonth(d=>monthStart(d,-1))}>
      الشهر السابق
    </button>
    <strong>{local(postponeMonth).toLocaleDateString("ar",{
      month:"long",year:"numeric"
    })}</strong>
    <button type="button"
      onClick={()=>setPostponeMonth(d=>monthStart(d,1))}>
      الشهر التالي
    </button>
  </div>

  <div className="wc-postpone-grid">
    {["الأحد","الإثنين","الثلاثاء","الأربعاء",
      "الخميس","الجمعة","السبت"].map(name=>
      <span key={name} className="wc-postpone-weekday">{name}</span>
    )}

    {Array.from({length:local(postponeMonth).getDay()},(_,i)=>
      <span key={"gap"+i} aria-hidden="true"/>
    )}

    {Array.from({
      length:local(shift(monthStart(postponeMonth,1),-1)).getDate()
    },(_,i)=>{
      const key=shift(postponeMonth,i);

      return <button type="button" key={key}
        className="wc-postpone-day"
        disabled={key<today()}
        data-selected={key===postpone.date}
        data-old={key===postpone.original.date}
        data-today={key===today()}
        aria-pressed={key===postpone.date}
        aria-label={dateLabel(key)}
        onClick={()=>{
          setPostpone(p=>({...p,date:key}));
          say("");
        }}>
        <strong>{i+1}</strong>
        {key===postpone.original.date &&
          <small>قديم</small>}
        {key===postpone.date &&
          key!==postpone.original.date &&
          <small>جديد</small>}
      </button>;
    })}
  </div>

  <div className="wc-postpone-time">
    <h3>اختر الساعة الجديدة</h3>
    <HalfHourField
      title="الساعة والدقائق"
      value={postpone.start}
      placeholder="اختار الوقت"
      onPick={value=>{
        setPostpone(p=>({...p,start:value}));
        say("");
      }}/>
  </div>

  <div className="wc-postpone-result">
    <span>الموعد الجديد</span>
    <strong>{dateLabel(postpone.date)}،
      الساعة <bdi dir="ltr">{postpone.start}</bdi></strong>
  </div>

  <div className="wc-postpone-buttons">
    <button type="button" className="wc-primary"
      disabled={!ready || busy ||
        (postpone.date===postpone.original.date &&
         postpone.start===postpone.original.start)}
      onClick={savePostpone}>
      {busy ? "جارٍ حفظ التأجيل…" : "حفظ التأجيل"}
    </button>

    <button type="button" disabled={busy}
      onClick={()=>{
        setPostpone(null);
        setPostponeMonth(null);
        say("");
      }}>
      رجوع بدون حفظ
    </button>
  </div>
</section> : form ? <form className="wc-fast-booking" onSubmit={e=>{e.preventDefault();save();}}>
      <fieldset className="wc-form-scroll" disabled={busy}>
      <section className="wc-booking-section" aria-label="الزبون">
        <h3>الزبون</h3>
      {!form.rev && people.size>0 && <details className="wc-returning-option"
        onToggle={e=>{
          const section=e.currentTarget;
          if (section.open) section.querySelector('input[type="search"]')?.focus();
          else setCustomerQuery("");
        }}>
        <summary>زبون راجع؟</summary>
        <div className="wc-customer-picker">
        <Field title="ابحث عن زبون سابق">
          <input type="search" value={customerQuery} placeholder="ابحث بالبلد، رقم الزبون أو التلفون"
            onChange={e=>setCustomerQuery(e.target.value)} />
        </Field>
        {customerNeedle && <div className="wc-customer-results">
          {customerMatches.slice(0,6).map(name=>{
            const p=people.get(name);
            return <button type="button" key={name} onClick={e=>{
              const section=e.currentTarget.closest("details");
              if (section) {
                section.open=false;
                section.querySelector("summary")?.focus();
              }
              setForm(f=>({...f,town:p.town,number:p.number,phone:p.phone || "",location:p.location || ""}));
              setContactOpen(Boolean(p.phone || p.location));
              setCustomerQuery(""); say("");
            }}><bdi dir="auto">{name}</bdi><bdi dir="ltr">{p.phone}</bdi></button>;
          })}
          {customerMatches.length>6 && <small>في نتائج إضافية. اكتب كمان حرف أو رقم.</small>}
          {!customerMatches.length && <small>ما لقينا زبون مطابق. فيك تسجّله بخانات البلد والرقم تحت.</small>}
        </div>}
        </div>
      </details>}
      <div className="wc-grid wc-customer-identifiers"><BookingTown key={form.id} value={form.town} names={bookingTowns} onChange={name=>set("town",name)}/>
        {field("number","رقم الزبون بالبلد","text",{
          inputMode:"numeric",placeholder:"0",required:true,enterKeyHint:"next",
          onKeyDown:e=>{
            if (e.key!=="Enter" || e.nativeEvent.isComposing) return;
            e.preventDefault();
            if (e.currentTarget.reportValidity()) arrivalInput.current?.focus();
          }
        })}</div>

      </section>
      <section className="wc-booking-section" aria-label="الموعد والسعر">
        <h3>الموعد والسعر</h3>
      {bookingPicker("date","يوم الزيارة","date","اختَر التاريخ",{required:true})}
      <div className="wc-book-time-pair">
        <HalfHourField title="من الساعة" value={form.start} placeholder="اختَر الوقت"
          buttonRef={arrivalInput} onPick={time=>set("start",time)}/>
        <HalfHourField title="لغاية · اختياري" value={form.end} placeholder="أضف وقت نهاية"
          optional after={form.start} onPick={time=>set("end",time)}/>
      </div>
      <div className="wc-book-price-row">
        {field("price","السعر المتفق عليه ₪","text",{inputMode:"decimal",dir:"ltr",placeholder:"0.00"})}
      </div>
      </section>
      <section className="wc-booking-section wc-extra-section" aria-label="الموقع والتواصل">
        <button type="button" className="wc-extra-toggle" aria-expanded={contactOpen}
          aria-controls="wc-book-contact" onClick={()=>setContactOpen(v=>!v)}>
          <span>{form.location || form.phone ? "الموقع والتلفون" : "إضافة موقع أو تلفون"}</span>
          <span aria-hidden="true">{contactOpen ? "−" : "+"}</span>
        </button>
        <div id="wc-book-contact" hidden={!contactOpen}>
      {field("location","رابط ويز · اختياري","text",{dir:"ltr",ref:locationInput,placeholder:"https://www.waze.com/…"})}
      {field("phone","تلفون الزبون · اختياري","tel",{dir:"ltr",ref:phoneInput,inputMode:"tel"})}
        </div>
      </section>
      <section className="wc-booking-section wc-extra-section" aria-label="تفاصيل الشغل">
        <button type="button" className="wc-extra-toggle" aria-expanded={jobOpen}
          aria-controls="wc-book-job" onClick={()=>setJobOpen(v=>!v)}>
          <span>تفاصيل الشغل وملاحظة</span><span aria-hidden="true">{jobOpen ? "−" : "+"}</span>
        </button>
        <div id="wc-book-job" hidden={!jobOpen}>
        {services.map(type=><div className="wc-service" key={type}><label>
          <input type="checkbox" checked={type in form.items} onChange={e=>{
            const items={...form.items};if(e.target.checked)items[type]="";else delete items[type];set("items",items);
          }}/> {type}</label>
          {type in form.items && <input aria-label={"كمية "+type} inputMode="numeric" placeholder="الكمية"
            value={form.items[type]} onChange={e=>set("items",{...form.items,[type]:e.target.value})}/>}</div>)}
      {field("note","ملاحظة · اختياري")}
        </div>
      </section>
      </fieldset>
      <div className="wc-submit">
        {outdated && !busy && <div className="wc-stale" role="status">
          <span>الموعد تغيّر من وقت ما فتحته.</span>
          <button type="button" onClick={reloadVisit}>تحميل آخر نسخة</button>
        </div>}
        <div className="wc-booking-actions">
          <button type="submit" className="wc-primary wc-wide" disabled={!ready || busy || outdated}>
        {busy ? "جارٍ الحفظ…" : loadError ? "تعذّر الاتصال بالسجل" : !ready ? "بانتظار الاتصال…" : "حفظ الموعد"}</button>
          <button type="button" className="wc-booking-back" disabled={busy} onClick={leave}>رجوع</button>
        </div></div>
    </form> : checkout ? <form onSubmit={e=>{e.preventDefault();finish();}}>
      <fieldset className="wc-form-scroll" disabled={busy}><h3 dir="auto">{jobName(checkout.r)}</h3>
      <Field title="سعر الشغلة النهائي ₪"><input required inputMode="decimal" value={checkout.price}
        onChange={e=>paySet("price",e.target.value)}/></Field>
      <div className="wc-checkout-primary">
        <strong className="wc-checkout-section-title">كيف دفع الزبون؟</strong>
        <div className="wc-checkout-methods" role="group" aria-label="طريقة القبض">
          {["كاش","تحويل"].map(method=><button
            type="button"
            key={method}
            className="wc-checkout-method"
            aria-pressed={checkout.method===method}
            onClick={()=>paySet("method",method)}>
            <span aria-hidden="true">{method==="كاش" ? "💵" : "🏦"}</span>
            <strong>{method==="كاش" ? "كاش" : "تحويل بنكي"}</strong>
          </button>)}
        </div>
        <div className="wc-checkout-receipt" role="status">
          <span>القبض المعتمد</span>
          <strong>{checkout.partial ? "دفع غير كامل" : "المبلغ كامل"}</strong>
        </div>
        <p className="wc-checkout-wallet-note">
  الكاش والتحويل البنكي الاثنين بينسجّلوا في الصندوق.
  طريقة القبض بتنحفظ مع الدفعة حتى تقدر تراجعها بالدفتر.
</p>
      </div>

      <div className="wc-finance-preview-v2" role="note">
  <strong>شو رح يصير عند التأكيد؟</strong>
  <span>
    رح ينتهي الموعد، وينحفظ قيد الشغل بالدفتر،
    ورح يتسجّل القبض في الصندوق.
  </span>
  <span>
    طريقة الدفع: <b>{checkout.method}</b>
    {" · "}
    {checkout.partial ? "الدفع غير كامل" : "المبلغ كامل"}
  </span>
  <small>
    التسجيل النهائي بصير مع إنهاء الموعد بنفس عملية الحفظ.
  </small>
</div>
      <details className="wc-checkout-extra">
        <summary>خيارات إضافية · دفع جزئي أو تغيير التاريخ</summary>
        <div className="wc-checkout-extra-body">
          <label className="wc-checkout-partial">
            <input type="checkbox" checked={checkout.partial}
              onChange={e=>paySet("partial",e.target.checked)}/>
            <span>الزبون ما دفع المبلغ كامل</span>
          </label>
          {checkout.partial && <Field title="المبلغ المقبوض فعليًا ₪">
            <input inputMode="decimal" placeholder="0"
              value={checkout.paid}
              onChange={e=>paySet("paid",e.target.value)}/>
          </Field>}
          <Field title="تاريخ القبض">
            <input type="date" min={checkout.r.date} max={today()}
              value={checkout.payDate}
              onChange={e=>paySet("payDate",e.target.value)}/>
          </Field>
        </div>
      </details>
      </fieldset>
      <div className="wc-submit">
        {outdated && !busy && <div className="wc-stale" role="status">
          <span>الموعد تغيّر من وقت ما فتحته.</span>
          <button type="button" onClick={reloadVisit}>تحميل آخر نسخة</button>
        </div>}
        <button className="wc-primary wc-wide" disabled={!ready || busy || outdated}>
        {busy ? "جارٍ التسجيل…" : loadError ? "تعذّر الاتصال بالسجل" : !ready ? "بانتظار الاتصال…" : "إنهاء الشغل وتسجيل الحسابات"}</button></div>
      </form> : <>
      {embedded && actionHost ? createPortal(calendarTopActions,actionHost) : calendarTopActions}
      {msg?.kind==="saved" && <div className="wc-saved-notice">
        <span className="wc-saved-check" aria-hidden="true">✓</span>
        <div role="status" aria-atomic="true">
          <strong>{msg.edited ? "تم تعديل موعد" : "انحفظ موعد"} <bdi dir="auto">{msg.name}</bdi></strong>
          <small>{local(msg.date).toLocaleDateString("ar",{weekday:"long",day:"numeric",month:"long"})}
            {" · "}<bdi dir="ltr">{msg.time}</bdi></small>
        </div>
        <button type="button" aria-label="إخفاء تأكيد الحفظ" onClick={()=>say("")}>×</button>
      </div>}
      {settingsOpen && <CalendarTownSettings uid={uid} names={bookingTowns}
        available={townsReady} onClose={()=>setSettingsOpen(false)}/>}

      
      <div className="wc-section-heading" dir="rtl">
        <h3>{inHistory ? "سجل الزيارات" : "الأدوار"}</h3>
        <button type="button" className="wc-section-shortcut"
          onClick={()=>selectSection(inHistory ? "appointments" : "history")}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17"
            fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round">
            {inHistory ? <path d="M4 12h15m-6-6 6 6-6 6"/> : <>
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 7v5l3 2"/>
            </>}
          </svg>
          <span>{inHistory ? "رجوع للأدوار" : "السجل"}</span>
        </button>
      </div>
      {inHistory && <div className="wc-record-filters" role="group" aria-label="حالة الزيارة">
        {[["all","الكل"],["done","تمّ الشغل"],["cancelled","ملغي"]].map(([value,label]) =>
          <button key={value} type="button" aria-pressed={historyFilter===value}
            onClick={()=>setHistoryFilter(value)}>{label}</button>)}
      </div>}
      {!inHistory && !needle && <>
        <div className="wc-fixed-toolbar" dir="rtl">
          <button type="button" className="wc-calendar-toggle"
            aria-pressed={view==="الشهر"}
            title={view==="الشهر" ? "رجوع للمواعيد" : "فتح الرزنامة"}
            aria-label={view==="الشهر" ? "رجوع للمواعيد" : "فتح الرزنامة"}
            onClick={view==="الشهر" ? closeCalendarMonth : browseCalendarMonth}>
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="3"/>
              <path d="M7 3v4m10-4v4M3 10h18"/>
              <path d="M8 14h2m4 0h2"/>
            </svg>
          </button>
          {view==="اليوم" ? <div className="wc-day-strip">
            <button type="button" onClick={()=>setDate(d=>shift(d,-1))}>اليوم السابق</button>
            <span className="wc-selected-date" aria-live="polite" aria-atomic="true">
              {date===currentDay ? <small>اليوم</small> :
                date===shift(currentDay,1) ? <small>بكرا</small> :
                date===shift(currentDay,2) ? <small>بعد بكرا</small> : null}
              <strong className="wc-open-day-label">{dateLabel(date)}</strong><small className="wc-open-day-count">{activeVisits.length === 0 ? "ما في أدوار" : activeVisits.length === 1 ? "موعد واحد" : "عدد الأدوار: " + activeVisits.length}</small>
            </span>
            <button type="button" onClick={()=>setDate(d=>shift(d,1))}>اليوم التالي</button>
          </div> : <div className="wc-month-caption">
            <small>اختَر يومًا</small>
            <strong aria-live="polite">{local(date).toLocaleDateString("ar",{month:"long",year:"numeric"})}</strong>
          </div>}
        </div>
        {view==="اليوم" && date!==currentDay && <button type="button" className="wc-period-reset"
          onClick={()=>go(currentDay)}>ارجع لليوم</button>}
      </>}
      {searchOpen && <input autoFocus className="wc-wide wc-search" type="search"
        placeholder={inHistory ? "ابحث في السجل" : "ابحث بالأدوار من كل التواريخ"}
        aria-label={inHistory ? "بحث بالسجل" : "بحث بالأدوار من كل التواريخ"}
        value={search} onChange={e=>find(e.target.value)}/>} 

      {/* lumora-postpone-confirmation-v1 */}
      {msg?.kind==="postponed" &&
        !inHistory && !needle && view==="اليوم" &&
        date===msg.date && (
        <section className="wc-postpone-confirm"
          dir="rtl" role="status" aria-live="polite">
          <span className="wc-postpone-confirm-check"
            aria-hidden="true">✓</span>

          <div className="wc-postpone-confirm-content">
            <strong>تم تأجيل الموعد</strong>
            <span>
              <bdi dir="auto">{msg.name}</bdi>
            </span>
            <small>
              {dateLabel(msg.date)}
              {" · "}
              <bdi dir="ltr">{msg.time}</bdi>
            </small>
            <span className="wc-postpone-confirm-hint">
              تفاصيل الموعد الجديد مفتوحة تحت
            </span>
          </div>

          <button type="button"
            className="wc-postpone-confirm-close"
            aria-label="إغلاق تأكيد التأجيل"
            onClick={()=>say("")}>×</button>
        </section>
      )}

      {inHistory || needle || view==="اليوم" ? <>
        <div className={!inHistory && !needle ? "wc-swipe-day" : undefined}
          onTouchStart={!inHistory && !needle ? beginSwipe : undefined}
          onTouchEnd={!inHistory && !needle ? finishSwipe : undefined}
          onTouchCancel={()=>{swipeStart.current=null;}}>
          {groupRows.length>0 && <div className="wc-list-bar">
            <h3 className={date===currentDay && !needle && !inHistory
  ? "wc-remaining-title" : undefined}>
  {date===currentDay && !needle && !inHistory ? <>
    <span className="wc-remaining-number"
      aria-hidden="true">{groupRows.length}</span>
    <span className="wc-remaining-copy">
      <strong>
        {groupRows.length===1 ? "موعد متبقّي" :
          "مواعيد متبقّية"}
      </strong>
      <small>اليوم</small>
    </span>
  </> : groupLabel()}
</h3>
            {groupRows.length>1 && <button type="button"
              onClick={()=>setGroupExpanded(groupRows,!groupOpen)}>
              {groupOpen ? "طيّ الكل" : "فتح الكل"}
            </button>}
          </div>}
          {groupRows.map(card)}
          {ready && !groupRows.length && <div className="wc-empty"
            data-empty-day={!inHistory && !needle} role="status">
            <strong>{needle ? "ما لقينا موعد مطابق" :
              inHistory ? (historyFilter==="done" ? "ما في زيارات منتهية" :
                historyFilter==="cancelled" ? "ما في مواعيد ملغية" : "السجل فاضي") :
                date===currentDay ? "ما في أدوار اليوم" : "ما في أدوار بهالتاريخ"}</strong>
            {needle ? <button type="button" onClick={()=>find("")}>مسح البحث</button> :
              !inHistory && null}
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
              const count = (byDate.get(key) || []).filter(r=>r.status==="booked").length;
              const isToday = key===currentDay;
              return <button type="button" className="wc-month-date" key={key}
                data-booked={count>0} data-today={isToday}
                aria-current={isToday ? "date" : undefined}
                aria-label={[isToday ? "اليوم" : "",dateLabel(key),
                  count ? "عدد المواعيد " + count : "ما في مواعيد"].filter(Boolean).join("، ")}
                data-selected={key===date} data-today={key===today()}
                data-calendar-date={key} onClick={()=>openDayFromMonth(key)}>
                <span className="wc-date-number">{i+1}</span>
                <span className="wc-date-count-slot" aria-hidden="true">
                  {count>0 && <span className="wc-date-count">{count}</span>}
                </span>
              </button>;
            })}
          </div>
          <div className="wc-month-paging" dir="rtl" role="group" aria-label="التنقل بين الشهور">
            <button type="button" onClick={()=>setDate(d=>monthStart(d,-1))}>الشهر السابق</button>
            <button type="button" onClick={()=>setDate(d=>monthStart(d,1))}>الشهر التالي</button>
          </div>
          <div className="wc-month-key" aria-hidden="true">
            <span><i className="wc-key-today"/>اليوم</span>
            <span><i className="wc-key-count">٢</i>عدد المواعيد</span>
          </div>
        </section></>}
    </>}
    {msg?.kind==="cancelled" ? <div className="wc-cancel-notice">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"
        fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9"/>
        <path d="m8 12 2.5 2.5 5.5-5.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div role="status" aria-atomic="true">
        <strong>تم إلغاء موعد <bdi dir="auto">{msg.name}</bdi></strong>
        <small><bdi dir="ltr">{msg.date.split("-").reverse().join("/")}</bdi>
          <span aria-hidden="true"> · </span><bdi dir="ltr">{msg.time}</bdi></small>
      </div>
      <button type="button" aria-label="إخفاء رسالة الإلغاء" onClick={()=>say("")}>×</button>
    </div> : typeof msg==="string" && msg && <p className="wc-msg" role="status">{msg}</p>}
    
    
    {!form && !checkout && !postpone && !settingsOpen && <div
      className="wc-unified-action-menu"
      dir="rtl"
      data-draggable-position={Boolean(fabPosition)}
      style={fabPosition ? {
        "--fab-x":clampFab(fabPosition.x,fabPosition.y).x+"px",
        "--fab-y":clampFab(fabPosition.x,fabPosition.y).y+"px"
      } : undefined}
      onPointerDown={fabPointerDown}
      onPointerMove={fabPointerMove}
      onPointerUp={fabPointerEnd}
      onPointerCancel={()=>{fabMove.current=null;}}
      onClickCapture={e=>{
        if(fabIgnoreClick.current){
          fabIgnoreClick.current=false;
          e.preventDefault();
          e.stopPropagation();
        }
      }}>

      {actionMenuOpen && <>
        <button
          type="button"
          className="wc-menu-backdrop"
          aria-label="إغلاق قائمة الإجراءات"
          onClick={()=>setActionMenuOpen(false)}
        />

        <div className="wc-menu-options">
          <button
            type="button"
            className="wc-menu-option"
            disabled={!ready || busy}
            onClick={()=>{
              setActionMenuOpen(false);
              edit(blank(date));
            }}>
            <span className="wc-menu-label">إضافة موعد</span>
            <span className="wc-menu-option-icon" aria-hidden="true">+</span>
          </button>

          <button
            type="button"
            className="wc-menu-option"
            onClick={()=>{
              setActionMenuOpen(false);
              setSearchOpen(v=>!v);
              find("");
            }}>
            <span className="wc-menu-label">
              {searchOpen ? "إغلاق البحث" : "بحث بالأدوار"}
            </span>
            <span className="wc-menu-option-icon" aria-hidden="true">
              {searchOpen ? "×" :
                <svg width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round">
                  <circle cx="10.5" cy="10.5" r="6.5"/>
                  <path d="m16 16 5 5"/>
                </svg>}
            </span>
          </button>
        </div>
      </>}

      <button
        type="button"
        className="wc-menu-main"
        aria-label={actionMenuOpen ? "إغلاق الإجراءات" : "فتح إجراءات المواعيد"}
        aria-expanded={actionMenuOpen}
        aria-haspopup="true"
        onClick={()=>setActionMenuOpen(v=>!v)}>
        <span aria-hidden="true">{actionMenuOpen ? "×" : "+"}</span>
      </button>
    </div>}
  </Surface>;
}
export default function WorkCalendar({embedded=false,leaveGuard,onHome,schedulePosition,actionHost}={}) {
  const [open,show]=useState(false);
  const uid=auth.currentUser?.uid;
  if (embedded) return uid ? <CalendarBody uid={uid} close={onHome} actionHost={actionHost} embedded leaveGuard={leaveGuard} schedulePosition={schedulePosition}/> : null;
  return <><button type="button" className="wc-launch" onClick={()=>show(true)}>مواعيد الشغل</button>
    {open && uid && <CalendarBody key={uid} uid={uid} close={()=>show(false)}/>}</>;
}
