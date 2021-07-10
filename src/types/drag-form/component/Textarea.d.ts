import { PropsSize } from '../forms';
export declare interface TextareaOptions {
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
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 最大长度
     */
    maxlength: number;
    /**
     * 输入框内容
     */
    value: string;
    /**
     * 是否展示清除按钮
     */
    allowClear: boolean;
    /**
     * 自适应内容高度，可设置为 `true | false` 或对象：`{ minRows: 2, maxRows: 6 }`
     */
    autoSize:
      | boolean
      | Partial<{
          minRows: number;
          maxRows: number;
        }>;
    /**
     * 是否展示字数
     */
    showCount: boolean;
    /**
     * 占位符
     */
    placeholder: string;
    /**
     * 组件大小
     */
    size: PropsSize;
  }>;
}
