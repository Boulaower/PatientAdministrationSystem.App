/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all API calls
      "/api": {
        target: "http://localhost:5272", // Your backend URL
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Optional rewrite
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
