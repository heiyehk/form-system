<template>
  <a-row>
    <a-col :span="11">
      <a-input :placeholder="oneplaceholder" />
    </a-col>
    <a-col :span="2">
      <div class="segmentation-box flex-center">
        <span class="segmentation">—</span>
      </div>
    </a-col>
    <a-col :span="11">
      <a-input :placeholder="twoplaceholder" />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    oneplaceholder: {
      type: String,
      default: '请输入内容'
    },
    twoplaceholder: {
      type: String,
      default: '请输入内容'
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.segmentation-box {
  height: 100%;
  font-size: 12px;
}
</style>
