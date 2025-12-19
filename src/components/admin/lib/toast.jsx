// src/components/admin/lib/toast.jsx
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

/**
 * Toast types:
 * - success
 * - error
 * - info
 */
const ToastCtx = createContext(null);

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);

  const remove = useCallback((id) => {
    setItems((p) => p.filter((x) => x.id !== id));
  }, []);

  const push = useCallback(
    (toast) => {
      const id =
        toast.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const type = toast.type || "info";
      const title = toast.title || "";
      const message = toast.message || "";
      const durationMs = Number.isFinite(Number(toast.durationMs))
        ? Number(toast.durationMs)
        : 2800;

      const t = { id, type, title, message, durationMs };

      setItems((p) => [...p, t]);

      if (durationMs > 0) {
        window.setTimeout(() => remove(id), durationMs);
      }

      return id;
    },
    [remove]
  );

  const api = useMemo(
    () => ({
      push,
      remove,
      success: (message, opts = {}) =>
        push({ type: "success", message, ...opts }),
      error: (message, opts = {}) => push({ type: "error", message, ...opts }),
      info: (message, opts = {}) => push({ type: "info", message, ...opts }),
    }),
    [push]
  );

  return (
    <ToastCtx.Provider value={api}>
      {children}

      {/* Toast Stack */}
      <div className="fixed top-3 left-3 right-3 z-[9999] flex justify-center pointer-events-none">
        <div className="w-full max-w-xl space-y-2">
          {items.map((t) => (
            <ToastItem key={t.id} toast={t} onClose={() => remove(t.id)} />
          ))}
        </div>
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) {
    // fallback to avoid crashing if provider missing
    return {
      push: () => {},
      remove: () => {},
      success: () => {},
      error: () => {},
      info: () => {},
    };
  }
  return ctx;
}

function ToastItem({ toast, onClose }) {
  const base =
    "pointer-events-auto w-full rounded-2xl border px-3 py-2 shadow-lg bg-white flex items-start justify-between gap-3";

  const tone =
    toast.type === "success"
      ? "border-emerald-200"
      : toast.type === "error"
      ? "border-rose-200"
      : "border-slate-200";

  const badge =
    toast.type === "success" ? "✅" : toast.type === "error" ? "⚠️" : "ℹ️";

  return (
    <div className={`${base} ${tone}`} dir="rtl">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm">{badge}</span>
          {toast.title ? (
            <div className="text-xs font-extrabold text-slate-900">
              {toast.title}
            </div>
          ) : null}
        </div>
        {toast.message ? (
          <div className="mt-1 text-[12px] text-slate-700 whitespace-pre-wrap break-words">
            {toast.message}
          </div>
        ) : null}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] text-slate-700 hover:bg-slate-50"
        aria-label="إغلاق التنبيه"
      >
        إغلاق
      </button>
    </div>
  );
}
