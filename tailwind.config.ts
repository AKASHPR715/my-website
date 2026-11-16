import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#121316",
        surface: {
          DEFAULT: "#181a1f",
          50: "#22252c",
          100: "#1c1f26",
          200: "#181a1f",
          300: "#121316",
          border: "#262930",
          hover: "#1f2229",
        },
        ink: {
          DEFAULT: "#f3f4f6",
          muted: "#9ca3af",
          subtle: "#6b7280",
          faint: "#4b5563",
        },
        border: {
          subtle: "#262930",
          strong: "#373c47",
        },
        // Accent used ONLY for state, focus, active pipeline stages, and primary actions
        amber: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          hover: "#b45309",
          subtle: "rgba(245, 158, 11, 0.08)",
          border: "rgba(245, 158, 11, 0.35)",
        },
        signal: {
          green: "#22c55e",
          greenSubtle: "rgba(34, 197, 94, 0.12)",
          greenBorder: "rgba(34, 197, 94, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-ibm-plex-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "10px",
      },
    },
  },
  plugins: [],
};
export default config;