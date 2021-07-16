<template>
  <a-button v-if="item?.options.props.listType !== 'picture-card'"><UploadOutlined />上传</a-button>
  <template v-else>
    <img v-if="viewerImageUrl" :src="viewerImageUrl" />
    <div v-else>
      <LoadingOutlined v-if="uploadLoading"></LoadingOutlined>
      <PlusOutlined style="font-size: 18px" v-else></PlusOutlined>
      <div class="ant-upload-text">上传</div>
    </div>
  </template>
</template>

<script lang="ts">
import { FormItemComponentAttr } from '@/types/drag-form/forms';
import { defineComponent, PropType, ref } from 'vue';
import { UploadOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
    PlusOutlined,
    LoadingOutlined
  },
  props: {
    item: Object as PropType<FormItemComponentAttr>
  },
  setup() {
    const viewerImageUrl = ref('');
    const uploadLoading = ref(false);

    return {
      viewerImageUrl,
      uploadLoading
    };
  }
});
</script>

<style lang="less" scoped></style>
