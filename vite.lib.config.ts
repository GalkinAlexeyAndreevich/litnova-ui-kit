import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: {
        index: "src/core/index.ts",
        core: "src/core/index.ts",
        "core/register": "src/core/register.ts",
        react: "src/react/index.ts",
        vue: "src/vue/index.ts",
      },
      formats: ["es"],
    },
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: {
      external: ["lit", "@lit/react", "react", "vue"],
    },
  },
});
