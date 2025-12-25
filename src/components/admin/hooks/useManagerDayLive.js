// src/components/admin/hooks/useContactMessages.js
import { useEffect, useMemo, useState, useCallback } from "react";
import {
  subscribeMessages,
  updateMessageStatus,
  deleteMessage,
} from "../services/contactMessages";

/**
 * Hook للأدمن:
 * - يجيب الرسائل Realtime
 * - يوفر أوامر سريعة لتغيير الحالة/الحذف
 * - مع loading + error
 * - بدون throw (حتى لو كان المسار "deprecated" سابقاً)
 */
export default function useContactMessages({ take = 200 } = {}) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const [busyById, setBusyById] = useState({});

  useEffect(() => {
    setLoading(true);
    setErr(null);

    const unsub = subscribeMessages(
      (list) => {
        setRows(Array.isArray(list) ? list : []);
        setLoading(false);
      },
      (e) => {
        setErr(e);
        setLoading(false);
      },
      { take }
    );

    return () => unsub?.();
  }, [take]);

  const markStatus = useCallback(async (id, status) => {
    if (!id) return;
    setBusyById((p) => ({ ...p, [id]: true }));

    // optimistic
    setRows((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));

    try {
      await updateMessageStatus(id, status);
    } catch (e) {
      setErr(e);
      // Realtime بيرجع الصح تلقائيًا
    } finally {
      setBusyById((p) => ({ ...p, [id]: false }));
    }
  }, []);

  const remove = useCallback(
    async (id) => {
      if (!id) return;
      setBusyById((p) => ({ ...p, [id]: true }));

      const before = rows;
      setRows((prev) => prev.filter((m) => m.id !== id));

      try {
        await deleteMessage(id);
      } catch (e) {
        setErr(e);
        setRows(before);
      } finally {
        setBusyById((p) => ({ ...p, [id]: false }));
      }
    },
    [rows]
  );

  return useMemo(
    () => ({
      rows,
      loading,
      error: err,
      busyById,
      markStatus,
      remove,
    }),
    [rows, loading, err, busyById, markStatus, remove]
  );
}
