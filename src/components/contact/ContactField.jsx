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
    ? "pr-12 sm:pr-14 text-right"
    : "pl-12 sm:pl-14 text-left";
  const iconPos = isRTL ? "right-2.5 sm:right-3" : "left-2.5 sm:left-3";

  const base = `
    w-full px-3 py-2.5 sm:px-4 sm:py-3 ${sidePad}
    rounded-xl border transition-[border,box-shadow] duration-150 focus:outline-none
    bg-white text-[15px] sm:text-[clamp(14px,2.8vw,16px)] text-gray-900 placeholder-gray-400
  `;
  const stateColor = error
    ? "border-rose-300 focus:border-rose-400 shadow-[0_0_0_3px_rgba(244,63,94,.12)]"
    : isValid
    ? "border-emerald-300 focus:border-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,.12)]"
    : "border-gray-300 focus:border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.12)]";
  const cls = `${base} ${stateColor}`;

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
        {/* leading icon كبسولة */}
        <span
          className={`absolute ${iconPos} top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-blue-600 border border-blue-100`}
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

        {/* status icon */}
        {StatusIcon && (
          <span
            className={`absolute ${
              isRTL ? "left-2.5 sm:left-3" : "right-2.5 sm:right-3"
            } top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-7 h-7 rounded-lg ${
              error
                ? "bg-rose-50 text-rose-600 border border-rose-100"
                : "bg-emerald-50 text-emerald-600 border border-emerald-100"
            }`}
          >
            <StatusIcon className="w-[18px] h-[18px]" aria-hidden="true" />
          </span>
        )}
      </div>

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
    </div>
  );
}
