import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [svelte()],
    build: {
      emptyOutDir: true,
      outDir: "dist",
      sourcemap: false,
      minify: true,
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[hash].js",
          entryFileNames: "assets/js/[hash].js",
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
              return "assets/images/[hash][extname]";
            }
            if (/\.(ttf|woff2|svg)$/.test(name ?? "")) {
              return "assets/font/[hash][extname]";
            }
            if (/\.css$/.test(name ?? "")) {
              return "assets/css/[hash][extname]";
            }
            return "assets/[hash][extname]";
          }
        }
      }
    }
  };
});
