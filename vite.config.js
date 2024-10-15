import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://santiago-diaz-ar.githud.io",
  server: {
    proxy: {
      "/api": {
        target: "https://santiago-diaz-ar.githud.io", // Cambia esto a tu API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
