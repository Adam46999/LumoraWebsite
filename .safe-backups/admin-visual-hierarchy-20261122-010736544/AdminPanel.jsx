import React, { useCallback, useEffect, useState } from "react";
import { CalendarDays, Wallet, Image as ImageIcon, ChevronLeft, LoaderCircle, ShieldCheck } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import AdminAuthGate from "./AdminAuthGate";
import WorkCalendar from "./WorkCalendar";
import FinanceBook from "./FinanceBook";
import GalleryManager from "../BefAfter/GalleryManager";
import { ToastProvider, useToast } from "./lib/toast";

const ADMIN_EMAIL = (String(import.meta.env.VITE_ADMIN_EMAIL || "").trim() || "amir@lumora.example")
  .trim()
  .toLowerCase();

function normalizeEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
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

function AdminPanelInner({ onExit, gallery }) {
  const [page,setPage]=useState("calendar");
  const leaveGuard=React.useRef(null);
  const schedulePosition=React.useRef(null);
  const goCalendar=()=>setPage("calendar");
  function navigate(next) {
    if (next===page || (leaveGuard.current && !leaveGuard.current())) return;
    setPage(next);
  }
  const toast = useToast();
  const [authReady, setAuthReady] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [signingOut, setSigningOut] = useState(false);

  const authorized = Boolean(authReady && adminUser);

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

  async function leaveAdmin() {
    if (signingOut || (leaveGuard.current && !leaveGuard.current())) return;
    setSigningOut(true);
    try {
      await signOut(auth);
    } catch {
      setSigningOut(false);
      toast.error("تعذّر تسجيل الخروج. حاول مرة ثانية.");
      return;
    }
    setSigningOut(false);
    onExit?.();
  }

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
  return <main className="la-app" dir="rtl">
    <style>{`
      /* lumora-three-tabs-v1 */
      .la-app {
        block-size:100vh;block-size:100dvh;box-sizing:border-box;overflow:hidden;
        display:flex;flex-direction:column;align-items:center;
        background:var(--lumora-surface,#f5f7f2);color:var(--lumora-navy-900,#11152f);
        padding-top:env(safe-area-inset-top);
      }
      .la-brand,.la-page,.la-tabs {width:100%;max-width:720px;box-sizing:border-box}
      .la-brand {
        flex:none;display:flex;align-items:center;justify-content:space-between;
        padding:5px 16px;border-bottom:1px solid var(--lumora-border,#dfe5dc);
      }
      .la-brand h1 {margin:0;font-size:17px;font-weight:750}
      .la-brand button {
        min-height:44px;padding-inline:6px;font:inherit;font-size:13px;
        color:var(--lumora-text-soft,#5f6878);background:transparent;border:0;
      }
      .la-page {flex:1;min-height:0;overflow:hidden}
      .la-page > section[data-embedded=true] {
        display:block;position:relative;inset:auto;margin:0;box-sizing:border-box;
        width:100%;max-width:none;height:100%;min-height:0;max-height:none;
        overflow:auto;overscroll-behavior:contain;border:0;border-radius:0;
        padding-top:0;padding-bottom:12px;box-shadow:none;
      }
      .la-page > .wc[data-form=true] {display:flex;flex-direction:column;overflow:hidden}
      .la-page > .wc[data-embedded=true] {padding-top:0}
      .la-tabs {
        flex:none;background:white;border-top:1px solid var(--lumora-border,#dfe5dc);
        display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
        padding:4px 8px max(5px,env(safe-area-inset-bottom));gap:4px;
      }
      .la-tabs button {
        min-height:52px;display:grid;justify-items:center;align-content:center;
        gap:3px;background:transparent;border:0;border-radius:12px;
        font-size:12px;font-weight:650;color:var(--lumora-text-soft,#5f6878);
      }
      .la-tabs button[aria-current=page] {
        background:#eff6dd;color:var(--lumora-navy-900,#11152f);
        box-shadow:inset 0 -3px var(--lumora-lime,#aedd39);
      }
      .la-tabs button:focus-visible,.la-brand button:focus-visible {
        outline:2px solid var(--lumora-cyan,#1094c0);outline-offset:-2px;
      }

      /* admin-unified-header-v1 */
      .la-app {
        --la-ink:var(--lumora-navy-900,#11152f);
        --la-muted:var(--lumora-text-soft,#5f6878);
        --la-line:var(--lumora-border,#dfe5dc);
        --la-surface:var(--lumora-surface,#f5f7f2);
      }
      .la-brand {
        min-height:60px;padding:6px clamp(12px,3vw,20px);
        background:var(--la-surface);border-bottom:1px solid var(--la-line);
      }
      .la-brand h1 {
        display:flex;align-items:baseline;flex-wrap:wrap;gap:8px;
        color:var(--la-ink);font-size:20px;line-height:1.4;font-weight:750;
      }
      .la-brand-name {font-size:14px;color:var(--la-muted)}
      .la-brand-divider {font-size:14px;color:var(--la-muted);font-weight:400}
      .la-brand button {flex-shrink:0;min-height:44px;padding-inline:8px}
      .la-page > section[data-embedded=true] {
        padding-inline:clamp(10px,3vw,18px);
        padding-top:10px;background:var(--la-surface);color:var(--la-ink);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] {
        position:sticky;top:0;z-index:2;
        display:flex;align-items:center;justify-content:space-between;
        gap:10px;min-height:52px;margin:0 0 10px;padding:4px 0 8px;
        background:var(--la-surface);color:var(--la-ink);
        border-bottom:1px solid var(--la-line);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] h2 {
        margin:0;color:var(--la-ink);font-size:17px;font-weight:700;line-height:1.4;
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] button {
        flex-shrink:0;min-height:44px;padding:6px 12px;
        border:1px solid var(--la-line);border-radius:10px;background:white;
        color:var(--la-ink);font-size:14px;font-weight:650;
      }
    `}</style>
    <header className="la-brand">
      <h1><span className="la-brand-name">Lumora</span><span aria-hidden="true" className="la-brand-divider">/</span><span>{page==="calendar" ? "المواعيد" : page==="finance" ? "الحسابات" : "الصور"}</span></h1>
      <button type="button" disabled={signingOut} onClick={leaveAdmin}>
        {signingOut ? "جارٍ الخروج…" : "تسجيل الخروج"}
      </button>
    </header>
    <div className="la-page" key={adminUser.uid+page}>
      {page==="calendar" && <WorkCalendar embedded leaveGuard={leaveGuard} onHome={goCalendar} schedulePosition={schedulePosition}/>}
      {page==="finance" && <FinanceBook embedded leaveGuard={leaveGuard} onHome={goCalendar}/>}
      {page==="gallery" && <GalleryManager gallery={gallery} embedded leaveGuard={leaveGuard} onHome={goCalendar}/>}
    </div>
    <nav aria-label="أقسام الإدارة" className="la-tabs">
      {[[CalendarDays,"calendar","المواعيد"],[Wallet,"finance","الحسابات"],[ImageIcon,"gallery","الصور"]]
        .map(([Icon,key,label])=><button type="button" key={key}
          aria-current={page===key ? "page" : undefined} onClick={()=>navigate(key)}>
          <Icon size={21} aria-hidden="true"/><span>{label}</span>
        </button>)}
    </nav>
  </main>;
}

export default function AdminPanel(props) {
  return <ToastProvider><AdminPanelInner {...props}/></ToastProvider>;
}
