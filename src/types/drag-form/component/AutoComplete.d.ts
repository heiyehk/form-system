import { Slot, VNode } from 'vue';

export declare interface AutoCompleteOptions {
  /**
   * 是否显示标签label
   */
  label: boolean;
  /**
   * 组件宽度
   */
  wrapperColSpan: number;
  // 自定义输入框
  // #default
  props: Partial<{
    /**
     * 支持清除, 单选模式有效
     */
    allowClear: boolean;
    /**
     * 自动获取焦点
     */
    autofocus: boolean;
    /**
     * 使用键盘选择选项的时候把选中项回填到输入框中
     */
    backfill: boolean;
    /**
     * 自动完成的数据源
     * - slot | [DataSourceItemType](https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9)[]
     */
    options: Slot | { value: string; text: string }[];
    /**
     * 是否禁用
     */
    disabled: boolean;
    /**
     * 是否默认高亮第一个选项。
     * @default
     * ```true```
     */
    defaultActiveFirstOption: boolean;
    /**
     * 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。
     * @default
     * ```true```
     */
    filterOption: boolean | ((inputValue: string, option: Slot | { value: string; text: string }[]) => boolean);
    /**
     * 是否默认展开下拉菜单
     */
    defaultOpen: boolean;
    /**
     * 是否展开下拉菜单
     */
    open: boolean;
    /**
     * 占位符
     */
    placeholder: string;
    /**
     * 	指定当前选中的条目
     */
    value: string | string[] | { key: string; label: string | VNode } | Array<{ key: string; label: string | vNodes }>;
  }>;
}
