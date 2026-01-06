// src/components/admin/AdminPanel.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import AdminAuthGate from "./AdminAuthGate";
import AdminHeader from "./AdminHeader";
import SaveBar from "./SaveBar";

import DailyTab from "./tabs/daily/DailyTab";
import CarpetsTab from "./tabs/CarpetsTab";
import MessagesTab from "./tabs/MessagesTab";

import {
  fetchDay,
  getEmptyDay,
  todayKey,
  upsertDay, // ✅ مباشر من الجذر
} from "../../services/managerDaily";

import { n, uid } from "./lib/format";
import { ToastProvider, useToast } from "./lib/toast";

const ADMIN_PIN = "8426";

function normalizeTab(v) {
  const t = String(v || "daily")
    .trim()
    .toLowerCase();
  if (t === "daily" || t === "carpets" || t === "messages") return t;
  return "daily";
}
function toMillis(v) {
  if (!v) return null;
  if (typeof v === "number") return v;
  if (typeof v?.toMillis === "function") return v.toMillis();
  if (typeof v?.seconds === "number") return v.seconds * 1000;
  return null;
}

// stable snapshot to detect real changes
function stableStringify(obj) {
  const seen = new WeakSet();
  const helper = (x) => {
    if (x === null || typeof x !== "object") return x;
    if (seen.has(x)) return "[Circular]";
    seen.add(x);
    if (Array.isArray(x)) return x.map(helper);
    const out = {};
    Object.keys(x)
      .sort()
      .forEach((k) => (out[k] = helper(x[k])));
    return out;
  };
  return JSON.stringify(helper(obj));
}

function AdminPanelInner({ onExit }) {
  const toast = useToast();

  const [authorized, setAuthorized] = useState(false);
  const [tab, setTab] = useState("daily");
  const tabKey = normalizeTab(tab);

  const [dateKey, setDateKey] = useState(todayKey());
  const [day, setDay] = useState(getEmptyDay(todayKey()));
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // silent save indicators
  const [saving, setSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const [saveError, setSaveError] = useState(null);

  const isClosed = !!day?.isClosed;

  // keep latest refs (root reliable)
  const latestDayRef = useRef(day);
  const latestKeyRef = useRef(dateKey);
  useEffect(() => {
    latestDayRef.current = day;
  }, [day]);
  useEffect(() => {
    latestKeyRef.current = dateKey;
  }, [dateKey]);

  // ===== load day =====
  useEffect(() => {
    if (!authorized) return;
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setErr("");
        const data = await fetchDay(dateKey);
        if (!alive) return;
        setDay(data || getEmptyDay(dateKey));
      } catch (e) {
        console.error(e);
        setErr("فشل تحميل بيانات اليوم");
        toast.error("فشل تحميل بيانات اليوم");
        if (alive) setDay(getEmptyDay(dateKey));
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [authorized, dateKey, toast]);

  // ===== ROOT AUTOSAVE (NO HOOKS) =====
  const lastSavedSnapshotRef = useRef("");
  const saveTimerRef = useRef(null);

  const doSave = async (reason) => {
    const key = latestKeyRef.current;
    const data = latestDayRef.current;
    if (!key) return true;

    const snap = stableStringify(data);
    if (snap === lastSavedSnapshotRef.current) return true;

    setSaving(true);
    setSaveError(null);

    // 🔎 root debug (console only)
    console.log("💾 SAVE START:", reason, "key=", key);

    try {
      await upsertDay(key, data);
      lastSavedSnapshotRef.current = snap;
      setLastSavedAt(Date.now());
      console.log("✅ SAVE OK:", reason, "key=", key);
      return true;
    } catch (e) {
      console.error("❌ SAVE FAIL:", reason, e);
      setSaveError(e?.message || "فشل الحفظ");
      return false;
    } finally {
      setSaving(false);
    }
  };

  // debounce autosave on any day change
  useEffect(() => {
    if (!authorized) return;

    const snap = stableStringify(day);

    // cancel previous debounce
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);

    // schedule save
    saveTimerRef.current = setTimeout(() => {
      doSave("autosave");
    }, 800);

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized, dateKey, day]);

  // best-effort on close (fire-and-forget)
  useEffect(() => {
    if (!authorized) return;

    const handler = () => {
      // no await (browser will close)
      doSave("beforeunload");
    };

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized]);

  const saveFireAndForget = () => {
    // no await - user asked no delays
    doSave("nav/exit");
  };

  // ===== totals =====
  const totals = useMemo(() => {
    const entries = day.entries || [];
    const total = entries.reduce((a, e) => a + n(e.amount), 0);
    const shopTotal = entries.reduce((a, e) => a + n(e.shop), 0);
    const youTotal = total - shopTotal;

    const defaultRate = n(day.defaultCarpetRatePerM2) || 15;
    const carpetsTotal = (day.carpetCustomers || []).reduce((acc, c) => {
      return (
        acc +
        (c.rugs || []).reduce((a, r) => {
          const rate = n(r.ratePerM2) || defaultRate;
          let area = 0;
          if (r.mode === "area") area = n(r.areaM2);
          else area = (n(r.lengthCm) / 100) * (n(r.widthCm) / 100);
          return a + area * rate;
        }, 0)
      );
    }, 0);

    return { total, shopTotal, youTotal, carpetsTotal };
  }, [day]);

  const guardIfClosed = (fn) => {
    if (isClosed) {
      toast.info("اليوم مغلق (قراءة فقط)");
      return;
    }
    fn();
  };

  const addEntryFromCarpets = ({ title, customerName, amount, shop }) => {
    guardIfClosed(() => {
      setDay((p) => ({
        ...p,
        entries: [
          ...(p.entries || []),
          {
            id: uid(),
            type: "carpet",
            title: title || "سجاد",
            customerName: customerName || "",
            amount: n(amount),
            shop: n(shop),
            createdAt: Date.now(),
          },
        ],
      }));
      setTab("daily");
      toast.success("تمت إضافة بند السجاد");
    });
  };

  const handleExit = () => {
    saveFireAndForget(); // fire-and-forget
    onExit?.();
  };

  if (!authorized) {
    return (
      <AdminAuthGate
        adminPin={ADMIN_PIN}
        onAuthorized={() => {
          setAuthorized(true);
          toast.success("تم الدخول إلى لوحة الإدارة");
        }}
        onExit={onExit}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-100" dir="rtl">
      <AdminHeader
        tab={tabKey}
        setTab={(t) => {
          saveFireAndForget();
          setTab(t);
        }}
        dateKey={dateKey}
        setDateKey={(dk) => {
          saveFireAndForget();
          setDateKey(dk);
        }}
        totals={totals}
        onSave={() => saveFireAndForget()}
        saving={saving}
        isDirty={false}
        lastSavedAt={toMillis(lastSavedAt)}
        isClosed={isClosed}
        onExit={handleExit}
      />

      <main className="max-w-6xl mx-auto px-4 py-5 space-y-4">
        {err && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-sm">
            {err}
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            جارٍ التحميل…
          </div>
        ) : (
          <>
            {tabKey === "daily" && (
              <DailyTab
                entries={day.entries || []}
                setEntries={(updater) =>
                  guardIfClosed(() =>
                    setDay((p) => ({
                      ...p,
                      entries:
                        typeof updater === "function"
                          ? updater(p.entries || [])
                          : updater,
                    }))
                  )
                }
              />
            )}

            {tabKey === "carpets" && (
              <CarpetsTab
                defaultRatePerM2={day.defaultCarpetRatePerM2 || 15}
                setDefaultRatePerM2={(v) =>
                  guardIfClosed(() =>
                    setDay((p) => ({ ...p, defaultCarpetRatePerM2: v }))
                  )
                }
                customers={day.carpetCustomers || []}
                setCustomers={(updater) =>
                  guardIfClosed(() =>
                    setDay((p) => ({
                      ...p,
                      carpetCustomers:
                        typeof updater === "function"
                          ? updater(p.carpetCustomers || [])
                          : updater,
                    }))
                  )
                }
                onAddEntryFromCarpets={addEntryFromCarpets}
              />
            )}

            {tabKey === "messages" && <MessagesTab />}
          </>
        )}
      </main>

      {/* Silent: only if error */}
      <SaveBar error={saveError || null} />
    </div>
  );
}

export default function AdminPanel(props) {
  return (
    <ToastProvider>
      <AdminPanelInner {...props} />
    </ToastProvider>
  );
}
