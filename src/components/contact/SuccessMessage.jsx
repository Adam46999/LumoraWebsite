import { CheckCircle2 } from "lucide-react";

export default function SuccessMessage({ text, refEl }) {
  return (
    <div
      ref={refEl}
      className="sm:col-span-2 flex items-center justify-center gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-xl shadow animate-fade-in animate-scale-in"
    >
      <CheckCircle2 className="w-5 h-5" />
      <span>{text}</span>
    </div>
  );
}
