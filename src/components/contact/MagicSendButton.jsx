import { useState } from "react";
import { PaperPlaneTilt, CheckCircle, Spinner } from "phosphor-react";

export default function MagicSendButton() {
  const [state, setState] = useState("idle"); // idle | loading | success

  const handleClick = async () => {
    if (state !== "idle") return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 2000));
    setState("success");
    setTimeout(() => setState("idle"), 3000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={state === "loading"}
      className={`relative w-56 h-14 rounded-full overflow-hidden flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-500 select-none
      ${
        state === "success"
          ? "bg-green-500 text-white shadow-[0_6px_25px_rgba(34,197,94,0.4)]"
          : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-[0_6px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.45)]"
      } 
      active:scale-[0.96]`}
      style={{
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* تأثير التدرج المتحرك */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition duration-700"></div>

      {/* شريط لمعان يمر ببطء */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine opacity-70 blur-[2px]" />

      {/* المحتوى */}
      {state === "loading" ? (
        <>
          <Spinner size={22} className="animate-spin" />
          <span>جارٍ الإرسال...</span>
        </>
      ) : state === "success" ? (
        <>
          <CheckCircle size={24} weight="fill" />
          <span>تم الإرسال!</span>
        </>
      ) : (
        <>
          <PaperPlaneTilt
            size={22}
            weight="fill"
            className="transform transition-transform duration-300 group-hover:-translate-y-[2px]"
          />
          <span>إرسال</span>
        </>
      )}

      {/* حافة ضوء خارجية */}
      <div className="absolute inset-0 rounded-full border border-white/30 shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)] pointer-events-none" />

      {/* ✨ الأنيميشن */}
      <style>
        {`
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        `}
      </style>
    </button>
  );
}
