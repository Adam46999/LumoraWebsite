import React, { useEffect, useState } from "react";
import firstImage from "../../assets/hero1.jpg";
import secondImage from "../../assets/hero3.jpg";
import { preparePhoto } from "./gallery";
import { useHeroImages, saveHeroImage } from "../hero/heroImages";

const slots = [
  { id: "hero-sofa", label: "الخلفية الأولى", original: firstImage },
  { id: "hero-carpet", label: "الخلفية الثانية", original: secondImage }
];

export default function HeroImagesManager({ onDirtyChange }) {
  const { records, status } = useHeroImages();
  const [draft, setDraft] = useState(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    onDirtyChange?.(Boolean(draft));
    return () => onDirtyChange?.(false);
  }, [draft, onDirtyChange]);

  async function choose(event, slot) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || busy) return;

    setBusy(true);
    setMessage("");

    try {
      const image = await preparePhoto(file);
      setDraft({
        id: slot.id,
        image,
        rev: records[slot.id]?.rev || 0
      });
    } catch (error) {
      setMessage(error.message || "تعذّر تجهيز الصورة.");
    } finally {
      setBusy(false);
    }
  }

  async function save(id, image, rev) {
    if (busy || status !== "ready") return;

    setBusy(true);
    setMessage("");

    try {
      await saveHeroImage(id, image, rev);
      setDraft(null);
      setMessage(image
        ? "تم حفظ صورة الهيرو."
        : "تم الرجوع للصورة الأصلية.");
    } catch (error) {
      setMessage(
        error.message === "CONFLICT"
          ? "الصورة تغيّرت من جهاز آخر. حدّث الصفحة وجرب."
          : error.code === "permission-denied"
            ? "صلاحيات تعديل صور الهيرو غير مفعّلة."
            : "تعذّر حفظ الصورة. افحص الاتصال وحاول مرة ثانية."
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <section dir="rtl" className="space-y-4 pb-20">
      <div className="rounded-2xl bg-[#f4f7f3] p-4">
        <h2 className="font-extrabold text-[#182038]">
          صور خلفية الهيرو
        </h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          صورتان مستقلتان عن صور الخدمات. كل واحدة إلها حفظها الخاص.
        </p>
      </div>

      {status !== "ready" && (
        <p role="status"
          className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
          {status === "loading" ? "جارٍ تحميل الصور…" :
           status === "offline" ? "بانتظار تأكيد الاتصال…" :
           status === "denied" ? "صلاحيات صور الهيرو غير مفعّلة." :
           "تعذّر تحميل الصور."}
        </p>
      )}

      {message && (
        <p role="status" className="rounded-xl bg-slate-100 p-3 text-sm">
          {message}
        </p>
      )}

      {slots.map(slot => {
        const record = records[slot.id];
        const editing = draft?.id === slot.id;
        const preview = editing
          ? draft.image
          : record?.image || slot.original;

        return (
          <article key={slot.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src={preview}
              alt={slot.label}
              className="aspect-[16/9] w-full object-cover"
            />

            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between gap-2">
                <strong className="text-sm font-extrabold text-[#182038]">
                  {slot.label}
                </strong>
                <span className="text-xs text-slate-500">
                  {editing ? "معاينة" :
                   record?.image ? "صورة مخصّصة" : "الصورة الأصلية"}
                </span>
              </div>

              <label className="relative flex min-h-12 items-center justify-center rounded-xl bg-[#edf4ed] text-sm font-bold text-[#274833] focus-within:ring-2 focus-within:ring-green-700">
                تغيير الصورة
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  aria-label={"تغيير " + slot.label}
                  disabled={busy || status !== "ready"}
                  onChange={event => choose(event, slot)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
                />
              </label>

              {editing && (
                <div className="grid grid-cols-2 gap-2">
                  <button type="button"
                    disabled={busy || status !== "ready"}
                    onClick={() => save(slot.id, draft.image, draft.rev)}
                    className="min-h-12 rounded-xl bg-[#182038] px-3 text-sm font-bold text-white disabled:opacity-50">
                    {busy ? "جارٍ الحفظ…" : "حفظ الصورة"}
                  </button>
                  <button type="button"
                    disabled={busy}
                    onClick={() => setDraft(null)}
                    className="min-h-12 rounded-xl border px-3 text-sm font-bold">
                    إلغاء
                  </button>
                </div>
              )}

              {!editing && Boolean(record?.image) && (
                <button type="button"
                  disabled={busy || status !== "ready"}
                  onClick={() => {
                    if (window.confirm("ترجع للصورة الأصلية؟")) {
                      save(slot.id, "", record.rev);
                    }
                  }}
                  className="min-h-11 w-full rounded-xl border text-sm font-semibold text-slate-600">
                  الرجوع للصورة الأصلية
                </button>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}