import { PropsSize } from '../forms';
export declare interface SelectOptions {
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
     * 支持清除
     * @default ```false```
     */
    allowClear: boolean;
    /**
     * 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效。
     */
    autoClearSearchValue: boolean;
    /**
     * 默认获取焦点
     * @default ```false```
     */
    autofocus: boolean;
    /**
     * 是否有边框
     * @default ```true```
     */
    bordered: boolean;
    /**
     * 是否默认高亮第一个选项。
     * @default ```true```
     */
    defaultActiveFirstOption: boolean;
    /**
     * 是否禁用
     * @default ```false```
     */
    disabled: boolean;
    /**
     * 下拉菜单的 `className` 属性
     */
    dropdownClassName: string;
    /**
     * 下拉菜单和选择器同宽
     */
    dropdownMatchSelectWidth: boolean;
    /**
     * 自定义下拉框内容
     */
    // dropdownRender
    /**
     * 下拉菜单的 style 属性
     */
    dropdownStyle: Record<any, any>;
    /**
     * dropdown 菜单自定义样式
     */
    dropdownMenuStyle: Record<any, any>;
    /**
     * 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false。`
     */
    // filterOption: boolean | ((inputValue: string, option: Record<any, any>) => void);
    /**
     * 默认高亮的选项
     */
    firstActiveValue: string | string[];
    /**
     * 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。
     */
    // getPopupContainer: () => void;
    /**
     * 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式
     */
    labelInValue: boolean;
    /**
     * 最多显示多少个 tag
     */
    maxTagCount: number;
    /**
     * 隐藏 tag 时显示的内容
     */
    // maxTagPlaceholder
    /**
     * 最大显示的 tag 文本长度
     */
    maxTagTextLength: number;
    /**
     * 设置 Select 的模式为多选或标签
     */
    mode?: 'multiple' | 'tags' | 'combobox';
    /**
     * 当下拉列表为空时显示的内容
     * @default ```	Not Found ```
     */
    notFoundContent: string | slot;
    /**
     * 搜索时过滤对应的 option 属性，不支持 children
     */
    optionFilterProp: string;
    /**
     * 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。
     */
    optionLabelProp: string | slot;
    /**
     * 选择框默认文字
     */
    placeholder: string;
    /**
     * 使单选模式可搜索
     */
    showSearch: boolean;
    /**
     * 是否显示下拉小箭头
     * @default ```true```
     */
    showArrow: boolean;
    /**
     * 选择框大小
     */
    size: PropsSize;
    /**
     * 自定义的选择框后缀图标
     */
    // suffixIcon:
    /**
     * 自定义的多选框清除图标
     */
    // removeIcon
    /**
     * 	自定义的多选框清空图标
     */
    // clearIcon
    /**
     * 自定义当前选中的条目图标
     */
    // menuItemSelectedIcon
    /**
     * 在 tags 和 multiple 模式下自动分词的分隔符
     */
    // tokenSeparators
    /**
     * 输入框内容
     */
    value: string | string[] | number | number[];
    /**
     * options 数据，如果设置则不需要手动构造 selectOption 节点
     */
    options: ({
      value: any;
      label: any;
    } & Partial<{
      disabled: boolean;
      title: string;
      key: any;
    }>)[];
    /**
     * 是否默认展开下拉菜单
     */
    defaultOpen: boolean;
    /**
     * 是否展开下拉菜单
     */
    open: boolean;
  }>;
}
