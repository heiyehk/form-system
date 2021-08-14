<template>
  <div class="split-content flex-items" :class="`split-content-direction-${vertical}`">
    <div :class="`split-content-${vertical === 'default' ? 'left' : 'top'}`" :style="styleComputed.left">
      <slot name="before"></slot>
    </div>
    <a-popconfirm
      title="拖拽可控制面板大小，双击复位"
      :visbili="true"
      ok-text="关闭"
      cancel-text="取消"
      @confirm="confirm"
      @cancel="cancel"
      trigger="hover"
      placement="right"
      :visible="!triggerTipsStatus"
    >
      <div
        class="split-content-trigger"
        :class="!triggerTipsStatus ? 'trigger-show' : ''"
        @mousedown="mousedown"
        :style="styleComputed.trigger"
        @dblclick="dbclick"
      ></div>
    </a-popconfirm>
    <div :class="`split-content-${vertical === 'default' ? 'right' : 'bottom'}`" :style="styleComputed.right">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    vertical: {
      type: String as PropType<'default' | 'vertical'>,
      default: 'default'
    }
  },
  setup(props) {
    const offsetTarget = ref(0);
    const flag = ref(false);
    const mousedown = () => {
      flag.value = true;
    };
    // 面板切割
    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (!flag.value) return;
      const { clientX, clientY } = e;
      offsetTarget.value = props.vertical === 'default' ? clientX : clientY;
    });
    document.addEventListener('mouseup', () => {
      flag.value = false;
    });
    // 样式更新
    const styleComputed = computed(() => {
      if (props.vertical === 'default') {
        return {
          left: `width: ${offsetTarget.value ? offsetTarget.value + 'px' : '50%'};`,
          trigger: offsetTarget.value ? `left: ${offsetTarget.value}px;transform: translateX(0);` : '',
          right: offsetTarget.value ? 'width: auto' : ''
        };
      }
      return {
        left: `height: ${offsetTarget.value ? offsetTarget.value + 'px' : '50%'};`,
        trigger: offsetTarget.value ? `top: ${offsetTarget.value}px;transform: translateY(0);` : '',
        right: offsetTarget.value ? 'height: auto' : ''
      };
    });
    // 控制提示显示
    const triggerTipsStatus = ref<boolean>(!!localStorage.getItem('triggerTipsStatus'));
    // 关闭提示
    const confirm = () => {
      cancel();
      localStorage.setItem('triggerTipsStatus', '1');
    };
    const cancel = () => {
      triggerTipsStatus.value = true;
    };
    // 复位
    const dbclick = () => {
      offsetTarget.value = 0;
    };
    return {
      mousedown,
      offsetTarget,
      styleComputed,
      dbclick,
      confirm,
      cancel,
      triggerTipsStatus
    };
  }
});
</script>

<style lang="less" scoped>
.split-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-trigger {
    position: absolute;
    background-color: @desc-color;
    z-index: 999;
    transition: background-color 0.2s;
    &:hover {
      background-color: @primary-sub;
      transition: background-color 0.2s;
    }
    &:active {
      transition: background-color 0.2s;
      background-color: @primary;
    }
  }
}

// 默认左右方向
.split-content-direction-default {
  .split-content-left,
  .split-content-right {
    width: 50%;
    height: 100%;
  }
  .split-content-trigger {
    cursor: col-resize;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 100%;
  }
}
.trigger-show {
  background-color: @primary;
}
// 上下方向
.split-content-direction-vertical {
  flex-direction: column;
  .split-content-top,
  .split-content-bottom {
    height: 50%;
    width: 100%;
  }
  .split-content-trigger {
    cursor: row-resize;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 6px;
  }
}
</style>
