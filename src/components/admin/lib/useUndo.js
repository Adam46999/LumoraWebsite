// src/components/admin/lib/useUndo.js
import { useRef } from "react";

export default function useUndo() {
  const prevRef = useRef(null);

  function snapshot(state) {
    prevRef.current = JSON.stringify(state);
  }

  function undo(currentState) {
    if (!prevRef.current) return currentState;
    try {
      return JSON.parse(prevRef.current);
    } catch {
      return currentState;
    }
  }

  return { snapshot, undo };
}
