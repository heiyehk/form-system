<template>
  <div class="tinymce-editor">
    <a-spin :spinning="spinning">
      <textarea :id="id"></textarea>
    </a-spin>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, PropType } from 'vue';
import tinymce, { Editor } from 'tinymce';
// import 'tinymce/themes/silver';
// import 'tinymce/plugins/fullscreen';
// import 'tinymce/plugins/preview';
// import 'tinymce/plugins/table';
// import 'tinymce/plugins/image';
// import 'tinymce/plugins/imagetools';
// import 'tinymce/plugins/link';
import { message } from 'ant-design-vue';
import { randomChar } from '@/utils';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: 300
    },
    branding: {
      type: Boolean,
      default: false
    },
    menubar: {
      type: [Boolean, String]
    },
    menu: {
      type: Object as PropType<
        Record<
          string,
          {
            title: string;
            items: string;
          }
        >
      >
    },
    paste_data_images: {
      type: Boolean,
      default: true
    },
    toolbar: {
      type: String,
      default:
        'formatselect | bold italic | alignleft aligncenter alignright alignjustify | link image | outdent indent | table | removeformat preview'
    },
    plugins: {
      type: String,
      default: 'fullscreen preview link image imagetools table preview'
    },
    images_upload_url: {
      type: String,
      default: ''
    }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const spinning = ref(true);
    const tinymceEditor = ref<Editor | null>(null);
    const id = randomChar('id');
    console.log(id);

    const initEditor = async () => {
      tinymce
        .init({
          placeholder: props.placeholder,
          selector: `#${id}`,
          language: 'zh_CN',
          language_url: '/langs/zh_CN.js',
          width: props.width,
          height: props.height,
          theme: 'silver',
          branding: props.branding,
          // menubar: false,
          menubar: props.menubar,
          // 配置每个菜单栏的子菜单项（如下是默认配置）
          menu: props.menu,
          // paste_data_images: props.paste_data_images,
          toolbar: props.toolbar,
          plugins: props.plugins,
          images_upload_url: props.images_upload_url
          // images_upload_handler: (blobInfo, success, failure) => {
          //   console.log(blobInfo.blob());
          // }
        })
        .then((editor) => {
          // 加载完毕时赋值一次
          tinymce.activeEditor.setContent(props.value);
          tinymceEditor.value = editor[0];
          editor[0].on('input', () => {
            emit('update:value', tinymce.activeEditor.getContent());
          });
        })
        .finally(() => {
          spinning.value = false;
        })
        .catch(() => {
          message.warning({
            type: 'error',
            title: '编辑器初始化出错!'
          });
        });
    };
    onMounted(async () => {
      await initEditor();
    });

    onUnmounted(() => {
      tinymce.activeEditor?.destroy();
      tinymceEditor.value = null;
    });

    return {
      spinning,
      id
    };
  }
});
</script>

<style lang="less" scoped>
.editor {
  width: 0;
  height: 0;
  opacity: 0;
  outline: 0;
  resize: none;
  padding: 0;
  border: none;
  overflow: hidden;
  position: absolute;
}
.tinymce-editor {
  position: relative;
}
</style>
