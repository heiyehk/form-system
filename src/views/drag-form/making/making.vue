<template>
  <div class="flex page-making" v-if="currentIdFormAttr">
    <div class="making-left-container">
      <MakingLeft :makingId="makingId" />
    </div>
    <div class="padding-box flex1">
      <MakingContent :makingId="makingId" @selectItem="selectIdHandle" />
    </div>
    <div class="marking-right-container">
      <MakingRight :makingId="makingId" :selectItemId="selectItemId" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, defineAsyncComponent, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getMakingIdFormAttr } from '@/config/drag-form/reactiveFormOptions';
import { Spin } from 'ant-design-vue';

const MakingLeft = defineAsyncComponent<Component>({
  loader: () => import('./makingLayout/MakingLeft.vue'),
  loadingComponent: Spin
});
const MakingRight = defineAsyncComponent<Component>({
  loader: () => import('./makingLayout/MakingRight.vue'),
  loadingComponent: Spin
});
const MakingContent = defineAsyncComponent<Component>({
  loader: () => import('./makingLayout/MakingContent.vue'),
  loadingComponent: Spin
});

export default defineComponent({
  components: {
    MakingLeft,
    MakingRight,
    MakingContent
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const makingId = route.params.id;
    const currentIdFormAttr = getMakingIdFormAttr(makingId as string);
    const spinning = ref(true);
    if (!currentIdFormAttr) {
      // 本地缓存被删除
      router.push('/drag-form/index');
    } else {
      spinning.value = false;
    }
    const selectItemId = ref('');
    const selectIdHandle = (id: string) => {
      selectItemId.value = id;
    };
    return {
      makingId,
      selectItemId,
      selectIdHandle,
      currentIdFormAttr,
      spinning
    };
  }
});
</script>

<style lang="less" scoped>
.page-making {
  height: 100%;
}
.padding-box {
  padding: 14px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
::v-deep(.ant-spin-nested-loading) {
  width: 100%;
  height: 100%;
}
::v-deep(.ant-spin-container) {
  display: flex;
  width: 100%;
  height: 100%;
}
::v-deep(.ant-spin-spinning) {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.making-left-container {
  position: relative;
  width: 300px;
  height: 100%;
}
.marking-right-container {
  position: relative;
  width: 340px;
  height: 100%;
}
</style>
