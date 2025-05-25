import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [react(),
    createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: 'SARL Bennour',
        description: "SARL BENNOUR est une société privée créée en 2020, elle a investi dans le domaine des tissus non tissés. Ce produit est largement utilisé dans les services médicaux ainsi que d’autres secteurs tels que les sacs à provisions, les emballages alimentaires écologiques, l’habillement, l’ameublement",
        keywords: 'Sacs shopping  box bag  sac pharmacie  sac pour farine, semoule et riz sac tissu non tissé personnalisés'
      }
    }
  })],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    historyApiFallback: true, // Ensures routes fallback to index.html
    watch: {
      usePolling: true, // Enable polling to prevent 'too many open files' error
      interval: 1000, // Adjust as needed (higher values reduce system load)
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional, ensures all chunks are handled correctly
      },
    },
  },
});
