import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" &&
      eslint({
        cache: false,
        include: ["src/**/*.ts", "src/**/*.tsx"],
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    port: 3000,
     open: true,
  },
}));