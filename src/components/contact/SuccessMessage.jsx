// SuccessMessage.jsx
import { CheckCircle2 } from "lucide-react";

export default function SuccessMessage({ text, refEl, onClose }) {
  return (
    <div
      ref={refEl}
      className="sm:col-span-2 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-green-100 text-green-700 px-5 py-4 rounded-2xl shadow-lg animate-fade-in animate-scale-in border border-green-300"
    >
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6" />
        <span className="text-sm sm:text-base font-medium tracking-wide">
          {text}
        </span>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="self-end sm:self-auto text-xl font-bold text-green-700 hover:text-red-500 transition duration-200"
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
}
