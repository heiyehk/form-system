<template>
  <a-form class="making-form-right" :model="currentIdFormAttr" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-divider>基础属性</a-divider>
    <a-form-item label="表单名称">
      <a-input v-model:value="currentIdFormAttr.name" maxLength="20" allowClear />
    </a-form-item>
    <a-form-item label="数据对象名">
      <a-input v-model:value="currentIdFormAttr.model" maxLength="20" allowClear />
    </a-form-item>
    <a-form-item label="验证规则名">
      <a-input v-model:value="currentIdFormAttr.rules" maxLength="20" allowClear />
    </a-form-item>
    <a-form-item>
      <template #label>
        <a-tooltip placement="left" title="是否在 rules 属性改变后立即触发一次验证">
          <span>规则触发</span>
          <QuestionCircleOutlined class="label-icon" />
        </a-tooltip>
      </template>
      <a-switch v-model:checked="currentIdFormAttr.validateOnRuleChange" />
    </a-form-item>
    <a-form-item>
      <template #label>
        <a-tooltip placement="left" title="提交失败自动滚动到第一个错误字段">
          <span>自动滚动</span>
          <QuestionCircleOutlined class="label-icon" />
        </a-tooltip>
      </template>
      <a-switch v-model:checked="currentIdFormAttr.scrollToFirstError" />
    </a-form-item>
    <a-form-item>
      <template #label>
        <a-tooltip placement="left" title="统一设置字段校验规则">
          <span>触发方式</span>
          <QuestionCircleOutlined class="label-icon" />
        </a-tooltip>
      </template>
      <a-auto-complete
        v-model:value="currentIdFormAttr.validateTrigger"
        maxLength="20"
        :options="triggerSource"
        allowClear
      />
    </a-form-item>
    <a-divider>表单布局</a-divider>
    <a-form-item label="隐藏必选标记">
      <a-switch v-model:checked="currentIdFormAttr.hideRequiredMark" />
    </a-form-item>
    <a-form-item label="标签宽度">
      <a-slider
        :disabled="currentIdFormAttr.layout !== 'horizontal'"
        v-model:value="currentIdFormAttr.labelCol.span"
        :min="1"
        :max="10"
      />
    </a-form-item>
    <a-form-item label="对齐方式">
      <a-radio-group
        :disabled="currentIdFormAttr.layout !== 'horizontal'"
        v-model:value="currentIdFormAttr.labelAlign"
        button-style="solid"
      >
        <a-radio-button value="left">左对齐</a-radio-button>
        <a-radio-button value="right">右对齐</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="组件大小">
      <a-radio-group v-model:value="currentIdFormAttr.size" button-style="solid">
        <a-radio-button value="small">小</a-radio-button>
        <a-radio-button value="default">中</a-radio-button>
        <a-radio-button value="large">大</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="表单布局">
      <a-radio-group v-model:value="currentIdFormAttr.layout" button-style="solid">
        <a-radio-button value="horizontal">水平</a-radio-button>
        <a-radio-button value="vertical">垂直</a-radio-button>
        <a-radio-button value="inline">内联</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="隐藏冒号">
      <a-switch :disabled="currentIdFormAttr.layout !== 'horizontal'" v-model:checked="currentIdFormAttr.colon" />
    </a-form-item>
    <a-divider>提交按钮</a-divider>
    <a-form-item label="启用提交">
      <a-switch v-model:checked="currentIdFormAttr.submitBtns" />
    </a-form-item>
    <a-form-item label="提交按钮文字">
      <a-input v-model:value="currentIdFormAttr.confirmText" maxLength="10" allowClear />
    </a-form-item>
    <a-form-item label="显示取消按钮">
      <a-switch v-model:checked="currentIdFormAttr.cancel" />
    </a-form-item>
    <a-form-item label="取消按钮文字">
      <a-input v-model:value="currentIdFormAttr.cancelText" maxLength="10" allowClear />
    </a-form-item>
    <a-form-item label="显示重置按钮">
      <a-switch v-model:checked="currentIdFormAttr.reset" />
    </a-form-item>
    <a-form-item label="重置按钮文字">
      <a-input v-model:value="currentIdFormAttr.resetText" maxLength="10" allowClear />
    </a-form-item>
    <!-- <a-form-item label="按钮布局">
      <a-radio-group v-model:value="currentIdFormAttr.btnsAlign" button-style="solid">
        <a-radio-button value="left">左</a-radio-button>
        <a-radio-button value="center">中</a-radio-button>
        <a-radio-button value="right">右</a-radio-button>
      </a-radio-group>
    </a-form-item> -->
    <!-- <a-form-item label="是否悬浮按钮">
      <a-switch v-model:checked="currentIdFormAttr.suspend" />
    </a-form-item> -->
  </a-form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import { FormOptions } from '@/types/drag-form/forms';

export default defineComponent({
  components: {
    QuestionCircleOutlined
  },
  props: {
    attr: {
      type: Object as PropType<FormOptions>
    }
  },
  setup(props) {
    const triggerSource = ref([
      { text: 'change', value: 'change' },
      { text: 'blur', value: 'blur' }
    ]);
    return {
      triggerSource,
      labelCol: { span: 9 },
      wrapperCol: { span: 13 },
      currentIdFormAttr: props.attr!
    };
  }
});
</script>

<style lang="less" scoped>
.label-icon {
  font-size: 14px;
  margin-left: 4px;
}
.ant-tabs-tabpane {
  height: 100%;
  box-sizing: border-box;
}
.making-form-right {
  height: 100%;
  overflow-y: auto;
}
</style>
