<template>
  <div class="flex page-making" v-if="currentIdFormAttr">
    <MakingLeft :makingId="makingId" />
    <div class="padding-box flex1">
      <MakingContent :makingId="makingId" @selectItem="(id) => (selectItemId = id)" />
    </div>
    <MakingRight :makingId="makingId" :selectItemId="selectItemId" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MakingLeft from './makingLayout/MakingLeft.vue';
import MakingRight from './makingLayout/MakingRight.vue';
import MakingContent from './makingLayout/MakingContent.vue';
import { useRoute, useRouter } from 'vue-router';
import { getMakingIdFormAttr } from '@/config/drag-form/reactiveFormOptions';
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
    return {
      makingId,
      selectItemId,
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
</style>
