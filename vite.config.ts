import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import myExample from './script/rollup-plugin-my-example';

const resolve = (dir: string) => path.join(__dirname, dir);

const external = {
  '@bytemd/plugin-gfm': 'bytemdPluginGfm',
  '@bytemd/plugin-highlight-ssr': 'bytemdPluginHighlightSsr',
  'ant-design-vue': 'antd',
  axios: 'axios',
  bytemd: 'bytemd',
  lodash: '_',
  sortablejs: 'Sortable',
  tinymce: 'tinyMCE',
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex'
};
const externalKey = Object.keys(external);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    myExample(),
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
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: externalKey,
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: external
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
