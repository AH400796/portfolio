import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "/portfolio/",
  plugins: [
    createHtmlPlugin({
      inject: {
        include: "./partials/*.html",
      },
      minify: false,
      resolveOptions: {
        conditions: ["include", "html"],
      },
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
});
