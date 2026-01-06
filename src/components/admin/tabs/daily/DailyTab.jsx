// src/components/admin/tabs/daily/DailyTab.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { n, uid } from "../../lib/format";
import DailyHeader from "./components/DailyHeader";
import DailyFilters from "./components/DailyFilters";
import DailyList from "./components/DailyList";
import DailyModal from "./components/DailyModal";
import { LS_LAST_ENTRY, LS_RECENT_PRESETS, PRESETS } from "./lib/constants";
import { readJson, writeJson } from "./lib/storage";

export default function DailyTab({ entries, setEntries }) {
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [presetPulse, setPresetPulse] = useState(null);
  const amountRef = useRef(null);

  const [recentPresets, setRecentPresets] = useState(() =>
    readJson(LS_RECENT_PRESETS, [])
  );

  const filtered = useMemo(() => {
    return (entries || []).filter((e) => {
      if (filter !== "all" && e.type !== filter) return false;
      if (q.trim()) {
        const s = q.trim().toLowerCase();
        const hay = `${e.title || ""} ${e.customerName || ""}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [entries, filter, q]);

  const totals = useMemo(() => {
    const total = (entries || []).reduce((a, e) => a + n(e.amount), 0);
    const shopTotal = (entries || []).reduce((a, e) => a + n(e.shop), 0);
    const youTotal = total - shopTotal;
    return { total, shopTotal, youTotal };
  }, [entries]);

  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };

  const openAdd = () => {
    setEditing({
      id: uid(),
      type: "service",
      title: "",
      customerName: "",
      amount: "",
      shop: "",
      splitEnabled: false,
      createdAt: Date.now(),
    });
    setModalOpen(true);
  };

  const openEdit = (entry) => {
    const isProduct = (entry?.type || "") === "product";
    const splitEnabled = isProduct ? n(entry.shop) !== n(entry.amount) : true;

    setEditing({ ...entry, splitEnabled });
    setModalOpen(true);
  };

  const remove = (id) => {
    if (!window.confirm("حذف هذا البند؟")) return;
    setEntries((prev) => (prev || []).filter((e) => e.id !== id));
    if (openId === id) setOpenId(null);
  };

  const pushRecentPreset = (p) => {
    const key = `${p.type}__${p.title}`;
    const next = [key, ...(recentPresets || []).filter((x) => x !== key)].slice(
      0,
      8
    );
    setRecentPresets(next);
    writeJson(LS_RECENT_PRESETS, next);
  };

  const rememberLastEntry = (entry) => {
    writeJson(LS_LAST_ENTRY, {
      type: entry.type,
      title: entry.title,
      customerName: entry.customerName || "",
    });
  };

  const openRepeatLast = () => {
    const last = readJson(LS_LAST_ENTRY, null);
    if (!last?.title) {
      openAdd();
      return;
    }
    setEditing({
      id: uid(),
      type: last.type || "service",
      title: last.title || "",
      customerName: last.customerName || "",
      amount: "",
      shop: "",
      splitEnabled: false,
      createdAt: Date.now(),
    });
    setModalOpen(true);
  };

  const applyPreset = (preset) => {
    const k = `${preset.type}:${preset.title}`;
    setPresetPulse(k);
    window.setTimeout(() => setPresetPulse(null), 220);

    pushRecentPreset(preset);

    setEditing((prev) => {
      const base = prev || {
        id: uid(),
        type: "service",
        title: "",
        customerName: "",
        amount: "",
        shop: "",
        splitEnabled: false,
        createdAt: Date.now(),
      };

      const isProduct = preset.type === "product";
      return {
        ...base,
        type: preset.type,
        title: preset.title,
        splitEnabled: isProduct ? false : true,
      };
    });

    window.setTimeout(() => amountRef.current?.focus?.(), 60);
  };

  const save = () => {
    if (!editing) return;

    const clean = {
      ...editing,
      type: editing.type || "service",
      title: String(editing.title || "").trim(),
      customerName: String(editing.customerName || "").trim(),
      amount: n(editing.amount),
      shop: n(editing.shop),
      createdAt: editing.createdAt || Date.now(),
    };

    if (clean.type === "product" && !editing.splitEnabled) {
      clean.shop = clean.amount;
    }

    setEntries((prev) => {
      const exists = (prev || []).some((e) => e.id === clean.id);
      if (!exists) return [...(prev || []), clean];
      return (prev || []).map((e) => (e.id === clean.id ? clean : e));
    });

    rememberLastEntry(clean);
    closeModal();
  };

  useEffect(() => {
    if (!modalOpen) return;
    window.setTimeout(() => amountRef.current?.focus?.(), 80);
  }, [modalOpen]);

  const topRecent = useMemo(() => {
    const keys = (recentPresets || []).slice(0, 3);
    const map = new Map(PRESETS.map((p) => [`${p.type}__${p.title}`, p]));
    return keys.map((k) => map.get(k)).filter(Boolean);
  }, [recentPresets]);

  return (
    <div className="space-y-3" dir="rtl">
      <DailyHeader
        totals={totals}
        topRecent={topRecent}
        modalOpen={modalOpen}
        openAdd={openAdd}
        openRepeatLast={openRepeatLast}
        applyPreset={applyPreset}
      />

      <DailyFilters filter={filter} setFilter={setFilter} q={q} setQ={setQ} />

      <DailyList
        filtered={filtered}
        openId={openId}
        setOpenId={setOpenId}
        openEdit={openEdit}
        remove={remove}
        setEntries={setEntries}
      />

      <DailyModal
        entries={entries}
        modalOpen={modalOpen}
        editing={editing}
        presetPulse={presetPulse}
        amountRef={amountRef}
        closeModal={closeModal}
        applyPreset={applyPreset}
        setEditing={setEditing}
        save={save}
      />
    </div>
  );
}
