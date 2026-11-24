import React, { useEffect, useState } from "react";
import { services } from "../services/servicesData";
import { useServiceImages, saveServiceImage } from "../services/serviceImages";
import { preparePhoto } from "./gallery";

const labels = {
  sofa: "تنظيف الكنب",
  mattress: "تنظيف الفرشات",
  carpet: "تنظيف السجاد",
  glass: "تنظيف الزجاج"
};

export default function ServiceImagesManager({ onDirtyChange }) {
  const { records, status } = useServiceImages();
  const [draft, setDraft] = useState(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const available = status === "ready";

  useEffect(() => {
    onDirtyChange?.(Boolean(draft));
    return () => onDirtyChange?.(false);
  }, [draft, onDirtyChange]);

  async function selectImage(event, serviceId) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || busy) return;

    setMessage("");
    setBusy(true);
    try {
      const image = await preparePhoto(file);
      setDraft({
        serviceId,
        image,
        revision: records[serviceId]?.rev || 0
      });
    } catch (error) {
      setMessage(error.message || "تعذّر تجهيز الصورة.");
    } finally {
      setBusy(false);
    }
  }

  async function save(image, serviceId, revision) {
    if (!available || busy) return;

    setBusy(true);
    setMessage("");
    try {
      await saveServiceImage(serviceId, image, revision);
      setDraft(null);
      setMessage(image
        ? "تم حفظ صورة الخدمة."
        : "رجعت الخدمة لصورتها الأصلية.");
    } catch (error) {
      setMessage(error.message === "CONFLICT"
        ? "الصورة تغيّرت من جهاز ثاني. أعد فتح القسم وجرّب."
        : error.code === "permission-denied"
          ? "صلاحية تعديل صور الخدمات غير مفعّلة في Firebase."
          : error.code
            ? "تعذّر الحفظ. افحص الاتصال وحاول مرة ثانية."
            : error.message || "تعذّر حفظ الصورة.");
    } finally {
      setBusy(false);
    }
  }

  return <section dir="rtl" className="space-y-4 pb-24" aria-label="صور الخدمات">
    <div className="rounded-2xl bg-[#f5f8f5] px-4 py-3">
      <h2 className="text-base font-extrabold text-[#182038]">صور الخدمات</h2>
      <p className="mt-1 text-sm leading-6 text-slate-600">
        غيّر الصورة اللي بتظهر للزبون عند اختيار الخدمة.
      </p>
    </div>

    {status !== "ready" && <p role="status"
      className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-900">
      {status === "loading" ? "جارٍ تحميل الصور…" :
       status === "offline" ? "بانتظار الاتصال لتأكيد الصور…" :
       status === "denied" ? "قراءة صور الخدمات بحاجة لتفعيل الصلاحيات." :
       "تعذّر تحميل صور الخدمات."}
    </p>}

    {message && <p role="status"
      className="rounded-xl bg-slate-100 px-3 py-3 text-sm font-semibold text-[#182038]">
      {message}
    </p>}

    <div className="grid gap-3 sm:grid-cols-2">
      {services.map(service => {
        const saved = records[service.id];
        const selected = draft?.serviceId === service.id;
        const activeImage = selected ? draft.image :
          saved?.image || service.image;

        return <article key={service.id}
          className="overflow-hidden rounded-2xl border border-[#e2e8e3] bg-white shadow-sm">
          <img src={activeImage} alt={labels[service.id]}
            className="aspect-[16/9] w-full object-cover" loading="lazy"/>

          <div className="space-y-3 p-3">
            <div className="flex items-center justify-between gap-2">
              <strong className="text-sm font-extrabold text-[#182038]">
                {labels[service.id]}
              </strong>
              <span className="text-xs text-slate-500">
                {selected ? "معاينة" :
                 saved?.image ? "صورة مخصّصة" : "الصورة الأصلية"}
              </span>
            </div>

            <label className="relative flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-[#dce4e0] bg-[#f6f9f6] px-3 text-sm font-bold text-[#182038] focus-within:ring-2 focus-within:ring-green-700">
              {saved?.image || selected ? "تغيير الصورة" : "اختيار صورة"}
              <input type="file" accept="image/jpeg,image/png,image/webp"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                aria-label={"اختيار صورة " + labels[service.id]}
                disabled={busy || !available}
                onChange={event => selectImage(event, service.id)}/>
            </label>

            {selected && <div className="grid grid-cols-2 gap-2">
              <button type="button"
                disabled={busy || !available}
                className="min-h-12 rounded-xl bg-[#182038] px-3 text-sm font-bold text-white disabled:opacity-50"
                onClick={()=>save(draft.image,service.id,draft.revision)}>
                {busy ? "جارٍ الحفظ…" : "حفظ الصورة"}
              </button>
              <button type="button" disabled={busy}
                className="min-h-12 rounded-xl border px-3 text-sm font-bold"
                onClick={()=>setDraft(null)}>
                إلغاء التغيير
              </button>
            </div>}

            {!selected && Boolean(saved?.image) && <button type="button"
              disabled={busy || !available}
              className="min-h-11 w-full rounded-xl border px-3 text-sm font-semibold text-slate-600 disabled:opacity-50"
              onClick={()=>{
                if (window.confirm("ترجع للصورة الأصلية لهذه الخدمة؟")) {
                  save("", service.id, saved.rev);
                }
              }}>
              رجوع للصورة الأصلية
            </button>}
          </div>
        </article>;
      })}
    </div>
  </section>;
}