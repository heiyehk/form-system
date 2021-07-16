<template>
  <div class="input-options">
    <template v-for="(item, index) in arrayRes" :key="index">
      <a-row class="input-options-row">
        <a-col :span="20">
          <a-input :placeholder="placeholder" v-model:value="arrayRes[index]" />
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
import { defineComponent, ref, computed, watch, PropType } from 'vue';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    PlusCircleOutlined,
    MinusCircleOutlined
  },
  emits: ['update:value'],
  props: {
    value: {
      type: Array as PropType<string[]>
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  setup(props, { emit }) {
    let arrayRes = ref<string[]>([]);
    if (!props.value) {
      arrayRes.value.push('');
    } else {
      arrayRes.value = props.value!;
    }
    let arrayResLen = computed(() => arrayRes.value.length);
    const addItem = () => {
      const lastStr = arrayRes.value[arrayResLen.value - 1];
      if (lastStr !== '') {
        arrayRes.value.push('');
      }
    };
    const delItem = (index: number) => {
      arrayRes.value.splice(index, 1);
    };
    // 对象
    const emitRes = computed(() => {
      let arr: (string | number | boolean | null)[] = [];
      for (const value of arrayRes.value) {
        const charjs = ['null', 'undefined', 'false', 'true'];
        if (value && /^[0-9]*$/.test(value)) {
          arr.push(Number(value));
        } else if (charjs.includes(value)) {
          arr.push(eval(charjs[charjs.indexOf(value)]));
        } else {
          arr.push(value);
        }
      }
      return arr;
    });
    // 数组
    watch(arrayRes.value, () => {
      emit('update:value', emitRes.value);
    });
    return {
      arrayRes,
      arrayResLen,
      addItem,
      delItem,
      emitRes
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
