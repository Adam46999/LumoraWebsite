// src/components/admin/hooks/useAutosaveDay.js
import { useEffect, useMemo, useRef, useState } from "react";
import { upsertDay } from "../../../services/managerDaily";

function stableStringify(obj) {
  const seen = new WeakSet();
  const helper = (x) => {
    if (x === null || typeof x !== "object") return x;
    if (seen.has(x)) return "[Circular]";
    seen.add(x);

    if (Array.isArray(x)) return x.map(helper);

    const out = {};
    Object.keys(x)
      .sort()
      .forEach((k) => {
        out[k] = helper(x[k]);
      });
    return out;
  };
  return JSON.stringify(helper(obj));
}

export default function useAutosaveDay({ dateKey, data, delayMs = 800 }) {
  const [saving, setSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const [error, setError] = useState(null);

  const lastSavedSnapshotRef = useRef("");
  const timerRef = useRef(null);

  const snapshot = useMemo(() => stableStringify(data), [data]);

  const doSave = async (reason) => {
    if (!dateKey) return false;

    // لا تحفظ إذا ما في تغيير حقيقي
    if (snapshot === lastSavedSnapshotRef.current) {
      // console.log("⏭️ autosave skipped (no changes)");
      return true;
    }

    setSaving(true);
    setError(null);

    console.log("💾 SAVE START:", reason, "dateKey=", dateKey);

    try {
      await upsertDay(dateKey, data);
      lastSavedSnapshotRef.current = snapshot;
      setLastSavedAt(Date.now());
      console.log("✅ SAVE OK:", reason);
      return true;
    } catch (e) {
      console.error("❌ SAVE FAIL:", reason, e);
      setError(e?.message || "فشل الحفظ");
      return false;
    } finally {
      setSaving(false);
    }
  };

  // autosave on changes
  useEffect(() => {
    if (!dateKey) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      doSave("autosave");
    }, Math.max(0, Number(delayMs) || 0));

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateKey, snapshot, delayMs]);

  const saveNow = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    return doSave("manual");
  };

  return { saving, lastSavedAt, saveNow, error };
}
