export declare interface InputPasswordOptions {
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
