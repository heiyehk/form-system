<template>
  <a-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    :validateOnRuleChange="true"
    :scrollToFirstError="false"
    validateTrigger="change"
    :hideRequiredMark="false"
    :labelCol="{ span: 4 }"
    labelAlign="right"
    layout="horizontal"
  >
    <a-form-item label="单行">
      <a-Input
        v-model:value="formModel.compo0g"
        size="small"
        :disabled="false"
        :allowClear="true"
        placeholder="请输入内容"
    /></a-form-item>
    <a-form-item label="单行" name="comp4uh">
      <a-Input
        v-model:value="formModel.comp4uh"
        size="small"
        :disabled="false"
        :allowClear="true"
        placeholder="请输入内容"
    /></a-form-item>
    <a-form-item label="开关" name="comp50h">
      <a-Switch v-model:checked="formModel.comp50h" size="small" :disabled="false" :loading="false"
    /></a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue';
import { ValidateErrorEntity } from 'ant-design-vue/lib/form/interface';

interface FormModelType {
  compo0g: string;
  comp4uh: string;
  comp50h: undefined | string;
}

export default defineComponent({
  setup() {
    const formRef = ref();

    /**
     * 表单model
     */
    const formModel: UnwrapRef<FormModelType> = reactive({
      compo0g: '',
      comp4uh: '',
      comp50h: undefined
    });

    /**
     * 表单rules验证
     */
    const formRules = reactive({
      compo0g: [
        {
          required: true,
          message: '请输入单行'
        }
      ],
      comp4uh: [
        {
          required: true,
          message: '请输入单行'
        }
      ],
      comp50h: [
        {
          required: true,
          message: '请输入开关'
        }
      ]
    });

    /**
     * 表单提交
     */
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formModel, toRaw(formModel));
        })
        .catch((error: ValidateErrorEntity<FormModelType>) => {
          console.log('error', error);
        });
    };

    return {
      formRef,
      formModel,
      formRules,
      onSubmit
    };
  }
});
</script>

<style lang="less" scoped></style>
