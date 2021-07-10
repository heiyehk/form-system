import { OptionProps } from 'ant-design-vue/lib/select';

export declare type MentionsOptions = {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  props: Partial<{
    /**
     * 自动获得焦点
     */
    autofocus: boolean;
    /**
     * 输入框的高度
     */
    rows: string | number;
    /**
     * 默认值
     */
    defaultValue: string;
    /**
     * 自定义过滤逻辑
     */
    filterOption: boolean | ((input: string, option: OptionProps) => boolean);
    /**
     * 当下拉列表为空时显示的内容
     */
    notFoundContent: any;
    /**
     * 弹出层展示位置
     * @default ```bottom```
     */
    placement: 'top' | 'bottom';
    /**
     * 设置触发关键字
     * @default
     * ```@```
     */
    prefix: string | string[];
    /**
     * 设置选中项前后分隔符
     */
    split: string;
    /**
     * 设置值
     */
    value: string;
    /**
     * 占位符
     */
    placeholder: string;
  }>;
};
