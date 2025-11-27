// src/components/admin/AdminMessages.jsx
import { useEffect, useState } from "react";
import {
  fetchMessages,
  updateMessageStatus,
  deleteMessage,
} from "../../services/contactMessages";

const ADMIN_PIN = "8426"; // غيّرها لو حاب

export default function AdminMessages({ onExit }) {
  // --- حالة الدخول ---
  const [pin, setPin] = useState("");
  const [authorized, setAuthorized] = useState(false);

  // --- بيانات الرسائل ---
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  // --- فلاتر ---
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSubject, setFilterSubject] = useState("all");
  const [search, setSearch] = useState("");

  // دالة مشتركة لتحميل الرسائل (لأول مرة و زر التحديث)
  const loadMessages = async () => {
    try {
      setLoading(true);
      const data = await fetchMessages();
      setMessages(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("فشل تحميل الرسائل، حاول مجددًا.");
    } finally {
      setLoading(false);
    }
  };

  // تحميل الرسائل بعد نجاح الدخول
  useEffect(() => {
    if (!authorized) return;
    loadMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized]);

  // فلترة
  const filtered = messages.filter((m) => {
    if (filterStatus !== "all" && m.status !== filterStatus) return false;
    if (filterSubject !== "all" && m.subject !== filterSubject) return false;
    if (search) {
      const s = search.toLowerCase();
      const hay = `${m.name || ""} ${m.phone || ""} ${
        m.message || ""
      }`.toLowerCase();
      if (!hay.includes(s)) return false;
    }
    return true;
  });

  const totalCount = messages.length;
  const newCount = messages.filter((m) => m.status !== "done").length;
  const doneCount = messages.filter((m) => m.status === "done").length;

  // تغيير حالة الرسالة
  const handleStatusChange = async (id, status) => {
    try {
      setBusyId(id);
      await updateMessageStatus(id, status);
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, status } : m))
      );
    } catch (err) {
      console.error(err);
      alert("فشل تحديث حالة الرسالة.");
    } finally {
      setBusyId(null);
    }
  };

  // حذف رسالة
  const handleDelete = async (id) => {
    if (!window.confirm("هل تريد حذف هذه الرسالة نهائيًا؟")) return;
    try {
      setBusyId(id);
      await deleteMessage(id);
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error(err);
      alert("فشل حذف الرسالة.");
    } finally {
      setBusyId(null);
    }
  };

  // ==========================
  //   شاشة إدخال الـ PIN
  // ==========================
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
        <div className="w-full max-w-sm mx-4">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-slate-100 px-6 py-7">
            <h1 className="text-xl font-semibold text-slate-900 text-center mb-1">
              لوحة التحكم – Lumora
            </h1>
            <p className="text-xs text-slate-500 text-center mb-5">
              هذه الصفحة مخصصة للإدارة. أدخل رمز الدخول السري للمتابعة.
            </p>

            <label className="block text-xs font-medium text-slate-700 mb-1">
              رمز الدخول (PIN)
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
              placeholder="••••"
            />

            {error && (
              <p className="mt-2 text-xs text-rose-500 text-center">{error}</p>
            )}

            <button
              onClick={() => {
                if (pin === ADMIN_PIN) {
                  setAuthorized(true);
                  setError("");
                } else {
                  setError("رمز غير صحيح، حاول مرة أخرى.");
                }
              }}
              className="w-full mt-4 h-10 rounded-2xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              دخول إلى لوحة الرسائل
            </button>

            {onExit && (
              <button
                onClick={onExit}
                className="w-full mt-2 h-9 rounded-2xl border border-slate-200 text-xs text-slate-600 hover:bg-slate-50 transition-colors"
              >
                العودة للموقع
              </button>
            )}
          </div>

          <p className="mt-4 text-[11px] text-center text-slate-400">
            ملاحظة: الوصول للوحة الرسائل مخصص لك فقط، لا تشارك هذا الرمز مع أحد.
          </p>
        </div>
      </div>
    );
  }

  // ==========================
  //   واجهة لوحة الرسائل
  // ==========================
  return (
    <div className="min-h-screen bg-slate-100" dir="rtl">
      {/* هيدر ثابت وجميل */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              L
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-semibold text-slate-900">
                لوحة رسائل تواصل معنا
              </h1>
              <p className="text-[11px] text-slate-500">
                إدارة استفسارات وحجوزات وشكاوى العملاء من مكان واحد
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex gap-1 text-[11px]">
              <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                الكل: {totalCount}
              </span>
              <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                جديدة: {newCount}
              </span>
              <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                تمت: {doneCount}
              </span>
            </div>

            <button
              onClick={loadMessages}
              disabled={loading}
              className="h-9 px-3 rounded-2xl text-xs font-medium border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-60"
            >
              {loading ? "جارٍ التحديث..." : "تحديث"}
            </button>

            {onExit && (
              <button
                onClick={onExit}
                className="h-9 px-3 rounded-2xl text-xs font-medium bg-slate-900 text-slate-50 hover:bg-slate-800"
              >
                العودة للموقع
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-5 space-y-4">
        {/* كرت الفلاتر / البحث */}
        <section className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2 text-xs">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-800 focus:ring-1 focus:ring-blue-300"
              >
                <option value="all">كل الحالات</option>
                <option value="new">جديدة</option>
                <option value="done">تمت المعالجة</option>
              </select>

              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-800 focus:ring-1 focus:ring-blue-300"
              >
                <option value="all">كل المواضيع</option>
                <option value="inquiry">استفسار</option>
                <option value="booking">حجز</option>
                <option value="complaint">شكوى</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            <div className="flex-1 flex items-center gap-2">
              <div className="relative w-full">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  🔍
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="بحث بالاسم، الهاتف، أو جزء من الرسالة…"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 pl-8 pr-3 py-1.5 text-xs text-slate-800 outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>

          {error && <p className="mt-2 text-[11px] text-rose-500">{error}</p>}
        </section>

        {/* قائمة الرسائل */}
        <section className="space-y-3">
          {loading && messages.length === 0 ? (
            <p className="text-center text-xs text-slate-500 mt-6">
              جارٍ تحميل الرسائل...
            </p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-xs text-slate-500 mt-6">
              لا توجد رسائل مطابقة للفلتر الحالي.
            </p>
          ) : (
            filtered.map((m) => {
              const created = m.createdAt
                ? new Date(
                    m.createdAt.seconds
                      ? m.createdAt.seconds * 1000
                      : m.createdAt
                  )
                : null;

              const subjectLabel =
                m.subject === "booking"
                  ? "حجز"
                  : m.subject === "complaint"
                  ? "شكوى"
                  : m.subject === "other"
                  ? "أخرى"
                  : "استفسار";

              const channelLabel =
                m.channel === "whatsapp"
                  ? "واتساب"
                  : m.channel === "phone"
                  ? "اتصال"
                  : "لا فرق";

              return (
                <article
                  key={m.id}
                  className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)] hover:shadow-md transition-shadow text-[13px]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    {/* معلومات أساسية */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-slate-900">
                          {m.name || "بدون اسم"}
                        </span>
                        <span className="text-xs text-slate-500">
                          {m.phone || "بدون هاتف"}
                        </span>
                      </div>

                      {created && (
                        <p className="text-[11px] text-slate-400">
                          {created.toLocaleString("he-IL")}
                        </p>
                      )}

                      <p className="mt-1 text-slate-800 whitespace-pre-wrap leading-relaxed">
                        {m.message}
                      </p>
                    </div>

                    {/* بادجات وحالة */}
                    <div className="flex flex-col items-end gap-2 min-w-[140px]">
                      <div className="flex flex-wrap justify-end gap-1 text-[11px]">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {subjectLabel}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full border ${
                            m.status === "done"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {m.status === "done"
                            ? "تمت المعالجة"
                            : "جديدة / قيد المتابعة"}
                        </span>
                        {m.channel && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                            تفضيل: {channelLabel}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap justify-end gap-1 mt-1">
                        <button
                          onClick={() =>
                            handleStatusChange(
                              m.id,
                              m.status === "done" ? "new" : "done"
                            )
                          }
                          disabled={busyId === m.id}
                          className="h-8 px-3 rounded-2xl bg-slate-900 text-[11px] text-slate-50 hover:bg-slate-800 disabled:opacity-60"
                        >
                          {m.status === "done"
                            ? "إرجاع كرسالة جديدة"
                            : "تحديد كمُعالجة"}
                        </button>
                        <button
                          onClick={() => handleDelete(m.id)}
                          disabled={busyId === m.id}
                          className="h-8 px-3 rounded-2xl bg-rose-50 text-[11px] text-rose-700 border border-rose-200 hover:bg-rose-100 disabled:opacity-60"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
}
