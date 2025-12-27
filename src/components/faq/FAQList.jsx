// src/components/faq/FAQList.jsx
import FAQItem from "./FAQItem";

export default function FAQList({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <FAQItem key={idx} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}
