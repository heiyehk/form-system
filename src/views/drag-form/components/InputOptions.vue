<template>
  <div class="input-options">
    <template v-for="(item, index) in arrayRes" :key="index">
      <a-row class="input-options-row">
        <a-col :span="9">
          <a-input :placeholder="oneplaceholder" v-model:value="item.label" />
        </a-col>
        <a-col :span="2">
          <div class="segmentation-box flex-center">
            <span class="segmentation">—</span>
          </div>
        </a-col>
        <a-col :span="9">
          <a-input :placeholder="twoplaceholder" v-model:value="item.value" />
        </a-col>
        <a-col :span="1"> </a-col>
        <a-col :span="2" v-if="arrayResLen - 1 === index">
          <a-button class="flex-center input-options-btn" @click="addItem">
            <template #icon>
              <PlusCircleOutlined class="success" />
            </template>
          </a-button>
        </a-col>
        <a-col :span="2" v-else>
          <a-button class="flex-center input-options-btn" @click="delItem(index)">
            <template #icon>
              <MinusCircleOutlined class="error" />
            </template>
          </a-button>
        </a-col>
      </a-row>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, watch } from 'vue';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons-vue';

interface CompInputOptions {
  label: string;
  value: string;
}

export default defineComponent({
  components: {
    PlusCircleOutlined,
    MinusCircleOutlined
  },
  emits: ['update:value'],
  props: {
    value: {
      type: [Object, Array] as PropType<Record<string, any> | CompInputOptions[]>
    },
    oneplaceholder: {
      type: String,
      default: '请输入内容'
    },
    twoplaceholder: {
      type: String,
      default: '请输入内容'
    }
  },
  setup(props, { emit }) {
    console.log(props.value);
    let arrayRes = ref<CompInputOptions[]>([]);
    if (!props.value) {
      arrayRes.value.push({
        label: '',
        value: ''
      });
    } else {
      if (typeof props.value === 'object') {
        for (const key of Object.keys(props.value!)) {
          arrayRes.value.push({
            label: key,
            value: (props.value as Record<string, any>)[key]
          });
        }
      }
    }
    let arrayResLen = computed(() => arrayRes.value.length);
    const addItem = () => {
      const lastArr = arrayRes.value[arrayResLen.value - 1];
      if (lastArr.label !== '' && lastArr.value !== '') {
        arrayRes.value.push({
          label: '',
          value: ''
        });
      }
    };
    const delItem = (index: number) => {
      arrayRes.value.splice(index, 1);
    };
    // 对象
    const objectRes = computed(() => {
      let obj: Record<string, any> = {};
      for (const item of arrayRes.value) {
        const { label, value } = item;
        const charjs = ['null', 'undefined', 'false', 'true'];
        if (value && /^[0-9]*$/.test(value)) {
          obj[label] = Number(value);
        } else if (charjs.includes(value)) {
          obj[label] = eval(charjs[charjs.indexOf(value)]);
        } else {
          obj[label] = value;
        }
      }
      return obj;
    });
    // 数组
    watch(arrayRes.value, () => {
      emit('update:value', objectRes.value);
    });
    return {
      arrayRes,
      arrayResLen,
      addItem,
      delItem,
      objectRes
    };
  }
});
</script>

<style lang="less" scoped>
.segmentation-box {
  height: 100%;
  font-size: 12px;
}
.input-options {
  &-row {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .anticon {
    font-size: 18px;
    cursor: pointer;
    border-radius: 100%;
  }
}
</style>
