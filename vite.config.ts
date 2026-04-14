import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "dotted-map": path.resolve(__dirname, "./src/lib/dotted-map.ts"),
      "framer-motion": path.resolve(__dirname, "./src/lib/simple-motion.tsx"),
    },
  },
});
