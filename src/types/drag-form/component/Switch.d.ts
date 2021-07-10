import { PropsSize } from '../forms';

export declare interface SwitchOptions {
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
     * 组件自动获取焦点
     * @default ```false```
     */
    autofocus: boolean;
    /**
     * 指定当前是否选中
     * @default ```false```
     */
    checked: boolean;
    /**
     * 选中时的内容
     */
    checkedChildren: string | slot;
    /**
     * 是否禁用
     * @default ```false```
     */
    disabled: boolean;
    /**
     * 加载中的开关
     * @default ```false```
     */
    loading: boolean;
    /**
     * 开关大小，可选值：`large` | `default` | `small`
     */
    size: PropsSize;
    /**
     * 输入框内容
     */
    value: boolean;
    /**
     * 非选中时的内容
     */
    unCheckedChildren: string | slot;
  }>;
}
