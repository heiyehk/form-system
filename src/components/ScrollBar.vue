<template>
  <div ref="scrollBarContainer" class="scroll-bar-container" @scroll="scrollBar">
    <slot></slot>
    <div class="scroll-bar-box">
      <div class="scroll-bar-thumb"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const scrollBarContainer = ref(null);
    const scrollBar = (e: Event) => {
      const target = e.target as Element;
      const scrollTop = target.scrollTop;
      console.dir(target);
    };
    return {
      scrollBarContainer,
      scrollBar
    };
  }
});
</script>

<style lang="less" scoped>
.scroll-bar-container {
  height: 100%;
  overflow-y: auto;
  position: relative;
  .scroll-bar-box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #f1f1f1;
    width: 8px;
    height: 100%;
    .scroll-bar-thumb {
      width: 100%;
      height: 50%;
      background-color: #c1c1c1;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  &::-webkit-scrollbar {
    width: 16px;
    background-color: #f1f1f1;
    height: 100%;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f1f1f1;
  }

  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c1c1c1;
  }
}
</style>
