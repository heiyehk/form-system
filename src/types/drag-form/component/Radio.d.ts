import { PropsSize } from '../forms';
export declare interface RadioOptions {
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
     * @default ```false```
     */
    autofocus: boolean;
    /**
     * 禁选所有子单选器
     * @default ```false```
     */
    disabled: boolean;
    /**
     * 指定当前是否选中
     * @default ```false```
     */
    checked: boolean;
    /**
     * 输入框内容
     */
    value: any;
    /**
     * 默认选中的值
     */
    defaultValue: any;
    /**
     * RadioGroup 下所有 input[type="radio"] 的 name 属性
     */
    name: string;
    /**
     * 以配置形式设置子元素
     */
    options:
      | string[]
      | {
          label: string;
          value: string;
          disabled?: boolean;
        }[];
    /**
     * 大小，只对按钮样式生效
     */
    size: PropsSize;
    /**
     * RadioButton 的风格样式，目前有描边和填色两种风格
     * @default ```outline```
     */
    buttonStyle: 'outline' | 'solid';
  }>;
}
