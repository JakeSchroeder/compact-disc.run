import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          three: ["three", "@react-three/fiber", "@react-three/drei", "@react-three/postprocessing"],
          audio: ["howler"],
          utils: ["zustand"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei", "howler"],
  },
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.exr"],
});
