<template>
  <div class="page-content">
    <ul class="form-list flex">
      <template v-for="(item, index) in formsOptions" :key="item._id">
        <li class="flex-center" @click="jumpMaking(item._id)">
          <div class="item" v-if="!formsEditStatus[index]">
            <p>{{ item.title }}</p>
          </div>
          <div class="item" v-if="formsEditStatus[index]" @click.stop>
            <a-form ref="formRef" class="add-form" :model="formModel" :rules="formRules">
              <a-form-item label="名称" name="title">
                <a-input
                  ref="itemInput"
                  @input="currEditInput"
                  v-model:value="formsOptions[index].title"
                  @pressEnter="onSubmit(index)"
                />
              </a-form-item>
              <a-form-item style="margin-bottom: 0">
                <a-button type="primary" @click.prevent.stop="onSubmit(index)">确认</a-button>
                <a-button style="margin-left: 20px" @click.stop="reset(index)">取消</a-button>
              </a-form-item>
            </a-form>
          </div>
          <div class="action-btn" v-if="!formsEditStatus[index]" @click.stop>
            <EditOutlined @click.stop="editFormItem(index)" />
            <a-popconfirm title="是否删除？" ok-text="是" cancel-text="否" @confirm.stop="deleteFormItem(index)">
              <DeleteOutlined style="margin-left: 20px" @click.stop />
            </a-popconfirm>
          </div>
        </li>
      </template>
      <li class="flex-center" @click="addClick">
        <div class="item" v-if="addVisible">
          <a-form ref="formRef" class="add-form" :model="formModel" :rules="formRules">
            <a-form-item label="名称" name="title">
              <a-input ref="nameInput" v-model:value="formModel.title" @pressEnter="onSubmit" />
            </a-form-item>
            <a-form-item style="margin-bottom: 0">
              <a-button type="primary" @click.prevent.stop="onSubmit">确认</a-button>
              <a-button style="margin-left: 20px" @click.stop="reset">取消</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="item" v-if="!addVisible">
          <FileAddOutlined style="font-size: 24px" />
          <p>添加表单</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, ref, UnwrapRef } from 'vue';
import { FileAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { uuid } from '@/utils';
import { useRouter } from 'vue-router';
import { formsOptions } from '@/config/drag-form/reactiveFormOptions';

interface FormModelType {
  title: string;
}

export default defineComponent({
  components: {
    FileAddOutlined,
    EditOutlined,
    DeleteOutlined
  },
  setup() {
    const router = useRouter();
    const formRef = ref();
    const nameInput = ref<null | HTMLInputElement>(null);
    const itemInput = ref<null | HTMLInputElement>(null);
    const formsEditStatus = ref<boolean[]>(new Array(formsOptions.value.length).fill(false));
    // 添加显示状态
    const addVisible = ref(false);
    // 添加名字
    const addName = ref('');
    const addClick = () => {
      addVisible.value = true;
      nextTick(() => {
        nameInput.value?.focus();
      });
    };
    const cacheCurrEditName = ref('');

    // 添加部分
    const formModel: UnwrapRef<FormModelType> = reactive({
      title: ''
    });
    const formRules = reactive({
      title: [
        {
          required: true,
          message: '请输入名字'
        }
      ]
    });
    /**
     * 新建和编辑
     */
    const onSubmit = (index?: number) => {
      if (typeof index === 'number') {
        formRef.value.validate().then(() => {
          formsEditStatus.value[index] = false;
          formModel.title = '';
        });
      } else {
        formRef.value.validate().then(() => {
          addVisible.value = false;
          // 新建默认属性
          formsOptions.value.push({
            title: formModel.title,
            _id: uuid(),
            name: '',
            model: 'formModel',
            rules: 'formRules',
            hideRequiredMark: false,
            size: 'default',
            labelAlign: 'right',
            layout: 'horizontal',
            labelCol: { span: 2 },
            colon: true,
            validateOnRuleChange: true,
            scrollToFirstError: false,
            validateTrigger: 'change',
            submitBtns: true,
            confirmText: '提交',
            cancel: false,
            cancelText: '取消',
            reset: true,
            resetText: '重置',
            btnsAlign: 'left',
            suspend: true,
            __attr__: []
          });
          formsEditStatus.value.splice(index!, 0, false);
          formModel.title = '';
        });
      }
    };
    const reset = (index?: number) => {
      if (typeof index === 'number') {
        formsOptions.value[index].title = cacheCurrEditName.value;
        formsEditStatus.value[index] = false;
        cacheCurrEditName.value = '';
      } else {
        addVisible.value = false;
        formRef.value.resetFields();
      }
    };
    const jumpMaking = (id?: string) => {
      router.push(`making/${id}`);
    };

    const editFormItem = (index: number) => {
      const formsValue = formsOptions.value;
      formsEditStatus.value.map(() => false);
      formsEditStatus.value[index] = true;
      cacheCurrEditName.value = formsValue[index].title!;
      formModel.title = formsValue[index].title!;
      nextTick(() => {
        itemInput.value?.focus();
      });
    };
    const currEditInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      formModel.title = value;
    };
    const deleteFormItem = (index: number) => {
      formsOptions.value.splice(index, 1);
      formsEditStatus.value.splice(index, 1);
    };
    return {
      nameInput,
      itemInput,
      addClick,
      addName,
      addVisible,
      reset,
      formRef,
      formModel,
      formRules,
      onSubmit,
      formsOptions,
      formsEditStatus,
      jumpMaking,
      editFormItem,
      currEditInput,
      deleteFormItem
    };
  }
});
</script>

<style lang="less" scoped>
.page-content {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.form-list {
  padding: 20px 40px;
  box-sizing: border-box;
  flex-wrap: wrap;
  li {
    width: calc(20% - 20px);
    height: 170px;
    border: 1px solid @border-color;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.4s;
    overflow: hidden;
    margin: 0 10px 20px;
    position: relative;
    top: 0;
    .item {
      text-align: center;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    .action-btn {
      position: absolute;
      font-size: 20px;
      bottom: 0;
      right: 0;
      padding: 20px;
      box-sizing: border-box;
      cursor: auto;
      .anticon-edit:hover {
        color: @green;
      }
      .anticon-delete:hover {
        color: @red;
      }
    }
    p {
      font-size: 16px;
      margin-top: 10px;
    }
    .btn {
      margin-top: 10px;
    }
    &:hover {
      box-shadow: @shadow-2-down;
      top: -4px;
      transition: all 0.4s;
      .item {
        color: @primary;
      }
      p {
        color: @primary;
      }
    }
  }
}

.add-form {
  width: 100%;
}
</style>
