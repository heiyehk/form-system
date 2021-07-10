<template>
  <div ref="markdownBody" class="markdown-body" v-html="file" @click="handleClick($event)"></div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, onMounted, ref, onBeforeUnmount } from 'vue';
import { getProcessor } from 'bytemd';

export default defineComponent({
  props: ['value', 'plugins', 'sanitize'],
  setup(props) {
    const file = computed(() => {
      return getProcessor(props).processSync(props.value);
    });
    // const needUpdate = computed(() => {
    //   return [file, this.plugins, this.sanitize];
    // });
    // watch(() => needUpdate, () => {

    //   this.off();
    //     this.$nextTick(() => {
    //       this.on();
    //     });
    // })；
    const cbs = ref<any>(null);
    const markdownBody = ref<any>(null);
    const on = () => {
      if (props.plugins && file) {
        cbs.value = props.plugins.map(
          ({ viewerEffect }) => viewerEffect && viewerEffect({ markdownBody: this.$el, file: this.file })
        );
      }
    };
    const off = () => {
      if (cbs.value) {
        cbs.value.forEach((cb) => cb && cb());
      }
    };
    const handleClick = (e) => {
      const $ = e.target;
      if ($.tagName !== 'A') return;

      const href = $.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const dest = markdownBody.value.querySelector('#user-content-' + href.slice(1));
      if (dest) dest.scrollIntoView();
    };
    onMounted(() => {
      on();
    });
    onBeforeUnmount(() => {
      off();
    });
    return {
      markdownBody,
      handleClick,
      file
    };
  }
});
</script>

<style lang="less" scoped></style>
