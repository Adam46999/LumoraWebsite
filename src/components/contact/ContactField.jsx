// src/components/contact/ContactField.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactField({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  isTextArea = false,
  isValid = false,
  required = false,
  maxChars = 500,
  smartCounter = false,
  isRTL = false,
  refEl,
  autoGrow,
  onEnterNext,
  inputProps = {},

  // ✅ NEW (عشان يركب مع ContactForm بدون كسر)
  assistiveText,
  shake = false,
}) {
  const [charCount, setCharCount] = useState(0);
  const taRef = useRef(null);

  useEffect(() => {
    if (id === "message") setCharCount(value?.length || 0);
  }, [value, id]);

  useEffect(() => {
    if (!autoGrow || !isTextArea) return;
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 360) + "px";
  }, [value, autoGrow, isTextArea]);

  const sidePad = isRTL
    ? "pr-11 sm:pr-12 text-right"
    : "pl-11 sm:pl-12 text-left";
  const iconPos = isRTL ? "right-2.5 sm:right-3" : "left-2.5 sm:left-3";

  const base = `
    w-full px-3 sm:px-4 py-2.5 sm:py-3 ${sidePad}
    rounded-xl border transition-[border,box-shadow] duration-150 focus:outline-none
    bg-white text-[15px] sm:text-[16px] text-gray-900 placeholder-gray-400
  `;

  const stateColor = error
    ? "border-rose-300 focus:border-rose-400 shadow-[0_0_0_3px_rgba(244,63,94,.10)]"
    : isValid
    ? "border-emerald-200 focus:border-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,.10)]"
    : "border-gray-200 focus:border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.10)]";

  const cls = `${base} ${stateColor} ${shake ? "animate-shake" : ""}`;

  const Icon = id === "name" ? User : id === "phone" ? Phone : MessageSquare;
  const StatusIcon = error ? AlertCircle : isValid ? CheckCircle2 : null;

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !isTextArea && typeof onEnterNext === "function") {
      e.preventDefault();
      onEnterNext();
    }
  };

  const showCounter =
    id === "message" && (!smartCounter || charCount >= maxChars * 0.75);

  return (
    <div
      className={`${
        id === "message" ? "col-span-full" : ""
      } flex flex-col gap-1`}
    >
      <label
        htmlFor={id}
        className="mb-0.5 text-sm font-semibold text-gray-800"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      <div className="relative">
        {/* أيقونة داخل كبسولة أصغر */}
        <span
          className={`absolute ${iconPos} top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-[26px] h-[26px] rounded-lg bg-blue-50 text-blue-600 border border-blue-100`}
        >
          <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
        </span>

        {isTextArea ? (
          <textarea
            id={id}
            ref={(node) => {
              taRef.current = node;
              if (refEl) refEl.current = node;
            }}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            rows={4}
            maxLength={maxChars}
            aria-invalid={!!error}
            className={`${cls} resize-none`}
            required={required}
            {...inputProps}
          />
        ) : (
          <input
            id={id}
            type={id === "phone" ? "tel" : "text"}
            inputMode={id === "phone" ? "tel" : "text"}
            autoComplete={
              id === "name" ? "name" : id === "phone" ? "tel" : "off"
            }
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            aria-invalid={!!error}
            className={cls}
            required={required}
            {...inputProps}
          />
        )}

        {/* حالة صحيحة/خطأ */}
        {StatusIcon && (
          <span
            className={`absolute ${
              isRTL ? "left-2.5 sm:left-3" : "right-2.5 sm:right-3"
            } top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-[26px] h-[26px] rounded-lg ${
              error
                ? "bg-rose-50 text-rose-600 border border-rose-100"
                : "bg-emerald-50 text-emerald-600 border border-emerald-100"
            }`}
          >
            <StatusIcon className="w-[18px] h-[18px]" aria-hidden="true" />
          </span>
        )}
      </div>

      {/* ✅ مساعد تحت الحقل (موجود بالـ ContactForm) */}
      {assistiveText && !error && (
        <span className="text-[12px] sm:text-xs mt-1 text-gray-600">
          {assistiveText}
        </span>
      )}

      {/* ✅ error تحت الحقل */}
      {error && (
        <span className="text-[12px] sm:text-xs mt-1 text-rose-600 font-medium">
          {error}
        </span>
      )}

      {showCounter && (
        <span
          className={`text-[12px] sm:text-xs mt-1 self-start ${
            charCount > maxChars * 0.9
              ? "text-rose-600"
              : charCount > maxChars * 0.75
              ? "text-amber-600"
              : "text-gray-500"
          }`}
        >
          {charCount} / {maxChars}
        </span>
      )}

      <style>{`
        @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
        .animate-shake{animation:shake .3s ease-in-out}
        @media (prefers-reduced-motion: reduce){
          .animate-shake{animation:none}
        }
      `}</style>
    </div>
  );
}
