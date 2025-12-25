// src/services/firestoreUtils.js

/**
 * Firestore لا يقبل undefined داخل الداتا.
 * بنحوّله لـ null بشكل عميق.
 */
export function cleanUndefinedDeep(payload) {
  return JSON.parse(
    JSON.stringify(payload, (_, v) => (v === undefined ? null : v))
  );
}

/**
 * تحويل Timestamp / Date / number / string لرقم millis.
 */
export function toMillis(value) {
  if (!value) return 0;

  if (typeof value?.toDate === "function") {
    try {
      return value.toDate().getTime();
    } catch {
      return 0;
    }
  }

  if (value instanceof Date) return value.getTime();
  if (typeof value === "number") return value;

  if (typeof value === "string") {
    const t = Date.parse(value);
    return Number.isNaN(t) ? 0 : t;
  }

  if (
    typeof value === "object" &&
    typeof value.seconds === "number" &&
    typeof value.nanoseconds === "number"
  ) {
    return value.seconds * 1000 + Math.floor(value.nanoseconds / 1e6);
  }

  return 0;
}

/**
 * يوحّد شكل الرسالة ويضمن وجود fields أساسية
 */
export function normalizeContactMessage(docId, data) {
  const d = data || {};
  const createdAtMs = toMillis(d.createdAt);

  return {
    id: docId,
    subject: d.subject ?? d.topic ?? d.title ?? "",
    name: d.name ?? "",
    phone: d.phone ?? "",
    message: d.message ?? "",
    channel: d.channel ?? null,
    status: d.status ?? "new",
    source: d.source ?? "website",
    createdAt: d.createdAt ?? null,
    createdAtMs,
    ...d,
  };
}
