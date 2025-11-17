import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: ".",
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  server: {
    port: 5174,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000", 
        changeOrigin: true,
        secure: false,
     
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
