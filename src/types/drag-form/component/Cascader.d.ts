import { VNode } from 'vue';
import { PropsSize } from '../forms';

export declare interface Option {
  value: string | number;
  label?: VNode;
  disabled?: boolean;
  children?: Option[];
}

export declare interface CascaderOptions {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  /**
   * 选择后展示的渲染函数,可使用 #displayRender="{labels, selectedOptions}"
   * ```
   * labels => labels.join(' / ')
   * ```
   */
  displayRender: ({ labels, selectedOptions }) => VNode;
  /**
   * 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位
   */
  // getPopupContainer: (triggerNode) => void;
  /**
   * 用于动态加载选项，无法与 `showSearch` 一起使用
   */
  // loadData: (selectedOptions) => void;
  /**
   * 可选项数据源
   */
  options: {
    value: string | number;
    label?: VNode;
    disabled?: boolean;
    children?: Option[];
  }[];
  /**
   * 自定义的选择框后缀图标
   */
  // suffixIcon: string | VNode | slot
  /**
   * 绑定的props
   */
  props: Partial<{
    /**
     * 是否展示清除按钮
     */
    allowClear: boolean;
    /**
     * 自动获取焦点
     */
    autofocus: boolean;
    /**
     * 当此项为 `true` 时，点选每级菜单选项值都会发生变化，具体见上面的演示
     */
    changeOnSelect: boolean;
    /**
     * 	默认的选中项
     */
    defaultValue: string;
    /**
     * 是否禁用状态，默认为 `false`
     */
    disabled: boolean;
    /**
     * 最大长度
     */
    maxlength: number;
    /**
     * 次级菜单的展开方式，可选 `click` 和 `hover`
     */
    expandTrigger: 'click' | 'hover';
    /**
     * 自定义 options 中 label name children 的字段
     */
    fieldNames: {
      label: string;
      value: string;
      children: string;
    };
    /**
     * 当下拉列表为空时显示的内容
     * @default ```Not Found```
     */
    notFoundContent: string;
    /**
     * 输入框占位文本
     * @default ```请选择```
     */
    placeholder: string;
    /**
     * 自定义浮层类名
     */
    popupClassName: string;
    /**
     * 自定义浮层样式
     */
    popupStyle: Record<any, any>;
    /**
     * 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight`
     */
    popupPlacement: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
    /**
     * 控制浮层显隐
     */
    popupVisible: boolean;
    /**
     * 在选择框中显示搜索框
     */
    showSearch: boolean | Record<any, any>;
    /**
     * 输入框大小，可选 `large` `default` `small`
     */
    size: PropsSize;
    /**
     * 输入框内容
     */
    value: string;
  }>;
}
