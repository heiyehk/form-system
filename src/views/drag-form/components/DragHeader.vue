<template>
  <a-layout-header class="layout-header">
    <div class="flex-between" style="height: 100%">
      <div class="left flex">
        <router-link class="flex-items" to="/drag-form/index">
          <div class="logo">
            <img src="/logo.jpg" />
          </div>
          <h1>AntdV表单制作工具</h1>
        </router-link>
        <span class="version">{{ version }}</span>
      </div>
      <div v-if="routePath.includes('/drag-form/making/')" class="right">
        <a-button
          :type="copyStatus === 0 ? 'primary' : 'default'"
          :class="copyStatus !== 0 ? 'button-color-green' : ''"
          @click="copyCode"
          style="margin-right: 20px"
        >
          <template #icon>
            <CopyOutlined />
            <CheckOutlined />
          </template>
          复制
        </a-button>
        <a-button @click="previewCurrentMaking" style="margin-right: 20px">
          <template #icon><LinkOutlined /></template>
          预览
        </a-button>
        <a-button type="danger" :disabled="!currentIdFormAttr?.__attr__?.length" @click="clearCurrMaking">
          <template #icon><DeleteOutlined /></template>
          清空
        </a-button>
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { computed, createVNode, defineComponent, ref } from 'vue';
import {
  CopyOutlined,
  CheckOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  LinkOutlined
} from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router';
import { getMakingIdFormAttr } from '@/config/drag-form/reactiveFormOptions';
import { Modal } from 'ant-design-vue';
import { version } from '@/../package.json';
import VueTemplate from '@/render/preview';
import { copyText } from '@/utils';

export default defineComponent({
  components: {
    CopyOutlined,
    CheckOutlined,
    DeleteOutlined,
    LinkOutlined
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    let makingId = computed(() => {
      return route.params.id as string;
    });
    const currentIdFormAttr = computed(() => getMakingIdFormAttr(makingId.value));

    // 复制功能
    const copyStatus = ref(0);
    const copyCode = () => {
      if (copyStatus.value !== 0) return;
      copyStatus.value = 1;
      copyText(VueTemplate()).then((res) => {
        console.log(res);
        copyStatus.value = 2;
        setTimeout(() => {
          copyStatus.value = 0;
        }, 400);
      });
    };

    // 预览
    const previewCurrentMaking = () => {
      window.open(router.resolve(`/drag-form/preview/${makingId.value}`).href);
    };

    /**
     * 清空制作内容
     */
    const clearCurrMaking = () => {
      Modal.confirm({
        title: '提示',
        content: '是否清空全部组件内容',
        icon: createVNode(ExclamationCircleOutlined),
        cancelText: '取消',
        okText: '确认',
        onOk() {
          currentIdFormAttr.value.__attr__ = [];
        }
      });
    };
    const routePath = computed(() => route.path);

    return {
      clearCurrMaking,
      currentIdFormAttr,
      routePath,
      previewCurrentMaking,
      version,
      copyStatus,
      copyCode
    };
  }
});
</script>

<style lang="less" scoped>
.layout-header {
  background-color: #fff;
  box-shadow: 0 2px 8px @shadow-color;
  position: relative;
  z-index: 1;
}
.left {
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
    }
  }
  h1 {
    margin-bottom: 0;
    font-size: 20px;
    margin-left: 10px;
  }
  a.flex-items:hover h1 {
    color: @primary !important;
  }
}
.version {
  font-size: 14px;
  display: inline-block;
  margin-left: 20px;
  box-sizing: border-box;
  height: 14px;
  line-height: 14px;
  margin-top: 30px;
}
.anticon.anticon-copy {
  width: 14px;
  font-size: 14px;
  opacity: 1;
  transition: all 0.4s;
}
.ant-btn .anticon.anticon-check {
  width: 0;
  font-size: 0;
  opacity: 0;
  position: relative;
  right: 0;
  transition: all 0.4s;
}
.button-color-green {
  background-color: @green;
  border-color: @green;
  color: #fff;
  transition: all 0.4s;
  .anticon.anticon-copy {
    width: 0;
    font-size: 0;
    opacity: 0;
    transition: all 0.4s;
  }
  .anticon.anticon-check {
    width: 14px;
    font-size: 14px;
    opacity: 1;
    position: relative;
    right: 10px;
    transition: all 0.4s;
  }
}
</style>
