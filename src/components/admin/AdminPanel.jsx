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
  const [calendarActionHost,setCalendarActionHost]=useState(null);
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
  const [SectionIcon,sectionLabel] = page==="finance" ? [Wallet,"الحسابات"]
    : page==="gallery" ? [ImageIcon,"الصور"] : [CalendarDays,"المواعيد"];
  return <main className="la-app" dir="rtl" data-section={page}>
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

      /* admin-section-hierarchy-v1 */
      .la-app {
        --la-ink:var(--lumora-navy-900,#11152f);
        --la-muted:var(--lumora-text-soft,#5f6878);
        --la-line:var(--lumora-border,#dfe5dc);
        --la-bg:var(--lumora-surface,#f5f7f2);
        --la-tint:#eaf4d4;
        --la-accent:#405713;
        background:var(--la-bg);color:var(--la-ink);
      }
      .la-app[data-section="finance"] {--la-tint:#e0f2f8;--la-accent:#18536b}
      .la-app[data-section="gallery"] {--la-tint:#eeeafa;--la-accent:#544582}

      .la-app .la-brand {
        flex:none;display:flex;align-items:center;justify-content:space-between;
        min-height:65px;padding:7px clamp(12px,3.5vw,22px);
        gap:12px;border-bottom:1px solid var(--la-line);background:var(--la-bg);
      }
      .la-app .la-brand h1 {
        display:flex;align-items:center;gap:10px;min-width:0;margin:0;
      }
      .la-section-icon {
        display:grid;place-items:center;flex:0 0 40px;height:40px;
        border-radius:13px;color:var(--la-accent);background:var(--la-tint);
      }
      .la-heading-copy {display:grid;justify-items:start;gap:0}
      .la-wordmark {
        font-size:12px;line-height:1.3;font-weight:650;color:var(--la-muted);
      }
      .la-section-name {
        font-size:clamp(20px,4.8vw,25px);font-weight:800;line-height:1.35;
        color:var(--la-ink);
      }
      .la-app .la-brand button {
        flex-shrink:0;min-height:44px;padding:6px 10px;
        color:var(--la-muted);background:transparent;
        border:1px solid transparent;border-radius:10px;
        font-size:13px;font-weight:600;
      }

      .la-page > section[data-embedded=true] {
        padding-inline:clamp(10px,3.5vw,22px);
        background:var(--la-bg);color:var(--la-ink);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] {
        gap:8px;min-height:50px;background:var(--la-bg);
        border-bottom:1px solid var(--la-line);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] h2 {
        color:var(--la-ink);font-size:17px;line-height:1.45;font-weight:700;
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] button {
        min-height:44px;padding-inline:12px;border-radius:10px;
        color:var(--la-ink);border:1px solid var(--la-line);background:white;
      }

      .la-app .la-tabs {
        flex:none;position:relative;z-index:1;
        display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
        gap:4px;padding:4px 8px max(5px,env(safe-area-inset-bottom));
        background:white;border-top:1px solid var(--la-line);
        box-shadow:0 -3px 12px rgb(17 21 47 / 4%);
      }
      .la-app .la-tabs button {
        display:grid;align-content:center;justify-items:center;gap:2px;
        min-width:0;min-height:54px;padding:2px 4px;border:0;
        background:transparent;color:var(--la-muted);box-shadow:none;
      }
      .la-tab-icon {
        display:grid;place-items:center;width:46px;height:28px;
        border-radius:12px;
      }
      .la-tab-label {font-size:12px;font-weight:600;line-height:1.4}
      .la-app .la-tabs button[aria-current=page] {
        color:var(--la-ink);background:transparent;box-shadow:none;
      }
      .la-tabs button[aria-current=page] .la-tab-icon {
        background:var(--la-tint);color:var(--la-accent);
      }
      .la-tabs button[aria-current=page] .la-tab-icon svg {stroke-width:2.5}
      .la-tabs button[aria-current=page] .la-tab-label {font-weight:800}
      .la-app .la-tabs button:focus-visible,
      .la-app .la-brand button:focus-visible {
        outline:2px solid var(--lumora-cyan,#1094c0);outline-offset:-2px;
      }
      @media(hover:hover) {
        .la-brand button:hover,.la-tabs button:not([aria-current]):hover {
          background:var(--la-bg);color:var(--la-ink);
        }
      }
      @media(max-height:540px) {
        .la-app .la-brand {min-height:46px;padding-block:1px}
        .la-app .la-wordmark {display:none}
        .la-app .la-tabs button {min-height:44px;display:flex;justify-content:center;gap:4px}
        .la-app .la-tab-icon {width:30px;height:26px}
      }
    `}</style>
    <header className="la-brand">
      <h1>
        <span className="la-section-icon" aria-hidden="true"><SectionIcon size={22}/></span>
        <span className="la-heading-copy">
          <span className="sr-only">Lumora </span>
          <span className="la-section-name">{sectionLabel}</span>
        </span>
      </h1>
      {page==="calendar" && <div className="la-calendar-actions" ref={setCalendarActionHost}/>}
      <button type="button" className="la-signout" disabled={signingOut}
          aria-label="تسجيل الخروج" title="تسجيل الخروج"
          onClick={()=>{if(window.confirm("تسجيل الخروج من إدارة Lumora؟")) leaveAdmin();}}>
        <svg className="la-exit-icon" viewBox="0 0 24 24" width="20" height="20"
          fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
          strokeLinejoin="round" aria-hidden="true">
          <path d="M10 4H5v16h5M10 12h11m-4-4 4 4-4 4"/>
        </svg>
      </button>
    </header>
    <div className="la-page" key={adminUser.uid+page}>
      {page==="calendar" && <WorkCalendar actionHost={calendarActionHost} embedded leaveGuard={leaveGuard} onHome={goCalendar} schedulePosition={schedulePosition}/>}
      {page==="finance" && <FinanceBook embedded leaveGuard={leaveGuard} onHome={goCalendar}/>}
      {page==="gallery" && <GalleryManager gallery={gallery} embedded leaveGuard={leaveGuard} onHome={goCalendar}/>}
    </div>
    <nav aria-label="أقسام الإدارة" className="la-tabs">
      {[[CalendarDays,"calendar","المواعيد"],[Wallet,"finance","الحسابات"],[ImageIcon,"gallery","الصور"]]
        .map(([Icon,key,label])=><button type="button" key={key}
          aria-current={page===key ? "page" : undefined} onClick={()=>navigate(key)}>
          <span className="la-tab-icon" aria-hidden="true"><Icon size={21}/></span><span className="la-tab-label">{label}</span>
        </button>)}
    </nav>
  </main>;
}

export default function AdminPanel(props) {
  return <ToastProvider><AdminPanelInner {...props}/></ToastProvider>;
}
