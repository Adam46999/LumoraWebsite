import { PaperPlaneTilt, CheckCircle, Spinner } from "phosphor-react";

export default function MagicSendButton({
  state = "idle",
  disabled = false,
  labelIdle = "إرسال",
  labelLoading = "جارٍ الإرسال...",
  labelSuccess = "تم الإرسال!",
  buttonId = "sendBtn",
  buttonRef,
}) {
  const isLoading = state === "loading";
  const isSuccess = state === "success";
  const isDisabled = disabled || isLoading;

  const text = isLoading ? labelLoading : isSuccess ? labelSuccess : labelIdle;

  return (
    <button
      id={buttonId}
      ref={buttonRef}
      type="submit"
      disabled={isDisabled}
      className={`w-full sm:w-56 h-12 rounded-full flex items-center justify-center gap-2 font-semibold text-base
      ${
        isDisabled
          ? "bg-gray-200 text-gray-500"
          : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 hover:from-blue-700 hover:via-blue-600 hover:to-blue-600 text-white shadow-[0_8px_24px_rgba(59,130,246,.18)]"
      }
      transition disabled:cursor-not-allowed`}
      aria-live="polite"
    >
      {isLoading ? (
        <>
          <Spinner size={18} className="animate-spin" />
          <span>{text}</span>
        </>
      ) : isSuccess ? (
        <>
          <CheckCircle size={20} weight="fill" />
          <span>{text}</span>
        </>
      ) : (
        <>
          <PaperPlaneTilt size={18} weight="fill" />
          <span>{text}</span>
        </>
      )}
    </button>
  );
}
