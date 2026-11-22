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

function AdminToolCard({ icon: Icon, primary = false, children }) {
  return <div className="lumora-admin-tool" data-primary={primary}>
    <span className="lumora-admin-tool-icon" aria-hidden="true"><Icon size={23}/></span>
    {children}
    <ChevronLeft className="lumora-admin-tool-arrow" size={19} aria-hidden="true"/>
  </div>;
}

function AdminPanelInner({ onExit, gallery }) {
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
    if (signingOut) return;
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
  return <main className="lumora-admin-home" dir="rtl">
    <style>{`
      .lumora-admin-home {
        background:var(--lumora-surface,#f5f7f2);
        color:var(--lumora-navy-900,#11152f);
        min-height:100vh;min-height:100dvh;
        padding:clamp(18px,5vw,44px) 16px max(24px,env(safe-area-inset-bottom));
      }
      .lumora-admin-shell {width:100%;max-width:640px;margin-inline:auto}
      .lumora-admin-heading {
        display:flex;align-items:center;justify-content:space-between;
        gap:12px;margin-bottom:22px;
      }
      .lumora-admin-heading h1 {
        margin:0;font-size:clamp(23px,5vw,31px);line-height:1.4;font-weight:800
      }
      .lumora-admin-heading button {
        min-height:44px;padding:5px 12px;border:1px solid var(--lumora-border,#dfe5dc);
        border-radius:10px;color:var(--lumora-text-soft,#5f6878);background:white;font-size:14px
      }
      .lumora-admin-tools {display:grid;gap:10px}
      .lumora-admin-tool {position:relative;min-width:0}
      .lumora-admin-tool > button {
        width:100%;min-height:78px;padding:16px 72px 16px 44px;
        display:flex;align-items:center;justify-content:flex-start;text-align:start;
        margin:0;border-radius:16px;border:1px solid var(--lumora-border,#dfe5dc);
        background:var(--lumora-white,#fff);color:var(--lumora-navy-900,#11152f);
        font:inherit;font-size:clamp(16px,4vw,19px);font-weight:750;line-height:1.45;
        box-shadow:0 2px 6px rgb(17 21 47 / 4%);
      }
      .lumora-admin-tool-icon,.lumora-admin-tool-arrow {
        pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);
      }
      .lumora-admin-tool-icon {
        inset-inline-start:14px;display:grid;place-items:center;width:44px;height:44px;
        border-radius:13px;background:var(--lumora-surface,#f5f7f2);
        color:var(--lumora-navy-900,#11152f)
      }
      .lumora-admin-tool-arrow {inset-inline-end:15px;color:var(--lumora-text-soft,#5f6878)}
      .lumora-admin-tool[data-primary=true] > button {
        color:white;background:var(--lumora-navy-900,#11152f);border-color:transparent
      }
      .lumora-admin-tool[data-primary=true] > .lumora-admin-tool-icon {
        background:var(--lumora-lime,#aedd39);color:var(--lumora-navy-950,#080c1d)
      }
      .lumora-admin-tool[data-primary=true] > .lumora-admin-tool-arrow {color:white}
      .lumora-admin-tool > button:active {filter:brightness(.94)}
      .lumora-admin-tool > button:focus-visible,.lumora-admin-heading button:focus-visible {
        outline:3px solid var(--lumora-cyan,#1094c0);outline-offset:3px
      }
    `}</style>
    <div className="lumora-admin-shell">
      <header className="lumora-admin-heading">
        <h1>لوحة الإدارة</h1>
        <button type="button" disabled={signingOut} onClick={leaveAdmin}>
          {signingOut ? "جارٍ الخروج…" : "تسجيل الخروج"}
        </button>
      </header>
      <div className="lumora-admin-tools">
        <AdminToolCard icon={CalendarDays} primary><WorkCalendar /></AdminToolCard>
        <AdminToolCard icon={Wallet}><FinanceBook /></AdminToolCard>
        <AdminToolCard icon={ImageIcon}><GalleryManager gallery={gallery} /></AdminToolCard>
      </div>
    </div>
  </main>;
}

export default function AdminPanel(props) {
  return <ToastProvider><AdminPanelInner {...props}/></ToastProvider>;
}
