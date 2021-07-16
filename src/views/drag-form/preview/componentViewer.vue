<template>
  <div class="preview-container">
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
      <template v-for="item in currentIdFormAttr?.__attr__" :key="item.id">
        <template v-if="item.component === 'a-Divider'">
          <component :is="item.component" v-bind="item.options">{{ item.label }}</component>
        </template>
        <template v-else>
          <a-form-item
            :wrapperCol="{
              span: item.options.wrapperColSpan ?? 24
            }"
            :label="item.options.label ? item.label : ''"
            :name="item.required ? item._key : ''"
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
      </template>
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
    </a-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { getMakingIdFormAttr } from '@/config/drag-form/reactiveFormOptions';
import Tinymac from '../components/Tinymce.vue';
import Bytemd from '../components/Bytemd/component/v3/editor.vue';
// import 'bytemd/dist/index.min.css';
import { RuleItem } from 'async-validator';

export default defineComponent({
  components: {
    'a-Tinymce': Tinymac,
    'a-Bytemd': Bytemd
  },
  setup() {
    const route = useRoute();
    let currentIdFormAttr = getMakingIdFormAttr(route.params.id as string);
    const cacheFormRulesrules = computed(() => {
      let rules: Partial<Record<string, RuleItem[]>> = {};
      for (const item of currentIdFormAttr.__attr__) {
        if (item.required) {
          rules[item._key] = item.rules;
        }
      }
      return rules;
    });

    const onSubmit = () => {
      console.log('submit');
    };

    return {
      currentIdFormAttr,
      cacheFormRulesrules,
      onSubmit
    };
  }
});
</script>

<style lang="less" scoped>
.preview-container {
  height: 100%;
  padding: 40px;
  overflow-y: auto;
}
::v-deep(.bytemd-fullscreen.bytemd) {
  z-index: 999;
}
</style>
