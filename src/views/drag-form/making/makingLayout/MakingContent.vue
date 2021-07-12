<template>
  <div class="making-content flex">
    <a-row class="making-content-row flex1">
      <div class="grid-bg flex-center" v-if="!currentIdFormAttr?.__attr__?.length">
        从左侧拖入或点选组件进行表单设计
      </div>
      <a-form
        class="making-content-form"
        :name="currentIdFormAttr.name"
        :validateOnRuleChange="currentIdFormAttr.validateOnRuleChange"
        :scrollToFirstError="currentIdFormAttr.scrollToFirstError"
        :validateTrigger="currentIdFormAttr.validateTrigger"
        :hideRequiredMark="currentIdFormAttr.hideRequiredMark"
        :labelAlign="currentIdFormAttr.labelAlign"
        :layout="currentIdFormAttr.layout"
        :labelCol="currentIdFormAttr.labelCol"
        :colon="currentIdFormAttr.colon"
        :model="currentIdFormAttr?.__attr__"
        :rules="cacheFormRulesrules"
        :size="currentIdFormAttr.size"
      >
        <!-- 可拖拽区域 -->
        <template v-for="item in currentIdFormAttr?.__attr__" :key="item.id">
          <a-col
            class="form-item-col"
            :class="selectItemId === item.id ? 'active-form-item' : ''"
            span="24"
            @click="chooseFormCol(item.id)"
          >
            <div class="absolute-btns">
              <CopyOutlined :title="`复制${item.label}`" @click.stop="copyComponentItem(item.id)" />
              <DeleteOutlined :title="`删除${item.label}`" @click.stop="deleteComponentItem(item.id)" />
            </div>
            <template v-if="item.component === 'a-Divider'">
              <component :is="item.component" v-bind="item.options">{{ item.label }}</component>
            </template>
            <template v-else>
              <a-form-item
                :wrapperCol="{
                  span: item.options.wrapperColSpan ?? 24
                }"
                :label="item.options.label ? item.label : ''"
                :name="item.required ? item.key : ''"
              >
                <component
                  v-if="item.component === 'a-Switch'"
                  :is="item.component"
                  v-bind="item.options.props"
                  v-model:checked="item.options.props.checked"
                  :size="currentIdFormAttr.size"
                />
                <component
                  v-else
                  :is="item.component"
                  v-bind="item.options.props"
                  v-model:value="item.options.props.value"
                  :size="currentIdFormAttr.size"
                />
              </a-form-item>
            </template>
          </a-col>
        </template>
      </a-form>
      <!-- 提交按钮 -->
      <a-form v-if="currentIdFormAttr?.__attr__?.length && currentIdFormAttr.submitBtns">
        <a-form-item class="submit-btns" :wrapper-col="{ span: 14, offset: 4 }">
          <div class="flex" :class="`flex-align-${currentIdFormAttr.btnsAlign}`">
            <a-button type="primary">{{ currentIdFormAttr.confirmText }}</a-button>
            <a-button style="margin-left: 10px" v-if="currentIdFormAttr.cancel">
              {{ currentIdFormAttr.cancelText }}
            </a-button>
            <a-button style="margin-left: 10px" v-if="currentIdFormAttr.reset">
              {{ currentIdFormAttr.resetText }}
            </a-button>
          </div>
        </a-form-item>
      </a-form>
    </a-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import Sortable from 'sortablejs';
import { Empty } from 'ant-design-vue';
import { DeleteOutlined, CopyOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash';
import Tinymac from '../../components/Tinymce.vue';
import Bytemd from '../../components/Bytemd/component/v3/editor.vue';

import { randomChar, uuid } from '@/utils';
import { formsOptions } from '@/config/drag-form/reactiveFormOptions';
import { componentAttrOptions } from '@/config/drag-form/formJsonComponent';

// import 'bytemd/dist/index.min.css';
import { FormItemComponentAttr } from '@/types/drag-form/forms';
import { AntdvComponentOptions } from '@/types/drag-form/component-options';
import { RuleItem } from 'async-validator';

export default defineComponent({
  emits: ['selectItem'],
  props: ['makingId'],
  components: {
    'a-Tinymce': Tinymac,
    'a-Bytemd': Bytemd,
    CopyOutlined,
    DeleteOutlined
  },
  setup(props, { emit }) {
    const cacheFormRulesrules = computed(() => {
      let rules: Partial<Record<string, RuleItem[]>> = {};
      for (const item of currentIdFormAttr.__attr__) {
        rules[item.key] = item.rules;
      }
      return rules;
    });
    let currentIdFormAttr = formsOptions.value.filter((item) => item.id === props.makingId)[0];
    // 添加部分
    const initSortable = () => {
      Sortable.create(document.querySelector('.making-content-form') as HTMLElement, {
        group: 'shared',
        animation: 150,
        ghostClass: 'ghost-class',
        chosenClass: 'sortable-chosen',
        filter: '.submit-btns',
        store: {
          get(e) {
            console.log(e);
            return [];
          },
          set(e) {
            console.log(e.toArray());
          }
        },
        onSort(event) {
          sortableSort(event);
        },
        onAdd(event) {
          event.item.remove();
        },
        onEnd(event) {
          // 拖拽排序
          const oldDiffAttr = currentIdFormAttr.__attr__?.[event.oldIndex!];
          const newDiffAttr = currentIdFormAttr.__attr__?.[event.newIndex!];
          currentIdFormAttr.__attr__[event.oldIndex!] = newDiffAttr;
          currentIdFormAttr.__attr__[event.newIndex!] = oldDiffAttr;
        }
      });
    };
    /**
     * 拖拽push
     */
    const sortableSort = (event: Sortable.SortableEvent) => {
      const { component, name } = event.item.dataset;
      const uuidValue = uuid();
      if (!component) return;
      /**
       * 创建拖入组件
       *
       * 防止污染源数据，使用深拷贝
       */
      let attrOptions: FormItemComponentAttr = {
        label: name!,
        key: 'comp' + randomChar(3),
        required: true,
        component: `a-${component}` as `a-${keyof AntdvComponentOptions}`,
        id: uuidValue,
        options: cloneDeep(componentAttrOptions[component as keyof AntdvComponentOptions]) as any
      };
      if (component !== 'Divider') {
        attrOptions.rules = [{ required: true, message: `请输入${name}` }];
      }
      // 组件渲染
      currentIdFormAttr.__attr__?.splice(event.newIndex!, 0, attrOptions);
    };
    onMounted(() => {
      initSortable();
    });
    const selectItemId = ref('');
    const chooseFormCol = (id: string) => {
      selectItemId.value = id;
      emit('selectItem', id);
    };
    // 拿到当前选中组件下标
    const getSelectItemIdIndex = (id: string) => currentIdFormAttr.__attr__.findIndex((item) => item.id === id);
    /**
     * 复制组件
     *
     * 需要新的 id 和 name
     */
    const copyComponentItem = (id: string) => {
      const index = getSelectItemIdIndex(id);
      // 生成新的id
      const copyItemId = uuid();
      const { label, component, options, rules } = { ...currentIdFormAttr.__attr__[index] };
      const newItem = {
        key: 'comp' + randomChar(3),
        label,
        required: true,
        id: copyItemId,
        component,
        options: { ...options, value: '' },
        rules
      };
      currentIdFormAttr.__attr__.splice(index + 1, 0, newItem);
    };
    // 删除组件
    const deleteComponentItem = (id: string) => {
      currentIdFormAttr.__attr__.splice(getSelectItemIdIndex(id), 1);
    };
    return {
      currentIdFormAttr,
      chooseFormCol,
      selectItemId,
      cacheFormRulesrules,
      copyComponentItem,
      deleteComponentItem,
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE
    };
  }
});
</script>

<style lang="less" scoped>
.flex-align-left {
  display: flex;
  justify-content: flex-start;
}
.flex-align-center {
  display: flex;
  justify-content: center;
}
.flex-align-right {
  display: flex;
  justify-content: flex-end;
}
.making-content {
  box-shadow: 0 0 10px @shadow-color;
  transition: all 0.4s;
  box-sizing: border-box;
  padding: 14px;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  top: 14px;
  flex-direction: column;
  .making-content-row {
    position: relative;
    z-index: 1;
    flex-direction: column;
    display: flex;
  }
  .making-content-form {
    width: 100%;
    position: relative;
    flex: 1;
  }
  .form-item-col {
    border-radius: 4px;
    padding: 10px 0;
    border: 1px dashed transparent;
    margin-bottom: 10px;
    cursor: grab;
    position: relative;
    .absolute-btns {
      position: absolute;
      right: 0;
      top: -20px;
      display: none;
      cursor: pointer;
    }
    .anticon {
      color: @base-color;
      font-size: 16px;
      margin-left: 10px;
      border: 1px solid @border-color;
      padding: 6px;
      border-radius: 100%;
      background-color: #fff;
    }
    .anticon-copy:hover {
      color: @primary;
      border-color: @primary;
    }
    .anticon-delete:hover {
      color: @red;
      border-color: @red;
    }
    &:hover {
      background-color: @background-sub-color;
      .absolute-btns {
        display: block;
        opacity: 1;
        z-index: 2;
      }
    }
    &:active {
      cursor: grabbing;
    }
  }
  .sortable-chosen {
    border: 1px solid @primary;
    background-color: @background-color;
  }
}
.grid-bg {
  background-image: linear-gradient(90deg, rgba(202, 202, 202, 0.15) 10%, rgba(0, 0, 0, 0) 10%),
    linear-gradient(rgba(202, 202, 202, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
  background-size: 10px 10px;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  font-size: 26px;
  color: @desc-color;
}
.active-form-item {
  background-color: @background-color;
  color: @background-sub-color;
}
.ant-form-item {
  margin-bottom: 0;
}
</style>

<style lang="less">
li.ghost-class {
  background-color: @background-sub-color;
  color: @background-sub-color;
  height: 50px;
}
</style>
