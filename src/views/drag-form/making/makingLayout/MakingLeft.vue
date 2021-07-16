<template>
  <div class="making-left">
    <template v-for="item in componentNameOptions" :key="item.component">
      <a-divider>{{ item.title }}</a-divider>
      <ul class="component-list flex">
        <template v-for="component in item.components" :key="component.component">
          <li :title="component.component" :data-component="component.component" :data-label="component.name">
            <template v-if="component.tips">
              <a-tooltip placement="bottom">
                <template #title>{{ component.tips }}</template>
                <div>{{ component.name }}</div>
              </a-tooltip>
            </template>
            <template v-else>
              <div>{{ component.name }}</div>
            </template>
          </li>
        </template>
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { componentNameOptions } from '@/config/drag-form//formJsonComponent';
import Sortable from 'sortablejs';

export default defineComponent({
  setup() {
    const formRef = ref<null | HTMLElement>(null);
    const sortableOptions: Sortable.Options = {
      animation: 150,
      group: {
        name: 'shared',
        pull: 'clone',
        put: false
      },
      sort: false,
      fallbackOnBody: true
    };
    onMounted(() => {
      const componentList = document.querySelectorAll('.component-list');
      componentList.forEach((item) => {
        Sortable.create(item as HTMLElement, sortableOptions);
      });
    });
    return {
      componentNameOptions,
      formRef
    };
  }
});
</script>

<style lang="less" scoped>
.making-left {
  width: 300px;
  background-color: #fff;
  height: 100%;
  overflow-y: auto;
}
.component-list {
  flex-wrap: wrap;
  padding: 0 20px;
  box-sizing: border-box;
  li {
    list-style: none;
    width: calc(50% - 10px);
    margin: 5px;
    background-color: @background-color !important;
    border: 1px dashed transparent;
    border-radius: 4px;
    height: 44px;
    line-height: 44px;
    transition: all 0.2s;
    font-size: 14px;
    text-align: center;
    user-select: none;
    cursor: grab;
    div {
      width: 100%;
      height: 100%;
    }
    &:active {
      cursor: grabbing;
    }
    &:hover {
      box-shadow: @shadow-1-down;
      color: @primary;
      transition: all 0.2s;
      border: 1px dashed @primary;
    }
  }
}
</style>
