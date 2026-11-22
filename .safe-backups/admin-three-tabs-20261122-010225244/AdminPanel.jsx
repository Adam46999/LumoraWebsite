import React, { useCallback, useEffect, useState } from "react";
import { CalendarDays, Wallet, Image as ImageIcon, ChevronLeft, LoaderCircle, ShieldCheck } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
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

const businessDayFormat = new Intl.DateTimeFormat("en", {
  timeZone:"Asia/Jerusalem", year:"numeric", month:"2-digit", day:"2-digit"
});
function adminTodayKey() {
  const parts=businessDayFormat.formatToParts(new Date());
  return ["year","month","day"].map(key=>parts.find(p=>p.type===key).value).join("-");
}

function AdminTodayDashboard({uid,onCalendar}) {
  const [day,setDay]=useState(adminTodayKey);
  const [result,setResult]=useState(null);
  const [retry,setRetry]=useState(0);

  useEffect(()=>{
    const update=()=>setDay(adminTodayKey());
    const timer=window.setInterval(update,30000);
    document.addEventListener("visibilitychange",update);
    return ()=>{
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange",update);
    };
  },[]);

  useEffect(()=>{
    let active=true;
    setResult(null);
    const visits=query(collection(db,"lumora_calendar",uid,"appointments"),where("date","==",day));
    const stop=onSnapshot(visits,{includeMetadataChanges:true},snap=>{
      if (!active) return;
      const rows=snap.docs.map(d=>({...d.data(),id:d.id}));
      const booked=rows.filter(r=>r.status==="booked").sort((a,b)=>
        String(a.start).localeCompare(String(b.start)) || a.id.localeCompare(b.id));
      setResult({day,booked,done:rows.filter(r=>r.status==="done").length,
        cache:snap.metadata.fromCache});
    },error=>{
      if (active) setResult({day,error:error.code || "error"});
    });
    return ()=>{active=false;stop();};
  },[uid,day,retry]);

  const data=result?.day===day ? result : null;
  const available=!!data && !data.error && (!data.cache || data.booked.length>0 || data.done>0);
  const next=available ? data.booked[0] : null;
  const dateLabel=new Intl.DateTimeFormat("ar",{
    weekday:"long",day:"numeric",month:"long",year:"numeric"
  }).format(new Date(day+"T12:00:00"));

  return <section className="lumora-today" aria-labelledby="admin-today-title">
    <div className="lumora-today-heading">
      <h2 id="admin-today-title"><CalendarDays size={20} aria-hidden="true"/> جدول اليوم</h2>
      <span>{dateLabel}</span>
    </div>
    <div className="lumora-today-content">
      {available ? <>
        <div className="lumora-today-counts">
          <span>متبقّي <b>{data.booked.length}</b></span>
          <span>تم الشغل <b>{data.done}</b></span>
        </div>
        {next ? <>
          <span className="lumora-next-label">الزبون الجاي</span>
          <div className="lumora-next-visit">
            <strong><bdi dir="auto">{next.town} {next.number}</bdi></strong>
            <bdi dir="ltr">{next.start}{next.end ? " – "+next.end : ""}</bdi>
          </div>
        </> : <strong className="lumora-day-message">
          {data.done ? "خلصتوا مواعيد اليوم" : "ما في مواعيد مقرّرة اليوم"}
        </strong>}
        {data.cache && <small role="status">آخر بيانات محفوظة · بانتظار الاتصال</small>}
      </> : data?.error ? <div className="lumora-load-error" role="status">
        <span>{data.error==="permission-denied" ? "افحص صلاحية قراءة المواعيد." : "تعذّر تحميل جدول اليوم."}</span>
        <button type="button" onClick={()=>setRetry(n=>n+1)}>إعادة المحاولة</button>
      </div> : <span role="status">{data?.cache ? "بانتظار الاتصال لتأكيد مواعيد اليوم…" : "عم نحمّل مواعيد اليوم…"}</span>}
    </div>
    <div className="lumora-calendar-entry"><button type="button" className="wc-launch" onClick={onCalendar}>افتح المواعيد</button></div>
  </section>;
}

const adminDestinations=[
  ["today","☀️","اليوم"],["calendar","🗓️","المواعيد"],
  ["finance","👛","الدفتر"],["gallery","🖼️","الصور"]
];

function AdminPanelInner({ onExit, gallery }) {
  const [page,setPage]=useState("today");
  const leaveGuard=React.useRef(null);
  const pageHeading=React.useRef(null);
  const previousPage=React.useRef("today");
  function navigate(next) {
    if (page===next || (leaveGuard.current && !leaveGuard.current())) return;
    setPage(next);
  }
  React.useEffect(()=>{
    if (previousPage.current!==page) {
      previousPage.current=page;
      pageHeading.current?.focus({preventScroll:true});
    }
  },[page]);
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

      /* lumora-dashboard-today-v1 */
      .lumora-admin-home {
        background:var(--lumora-surface,#f5f7f2);
        padding-inline:clamp(12px,4vw,24px);
      }
      .lumora-admin-heading {
        padding-bottom:13px;
        border-bottom:1px solid var(--lumora-border,#dfe5dc);
        margin-bottom:16px;
      }
      .lumora-today {
        padding:clamp(16px,4vw,25px);
        border-radius:22px;
        color:white;
        background:linear-gradient(130deg,var(--lumora-navy-800,#1b2147),var(--lumora-navy-950,#080c1d));
        box-shadow:0 6px 20px rgb(17 21 47 / 10%);
      }
      .lumora-today-heading {
        display:flex;align-items:center;justify-content:space-between;
        flex-wrap:wrap;gap:5px 14px;
      }
      .lumora-today-heading h2 {
        display:flex;align-items:center;gap:8px;
        margin:0;font-size:17px;font-weight:750;color:white;
      }
      .lumora-today-heading h2 svg {color:var(--lumora-lime,#aedd39)}
      .lumora-today-heading>span,.lumora-today-content small {font-size:13px;color:#cbd0e1}
      .lumora-today-content {padding-block:16px;display:grid;gap:7px}
      .lumora-today-counts {
        display:flex;align-items:center;gap:18px;flex-wrap:wrap;
        color:#d7dbea;font-size:14px;margin-bottom:7px;
      }
      .lumora-today-counts b {color:white;font-variant-numeric:tabular-nums}
      .lumora-next-label {color:#c4ec5b;font-size:13px}
      .lumora-next-visit {
        display:flex;align-items:baseline;justify-content:space-between;
        flex-wrap:wrap;gap:5px 12px;
      }
      .lumora-next-visit strong {
        color:white;font-size:clamp(23px,5vw,30px);line-height:1.35;overflow-wrap:anywhere;
      }
      .lumora-next-visit>bdi {
        color:white;font-size:20px;font-weight:650;font-variant-numeric:tabular-nums;
      }
      .lumora-day-message {color:white;font-size:20px}
      .lumora-calendar-entry>.wc-launch {
        width:100%;min-height:46px;margin:0;
        background:var(--lumora-lime,#aedd39);color:var(--lumora-navy-950,#080c1d);
        border:0;border-radius:12px;font-weight:750;
      }
      .lumora-load-error {display:flex;align-items:center;gap:10px;flex-wrap:wrap}
      .lumora-load-error button {min-height:44px;text-decoration:underline}
      .lumora-secondary-tools {
        display:grid;grid-template-columns:repeat(2,minmax(0,1fr));
        gap:10px;margin-top:12px;
      }
      .lumora-secondary-tools .lumora-admin-tool>button {
        display:flex;align-items:flex-end;justify-content:flex-start;
        min-height:116px;padding:58px 13px 14px;
        white-space:normal;line-height:1.4;font-size:16px;
        background:var(--lumora-white,#fff)!important;
        color:var(--lumora-navy-900,#11152f)!important;
        border:1px solid var(--lumora-border,#dfe5dc);
        border-radius:16px;
      }
      .lumora-secondary-tools .lumora-admin-tool-icon {
        top:12px;inset-inline-start:13px;transform:none;
        width:35px;height:35px;border-radius:10px;
        background:var(--lumora-surface,#f5f7f2);
      }
      .lumora-secondary-tools .lumora-admin-tool-arrow {
        top:21px;inset-inline-end:12px;transform:none;width:16px;
      }
      @media(max-width:340px) {
        .lumora-secondary-tools {grid-template-columns:1fr}
        .lumora-secondary-tools .lumora-admin-tool>button {
          min-height:65px;padding:13px 60px 13px 32px;align-items:center;
        }
      }

      /* admin-bottom-nav-v1 */
      .lumora-admin-home {
        box-sizing:border-box;height:100vh;height:100dvh;min-height:0;
        display:flex;flex-direction:column;overflow:hidden;
        padding-block: max(10px,env(safe-area-inset-top)) 0;
      }
      .lumora-admin-shell {
        flex:1;min-height:0;display:flex;flex-direction:column;
      }
      .lumora-admin-heading {flex:none;margin-bottom:8px;padding-bottom:8px}
      .lumora-admin-heading h1:focus {outline:none}
      .lumora-page-content {
        flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;
        padding-bottom:10px;
      }
      .lumora-page-content section[data-embedded=true] {
        display:block;position:relative;inset:auto;box-sizing:border-box;
        width:100%;max-width:none;height:100%;min-height:0;max-height:none;
        margin:0;border:0;box-shadow:none;overflow:auto;
      }
      .lumora-page-content .wc[data-embedded=true][data-form=true] {
        display:flex;flex-direction:column;overflow:hidden;
      }
      .lumora-bottom-nav {
        flex:none;background:white;border-top:1px solid var(--lumora-border,#dfe5dc);
        padding:5px 4px max(5px,env(safe-area-inset-bottom));
      }
      .lumora-bottom-nav>div {
        display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;
      }
      .lumora-bottom-nav button {
        display:grid;justify-items:center;align-content:center;gap:2px;
        min-width:0;min-height:54px;padding:3px;border-radius:12px;
        color:var(--lumora-text-soft,#5f6878);background:transparent;
      }
      .lumora-bottom-nav button span {font-size:21px;line-height:1.2}
      .lumora-bottom-nav button strong {font-size:12px;line-height:1.4}
      .lumora-bottom-nav button[aria-current=page] {
        background:#edf5d9;color:var(--lumora-navy-900,#11152f);
        box-shadow:inset 0 -3px var(--lumora-lime,#aedd39);
      }
      .lumora-bottom-nav button:focus-visible {
        outline:2px solid var(--lumora-cyan,#1094c0);outline-offset:-2px;
      }
      @media(min-width:700px){
        .lumora-bottom-nav {border:1px solid var(--lumora-border,#dfe5dc);border-radius:16px;margin-bottom:10px}
      }
    `}</style>
    <div className="lumora-admin-shell">
      <header className="lumora-admin-heading">
        <h1 ref={pageHeading} tabIndex={-1}>{page==="today" ? "لوحة الإدارة" : adminDestinations.find(item=>item[0]===page)[2]}</h1>
        <button type="button" disabled={signingOut} onClick={leaveAdmin}>
          {signingOut ? "جارٍ الخروج…" : "تسجيل الخروج"}
        </button>
      </header>
      <div className="lumora-page-content" key={adminUser.uid+page}>
        {page==="today" && <AdminTodayDashboard uid={adminUser.uid} onCalendar={()=>navigate("calendar")}/>}
        {page==="calendar" && <WorkCalendar embedded leaveGuard={leaveGuard} onHome={()=>setPage("today")}/>}
        {page==="finance" && <FinanceBook embedded leaveGuard={leaveGuard} onHome={()=>setPage("today")}/>}
        {page==="gallery" && <GalleryManager gallery={gallery} embedded leaveGuard={leaveGuard} onHome={()=>setPage("today")}/>}
      </div>
      <nav className="lumora-bottom-nav" aria-label="أقسام الإدارة">
        <div>{adminDestinations.map(([key,icon,label])=>
          <button key={key} type="button" aria-current={page===key ? "page" : undefined}
            onClick={()=>navigate(key)}>
            <span aria-hidden="true">{icon}</span><strong>{label}</strong>
          </button>
        )}</div>
      </nav>
    </div>
  </main>;
}

export default function AdminPanel(props) {
  return <ToastProvider><AdminPanelInner {...props}/></ToastProvider>;
}
