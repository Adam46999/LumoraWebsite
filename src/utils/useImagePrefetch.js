// src/utils/useImagePrefetch.js
import { useEffect } from "react";

export default function useImagePrefetch(
  urls = [],
  { pre = 2, aroundIndex } = {}
) {
  useEffect(() => {
    if (!Array.isArray(urls) || urls.length === 0) return;

    const seen = new Set();
    const schedule = (cb) => {
      if (typeof window === "undefined") return;
      const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
      idle(cb);
    };

    const preload = (src) => {
      if (!src || seen.has(src)) return;
      seen.add(src);
      schedule(() => {
        const img = new Image();
        img.decoding = "async";
        img.loading = "eager";
        img.src = src;
      });
    };

    // تحميل أولي
    urls.slice(0, pre).forEach(preload);

    // حول الشريحة الحالية
    if (typeof aroundIndex === "number") {
      const order = [0, 1, -1, 2, -2];
      order.forEach((off) => {
        const i = aroundIndex + off;
        if (i >= 0 && i < urls.length) preload(urls[i]);
      });
    }
  }, [urls, pre, aroundIndex]);
}
