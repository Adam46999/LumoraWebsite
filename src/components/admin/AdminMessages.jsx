import { useEffect, useMemo, useState } from "react";
import {
  fetchMessages,
  updateMessageStatus,
  deleteMessage,
} from "../../services/contactMessages";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  // filters
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSubject, setFilterSubject] = useState("all");
  const [search, setSearch] = useState("");

  const loadMessages = async () => {
    try {
      setLoading(true);
      const data = await fetchMessages();
      setMessages(data || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("فشل تحميل الرسائل، حاول مجددًا.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const filtered = useMemo(() => {
    return messages.filter((m) => {
      if (filterStatus !== "all" && m.status !== filterStatus) return false;
      if (filterSubject !== "all" && m.subject !== filterSubject) return false;

      if (search.trim()) {
        const s = search.toLowerCase();
        const hay = `${m.name || ""} ${m.phone || ""} ${
          m.message || ""
        }`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [messages, filterStatus, filterSubject, search]);

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

  return (
    <div className="space-y-4">
      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              رسائل التواصل
            </h2>
            <p className="text-[11px] text-slate-500">
              إدارة، بحث، واتساب، اتصال
            </p>
          </div>

          <button
            onClick={loadMessages}
            disabled={loading}
            className="h-9 px-3 rounded-2xl text-xs border bg-white hover:bg-slate-50 disabled:opacity-50"
          >
            {loading ? "جارٍ التحديث..." : "تحديث"}
          </button>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="h-9 rounded-2xl border bg-slate-50 px-3 text-xs"
          >
            <option value="all">كل الحالات</option>
            <option value="new">جديدة</option>
            <option value="done">تمت</option>
          </select>

          <select
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
            className="h-9 rounded-2xl border bg-slate-50 px-3 text-xs"
          >
            <option value="all">كل المواضيع</option>
            <option value="booking">حجز</option>
            <option value="inquiry">استفسار</option>
            <option value="complaint">شكوى</option>
            <option value="other">أخرى</option>
          </select>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث بالاسم / الهاتف / الرسالة"
            className="h-9 flex-1 rounded-2xl border bg-slate-50 px-3 text-xs"
          />
        </div>

        {error && <p className="mt-2 text-[11px] text-rose-500">{error}</p>}
      </section>

      {/* Messages */}
      {filtered.length === 0 ? (
        <p className="text-center text-xs text-slate-500">لا توجد رسائل</p>
      ) : (
        filtered.map((m) => {
          const phoneDigits = (m.phone || "").replace(/\D/g, "");

          return (
            <article
              key={m.id}
              className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm space-y-2"
            >
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="font-bold text-slate-900">
                    {m.name || "بدون اسم"}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {m.phone || "بدون هاتف"}
                  </div>
                </div>

                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full border ${
                    m.status === "done"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}
                >
                  {m.status === "done" ? "تمت" : "جديدة"}
                </span>
              </div>

              <p className="text-sm text-slate-800 whitespace-pre-wrap">
                {m.message}
              </p>

              <div className="flex flex-wrap justify-end gap-2">
                {phoneDigits && (
                  <>
                    <a
                      href={`https://wa.me/${phoneDigits}`}
                      target="_blank"
                      rel="noreferrer"
                      className="h-8 px-3 rounded-2xl bg-green-50 text-[11px] text-green-700 border hover:bg-green-100"
                    >
                      واتساب
                    </a>

                    <a
                      href={`tel:${phoneDigits}`}
                      className="h-8 px-3 rounded-2xl bg-blue-50 text-[11px] text-blue-700 border hover:bg-blue-100"
                    >
                      اتصال
                    </a>
                  </>
                )}

                <button
                  onClick={() =>
                    handleStatusChange(
                      m.id,
                      m.status === "done" ? "new" : "done"
                    )
                  }
                  disabled={busyId === m.id}
                  className="h-8 px-3 rounded-2xl bg-slate-900 text-[11px] text-white disabled:opacity-50"
                >
                  {m.status === "done" ? "إرجاع" : "تمت"}
                </button>

                <button
                  onClick={() => handleDelete(m.id)}
                  disabled={busyId === m.id}
                  className="h-8 px-3 rounded-2xl bg-rose-50 text-[11px] text-rose-700 border hover:bg-rose-100 disabled:opacity-50"
                >
                  حذف
                </button>
              </div>
            </article>
          );
        })
      )}
    </div>
  );
}
