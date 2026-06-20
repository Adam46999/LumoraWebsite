// src/components/admin/AdminPanel.jsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { LoaderCircle, ShieldCheck } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../../firebase";

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
  upsertDay,
} from "../../services/managerDaily";

import { n, uid } from "./lib/format";
import { ToastProvider, useToast } from "./lib/toast";

const ADMIN_EMAIL = String(import.meta.env.VITE_ADMIN_EMAIL || "")
  .trim()
  .toLowerCase();

function normalizeEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function normalizeTab(value) {
  const normalized = String(value || "daily")
    .trim()
    .toLowerCase();

  if (
    normalized === "daily" ||
    normalized === "carpets" ||
    normalized === "messages"
  ) {
    return normalized;
  }

  return "daily";
}

function toMillis(value) {
  if (!value) return null;

  if (typeof value === "number") {
    return value;
  }

  if (typeof value?.toMillis === "function") {
    return value.toMillis();
  }

  if (typeof value?.seconds === "number") {
    return value.seconds * 1000;
  }

  return null;
}

/*
  نحول البيانات إلى نص ثابت حتى نعرف
  إذا صار تغيير حقيقي يحتاج حفظ.
*/
function stableStringify(object) {
  const seen = new WeakSet();

  const normalize = (value) => {
    if (value === null || typeof value !== "object") {
      return value;
    }

    if (seen.has(value)) {
      return "[Circular]";
    }

    seen.add(value);

    if (Array.isArray(value)) {
      return value.map(normalize);
    }

    const output = {};

    Object.keys(value)
      .sort()
      .forEach((key) => {
        output[key] = normalize(value[key]);
      });

    return output;
  };

  return JSON.stringify(normalize(object));
}

function AuthLoadingScreen() {
  return (
    <main
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden bg-[#F6F8FC]
        px-4
      "
      dir="rtl"
    >
      <div
        className="
          pointer-events-none absolute
          start-[-120px] top-[-140px]
          h-[320px] w-[320px]
          rounded-full bg-blue-100/70
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          relative w-full max-w-sm
          rounded-[28px] border border-slate-200
          bg-white px-6 py-8 text-center
          shadow-[0_22px_65px_rgba(15,23,42,0.10)]
        "
      >
        <div
          className="
            mx-auto flex h-14 w-14
            items-center justify-center
            rounded-2xl bg-blue-600
            text-white
            shadow-[0_10px_28px_rgba(37,99,235,0.24)]
          "
          aria-hidden="true"
        >
          <ShieldCheck className="h-7 w-7" />
        </div>

        <LoaderCircle
          className="
            mx-auto mt-5 h-6 w-6
            animate-spin text-blue-600
          "
          aria-hidden="true"
        />

        <h1 className="mt-3 text-lg font-black text-slate-950">
          جارٍ التحقق من جلسة الإدارة
        </h1>

        <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
          لحظة واحدة، يتم التأكد من حالة تسجيل الدخول.
        </p>
      </div>
    </main>
  );
}

function AuthErrorNotice({ message }) {
  if (!message) return null;

  return (
    <div
      className="
        pointer-events-none fixed
        left-1/2 top-4 z-[10200]
        w-[calc(100%-28px)] max-w-md
        -translate-x-1/2
      "
      dir="rtl"
      role="alert"
    >
      <div
        className="
          rounded-2xl border border-rose-200
          bg-white px-4 py-3
          text-center text-sm font-extrabold
          leading-6 text-rose-700
          shadow-[0_16px_45px_rgba(15,23,42,0.16)]
        "
      >
        {message}
      </div>
    </div>
  );
}

function AdminPanelInner({ onExit }) {
  const toast = useToast();

  /*
    Firebase Authentication
  */
  const [authReady, setAuthReady] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [signingOut, setSigningOut] = useState(false);

  /*
    Tabs and selected day
  */
  const [tab, setTab] = useState("daily");
  const tabKey = normalizeTab(tab);

  const initialDateKey = todayKey();

  const [dateKey, setDateKey] = useState(initialDateKey);
  const [day, setDay] = useState(getEmptyDay(initialDateKey));

  const [reloadToken, setReloadToken] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  /*
    Save state
  */
  const [saving, setSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const [saveError, setSaveError] = useState(null);

  /*
    Refs تمنع مشاكل القيم القديمة داخل
    timers وevent listeners.
  */
  const latestDayRef = useRef(day);
  const latestKeyRef = useRef(dateKey);

  const lastSavedSnapshotRef = useRef("");
  const saveTimerRef = useRef(null);

  /*
    يحدد اليوم الذي اكتمل تحميله فعلًا.
    هذا يمنع حفظ بيانات اليوم السابق
    تحت تاريخ جديد أثناء الانتقال بين الأيام.
  */
  const loadedDateRef = useRef(null);

  const authorized = Boolean(authReady && adminUser);

  const isClosed = Boolean(day?.isClosed);

  useEffect(() => {
    latestDayRef.current = day;
  }, [day]);

  useEffect(() => {
    latestKeyRef.current = dateKey;
  }, [dateKey]);

  /*
    مراقبة جلسة Firebase.

    عند Refresh:
    Firebase يعيد الجلسة المحفوظة،
    وبعدها نتحقق أن البريد هو بريد الأدمن.
  */
  useEffect(() => {
    let active = true;

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!active) return;

        if (!user) {
          setAdminUser(null);
          setAuthReady(true);
          return;
        }

        const signedInEmail = normalizeEmail(user.email);

        if (!ADMIN_EMAIL) {
          setAdminUser(null);
          setAuthError("بريد الأدمن غير موجود داخل ملف .env.local.");

          try {
            await signOut(auth);
          } catch (error) {
            console.error("Failed to sign out unconfigured admin:", error);
          } finally {
            if (active) {
              setAuthReady(true);
            }
          }

          return;
        }

        if (signedInEmail !== ADMIN_EMAIL) {
          setAdminUser(null);
          setAuthError("الحساب المسجل غير مخوّل للدخول إلى لوحة الإدارة.");

          try {
            await signOut(auth);
          } catch (error) {
            console.error("Failed to sign out unauthorized user:", error);
          } finally {
            if (active) {
              setAuthReady(true);
            }
          }

          return;
        }

        setAuthError("");
        setAdminUser(user);
        setAuthReady(true);
      },
      (error) => {
        console.error("Firebase auth state error:", error);

        if (!active) return;

        setAdminUser(null);
        setAuthReady(true);
        setAuthError(
          "تعذر التحقق من جلسة الإدارة. افحص الاتصال وحاول مرة ثانية.",
        );
      },
    );

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  /*
    الحفظ المركزي.

    يستعمل أحدث نسخة من اليوم والتاريخ
    بدل الاعتماد على state قديم.
  */
  const doSave = useCallback(async (reason = "manual") => {
    const key = latestKeyRef.current;
    const data = latestDayRef.current;

    if (!key) {
      return true;
    }

    /*
        إذا اليوم لم يكتمل تحميله،
        لا نحفظ حتى لا نكتب بيانات قديمة
        تحت تاريخ مختلف.
      */
    if (loadedDateRef.current !== key) {
      return true;
    }

    const snapshot = stableStringify(data);

    if (snapshot === lastSavedSnapshotRef.current) {
      return true;
    }

    setSaving(true);
    setSaveError(null);

    console.log("💾 SAVE START:", reason, "key=", key);

    try {
      await upsertDay(key, data);

      lastSavedSnapshotRef.current = snapshot;

      setLastSavedAt(Date.now());

      console.log("✅ SAVE OK:", reason, "key=", key);

      return true;
    } catch (error) {
      console.error("❌ SAVE FAIL:", reason, error);

      const message = error?.message || "فشل الحفظ";

      setSaveError(message);

      return false;
    } finally {
      setSaving(false);
    }
  }, []);

  /*
    تحميل بيانات اليوم.

    عند اكتمال التحميل نحفظ Snapshot
    حتى لا يعمل Autosave لمجرد أننا
    حمّلنا البيانات من Firestore.
  */
  useEffect(() => {
    if (!authorized) return undefined;

    let alive = true;

    loadedDateRef.current = null;

    if (saveTimerRef.current) {
      window.clearTimeout(saveTimerRef.current);

      saveTimerRef.current = null;
    }

    const loadSelectedDay = async () => {
      try {
        setLoading(true);
        setErr("");
        setSaveError(null);

        const data = await fetchDay(dateKey);

        if (!alive) return;

        const nextDay = data || getEmptyDay(dateKey);

        latestKeyRef.current = dateKey;
        latestDayRef.current = nextDay;

        lastSavedSnapshotRef.current = stableStringify(nextDay);

        loadedDateRef.current = dateKey;

        setDay(nextDay);
      } catch (error) {
        console.error("Failed to load manager day:", error);

        if (!alive) return;

        const emptyDay = getEmptyDay(dateKey);

        latestKeyRef.current = dateKey;
        latestDayRef.current = emptyDay;

        lastSavedSnapshotRef.current = stableStringify(emptyDay);

        loadedDateRef.current = dateKey;

        setDay(emptyDay);
        setErr("فشل تحميل بيانات اليوم");
        toast.error("فشل تحميل بيانات اليوم");
      } finally {
        if (alive) {
          setLoading(false);
        }
      }
    };

    loadSelectedDay();

    return () => {
      alive = false;
    };
  }, [authorized, dateKey, reloadToken, toast]);

  /*
    Autosave بعد 800ms من آخر تعديل.
  */
  useEffect(() => {
    if (!authorized || loading || loadedDateRef.current !== dateKey) {
      return undefined;
    }

    if (saveTimerRef.current) {
      window.clearTimeout(saveTimerRef.current);
    }

    saveTimerRef.current = window.setTimeout(() => {
      void doSave("autosave");
    }, 800);

    return () => {
      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current);

        saveTimerRef.current = null;
      }
    };
  }, [authorized, dateKey, day, loading, doSave]);

  /*
    محاولة أخيرة عند إغلاق التبويب.

    هذا Best effort فقط؛ المتصفح قد يغلق
    قبل اكتمال طلب الشبكة.
  */
  useEffect(() => {
    if (!authorized) return undefined;

    const handleBeforeUnload = () => {
      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current);
      }

      void doSave("beforeunload");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [authorized, doSave]);

  /*
    إجماليات اليوم.
  */
  const totals = useMemo(() => {
    const entries = Array.isArray(day.entries) ? day.entries : [];

    const total = entries.reduce((sum, entry) => sum + n(entry.amount), 0);

    const shopTotal = entries.reduce((sum, entry) => sum + n(entry.shop), 0);

    const youTotal = total - shopTotal;

    const defaultRate = n(day.defaultCarpetRatePerM2) || 15;

    const carpetCustomers = Array.isArray(day.carpetCustomers)
      ? day.carpetCustomers
      : [];

    const carpetsTotal = carpetCustomers.reduce((customersTotal, customer) => {
      const rugs = Array.isArray(customer?.rugs) ? customer.rugs : [];

      const customerTotal = rugs.reduce((rugTotal, rug) => {
        const rate = n(rug.ratePerM2) || defaultRate;

        let area = 0;

        if (rug.mode === "area") {
          area = n(rug.areaM2);
        } else {
          area = (n(rug.lengthCm) / 100) * (n(rug.widthCm) / 100);
        }

        return rugTotal + area * rate;
      }, 0);

      return customersTotal + customerTotal;
    }, 0);

    return {
      total,
      shopTotal,
      youTotal,
      carpetsTotal,
    };
  }, [day]);

  const isDirty = useMemo(() => {
    if (loadedDateRef.current !== dateKey) {
      return false;
    }

    return stableStringify(day) !== lastSavedSnapshotRef.current;
  }, [dateKey, day, lastSavedAt]);

  const guardIfClosed = (callback) => {
    if (isClosed) {
      toast.info("اليوم مغلق — العرض للقراءة فقط");

      return;
    }

    callback();
  };

  const addEntryFromCarpets = ({ title, customerName, amount, shop }) => {
    guardIfClosed(() => {
      setDay((currentDay) => ({
        ...currentDay,
        entries: [
          ...(currentDay.entries || []),
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

  /*
    بعد تسجيل الدخول بنجاح من AdminAuthGate.
    onAuthStateChanged سيؤكد الجلسة أيضًا،
    لكن التحديث هنا يجعل الدخول فوريًا.
  */
  const handleAuthorized = useCallback(
    (user) => {
      const signedInEmail = normalizeEmail(user?.email);

      if (!ADMIN_EMAIL || signedInEmail !== ADMIN_EMAIL) {
        setAuthError("هذا الحساب غير مخوّل للدخول إلى لوحة الإدارة.");

        void signOut(auth);

        return;
      }

      setAdminUser(user);
      setAuthReady(true);
      setAuthError("");

      toast.success("تم الدخول إلى لوحة الإدارة");
    },
    [toast],
  );

  /*
    حفظ قبل تغيير التاريخ.

    إذا فشل الحفظ نبقى في اليوم الحالي
    حتى لا يضيع التعديل.
  */
  const handleDateChange = useCallback(
    async (nextDateKey) => {
      if (!nextDateKey || nextDateKey === dateKey) {
        return;
      }

      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current);

        saveTimerRef.current = null;
      }

      const saved = await doSave("date-change");

      if (!saved) {
        toast.error("تعذر الحفظ، لذلك لم يتم تغيير اليوم.");

        return;
      }

      loadedDateRef.current = null;
      setDateKey(nextDateKey);
    },
    [dateKey, doSave, toast],
  );

  const handleTabChange = useCallback(
    (nextTab) => {
      /*
        لا نؤخر المستخدم؛ الحفظ يعمل
        بالخلفية لأن التبويبات لن تغير التاريخ.
      */
      void doSave("tab-change");

      setTab(normalizeTab(nextTab));
    },
    [doSave],
  );

  const handleReload = useCallback(async () => {
    if (loading) return;

    if (saveTimerRef.current) {
      window.clearTimeout(saveTimerRef.current);

      saveTimerRef.current = null;
    }

    const saved = await doSave("manual-reload");

    if (!saved) {
      toast.error("تعذر الحفظ، لذلك لم يتم تحديث البيانات.");

      return;
    }

    setReloadToken((current) => current + 1);
  }, [doSave, loading, toast]);

  /*
    خروج حقيقي:

    1. نحفظ التعديلات.
    2. نسجل الخروج من Firebase.
    3. نرجع إلى الموقع.
  */
  const handleExit = useCallback(async () => {
    if (signingOut) return;

    setSigningOut(true);

    if (saveTimerRef.current) {
      window.clearTimeout(saveTimerRef.current);

      saveTimerRef.current = null;
    }

    const saved = await doSave("logout");

    if (!saved) {
      toast.error(
        "تعذر حفظ التغييرات. لم يتم تسجيل الخروج حتى لا تضيع البيانات.",
      );

      setSigningOut(false);
      return;
    }

    try {
      await signOut(auth);

      setAdminUser(null);

      onExit?.();
    } catch (error) {
      console.error("Admin sign-out failed:", error);

      toast.error("تعذر تسجيل الخروج. حاول مرة ثانية.");

      setSigningOut(false);
    }
  }, [doSave, onExit, signingOut, toast]);

  if (!authReady) {
    return <AuthLoadingScreen />;
  }

  if (!authorized) {
    return (
      <>
        <AuthErrorNotice message={authError} />

        <AdminAuthGate onAuthorized={handleAuthorized} onExit={onExit} />
      </>
    );
  }

  return (
    <div
      className="
        min-h-screen bg-slate-100
      "
      dir="rtl"
    >
      {signingOut ? (
        <div
          className="
            fixed inset-0 z-[10300]
            flex items-center justify-center
            bg-slate-950/35 px-4
            backdrop-blur-sm
          "
          role="status"
          aria-live="polite"
        >
          <div
            className="
              flex items-center gap-3
              rounded-2xl border border-white/20
              bg-white px-5 py-4
              text-sm font-extrabold
              text-slate-800
              shadow-[0_18px_55px_rgba(15,23,42,0.22)]
            "
          >
            <LoaderCircle
              className="
                h-5 w-5 animate-spin
                text-blue-600
              "
              aria-hidden="true"
            />

            <span>جارٍ حفظ التغييرات وتسجيل الخروج...</span>
          </div>
        </div>
      ) : null}

      <AdminHeader
        tab={tabKey}
        setTab={handleTabChange}
        dateKey={dateKey}
        setDateKey={handleDateChange}
        totals={totals}
        onReload={handleReload}
        saving={saving}
        isDirty={isDirty}
        lastSavedAt={toMillis(lastSavedAt)}
        isClosed={isClosed}
        saveError={Boolean(saveError)}
        onExit={handleExit}
      />

      <main
        className="
          mx-auto max-w-6xl
          space-y-4 px-4 py-5
        "
      >
        {err ? (
          <div
            className="
              rounded-2xl border
              border-rose-200
              bg-rose-50 p-3
              text-sm font-bold
              text-rose-700
            "
            role="alert"
          >
            {err}
          </div>
        ) : null}

        {loading ? (
          <div
            className="
              flex min-h-40
              items-center justify-center
              gap-3 rounded-2xl
              border border-slate-200
              bg-white p-6
              text-sm font-extrabold
              text-slate-600 shadow-sm
            "
          >
            <LoaderCircle
              className="
                h-5 w-5 animate-spin
                text-blue-600
              "
              aria-hidden="true"
            />

            <span>جارٍ تحميل بيانات اليوم...</span>
          </div>
        ) : (
          <>
            {tabKey === "daily" ? (
              <DailyTab
                entries={day.entries || []}
                setEntries={(updater) =>
                  guardIfClosed(() =>
                    setDay((currentDay) => ({
                      ...currentDay,
                      entries:
                        typeof updater === "function"
                          ? updater(currentDay.entries || [])
                          : updater,
                    })),
                  )
                }
              />
            ) : null}

            {tabKey === "carpets" ? (
              <CarpetsTab
                defaultRatePerM2={day.defaultCarpetRatePerM2 || 15}
                setDefaultRatePerM2={(value) =>
                  guardIfClosed(() =>
                    setDay((currentDay) => ({
                      ...currentDay,
                      defaultCarpetRatePerM2: value,
                    })),
                  )
                }
                customers={day.carpetCustomers || []}
                setCustomers={(updater) =>
                  guardIfClosed(() =>
                    setDay((currentDay) => ({
                      ...currentDay,
                      carpetCustomers:
                        typeof updater === "function"
                          ? updater(currentDay.carpetCustomers || [])
                          : updater,
                    })),
                  )
                }
                onAddEntryFromCarpets={addEntryFromCarpets}
              />
            ) : null}

            {tabKey === "messages" ? <MessagesTab /> : null}
          </>
        )}
      </main>

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
