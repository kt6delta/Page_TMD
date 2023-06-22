import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
//import image from "@rollup/plugin-image";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    //image()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
