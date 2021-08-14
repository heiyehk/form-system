import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/style/color.less";',
        imports: [resolve('/src/style/color.less')]
      }
    }
  },
  server: {
    port: 3050
  },
  resolve: {
    alias: {
      '@': resolve('src/')
    }
  }
});
