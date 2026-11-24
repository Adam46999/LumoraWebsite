import { useLayoutEffect as useGalleryLayoutEffect } from "react";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import ServiceImagesManager from "./ServiceImagesManager";
import { preparePhoto, savePair, saveGalleryOrder } from "./gallery";

const button = "min-h-12 rounded-xl border px-4 py-2 font-bold disabled:opacity-50";
const primary = button + " bg-slate-900 text-white";
const sides = [["before", "قبل"], ["after", "بعد"]];

function galleryRules(uid) {
  return [
    "match /lumora_gallery/{pairId} {",
    '  function manager() { return request.auth != null && request.auth.uid == "' + uid + '"; }',
    "  function validSide(v) {",
    '    return v is string && v.size() <= 200000 && (v == "" || v.matches("data:image/jpeg;base64,[A-Za-z0-9+/=]+"));',
    "  }",
    "  function validPair() {",
    "    let d = request.resource.data;",
    '    return d.keys().hasAll(["before","after","rev"])',
    '      && d.keys().hasOnly(["before","after","rev"])',
    "      && d.rev is int && validSide(d.before) && validSide(d.after)",
    '      && ((pairId.matches("original-([1-9]|10)") && (d.before != "" || d.after != ""))',
    '        || (pairId.matches("new-[0-9]+-[0-9]+-[0-9]+") && d.before != "" && d.after != ""));',
    "  }",
    "  allow read: if true;",
    "  allow create: if manager() && validPair() && request.resource.data.rev == 1;",
    "  allow update: if manager() && validPair() && request.resource.data.rev == resource.data.rev + 1;",
    "}",
    "match /lumora_gallery/display-order {",
    '  function canOrder() { return request.auth != null && request.auth.uid == "' + uid + '"; }',
    "  function validOrder() {",
    "    let d = request.resource.data;",
    '    return d.keys().hasAll(["ids", "rev"]) && d.keys().hasOnly(["ids", "rev"])',
    "      && d.rev is int && d.ids is list && d.ids.size() > 0",
    "      && d.ids.size() == d.ids.toSet().size();",
    "  }",
    "  allow create: if canOrder() && validOrder() && request.resource.data.rev == 1;",
    "  allow update: if canOrder() && validOrder() && request.resource.data.rev == resource.data.rev + 1;",
    "}"
  ].join("\n");
}

export default function GalleryManager({ gallery,embedded=false,leaveGuard,onHome }) {
  const Surface=embedded ? "section" : "dialog";
  const [imageTab,setImageTab] = useState("services");
  const [serviceDirty,setServiceDirty] = useState(false);
  const dialog = useRef(null);
  const locked = useRef(false);
  const [pair, setPair] = useState(null);
  const [changes, setChanges] = useState({});
  const [busy, setBusy] = useState("");
  const [message, setMessage] = useState("");
  const ready = gallery.status === "ready";
  const [order, setOrder] = useState(null);
  const orderChanged = !!order && order.ids.some((id, index) => id !== order.initial[index]);
  const dirty = orderChanged || Object.keys(changes).length > 0 || serviceDirty;

  function startOrdering() {
    const ids = gallery.pairs.map(item => item.id);
    setOrder({ ids, initial: ids, version: gallery.orderVersion });
    setMessage("");
    dialog.current.scrollTop = 0;
  }

  function move(id, step) {
    setOrder(current => {
      if (!current) return current;
      const ids = [...current.ids];
      const index = ids.indexOf(id);
      const target = index + step;
      if (index < 0 || target < 0 || target >= ids.length) return current;
      [ids[index], ids[target]] = [ids[target], ids[index]];
      return { ...current, ids };
    });
  }

  function publishOrder() {
    run("جارٍ حفظ الترتيب…", async () => {
      await saveGalleryOrder(order.ids, order.version);
      edit(null);
      setMessage("تم حفظ ترتيب الصور.");
    });
  }

  function edit(item) {
    setOrder(null);
    setPair(item);
    setChanges({});
    setMessage("");
    if (dialog.current) dialog.current.scrollTop = 0;
  }

  useGalleryLayoutEffect(()=>{
    if (!leaveGuard) return;
    leaveGuard.current=()=>!locked.current && (!dirty || window.confirm("تترك تغييرات الصور وتنتقل؟"));
    return ()=>{leaveGuard.current=null;};
  },[leaveGuard,dirty]);
  function back() {
    if (locked.current) return;
    if (dirty && !window.confirm("ترك التغييرات بدون حفظ؟")) return;
    if (pair || order) edit(null);
    else if (embedded) onHome(); else dialog.current.close();
  }

  async function run(label, work) {
    if (locked.current) return;
    locked.current = true;
    setBusy(label);
    setMessage("");

    try {
      await work();
    } catch (error) {
      if (error.message === "ORDER_CONFLICT") {
        setMessage("انحفظ ترتيب أحدث من جهاز ثاني. ارجع للقائمة وافتح ترتيب الصور من جديد.");
      } else if (error.message === "CONFLICT") {
        setMessage("تغيّرت المقارنة من جهاز آخر. ارجع للقائمة وافتحها من جديد.");
      } else if (error.code === "permission-denied") {
        setMessage("حسابك ما معه صلاحية للحفظ. افحص قواعد المعرض.");
      } else if (error.code) {
        setMessage("تعذّر الحفظ. افحص الاتصال وجرّب مرة ثانية.");
      } else {
        setMessage(error.message);
      }
    } finally {
      locked.current = false;
      setBusy("");
    }
  }

  function choose(event, side) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    run("جارٍ تجهيز الصورة…", async () => {
      const image = await preparePhoto(file);
      setChanges(previous => ({ ...previous, [side]: image }));
    });
  }

  function save() {
    run("جارٍ حفظ المقارنة…", async () => {
      await savePair(pair, changes);
      edit(null);
      setMessage("تم حفظ المقارنة.");
    });
  }

  async function copyRules() {
    const uid = auth.currentUser?.uid;
    if (!uid || !/^[a-zA-Z0-9_-]+$/.test(uid)) {
      setMessage("تعذّر تحديد حساب المدير. سجّل الدخول من جديد.");
      return;
    }
    const rules = galleryRules(uid);
    try {
      await navigator.clipboard.writeText(rules);
      setMessage("تم نسخ قواعد المعرض.");
    } catch {
      window.prompt("انسخ قواعد المعرض", rules);
    }
  }

  return <>
    {!embedded && <button type="button" className={primary + " w-full"} onClick={() => {
      edit(null);
      dialog.current.showModal();
    }}>
      إدارة صور قبل وبعد
    </button>}

    <Surface data-embedded={embedded} ref={dialog} dir="rtl" aria-label="إدارة صور قبل وبعد"
      onCancel={event => { event.preventDefault(); back(); }}
      className="fixed inset-0 m-auto max-h-[92dvh] w-[96vw] max-w-2xl overflow-auto overscroll-contain rounded-2xl bg-white p-4 backdrop:bg-black/50">

      {(!embedded || pair || order) && <header data-admin-step="" className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-lg font-bold">{imageTab==="services" ? "صور الخدمات" : order ? "ترتيب الصور" : pair ? "معاينة المقارنة" : "صور قبل وبعد"}</h2>
        <button type="button" disabled={!!busy} className={button} onClick={back}>
          {pair || order ? "رجوع" : "إغلاق"}
        </button>
      </header>}

      <nav className="mb-4 grid grid-cols-2 gap-2 rounded-2xl bg-[#edf2ee] p-1"
        aria-label="إدارة صور الموقع">
        <button type="button" aria-pressed={imageTab==="services"}
          className={"min-h-12 rounded-xl px-2 text-sm font-bold " +
            (imageTab==="services" ? "bg-white text-[#182038] shadow-sm" : "text-slate-600")}
          onClick={()=>{
            if(imageTab==="services")return;
            if(dirty && !window.confirm("تترك التغييرات بدون حفظ؟"))return;
            edit(null);setImageTab("services");
          }}>صور الخدمات</button>
        <button type="button" aria-pressed={imageTab==="gallery"}
          className={"min-h-12 rounded-xl px-2 text-sm font-bold " +
            (imageTab==="gallery" ? "bg-white text-[#182038] shadow-sm" : "text-slate-600")}
          onClick={()=>{
            if(imageTab==="gallery")return;
            if(dirty && !window.confirm("تترك التغييرات بدون حفظ؟"))return;
            setImageTab("gallery");
          }}>قبل وبعد</button>
      </nav>

      {imageTab==="services"
        ? <ServiceImagesManager onDirtyChange={setServiceDirty}/>
        : <>      {!ready && <div role="status" className="mb-3 rounded-xl bg-amber-50 p-3">
        {gallery.status === "loading" ? "جارٍ تحميل المعرض…" :
          <>
            <p>{gallery.status === "denied" ? "المعرض بحاجة لتفعيل الصلاحيات." : "تعذّر الاتصال بالمعرض."}</p>
            <button type="button" className={button + " mt-2"} onClick={gallery.retry}>إعادة المحاولة</button>
          </>}
      </div>}

      {!pair && !order && <details className="mb-3 text-sm">
        <summary className="cursor-pointer py-2">إعداد صلاحيات المعرض</summary>
        <button type="button" className={button} onClick={copyRules}>نسخ قواعد المعرض</button>
      </details>}

      <p aria-live="polite" className="mb-2 font-bold">{busy || message}</p>

      {order ? <>
        <ol className="space-y-2">
          {order.ids.map((id, index) => {
            const item = gallery.pairs.find(photo => photo.id === id);
            if (!item) return null;
            return <li key={id} className="flex items-center gap-2 rounded-xl border p-2">
              <span className="w-6 shrink-0 text-center font-bold">{index + 1}</span>
              <div className="grid min-w-0 flex-1 grid-cols-2 gap-1">
                {sides.map(([side, label]) => <div key={side}>
                  <img src={item[side]} alt={label} loading="lazy"
                    className="aspect-square max-h-20 w-full rounded-lg object-cover" />
                  <span className="text-xs">{label}</span>
                </div>)}
              </div>
              <div className="flex shrink-0 flex-col gap-1">
                <button type="button" className={button}
                  aria-label={"تقديم المقارنة رقم " + (index + 1)}
                  disabled={!!busy || index === 0} onClick={() => move(id, -1)}>↑</button>
                <button type="button" className={button}
                  aria-label={"تأخير المقارنة رقم " + (index + 1)}
                  disabled={!!busy || index === order.ids.length - 1} onClick={() => move(id, 1)}>↓</button>
              </div>
            </li>;
          })}
        </ol>
        <div className="sticky bottom-0 bg-white py-2">
          <button type="button" className={primary + " w-full"}
            disabled={!ready || !!busy || !orderChanged} onClick={publishOrder}>حفظ الترتيب</button>
        </div>
      </> : pair ? <>
        <div className="grid grid-cols-2 gap-2">
          {sides.map(([side, label]) => <div key={side} className="min-w-0">
            <strong>{label}</strong>
            {changes[side] || pair[side]
              ? <img src={changes[side] || pair[side]} alt={label}
                  className="my-2 aspect-square w-full rounded-xl bg-slate-100 object-contain" />
              : <div className="my-2 aspect-square rounded-xl bg-slate-100" />}
            <label className={button + " relative flex items-center justify-center text-center focus-within:ring-2"}>
              {changes[side] || pair[side] ? "تبديل" : "اختيار"} صورة {label}
              <input type="file" accept="image/*" disabled={!!busy}
                aria-label={"اختيار صورة " + label}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                onChange={event => choose(event, side)} />
            </label>
          </div>)}
        </div>
        <button type="button" className={primary + " mt-5 w-full"}
          disabled={!ready || !!busy || !dirty || !(pair.before || changes.before) || !(pair.after || changes.after)}
          onClick={save}>
          حفظ المقارنة
        </button>
      </> : <>
        <button type="button" className={primary + " mb-3 w-full"} disabled={!ready}
          onClick={() => edit({
            id: "new-" + Date.now() + "-" + crypto.getRandomValues(new Uint32Array(2)).join("-"),
            rev: 0
          })}>
          إضافة مقارنة
        </button>

        <button type="button" className={button + " mb-3 w-full"}
          disabled={!ready || gallery.pairs.length < 2} onClick={startOrdering}>
          ترتيب الصور
        </button>
        <div className="grid gap-3 sm:grid-cols-2">
          {gallery.pairs.map((item, index) => <button type="button" key={item.id}
            disabled={!ready} onClick={() => edit(item)} className="rounded-xl border p-2 text-start">
            <strong>تعديل المقارنة {index + 1}</strong>
            <span className="mt-2 grid grid-cols-2 gap-2">
              {sides.map(([side, label]) => <span key={side}>
                <img src={item[side]} alt="" loading="lazy"
                  className="aspect-video w-full rounded-lg object-cover" />
                {label}
              </span>)}
            </span>
          </button>)}
        </div>
      </>}
      </>}
    </Surface>
  </>;
}
