import { Slot } from 'vue';

export declare interface RateOptions {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  /**
   * 绑定的props
   */
  props: Partial<{
    /**
     * 是否允许再次点击后清除
     * @default ```true```
     */
    allowClear: boolean;
    /**
     * 是否允许半选 ```false```
     */
    allowHalf: boolean;
    /**
     * 自动获取焦点
     * @default ```false```
     */
    autofocus: boolean;
    /**
     * 自定义字符
     */
    character: string | Slot;
    /**
     * star 总数
     * @default ```5```
     */
    count: number;
    /**
     * 是否禁用
     * @default ```false```
     */
    disabled: boolean;
    // TODO
    /**
     * 自定义每项的提示信息
     */
    tooltips: string[];
    /**
     * 输入框内容
     */
    value: number;
  }>;
}
