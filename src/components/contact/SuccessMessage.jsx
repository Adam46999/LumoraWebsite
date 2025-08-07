import { CheckCircle2 } from "lucide-react";

export default function SuccessMessage({ text, refEl, onClose }) {
  return (
    <div
      ref={refEl}
      className="sm:col-span-2 flex items-center justify-between gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-xl shadow animate-fade-in animate-scale-in"
    >
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5" />
        <span>{text}</span>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="text-lg font-bold text-green-700 hover:text-red-500 transition"
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
}
