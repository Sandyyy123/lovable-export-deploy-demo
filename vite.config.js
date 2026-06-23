import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Lovable exports a standard Vite app. Keeping base "/" makes the build
// portable across Vercel, Netlify, Cloudflare Pages and any static host.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: true,
  },
});
