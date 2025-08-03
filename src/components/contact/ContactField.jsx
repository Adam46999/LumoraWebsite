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
}) {
  const inputClass = `p-3 rounded-xl border ${
    error ? "border-red-400" : "border-gray-300"
  } focus:outline-none focus:ring-2 focus:ring-blue-400`;

  return (
    <div className={`${id === "message" ? "col-span-full" : ""} flex flex-col`}>
      <label htmlFor={id} className="mb-1 text-sm text-gray-700 font-medium">
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
          className={`${inputClass} ${shake ? "animate-shake" : ""}`}
        />
      ) : (
        <input
          id={id}
          type={id === "phone" ? "tel" : "text"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`${inputClass} ${shake ? "animate-shake" : ""}`}
        />
      )}

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
