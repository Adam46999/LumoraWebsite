// src/components/faq/FAQItem.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start"
        aria-expanded={open}
      >
        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
          {question}
        </h3>

        <ChevronDown
          className={[
            "w-5 h-5 text-slate-500 transition-transform duration-300",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      <div
        className={[
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden px-5 pb-4 text-slate-600 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
