import { PropsSize } from '../forms';

export declare interface CheckboxOptions {
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
     * @default ```flase```
     */
    autofocus: boolean;
    /**
     * 指定当前是否选中
     * @default ```false```
     */
    checked: boolean;
    /**
     * 失效状态
     * @default ```false```
     */
    disabled: boolean;
    /**
     * 设置 indeterminate 状态，只负责样式控制
     * @default ```false```
     */
    indeterminate: boolean;
    /**
     * 输入框大小，可选 `large` `default` `small`
     * @default ```default```
     */
    size: PropsSize;
    /**
     * 输入框内容
     */
    value: boolean;
    options:
      | string[]
      | {
          label: string;
          value: string;
          disabled?: boolean;
          indeterminate?: boolean;
          onChange?: () => void;
        }[];
  }>;
}
