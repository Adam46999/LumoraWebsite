// src/components/contact/MagicSendButton.jsx
import { PaperPlaneTilt, CheckCircle, Spinner } from "phosphor-react";

export default function MagicSendButton({
  state = "idle",
  disabled = false,
  labelIdle = "إرسال",
  labelLoading = "جارٍ الإرسال...",
  labelSuccess = "تم الإرسال!",
}) {
  const isLoading = state === "loading";
  const isSuccess = state === "success";

  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      className={`group relative w-56 h-14 rounded-full overflow-hidden flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-500 select-none
      ${
        isSuccess
          ? "bg-green-500 text-white shadow-[0_6px_25px_rgba(34,197,94,0.4)]"
          : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-[0_6px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.45)]"
      } ${
        disabled ? "opacity-60 cursor-not-allowed" : "active:scale-[0.96]"
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300`}
      style={{
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
      }}
      aria-live="polite"
    >
      {/* لمعان متحرّك مخفف على الموبايل */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine opacity-70 blur-[2px]" />

      {isLoading ? (
        <>
          <Spinner size={22} className="animate-spin" />
          <span>{labelLoading}</span>
        </>
      ) : isSuccess ? (
        <>
          <CheckCircle size={24} weight="fill" />
          <span>{labelSuccess}</span>
        </>
      ) : (
        <>
          <PaperPlaneTilt
            size={22}
            weight="fill"
            className="transform transition-transform duration-300 group-hover:-translate-y-[2px]"
          />
          <span>{labelIdle}</span>
        </>
      )}

      <div className="absolute inset-0 rounded-full border border-white/30 shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)] pointer-events-none" />

      <style>
        {`
        @keyframes shine { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .animate-shine { background-size:200% auto; animation: shine 3s linear infinite; }
        @media (max-width:640px){
          .animate-shine{ animation-duration:4s; opacity:.55 }
        }
        @media (prefers-reduced-motion: reduce){ .animate-shine{ animation:none } }
        `}
      </style>
    </button>
  );
}
