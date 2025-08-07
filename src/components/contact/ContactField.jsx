// src/components/contact/ContactField.jsx
import React from "react";

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
}) {
  const inputBase =
    "p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-sm";

  const borderColor = error ? "border-red-400" : "border-gray-300";
  const shakeAnim = shake ? "animate-shake" : "";
  const validRing = isValid ? "ring-1 ring-green-300" : "";

  const inputClass = `${inputBase} ${borderColor} ${validRing} ${shakeAnim}`;

  return (
    <div className={`${id === "message" ? "col-span-full" : ""} flex flex-col`}>
      <label
        htmlFor={id}
        className="mb-1 text-sm text-gray-700 font-semibold tracking-wide"
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows="4"
          className={inputClass}
        />
      ) : (
        <input
          id={id}
          type={id === "phone" ? "tel" : "text"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={inputClass}
        />
      )}

      {error && (
        <span className="text-red-500 text-xs mt-1 font-medium">{error}</span>
      )}
    </div>
  );
}
