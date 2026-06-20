// src/components/admin/AdminAuthGate.jsx
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase";

const ADMIN_EMAIL = String(import.meta.env.VITE_ADMIN_EMAIL || "")
  .trim()
  .toLowerCase();

function getFriendlyError(error) {
  const code = error?.code || "";

  switch (code) {
    case "auth/invalid-email":
      return "عنوان البريد الإلكتروني غير صحيح.";

    case "auth/missing-password":
      return "اكتب كلمة المرور.";

    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "البريد الإلكتروني أو كلمة المرور غير صحيحة.";

    case "auth/user-disabled":
      return "تم تعطيل هذا الحساب. راجع إعدادات Firebase.";

    case "auth/too-many-requests":
      return "تمت محاولات كثيرة. انتظر قليلًا ثم جرّب مرة ثانية.";

    case "auth/network-request-failed":
      return "تعذر الاتصال بالإنترنت. افحص الاتصال وحاول مرة ثانية.";

    case "auth/operation-not-allowed":
      return "تسجيل الدخول بالبريد غير مفعّل في Firebase.";

    default:
      return "تعذر تسجيل الدخول. حاول مرة ثانية.";
  }
}

export default function AdminAuthGate({ onAuthorized, onExit }) {
  const [email, setEmail] = useState(ADMIN_EMAIL || "");

  const [password, setPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const configurationMissing = !ADMIN_EMAIL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    const normalizedEmail = email.trim().toLowerCase();

    if (configurationMissing) {
      setError("لازم تضيف بريد الأدمن داخل ملف .env.local أولًا.");
      return;
    }

    if (!normalizedEmail) {
      setError("اكتب البريد الإلكتروني.");
      return;
    }

    if (!password) {
      setError("اكتب كلمة المرور.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await setPersistence(
        auth,
        rememberDevice ? browserLocalPersistence : browserSessionPersistence,
      );

      const credential = await signInWithEmailAndPassword(
        auth,
        normalizedEmail,
        password,
      );

      const signedInEmail = String(credential.user?.email || "")
        .trim()
        .toLowerCase();

      /*
        هذا الفحص يمنع أي حساب Firebase آخر
        من دخول لوحة الإدارة من الواجهة.
      */
      if (signedInEmail !== ADMIN_EMAIL) {
        await signOut(auth);

        setError("هذا الحساب غير مخوّل للدخول إلى لوحة الإدارة.");

        return;
      }

      setPassword("");
      onAuthorized?.(credential.user);
    } catch (authError) {
      console.error("Admin sign-in failed:", authError);
      setError(getFriendlyError(authError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        relative flex min-h-screen items-center justify-center
        overflow-hidden bg-[#F6F8FC]
        px-4 py-8
      "
      dir="rtl"
    >
      {/* زخرفة خفيفة */}
      <div
        className="
          pointer-events-none absolute start-[-130px] top-[-140px]
          h-[330px] w-[330px]
          rounded-full bg-blue-100/70 blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute bottom-[-160px] end-[-130px]
          h-[350px] w-[350px]
          rounded-full bg-slate-200/70 blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md">
        <section
          className="
            overflow-hidden rounded-[30px]
            border border-slate-200 bg-white
            shadow-[0_24px_70px_rgba(15,23,42,0.12)]
          "
          aria-labelledby="admin-login-title"
        >
          {/* رأس الشاشة */}
          <header
            className="
              border-b border-slate-100
              bg-slate-50/80 px-5 py-6
              text-center sm:px-7
            "
          >
            <div
              className="
                mx-auto flex h-14 w-14
                items-center justify-center
                rounded-2xl bg-blue-600
                text-white
                shadow-[0_10px_28px_rgba(37,99,235,0.28)]
              "
              aria-hidden="true"
            >
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h1
              id="admin-login-title"
              className="
                mt-4 text-2xl font-black
                tracking-tight text-slate-950
              "
            >
              لوحة إدارة Lumora
            </h1>

            <p
              className="
                mx-auto mt-2 max-w-sm
                text-sm font-medium leading-6
                text-slate-500
              "
            >
              سجّل الدخول بحساب الإدارة للوصول إلى البيانات وإدارة العمل.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="px-5 py-6 sm:px-7"
            noValidate
          >
            {/* البريد */}
            <div>
              <label
                htmlFor="admin-email"
                className="
                  block text-sm font-extrabold
                  text-slate-800
                "
              >
                البريد الإلكتروني
              </label>

              <div className="relative mt-2">
                <Mail
                  className="
                    pointer-events-none absolute
                    start-4 top-1/2 h-5 w-5
                    -translate-y-1/2 text-slate-400
                  "
                  aria-hidden="true"
                />

                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  autoComplete="username"
                  inputMode="email"
                  placeholder="admin@example.com"
                  disabled={loading}
                  className="
                    h-13 w-full rounded-2xl
                    border border-slate-200
                    bg-white py-3
                    pe-4 ps-12
                    text-sm font-bold text-slate-900
                    outline-none transition
                    placeholder:font-medium
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-4 focus:ring-blue-100
                    disabled:cursor-not-allowed
                    disabled:bg-slate-50
                    disabled:opacity-70
                  "
                />
              </div>
            </div>

            {/* كلمة المرور */}
            <div className="mt-5">
              <label
                htmlFor="admin-password"
                className="
                  block text-sm font-extrabold
                  text-slate-800
                "
              >
                كلمة المرور
              </label>

              <div className="relative mt-2">
                <LockKeyhole
                  className="
                    pointer-events-none absolute
                    start-4 top-1/2 h-5 w-5
                    -translate-y-1/2 text-slate-400
                  "
                  aria-hidden="true"
                />

                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  autoComplete="current-password"
                  placeholder="أدخل كلمة المرور"
                  disabled={loading}
                  className="
                    h-13 w-full rounded-2xl
                    border border-slate-200
                    bg-white py-3
                    pe-12 ps-12
                    text-sm font-bold text-slate-900
                    outline-none transition
                    placeholder:font-medium
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-4 focus:ring-blue-100
                    disabled:cursor-not-allowed
                    disabled:bg-slate-50
                    disabled:opacity-70
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  disabled={loading}
                  className="
                    absolute end-2 top-1/2
                    flex h-10 w-10
                    -translate-y-1/2
                    items-center justify-center
                    rounded-xl text-slate-500
                    transition
                    hover:bg-slate-100
                    hover:text-slate-800
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-300
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                  aria-label={
                    showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* تذكّر الجهاز */}
            <label
              className="
                mt-4 flex cursor-pointer
                items-start gap-3
                rounded-2xl border border-slate-200
                bg-slate-50/70 p-3.5
              "
            >
              <input
                type="checkbox"
                checked={rememberDevice}
                onChange={(event) => setRememberDevice(event.target.checked)}
                disabled={loading}
                className="
                  mt-0.5 h-4 w-4 shrink-0
                  rounded border-slate-300
                  text-blue-600
                  focus:ring-blue-500
                "
              />

              <span>
                <span
                  className="
                    block text-sm font-extrabold
                    text-slate-800
                  "
                >
                  تذكّر هذا الجهاز
                </span>

                <span
                  className="
                    mt-0.5 block text-xs
                    font-medium leading-5
                    text-slate-500
                  "
                >
                  ألغِ الخيار إذا كان الجهاز مشتركًا مع أشخاص آخرين.
                </span>
              </span>
            </label>

            {/* الخطأ */}
            {error ? (
              <div
                className="
                  mt-4 rounded-2xl
                  border border-rose-200
                  bg-rose-50 px-4 py-3
                  text-sm font-bold leading-6
                  text-rose-700
                "
                role="alert"
              >
                {error}
              </div>
            ) : null}

            {/* دخول */}
            <button
              type="submit"
              disabled={loading || configurationMissing}
              className="
                mt-5 inline-flex min-h-12
                w-full items-center justify-center
                gap-2 rounded-2xl
                bg-blue-600 px-5
                text-sm font-extrabold text-white
                shadow-[0_10px_28px_rgba(37,99,235,0.25)]
                transition
                hover:bg-blue-700
                active:scale-[0.98]
                focus-visible:outline-none
                focus-visible:ring-4
                focus-visible:ring-blue-200
                disabled:cursor-not-allowed
                disabled:bg-slate-300
                disabled:shadow-none
              "
            >
              {loading ? (
                <>
                  <LoaderCircle
                    className="h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />

                  <span>جارٍ تسجيل الدخول...</span>
                </>
              ) : (
                <>
                  <span>دخول إلى لوحة الإدارة</span>

                  <ArrowRight
                    className="h-4 w-4 rotate-180"
                    aria-hidden="true"
                  />
                </>
              )}
            </button>

            {onExit ? (
              <button
                type="button"
                onClick={onExit}
                disabled={loading}
                className="
                  mt-2 min-h-11 w-full
                  rounded-2xl border
                  border-slate-200 bg-white
                  px-4 text-sm font-extrabold
                  text-slate-600 transition
                  hover:bg-slate-50
                  hover:text-slate-900
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-slate-200
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                العودة إلى الموقع
              </button>
            ) : null}
          </form>
        </section>

        <p
          className="
            mt-4 text-center text-xs
            font-medium leading-5 text-slate-400
          "
        >
          الوصول مخصص لحساب الإدارة المعتمد فقط.
        </p>
      </div>
    </main>
  );
}
