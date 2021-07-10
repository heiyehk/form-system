import { PropsSize } from '../forms';

export declare interface InputNumberOptions {
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
     * 自动获取焦点
     */
    autofocus: boolean;
    /**
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 最大值
     */
    max: number;
    /**
     * 最小值
     */
    min: number;
    /**
     * 数值精度
     */
    precision: number;
    /**
     * 小数点
     */
    decimalSeparator: string;
    /**
     * 最大长度
     */
    maxlength: number;
    /**
     * 组件大小
     */
    size: PropsSize;
    /**
     * 每次改变步数，可以为小数
     */
    step: string | number;
    /**
     * 输入框内容
     */
    value: string;
    /**
     * 占位符
     */
    placeholder: string;
  }>;
}
