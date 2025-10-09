RememberMeSwitch.jsx; // src/components/contact/RememberMeSwitch.jsx
export default function RememberMeSwitch({ checked, onChange, isRTL = true }) {
  return (
    <label className="inline-flex items-center gap-2 text-xs text-gray-600 cursor-pointer select-none">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className="w-10 h-6 rounded-full bg-gray-200 relative transition
        peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-1 after:left-1
        after:w-4 after:h-4 after:bg-white after:rounded-full after:transition
        peer-checked:after:translate-x-4"
        aria-hidden="true"
      />
      <span>{isRTL ? "تذكّر بياناتي" : "Remember my details"}</span>
    </label>
  );
}
