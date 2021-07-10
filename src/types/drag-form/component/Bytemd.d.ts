export declare interface BytemdOptions {
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
  }>;
}
