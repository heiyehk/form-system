<template>
  <div ref="editorRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import * as bytemd from 'bytemd';
import zhHans from 'bytemd/lib/locales/zh_Hans.json';
// import gemoji from '@bytemd/plugin-gemoji';
import gfmZhHans from '@bytemd/plugin-gfm/lib/locales/zh_Hans.json';
import gfm from '@bytemd/plugin-gfm';
// import highlights from '@bytemd/plugin-highlight';
import highlights from '@bytemd/plugin-highlight-ssr';
// import mediumZoom from '@bytemd/plugin-medium-zoom';
// import 'bytemd/dist/index.min.css';
// import 'highlight.js/styles/default.css';

const plugins = [
  gfm({
    locale: gfmZhHans
  }),
  highlights()
];

export default defineComponent({
  props: {
    value: String,
    plugins: {
      type: Array,
      default: plugins
    },
    sanitize: Object,
    mode: String,
    previewDebounce: Number,
    placeholder: String,
    editorConfig: Object,
    locale: {
      type: Object,
      default: zhHans
    },
    uploadImages: Function
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const editorRef = ref(null);
    const editorEditor = ref<any>(null);

    watch(
      () => props,
      (newValue) => {
        const copy: Partial<any> = { ...newValue };
        for (let k in copy) {
          if (copy[k] === undefined) {
            delete copy[k];
          }
        }
        if (editorEditor.value) {
          editorEditor.value.$set(copy);
        }
      },
      {
        deep: true
      }
    );

    onMounted(() => {
      const editor = new bytemd.Editor({
        target: editorRef.value,
        props: props
      });
      editor.$on('change', (e: any) => {
        emit('update:value', e.detail.value);
        emit('change', e.detail.value);
      });
      editorEditor.value = editor;
    });
    return {
      editorRef
    };
  }
});
</script>

<style lang="less" scoped></style>
