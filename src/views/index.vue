<template>
  <ScrollBar>
    <div class="page">
      <router-link to="/drag-form">drag-form</router-link>
    </div>
  </ScrollBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScrollBar from '@/components/ScrollBar.vue';

export default defineComponent({
  components: {
    ScrollBar
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.page {
  height: 1000px;
}
</style>
