// src/components/faq/FAQList.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import FAQItem from "./FAQItem";

export default function FAQList({
  items = [],
  dir = "ltr",
  variant = "default",

  // ✅ preview behavior
  visibleMobile = 3,
  visibleDesktop = 5,

  showAll = false,
  onToggleShowAll,
  t,
}) {
  const [openId, setOpenId] = useState(null);

  const isRTL = dir === "rtl";
  const isCompact = variant === "compact";

  const listRef = useRef(null);
  const extraWrapRef = useRef(null);
  const extraInnerRef = useRef(null);
  const toggleRef = useRef(null);

  const total = items.length;

  // ✅ preview counts (9)
  const shownMobile = Math.min(visibleMobile, total);
  const shownDesktop = Math.min(visibleDesktop, total);

  // ✅ Always-visible + extra items (13 + 6)
  const alwaysVisible = useMemo(
    () => items.slice(0, shownDesktop),
    [items, shownDesktop]
  );
  const extraItems = useMemo(
    () => items.slice(shownDesktop),
    [items, shownDesktop]
  );

  const toggleOpen = (id) => setOpenId((prev) => (prev === id ? null : id));

  // ✅ collapse professional: ارجع لقسم FAQ وبعدين سكّر (حل مشكلة القفزة لتواصل معنا)
  const collapseToFAQ = useCallback(() => {
    const el = document.getElementById("faq");
    el?.scrollIntoView?.({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      onToggleShowAll?.(false);
    }, 180);
  }, [onToggleShowAll]);

  // ✅ Smooth expand/collapse (1 + 10)
  useEffect(() => {
    const wrap = extraWrapRef.current;
    const inner = extraInnerRef.current;
    if (!wrap || !inner) return;

    const set = () => {
      const h = inner.scrollHeight || 0;
      wrap.style.maxHeight = showAll ? `${h}px` : "0px";
      wrap.style.opacity = showAll ? "1" : "0";
      wrap.style.transform = showAll ? "translateY(0px)" : "translateY(-6px)";
    };

    set();
    const ro = new ResizeObserver(set);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [showAll, extraItems.length]);

  // ✅ Contextual button (2): بعد “عرض أكثر” انزل للزر

  if (!total) return null;

  // ✅ Responsive visibility: موبايل أقل (11)
  const isHiddenOnMobile = (idx) => idx >= shownMobile;
  const isHiddenOnDesktop = (idx) => idx >= shownDesktop;

  const shownNow = showAll ? total : shownDesktop;
  const moreCount = Math.max(total - shownDesktop, 0);

  // نص الزر الذكي (3 + 9)
  const toggleLabel = showAll
    ? t?.showLess || (isRTL ? "عرض أقل" : "Show less")
    : moreCount > 0
    ? t?.showMoreWithCount?.(moreCount) ||
      (isRTL ? `عرض ${moreCount} أسئلة إضافية` : `Show ${moreCount} more`)
    : t?.showAll || (isRTL ? "عرض الكل" : "Show all");

  return (
    <div ref={listRef} className={isCompact ? "space-y-2" : "space-y-3"}>
      {/* Always visible list */}
      {alwaysVisible.map((item, idx) => {
        const id = `${idx}-${item.q}`;

        const className = [
          isHiddenOnMobile(idx) ? "hidden md:block" : "",
          isHiddenOnDesktop(idx) ? "hidden" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div key={id} className={className}>
            <FAQItem
              id={id}
              icon={item.icon}
              question={item.q}
              short={item.short}
              details={item.details}
              isOpen={openId === id}
              onToggle={toggleOpen}
              dir={dir}
              variant={variant}
            />
          </div>
        );
      })}

      {/* Extra list (animated) */}
      <div
        ref={extraWrapRef}
        className={[
          "overflow-hidden will-change-[max-height,opacity,transform]",
          "transition-all duration-300 ease-in-out",
        ].join(" ")}
        style={{ maxHeight: "0px", opacity: 0, transform: "translateY(-6px)" }}
        aria-hidden={!showAll}
      >
        <div
          ref={extraInnerRef}
          className={isCompact ? "space-y-2" : "space-y-3"}
        >
          {extraItems.map((item, i) => {
            const idx = shownDesktop + i;
            const id = `${idx}-${item.q}`;

            return (
              <FAQItem
                key={id}
                id={id}
                icon={item.icon}
                question={item.q}
                short={item.short}
                details={item.details}
                isOpen={openId === id}
                onToggle={toggleOpen}
                dir={dir}
                variant={variant}
              />
            );
          })}
        </div>
      </div>

      {/* Toggle area */}
      {total > shownDesktop ? (
        <>
          {/* Link-style button */}
          <div className="pt-1 flex items-center justify-center">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => {
                if (showAll) collapseToFAQ();
                else onToggleShowAll?.(true);
              }}
              className={[
                "group inline-flex items-center gap-2",
                "text-blue-700 hover:text-blue-800 active:text-blue-900",
                "font-extrabold",
                "text-sm sm:text-[15px]",
                "transition",
              ].join(" ")}
            >
              <span
                className={[
                  "inline-flex items-center justify-center",
                  "w-7 h-7 rounded-full border border-blue-200 bg-blue-50",
                  "transition-transform duration-300",
                  showAll ? "rotate-180" : "rotate-0",
                ].join(" ")}
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-blue-700"
                >
                  <path
                    d="M12 15l-7-7m7 7l7-7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="underline underline-offset-4 decoration-blue-200 group-hover:decoration-blue-300">
                {toggleLabel}
              </span>

              <span className="text-xs font-extrabold text-slate-400">
                {showAll ? `${total}/${total}` : `${shownNow}/${total}`}
              </span>
            </button>
          </div>

          {/* Sticky “Show less” when open */}
          {showAll ? (
            <div className="sticky bottom-2 z-10 mt-3 flex justify-center">
              <div className="w-full max-w-md px-3">
                <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-2 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={collapseToFAQ}
                    className="w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200 transition font-extrabold text-slate-800"
                  >
                    {t?.showLess || (isRTL ? "عرض أقل" : "Show less")}
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
