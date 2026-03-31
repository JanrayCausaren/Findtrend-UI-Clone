import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "src/features"),
      "@components": path.resolve(__dirname, "src/core/components"),
      "@utils": path.resolve(__dirname, "src/core/utils"),
      "@core": path.resolve(__dirname, "src/core"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
