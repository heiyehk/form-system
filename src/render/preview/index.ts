import { getMakingIdFormAttr } from '@/config/drag-form/reactiveFormOptions';
import { template } from './template';
import { script } from './script';
import { style } from './style';

/**
 * 获取当前表单
 */
const currentIdFormAttr = getMakingIdFormAttr(location.hash.split('/')[3]);

const VueTemplate = () => template(currentIdFormAttr) + script(currentIdFormAttr) + style();

export default VueTemplate;
