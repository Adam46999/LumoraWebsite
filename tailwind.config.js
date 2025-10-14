/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // فعّل نمط الداكن عبر إضافة/إزالة .dark على <html> أو <body>
  theme: {
    extend: {
      fontFamily: { sans: ["Tajawal", "sans-serif"] },

      // نفس الأنيميشنز التي عندك
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        shake: "shake 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "bounce-slow": "bounce 2s infinite",
        "scroll-dot": "scrollDot 1.8s infinite",
        "scroll-line": "scrollLine 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollDot: {
          "0%, 100%": { opacity: "0", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(16px)" },
        },
        scrollLine: {
          "0%": { opacity: "0.2", height: "0px" },
          "50%": { opacity: "1", height: "8px" },
          "100%": { opacity: "0.2", height: "0px" },
        },
      },
    },
  },
  plugins: [
    // ✅ كل شيء عبر Tailwind Plugin (لا ملفات CSS خارجية)
    function ({ addBase, addUtilities }) {
      // 1) تعريف توكنز الألوان عالميًا (لايت + دارك)
      addBase({
        ":root": {
          "--bg": "#F9FAFB",
          "--surface": "#FFFFFF",
          "--text": "#1F2937",
          "--muted": "#6B7280",
          "--ring": "#E5E7EB",
          "--primary": "#3B82F6",
          "--primary-600": "#2563EB",
          "--card-shadow": "0 10px 24px rgba(2,6,23,0.06)",
        },
        ".dark": {
          "--bg": "#070B12",
          "--surface": "#0B0F17",
          "--text": "#E5E7EB",
          "--muted": "#94A3B8",
          "--ring": "#162032",
          "--primary": "#3B82F6",
          "--primary-600": "#2563EB",
          "--card-shadow": "none",
        },
        "html, body": {
          backgroundColor: "var(--bg)",
          color: "var(--text)",
        },
      });

      // 2) Utilities قصيرة مبنية على المتغيرات
      addUtilities({
        ".bg-surface": { backgroundColor: "var(--surface)" },
        ".text-main": { color: "var(--text)" },
        ".text-muted": { color: "var(--muted)" },
        ".border-ring": { borderColor: "var(--ring)" },
        ".shadow-card": { boxShadow: "var(--card-shadow)" },

        // زر أساسي موحّد
        ".btn-primary": {
          backgroundColor: "var(--primary)",
          color: "#fff",
          borderRadius: "9999px",
          padding: "0.5rem 1rem",
          fontWeight: "600",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition:
            "filter .2s ease, transform .06s ease, background-color .2s ease",
        },
        ".btn-primary:hover": {
          backgroundColor: "var(--primary-600)",
        },
        ".btn-primary:active": {
          transform: "translateY(1px)",
        },
        ".btn-primary:focus-visible": {
          outline: "none",
          boxShadow: "0 0 0 2px var(--surface), 0 0 0 4px var(--primary)",
        },
      });
    },
  ],
};
