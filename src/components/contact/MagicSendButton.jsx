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
      className={`w-full sm:w-56 h-11 sm:h-12 rounded-full flex items-center justify-center gap-2 font-semibold text-base
      ${
        disabled
          ? "bg-gray-200 text-gray-500"
          : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 hover:from-blue-700 hover:via-blue-600 hover:to-blue-600 text-white shadow-[0_8px_24px_rgba(59,130,246,.18)]"
      }
      transition disabled:cursor-not-allowed`}
      aria-live="polite"
    >
      {isLoading ? (
        <>
          <Spinner size={18} className="animate-spin" />
          <span>{labelLoading}</span>
        </>
      ) : isSuccess ? (
        <>
          <CheckCircle size={20} weight="fill" />
          <span>{labelSuccess}</span>
        </>
      ) : (
        <>
          <PaperPlaneTilt size={18} weight="fill" />
          <span>{labelIdle}</span>
        </>
      )}
    </button>
  );
}
