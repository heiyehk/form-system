<template>
  <a-layout style="height: 100%">
    <DragHeader />
    <a-layout-content class="layout-content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DragHeader from '../components/DragHeader.vue';

export default defineComponent({
  components: {
    DragHeader
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.layout-content {
  background-color: @background-sub-color;
}
</style>
