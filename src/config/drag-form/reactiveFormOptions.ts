import { FormOptions } from '@/types/drag-form/forms';
import { ref, watch } from 'vue';

const formsOptions = ref<FormOptions[]>([]);

// 加载本地表单
const localForms = localStorage.getItem('forms');
if (localForms) {
  formsOptions.value = formsOptions.value = JSON.parse(localForms);
}
watch(
  () => formsOptions.value,
  (nv) => {
    localStorage.setItem('forms', JSON.stringify(nv));
  },
  {
    deep: true
  }
);

/**
 * 通过当前制作的id获取当前表单
 * @param {string} id
 * @returns {FormItemComponentAttr} FormItemComponentAttr
 */
const getMakingIdFormAttr = (id: string) => formsOptions.value.filter((item) => item.id === id)[0];

export { formsOptions, getMakingIdFormAttr };
