import React, { useState, useEffect, useMemo, useRef } from "react";
import { User, Phone, MessageSquare } from "lucide-react";

export default function ContactField({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  isTextArea = false,
  shake = false,
  isValid = false,
  required = false,
  assistiveText,
  maxChars = 500,
  isRTL = false,
  refEl,
  autoGrow,
}) {
  const [charCount, setCharCount] = useState(0);
  const taRef = useRef(null);

  useEffect(() => {
    if (id === "message") setCharCount(value?.length || 0);
  }, [value, id]);

  // Auto-grow للـtextarea
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
  const iconPos = isRTL ? "right-3.5 sm:right-4" : "left-3.5 sm:left-4";

  const inputBase = `
    w-full px-3 py-2.5 sm:px-4 sm:py-3 ${sidePad}
    rounded-xl sm:rounded-2xl border transition-all duration-300 focus:outline-none
    bg-white
    text-[15px] sm:text-[clamp(14px,2.8vw,16px)] text-gray-800 placeholder-gray-400
  `;

  const borderColor = error
    ? "border-red-400 ring-2 ring-red-200"
    : isValid
    ? "border-green-300 ring-1 ring-green-200"
    : "border-gray-300";

  const focusRing =
    "focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2";

  const inputClass = `${inputBase} ${borderColor} ${focusRing} ${
    shake ? "animate-shake" : ""
  }`;

  const describedIds = useMemo(() => {
    const ids = [];
    if (assistiveText && !error) ids.push(`${id}-desc`);
    if (error) ids.push(`${id}-error`);
    return ids.join(" ") || undefined;
  }, [assistiveText, error, id]);

  const iconClass = `absolute ${iconPos} top-1/2 -translate-y-1/2 text-blue-500/70 bg-white p-2 rounded-xl shadow-sm`;

  const renderIcon = () => {
    const common = { className: iconClass, "aria-hidden": true };
    if (id === "name") return <User {...common} />;
    if (id === "phone") return <Phone {...common} />;
    if (id === "message") return <MessageSquare {...common} />;
    return null;
  };

  const counterColor =
    charCount > maxChars * 0.9
      ? "text-red-500"
      : charCount > maxChars * 0.75
      ? "text-orange-500"
      : "text-gray-400";

  return (
    <div
      className={`${
        id === "message" ? "col-span-full" : ""
      } flex flex-col gap-1`}
    >
      <label
        htmlFor={id}
        className="mb-1 text-[clamp(12px,1.3vw,14px)] text-gray-700 font-semibold tracking-wide"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative group">
        {renderIcon()}
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
            placeholder={placeholder}
            rows={4}
            maxLength={maxChars}
            aria-invalid={!!error}
            aria-describedby={describedIds}
            className={`${inputClass} resize-none`}
            required={required}
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
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={describedIds}
            className={inputClass}
            required={required}
          />
        )}
      </div>

      {assistiveText && !error && (
        <span
          id={`${id}-desc`}
          className="text-[12px] sm:text-xs text-gray-600 mt-1"
        >
          {assistiveText}
        </span>
      )}

      {error && (
        <span
          id={`${id}-error`}
          className="text-red-600 text-[12px] sm:text-xs mt-1 font-medium"
        >
          {error}
        </span>
      )}

      {id === "message" && (
        <span
          className={`text-[12px] sm:text-xs mt-1 self-start ${counterColor}`}
        >
          {charCount} / {maxChars}
        </span>
      )}

      <style>{`
        @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
        .animate-shake{animation:shake .3s ease-in-out}
        @media (prefers-reduced-motion: reduce){ .animate-shake{animation:none} }
      `}</style>
    </div>
  );
}
