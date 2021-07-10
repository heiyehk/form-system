import { PropsSize } from '../forms';
export declare interface InputOptions {
  /**
   * 带有前缀图标的 `input`
   */
  prefix: string;
  /**
   * 带有后缀图标的 input
   */
  suffix: string;
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
     * 带标签的 input，设置后置标签
     */
    addonAfter: string;
    /**
     * addonBefore
     */
    addonBefore: string;
    /**
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 最大长度
     */
    maxlength: number;
    /**
     * 控件大小
     * @default ```default```
     */
    size: PropsSize;
    /**
     * 输入框内容
     */
    value: string;
    /**
     * 是否展示清除按钮
     */
    allowClear: boolean;
    /**
     * 占位符
     */
    placeholder: string;
  }>;
}
