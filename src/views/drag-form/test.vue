<template>
  <a-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    :validateOnRuleChange="true"
    :scrollToFirstError="false"
    validateTrigger="change"
    :hideRequiredMark="false"
    :labelCol="{ span: 2 }"
    labelAlign="right"
    layout="horizontal"
  >
    <a-form-item label="markdown" name="compv03">
      <a-Bytemd @change="change" v-model:value="formModel.compv03" size="default" :disabled="false"
    /></a-form-item>
    <a-form-item label="markdown" name="compv03">
      <Viewer v-model:value="formModel.compv03" size="default" :disabled="false"
    /></a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">提交</a-button>
      <a-button style="margin-left: 10px">重置</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue';
import { ValidateErrorEntity } from 'ant-design-vue/lib/form/interface';
import Bytemd from './components/Bytemd/component/v3/editor.vue';
import Viewer from './components/Bytemd/component/v3/viewer.vue';

interface FormModelType {
  compv03: string;
}

export default defineComponent({
  components: {
    'a-Bytemd': Bytemd,
    Viewer
  },
  setup() {
    const formRef = ref();

    /**
     * 表单model
     */
    const formModel: UnwrapRef<FormModelType> = reactive({
      compv03: ''
    });

    /**
     * 表单rules验证
     */
    const formRules = reactive({
      compv03: [
        {
          required: true,
          message: '请输入markdown'
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

    const change = (value: string) => {
      console.log(value);
    };

    return {
      formRef,
      formModel,
      formRules,
      onSubmit,
      change
    };
  }
});
</script>

<style lang="less" scoped></style>
