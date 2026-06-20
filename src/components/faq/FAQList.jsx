// src/components/faq/FAQList.jsx
import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQList({
  items = [],
  dir = "ltr",
  variant = "default",
}) {
  const [openId, setOpenId] = useState(null);

  /*
    عند تغيير اللغة تتغير الأسئلة،
    لذلك نسكر السؤال المفتوح حتى ما تظل حالة قديمة.
  */
  useEffect(() => {
    setOpenId(null);
  }, [items]);

  const toggleOpen = (id) => {
    setOpenId((currentId) => {
      return currentId === id ? null : id;
    });
  };

  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div
      className={variant === "compact" ? "space-y-2.5" : "space-y-3"}
      dir={dir}
    >
      {items.map((item, index) => {
        const id = item?.id || `faq-${index}`;

        return (
          <FAQItem
            key={`${id}-${item?.q || index}`}
            id={id}
            icon={item?.icon}
            question={item?.q || ""}
            short={item?.short || ""}
            details={item?.details || ""}
            isOpen={openId === id}
            onToggle={toggleOpen}
            dir={dir}
            variant={variant}
          />
        );
      })}
    </div>
  );
}
