import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    root: path.resolve(__dirname, "client"),

    plugins: [
      react(),

      // ❗ Replit-only plugins (DEV ONLY)
      ...(isDev && process.env.REPL_ID
        ? [
            require("@replit/vite-plugin-runtime-error-modal").default(),
            require("@replit/vite-plugin-cartographer").cartographer(),
            require("@replit/vite-plugin-dev-banner").devBanner(),
          ]
        : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),

        // ⚠️ REMOVE server/shared aliases from frontend build
        // "@shared": path.resolve(__dirname, "shared"),
        // "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },

    server: {
      fs: {
        strict: true,
      },
    },
  };
});
