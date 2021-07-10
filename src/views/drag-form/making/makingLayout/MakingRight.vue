<template>
  <div class="making-right">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="组件属性">
        <ComponentAttrTab :selectItemId="selectItemId" :makingId="makingId" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="表单属性" force-render>
        <FormAttrTab :attr="currentIdFormAttr" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getMakingIdFormAttr } from '@/config/drag-form/reactiveFormOptions';
import FormAttrTab from '../components/FormAttrTab.vue';
import ComponentAttrTab from '../components/ComponentAttrTab.vue';

export default defineComponent({
  components: {
    FormAttrTab,
    ComponentAttrTab
  },
  props: ['makingId', 'selectItemId'],
  setup(props) {
    const activeKey = ref('1');
    const currentIdFormAttr = getMakingIdFormAttr(props.makingId);
    return {
      activeKey,
      currentIdFormAttr
    };
  }
});
</script>

<style lang="less" scoped>
.making-right {
  width: 340px;
  background-color: #fff;
  height: 100%;
}
.ant-tabs-line.ant-tabs {
  height: 100%;
}
::v-deep(.ant-tabs-content) {
  height: calc(100% - 61px);
}
</style>
