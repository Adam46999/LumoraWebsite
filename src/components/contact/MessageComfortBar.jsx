import React from "react";

export default function MessageComfortBar({
  isRTL = true,
  fontSize = 16,
  lineHeight = 1.6,
  onFontSize,
  onLineHeight,
  onClean,
  onFullscreen,
}) {
  const btn =
    "h-9 px-3 rounded-lg border bg-white text-sm border-gray-200 hover:border-blue-400 transition";
  const grp = "flex items-center gap-2 flex-wrap";

  return (
    <div className="md:col-span-2 -mt-1 mb-1">
      <div className={`${grp} ${isRTL ? "justify-start" : "justify-start"}`}>
        {/* حجم الخط */}
        <div className={grp}>
          <span className="text-xs text-gray-600">حجم الخط</span>
          <button
            type="button"
            className={btn}
            onClick={() => onFontSize(Math.max(14, fontSize - 2))}
          >
            -
          </button>
          <span className="text-sm text-gray-700">{fontSize}px</span>
          <button
            type="button"
            className={btn}
            onClick={() => onFontSize(Math.min(22, fontSize + 2))}
          >
            +
          </button>
        </div>

        {/* تباعد الأسطر */}
        <div className={`${grp} ml-2`}>
          <span className="text-xs text-gray-600">تباعد الأسطر</span>
          <button
            type="button"
            className={btn}
            onClick={() =>
              onLineHeight(Math.max(1.3, +(lineHeight - 0.1).toFixed(1)))
            }
          >
            -
          </button>
          <span className="text-sm text-gray-700">{lineHeight.toFixed(1)}</span>
          <button
            type="button"
            className={btn}
            onClick={() =>
              onLineHeight(Math.min(2.0, +(lineHeight + 0.1).toFixed(1)))
            }
          >
            +
          </button>
        </div>

        {/* تنظيف النص */}
        <button type="button" className={`${btn} ml-2`} onClick={onClean}>
          تنظيف النص
        </button>

        {/* شاشة كاملة */}
        <button type="button" className={`${btn} ml-2`} onClick={onFullscreen}>
          شاشة كاملة
        </button>
      </div>
    </div>
  );
}
