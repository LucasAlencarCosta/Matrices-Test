/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066CC",
        secondary: "#6B7280",
        background: "rgb(248, 250, 253)",
        surface: "#F9FAFB",
        border: "#E5E7EB",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        primary: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          '"SF Mono"',
          "Consolas",
          '"Liberation Mono"',
          "Menlo",
          "monospace",
        ],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [],
};
