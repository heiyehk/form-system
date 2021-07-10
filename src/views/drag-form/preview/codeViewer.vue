<template>
  <div class="monaco-editor" ref="monacoEditorRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
// import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

/**
 * 解决monaco worker问题
 * @see https://github.com/vitejs/vite/discussions/1791
 */
window.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'html') {
      return new htmlWorker();
    }
    return new editorWorker();
  }
};

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const spinning = ref(true);
    const monacoEditorRef = ref<HTMLElement | null>(null);
    const monacoEditor = ref<monaco.editor.IStandaloneCodeEditor>();
    onMounted(() => {
      monacoEditor.value = monaco.editor.create(monacoEditorRef.value as HTMLElement, {
        theme: 'vs-dark', // 主题
        value: props.value, // 默认显示的值
        language: 'html',
        folding: true, // 是否折叠
        foldingHighlight: true, // 折叠等高线
        foldingStrategy: 'indentation', // 折叠方式  auto | indentation
        showFoldingControls: 'always', // 是否一直显示折叠 always | mouseover
        disableLayerHinting: true, // 等宽优化
        emptySelectionClipboard: false, // 空选择剪切板
        selectionClipboard: false, // 选择剪切板
        automaticLayout: true, // 自动布局
        codeLens: false, // 代码镜头
        scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
        colorDecorators: true, // 颜色装饰器
        accessibilitySupport: 'off', // 辅助功能支持  "auto" | "off" | "on"
        lineNumbers: 'on', // 行号 取值： "on" | "off" | "relative" | "interval" | function
        lineNumbersMinChars: 5, // 行号最小字符   number
        wordWrap: 'on'
        // readOnly: true
      });
      spinning.value = false;
      // monacoEditor.value.setValue('123123');
    });
    return {
      monacoEditorRef,
      spinning
    };
  }
});
</script>

<style lang="less" scoped></style>
