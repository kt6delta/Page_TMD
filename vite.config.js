import { defineConfig } from 'vite'
import image from '@rollup/plugin-image';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    image(),
  ],
})