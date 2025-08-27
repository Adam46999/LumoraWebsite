export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tajawal", "sans-serif"],
      },
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
  plugins: [],
};
