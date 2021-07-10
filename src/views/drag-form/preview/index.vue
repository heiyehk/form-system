<template>
  <div class="editor-container">
    <SplitContent>
      <template #before>
        <codeViewer :value="VueTemplate" />
      </template>
      <template #after>
        <componentViewer />
      </template>
    </SplitContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getMakingIdFormAttr } from '@/config/drag-form/reactiveFormOptions';
import SplitContent from '@/components/SplitContent.vue';
import { useRoute } from 'vue-router';
import codeViewer from './codeViewer.vue';
import componentViewer from './componentViewer.vue';
import VueTemplate from '@/render/preview';

export default defineComponent({
  components: {
    SplitContent,
    codeViewer,
    componentViewer
  },
  setup() {
    const route = useRoute();
    const currentIdFormAttr = getMakingIdFormAttr(route.params.id as string);

    return {
      VueTemplate: VueTemplate()
    };
  }
});
</script>

<style lang="less" scoped>
.editor-container,
.monaco-editor {
  width: 100%;
  height: 100%;
}
</style>
